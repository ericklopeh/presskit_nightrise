import type { Metadata } from "next";
import { Cinzel, DM_Sans } from "next/font/google";
import "./globals.css";
import { siteContent } from "@/data/siteContent";
import { themeToCssVars } from "@/lib/applyTheme";
import { resolveMetadataBaseUrl } from "@/lib/metadataBaseUrl";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: resolveMetadataBaseUrl(),
  title: {
    default: siteContent.meta.title,
    template: `%s | ${siteContent.band.name}`,
  },
  description: siteContent.meta.description,
  keywords: [...siteContent.meta.keywords],
  openGraph: {
    title: siteContent.meta.title,
    description: siteContent.meta.description,
    type: "website",
    locale: "es_MX",
    siteName: siteContent.band.name,
    images: [{ url: siteContent.meta.ogImage }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteContent.meta.title,
    description: siteContent.meta.description,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es-MX"
      className={`${cinzel.variable} ${dmSans.variable}`}
      style={themeToCssVars(siteContent.theme)}
    >
      <body className="font-body min-h-screen">{children}</body>
    </html>
  );
}
