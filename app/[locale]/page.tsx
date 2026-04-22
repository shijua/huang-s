import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";
import { Link } from "@/lib/i18n/routing";
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
              <Button variant="ghost" asChild>
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

          <div className="relative aspect-[16/10] w-full max-w-[620px] overflow-hidden justify-self-end md:aspect-[16/11]">
            <Image
              src={siteConfig.storefrontImageUrl}
              alt="HUANG'S Lua Cintilante storefront in Portugal"
              fill
              priority
              quality={70}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-ivory border-y border-line">
        <div className="container-content py-24">
          <h2 className="text-h2 mb-16 max-w-lg">{t("values.title")}</h2>
          <div className="grid gap-12 md:grid-cols-3">
            {["0", "1", "2"].map((i) => (
              <div key={i} className="border-t border-brand-burgundy pt-6">
                <h3 className="text-h3 text-brand-burgundy mb-3">
                  {t(`values.items.${i}.title`)}
                </h3>
                <p className="text-[15px] text-ink-muted leading-relaxed">
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
            <div className="relative aspect-[16/10] w-full max-w-[620px] overflow-hidden">
              <Image
                src={siteConfig.storefrontImageUrl}
                alt="HUANG'S Lua Cintilante exterior"
                fill
                quality={70}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
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
