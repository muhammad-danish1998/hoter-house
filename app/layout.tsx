import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/site";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyCallBar } from "@/components/layout/StickyCallBar";
import { JsonLd } from "@/components/seo/JsonLd";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteConfig.name} | 24/7 Heating & Air Conditioning Repair`,
    template: `%s | ${siteConfig.name}`,
  },
  description: `${siteConfig.tagline}. Same-day repairs, upfront pricing, licensed & insured technicians. Call ${siteConfig.phoneFormatted}.`,
  authors: [{ name: siteConfig.name }],
  keywords: [
    "HVAC repair",
    "Emergency AC Repair",
    "Furnace Repair",
    "Heat Pump Service",
    "Air Conditioning Installation",
    "Same Day Heating Repair",
    "Denver HVAC Service",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: `${siteConfig.name} | 24/7 Heating & Air Conditioning Repair`,
    description: `${siteConfig.tagline}. Fast, licensed HVAC technicians ready to diagnose and repair your heating or cooling system today.`,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | 24/7 Heating & Air Conditioning Repair`,
    description: `${siteConfig.tagline}. Same-day service available. Call ${siteConfig.phoneFormatted}.`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <JsonLd />
      </head>
      <body
        className="flex min-h-screen flex-col font-sans bg-slate-50 text-slate-900"
        suppressHydrationWarning
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <StickyCallBar />
      </body>
    </html>
  );
}
