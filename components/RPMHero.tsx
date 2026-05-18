export default function RPMHero() {
  return (
    <section className="pt-40 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <div className="inline-block px-2 py-1 bg-brand-accent/50 text-brand-dark text-[10px] font-bold tracking-widest uppercase mb-8 rounded-sm">
            Remote Patient Management
          </div>
          
          <h1 className="text-6xl lg:text-7xl font-serif text-brand-dark leading-[1.1] mb-8">
            Precision Care, <br /> Everywhere.
          </h1>
          
          <p className="text-zinc-600 text-lg mb-12 max-w-xl leading-relaxed">
            Extend your clinical reach beyond the hospital walls. Ezerhealthcare's RPM and CCM solutions blend continuous biometric data with intuitive dashboards to prevent complications before they become emergencies.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <button className="bg-brand-dark text-white px-10 py-5 rounded-sm font-bold hover:bg-brand-primary transition-all">
              Explore Platform
            </button>
            <button className="bg-white text-brand-dark border border-zinc-200 px-10 py-5 rounded-sm font-bold hover:bg-zinc-50 transition-all">
              View Case Studies
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
