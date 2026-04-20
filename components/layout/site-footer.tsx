import { getTranslations } from "next-intl/server";
import { Link } from "@/lib/i18n/routing";
import { Wordmark } from "@/components/brand/wordmark";
import { siteConfig } from "@/lib/site";

export async function SiteFooter() {
  const t = await getTranslations("footer");
  const tNav = await getTranslations("nav");
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-charcoal text-ivory mt-24">
      <div className="container-content py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <Wordmark variant="ivory" />
            <p className="mt-6 max-w-xs text-[14px] leading-relaxed text-ivory/70">
              {siteConfig.legalName} &middot; {siteConfig.address.line2},{" "}
              {siteConfig.address.country}
            </p>
          </div>

          <FooterColumn title={t("explore")}>
            <Link href="/catalog">{tNav("catalog")}</Link>
            <Link href="/about">{tNav("about")}</Link>
            <a href={siteConfig.storeUrl} target="_blank" rel="noopener noreferrer">
              {tNav("shop")}
            </a>
          </FooterColumn>

          <FooterColumn title={t("contact")}>
            <a href={`mailto:${siteConfig.contactEmail}`}>
              {siteConfig.contactEmail}
            </a>
            <span>{siteConfig.phone}</span>
            <span>{siteConfig.hours}</span>
          </FooterColumn>

          <FooterColumn title={t("follow")}>
            <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </FooterColumn>
        </div>

        <div className="hairline mt-16 border-ivory/15 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-[11px] tracking-[0.14em] uppercase text-ivory/50">
          <span>
            &copy; {year} {siteConfig.legalName}. {t("rights")}
          </span>
          <span>NIPC 516 000 000</span>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h4 className="text-[11px] tracking-[0.14em] uppercase text-ivory/60 font-medium mb-4">
        {title}
      </h4>
      <ul className="space-y-2 text-[14px] text-ivory/90 [&>*>a]:hover:text-brand-beige [&>*>a]:transition-colors">
        {Array.isArray(children)
          ? children.map((child, i) => <li key={i}>{child}</li>)
          : <li>{children}</li>}
      </ul>
    </div>
  );
}
