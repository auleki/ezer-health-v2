import BlogHero from "@/components/BlogHero";
import BlogFeed from "@/components/BlogFeed";
import BlogNewsletter from "@/components/BlogNewsletter";
import Footer from "@/components/Footer";
import Link from "next/link";

export function generateStaticParams() {
  return [
    { slug: 'research' },
    { slug: 'clinical' },
    { slug: 'ai-insights' },
    { slug: 'data-safety' },
  ];
}

export default async function BlogCategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const categoryName = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <main className="min-h-screen bg-white">
      <section className="pt-40 pb-20 px-6 text-center bg-[#FBFBF9] border-b border-zinc-50">
        <div className="max-w-7xl mx-auto">
          <div className="inline-block px-2 py-1 bg-brand-accent/50 text-brand-dark text-[10px] font-bold tracking-widest uppercase mb-6 rounded-sm">
            Insights / {categoryName}
          </div>
          <h1 className="text-6xl font-serif text-brand-dark mb-8">{categoryName}</h1>
          <p className="text-zinc-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Exploring the intersection of technology and patient care within the realm of {categoryName}.
          </p>
        </div>
      </section>

      {/* Reusing existing components to populate the page */}
      <BlogFeed />
      <BlogNewsletter />
      <Footer />
    </main>
  );
}
