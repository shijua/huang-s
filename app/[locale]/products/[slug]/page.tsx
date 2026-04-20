import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/lib/i18n/routing";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { ProductGallery } from "@/components/catalog/product-gallery";
import { ProductGrid } from "@/components/catalog/product-grid";
import {
  buildStoreUrl,
  getAllProducts,
  getProductBySlug,
  getRelatedProducts,
} from "@/lib/products";
import type { Locale } from "@/lib/i18n/config";
import { siteConfig } from "@/lib/site";
import { formatSku } from "@/lib/utils";
import { ArrowUpRight, Mail } from "lucide-react";

export function generateStaticParams() {
  return getAllProducts().map((p) => ({ slug: p.slug }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const product = getProductBySlug(slug);
  if (!product) notFound();

  const related = getRelatedProducts(slug, 4);
  const t = await getTranslations("product");
  const storeUrl = buildStoreUrl(product, siteConfig.storeUrl);

  return (
    <>
      <div className="container-content py-10 md:py-14">
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="text-[11px] tracking-[0.14em] uppercase text-ink-soft mb-8"
        >
          <Link href="/" className="hover:text-brand-burgundy">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href="/catalog" className="hover:text-brand-burgundy">
            Catalog
          </Link>
          <span className="mx-2">/</span>
          <span className="text-ink capitalize">{product.category}</span>
        </nav>

        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <ProductGallery
            images={product.images}
            alt={product.name[locale]}
          />

          <div className="lg:sticky lg:top-[88px] lg:self-start">
            <div className="flex items-center gap-3 mb-4">
              <Badge variant="default" className="capitalize">
                {product.category}
              </Badge>
              {product.isNew && <Badge variant="new">New</Badge>}
            </div>

            <h1 className="text-h1 text-brand-charcoal mb-4">
              {product.name[locale]}
            </h1>

            <div className="flex items-center gap-2 text-[12px] text-ink-soft mb-8">
              <span className="text-overline">{t("sku")}</span>
              <span className="font-mono-sku">{formatSku(product.sku)}</span>
            </div>

            <p className="text-[16px] leading-relaxed text-ink-muted mb-10">
              {product.description[locale]}
            </p>

            <div className="space-y-6 mb-10">
              <div>
                <h3 className="text-overline text-ink-soft mb-3">
                  {t("available.sizes")}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((s) => (
                    <span
                      key={s}
                      className="min-w-[44px] h-9 px-3 inline-flex items-center justify-center border border-line text-[12px] tracking-[0.08em] uppercase text-ink"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-overline text-ink-soft mb-3">
                  {t("available.colors")}
                </h3>
                <div className="flex flex-wrap gap-3 items-center">
                  {product.colors.map((c) => (
                    <div
                      key={c}
                      className="flex items-center gap-2 text-[13px] text-ink-muted capitalize"
                    >
                      <span
                        className="h-5 w-5 border border-line"
                        style={{
                          backgroundColor: swatchColor(c),
                        }}
                      />
                      {c}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <Button asChild className="flex-1">
                <a href={storeUrl} target="_blank" rel="noopener noreferrer">
                  {t("ctaShop")}
                  <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
                </a>
              </Button>
              <Button variant="ghost" asChild className="flex-1">
                <Link href="/contact">
                  <Mail className="h-4 w-4" strokeWidth={1.5} />
                  {t("ctaWholesale")}
                </Link>
              </Button>
            </div>

            <Accordion type="multiple" className="border-t border-line">
              <AccordionItem value="description">
                <AccordionTrigger>{t("description")}</AccordionTrigger>
                <AccordionContent>
                  {product.description[locale]}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="materials">
                <AccordionTrigger>{t("materials")}</AccordionTrigger>
                <AccordionContent>{product.materials}</AccordionContent>
              </AccordionItem>
              <AccordionItem value="care">
                <AccordionTrigger>{t("care")}</AccordionTrigger>
                <AccordionContent>{product.care}</AccordionContent>
              </AccordionItem>
              <AccordionItem value="sizing">
                <AccordionTrigger>{t("sizing")}</AccordionTrigger>
                <AccordionContent>
                  Available in: {product.sizes.join(" · ")}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="border-t border-line">
          <div className="container-content py-20">
            <h2 className="text-h2 mb-12">{t("related")}</h2>
            <ProductGrid products={related} locale={locale} />
          </div>
        </section>
      )}
    </>
  );
}

function swatchColor(name: string): string {
  const map: Record<string, string> = {
    ecru: "#e7dfcf",
    charcoal: "#3a3a3a",
    burgundy: "#3a1810",
    champagne: "#d7c7a1",
    camel: "#b38b5a",
    black: "#151212",
    ivory: "#faf8f3",
    sky: "#bcd3de",
    beige: "#e5e1d6",
  };
  return map[name] ?? "#ccc";
}
