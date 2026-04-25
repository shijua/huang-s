import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/lib/i18n/routing";
import { BrandVisual } from "@/components/brand/brand-visual";
import { Button } from "@/components/ui/button";
import { ProductGrid } from "@/components/products/product-grid";
import { getNewArrivals } from "@/lib/products";
import type { Locale } from "@/lib/i18n/config";
import { siteConfig } from "@/lib/site";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("home");

  const arrivals = getNewArrivals(4);

  return (
    <>
      {/* Hero */}
      <section className="container-content pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="grid gap-12 md:grid-cols-[1.1fr_1fr] md:gap-16 items-center">
          <div className="max-w-[580px]">
            <p className="text-overline text-brand-burgundy mb-6">
              {t("hero.eyebrow")}
            </p>
            <h1 className="text-display text-brand-charcoal">
              {t("hero.title")}
            </h1>
            <p className="mt-6 text-[17px] leading-relaxed text-ink-muted max-w-[480px]">
              {t("hero.subtitle")}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild>
                <Link href="/wholesale">
                  {t("hero.ctaPrimary")}
                  <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
                </Link>
              </Button>
              <Button variant="secondary" asChild>
                <a
                  href={siteConfig.storeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("hero.ctaSecondary")}
                  <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
                </a>
              </Button>
            </div>
          </div>

          <BrandVisual
            variant="hero"
            priority
            className="max-w-[620px] justify-self-end"
          />
        </div>
      </section>

      {/* Values */}
      <section className="bg-ivory border-y border-line">
        <div className="container-content py-24">
          <h2 className="text-h2 mb-16 max-w-lg">{t("values.title")}</h2>
          <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
            {["0", "1", "2"].map((i) => (
              <div key={i} className="border border-line bg-canvas p-8 lg:p-10">
                <span className="font-serif text-[52px] font-light leading-none text-line">
                  0{Number(i) + 1}
                </span>
                <h3 className="mt-4 text-h3 text-brand-charcoal">
                  {t(`values.items.${i}.title`)}
                </h3>
                <p className="mt-3 text-[15px] text-ink-muted leading-relaxed">
                  {t(`values.items.${i}.body`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collection */}
      <section className="container-content py-24">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-overline text-brand-burgundy mb-3">
              {t("collection.eyebrow")}
            </p>
            <h2 className="text-h2">{t("collection.title")}</h2>
          </div>
          <a
            href={siteConfig.storeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 text-[13px] tracking-[0.14em] uppercase font-medium text-brand-burgundy hover:text-brand-charcoal"
          >
            {t("collection.cta")}
            <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
          </a>
        </div>
        <ProductGrid products={arrivals} locale={locale} />
      </section>

      {/* Brand story */}
      <section className="bg-brand-beige">
        <div className="container-content py-24">
          <div className="grid gap-16 md:grid-cols-2 md:gap-20 items-center">
            <BrandVisual className="max-w-[620px] justify-self-end" />
            <div>
              <p className="text-overline text-brand-burgundy mb-4">
                {t("story.eyebrow")}
              </p>
              <h2 className="text-h2 text-brand-charcoal">
                {t("story.title")}
              </h2>
              <p className="mt-6 text-[16px] leading-relaxed text-ink-muted max-w-[480px]">
                {t("story.body")}
              </p>
              <div className="mt-10">
                <Button variant="ghost" asChild>
                  <Link href="/about">
                    {t("story.cta")}
                    <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* External store CTA */}
      <section className="bg-brand-burgundy text-ivory">
        <div className="container-content py-24 text-center">
          <h2 className="text-h2 text-ivory max-w-xl mx-auto">
            {t("shopCta.title")}
          </h2>
          <p className="mt-4 text-[16px] text-ivory/75 max-w-md mx-auto">
            {t("shopCta.body")}
          </p>
          <div className="mt-10 inline-flex">
            <Button variant="inverse" asChild>
              <a
                href={siteConfig.storeUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("shopCta.cta")}
                <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
