import Navbar from "@/components/Navbar";
import ModuleHero from "@/components/ModuleHero";
import EHRFeatures from "@/components/EHRFeatures";
import EHRMockup from "@/components/EHRMockup";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function EHRPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <ModuleHero 
        badge="Clinical Precision"
        title={<>The EHR, evolved <br /> for clinical <br /> efficiency.</>}
        description="Ezerhealthcare EHR merges high-performance computing with intuitive clinical workflows. Spend less time documenting and more time with patients."
        ctaText="Schedule Tour"
        secondaryCtaText="Interoperability Whitepaper"
        imageSrc="/ehr-header-bg.png"
        statusLabel="EHR CORE"
        statusValue="Optimized"
      />
      <EHRFeatures />
      <EHRMockup />
      
      {/* Simple Footer/CTA for the bottom of the landing page */}
      <section className="py-24 px-6 bg-brand-dark text-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-serif mb-4">Ready to upgrade your workflow?</h2>
            <p className="text-zinc-400">Join the next generation of clinical precision.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <Link 
              href="/contact"
              className="bg-brand-accent text-brand-dark px-8 py-4 rounded-sm font-bold hover:bg-green-100 transition-all flex items-center justify-center w-full sm:w-auto"
            >
              Schedule a Demo
            </Link>
            <Link 
              href="/contact"
              className="border border-white/20 px-8 py-4 rounded-sm font-bold hover:bg-white/5 transition-all flex items-center justify-center w-full sm:w-auto"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
