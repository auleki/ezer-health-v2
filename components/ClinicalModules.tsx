import { Database, Activity, Workflow, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "./utils";

export default function ClinicalModules() {
  return (
    <section id="products" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl font-serif text-brand-dark mb-4">Clinical Modules</h2>
          <p className="text-zinc-500 text-lg">Integrated tools designed for precision and performance</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Unified EHR Workflow */}
          <div className="lg:col-span-2 bg-brand-light rounded-sm p-10 border border-zinc-100 shadow-sm flex flex-col justify-between overflow-hidden">
            <div className="max-w-md">
              <Database className="w-8 h-8 text-brand-dark mb-6" />
              <Link href="/ehr" className="group inline-block mb-4">
                <h3 className="text-2xl font-serif text-brand-dark flex items-center gap-2 hover:text-brand-primary transition-colors cursor-pointer">
                  Unified EHR Workflow
                  <ArrowRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </h3>
              </Link>
              <p className="text-zinc-600 leading-relaxed">
                A high-density data engine that organizes patient history with longitudinal clarity. Built for specialists who demand speed.
              </p>
            </div>
            <div className="mt-12 -mb-10 -mx-10 aspect-video bg-brand-dark rounded-sm overflow-hidden shadow-2xl">
              <img src="/unified-healthcare.png" alt="Unified EHR Workflow Dashboard Mockup" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* RPM & CCM */}
          <div className="bg-brand-accent/20 rounded-sm p-10 border border-brand-accent shadow-sm">
            <Activity className="w-8 h-8 text-brand-dark mb-6" />
            <Link href="/rpm" className="group inline-block mb-4">
              <h3 className="text-2xl font-serif text-brand-dark flex items-center gap-2 hover:text-brand-primary transition-colors cursor-pointer">
                RPM & CCM
                <ArrowRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </h3>
            </Link>
            <p className="text-zinc-600 mb-8 leading-relaxed">
              Remote patient monitoring that actually works. Real-time vitals synced directly to your clinical stack.
            </p>
            <ul className="space-y-4">
              {[
                "Automated Threshold Alerts",
                "Variable Agnostic Sync",
                "99.9% Data Integrity",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-brand-dark font-medium text-sm">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Ambient AI Scribe */}
          <div className="bg-brand-dark rounded-sm p-10 shadow-xl flex flex-col justify-between overflow-hidden">
            <div>
              <img src="/icons/steto-dr.svg" alt="Ambient AI Scribe" className="w-8 h-8 brightness-0 invert mb-6" />
              <Link href="/clinical-scribe" className="group inline-block mb-4">
                <h3 className="text-2xl font-serif flex items-center gap-2 hover:text-brand-accent transition-colors cursor-pointer" style={{ color: '#D2E6E9' }}>
                  Ambient AI Scribe
                  <ArrowRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </h3>
              </Link>
              <p className="leading-relaxed" style={{ color: '#CBD5E1' }}>
                Listen, don't type. Our clinical AI converts natural conversations into structured SOAP notes in seconds.
              </p>
            </div>
            {/* Coded UI Mockup - Waveform Focus */}
            <div className="mt-8 -mb-10 -mx-10 bg-[#0C1A1A] border-t border-white/5 pt-4 px-8 h-32 relative overflow-hidden">
              <div className="flex items-center justify-between mb-4 relative z-10">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-2 h-2 rounded-full bg-red-500 animate-recording" />
                    <div className="absolute inset-0 w-2 h-2 rounded-full bg-red-500 animate-ping opacity-75" />
                  </div>
                  <span className="text-[10px] font-bold text-red-500/80 uppercase tracking-[0.3em] animate-pulse">Recording Active</span>
                </div>
                <div className="text-[10px] font-mono text-white/40 tabular-nums">00:12:45</div>
              </div>

              {/* Dynamic Waveform Visualization */}
              <div className="absolute inset-0 flex items-end justify-center gap-1.5 pb-6 px-10">
                {[12, 24, 18, 36, 48, 28, 42, 24, 52, 38, 24, 32, 18, 24, 30, 16, 12, 20, 28, 14, 22, 40, 18, 12].map((h, i) => (
                  <div
                    key={i}
                    className="w-1.5 bg-[#D2E6E9] rounded-full animate-waveform shadow-[0_0_15px_rgba(210,230,233,0.2)]"
                    style={{
                      height: h,
                      animationDelay: `${i * 0.05}s`,
                      animationDuration: `${0.8 + (i % 5) * 0.15}s`
                    }}
                  />
                ))}
              </div>

              {/* Ambient Glow */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-32 bg-brand-accent/[0.03] blur-[60px] rounded-full" />
            </div>
          </div>

          {/* Native Interoperability */}
          <div className="lg:col-span-2 bg-brand-accent rounded-sm p-10 flex flex-col lg:flex-row items-center gap-12 border border-green-200">
            <div className="flex-1">
              <h3 className="text-2xl font-serif text-brand-dark mb-4">Native Interoperability</h3>
              <p className="text-zinc-600 mb-6 leading-relaxed">
                Seamlessly connect with labs, pharmacies, and health systems using our FHIR-native API engine. No more data silos.
              </p>
              <button className="text-brand-dark font-bold text-sm underline underline-offset-4">Read API Docs</button>
            </div>
            <div className="flex-1 w-full grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <div key={num} className="aspect-square bg-white rounded-sm shadow-sm flex items-center justify-center p-4">
                  <img
                    src={`/icons/g-${num}-icon.svg`}
                    alt={`Interoperability Partner ${num}`}
                    className="w-8 h-8 md:w-10 md:h-10 object-contain opacity-80"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
