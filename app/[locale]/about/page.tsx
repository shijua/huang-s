import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Button } from "@/components/ui/button";
import { Link } from "@/lib/i18n/routing";
import { siteConfig } from "@/lib/site";
import type { Locale } from "@/lib/i18n/config";
import { ArrowRight } from "lucide-react";

const milestones = [
  { year: "2021", body: { pt: "Fundação da Lua Cintilante Unipessoal Lda.", en: "Lua Cintilante Unipessoal Lda founded.", zh: "Lua Cintilante Unipessoal Lda 注册成立。" } },
  { year: "2022", body: { pt: "Primeira coleção distribuída em Portugal.", en: "First collection distributed across Portugal.", zh: "首个系列在葡萄牙上市。" } },
  { year: "2024", body: { pt: "Expansão para Espanha e Itália.", en: "Expanded into Spain and Italy.", zh: "业务拓展至西班牙与意大利。" } },
  { year: "2026", body: { pt: "Lançamento do novo catálogo digital.", en: "Launch of the new digital catalog.", zh: "全新数字化目录上线。" } },
];

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

      <section className="relative aspect-[21/9] w-full overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=1600&q=80"
          alt="HUANG'S atelier"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </section>

      <section className="container-content py-24">
        <div className="container-prose">
          <p className="text-[17px] leading-relaxed text-ink-muted">
            {tHome("story.body")}
          </p>
          <p className="mt-6 text-[17px] leading-relaxed text-ink-muted">
            Acreditamos que a moda por grosso pode ser feita com a mesma
            exigência de uma casa de autor: materiais honestos, confeção
            cuidada, prazos curtos. HUANG&rsquo;S nasce dessa convicção.
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
        <h2 className="text-h2 mb-12">{t("timeline.title")}</h2>
        <ol className="divide-y divide-line">
          {milestones.map((m) => (
            <li
              key={m.year}
              className="grid grid-cols-[120px_1fr] gap-6 py-6 items-baseline"
            >
              <span className="font-serif text-[28px] text-brand-burgundy leading-none">
                {m.year}
              </span>
              <p className="text-[16px] text-ink-muted leading-relaxed">
                {m.body[locale]}
              </p>
            </li>
          ))}
        </ol>
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
