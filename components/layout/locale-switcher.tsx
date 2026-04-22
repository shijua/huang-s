"use client";

import { useLocale } from "next-intl";
import { useParams, usePathname, useRouter } from "next/navigation";
import { useTransition } from "react";
import { locales, localeLabels, type Locale } from "@/lib/i18n/config";
import { cn } from "@/lib/utils";

export function LocaleSwitcher({ className }: { className?: string }) {
  const currentLocale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const [isPending, startTransition] = useTransition();

  function onChange(next: Locale) {
    if (next === currentLocale) return;
    const segments = pathname.split("/").filter(Boolean);
    if ((locales as readonly string[]).includes(segments[0] ?? "")) {
      segments.shift();
    }
    const nextPath = `/${next}/${segments.join("/")}`.replace(/\/+$/, "") || `/${next}`;
    startTransition(() => {
      router.replace(nextPath);
      router.refresh();
    });
  }

  // Use params to avoid unused warning on SSR
  void params;

  return (
    <div
      className={cn(
        "inline-flex items-center gap-[2px] text-[11px] tracking-[0.14em] uppercase",
        className
      )}
      aria-label="Language switcher"
    >
      {locales.map((l, i) => (
        <span key={l} className="inline-flex items-center gap-[2px]">
          {i > 0 && <span className="text-ink-soft/50">/</span>}
          <button
            type="button"
            onClick={() => onChange(l)}
            disabled={isPending}
            className={cn(
              "px-[2px] py-[2px] transition-all cursor-pointer active:scale-95 active:opacity-70",
              l === currentLocale
                ? "text-brand-burgundy"
                : "text-ink-soft hover:text-brand-burgundy"
            )}
            aria-current={l === currentLocale ? "true" : undefined}
          >
            {l === "zh" ? "中文" : l === "pt" ? "PT" : "EN"}
            <span className="sr-only">{localeLabels[l]}</span>
          </button>
        </span>
      ))}
    </div>
  );
}
