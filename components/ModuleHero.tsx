"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

interface ModuleHeroProps {
  badge: string;
  title: string | ReactNode;
  description: string;
  ctaText?: string;
  ctaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  imageSrc: string;
  statusLabel?: string;
  statusValue?: string;
  reverse?: boolean;
}

export default function ModuleHero({
  badge,
  title,
  description,
  ctaText = "Get Started",
  ctaHref = "/contact",
  secondaryCtaText,
  secondaryCtaHref = "#",
  imageSrc,
  statusLabel = "MODULE STATUS",
  statusValue = "Operational",
  reverse = false,
}: ModuleHeroProps) {
  return (
    <section className="pt-32 md:pt-48 pb-20 px-6 relative overflow-hidden">
      <div className={`max-w-7xl mx-auto flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-16 relative z-10`}>
        <div className="flex-1 space-y-8">
          <div className="inline-flex items-center gap-2 bg-brand-accent px-3 py-1.5 rounded-sm border border-green-200">
            <span className="text-brand-dark text-xs font-semibold tracking-wide flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-sm bg-green-600 animate-pulse" />
              {badge}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif text-brand-dark leading-[1.1]">
            {title}
          </h1>

          <p className="text-zinc-600 text-lg max-w-xl leading-relaxed">
            {description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link
              href={ctaHref}
              target={ctaHref.startsWith("http") ? "_blank" : undefined}
              rel={ctaHref.startsWith("http") ? "noopener noreferrer" : undefined}
              className="bg-brand-dark text-white px-8 py-4 rounded-sm font-medium hover:bg-brand-primary transition-all flex items-center justify-center gap-2 group w-full sm:w-auto"
            >
              {ctaText}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            {secondaryCtaText && (
              <Link
                href={secondaryCtaHref}
                className="bg-white text-brand-dark border border-zinc-200 px-8 py-4 rounded-sm font-medium hover:bg-zinc-50 transition-all text-center w-full sm:w-auto"
              >
                {secondaryCtaText}
              </Link>
            )}
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

              {/* Module Specific Image */}
              <div className="absolute inset-0 z-10 flex items-center justify-center opacity-80 group-hover:scale-110 transition-transform duration-700">
                <img
                  src={imageSrc}
                  alt="Module Visualization"
                  className="w-full h-full object-cover scale-[1.02]"
                />
              </div>

              {/* Status Overlay */}
              <div className="absolute top-6 left-6 z-20 bg-white/95 backdrop-blur shadow-lg rounded-sm p-3 flex items-center gap-3 border border-zinc-100">
                <div className="w-10 h-10 rounded-sm bg-brand-accent flex items-center justify-center">
                  <div className="w-5 h-5 flex flex-wrap gap-0.5">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="w-2 h-2 rounded-[1px] bg-brand-dark/60" />
                    ))}
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-wider font-bold text-zinc-400">{statusLabel}</span>
                  <span className="text-xs font-bold text-brand-dark flex items-center gap-1">
                    Status: {statusValue}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
