import FAQ from "@/components/product/FAQ";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Ecovara UAE",
  description: "Find answers to common questions about Ecovara's natural cork yoga mats, sustainability, delivery in the UAE, and mat care.",
};

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-background pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="font-serif text-5xl md:text-6xl text-foreground font-bold mb-6">Support</h1>
          <p className="text-foreground/60 max-w-2xl mx-auto font-light text-lg italic">
            Your guide to the Ecovara experience.
          </p>
        </div>
        
        {/* We use the existing FAQ component but remove the top border/margin as it's the main content here */}
        <div className="[&>section]:mt-0 [&>section]:pt-0 [&>section]:border-t-0">
          <FAQ />
        </div>

        <div className="mt-20 text-center p-12 bg-sand/20 rounded-sm border border-sand/30">
          <h2 className="font-serif text-2xl font-bold mb-4 text-foreground">Still have questions?</h2>
          <p className="text-foreground/70 mb-8 font-light">We're here to help you on your sustainable wellness journey.</p>
          <a 
            href="mailto:hello@ecovara.com" 
            className="inline-block bg-foreground text-background px-8 py-4 uppercase tracking-widest text-sm font-semibold hover:bg-terracotta transition-colors"
          >
            Contact Support
          </a >
        </div>
      </div>
    </main>
  );
}
