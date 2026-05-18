import Link from "next/link";

export function ScribeStats() {
  const stats = [
    { label: "Time Saved Daily", value: "3.5h" },
    { label: "Note Accuracy", value: "98%" },
    { label: "Typing Required", value: "0" },
    { label: "Implementation Time", value: "24h" },
  ];

  return (
    <section className="py-24 px-6 bg-white border-y border-zinc-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col gap-2">
              <span className="text-5xl font-serif text-brand-dark">{stat.value}</span>
              <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ScribeCTA() {
  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-5xl mx-auto border border-zinc-200 p-10 md:p-20 text-center rounded-sm relative overflow-hidden group">
        {/* Background icon decoration */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity">
           <svg className="w-96 h-96" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
             <path d="M12 21c4.97 0 9-4.03 9-9s-4.03-9-9-9-9 4.03-9 9 4.03 9 9 9z" />
             <path d="M12 8v8M8 12h8" />
           </svg>
        </div>
        
        <div className="relative z-10">
          <div className="w-16 h-16 bg-brand-accent/30 rounded-sm flex items-center justify-center mx-auto mb-10">
             <svg className="w-8 h-8 text-brand-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
             </svg>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-serif text-brand-dark mb-8 leading-tight">
            Ready to restore the <br className="hidden md:block" /> human touch?
          </h2>
          
          <p className="text-zinc-500 text-base md:text-lg mb-12 max-w-xl mx-auto">
            Join 12,000+ clinicians who have eliminated "pajama time" paperwork with Ezerhealthcare's ambient clinical intelligence.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
            <Link 
              href="/contact"
              className="bg-brand-dark text-white px-10 py-5 rounded-sm font-bold hover:bg-brand-primary transition-all w-full sm:w-auto text-sm md:text-base"
            >
              Start Your 14-Day Pilot
            </Link>
            <Link 
              href="/contact"
              className="bg-white text-brand-dark border border-zinc-200 px-10 py-5 rounded-sm font-bold hover:bg-zinc-50 transition-all w-full sm:w-auto text-sm md:text-base"
            >
              Schedule a Dept. Demo
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
