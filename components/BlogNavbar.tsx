"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, ArrowLeft, ArrowRight, ChevronDown, Menu, X } from "lucide-react";

export default function BlogNavbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { label: "About", href: "/about" },
    { label: "Products", href: "/#products", hasDropdown: true },
    { label: "Contact", href: "/contact" },
  ];

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

  const scrollToSubscribe = () => {
    const element = document.getElementById("newsletter");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4 md:gap-8">
            <Link href="/" className="flex items-center gap-2 text-zinc-400 hover:text-brand-dark transition-colors group">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span className="text-[10px] font-bold uppercase tracking-widest hidden sm:inline">Website</span>
            </Link>
            
            <div className="h-6 w-px bg-zinc-100 hidden md:block" />
            
            <Link href="/blog" className="text-lg md:xl font-serif font-bold text-brand-dark flex items-center gap-2">
              Insights
              <span className="text-[8px] px-1.5 py-0.5 bg-brand-accent text-brand-primary rounded-full uppercase tracking-tighter font-sans">Journal</span>
            </Link>
          </div>
          
          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="flex items-center gap-8 animate-in fade-in duration-300">
              {links.map((link) => {
                const isActive = pathname === link.href;
                if (link.hasDropdown) {
                  return (
                    <div key={link.label} className="relative group">
                      <button className="flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-zinc-400 group-hover:text-brand-dark transition-colors cursor-pointer">
                        {link.label}
                        <ChevronDown className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" />
                      </button>

                      <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                        <div className="w-[30rem] bg-white border border-zinc-100 shadow-2xl rounded-sm p-8 grid grid-cols-1 gap-6">
                          {productLinks.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className="group/item block -m-4 p-4 rounded-sm hover:bg-zinc-50 transition-all text-left"
                            >
                              <div className="text-sm font-bold text-brand-dark flex items-center gap-2 mb-2 normal-case tracking-normal">
                                {item.label}
                                <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300 text-brand-primary" />
                              </div>
                              <div className="flex flex-wrap gap-x-4 gap-y-1">
                                {item.descriptions.map((desc, i) => (
                                  <div key={i} className="text-[11px] text-zinc-400 flex items-center gap-1.5 whitespace-nowrap normal-case tracking-normal">
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
                  );
                }
                return (
                  <Link 
                    key={link.label} 
                    href={link.href} 
                    className={`text-xs font-bold uppercase tracking-widest transition-colors flex items-center gap-1 ${
                      isActive ? "text-brand-dark border-b-2 border-brand-dark pb-1" : "text-zinc-400 hover:text-brand-dark"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </div>
          
          <div className="flex items-center gap-4 md:gap-6">
            <button 
              onClick={() => setIsSearchOpen(true)}
              className="text-zinc-400 hover:text-brand-dark transition-colors cursor-pointer"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <button 
              onClick={scrollToSubscribe}
              className="hidden sm:block bg-brand-dark text-white px-6 py-2 rounded-sm text-[10px] font-bold uppercase tracking-widest hover:bg-brand-primary transition-all shadow-sm cursor-pointer"
            >
              Subscribe
            </button>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-brand-dark cursor-pointer"
              aria-label="Menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Search Overlay */}
        <div className={`absolute inset-0 bg-white z-[60] flex items-center px-6 transition-all duration-300 ${isSearchOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}`}>
          <div className="max-w-7xl mx-auto w-full flex items-center gap-4">
            <Search className="w-6 h-6 text-brand-dark" />
            <input 
              type="text" 
              placeholder="Search clinical insights..." 
              className="flex-1 bg-transparent border-none text-lg md:text-xl font-serif text-brand-dark focus:outline-none placeholder:text-zinc-200"
              autoFocus={isSearchOpen}
            />
            <button 
              onClick={() => setIsSearchOpen(false)}
              className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 hover:text-brand-dark transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-brand-dark z-[100] transition-all duration-500 lg:hidden flex flex-col ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <div className="h-20 px-6 flex items-center justify-between border-b border-white/10 shrink-0">
          <Link href="/blog" onClick={() => setIsMenuOpen(false)} className="text-xl font-serif font-bold text-white flex items-center gap-2">
            Insights
            <span className="text-[8px] px-1.5 py-0.5 bg-brand-accent text-brand-primary rounded-full uppercase tracking-tighter font-sans">Journal</span>
          </Link>
          <button 
            onClick={() => setIsMenuOpen(false)}
            className="p-2 text-white hover:text-brand-accent transition-colors cursor-pointer"
          >
            <X className="w-8 h-8" />
          </button>
        </div>

        <div className="flex-1 p-6 space-y-10 overflow-y-auto flex flex-col">
          <div className="space-y-6 mt-8">
            <h4 className="text-[10px] font-bold text-brand-accent uppercase tracking-[0.2em] border-b border-white/5 pb-4">
              Site Navigation
            </h4>
            <div className="grid grid-cols-1 gap-6">
              <Link 
                href="/about" 
                onClick={() => setIsMenuOpen(false)}
                className="text-3xl font-serif text-white flex items-center justify-between group"
              >
                About
                <ArrowLeft className="w-4 h-4 rotate-180 text-brand-accent opacity-0 group-hover:opacity-100 transition-all" />
              </Link>
              <Link 
                href="/contact" 
                onClick={() => setIsMenuOpen(false)}
                className="text-3xl font-serif text-white flex items-center justify-between group"
              >
                Contact
                <ArrowLeft className="w-4 h-4 rotate-180 text-brand-accent opacity-0 group-hover:opacity-100 transition-all" />
              </Link>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-[10px] font-bold text-brand-accent uppercase tracking-[0.2em] border-b border-white/5 pb-4">
              Clinical Suite
            </h4>
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

          <div className="pt-8 mt-auto space-y-8">
            <button 
              onClick={scrollToSubscribe}
              className="w-full bg-brand-accent text-brand-dark py-5 rounded-sm font-bold uppercase tracking-widest text-xs shadow-lg cursor-pointer"
            >
              Subscribe to Journal
            </button>
            <div className="border-t border-white/5 opacity-40 pt-4">
              <p className="text-[8px] font-bold text-zinc-500 uppercase tracking-widest">Ezerhealthcare Digital Journal</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
