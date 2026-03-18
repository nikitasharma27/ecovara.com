"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, X, ShoppingBag } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomepage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        isScrolled || !isHomepage ? "bg-background/95 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link
            href="/"
            className={cn(
              "font-serif text-3xl tracking-widest font-bold transition-colors duration-300",
              isScrolled || !isHomepage ? "text-foreground" : "text-white"
            )}
          >
            ECOVARA
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-10 text-sm uppercase tracking-widest font-medium">
            <Link
              href="/#story"
              className={cn(
                "hover:text-terracotta transition-colors duration-300",
                isScrolled || !isHomepage ? "text-foreground" : "text-white"
              )}
            >
              Our Story
            </Link>
            <Link
              href="/product/signature-mat"
              className={cn(
                "hover:text-terracotta transition-colors duration-300",
                isScrolled || !isHomepage ? "text-foreground" : "text-white"
              )}
            >
              Shop
            </Link>
            <Link
              href="/waitlist"
              className={cn(
                "hover:text-terracotta transition-colors duration-300",
                isScrolled || !isHomepage ? "text-foreground" : "text-white"
              )}
            >
              Waitlist
            </Link>
          </nav>

          <div className="flex items-center space-x-6">
            <Link
              href="/waitlist"
              className={cn(
                "hover:text-terracotta transition-colors duration-300 relative",
                isScrolled || !isHomepage ? "text-foreground" : "text-white"
              )}
              aria-label="Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-1 -right-2 bg-terracotta text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">0</span>
            </Link>
            <button
              className={cn(
                "md:hidden focus:outline-none transition-colors duration-300",
                isScrolled || !isHomepage ? "text-foreground" : "text-white"
              )}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-sand shadow-lg flex flex-col space-y-4 px-6 py-6 text-center uppercase tracking-widest font-medium text-sm">
          <Link
            href="/#story"
            className="hover:text-terracotta py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Our Story
          </Link>
          <Link
            href="/product/signature-mat"
            className="hover:text-terracotta py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Shop
          </Link>
          <Link
            href="/waitlist"
            className="hover:text-terracotta py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Waitlist
          </Link>
        </div>
      )}
    </header>
  );
}
