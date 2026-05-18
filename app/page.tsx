import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ClinicalModules from "@/components/ClinicalModules";
import ThreePillars from "@/components/ThreePillars";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ClinicalModules />
        <ThreePillars />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
