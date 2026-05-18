import { Activity, MessageSquare, CheckSquare, DollarSign } from "lucide-react";

export default function RPMFeatures() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-serif text-brand-dark mb-4">Integrated Chronic Care Ecosystem</h2>
          <p className="text-zinc-500 text-lg">Providing a seamless loop between home biometrics, clinicians, and patient action.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Continuous Biometric Streams */}
          <div className="md:col-span-8 bg-[#FBFBF9] rounded-sm p-10 border border-zinc-100 flex flex-col md:flex-row items-center gap-12 overflow-hidden">
            <div className="flex-1">
              <Activity className="w-8 h-8 text-brand-dark mb-6" />
              <h3 className="text-2xl font-serif text-brand-dark mb-4">Continuous Biometric Streams</h3>
              <p className="text-zinc-600 leading-relaxed">
                Real-time data synchronization from FDA-cleared devices including blood pressure cuffs, glucometers, and weight scales directly into the EHR.
              </p>
            </div>
            <div className="flex-1 w-full flex justify-center">
               <div className="w-48 h-48 rounded-full border-[10px] border-brand-accent/30 relative flex items-center justify-center">
                 <div className="w-32 h-32 rounded-full border-[1px] border-brand-dark/20 animate-ping opacity-20" />
                 <div className="absolute inset-0 flex items-center justify-center">
                    <Activity className="w-12 h-12 text-brand-dark/40" />
                 </div>
               </div>
            </div>
          </div>

          {/* Patient Engagement */}
          <div className="md:col-span-4 bg-[#FBFBF9] rounded-sm p-10 border border-zinc-100 flex flex-col justify-between">
            <div>
              <MessageSquare className="w-8 h-8 text-brand-dark mb-6" />
              <h3 className="text-xl font-bold text-brand-dark mb-4">Patient Engagement</h3>
              <p className="text-zinc-600 text-sm leading-relaxed mb-8">
                Automated SMS check-ins and educational content tailored to specific patient conditions.
              </p>
            </div>
            <div className="flex items-center justify-between pt-6 border-t border-zinc-200/50">
              <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">96% Patient Retention</span>
              <div className="flex gap-0.5">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-1 h-3 bg-brand-dark rounded-full" />
                ))}
              </div>
            </div>
          </div>

          {/* Task Automation */}
          <div className="md:col-span-4 bg-[#FBFBF9] rounded-sm p-10 border border-zinc-100">
            <CheckSquare className="w-8 h-8 text-brand-dark mb-6" />
            <h3 className="text-xl font-bold text-brand-dark mb-4">Task Automation</h3>
            <p className="text-zinc-600 text-sm leading-relaxed mb-8">
              Intelligent workflows that prioritize high-risk patients for immediate care manager review.
            </p>
            <div className="flex gap-2">
              <div className="px-2 py-1 bg-white border border-zinc-100 text-[8px] font-bold text-zinc-400 rounded-sm">CAD</div>
              <div className="px-2 py-1 bg-white border border-zinc-100 text-[8px] font-bold text-zinc-400 rounded-sm">HF</div>
              <div className="px-2 py-1 bg-white border border-zinc-100 text-[8px] font-bold text-zinc-400 rounded-sm">DM</div>
            </div>
          </div>

          {/* Automated CCM Billing */}
          <div className="md:col-span-8 bg-[#FBFBF9] rounded-sm p-10 border border-zinc-100 flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <DollarSign className="w-8 h-8 text-brand-dark mb-6" />
              <h3 className="text-2xl font-serif text-brand-dark mb-4">Automated CCM Billing</h3>
              <p className="text-zinc-600 leading-relaxed">
                Transcribe minutes effortlessly. Our system automatically captures time-spent on patient review and generates accurate billing for 99457, 99458, and 99490 codes.
              </p>
            </div>
            <div className="flex-1 bg-white p-6 rounded-sm border border-zinc-100 shadow-sm space-y-4">
               <div className="flex items-center justify-between">
                 <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">CPT Code</span>
                 <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Status</span>
               </div>
               <div className="flex items-center justify-between border-b border-zinc-50 pb-2">
                 <span className="font-bold text-brand-dark">99457</span>
                 <span className="text-[8px] px-2 py-0.5 bg-green-50 text-green-600 font-bold rounded-sm uppercase tracking-widest">Captured</span>
               </div>
               <div className="flex items-center justify-between border-b border-zinc-50 pb-2">
                 <span className="font-bold text-brand-dark">99458</span>
                 <span className="text-[8px] px-2 py-0.5 bg-brand-accent text-brand-primary font-bold rounded-sm uppercase tracking-widest">In Sync</span>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
