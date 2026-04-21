import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import type { Locale } from "./i18n/config";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatSku(sku: string) {
  return sku.toUpperCase();
}

export function formatSize(size: string, locale: Locale) {
  if (size !== "One size") return size;

  const labels: Record<Locale, string> = {
    pt: "Tamanho único",
    en: "One size",
    zh: "均码",
  };

  return labels[locale];
}
