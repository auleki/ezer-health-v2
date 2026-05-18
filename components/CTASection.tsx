"use client";

import Link from "next/link";

export default function CTASection() {
  return (
    <section className="px-6 py-24">
      <div className="max-w-7xl mx-auto bg-brand-dark rounded-sm overflow-hidden relative">
        {/* Background text decoration */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03] select-none overflow-hidden">
          <span className="text-[10rem] lg:text-[14rem] font-serif font-bold text-white whitespace-nowrap tracking-tighter">Safe Work</span>
        </div>

        <div className="relative z-10 py-24 px-6 text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-8 leading-tight">
            Ready to experience <br className="hidden md:block" /> clinical precision?
          </h2>
          <p className="text-zinc-400 text-base md:text-lg mb-12">
            Join hundreds of forward-thinking clinics using Ezerhealthcare to reduce clinician burnout and improve patient outcomes.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
            <button 
              onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-brand-accent text-brand-dark px-10 py-4 rounded-sm font-bold hover:bg-green-100 transition-all w-full sm:w-auto"
            >
              Explore Tools
            </button>
            <Link 
              href="/contact"
              className="text-white font-bold border-b-2 border-white/20 hover:border-white transition-all pb-1 w-full sm:w-auto text-center"
            >
              Talk to Sales
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
