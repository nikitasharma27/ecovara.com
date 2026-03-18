"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Leaf, Shield, Droplets, Wind, Ruler } from "lucide-react";
import { useState } from "react";
import FAQ from "@/components/product/FAQ";

export default function ProductPageClient() {
  const [activeImage, setActiveImage] = useState(0);
  const images = ["/images/mat_product_1.png", "/images/mat_product_2.png"];

  return (
    <div className="pt-24 pb-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Product Top Section */}
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Main Gallery */}
          <div className="w-full lg:w-[55%] lg:sticky lg:top-24">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="relative aspect-4/5 bg-sand/10 mb-4 overflow-hidden"
            >
              <Image
                src={images[activeImage]}
                alt="The Signature Mat - Eco-friendly Cork Yoga Mat"
                fill
                className="object-cover transition-all duration-700 hover:scale-105 cursor-zoom-in"
                sizes="(max-width: 1024px) 100vw, 55vw"
                priority
              />
            </motion.div>
            <div className="flex gap-4">
              {images.map((src, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`relative w-24 h-24 overflow-hidden border-2 transition-colors ${activeImage === idx ? 'border-terracotta' : 'border-transparent hover:border-sand'}`}
                >
                  <Image src={src} alt={`Thumbnail ${idx + 1}`} fill className="object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="w-full lg:w-[45%]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-forest text-white text-[10px] uppercase font-bold tracking-widest px-2 py-1">Limited Batch</span>
                <span className="text-terracotta text-xs font-semibold uppercase tracking-widest">Handcrafted in India</span>
              </div>

              <h1 className="font-serif text-4xl md:text-5xl text-foreground font-bold leading-tight mb-4">
                The Signature Mat
              </h1>
              <p className="text-2xl font-serif text-foreground/80 mb-8 italic">299 AED</p>

              <div className="space-y-4 text-foreground/70 font-light leading-relaxed mb-8 text-lg">
                <p>
                  Experience the grounding foundation of 100% natural sustainably harvested cork combined with a dense natural tree rubber base.
                </p>
                <p>
                  Designed specifically to enhance your grip as you sweat, making it the perfect companion for the dynamic climate of the UAE. No towel required.
                </p>
              </div>

              {/* Specs */}
              <div className="grid grid-cols-2 gap-4 mb-10 border-y border-sand/30 py-6">
                <div className="flex items-center gap-3">
                  <Ruler className="text-terracotta w-5 h-5 opacity-70" />
                  <div>
                    <p className="text-xs uppercase tracking-widest font-semibold text-foreground/50">Dimensions</p>
                    <p className="font-medium text-sm">183cm x 61cm</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Leaf className="text-terracotta w-5 h-5 opacity-70" />
                  <div>
                    <p className="text-xs uppercase tracking-widest font-semibold text-foreground/50">Thickness</p>
                    <p className="font-medium text-sm">5mm for joint support</p>
                  </div>
                </div>
              </div>

              {/* Waitlist Call to Action */}
              <Link
                href="/waitlist"
                className="w-full block text-center bg-foreground text-background py-5 uppercase tracking-widest text-sm font-semibold hover:bg-terracotta transition-all duration-300 shadow-xl shadow-foreground/10 hover:shadow-terracotta/20"
              >
                Join Waitlist for Next Batch
              </Link>
              <p className="text-center text-xs text-foreground/50 mt-4 uppercase tracking-wider">Currently out of stock. Securing your spot is completely free.</p>
            </motion.div>
          </div>
        </div>

        {/* Infographic Why Cork Section */}
        <div className="mt-24 pt-20 border-t border-sand/30">
          <div className="text-center mb-16">
            <span className="uppercase tracking-[0.2em] text-forest text-sm font-semibold mb-4 block">The Science of Nature</span>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground font-bold">Why Natural Cork?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-20 h-20 mx-auto bg-sand/30 rounded-full flex items-center justify-center mb-6 text-forest">
                <Droplets className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl font-bold mb-4">Grip Activated by Sweat</h3>
              <p className="text-foreground/70 font-light leading-relaxed">Cork contains suberin, a waxy, grippy substance that gets stickier and offers supreme traction when wet. The more you sweat, the better your grip.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="w-20 h-20 mx-auto bg-sand/30 rounded-full flex items-center justify-center mb-6 text-forest">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl font-bold mb-4">Naturally Antimicrobial</h3>
              <p className="text-foreground/70 font-light leading-relaxed">Unlike synthetic mats that trap bacteria and odor, cork naturally repels dust, hair, and microbes. It practically cleans itself, making it a hygienic choice.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="w-20 h-20 mx-auto bg-sand/30 rounded-full flex items-center justify-center mb-6 text-forest">
                <Wind className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl font-bold mb-4">100% Biodegradable</h3>
              <p className="text-foreground/70 font-light leading-relaxed">Harvested simply by peeling the bark—never cutting down the tree. It regenerates every 9 years, absorbing up to 5 times more CO2 during regrowth.</p>
            </motion.div>
          </div>
        </div>

        {/* FAQ Section */}
        <FAQ />
      </div>
    </div>
  );
}
