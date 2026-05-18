import Navbar from "@/components/Navbar";
import ModuleHero from "@/components/ModuleHero";
import RPMFeatures from "@/components/RPMFeatures";
import { RPMMockup, RPMCTA } from "@/components/RPMMockup";
import Footer from "@/components/Footer";

export default function RPMPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <ModuleHero
        badge="Remote Patient Management"
        title={<>Transform patient <br /> care beyond the <br /> clinical walls.</>}
        description="Edgecare bridges the gap between patient and provider through high-
fidelity clinical intelligence, automating chronic care pathways with precision."
        ctaText="Request Demo"
        //secondaryCtaText="View Case Studies"
        imageSrc="/rpm-header-bg.png"
        statusLabel="RPM HUB"
        statusValue="Connected"
      />
      <RPMFeatures />
      <RPMMockup />
      <RPMCTA />
      <Footer />
    </main>
  );
}
