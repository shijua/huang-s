import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/lib/i18n/routing";
import { Button } from "@/components/ui/button";
import type { Locale } from "@/lib/i18n/config";
import { siteConfig } from "@/lib/site";
import { ArrowRight, ArrowUpRight, MessageCircle } from "lucide-react";

const STEP_COUNT = 5;

interface RuleGroup {
  title: string;
  items: string[];
}

export default async function WholesalePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("wholesale");

  return (
    <>
      {/* Hero */}
      <section className="container-content pt-16 pb-20 md:pt-24 md:pb-24">
        <div className="max-w-3xl">
          <p className="text-overline text-brand-burgundy mb-6">
            {siteConfig.legalName}
          </p>
          <h1 className="text-h1">{t("title")}</h1>
          <p className="mt-6 text-[17px] leading-relaxed text-ink-muted max-w-[560px]">
            {t("subtitle")}
          </p>
        </div>
      </section>

      {/* Process */}
      <section className="bg-ivory border-y border-line">
        <div className="container-content py-20 md:py-24">
          <p className="text-overline text-brand-burgundy mb-12">
            {t("process.eyebrow")}
          </p>
          <ol className="space-y-10 md:space-y-14">
            {Array.from({ length: STEP_COUNT }, (_, i) => (
              <li
                key={i}
                className="grid gap-4 md:grid-cols-[120px_1fr] md:gap-12 items-baseline"
              >
                <span className="font-serif text-[40px] leading-none text-brand-burgundy">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="max-w-[640px] border-t border-line pt-5 md:border-none md:pt-0">
                  <h3 className="text-h3 mb-3">
                    {t(`process.steps.${i}.title`)}
                  </h3>
                  <p className="text-[16px] leading-relaxed text-ink-muted">
                    {t(`process.steps.${i}.body`)}
                  </p>
                  {i === 0 && (
                    <div className="mt-5">
                      <Button variant="ghost" size="sm" asChild>
                        <a
                          href={siteConfig.whatsapp}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <MessageCircle
                            className="h-4 w-4"
                            strokeWidth={1.5}
                          />
                          {t("process.actions.whatsapp")}
                        </a>
                      </Button>
                    </div>
                  )}
                  {i === 1 && (
                    <div className="mt-5">
                      <Button variant="ghost" size="sm" asChild>
                        <a
                          href={siteConfig.storeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {t("process.actions.microstore")} · #
                          {siteConfig.microstoreId}
                          <ArrowUpRight
                            className="h-4 w-4"
                            strokeWidth={1.5}
                          />
                        </a>
                      </Button>
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Rules */}
      <section className="container-content py-20 md:py-24">
        <div className="mb-12 max-w-2xl">
          <p className="text-overline text-brand-burgundy mb-3">
            {t("rules.eyebrow")}
          </p>
          <h2 className="text-h2">{t("rules.title")}</h2>
        </div>
        <div className="grid gap-10 md:grid-cols-2 md:gap-14">
          {(t.raw("rules.groups") as RuleGroup[]).map((group, i) => (
            <div key={i} className="border-t border-brand-burgundy pt-6">
              <h3 className="text-overline text-brand-burgundy mb-5">
                {group.title}
              </h3>
              <ul className="space-y-3 text-[16px] text-ink leading-relaxed">
                {group.items.map((item, j) => (
                  <li key={j} className="flex gap-3">
                    <span
                      aria-hidden
                      className="mt-[0.7em] h-[3px] w-3 shrink-0 bg-brand-burgundy/70"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-burgundy text-ivory">
        <div className="container-content py-20 md:py-24 text-center">
          <h2 className="text-h2 text-ivory max-w-xl mx-auto">
            {t("cta.title")}
          </h2>
          <p className="mt-4 text-[16px] text-ivory/75 max-w-md mx-auto">
            {t("cta.body")}
          </p>
          <div className="mt-10 inline-flex">
            <Button variant="inverse" asChild>
              <Link href="/contact">
                {t("cta.cta")}
                <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
              </Link>
            </Button>
          </div>
          <p className="mt-8 text-[11px] tracking-[0.16em] uppercase text-ivory/55">
            {t("cta.microstoreLabel")} · #{siteConfig.microstoreId}
          </p>
        </div>
      </section>
    </>
  );
}
