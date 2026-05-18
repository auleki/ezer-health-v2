import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function EHRHero() {
  return (
    <section className="pt-40 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <div className="inline-block px-2 py-1 bg-[#F0F7F0] text-[#4A7A4A] text-[10px] font-bold tracking-widest uppercase mb-8 rounded-sm">
            Clinical Precision
          </div>

          <h1 className="text-6xl lg:text-7xl font-serif text-brand-dark leading-tight mb-8">
            The EHR, evolved <br /> for clinical <br /> efficiency.
          </h1>

          <p className="text-zinc-600 text-lg mb-12 max-w-xl leading-relaxed">
            Ezerhealthcare EHR merges high-performance computing with intuitive clinical workflows. Spend less time documenting and more time with patients.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link 
              href="/contact"
              className="bg-[#0A1A0A] text-white px-10 py-5 rounded-sm font-bold hover:bg-brand-primary transition-all"
            >
              Schedule Tour
            </Link>
            <button className="bg-white text-brand-dark border border-zinc-200 px-10 py-5 rounded-sm font-bold hover:bg-zinc-50 transition-all text-center">
              Interoperability Whitepaper
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
