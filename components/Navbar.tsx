"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const productLinks = [
    { 
      label: "Clinical Scribe", 
      href: "/clinical-scribe",
      descriptions: ["Intelligent Medical Memory", "Automated SOAP Generation", "HIPAA & GDPR Secure"]
    },
    { 
      label: "Unified EHR", 
      href: "/ehr",
      descriptions: ["Intelligent Adaptive Workflows", "Clinical Context, front and center", "Universal Sync"]
    },
    { 
      label: "RPM & CCM", 
      href: "/rpm",
      descriptions: ["Real-time Vitals Monitoring", "Patient Engagement", "Continuous Biometric Streams"]
    },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-light/80 backdrop-blur-md border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="text-2xl font-serif font-semibold text-brand-dark">
            Ezerhealthcare
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/about" className="text-sm font-medium text-zinc-600 hover:text-brand-dark transition-colors">
              About
            </Link>

            {/* Products Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 text-sm font-medium text-zinc-600 group-hover:text-brand-dark transition-colors">
                Products
                <ChevronDown className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
              </button>

              <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="w-[30rem] bg-white border border-zinc-100 shadow-2xl rounded-sm p-8 grid grid-cols-1 gap-6">
                  {productLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="group/item block -m-4 p-4 rounded-sm hover:bg-zinc-50 transition-all"
                    >
                      <div className="text-sm font-bold text-brand-dark flex items-center gap-2 mb-2">
                        {item.label}
                        <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300 text-brand-primary" />
                      </div>
                      <div className="flex flex-wrap gap-x-4 gap-y-1">
                        {item.descriptions.map((desc, i) => (
                          <div key={i} className="text-[11px] text-zinc-400 flex items-center gap-1.5 whitespace-nowrap">
                            <div className="w-1 h-1 rounded-full bg-brand-primary/30" />
                            {desc}
                          </div>
                        ))}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link href="/blog" className="text-sm font-medium text-zinc-600 hover:text-brand-dark transition-colors">
              Blog
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-4">

              <Link
                href="/contact"
                className="bg-brand-dark text-white px-5 py-2.5 rounded-sm text-sm font-medium hover:bg-brand-primary transition-all shadow-sm"
              >
                Request Demo
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-brand-dark"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-brand-dark z-[100] transition-all duration-500 md:hidden flex flex-col ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
          }`}
      >
        <div className="h-20 px-6 flex items-center justify-between border-b border-white/10 shrink-0">
          <Link href="/" onClick={() => setIsMenuOpen(false)} className="text-2xl font-serif font-semibold text-white">
            Ezerhealthcare
          </Link>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="p-2 text-white hover:text-brand-accent transition-colors"
          >
            <X className="w-8 h-8" />
          </button>
        </div>

        <div className="flex-1 p-6 space-y-12 overflow-y-auto flex flex-col">
          <div className="space-y-6">
            <h4 className="text-[10px] font-bold text-brand-accent uppercase tracking-[0.2em] border-b border-white/5 pb-4">Navigation</h4>
            <div className="space-y-4">
              <Link href="/about" onClick={() => setIsMenuOpen(false)} className="block text-4xl font-serif text-white hover:text-brand-accent transition-colors">About</Link>
              <Link href="/blog" onClick={() => setIsMenuOpen(false)} className="block text-4xl font-serif text-white hover:text-brand-accent transition-colors">Blog</Link>
              <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="block text-4xl font-serif text-white hover:text-brand-accent transition-colors">Contact</Link>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-[10px] font-bold text-brand-accent uppercase tracking-[0.2em] border-b border-white/5 pb-4">Clinical Suite</h4>
            <div className="grid grid-cols-1 gap-8">
              {productLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="group block space-y-3"
                >
                  <div className="text-2xl font-serif text-white group-hover:text-brand-accent transition-colors">{item.label}</div>
                  <div className="flex flex-col gap-1.5">
                    {item.descriptions.map((desc, i) => (
                      <div key={i} className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-brand-accent/20" />
                        {desc}
                      </div>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="pt-8 grid grid-cols-1 gap-4 mt-auto">
            <Link
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="bg-brand-accent text-brand-dark py-5 rounded-sm font-bold uppercase tracking-widest text-center text-[10px]"
            >
              Request Demo
            </Link>
          </div>
        </div>

        {/* Footer decoration for mobile menu */}
        <div className="p-6 border-t border-white/5 opacity-40 shrink-0">
          <p className="text-[8px] font-bold text-zinc-500 uppercase tracking-widest">© 2024 Ezerhealthcare Systems</p>
        </div>
      </div>
    </>
  );
}
