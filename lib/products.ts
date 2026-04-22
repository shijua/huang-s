import { existsSync, readdirSync, readFileSync } from "node:fs";
import path from "node:path";
import type { Locale } from "./i18n/config";

export type Localized = Record<Locale, string>;

export const PRODUCT_CATEGORIES = [
  "outerwear",
  "dresses",
  "shirts",
  "skirts",
  "knitwear",
  "trousers",
  "accessories",
] as const;

export type ProductCategory = (typeof PRODUCT_CATEGORIES)[number];

export interface Product {
  slug: string;
  sku: string;
  name: Localized;
  category: ProductCategory;
  description: Localized;
  materials: Localized;
  care: Localized;
  colors: string[];
  sizes: string[];
  images: string[];
  storePath?: string;
  isNew: boolean;
  featured: boolean;
  releasedAt: string;
}

const PRODUCTS_DIR = path.join(process.cwd(), "content", "products");
const PUBLIC_DIR = path.join(process.cwd(), "public");
const DEFAULT_PRODUCT_IMAGE = "/brand/logo.jpg";
const PRODUCT_CATEGORY_SET = new Set<string>(PRODUCT_CATEGORIES);

function readProductFile(filePath: string): Product {
  const product = JSON.parse(readFileSync(filePath, "utf8")) as Product;

  if (!product.slug || !PRODUCT_CATEGORY_SET.has(product.category)) {
    throw new Error(`Invalid product file: ${filePath}`);
  }

  return {
    ...product,
    images: resolveProductImages(product.images ?? []),
  };
}

function resolveProductImages(images: string[]): string[] {
  const resolved = images.map((image) =>
    isAvailableProductImage(image) ? image : DEFAULT_PRODUCT_IMAGE
  );

  const unique = Array.from(new Set(resolved));
  return unique.length > 0 ? unique : [DEFAULT_PRODUCT_IMAGE];
}

function isAvailableProductImage(image: string): boolean {
  if (!image.startsWith("/")) return true;
  if (image === DEFAULT_PRODUCT_IMAGE) return true;

  return existsSync(path.join(PUBLIC_DIR, image));
}

function loadProducts(): Product[] {
  if (!existsSync(PRODUCTS_DIR)) return [];

  return readdirSync(PRODUCTS_DIR, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => path.join(PRODUCTS_DIR, entry.name, "product.json"))
    .filter((filePath) => existsSync(filePath))
    .map(readProductFile);
}

const products = loadProducts();

export function getAllProducts(): Product[] {
  return [...products].sort(
    (a, b) =>
      new Date(b.releasedAt).getTime() - new Date(a.releasedAt).getTime()
  );
}

export function getFeaturedProducts(limit = 4): Product[] {
  return getAllProducts()
    .filter((p) => p.featured)
    .slice(0, limit);
}

export function getNewArrivals(limit = 4): Product[] {
  return getAllProducts()
    .filter((p) => p.isNew)
    .slice(0, limit);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getRelatedProducts(slug: string, limit = 4): Product[] {
  const source = getProductBySlug(slug);
  if (!source) return [];
  return getAllProducts()
    .filter((p) => p.slug !== slug && p.category === source.category)
    .slice(0, limit);
}

export function buildStoreUrl(product: Product, storeBaseUrl: string): string {
  if (!product.storePath) return storeBaseUrl;
  return `${storeBaseUrl.replace(/\/$/, "")}${product.storePath}`;
}
