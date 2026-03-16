"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero_yoga_mat.png"
          alt="Premium Natural Cork Yoga Mat"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Subtle overlay to enhance text readability while maintaining image beauty */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 mix-blend-multiply" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center justify-center text-center mt-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl"
        >
          <span className="uppercase tracking-[0.3em] text-sand-light text-sm font-semibold mb-6 block">The Signature Collection</span>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white font-bold leading-tight mb-8">
            5,000 Years in the Making.
          </h1>
          <h2 className="font-serif text-2xl md:text-4xl text-sand-light italic font-light mb-8">
            Finally, a Mat that Breathes.
          </h2>
          <p className="text-sand/90 text-sm md:text-lg max-w-3xl mx-auto mb-12 leading-relaxed font-light">
            Handcrafted Indian cork. Sustained by nature. Designed for the discerning yogi in the UAE.
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link
              href="/product/signature-mat"
              className="inline-flex items-center justify-center bg-terracotta text-white px-10 py-4 uppercase tracking-[0.2em] text-sm font-medium hover:bg-white hover:text-terracotta transition-all duration-500 group"
            >
              Shop the Collection
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
