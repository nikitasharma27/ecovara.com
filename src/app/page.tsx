import Hero from "@/components/home/Hero";
import BenefitBar from "@/components/home/BenefitBar";
import Story from "@/components/home/Story";
import ProductGrid from "@/components/home/ProductGrid";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ecovara | Premium Sustainable Luxury Yoga Mats in UAE",
  description: "Experience the ultimate non-slip grip with Ecovara's 100% natural cork and rubber yoga mats. Ethical, sustainable, and handcrafted for your peak performance. Shop the best yoga mats in Dubai and Abu Dhabi.",
  keywords: ["premium yoga mat", "cork yoga mats UAE", "sustainable luxury", "non-slip yoga mat Dubai", "best yoga mat Abu Dhabi", "ecovara yoga"],
};

export default function Home() {
  return (
    <>
      <Hero />
      <BenefitBar />
      <Story />
      <ProductGrid />
    </>
  );
}
