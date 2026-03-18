"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is Ecovara's yoga mat made from?",
    answer: "Ecovara's Signature Mat is crafted from two natural materials — sustainably harvested natural cork on the surface and dense, organic tree rubber on the base. Both are 100% biodegradable, free from PVCs and synthetic plastics. No toxins. No compromise."
  },
  {
    question: "Why is cork better than PVC or TPE for a yoga mat?",
    answer: "Cork is antimicrobial, meaning it naturally repels bacteria, mold, and odors without chemical treatments. Unlike PVC mats, it's completely biodegradable and non-toxic. Its grip actually improves as you sweat — making it ideal for hot and humid climates like the UAE. PVC and TPE mats become slippery when wet."
  },
  {
    question: "Is the Ecovara mat truly biodegradable?",
    answer: "Yes. Both natural cork and organic tree rubber break down naturally at end of life. Cork is harvested by stripping bark from oak trees — the tree lives on and regenerates. Tree rubber is tapped sustainably. No synthetic materials are used at any stage."
  },
  {
    question: "Does the mat slip during hot yoga or sweaty sessions?",
    answer: "No — and this is where cork outperforms most materials. The natural cork surface becomes more grippy when it contacts moisture. The organic rubber base locks to your floor. Ecovara is specifically designed for the UAE's hot and humid climate."
  },
  {
    question: "What thickness is the Ecovara mat, and is it good for my joints?",
    answer: "The Signature Mat is 5mm thick — widely considered the ideal balance between cushioning and ground connection. It protects knees and wrists during held poses while keeping you grounded for balance work. Thinner than foam-heavy mats, but the density of natural rubber provides superior joint support per millimetre."
  },
  {
    question: "What makes this mat different from a cheap yoga mat from Noon or Amazon?",
    answer: "Mass-market mats use PVC foam — light, cheap, but toxic, slippery when wet, and ending up in landfill within 12 months. Ecovara uses dense natural rubber and cork: heavier, more durable, fully biodegradable, and with grip that improves rather than degrades over time. It's a once-for-years investment rather than an annual replacement."
  },
  {
    question: "Do you deliver across the UAE?",
    answer: "Yes — complimentary delivery is included on all orders across the UAE. No minimum spend. Dubai, Abu Dhabi, Sharjah, and beyond."
  },
  {
    question: "How much does the Ecovara mat cost, and is it worth it?",
    answer: "The Signature Mat is priced at AED 299. Unlike synthetic mats that need replacing yearly, a well-maintained cork mat lasts several years. That works out to significantly less per-use cost — and zero toxic landfill at end of life."
  },
  {
    question: "Does the mat come with a bag or strap?",
    answer: "Ecovara mats are currently sold as standalone premium equipment. We are exploring sustainable carry solutions to bundle in future batches. Many of our customers prefer to use their existing straps to minimize additional waste."
  },
  {
    question: "How do I clean my cork yoga mat?",
    answer: "Wipe with a damp cloth after each session. For a deeper clean, use a diluted mix of water and a few drops of tea tree oil — this complements cork's natural antimicrobial properties. Never submerge in water or machine wash. Air dry flat, away from direct sunlight."
  },
  {
    question: "How long will the mat last?",
    answer: "With regular practice and proper care, the Ecovara mat is built to last 3–5 years or more. Natural cork and rubber are far more durable than synthetic foam. Unlike PVC mats which degrade and pill, cork maintains its texture and grip over time."
  },
  {
    question: "Is Ecovara suitable for beginners?",
    answer: "Absolutely. The 5mm thickness provides the cushioning and confidence beginners need, while the non-slip cork surface removes the frustration of slipping mid-pose. Many beginners find cork mats easier to learn on than standard PVC mats precisely because the grip is so reliable from day one."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section id="faq" className="mt-32 pt-20 border-t border-sand/60">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="text-center mb-16">
        {/* <span className="uppercase tracking-[0.2em] text-forest text-sm font-semibold mb-4 block">Knowledge Base</span> */}
        <h2 className="font-serif text-3xl md:text-4xl text-foreground font-bold mb-4">Frequently Asked Questions</h2>
        <p className="text-foreground/85 max-w-2xl mx-auto font-light">Everything you need to know about the most sustainable yoga mat in the UAE.</p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b border-sand/60 pb-4"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex justify-between items-center text-left py-4 hover:text-terracotta transition-colors group"
            >
              <h3 className="font-serif text-xl font-medium text-foreground pr-8 group-hover:text-terracotta transition-colors">
                {faq.question}
              </h3>
              <ChevronDown
                className={`w-5 h-5 text-terracotta transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
              />
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="text-foreground/85 leading-relaxed font-light pb-4">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
