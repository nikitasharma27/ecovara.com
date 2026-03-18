import { Metadata } from "next";
import ProductPageClient from "./ProductPageClient";
import JsonLd from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "The Signature Mat | Luxury Cork & Natural Rubber Yoga Mat",
  description: "Discover the ultimate grip with The Signature Mat. 100% natural cork and tree rubber, antimicrobial, and biodegradable. Perfect for UAE's hot yoga and home practice.",
  keywords: ["cork yoga mat", "natural rubber yoga mat", "non-slip yoga mat", "sustainable yoga mat UAE", "eco-friendly yoga luxury", "biodegradable mat"],
  alternates: {
    canonical: "https://ecovara.com/product/signature-mat",
  },
  openGraph: {
    title: "The Signature Mat | Premium Cork & Rubber Yoga Mat",
    description: "Sustainability meets performance. Experience the grounding foundation of natural cork and rubber.",
    url: "https://ecovara.com/product/signature-mat",
    type: "website",
    images: [
      {
        url: "/images/mat_product_1.png",
        width: 1200,
        height: 1500,
        alt: "The Signature Mat - Sustainable Cork Yoga Mat",
      },
    ],
  },
};

const productData = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "The Signature Mat",
  "image": [
    "https://ecovara.com/images/mat_product_1.png",
    "https://ecovara.com/images/mat_product_2.png"
  ],
  "description": "Experience the grounding foundation of 100% natural sustainably harvested cork combined with a dense natural tree rubber base. Designed specifically to enhance your grip as you sweat.",
  "brand": {
    "@type": "Brand",
    "name": "Ecovara"
  },
  "offers": {
    "@type": "Offer",
    "url": "https://ecovara.com/product/signature-mat",
    "priceCurrency": "AED",
    "price": "450",
    "availability": "https://schema.org/OutOfStock",
    "itemCondition": "https://schema.org/NewCondition"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5",
    "reviewCount": "12"
  }
};

export default function ProductPage() {
  return (
    <>
      <JsonLd data={productData} />
      <ProductPageClient />
    </>
  );
}
