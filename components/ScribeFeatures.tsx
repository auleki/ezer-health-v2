import { FileText, ShieldAlert, Brain } from "lucide-react";
import ScribeHowItWorks from "./ScribeHowItWorks";

export default function ScribeFeatures() {
  return (
    <section className="py-24 px-6 bg-[#FBFBF9]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-serif text-brand-dark mb-4">Intelligence in Every Syllable</h2>
          <p className="text-zinc-500 text-lg">Engineered for the modern clinical workflow.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Automated SOAP Generation */}
          <div className="md:col-span-2 bg-white rounded-sm border border-zinc-100 shadow-sm p-10 flex flex-col justify-between overflow-hidden relative">
            <div className="max-w-md relative z-10">
              <div className="w-12 h-12 bg-brand-accent/50 rounded-sm flex items-center justify-center mb-6">
                <FileText className="w-6 h-6 text-brand-dark" />
              </div>
              <h3 className="text-2xl font-serif text-brand-dark mb-4">Automated SOAP Generation</h3>
              <p className="text-zinc-600 leading-relaxed">
                Our LLMs are fine-tuned on millions of clinical hours to accurately categorize Subjective, Objective, Assessment, and Plan data from natural conversation.
              </p>
            </div>

            <div className="mt-12 -mb-10 bg-zinc-50 rounded-sm p-6 border border-zinc-100 shadow-inner">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="h-2 bg-brand-dark/10 rounded-sm w-1/3" />
                  <div className="h-2 bg-brand-dark/5 rounded-sm w-full" />
                  <div className="h-2 bg-brand-dark/5 rounded-sm w-full" />
                </div>
                <div className="space-y-2 border-l border-zinc-200 pl-4">
                  <div className="h-2 bg-brand-primary/10 rounded-sm w-1/3" />
                  <div className="h-2 bg-brand-primary/5 rounded-sm w-full" />
                </div>
              </div>
            </div>
          </div>

          {/* HIPAA & GDPR Secure */}
          <div className="bg-white rounded-sm border border-zinc-100 shadow-sm p-10 flex flex-col">
            <ShieldAlert className="w-8 h-8 text-brand-dark mb-6" />
            <h3 className="text-xl font-bold text-brand-dark mb-4">HIPAA & GDPR Secure</h3>
            <p className="text-zinc-500 text-sm leading-relaxed mb-8">
              Zero-retention data policies. Audio is processed and deleted immediately after synthesis, ensuring total patient privacy.
            </p>
            <div className="mt-auto pt-6 border-t border-zinc-50 flex items-center gap-3">
              <div className="px-3 py-1 bg-zinc-100 text-[10px] font-bold uppercase rounded-sm">SOC2 TYPE II Certified</div>
            </div>
          </div>

          {/* How it Works Carousel */}
          <ScribeHowItWorks />


          {/* Clinical Precision AI */}
          <div className="md:col-span-2 bg-[#0A2E1F] rounded-sm p-10 flex flex-col md:flex-row items-center gap-12 text-white overflow-hidden relative">
            <div className="flex-1 relative z-10">
              <div className="flex items-center gap-2 mb-6">
                <Brain className="w-6 h-6 text-brand-accent" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand-accent">Engineered Accuracy</span>
              </div>
              <h3 className="text-3xl font-serif mb-6">Clinical Precision AI</h3>
              <p className="text-zinc-300 leading-relaxed mb-8">
                Engineered with medical-grade terminology recognition. Our AI understands complex diagnostic paths and pharmacological nuances.
              </p>
              <button className="text-brand-accent text-sm font-bold underline underline-offset-4 hover:text-white transition-colors">
                Learn about our medical LLM training
              </button>
            </div>

            {/* Visual decoration */}
            <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-white/5 to-transparent flex items-center justify-center">
              <div className="w-32 h-32 rounded-full border border-white/10 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full border border-white/5 flex items-center justify-center" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
