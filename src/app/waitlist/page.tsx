"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { sendGAEvent } from '@next/third-parties/google';
import FAQ from "@/components/product/FAQ";

export default function WaitlistPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {

      setSubmitted(true);
      sendGAEvent('event', 'join_waitlist', {
        value: 'cork_mat_v1',
        label: 'UAE Early Access'
      })
    }
  };

  return (
    <div className="bg-background">
      <div className="min-h-screen pt-24 md:pt-0 flex flex-col md:flex-row">
        {/* Left Side: Imagery */}
        <div className="w-full md:w-1/2 relative min-h-[40vh] md:min-h-screen">
          <Image
            src="/images/mat_product_2.png"
            alt="Natural Cork Texture"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Right Side: Form Content */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-8 lg:p-16 relative">
          <Link href="/" className="absolute top-8 right-8 text-sm uppercase tracking-widest font-semibold text-foreground/50 hover:text-terracotta transition-colors">
            Return Home
          </Link>
          <div className="max-w-md w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="uppercase tracking-[0.2em] text-terracotta text-sm font-semibold mb-4 block">Exclusive Access</span>
              <h1 className="font-serif text-4xl md:text-5xl text-foreground font-bold leading-tight mb-6">
                Join the Inner Circle.
              </h1>

              {!submitted ? (
                <>
                  <p className="text-foreground/70 font-light leading-relaxed mb-10 text-lg">
                    We are currently perfecting the next batch of our signature mats. Join the exclusive waitlist for early access and complimentary shipping in Dubai and Abu Dhabi.
                  </p>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="email" className="sr-only">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address"
                        className="w-full bg-transparent border-b-2 border-foreground/20 px-0 py-4 text-foreground text-lg focus:outline-none focus:border-terracotta transition-colors placeholder:text-foreground/30 rounded-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-foreground text-background py-4 flex items-center justify-center gap-3 uppercase tracking-widest text-sm font-semibold hover:bg-terracotta transition-colors group"
                    >
                      Request Access <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </form>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-sand/30 p-8 rounded-sm text-center border border-sand"
                >
                  <div className="mx-auto w-12 h-12 bg-forest text-white rounded-full flex items-center justify-center mb-6">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-2xl text-foreground font-bold mb-4">You're on the list.</h3>
                  <p className="text-foreground/70 font-light">
                    Thank you for your patience. We will notify you the moment our next batch arrives in the UAE.
                  </p>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
        <FAQ />
      </div>
    </div>
  );
}
