import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Shield, Network, Brain } from "lucide-react";

export const metadata = {
  title: "About – Ezerhealthcare",
  description: "Learn about Ezerhealthcare’s mission, team, and impact in modern clinical intelligence.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-[#EEF2ED] px-3 py-1.5 rounded-sm mb-8 border border-[#D5E1D3]">
            <span className="text-brand-dark text-[10px] font-bold tracking-widest uppercase flex items-center gap-2">
              CLINICAL INTELLIGENCE
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-brand-dark mb-8 leading-[1.1]">
            Redefining the healthcare backbone with absolute precision.
          </h1>
          <p className="text-zinc-500 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-16">
            EzerHealthcare by Ezer Labs is an interoperable engine designed to eliminate data
            fragmentation. We build clinical-first systems where artificial intelligence operates with
            surgical accuracy and ironclad security.
          </p>

          <div className="w-full aspect-[21/9] md:aspect-[3/1] bg-brand-dark rounded-sm overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-dark via-[#0d2a13] to-[#143B1B] opacity-90" />
            <div className="absolute inset-0 bg-[url('/landing-hero-bg.svg')] bg-cover bg-center mix-blend-overlay opacity-50" />
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 px-6 bg-[#FBFBF9]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-serif text-brand-dark leading-tight">
              Born from the need for clarity in a fragmented system
            </h2>
            <p className="text-zinc-600 text-lg leading-relaxed">
              For decades, the health tech landscape has treated clinicians as data-entry clerks, forcing them to adapt to tools that hinder patient care rather than enhance it.
            </p>
            <p className="text-zinc-600 text-lg leading-relaxed">
              We built Ezerhealthcare to reverse this paradigm. By converging ambient AI scribing, remote physiological monitoring, and intelligent EHR capabilities, we put the focus back where it belongs: on patients.
            </p>
          </div>
          <div className="relative aspect-[4/3] rounded-sm overflow-hidden bg-brand-dark/10">
            <div className="absolute inset-0 bg-brand-dark/20 mix-blend-multiply" />
            <img
              src="/about-cover-img.png"
              alt="Clinical lab"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-dark via-brand-dark/40 to-transparent opacity-20 mix-blend-overlay" />
          </div>
        </div>
      </section>

      {/* Engine Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-brand-dark mb-12 text-center md:text-left">The Ezerhealthcare Engine</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Ironclad Security",
                desc: "Zero-trust architecture with end-to-end encryption. HIPAA compliant by design, ensuring that sensitive patient health information remains locked down while remaining accessible to authorized personnel.",
                icon: Shield
              },
              {
                title: "FHIR-Native Interoperability",
                desc: "Built entirely on modern FHIR standards. Our APIs ingest, synthesize, and output data seamlessly across disparate legacy systems, creating a unified timeline of patient truth.",
                icon: Network
              },
              {
                title: "AI-Driven Intelligence",
                desc: "Beyond simple data storage. Our models actively structure unstructured clinical notes, identify risk factors, and surface ambient insights directly within the clinical workflow.",
                icon: Brain
              }
            ].map((feature, i) => (
              <div key={i} className="bg-[#FBFBF9] p-8 rounded-sm border border-zinc-100 flex flex-col items-start hover:border-[#D5E1D3] transition-colors group">
                <div className="w-10 h-10 rounded-sm bg-[#EEF2ED] border border-[#D5E1D3] text-brand-dark flex items-center justify-center mb-6 group-hover:bg-brand-accent group-hover:text-brand-dark transition-colors">
                  <feature.icon className="w-5 h-5" fill="currentColor" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-bold text-brand-dark mb-3">{feature.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-24 px-6 bg-white border-t border-zinc-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-brand-dark mb-12 text-center md:text-left">Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
            {[
              { name: "Samuel Nwatu", role: "Founder" },
              { name: "Ugochukwu Umerie", role: "Software Engineer" },
              { name: "Giwa Emmmanuel", role: "Software Engineer" },
              { name: "Muhammad Idris Abubakar", role: "Software Engineer" },
            ].map((person, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-[4/5] bg-zinc-100 rounded-sm mb-4 overflow-hidden relative">
                  <img
                    src={`/team-${i + 1}.png`}
                    alt={person.name}
                    className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                  />
                </div>
                <h4 className="font-bold text-brand-dark text-sm uppercase tracking-wider">{person.name}</h4>
                <p className="text-zinc-400 text-xs mt-1">{person.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-6 pb-24 bg-white">
        <div className="max-w-4xl mx-auto bg-brand-dark rounded-sm py-20 px-8 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/landing-hero-bg.svg')] bg-cover bg-center mix-blend-overlay opacity-10" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-6 leading-tight">Ready to transform your clinical workflow?</h2>
            <p className="text-zinc-400 text-base md:text-lg mb-10 max-w-xl mx-auto">
              Join the forward-thinking organizations scaling their operations with Ezerhealthcare's intelligent platform.
            </p>
            <Link
              href="/contact"
              className="bg-white text-brand-dark px-10 py-4 rounded-sm font-bold hover:bg-brand-accent hover:text-brand-dark transition-colors inline-block"
            >
              Request a Demo
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
