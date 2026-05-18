import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Privacy Policy | Ezerhealthcare",
  description: "Privacy Policy for Ezer Healthcare.",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FBFBF9]">
      <Navbar />
      <main className="flex-grow pt-32 pb-24 px-6 relative">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="mb-16">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark mb-4">
              Privacy Policy for Ezer Healthcare
            </h1>
          </div>

          <div className="space-y-12 text-zinc-600 prose prose-zinc max-w-none prose-headings:font-serif prose-headings:text-brand-dark prose-p:leading-relaxed prose-li:leading-relaxed prose-strong:text-brand-dark">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
              <p className="mb-4">
                We collect data necessary to provide clinical intelligence and manage chronic care:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Provider Data:</strong> Credentials, contact info, and system usage logs.
                </li>
                <li>
                  <strong>Clinical & Biometric Data:</strong> Patient information processed through our Ambient AI Scribe or collected via RPM/CCM devices to generate structured notes and monitor health trends.
                </li>
                <li>
                  <strong>Security Logs:</strong> Technical data gathered through our Zero-Trust architecture to ensure secure system access.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Care Delivery:</strong> To operate your EHR and facilitate chronic care management workflows.
                </li>
                <li>
                  <strong>Documentation Excellence:</strong> To refine the accuracy of AI-generated SOAP notes and clinical summaries.
                </li>
                <li>
                  <strong>Interoperability:</strong> To enable secure data exchange via FHIR standards with connected healthcare systems.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. Data Security & Zero-Trust</h2>
              <p>
                We employ a Zero-Trust security model to protect sensitive health information, including continuous authentication for every access request and full encryption of clinical data at rest and in transit.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. Data Sharing & Compliance</h2>
              <p>
                Clinical and personal data is never sold. Data is shared only as necessary for care delivery (e.g., EHR integration) or as required by law to maintain HIPAA, GDPR, or local healthcare compliance.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. Global Data Transfers</h2>
              <p>
                As we support healthcare adoption across multiple continents, data may be processed in various jurisdictions. All international transfers comply with applicable regional data protection regulations.
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
