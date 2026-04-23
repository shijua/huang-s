import { getTranslations, setRequestLocale } from "next-intl/server";
import { BrandVisual } from "@/components/brand/brand-visual";
import { Button } from "@/components/ui/button";
import { Link } from "@/lib/i18n/routing";
import { siteConfig } from "@/lib/site";
import type { Locale } from "@/lib/i18n/config";
import { ArrowRight } from "lucide-react";

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("about");
  const tHome = await getTranslations("home");

  return (
    <>
      <section className="container-content pt-16 pb-20 md:pt-24">
        <p className="text-overline text-brand-burgundy mb-6">
          {siteConfig.legalName}
        </p>
        <h1 className="text-display max-w-3xl">{t("subtitle")}</h1>
      </section>

      <section className="container-content pb-20 md:pb-24">
        <BrandVisual variant="wide" priority />
      </section>

      <section className="container-content pb-24">
        <div className="container-prose">
          <p className="text-[17px] leading-relaxed text-ink-muted">
            {tHome("story.body")}
          </p>
          <p className="mt-6 text-[17px] leading-relaxed text-ink-muted">
            {t("body")}
          </p>
        </div>
      </section>

      <section className="bg-ivory border-y border-line">
        <div className="container-content py-24">
          <h2 className="text-h2 mb-16">{tHome("values.title")}</h2>
          <div className="grid gap-12 md:grid-cols-3">
            {["0", "1", "2"].map((i) => (
              <div key={i} className="border-t border-brand-burgundy pt-6">
                <h3 className="text-h3 text-brand-burgundy mb-3">
                  {tHome(`values.items.${i}.title`)}
                </h3>
                <p className="text-[15px] text-ink-muted leading-relaxed">
                  {tHome(`values.items.${i}.body`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-content py-24">
        <h2 className="text-h2 mb-12">{t("focus.title")}</h2>
        <ol className="divide-y divide-line">
          {["0", "1", "2"].map((i) => (
            <li
              key={i}
              className="grid grid-cols-[120px_1fr] gap-6 py-6 items-baseline"
            >
              <span className="font-serif text-[28px] text-brand-burgundy leading-none">
                0{Number(i) + 1}
              </span>
              <div>
                <h3 className="text-[17px] font-medium text-ink">
                  {t(`focus.items.${i}.title`)}
                </h3>
                <p className="mt-2 text-[16px] text-ink-muted leading-relaxed">
                  {t(`focus.items.${i}.body`)}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="container-content pb-24 flex justify-center">
        <img
          src="/brand/logo-mark.svg"
          alt=""
          aria-hidden
          className="h-14 w-auto opacity-80"
        />
      </section>

      <section className="bg-brand-burgundy text-ivory">
        <div className="container-content py-24 text-center">
          <h2 className="text-h2 text-ivory max-w-xl mx-auto">
            {tHome("shopCta.title")}
          </h2>
          <div className="mt-10 flex flex-wrap gap-3 justify-center">
            <Button variant="inverse" asChild>
              <Link href="/contact">
                {tHome("shopCta.cta")}
                <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
