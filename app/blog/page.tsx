import BlogHero from "@/components/BlogHero";
import BlogFeed from "@/components/BlogFeed";
import BlogNewsletter from "@/components/BlogNewsletter";
import Footer from "@/components/Footer";

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white">
      <BlogHero />
      <BlogFeed />
      <BlogNewsletter />

      {/* Footer Branding Section (Simplified for Blog) */}
      <section className="py-20 px-6 border-t border-zinc-50 bg-[#FBFBF9]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all">
          {/* Placeholder for partner logos or branding */}
          <div className="text-[12px] font-bold uppercase tracking-[0.4em] text-zinc-400">Partners</div>
          <div className="flex gap-12">
            <img src="/nma-logo.jpg" alt="Nigerian Medical Association Logo" className="h-18 w-auto" />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
