"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, ArrowLeft, LayoutGrid, ChevronDown, Menu, X } from "lucide-react";

export default function BlogNavbar() {
  const [navMode, setNavMode] = useState<"blog" | "site">("blog");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const blogLinks = [
    { label: "Research", href: "/blog/research" },
    { label: "Clinical", href: "/blog/clinical" },
    { label: "AI Insights", href: "/blog/ai-insights" },
    { label: "Data Safety", href: "/blog/data-safety" },
  ];

  const siteLinks = [
    { label: "About", href: "/about" },
    { label: "Products", href: "/#products", hasDropdown: true },
    { label: "Contact", href: "/contact" },
  ];

  const currentLinks = navMode === "blog" ? blogLinks : siteLinks;

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
            <div className="flex items-center gap-2 mr-4 border-r border-zinc-100 pr-6">
              <button 
                onClick={() => setNavMode(navMode === "blog" ? "site" : "blog")}
                className="p-2 hover:bg-zinc-50 rounded-sm transition-colors group relative"
                title={`Switch to ${navMode === "blog" ? "Site" : "Blog"} Links`}
              >
                <LayoutGrid className={`w-4 h-4 ${navMode === "site" ? "text-brand-primary" : "text-zinc-400"}`} />
                <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-brand-primary rounded-full border-2 border-white scale-0 group-hover:scale-100 transition-transform" />
              </button>
              <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-300">
                {navMode === "blog" ? "Blog Nav" : "Site Nav"}
              </span>
            </div>

            <div className="flex items-center gap-8 animate-in fade-in duration-300">
              {currentLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link 
                    key={link.label} 
                    href={link.href} 
                    className={`text-xs font-bold uppercase tracking-widest transition-colors flex items-center gap-1 ${
                      isActive ? "text-brand-dark border-b-2 border-brand-dark pb-1" : "text-zinc-400 hover:text-brand-dark"
                    }`}
                  >
                    {link.label}
                    {(link as any).hasDropdown && <ChevronDown className="w-3 h-3 opacity-40" />}
                  </Link>
                );
              })}
            </div>
          </div>
          
          <div className="flex items-center gap-4 md:gap-6">
            <button 
              onClick={() => setIsSearchOpen(true)}
              className="text-zinc-400 hover:text-brand-dark transition-colors"
            >
              <Search className="w-5 h-5" />
            </button>
            <button 
              onClick={scrollToSubscribe}
              className="hidden sm:block bg-brand-dark text-white px-6 py-2 rounded-sm text-[10px] font-bold uppercase tracking-widest hover:bg-brand-primary transition-all shadow-sm"
            >
              Subscribe
            </button>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-brand-dark"
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
              className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 hover:text-brand-dark transition-colors"
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
            className="p-2 text-white hover:text-brand-accent transition-colors"
          >
            <X className="w-8 h-8" />
          </button>
        </div>

        <div className="flex-1 p-6 space-y-10 overflow-y-auto flex flex-col">
          <div className="flex items-center justify-between bg-white/5 p-4 rounded-sm border border-white/10 shrink-0 mt-8">
            <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">View Mode</span>
            <button 
              onClick={() => setNavMode(navMode === "blog" ? "site" : "blog")}
              className="flex items-center gap-2 bg-brand-accent px-4 py-2 rounded-sm"
            >
              <LayoutGrid className="w-3 h-3 text-brand-dark" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-brand-dark">
                {navMode === "blog" ? "Site Nav" : "Journal Nav"}
              </span>
            </button>
          </div>

          <div className="space-y-6">
            <h4 className="text-[10px] font-bold text-brand-accent uppercase tracking-[0.2em] border-b border-white/5 pb-4">
              {navMode === "blog" ? "Journal Categories" : "Site Navigation"}
            </h4>
            <div className="grid grid-cols-1 gap-6">
              {currentLinks.map((link) => (
                <Link 
                  key={link.label} 
                  href={link.href} 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-3xl font-serif text-white flex items-center justify-between group"
                >
                  {link.label}
                  <ArrowLeft className="w-4 h-4 rotate-180 text-brand-accent opacity-0 group-hover:opacity-100 transition-all" />
                </Link>
              ))}
            </div>
          </div>

          <div className="pt-8 mt-auto">
            <button 
              onClick={scrollToSubscribe}
              className="w-full bg-brand-accent text-brand-dark py-5 rounded-sm font-bold uppercase tracking-widest text-xs shadow-lg"
            >
              Subscribe to Journal
            </button>
          </div>
        </div>
        
        <div className="p-6 border-t border-white/5 opacity-40 shrink-0">
          <p className="text-[8px] font-bold text-zinc-500 uppercase tracking-widest">Ezerhealthcare Digital Journal</p>
        </div>
      </div>
    </>
  );
}
