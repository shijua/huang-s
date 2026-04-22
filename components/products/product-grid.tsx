import { ProductCard } from "./product-card";
import type { Product } from "@/lib/products";
import type { Locale } from "@/lib/i18n/config";
import { cn } from "@/lib/utils";

interface ProductGridProps {
  products: Product[];
  locale: Locale;
  className?: string;
  priorityCount?: number;
}

export function ProductGrid({
  products,
  locale,
  className,
  priorityCount = 0,
}: ProductGridProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 lg:grid-cols-4",
        className
      )}
    >
      {products.map((p, i) => (
        <ProductCard
          key={p.slug}
          product={p}
          locale={locale}
          priority={i < priorityCount}
        />
      ))}
    </div>
  );
}
