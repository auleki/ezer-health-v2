import Navbar from "@/components/Navbar";
import ModuleHero from "@/components/ModuleHero";
import ScribeFeatures from "@/components/ScribeFeatures";
import { ScribeStats, ScribeCTA } from "@/components/ScribeCTA";
import Footer from "@/components/Footer";

export default function ClinicalScribePage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <ModuleHero 
        badge="Ambient Intelligence"
        title={<>Focus on the patient, <br /> not the paperwork.</>}
        description="Our AI Scribe listens in the background, capturing clinical nuances and generating structured SOAP notes in real-time. Clinically precise, HIPAA-secure, and fully interoperable."
        ctaText="Start Free Trial"
        ctaHref="https://clinex.tech"
        secondaryCtaText="Watch Demo"
        imageSrc="/scribe-header-bg.png"
        statusLabel="AI SCRIBING"
        statusValue="Active"
      />
      <ScribeStats />
      <ScribeFeatures />
      <ScribeCTA />
      <Footer />
    </main>
  );
}
