import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Manrope, Space_Grotesk } from "next/font/google";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { StickyMobileCTA } from "@/components/layout/sticky-mobile-cta";
import { LocalBusinessSchema } from "@/components/common/local-business-schema";
import { WhatsAppFloatingButton } from "@/components/common/whatsapp-floating-button";
import { businessConfig } from "@/config/business";
import "@/app/globals.css";

const headingFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
});

const bodyFont = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL(businessConfig.domain),
  title: businessConfig.defaultSeo.defaultTitle,
  description: businessConfig.defaultSeo.defaultDescription,
  icons: {
    icon: "/images/brand/enerza-favicon-512.png",
    apple: "/images/brand/enerza-icon-oficial-transparente.png",
    shortcut: "/images/brand/enerza-favicon-512.png",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: businessConfig.domain,
    siteName: businessConfig.businessName,
    title: businessConfig.defaultSeo.defaultTitle,
    description: businessConfig.defaultSeo.defaultDescription,
    images: [
      {
        url: "/images/brand/enerza-logo-oficial-cropped.jpg",
        alt: businessConfig.businessName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: businessConfig.defaultSeo.defaultTitle,
    description: businessConfig.defaultSeo.defaultDescription,
    images: ["/images/brand/enerza-logo-oficial-cropped.jpg"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#143c6b",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="es-MX">
      <body className={`${headingFont.variable} ${bodyFont.variable} min-h-screen`}>
        <LocalBusinessSchema />
        <Header />
        <main className="pb-24 md:pb-0">{children}</main>
        <Footer />
        <StickyMobileCTA />
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}
