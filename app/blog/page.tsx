import DynamicBlogView from "@/components/DynamicBlogView";
import BlogNewsletter from "@/components/BlogNewsletter";
import Footer from "@/components/Footer";

export const dynamic = "force-dynamic";

async function getArticles() {
  const strapiUrl = process.env.STRAPI_API_URL || "http://localhost:1337";
  
  try {
    const query = new URLSearchParams({
      status: "published",
      "populate[cover][populate]": "*",
      "populate[author][populate][avatar][populate]": "*",
      "populate[category][populate]": "*",
      "populate[blocks][populate]": "*",
      "pagination[pageSize]": "100",
    });

    const res = await fetch(`${strapiUrl}/api/articles?${query.toString()}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      console.error("Failed to fetch articles from Strapi. Status:", res.status);
      return [];
    }

    const json = await res.json();
    return json.data || [];
  } catch (error) {
    console.error("Error fetching articles from Strapi:", error);
    return [];
  }
}

export default async function BlogPage() {
  const articles = await getArticles();

  return (
    <main className="min-h-screen bg-white">
      <DynamicBlogView articles={articles} />
      <BlogNewsletter />

      {/* Footer Branding Section (Simplified for Blog) */}
      <section className="py-12 px-6 border-t border-zinc-100 bg-[#FBFBF9]">
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center gap-4 opacity-40 grayscale hover:opacity-75 transition-all duration-300">
          <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-zinc-400">In Partnership With</span>
          <div className="flex justify-center">
            <img src="/nma-logo.jpg" alt="Nigerian Medical Association Logo" className="h-10 w-auto object-contain" />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
