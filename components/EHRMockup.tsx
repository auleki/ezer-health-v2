import { CheckCircle2 } from "lucide-react";

export default function EHRMockup() {
  return (
    <section className="py-24 px-6 bg-[#FBFBFB]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
        <div className="flex-1 max-w-xl">
          <h2 className="text-4xl font-serif text-brand-dark mb-8 leading-tight">
            Clinical Context, <br /> Front and Center.
          </h2>
          <p className="text-zinc-600 text-lg mb-10 leading-relaxed">
            Our interface prioritizes what matters. Vital signs, current medications, and AI-prioritized risk factors are visible at a glance, minimizing clicks and cognitive load.
          </p>

          <ul className="space-y-6">
            {[
              "One-click medication reconciliation",
              "FHIR-native data architecture for total interoperability",
              "Configurable high-density data visualizations",
            ].map((feature, i) => (
              <li key={i} className="flex items-center gap-4 text-brand-dark font-medium">
                <CheckCircle2 className="w-6 h-6 text-brand-dark/20" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex-1 w-full">
          <div className="bg-white rounded-sm shadow-2xl border border-zinc-100 overflow-hidden">
            {/* Header / Top Bar */}
            <div className="p-6 border-b border-zinc-100 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-zinc-100 rounded-sm flex items-center justify-center font-bold text-zinc-500">AM</div>
                <div>
                  <h4 className="font-bold text-brand-dark">Adetiba, Mariam P.</h4>
                  <p className="text-[10px] text-zinc-400 font-medium uppercase tracking-wider">DOB: 04/12/1978 • MRN: 984021</p>
                </div>
              </div>
              <div className="flex gap-2">
                <div className="px-2 py-1 bg-red-50 text-red-600 text-[8px] font-bold uppercase rounded-sm">NKA</div>
                <div className="px-2 py-1 bg-green-50 text-green-600 text-[8px] font-bold uppercase rounded-sm">Stable</div>
              </div>
            </div>

            {/* Mockup Content */}
            <div className="p-6 space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#F9FAF9] p-6 rounded-sm border border-zinc-100">
                  <span className="text-[8px] font-bold text-zinc-400 uppercase tracking-widest block mb-2">Vitals (Real-time)</span>
                  <div className="flex items-end justify-between">
                    <span className="text-3xl font-serif text-brand-dark">120/80</span>
                    <div className="w-12 h-6 flex items-end gap-0.5">
                      {[2, 4, 3, 5, 2, 6, 4].map((h, i) => (
                        <div key={i} className="flex-1 bg-brand-dark/20 rounded-[1px]" style={{ height: `${h * 15}%` }} />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-sm border border-zinc-100">
                  <span className="text-[8px] font-bold text-zinc-400 uppercase tracking-widest block mb-2">AI Risk Summary</span>
                  <p className="text-[10px] text-brand-dark leading-relaxed font-medium">
                    Elevated risk for HbA1c increase based on last 3 months trend.
                  </p>
                </div>
              </div>

              {/* Placeholder Content Lines */}
              <div className="space-y-3">
                <div className="h-4 bg-zinc-100 rounded-sm w-1/4" />
                <div className="h-3 bg-zinc-50 rounded-sm w-full" />
                <div className="h-3 bg-zinc-50 rounded-sm w-full" />
                <div className="h-3 bg-zinc-50 rounded-sm w-4/5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
