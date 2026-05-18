"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="pt-32 md:pt-48 pb-20 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="inline-flex items-center gap-2 bg-brand-accent px-3 py-1.5 rounded-sm border border-green-200 mb-12">
          <span className="text-brand-dark text-xs font-semibold tracking-wide flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-sm bg-green-600 animate-pulse" />
            Nucleus Of Modern Healthcare
          </span>
        </div>

        <div className="flex flex-col-reverse lg:flex-row-reverse items-center gap-12 lg:gap-16">
          <div className="flex-1 space-y-8">

          <h1 className="text-6xl lg:text-7xl font-serif text-brand-dark leading-[1.1]">
            The Intelligence <br /> Behind Better Care.
          </h1>

          <p className="text-zinc-600 text-lg max-w-xl leading-relaxed">
            Ezerhealthcare unites high-performance EHR workflows, automated remote monitoring and ambient AI scribing into a single, clinical-grade ecosystem.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-brand-dark text-white px-8 py-4 rounded-sm font-medium hover:bg-brand-primary transition-all flex items-center justify-center gap-2 group w-full sm:w-auto"
            >
              Explore Tools
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <Link 
              href="/contact"
              className="bg-white text-brand-dark border border-zinc-200 px-8 py-4 rounded-sm font-medium hover:bg-zinc-50 transition-all text-center w-full sm:w-auto"
            >
              Request Demo
            </Link>
          </div>
        </div>

        <div className="flex-1 relative w-full">
          <div className="relative bg-brand-accent/30 p-4 rounded-sm overflow-hidden">
            {/* Hero Image Container */}
            <div className="w-full aspect-[4/3] rounded-sm bg-[#0A1A0A] overflow-hidden shadow-2xl relative group">
              {/* Animated Gradients */}
              <div className="absolute inset-0 z-0">
                <div className="absolute top-0 -left-1/4 w-full h-full bg-brand-accent/20 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute -bottom-1/4 -right-1/4 w-full h-full bg-brand-primary/20 rounded-full blur-[120px] animate-pulse delay-700" />
              </div>

              {/* Custom SVG Background */}
              <div className="absolute inset-0 z-10 flex items-center justify-center opacity-80 group-hover:scale-110 transition-transform duration-700">
                <img
                  src="/landing-hero-bg.svg"
                  alt="Ezer Platform Visualization"
                  className="w-full h-full object-cover scale-[1.02]"
                />
              </div>

              {/* AI Scribing Overlay */}
              <div className="absolute top-6 left-6 z-20 bg-white/95 backdrop-blur shadow-lg rounded-sm p-3 flex items-center gap-3 border border-zinc-100">
                <div className="w-10 h-10 rounded-sm bg-brand-accent flex items-center justify-center">
                  <div className="w-5 h-5 flex flex-wrap gap-0.5">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="w-2 h-2 rounded-[1px] bg-brand-dark/60" />
                    ))}
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-wider font-bold text-zinc-400">AI SCRIBING</span>
                  <span className="text-xs font-bold text-brand-dark flex items-center gap-1">
                    Status: Active
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
