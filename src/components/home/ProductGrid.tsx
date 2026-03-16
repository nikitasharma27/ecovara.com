"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ProductGrid() {
  return (
    <section className="py-24 bg-[#FAFAF8] border-t border-sand/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 flex flex-col items-center">
          <span className="uppercase tracking-[0.2em] text-forest text-sm font-semibold mb-4 block">The Sustainable Collection</span>
          <h2 className="font-serif text-3xl md:text-5xl text-foreground font-bold mb-6">Discover The Signature Eco Mat</h2>
          <div className="w-16 h-0.5 bg-terracotta mb-6"></div>
          <p className="text-foreground/70 max-w-2xl font-light">Experience the perfect balance of organic grip and supportive cushioning with our premium natural cork and rubber yoga mats, designed specifically for the humid climate of the UAE.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Main Product Image */}
          <motion.div 
            whileHover={{ y: -8 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="group block"
          >
            <Link href="/product/signature-mat">
              <div className="relative h-[450px] md:h-[650px] w-full mb-8 bg-white overflow-hidden shadow-sm">
                <Image 
                  src="/images/mat_product_1.png" 
                  alt="The Signature Mat - Rolled" 
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-[0.16,1,0.3,1]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute top-4 left-4 bg-terracotta text-white text-xs font-bold uppercase tracking-wider px-3 py-1">
                  Bestseller
                </div>
              </div>
              <div className="flex justify-between items-start pt-2">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-2 group-hover:text-terracotta transition-colors">The Signature Mat</h3>
                  <p className="text-sm text-foreground/70 font-light">Natural Cork & Organic Rubber • 5mm Thickness</p>
                </div>
                <span className="font-medium text-xl whitespace-nowrap ml-4">450 AED</span>
              </div>
            </Link>
          </motion.div>

          {/* Texture Showcase */}
          <motion.div 
            whileHover={{ y: -8 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="group block md:mt-16"
          >
            <Link href="/product/signature-mat">
              <div className="relative h-[450px] md:h-[650px] w-full mb-8 bg-white overflow-hidden shadow-sm">
                <Image 
                  src="/images/mat_product_2.png" 
                  alt="The Signature Mat - Texture" 
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-[0.16,1,0.3,1]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="flex justify-between items-start pt-2">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-2 group-hover:text-terracotta transition-colors">Organic Details</h3>
                  <p className="text-sm text-foreground/70 font-light">Antimicrobial • Self-Cleaning Surface</p>
                </div>
                <span className="text-sm uppercase tracking-widest text-terracotta font-semibold mt-2 flex items-center gap-2">
                  Explore <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </div>
            </Link>
          </motion.div>
        </div>
        
        <div className="mt-24 text-center">
          <Link 
            href="/waitlist"
            className="inline-flex items-center justify-center border-2 border-forest text-forest px-12 py-4 uppercase tracking-[0.2em] text-sm font-semibold hover:bg-forest hover:text-white transition-all duration-300"
          >
            Join The Waitlist
          </Link>
        </div>
      </div>
    </section>
  );
}
