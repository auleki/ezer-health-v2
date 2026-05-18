import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export default function BlogHero() {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Featured Image Mockup */}
          <div className="flex-1 w-full aspect-[4/3] bg-[#0A2E1F] rounded-sm relative overflow-hidden group">
            <div className="absolute inset-0 opacity-40 bg-gradient-to-br from-brand-accent/20 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center p-20">
              {/* Decorative digital neural network placeholder */}
              <div className="w-full h-full border border-white/10 rounded-full flex items-center justify-center animate-pulse">
                <div className="w-4/5 h-4/5 border border-white/5 rounded-full flex items-center justify-center">
                  <div className="w-3/5 h-3/5 border border-white/5 rounded-full" />
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 max-w-xl">
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="w-4 h-4 text-brand-dark/40" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Featured Insight</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-serif text-brand-dark leading-tight mb-8">
              The Neural Scribe: Redefining Clinical Documentation
            </h1>

            <p className="text-zinc-500 text-lg leading-relaxed mb-10">
              How next-generation ambient AI is reducing physician burnout by autonomously structuring complex patient encounters into interoperable EHR formats with 99.8% precision.
            </p>

            <Link href="/blog/articles/the-neural-scribe-redefining-clinical-documentation" className="flex items-center gap-2 text-brand-dark font-bold group">
              Read Full Analysis
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
