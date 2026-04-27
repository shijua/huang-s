import type { Metadata } from "next";
import { Cormorant_Garamond } from "next/font/google";
import { siteConfig } from "@/lib/site";
import { getCurrentSeason } from "@/lib/season";
import { SeasonDebugger } from "@/components/dev/season-debugger";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-cormorant",
  display: "swap",
});

export const revalidate = 21600;

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
  const season = getCurrentSeason();
  return (
    <html
      className={cormorant.variable}
      data-season={season}
      suppressHydrationWarning
    >
      <body>
        {children}
        {process.env.NODE_ENV !== "production" && <SeasonDebugger />}
      </body>
    </html>
  );
}
