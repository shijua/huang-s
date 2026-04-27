# Microstore Sync — Operations Guide

`scripts/sync-microstore.mjs` calls the public microstore JSON API
`https://v2.microstore.app/api/v2/companies/2978/goods/areas`, finds the
zone with `type: "new"` (NOVIDADES on the live site), takes the top N
(`SYNC_LIMIT`, default `4`) items, downloads each item's primary image
into `public/microstore/`, and writes a manifest with full product metadata
(SKU, name, price, category, material) to `content/microstore-feed.json`.
Each run also prunes any older `MS_*.jpg` not in the current top-N.

Both output paths are gitignored. Each environment (local dev, production
server) maintains its own mirror.

To sync a different number of items: `SYNC_LIMIT=8 pnpm sync:store`.

The API endpoint is **unauthenticated** — anyone can fetch it. The 403 you
get with `?fromHomepage=true` appended is incidental; the bare path works.
Microstore could change this without notice; if HTTP 403 / 401 starts
appearing in cron logs, the fallback is a headless-browser scrape.

## Local

```bash
pnpm sync:store          # one-off run
ls public/microstore     # ~50 jpg files
cat content/microstore-feed.json | jq .count
```

## Production server (cron, daily with jitter)

### 0. Prerequisites

If the server is fresh (no Node.js, no project), do these once:

```bash
# Install Node.js 20 (Debian/Ubuntu)
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo bash -
sudo apt-get install -y nodejs
node --version           # → v20.x

# Enable pnpm via Corepack (bundled with Node 20)
sudo corepack enable

# Pull the project (from your local machine)
rsync -avz --exclude=node_modules --exclude=.next \
  ~/Desktop/project/self/huangs/ server:~/huang-s/

# Install + build on the server
ssh server 'cd ~/huang-s && pnpm install && pnpm build'
```

### 1. Test the script manually

```bash
ssh server 'cd ~/huang-s && node scripts/sync-microstore.mjs'
```

You should see `Synced N items → /root/huang-s/content/microstore-feed.json`
and roughly 50 `MS_*.jpg` files in `~/huang-s/public/microstore/`.

### 2. Schedule cron

```bash
ssh server 'crontab -e'
```

Add this line (daily at 04:00 server time UTC + a random 0–60 min jitter):

```cron
0 4 * * * sleep $((RANDOM \% 3600)) && cd /root/huang-s && /usr/bin/node scripts/sync-microstore.mjs >> /var/log/sync-microstore.log 2>&1
```

The `sleep $((RANDOM \% 3600))` part adds 0–3600 random seconds before the
sync runs, so the actual fire time is somewhere between 04:00 and 05:00 UTC.
This avoids hitting the microstore API at exactly the same minute every day
(cleaner traffic pattern, harder to fingerprint as a bot).

Notes:
- `\%` is required — bare `%` inside a crontab line is treated as a newline
  separator and would break the command. Always escape it.
- `$RANDOM` is a bash builtin (0–32767). Cron usually invokes `/bin/sh`
  which on Debian is `dash` and **does not have `$RANDOM`** — so wrap the
  whole command in bash if your cron uses dash:
  ```cron
  0 4 * * * /bin/bash -c 'sleep $((RANDOM \% 3600)) && cd /root/huang-s && /usr/bin/node scripts/sync-microstore.mjs >> /var/log/sync-microstore.log 2>&1'
  ```
  Check with `ls -l /bin/sh` — if it points to `dash`, use the bash wrapper.

If `which node` reports a different path (e.g. nvm install), substitute it.
Avoid bare `node` in cron — cron's `$PATH` is minimal and won't find it.

### 3. Verify

```bash
ssh server 'crontab -l'                              # confirm the line is there
ssh server 'tail -50 /var/log/sync-microstore.log'   # next morning, check output
ssh server 'ls -lt /root/huang-s/public/microstore | head'   # newest mtimes
```

A successful run logs:

```
→ Fetching https://lua.microstore.app/
→ Found 54 unique products
✓ Done. 0 downloaded, 54 cached. Manifest → ...
```

`0 downloaded, 54 cached` is normal once the mirror has caught up — only
genuinely new SKUs are fetched on subsequent runs.

### 4. Live serving — on-demand revalidation

The site uses Next.js on-demand revalidation: pages stay statically cached
until something genuinely changes, at which point cron pings a webhook and
the cache is dropped exactly when needed. No timed background regeneration,
no per-request file reads.

**Flow on cron tick:**

1. Sync writes new `MS_*.jpg` and `microstore-feed.json`
2. If at least one image was downloaded or pruned, sync POSTs to
   `${SITE_URL}/api/revalidate?secret=...`
3. The endpoint calls `revalidatePath('/${locale}')` for each locale
4. Next visitor (any locale homepage) re-renders fresh; everyone after sees
   the cache build for free

**Configure on the server:**

Add two env vars to the cron entry:

```cron
0 4 */3 * * cd /root/huang-s && SITE_URL=https://huangs.pt REVALIDATE_SECRET=<random-string> /usr/bin/node scripts/sync-microstore.mjs >> /var/log/sync-microstore.log 2>&1
```

And the same `REVALIDATE_SECRET` in the Next.js process env so the endpoint
can verify it. Generate one with `openssl rand -hex 32`. Keep it secret —
anyone with the value can force a revalidation (low impact, but still).

If the env vars are absent, sync logs `→ Revalidate skipped` and exits
normally — no error. Useful for local dev where there's no live site to
notify. If only static images change but the top-N list is identical
(`0 downloaded, 0 pruned`), sync also skips the revalidate call — no
content change, no need to invalidate cache.

`public/microstore/*.jpg` is always served fresh off disk by `next start`,
regardless of cache state.

## Troubleshooting

| Symptom | Likely cause | Fix |
|---|---|---|
| `node: not found` in cron log | cron `$PATH` doesn't include node | Use absolute path; run `which node` to find it |
| `Permission denied: /var/log/sync-microstore.log` | cron user can't write that file | Change to `~/sync-microstore.log` or `chown root /var/log/sync-microstore.log` |
| `Error: No products parsed — microstore HTML may have changed` | Microstore SaaS template changed | Re-inspect HTML, update `productImgPattern` regex in the script |
| HTTP 403 / 429 from microstore | Hotlink protection or rate limit | Add `Referer: https://lua.microstore.app/` header in fetch options |
| Cron silent / no log file | cron daemon not running | `systemctl status cron` (or `cronie`); enable + start |

## Pause / disable

```bash
ssh server 'crontab -e'    # comment out or delete the line
```

Pruning is automatic: each sync deletes any `MS_*.jpg` in
`public/microstore/` not in the current top-N, so disk usage stays bounded.
