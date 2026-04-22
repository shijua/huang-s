import { getLocale, getTranslations } from "next-intl/server";
import { Link } from "@/lib/i18n/routing";
import { Wordmark } from "@/components/brand/wordmark";
import { siteConfig } from "@/lib/site";
import type { Locale } from "@/lib/i18n/config";

export async function SiteFooter() {
  const t = await getTranslations("footer");
  const tNav = await getTranslations("nav");
  const tDetails = await getTranslations("contact.details");
  const locale = (await getLocale()) as Locale;
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-charcoal text-ivory mt-24">
      <div className="container-content py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <Wordmark variant="ivory" />
            <p className="mt-6 max-w-xs text-[14px] leading-relaxed text-ivory/70">
              {siteConfig.legalName} &middot;{" "}
              {[siteConfig.address.line1, siteConfig.address.line2, siteConfig.address.country]
                .filter(Boolean)
                .join(", ")}
            </p>
          </div>

          <FooterColumn title={t("explore")}>
            <Link href="/about">{tNav("about")}</Link>
            <Link href="/wholesale">{tNav("wholesale")}</Link>
            <a href={siteConfig.storeUrl} target="_blank" rel="noopener noreferrer">
              {tNav("shop")}
            </a>
          </FooterColumn>

          <FooterColumn title={t("contact")} spacing="space-y-4">
            <ContactField label="WhatsApp">
              <a
                href={siteConfig.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="whitespace-nowrap"
              >
                {siteConfig.phone}
              </a>
            </ContactField>
            <ContactField label={tDetails("email")}>
              <a href={`mailto:${siteConfig.contactEmail}`}>
                {siteConfig.contactEmail}
              </a>
            </ContactField>
            <ContactField label={tDetails("hours")}>
              {siteConfig.hours[locale]}
            </ContactField>
          </FooterColumn>

          <FooterColumn title={t("follow")}>
            <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
            <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
            <a href={siteConfig.social.tiktok} target="_blank" rel="noopener noreferrer">
              TikTok
            </a>
          </FooterColumn>
        </div>

        <div className="hairline mt-16 border-ivory/15 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-[11px] tracking-[0.14em] uppercase text-ivory/50">
          <span>
            &copy; {year} {siteConfig.legalName}. {t("rights")}
          </span>
          <span>NIPC {siteConfig.nipc}</span>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  children,
  spacing = "space-y-2",
}: {
  title: string;
  children: React.ReactNode;
  spacing?: string;
}) {
  return (
    <div>
      <h4 className="text-[11px] tracking-[0.14em] uppercase text-ivory/60 font-medium mb-4">
        {title}
      </h4>
      <ul
        className={`${spacing} text-[14px] text-ivory/90 [&>*>a]:hover:text-brand-beige [&>*>a]:transition-colors`}
      >
        {Array.isArray(children)
          ? children.map((child, i) => <li key={i}>{child}</li>)
          : <li>{children}</li>}
      </ul>
    </div>
  );
}

function ContactField({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <span className="block text-[11px] tracking-[0.14em] uppercase text-ivory/50 mb-0.5">
        {label}
      </span>
      <span className="block">{children}</span>
    </div>
  );
}
