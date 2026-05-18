"use client";

import { useState, useRef } from "react";
import { Mic, MessageSquare, CheckCircle, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

export default function ScribeHowItWorks() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const slides = [
    {
      step: 1,
      icon: Mic,
      title: "Record",
      description: "Simply tap record on your mobile device or desktop application before entering the exam room.",
      iconBg: "bg-[#0A2E1F] text-brand-accent"
    },
    {
      step: 2,
      icon: MessageSquare,
      title: "Converse Naturally",
      description: "Focus entirely on the patient. The AI distinguishes speakers and ignores irrelevant small talk.",
      iconBg: "bg-[#0A2E1F] text-brand-accent"
    },
    {
      step: 3,
      icon: CheckCircle,
      title: "Review & Approve",
      description: "Within seconds of concluding, review a perfectly formatted SOAP note ready for signature.",
      iconBg: "bg-[#0A2E1F] text-brand-accent"
    }
  ];

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 50 && currentSlide < slides.length - 1) {
      setCurrentSlide((prev) => prev + 1);
    } else if (diff < -50 && currentSlide > 0) {
      setCurrentSlide((prev) => prev - 1);
    }
    touchStartX.current = null;
  };

  return (
    <div className="bg-white rounded-sm border border-zinc-100 shadow-sm p-10 flex flex-col justify-between overflow-hidden relative">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <Sparkles className="w-5 h-5 text-brand-accent" />
          <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Workflow Transformation</span>
        </div>
        <h3 className="text-xl font-bold text-brand-dark mb-2">How it Works</h3>
        <p className="text-zinc-500 text-xs leading-relaxed">
          Observe the transformation from raw dialogue to a structured, editorial-quality medical document.
        </p>
      </div>

      {/* Carousel Container */}
      <div 
        className="relative overflow-hidden mb-8 my-auto"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => {
            const IconComponent = slide.icon;
            return (
              <div key={index} className="w-full flex-shrink-0 px-1 select-none">
                <div className="bg-[#FBFBF9] rounded-sm p-6 border border-zinc-100 flex flex-col h-full min-h-[180px]">
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-10 h-10 rounded-sm flex items-center justify-center ${slide.iconBg}`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">
                      Step {slide.step} of 3
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-brand-dark mb-2">{slide.title}</h4>
                  <p className="text-zinc-600 text-xs leading-relaxed mt-auto">{slide.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Navigation & Controls */}
      <div className="flex items-center justify-between border-t border-zinc-100 pt-6 mt-auto">
        {/* Indicators */}
        <div className="flex items-center gap-1.5">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === currentSlide ? "w-6 bg-brand-dark" : "w-2 bg-zinc-200 hover:bg-zinc-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setCurrentSlide((prev) => Math.max(0, prev - 1))}
            disabled={currentSlide === 0}
            className={`w-8 h-8 rounded-sm border flex items-center justify-center transition-colors ${
              currentSlide === 0
                ? "border-zinc-100 text-zinc-300 cursor-not-allowed bg-zinc-50/50"
                : "border-zinc-200 text-brand-dark hover:bg-zinc-50 hover:border-zinc-300"
            }`}
            aria-label="Previous step"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => setCurrentSlide((prev) => Math.min(slides.length - 1, prev + 1))}
            disabled={currentSlide === slides.length - 1}
            className={`w-8 h-8 rounded-sm border flex items-center justify-center transition-colors ${
              currentSlide === slides.length - 1
                ? "border-zinc-100 text-zinc-300 cursor-not-allowed bg-zinc-50/50"
                : "border-zinc-200 text-brand-dark hover:bg-zinc-50 hover:border-zinc-300"
            }`}
            aria-label="Next step"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
