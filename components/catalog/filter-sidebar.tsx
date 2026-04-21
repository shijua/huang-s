"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { cn } from "@/lib/utils";
import type { ProductCategory } from "@/lib/products";

interface FilterSidebarProps {
  categories: ProductCategory[];
  sizes: string[];
  colors: string[];
  labels: {
    title: string;
    category: string;
    size: string;
    color: string;
    clearAll: string;
  };
}

const COLOR_SWATCH: Record<string, string> = {
  ecru: "#e7dfcf",
  charcoal: "#3a3a3a",
  burgundy: "#3a1810",
  champagne: "#d7c7a1",
  camel: "#b38b5a",
  black: "#151212",
  ivory: "#faf8f3",
  sky: "#bcd3de",
  beige: "#e5e1d6",
  signature: "#3a1810",
};

export function FilterSidebar({
  categories,
  sizes,
  colors,
  labels,
}: FilterSidebarProps) {
  const router = useRouter();
  const params = useSearchParams();

  const setParam = useCallback(
    (key: string, value: string | null) => {
      const next = new URLSearchParams(params.toString());
      if (value === null || next.get(key) === value) {
        next.delete(key);
      } else {
        next.set(key, value);
      }
      router.replace(`?${next.toString()}`, { scroll: false });
    },
    [params, router]
  );

  const clearAll = () => {
    router.replace("?", { scroll: false });
  };

  const activeCategory = params.get("category");
  const activeSize = params.get("size");
  const activeColor = params.get("color");
  const hasActive = Boolean(activeCategory || activeSize || activeColor);

  return (
    <aside className="w-full md:w-[280px] md:shrink-0 md:sticky md:top-[88px] md:self-start">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-overline text-ink">{labels.title}</h2>
        {hasActive && (
          <button
            type="button"
            onClick={clearAll}
            className="text-[11px] tracking-[0.14em] uppercase text-ink-soft hover:text-brand-burgundy transition-colors"
          >
            {labels.clearAll}
          </button>
        )}
      </div>

      <FilterSection title={labels.category}>
        <ul className="space-y-2">
          {categories.map((c) => (
            <li key={c}>
              <button
                type="button"
                onClick={() => setParam("category", c)}
                className={cn(
                  "w-full text-left text-[14px] capitalize transition-colors py-1",
                  activeCategory === c
                    ? "text-brand-burgundy"
                    : "text-ink-muted hover:text-ink"
                )}
                aria-pressed={activeCategory === c}
              >
                {c}
              </button>
            </li>
          ))}
        </ul>
      </FilterSection>

      <FilterSection title={labels.size}>
        <div className="flex flex-wrap gap-2">
          {sizes.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setParam("size", s)}
              className={cn(
                "min-w-[44px] h-9 px-3 border text-[12px] tracking-[0.08em] uppercase transition-colors",
                activeSize === s
                  ? "border-brand-burgundy bg-brand-burgundy text-ivory"
                  : "border-line text-ink hover:border-ink"
              )}
              aria-pressed={activeSize === s}
            >
              {s}
            </button>
          ))}
        </div>
      </FilterSection>

      <FilterSection title={labels.color}>
        <div className="flex flex-wrap gap-3">
          {colors.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setParam("color", c)}
              title={c}
              aria-pressed={activeColor === c}
              aria-label={c}
              className={cn(
                "relative h-8 w-8 border transition-all",
                activeColor === c
                  ? "border-brand-burgundy ring-2 ring-brand-burgundy ring-offset-2"
                  : "border-line hover:border-ink"
              )}
              style={{ backgroundColor: COLOR_SWATCH[c] ?? "#ccc" }}
            />
          ))}
        </div>
      </FilterSection>
    </aside>
  );
}

function FilterSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="py-5 border-t border-line first:border-t-0">
      <h3 className="text-[11px] tracking-[0.14em] uppercase text-ink-soft font-medium mb-3">
        {title}
      </h3>
      {children}
    </div>
  );
}
