import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  JetBrains_Mono,
  Manrope,
  Noto_Sans_SC,
} from "next/font/google";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-cormorant",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
  display: "swap",
});

const notoSansSC = Noto_Sans_SC({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-noto-sans-sc",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — Women's Fashion Wholesale`,
    template: `%s · ${siteConfig.name}`,
  },
  description: siteConfig.tagline.en,
  formatDetection: { telephone: false },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.tagline.en,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "pt_PT",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      className={`${cormorant.variable} ${manrope.variable} ${jetbrains.variable} ${notoSansSC.variable}`}
      suppressHydrationWarning
    >
      <body>{children}</body>
    </html>
  );
}
