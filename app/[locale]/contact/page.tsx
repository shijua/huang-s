import { getTranslations, setRequestLocale } from "next-intl/server";
import { BrandVisual } from "@/components/brand/brand-visual";
import { siteConfig } from "@/lib/site";
import type { Locale } from "@/lib/i18n/config";
import { Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react";

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("contact");

  return (
    <div className="container-content py-16 md:py-24">
      <div className="max-w-2xl mb-16">
        <p className="text-overline text-brand-burgundy mb-4">
          {siteConfig.legalName}
        </p>
        <h1 className="text-h1 mb-4">{t("title")}</h1>
        <p className="text-[17px] leading-relaxed text-ink-muted">
          {t("subtitle")}
        </p>
      </div>

      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        {/* Details */}
        <div className="space-y-10">
          <ContactRow
            icon={<MapPin className="h-5 w-5" strokeWidth={1.5} />}
            label={t("details.address")}
          >
            {siteConfig.address.line1}
            <br />
            {siteConfig.address.line2 && (
              <>
                {siteConfig.address.line2}
                <br />
              </>
            )}
            {siteConfig.address.country}
          </ContactRow>

          <ContactRow
            icon={<Mail className="h-5 w-5" strokeWidth={1.5} />}
            label={t("details.email")}
          >
            <a
              href={`mailto:${siteConfig.contactEmail}`}
              className="text-brand-burgundy hover:underline underline-offset-4"
            >
              {siteConfig.contactEmail}
            </a>
          </ContactRow>

          <ContactRow
            icon={<Phone className="h-5 w-5" strokeWidth={1.5} />}
            label={t("details.phone")}
          >
            <a
              href={`tel:${siteConfig.phoneTel}`}
              className="text-brand-burgundy hover:underline underline-offset-4"
            >
              {siteConfig.phone}
            </a>
          </ContactRow>

          <ContactRow
            icon={<MessageCircle className="h-5 w-5" strokeWidth={1.5} />}
            label="WhatsApp"
          >
            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-burgundy hover:underline underline-offset-4"
            >
              {siteConfig.phone}
            </a>
          </ContactRow>

          <ContactRow
            icon={<Clock className="h-5 w-5" strokeWidth={1.5} />}
            label={t("details.hours")}
          >
            {siteConfig.hours[locale]}
          </ContactRow>
        </div>

        <BrandVisual variant="contact" />
      </div>
    </div>
  );
}

function ContactRow({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4">
      <div className="text-brand-burgundy mt-1">{icon}</div>
      <div>
        <h3 className="text-overline text-ink-soft mb-2">{label}</h3>
        <div className="text-[15px] text-ink leading-relaxed">{children}</div>
      </div>
    </div>
  );
}
