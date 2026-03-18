import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { GoogleAnalytics } from '@next/third-parties/google';

import JsonLd from "@/components/seo/JsonLd";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const siteUrl = "https://ecovara.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ecovara | Premium Sustainable Luxury Yoga Mats",
    template: "%s | Ecovara"
  },
  description: "Experience the ultimate grip with Ecovara's eco-friendly, natural rubber and cork yoga mats. Handcrafted for discerning yogis seeking sustainable luxury in the UAE.",
  keywords: ["sustainable yoga mat", "luxury yoga mat", "eco-friendly yoga mat", "natural rubber yoga mat", "cork yoga mat", "non-slip yoga mat", "premium yoga mat", "biodegradable yoga mat", "UAE yoga", "Dubai yoga", "Abu Dhabi yoga"],
  authors: [{ name: "Ecovara" }],
  creator: "Ecovara",
  publisher: "Ecovara",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Ecovara | Premium Sustainable Luxury Yoga Mats",
    description: "Experience the ultimate grip with Ecovara's eco-friendly, natural rubber and cork yoga mats. Sustainable luxury for your practice.",
    url: siteUrl,
    siteName: "Ecovara",
    images: [
      {
        url: "/images/hero_yoga_mat.png",
        width: 1200,
        height: 630,
        alt: "Ecovara Sustainable Luxury Yoga Mat",
      },
    ],
    locale: "en_AE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ecovara | Premium Sustainable Luxury Yoga Mats",
    description: "Experience the ultimate grip with Ecovara's eco-friendly, natural rubber and cork yoga mats.",
    images: ["/images/hero_yoga_mat.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const organizationData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Ecovara",
  "url": siteUrl,
  "logo": `${siteUrl}/images/hero_yoga_mat.png`, // Using hero as fallback if no logo file exists
  "sameAs": [
    "https://www.instagram.com/shopecovara",
    // Add other social links here
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "",
    "contactType": "customer service",
    "areaServed": "AE",
    "availableLanguage": "en"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <JsonLd data={organizationData} />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-background text-foreground`}
      >
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <GoogleAnalytics gaId="G-Z7KG60NCHW" />
      </body>
    </html>
  );
}
