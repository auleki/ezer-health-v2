import { ShieldCheck, RefreshCcw, BrainCircuit } from "lucide-react";

export default function ThreePillars() {
  return (
    <section className="py-32 px-6 bg-[#F3F6F3]">
      <div className="max-w-7xl mx-auto text-center">
        <div className="inline-block mb-16">
          <h2 className="text-4xl font-serif text-brand-dark mb-4 tracking-tight">The Three Pillars of Ezerhealthcare</h2>
          <div className="w-16 h-1 bg-brand-dark mx-auto rounded-sm" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="flex flex-col items-center text-center group">
            <div className="w-16 h-16 bg-white rounded-sm shadow-sm flex items-center justify-center mb-8 group-hover:shadow-md transition-all">
              <ShieldCheck className="w-8 h-8 text-brand-dark" />
            </div>
            <h3 className="text-xl font-serif text-brand-dark mb-4">Ironclad Security</h3>
            <p className="text-zinc-500 leading-relaxed max-w-xs">
              HIPAA, SOC2 Type II, and end-to-end encryption. Your data is your most valuable asset; we treat it as such.
            </p>
          </div>

          <div className="flex flex-col items-center text-center group">
            {/* <div className="w-16 h-16 bg-white rounded-sm shadow-sm flex items-center justify-center mb-8 group-hover:shadow-md transition-all">
              <RefreshCcw className="w-8 h-8 text-brand-dark" />
            </div> */}
            <div className="w-16 h-16 bg-white rounded-sm shadow-sm flex items-center justify-center mb-8 group-hover:shadow-md transition-all">
              <img
                src={`/icons/flow-icon.svg`}
                className="w-6 h-6 object-contain opacity-80"
              />
            </div>
            <h3 className="text-xl font-serif text-brand-dark mb-4">Flow Interoperability</h3>
            <p className="text-zinc-500 leading-relaxed max-w-xs">
              We don't believe in walls. Our system is designed to talk to everything, ensuring a 360° view of patient health.
            </p>
          </div>

          <div className="flex flex-col items-center text-center group">
            {/* <div className="w-16 h-16 bg-white rounded-sm shadow-sm flex items-center justify-center mb-8 group-hover:shadow-md transition-all">
              <BrainCircuit className="w-8 h-8 text-brand-dark" />
            </div> */}
            <div className="w-16 h-16 bg-white rounded-sm shadow-sm flex items-center justify-center mb-8 group-hover:shadow-md transition-all">
              <img
                src={`/icons/intelligence-icon.svg`}
                className="w-6 h-6 object-contain opacity-80"
              />
            </div>
            <h3 className="text-xl font-serif text-brand-dark mb-4">Clinical Intelligence</h3>
            <p className="text-zinc-500 leading-relaxed max-w-xs">
              Advanced analytics that identify trends before they become emergencies. AI-driven insights at the point of care.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
