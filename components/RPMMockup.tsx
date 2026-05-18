import { CheckCircle2, AlertCircle } from "lucide-react";
import Link from "next/link";

export function RPMMockup() {
  return (
    <section className="py-24 px-6 bg-[#FBFBF9]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
        <div className="flex-1 max-w-xl">
          <h2 className="text-4xl font-serif text-brand-dark mb-8 leading-tight">
            Clinical Intelligence <br /> at a Glance.
          </h2>
          <p className="text-zinc-600 text-lg mb-10 leading-relaxed">
            Our dashboard doesn't just show data; it surfaces meaning. AI-driven triage extracts monthly assets before they become emergencies, reducing readmissions by up to 35%.
          </p>

          <ul className="space-y-6">
            {[
              "Prioritized Triage: Red-amber-green status ranking based on personalized biometric thresholds.",
              "Longitudinal Trend Analysis: Monitor multi-modal trends in glucose, weight, and blood pressure in one view.",
            ].map((feature, i) => (
              <li key={i} className="flex items-start gap-4 text-zinc-600 leading-relaxed">
                <CheckCircle2 className="w-6 h-6 text-brand-dark/20 flex-shrink-0 mt-1" />
                <span>
                  <strong className="text-brand-dark block mb-1">{feature.split(":")[0]}</strong>
                  {feature.split(":")[1]}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex-1 w-full relative">
          <div className="bg-white rounded-sm shadow-2xl border border-zinc-100 overflow-hidden">
            <div className="bg-[#0A2E1F] p-4 flex items-center justify-between text-white">
              <span className="text-[10px] font-bold uppercase tracking-widest">Edgecare Monitoring Portal</span>
              <div className="flex gap-1">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 rounded-full bg-white/20" />
                ))}
              </div>
            </div>

            <div className="p-8 space-y-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 bg-zinc-50 border border-zinc-100 rounded-sm">
                  <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-2">Alerts</div>
                  <div className="flex items-center gap-3">
                    <span className="text-4xl font-serif text-red-500">12</span>
                    <span className="text-[10px] font-bold text-red-500 uppercase leading-tight">Require <br /> Intervention</span>
                  </div>
                </div>
                <div className="p-6 bg-zinc-50 border border-zinc-100 rounded-sm">
                  <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-2">Achievements</div>
                  <div className="flex items-center gap-3">
                    <span className="text-4xl font-serif text-brand-dark">1,402</span>
                    <span className="text-[10px] font-bold text-brand-dark uppercase leading-tight">Patient <br /> Check-ins</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Active Monitoring</div>
                {[
                  { name: "Obafemi Akinleye", status: "Critical", color: "bg-red-50 text-red-600" },
                  { name: "Chioma Okonkwo", status: "Stable", color: "bg-green-50 text-green-600" },
                ].map((patient, i) => (
                  <div key={i} className="flex items-center justify-between p-4 border border-zinc-100 rounded-sm hover:bg-zinc-50 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-full bg-zinc-100" />
                      <span className="font-bold text-brand-dark text-sm">{patient.name}</span>
                    </div>
                    <span className={`text-[8px] font-bold uppercase tracking-widest px-2 py-1 rounded-sm ${patient.color}`}>
                      {patient.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function RPMCTA() {
  return (
    <section className="py-32 px-6 bg-[#081C14] text-white relative overflow-hidden">
      {/* Decorative pulse graphic */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1000 200" preserveAspectRatio="none">
          <path d="M0,100 L200,100 L250,50 L300,150 L350,100 L1000,100" stroke="white" strokeWidth="2" fill="none" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-serif mb-8 leading-tight">
          Ready to deliver high-performance care?
        </h2>
        <p className="text-zinc-400 text-lg mb-12">
          Join the 500+ clinical groups using Ezerhealthcare to improve patient outcomes and practice sustainability.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
          <Link
            href="/contact"
            className="bg-brand-accent text-brand-dark px-10 py-5 rounded-sm font-bold hover:bg-white transition-all w-full sm:w-auto"
          >
            Schedule a Personalized Demo
          </Link>
          <button className="border border-white/20 text-white px-10 py-5 rounded-sm font-bold hover:bg-white/5 transition-all w-full sm:w-auto">
            Download Platform Overview
          </button>
        </div>
      </div>
    </section>
  );
}
