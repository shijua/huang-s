import { existsSync, readFileSync } from "node:fs";
import path from "node:path";

export interface MicrostoreItem {
  id: string;
  sku: string;
  name: string;
  category: string | null;
  price: string | null;
  material: string | null;
  image: string;
  sourceImage: string;
  shelvedAt: string | null;
}

export interface MicrostoreFeed {
  source: string;
  syncedAt: string;
  areaName: string;
  areaType: string;
  totalAvailable: number;
  count: number;
  items: MicrostoreItem[];
}

const FEED_FILE = path.join(
  process.cwd(),
  "content",
  "microstore-feed.json"
);

export function getMicrostoreFeed(): MicrostoreFeed | null {
  if (!existsSync(FEED_FILE)) return null;
  try {
    return JSON.parse(readFileSync(FEED_FILE, "utf8")) as MicrostoreFeed;
  } catch {
    return null;
  }
}
