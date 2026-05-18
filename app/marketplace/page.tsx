import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function MarketplacePage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <section className="pt-40 pb-20 px-6 text-center">
        <h1 className="text-6xl font-serif text-brand-dark mb-8">Marketplace</h1>
        <p className="text-zinc-600 text-lg max-w-2xl mx-auto">
          The hub for clinical extensions and integrations. Coming soon.
        </p>
      </section>
      <Footer />
    </main>
  );
}
