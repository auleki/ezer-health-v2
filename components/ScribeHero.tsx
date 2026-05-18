import { Play, Mic, Shield } from "lucide-react";
import Link from "next/link";

export default function ScribeHero() {
  return (
    <section className="pt-32 md:pt-48 pb-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        <div className="flex-1 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-accent/50 text-brand-dark text-[10px] font-bold tracking-widest uppercase mb-8 rounded-sm">
            Ambient Intelligence
          </div>
          
          <h1 className="text-6xl lg:text-7xl font-serif text-brand-dark leading-[1.1] mb-8">
            Focus on the patient, <br /> not the paperwork.
          </h1>
          
          <p className="text-zinc-600 text-lg mb-12 max-w-xl leading-relaxed">
            Our AI Scribe listens in the background, capturing clinical nuances and generating structured SOAP notes in real-time. Clinically precise, HIPAA-secure, and fully interoperable.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Link 
              href="/contact"
              className="bg-[#0A2E1F] text-white px-10 py-5 rounded-sm font-bold hover:bg-brand-primary transition-all flex items-center gap-2 group"
            >
              <Mic className="w-4 h-4 group-hover:scale-110 transition-transform" />
              Start Free Trial
            </Link>
            <button className="bg-white text-brand-dark border border-zinc-200 px-10 py-5 rounded-sm font-bold hover:bg-zinc-50 transition-all flex items-center gap-2">
              <Play className="w-4 h-4 fill-brand-dark" />
              Watch Demo
            </button>
          </div>
        </div>
        
        <div className="flex-1 w-full relative">
          <div className="bg-white p-8 rounded-sm shadow-2xl border border-zinc-100 relative overflow-hidden">
            {/* Recording Status */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <span className="text-[10px] font-bold text-red-500 tracking-widest uppercase">Recording Active</span>
              </div>
              <span className="text-[10px] font-mono text-zinc-400">04:22:15</span>
            </div>
            
            {/* Transcript Simulation */}
            <div className="space-y-6">
              <div className="bg-zinc-50 p-4 rounded-sm border-l-2 border-brand-dark/20">
                <p className="text-xs text-zinc-500 italic">
                  "And how has the pain in your lower back changed since our last session?"
                </p>
              </div>
              
              <div className="bg-brand-accent/30 p-4 rounded-sm border-l-2 border-brand-primary">
                <p className="text-xs text-brand-dark font-medium leading-relaxed">
                  "It's more localized now, especially after sitting for long hours at the desk. I've noticed a sharp..."
                </p>
                <div className="mt-2 w-1 h-4 bg-brand-dark animate-pulse" />
              </div>
              
              <div className="pt-6 border-t border-zinc-100">
                <div className="flex items-center gap-2 text-brand-dark/40 text-[10px] font-bold uppercase tracking-widest">
                  <div className="flex gap-0.5">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="w-1 h-3 bg-brand-dark/20 animate-bounce" style={{ animationDelay: `${i * 100}ms` }} />
                    ))}
                  </div>
                  AI generating SOAP Subjective...
                </div>
              </div>
            </div>
          </div>
          
          {/* Trust Floating Badge */}
          <div className="absolute -bottom-6 -right-6 bg-brand-dark text-white p-4 rounded-sm shadow-xl flex items-center gap-3 border border-white/10">
            <Shield className="w-8 h-8 text-brand-accent" />
            <div className="flex flex-col">
              <span className="text-[8px] font-bold uppercase tracking-widest text-brand-accent/60">Security Stack</span>
              <span className="text-[10px] font-bold">SOC2 TYPE II</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
