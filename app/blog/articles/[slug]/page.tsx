import BlogNavbar from "@/components/BlogNavbar";
import Footer from "@/components/Footer";
import BlogNewsletter from "@/components/BlogNewsletter";
import { Clock, Calendar, User, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { draftMode } from "next/headers";

export function generateStaticParams() {
  return [
    { slug: 'continuous-care-architecture-scaling-remote-patient-monitoring' },
    { slug: 'ambient-intelligence-in-the-er-a-case-study' },
    { slug: 'zero-trust-architectures-in-modern-ehr-infrastructures' },
    { slug: 'ezerhealth-api-v24-enhanced-interoperability-standards' },
  ];
}

const getStrapiMediaUrl = (url?: string) => {
  if (!url) return "";
  if (url.startsWith("http")) return url;
  const strapiUrl = process.env.STRAPI_API_URL || "http://localhost:1337";
  return `${strapiUrl}${url}`;
};

function renderMarkdown(markdown: string) {
  if (!markdown) return "";
  
  let html = markdown
    // Headers
    .replace(/^### (.*$)/gim, '<h3 class="text-xl font-bold text-brand-dark mt-6 mb-3">$1</h3>')
    .replace(/^## (.*$)/gim, '<h2 class="text-2xl font-serif text-brand-dark mt-8 mb-4">$1</h2>')
    .replace(/^# (.*$)/gim, '<h1 class="text-3xl font-serif text-brand-dark mt-10 mb-6">$1</h1>')
    // Bold
    .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-brand-dark">$1</strong>')
    // Italics
    .replace(/\*(.*?)\*/g, '<em class="italic">$1</em>')
    // Lists
    .replace(/^\s*-\s+(.*$)/gim, '<li class="list-disc ml-6 my-1">$1</li>')
    .replace(/^\s*\*\s+(.*$)/gim, '<li class="list-disc ml-6 my-1">$1</li>')
    // Links
    .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" class="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">$1</a>');

  // Wrap list items
  html = html.replace(/(<li.*?>[\s\S]*?<\/li>)/g, '<ul class="space-y-1 my-4">$1</ul>');
  
  const paragraphs = html.split(/\n\n+/);
  const formattedParagraphs = paragraphs.map(p => {
    p = p.trim();
    if (!p) return "";
    if (p.startsWith("<h") || p.startsWith("<ul") || p.startsWith("<li") || p.startsWith("<blockquote")) {
      return p;
    }
    return `<p class="mb-6 leading-relaxed text-zinc-600 text-lg">${p}</p>`;
  });

  return formattedParagraphs.join("\n");
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  // Try fetching from Strapi
  let article = null;
  let isStrapi = false;
  try {
    const draft = await draftMode();
    const isDraft = draft.isEnabled;
    const status = isDraft ? "draft" : "published";

    const strapiUrl = process.env.STRAPI_API_URL || "http://localhost:1337";
    const query = new URLSearchParams({
      "filters[slug][$eq]": slug,
      status: status,
      "populate[cover][populate]": "*",
      "populate[author][populate][avatar][populate]": "*",
      "populate[category][populate]": "*",
      "populate[blocks][populate]": "*",
      "populate[blocks][on][shared.rich-text][populate]": "*",
      "populate[blocks][on][shared.quote][populate]": "*",
      "populate[blocks][on][shared.media][populate][file][populate]": "*",
      "populate[blocks][on][shared.slider][populate][files][populate]": "*",
    });

    const res = await fetch(`${strapiUrl}/api/articles?${query.toString()}`, {
      cache: isDraft ? "no-store" : "force-cache",
      next: isDraft ? undefined : { revalidate: 60 }
    });

    if (res.ok) {
      const json = await res.json();
      if (json.data && json.data.length > 0) {
        article = json.data[0];
        isStrapi = true;
      }
    }
  } catch (error) {
    console.error("Error fetching article from Strapi:", error);
  }

  // Fallback to static mock if not found in Strapi
  if (!isStrapi) {
    const titlePlaceholder = slug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

    return (
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-6 pt-40 pb-20">
          <Link href="/blog" className="inline-flex items-center gap-2 text-zinc-400 hover:text-brand-dark transition-colors mb-12 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-[10px] font-bold uppercase tracking-widest">Back to Insights</span>
          </Link>
          
          <article className="space-y-12">
            <header className="space-y-8">
              <div className="flex items-center gap-4">
                <span className="text-[8px] font-bold uppercase tracking-widest px-2 py-1 bg-brand-accent text-brand-primary rounded-sm">Clinical Research</span>
                <div className="flex items-center gap-4 text-zinc-300 text-[10px] font-bold uppercase tracking-widest">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3 h-3" />
                    Oct 12, 2024
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3 h-3" />
                    8 Min Read
                  </div>
                </div>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-serif text-brand-dark leading-[1.1]">
                {titlePlaceholder}
              </h1>
              
              <div className="flex items-center gap-3 pt-4">
                <div className="w-10 h-10 rounded-full bg-zinc-100 border border-zinc-200" />
                <div>
                  <p className="text-xs font-bold text-brand-dark">Dr. Elena Rodriguez</p>
                  <p className="text-[10px] text-zinc-400 font-medium uppercase tracking-widest">Head of Clinical AI</p>
                </div>
              </div>
            </header>
            
            <div className="aspect-video bg-[#0A1A0A] rounded-sm relative overflow-hidden my-16">
              <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-brand-accent to-transparent" />
            </div>
            
            <div className="prose prose-zinc prose-lg max-w-none">
              <p className="text-xl text-zinc-600 leading-relaxed font-serif italic mb-12 border-l-4 border-brand-accent pl-8">
                "The integration of ambient intelligence into the clinical environment represents more than just a technological shift—it is a restoration of the physician-patient relationship."
              </p>
              
              <div className="space-y-8 text-zinc-600 leading-relaxed text-lg">
                <p>
                  In the modern healthcare landscape, the "digital burden" has become one of the primary drivers of clinician burnout. Recent data suggests that for every hour spent with patients, physicians spend an additional two hours on documentation and administrative tasks.
                </p>
                
                <h2 className="text-3xl font-serif text-brand-dark pt-8">The Architecture of Silence</h2>
                <p>
                  Ambient AI Scribes utilize advanced natural language processing (NLP) and multi-modal sensory input to capture the nuance of a clinical encounter without the need for intrusive hardware. By structuring this data into interoperable FHIR formats in real-time, we eliminate the need for post-visit charting.
                </p>
                
                <div className="bg-zinc-50 p-10 rounded-sm border border-zinc-100 my-12">
                   <h3 className="text-sm font-bold text-brand-dark uppercase tracking-widest mb-4">Key Finding</h3>
                   <p className="text-zinc-500 italic">
                     Participating health systems reported a 45% reduction in "Pajama Time"—documentation performed outside of clinical hours—within the first 90 days of implementation.
                   </p>
                </div>
                
                <p>
                  As we move toward Ezerhealth v2.4, our focus shifts toward predictive diagnostics integrated directly into the ambient flow. The goal is not just to record what happened, but to surface what might happen next, enabling truly proactive care.
                </p>
              </div>
            </div>
          </article>
        </div>
        
        <BlogNewsletter />
        <Footer />
      </main>
    );
  }

  // If found in Strapi, render the dynamic content!
  const coverUrl = article.cover ? getStrapiMediaUrl(article.cover.url) : null;
  const authorName = article.author?.name || "Ezer Team";
  const authorAvatarUrl = article.author?.avatar ? getStrapiMediaUrl(article.author.avatar.url) : null;
  
  // Format Date
  const dateFormatted = article.publishedAt
    ? new Date(article.publishedAt).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      })
    : new Date(article.createdAt).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      });

  // Calculate Read Time from body blocks
  let allText = "";
  article.blocks?.forEach((block: any) => {
    if (block.body) allText += block.body + " ";
    if (block.title) allText += block.title + " ";
  });
  const words = allText.trim().split(/\s+/).length;
  const readTime = Math.max(1, Math.ceil(words / 200));

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 pt-40 pb-20">
        <Link href="/blog" className="inline-flex items-center gap-2 text-zinc-400 hover:text-brand-dark transition-colors mb-12 group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-[10px] font-bold uppercase tracking-widest">Back to Insights</span>
        </Link>
        
        <article className="space-y-12">
          <header className="space-y-8">
            <div className="flex items-center gap-4">
              <span className="text-[8px] font-bold uppercase tracking-widest px-2 py-1 bg-brand-accent text-brand-primary rounded-sm">
                {article.category?.name || "Clinical Research"}
              </span>
              <div className="flex items-center gap-4 text-zinc-300 text-[10px] font-bold uppercase tracking-widest">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3 h-3" />
                  {dateFormatted}
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3 h-3" />
                  {readTime} Min Read
                </div>
              </div>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-serif text-brand-dark leading-[1.1]">
              {article.title}
            </h1>
            
            <div className="flex items-center gap-3 pt-4">
              {authorAvatarUrl ? (
                <img src={authorAvatarUrl} alt={authorName} className="w-10 h-10 rounded-full object-cover border border-zinc-200" />
              ) : (
                <div className="w-10 h-10 rounded-full bg-zinc-100 border border-zinc-200 flex items-center justify-center font-bold text-zinc-400 uppercase">
                  {authorName.charAt(0)}
                </div>
              )}
              <div>
                <p className="text-xs font-bold text-brand-dark">{authorName}</p>
                <p className="text-[10px] text-zinc-400 font-medium uppercase tracking-widest">
                  {article.author?.email || "Ezer Healthcare Contributor"}
                </p>
              </div>
            </div>
          </header>
          
          {coverUrl && (
            <div className="aspect-video bg-zinc-100 rounded-sm relative overflow-hidden my-16 border border-zinc-100">
              <img src={coverUrl} alt={article.title} className="w-full h-full object-cover" />
            </div>
          )}
          
          <div className="prose prose-zinc prose-lg max-w-none space-y-8">
            {article.blocks?.map((block: any, idx: number) => {
              switch (block.__component) {
                case "shared.rich-text":
                  return (
                    <div 
                      key={idx} 
                      className="space-y-4"
                      dangerouslySetInnerHTML={{ __html: renderMarkdown(block.body) }}
                    />
                  );
                case "shared.quote":
                  return (
                    <div key={idx} className="bg-[#FBFBF9] p-10 rounded-sm border border-zinc-100 my-12 relative">
                      <p className="text-xl text-zinc-600 leading-relaxed font-serif italic mb-4 border-l-4 border-brand-accent pl-8">
                        "{block.body}"
                      </p>
                      {block.title && (
                        <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest pl-9">
                          — {block.title}
                        </p>
                      )}
                    </div>
                  );
                case "shared.media":
                  if (block.file) {
                    const fileUrl = getStrapiMediaUrl(block.file.url);
                    return (
                      <div key={idx} className="aspect-video bg-zinc-100 rounded-sm relative overflow-hidden my-16 border border-zinc-100">
                        <img src={fileUrl} alt="Article media" className="w-full h-full object-cover" />
                      </div>
                    );
                  }
                  return null;
                case "shared.slider":
                  if (block.files && block.files.length > 0) {
                    return (
                      <div key={idx} className="grid grid-cols-1 md:grid-cols-2 gap-4 my-12">
                        {block.files.map((file: any, fIdx: number) => {
                          const fileUrl = getStrapiMediaUrl(file.url);
                          return (
                            <div key={fIdx} className="aspect-square bg-zinc-100 rounded-sm relative overflow-hidden border border-zinc-100">
                              <img src={fileUrl} alt="Article slider media" className="w-full h-full object-cover" />
                            </div>
                          );
                        })}
                      </div>
                    );
                  }
                  return null;
                default:
                  return null;
              }
            })}
          </div>
        </article>
      </div>
      
      <BlogNewsletter />
      <Footer />
    </main>
  );
}
