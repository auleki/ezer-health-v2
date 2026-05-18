import { RefreshCw, Share2, Sparkles } from "lucide-react";

export default function EHRFeatures() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <h2 className="text-4xl font-serif text-brand-dark mb-6 tracking-tight">Engineered for the Clinician</h2>
          <p className="text-zinc-500 text-lg leading-relaxed">
            Our platform eliminates friction through intelligent automation and a refined interface designed for high-density medical data.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Intelligent Adaptive Workflows */}
          <div className="md:col-span-2 bg-[#F7F9F7] p-10 rounded-sm border border-zinc-100 flex flex-col justify-between">
            <div className="w-full mb-12">
              <div className="flex justify-between w-full items-start mb-6">
                <h3 className="text-xl font-bold text-brand-dark">Intelligent Adaptive Workflows</h3>
                <Share2 className="w-5 h-5 text-brand-dark opacity-40" />
              </div>
              <p className="text-zinc-500 text-sm leading-relaxed">
                The system learns your documentation patterns and surfacing the most relevant templates and diagnostics for each specialty.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:overflow-x-auto">
  <div className="flex-1 min-w-[200px] flex flex-col bg-white p-4 rounded-sm border border-zinc-100 text-[10px] font-bold text-zinc-400 uppercase tracking-widest flex items-start justify-between">
    <p>Cardiology</p>
    <div className="w-full h-0.5 mt-2 bg-brand-accent" />
  </div>
  <div className="flex-1 min-w-[200px] flex flex-col bg-white p-4 rounded-sm border border-zinc-100 text-[10px] font-bold text-zinc-400 uppercase tracking-widest flex items-start justify-between">
    <p>Oncology</p>
    <div className="w-full h-0.5 mt-2 bg-brand-accent" />
  </div>
  <div className="flex-1 min-w-[200px] flex flex-col bg-white p-4 rounded-sm border border-brand-dark text-[10px] font-bold text-brand-dark uppercase tracking-widest flex items-start justify-between">
    <p>Primary Care</p>
    <div className="w-full h-0.5 mt-2 bg-brand-dark" />
  </div>
</div>
          </div>

          {/* Universal Sync */}
          <div className="bg-[#F7F9F7] p-10 rounded-sm border border-zinc-100 flex flex-col">
            <RefreshCw className="w-6 h-6 text-brand-dark mb-6" />
            <h3 className="text-xl font-bold text-brand-dark mb-4">Universal Sync</h3>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Live updates across labs, pharmacy, and patient portals with zero latency.
            </p>
          </div>

          {/* Ambient Scribe Integration */}
          <div className="bg-[#1A2A2A] p-10 rounded-sm text-white flex flex-col">
            <div className="inline-flex items-center gap-2 mb-6">
              <Sparkles className="w-4 h-4 text-brand-accent" />
              <span className="text-[10px] font-bold tracking-widest uppercase text-brand-accent">AI Enhanced</span>
            </div>
            <h3 className="text-xl font-bold mb-4">Ambient Scribe Integration</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Conversational AI converts patient encounters into structured clinical notes automatically.
            </p>
          </div>

          {/* Documentation Efficiency Index */}
          <div className="md:col-span-2 bg-white p-10 rounded-sm border border-zinc-100 flex flex-col justify-between">
            <div className="flex flex-col md:flex-row justify-between items-start mb-12">
              <h3 className="text-xl font-bold text-brand-dark mb-4 md:mb-0">Documentation Efficiency Index</h3>
              <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-brand-dark" />
                  Ezerhealth
                </div>
                <div className="flex items-center gap-2 text-zinc-300">
                  <div className="w-2 h-2 rounded-full bg-zinc-200" />
                  Legacy EHR
                </div>
              </div>
            </div>

            <div className="h-32 bg-[#FBFBF9] rounded-sm relative overflow-hidden border border-zinc-100 group">
              <img 
                src="/document-efficiency.svg" 
                alt="Ezerhealth Document Efficiency" 
                className="w-full h-full object-cover object-center opacity-90 transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#FBFBF9] via-transparent to-transparent opacity-60" />
            </div>

            <p className="text-zinc-400 text-xs mt-8 italic">
              45% reduction in "Pajama Time" reported across participating health systems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
