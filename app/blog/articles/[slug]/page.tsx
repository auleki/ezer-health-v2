import BlogNavbar from "@/components/BlogNavbar";
import Footer from "@/components/Footer";
import BlogNewsletter from "@/components/BlogNewsletter";
import { Clock, Calendar, User, ArrowLeft } from "lucide-react";
import Link from "next/link";

export function generateStaticParams() {
  return [
    { slug: 'continuous-care-architecture-scaling-remote-patient-monitoring' },
    { slug: 'ambient-intelligence-in-the-er-a-case-study' },
    { slug: 'zero-trust-architectures-in-modern-ehr-infrastructures' },
    { slug: 'ezerhealth-api-v24-enhanced-interoperability-standards' },
  ];
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  // Formatted title for placeholder
  const title = slug
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
              {title}
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
