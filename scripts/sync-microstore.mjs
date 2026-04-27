#!/usr/bin/env node
import {
  writeFileSync,
  mkdirSync,
  existsSync,
  statSync,
  readdirSync,
  unlinkSync,
} from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const COMPANY_ID = "2978";
const API_URL = `https://v2.microstore.app/api/v2/companies/${COMPANY_ID}/goods/areas`;
const LIMIT = Number(process.env.SYNC_LIMIT ?? 4);
const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const FEED_FILE = join(ROOT, "content", "microstore-feed.json");
const IMG_DIR = join(ROOT, "public", "microstore");
const PUBLIC_PREFIX = "/microstore";

const UA =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 " +
  "(KHTML, like Gecko) Version/17.0 Safari/605.1.15";

async function main() {
  console.log(`→ Fetching ${API_URL}`);
  const res = await fetch(API_URL, {
    headers: {
      "User-Agent": UA,
      Accept: "application/json, text/plain, */*",
      Referer: "https://lua.microstore.app/",
      Origin: "https://lua.microstore.app",
    },
  });
  if (!res.ok) throw new Error(`API failed: HTTP ${res.status}`);
  const data = await res.json();

  const newArea = data.goodsAreas?.find((a) => a.type === "new");
  if (!newArea) throw new Error("No 'new' area found in API response");
  const allItems = newArea.items ?? [];
  if (allItems.length === 0) throw new Error("New area has no items");

  const items = allItems.slice(0, LIMIT).map((it) => {
    const sku0 = it.skus?.[0] ?? {};
    const rawImg =
      sku0.img || sku0.imgs?.[0] || sku0.images?.[0] || it.img || "";
    const sourceImage = rawImg.split("?")[0];
    const idMatch = sourceImage.match(/MS_([a-f0-9]+)\./);
    const imgId = idMatch?.[1] ?? String(it.goodsId);
    const filename = `MS_${imgId}.jpg`;
    return {
      id: String(it.goodsId),
      sku: it.itemRef ?? "",
      name: (it.name ?? "").trim(),
      category: it.cat1Name ?? null,
      price: it.price ?? null,
      material: it.remarkMaterial ?? null,
      image: `${PUBLIC_PREFIX}/${filename}`,
      sourceImage,
      shelvedAt: it.firstShelvesTime
        ? new Date(it.firstShelvesTime).toISOString()
        : null,
      filename,
    };
  });

  console.log(
    `→ Found area "${newArea.name}" (${newArea.includedItemsCount} total), taking top ${items.length}`
  );
  mkdirSync(IMG_DIR, { recursive: true });

  let downloaded = 0;
  let skipped = 0;
  for (const item of items) {
    const localPath = join(IMG_DIR, item.filename);
    if (existsSync(localPath) && statSync(localPath).size > 0) {
      skipped++;
      continue;
    }
    const hiRes = item.sourceImage + "?x-oss-process=image/resize,w_900";
    const imgRes = await fetch(hiRes, { headers: { "User-Agent": UA } });
    if (!imgRes.ok) {
      console.warn(`  ✗ ${item.filename} HTTP ${imgRes.status}`);
      continue;
    }
    const buf = Buffer.from(await imgRes.arrayBuffer());
    writeFileSync(localPath, buf);
    downloaded++;
    process.stdout.write(
      `  ↓ ${item.filename} (${(buf.length / 1024).toFixed(0)}kb)\n`
    );
  }

  const keepFiles = new Set(items.map((i) => i.filename));
  let pruned = 0;
  for (const file of readdirSync(IMG_DIR)) {
    if (!file.startsWith("MS_")) continue;
    if (keepFiles.has(file)) continue;
    unlinkSync(join(IMG_DIR, file));
    pruned++;
  }

  const feed = {
    source: API_URL,
    syncedAt: new Date().toISOString(),
    areaName: newArea.name,
    areaType: newArea.type,
    totalAvailable: newArea.includedItemsCount,
    count: items.length,
    items: items.map(({ filename, ...rest }) => rest),
  };
  mkdirSync(dirname(FEED_FILE), { recursive: true });
  writeFileSync(FEED_FILE, JSON.stringify(feed, null, 2) + "\n");

  console.log(
    `✓ Done. ${downloaded} downloaded, ${skipped} cached, ${pruned} pruned. Manifest → ${FEED_FILE}`
  );

  await triggerRevalidate({ downloaded, pruned });
}

async function triggerRevalidate({ downloaded, pruned }) {
  const siteUrl = process.env.SITE_URL;
  const secret = process.env.REVALIDATE_SECRET;
  if (!siteUrl || !secret) {
    console.log("→ Revalidate skipped (SITE_URL or REVALIDATE_SECRET not set)");
    return;
  }
  if (downloaded === 0 && pruned === 0) {
    console.log("→ Revalidate skipped (no content change)");
    return;
  }
  try {
    const url = `${siteUrl.replace(/\/$/, "")}/api/revalidate?secret=${encodeURIComponent(secret)}`;
    const res = await fetch(url, { method: "POST" });
    const body = await res.text();
    console.log(`→ Revalidate: HTTP ${res.status} ${body.slice(0, 200)}`);
  } catch (err) {
    console.warn(`✗ Revalidate request failed: ${err.message}`);
  }
}

main().catch((err) => {
  console.error("✗", err.message);
  process.exit(1);
});
