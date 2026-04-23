export const siteConfig = {
  name: "HUANG'S",
  legalName: "Lua Cintilante Unipessoal Lda",
  nipc: "507 792 238",
  tagline: {
    pt: "Moda feminina por grosso — uma só fonte, muita escolha, entrega rápida.",
    en: "Women's fashion wholesale — one source, many choices, fast delivery.",
    zh: "女装批发 — 一站齐全，品类丰富，快速交付。",
  },
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://huangs.pt",
  storeUrl: process.env.NEXT_PUBLIC_STORE_URL ?? "https://lua.microstore.app/#/shopMain",
  storeInfoUrl: "https://lua.microstore.app/#/shop/info",
  microstoreId: "618100",
  brandLogoUrl: "/brand/logo.jpg",
  contactEmail:
    process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "huangssuporte@outlook.com",
  address: {
    line1: "Rua da Rotunda N 20",
    line2: "4480-619",
    country: "Portugal",
  },
  phone: "+351 961 203 322",
  phoneTel: "+351961203322",
  whatsapp: "https://wa.me/351961203322",
  hours: {
    pt: "Todos os dias · 9:30 – 19:00",
    en: "Daily · 9:30 – 19:00",
    zh: "每日 · 9:30 – 19:00",
  },
  social: {
    instagram: "https://www.instagram.com/huangsluacintilante",
    facebook: "https://www.facebook.com/huangsluacintilante",
    tiktok: "https://www.tiktok.com/@huangsluacintilante",
  },
} as const;

export type Locale = "pt" | "en" | "zh";
