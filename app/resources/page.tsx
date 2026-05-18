import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <section className="pt-48 pb-32 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block px-2 py-1 bg-brand-accent/50 text-brand-dark text-[10px] font-bold tracking-widest uppercase mb-8 rounded-sm">
            Clinical Knowledge
          </div>
          <h1 className="text-6xl font-serif text-brand-dark mb-10">Resources & Whitepapers</h1>
          <p className="text-zinc-500 text-lg leading-relaxed">
            Access our latest research on ambient AI, interoperability standards, and remote patient management best practices.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
