import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function LegalLayout({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-[#FBFBF9]">
      <Navbar />
      <section className="pt-48 pb-32 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl font-serif text-brand-dark mb-12">{title}</h1>
          <div className="prose prose-zinc max-w-none">
            {children}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

export function TermsPage() {
  return (
    <LegalLayout title="Terms of Service">
      <p className="text-zinc-600 leading-relaxed mb-6">
        Last updated: May 2024. These terms govern your use of the Ezerhealthcare platform and services.
      </p>
      <div className="h-4 w-full bg-zinc-100 rounded-sm mb-4 animate-pulse" />
      <div className="h-4 w-3/4 bg-zinc-100 rounded-sm mb-4 animate-pulse" />
      <div className="h-4 w-1/2 bg-zinc-100 rounded-sm mb-4 animate-pulse" />
    </LegalLayout>
  );
}

export function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy">
      <p className="text-zinc-600 leading-relaxed mb-6">
        Your privacy is paramount. We handle clinical data with the highest standards of security and HIPAA compliance.
      </p>
      <div className="h-4 w-full bg-zinc-100 rounded-sm mb-4 animate-pulse" />
      <div className="h-4 w-3/4 bg-zinc-100 rounded-sm mb-4 animate-pulse" />
      <div className="h-4 w-1/2 bg-zinc-100 rounded-sm mb-4 animate-pulse" />
    </LegalLayout>
  );
}
