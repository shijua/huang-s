import { getTranslations } from "next-intl/server";
import { Link } from "@/lib/i18n/routing";
import { Wordmark } from "@/components/brand/wordmark";
import { LogoMark } from "@/components/brand/logo-mark";
import { LocaleSwitcher } from "./locale-switcher";
import { MobileMenu } from "./mobile-menu";
import { siteConfig } from "@/lib/site";
import { ArrowUpRight } from "lucide-react";

export async function SiteHeader() {
  const t = await getTranslations("nav");

  return (
    <header className="sticky top-0 z-50 bg-canvas/90 backdrop-blur-sm border-b border-line">
      <div className="container-content flex h-[72px] items-center justify-between">
        <Link href="/" className="inline-flex items-center gap-3" aria-label="HUANG'S home">
          <LogoMark size={26} />
          <Wordmark />
        </Link>

        <nav className="hidden md:flex items-center gap-10 text-[13px] tracking-[0.14em] uppercase font-medium">
          <Link
            href="/about"
            className="text-ink hover:text-brand-burgundy transition-colors"
          >
            {t("about")}
          </Link>
          <Link
            href="/wholesale"
            className="text-ink hover:text-brand-burgundy transition-colors"
          >
            {t("wholesale")}
          </Link>
          <Link
            href="/contact"
            className="text-ink hover:text-brand-burgundy transition-colors"
          >
            {t("contact")}
          </Link>
        </nav>

        <div className="flex items-center gap-6">
          <LocaleSwitcher className="hidden min-[720px]:inline-flex" />
          <a
            href={siteConfig.storeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden min-[420px]:inline-flex items-center gap-1 text-[13px] tracking-[0.14em] uppercase font-medium text-brand-burgundy hover:text-brand-charcoal transition-colors"
          >
            {t("shop")}
            <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
          </a>
          <MobileMenu
            labels={{
              about: t("about"),
              wholesale: t("wholesale"),
              contact: t("contact"),
              shop: t("shop"),
            }}
          />
        </div>
      </div>
    </header>
  );
}
