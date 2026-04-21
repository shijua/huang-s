import rawProducts from "@/content/products/products.json";
import type { Locale } from "./i18n/config";

export type Localized = Record<Locale, string>;

export type ProductCategory =
  | "outerwear"
  | "dresses"
  | "shirts"
  | "skirts"
  | "knitwear"
  | "trousers"
  | "accessories";

export interface Product {
  slug: string;
  sku: string;
  name: Localized;
  category: ProductCategory;
  description: Localized;
  materials: string;
  care: string;
  colors: string[];
  sizes: string[];
  images: string[];
  storePath?: string;
  isNew: boolean;
  featured: boolean;
  releasedAt: string;
}

const products = rawProducts as Product[];

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

export interface CatalogFilters {
  category?: string;
  size?: string;
  color?: string;
}

export function filterProducts(filters: CatalogFilters): Product[] {
  return getAllProducts().filter((p) => {
    if (filters.category && p.category !== filters.category) return false;
    if (filters.size && !p.sizes.includes(filters.size)) return false;
    if (filters.color && !p.colors.includes(filters.color)) return false;
    return true;
  });
}

export function getCategories(): ProductCategory[] {
  return Array.from(
    new Set(products.map((p) => p.category))
  ) as ProductCategory[];
}

export function getAllSizes(): string[] {
  return Array.from(new Set(products.flatMap((p) => p.sizes)));
}

export function getAllColors(): string[] {
  return Array.from(new Set(products.flatMap((p) => p.colors)));
}

export function buildStoreUrl(product: Product, storeBaseUrl: string): string {
  if (!product.storePath) return storeBaseUrl;
  return `${storeBaseUrl.replace(/\/$/, "")}${product.storePath}`;
}
