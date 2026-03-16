import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { GoogleAnalytics } from '@next/third-parties/google';

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ecovara | Premium Sustainable Luxury Yoga Mats",
  description: "Experience the ultimate grip with Ecovara's eco-friendly, natural rubber and cork yoga mats. Handcrafted for discerning yogis seeking sustainable luxury.",
  keywords: ["sustainable yoga mat", "luxury yoga mat", "eco-friendly yoga mat", "natural rubber yoga mat", "cork yoga mat", "non-slip yoga mat", "premium yoga mat", "biodegradable yoga mat", "UAE yoga"],
  openGraph: {
    title: "Ecovara | Premium Sustainable Luxury Yoga Mats",
    description: "Experience the ultimate grip with Ecovara's eco-friendly, natural rubber and cork yoga mats. Sustainable luxury for your practice.",
    url: "https://shopecovara.com",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-background text-foreground`}
      >
        <GoogleAnalytics gaId="G-Z7KG60NCHW" />
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
