export const siteConfig = {
  name: "HUANG'S",
  legalName: "Lua Cintilante Unipessoal Lda",
  tagline: {
    pt: "Moda feminina por grosso — uma só fonte, muita escolha, entrega rápida.",
    en: "Women's fashion wholesale — one source, many choices, fast delivery.",
    zh: "女装批发 — 一站齐全，品类丰富，快速交付。",
  },
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://huangs.pt",
  storeUrl: process.env.NEXT_PUBLIC_STORE_URL ?? "https://store.huangs.pt",
  contactEmail:
    process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "wholesale@huangs.pt",
  address: {
    line1: "Rua Example 123",
    line2: "4000-000 Porto",
    country: "Portugal",
  },
  phone: "+351 220 000 000",
  hours: "Mon–Sat · 10:00 – 19:00 WET",
  social: {
    instagram: "https://instagram.com/huangs.pt",
  },
} as const;

export type Locale = "pt" | "en" | "zh";
