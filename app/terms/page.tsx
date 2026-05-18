import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Terms and Conditions | Ezerhealthcare",
  description: "Terms and Conditions for Ezer Healthcare.",
};

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FBFBF9]">
      <Navbar />
      <main className="flex-grow pt-32 pb-24 px-6 relative">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="mb-16">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark mb-4">
              Terms and Conditions for Ezer Healthcare
            </h1>
          </div>

          <div className="space-y-12 text-zinc-600 prose prose-zinc max-w-none prose-headings:font-serif prose-headings:text-brand-dark prose-p:leading-relaxed prose-li:leading-relaxed prose-strong:text-brand-dark">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing or using the Ezer Healthcare platform, you agree to be bound by these Terms and Conditions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. Description of Services</h2>
              <p className="mb-4">
                Ezer Healthcare provides an integrated suite of clinical intelligence and care management tools. Our services include, but are not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Ambient AI Scribe:</strong> AI-powered tools designed to capture clinical conversations and automatically generate structured, evidence-based medical documentation.
                </li>
                <li>
                  <strong>Electronic Health Record (EHR):</strong> Comprehensive digital platforms for managing patient health information, built with a focus on interoperability and FHIR standards.
                </li>
                <li>
                  <strong>Remote Patient Monitoring (RPM) & Chronic Care Management (CCM):</strong> Integrated ecosystems for continuous biometric tracking and longitudinal care delivery for patients with chronic conditions.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. User Responsibilities & Clinical Judgment</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Professional Use:</strong> These services are intended for use by qualified healthcare professionals.
                </li>
                <li>
                  <strong>Clinical Accuracy:</strong> While our Ambient AI Scribe and EHR tools assist in documentation, the ultimate responsibility for clinical accuracy, diagnosis, and patient care remains solely with the human practitioner.
                </li>
                <li>
                  <strong>Account Security:</strong> Users must maintain strict credential confidentiality within our Zero-Trust security framework.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. Intellectual Property</h2>
              <p>
                All software designs, AI models, and platform architecture provided through Ezer Healthcare remain the exclusive property of Ezer Healthcare.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. Limitation of Liability</h2>
              <p>
                Ezer Healthcare is provided on an &quot;as-is&quot; basis. We are not liable for clinical errors or service interruptions resulting from user negligence or third-party infrastructure failures.
              </p>
            </section>
          </div>
        </div>

        {/* Background decorative element */}
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-b from-brand-accent/5 to-transparent blur-3xl pointer-events-none -z-0" />
      </main>
      <Footer />
    </div>
  );
}
