"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Story() {
  return (
    <section id="story" className="py-24 md:py-32 bg-background overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-16 lg:gap-24">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full md:w-1/2 relative h-[500px] md:h-[700px]"
          >
            <Image 
              src="/images/story_cork_harvest.png" 
              alt="Harvesting natural cork bark" 
              fill
              className="object-cover shadow-2xl"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="w-full md:w-1/2"
          >
            <span className="uppercase tracking-[0.2em] text-terracotta text-sm font-semibold mb-6 block">Our Heritage</span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground font-bold leading-tight mb-8">
              Rooted in 5,000 Years of Tradition.
            </h2>
            <div className="space-y-6 text-foreground/80 font-light leading-relaxed text-lg">
              <p>
                Yoga wasn't born in a sterile studio. It was born on the earth, under the Indian sun. For millennia, practitioners have sought a grounded connection to the natural world.
              </p>
              <p>
                We honor that heritage by reviving the purest materials. Our signature mats are consciously crafted from sustainably harvested natural cork and dense tree rubber, completely free from toxic PVCs and synthetic TPEs.
              </p>
              <p className="font-serif italic text-2xl text-forest pt-6 border-l-2 border-terracotta pl-6 my-8">
                "A practice as ancient as yoga deserves a foundation built by nature."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
