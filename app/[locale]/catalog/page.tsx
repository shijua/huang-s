import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/lib/i18n/routing";
import { FilterSidebar } from "@/components/catalog/filter-sidebar";
import { ProductGrid } from "@/components/catalog/product-grid";
import {
  filterProducts,
  getAllColors,
  getAllSizes,
  getCategories,
} from "@/lib/products";
import type { Locale } from "@/lib/i18n/config";

interface CatalogSearchParams {
  category?: string;
  size?: string;
  color?: string;
}

export default async function CatalogPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: Locale }>;
  searchParams: Promise<CatalogSearchParams>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const filters = await searchParams;
  const products = filterProducts(filters);
  const categories = getCategories();
  const sizes = getAllSizes();
  const colors = getAllColors();

  const t = await getTranslations("catalog");

  return (
    <div className="container-content py-12 md:py-16">
      {/* Breadcrumb + header */}
      <nav
        aria-label="Breadcrumb"
        className="text-[11px] tracking-[0.14em] uppercase text-ink-soft mb-6"
      >
        <Link href="/" className="hover:text-brand-burgundy transition-colors">
          Home
        </Link>
        <span className="mx-2">/</span>
        <span className="text-ink">{t("title")}</span>
      </nav>

      <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
        <h1 className="text-h1">{t("title")}</h1>
        <p className="text-caption">
          {t("resultCount", { count: products.length })}
        </p>
      </div>

      <div className="flex flex-col gap-10 md:flex-row md:gap-12">
        <FilterSidebar
          locale={locale}
          categories={categories}
          sizes={sizes}
          colors={colors}
          labels={{
            title: t("filters.title"),
            category: t("filters.category"),
            size: t("filters.size"),
            color: t("filters.color"),
            clearAll: t("filters.clearAll"),
          }}
        />

        <div className="flex-1 min-w-0">
          {products.length === 0 ? (
            <div className="py-24 text-center text-ink-soft">
              <p className="text-[15px]">{t("empty")}</p>
            </div>
          ) : (
            <ProductGrid
              products={products}
              locale={locale}
              priorityCount={4}
            />
          )}
        </div>
      </div>
    </div>
  );
}
