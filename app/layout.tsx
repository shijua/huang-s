import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, JetBrains_Mono } from "next/font/google";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — Women's Fashion Wholesale`,
    template: `%s · ${siteConfig.name}`,
  },
  description: siteConfig.tagline.en,
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
      className={`${cormorant.variable} ${inter.variable} ${jetbrains.variable}`}
      suppressHydrationWarning
    >
      <body>{children}</body>
    </html>
  );
}
