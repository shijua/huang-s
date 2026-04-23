# HUANG'S

B2B display site for **Lua Cintilante Unipessoal Lda** (HUANG'S), a Portuguese women's fashion wholesaler. Display-only — all purchase actions deep-link to the external [microstore](https://lua.microstore.app/#/shopMain).

Stack: Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · next-intl (pt / en / zh).

## Requirements

- Node.js ≥ 20
- pnpm 10 (pinned via `packageManager` in [package.json](package.json))

## Setup

```bash
pnpm install
cp .env.example .env.local   # then edit values if needed
```

Environment variables (all optional — defaults in [lib/site.ts](lib/site.ts)):

| Variable | Default | Purpose |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | `https://huangs.pt` | Canonical site origin used in metadata |
| `NEXT_PUBLIC_STORE_URL` | `https://lua.microstore.app/#/shopMain` | External storefront deep-link target |
| `NEXT_PUBLIC_CONTACT_EMAIL` | `huangssuporte@outlook.com` | Shown on contact page / footer |

## Scripts

| Command | What it does |
|---|---|
| `pnpm dev` | Start dev server at http://localhost:3000 |
| `pnpm build` | Production build |
| `pnpm start` | Serve the production build |
| `pnpm lint` | Run Next.js / ESLint checks |
| `pnpm typecheck` | `tsc --noEmit` |

## Project layout

```
app/
  [locale]/        # i18n-scoped routes (pt default, en, zh)
  globals.css      # Tailwind v4 @theme tokens
content/
  products/        # Product data — one folder per product with product.json + images
lib/
  site.ts          # Brand config (name, contact, store URLs)
  products.ts      # Filesystem-backed product loader
  i18n/            # next-intl routing + config
messages/
  {pt,en,zh}.json  # Translation strings
public/brand/      # logos and compressed brand photography assets
  *.webp           # public brand visuals used by components/brand/brand-visual.tsx
public/products/   # compressed product photography grouped by product slug
.asset-staging/    # ignored holding area for raw / unused image candidates
design.md          # Complete design system reference
```

## Brand imagery

Brand photography is centralized in [components/brand/brand-visual.tsx](components/brand/brand-visual.tsx).

| Variant | Asset | Used for |
|---|---|---|
| `hero` | `public/brand/visual-landscape-olive-rail.webp` | Homepage hero |
| `story` | `public/brand/visual-landscape-jeans.webp` | Homepage brand story |
| `wide` | `public/brand/visual-landscape-storefront.webp` | About page company exterior |
| `contact` | `public/brand/visual-landscape-shelves.webp` | Contact page visual |

Keep raw camera files and rejected candidates out of `public/brand/`. Put them in `.asset-staging/brand-unused/`, which is ignored by git. Public brand images should be compressed WebP derivatives; when replacing a live image, prefer a new filename to avoid stale `next/image` / browser cache.

## Adding a product

1. Create `content/products/<slug>/product.json` following the shape in [lib/products.ts](lib/products.ts) (`Product` interface).
2. Drop compressed product images into `public/products/<slug>/` and reference them in `product.json`.
3. The loader picks them up at build time — no registration needed.

## i18n

Routing uses `localePrefix: "as-needed"` — Portuguese is default and has no prefix, English lives at `/en/*`, Chinese at `/zh/*`. Add new strings to all three files in [messages/](messages/).
