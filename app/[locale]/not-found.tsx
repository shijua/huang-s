import { getTranslations } from "next-intl/server";
import { Link } from "@/lib/i18n/routing";
import { Button } from "@/components/ui/button";

export default async function NotFound() {
  const t = await getTranslations("notFound");
  return (
    <div className="container-content py-32 text-center">
      <p className="text-overline text-brand-burgundy mb-4">{t("label")}</p>
      <h1 className="text-h1 mb-6">{t("title")}</h1>
      <p className="text-ink-muted mb-10">{t("body")}</p>
      <Button asChild>
        <Link href="/">{t("cta")}</Link>
      </Button>
    </div>
  );
}
