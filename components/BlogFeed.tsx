"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function BlogFeed() {
  const categories = ["All", "Clinical Insights", "Security", "Product Updates", "Research"];
  const [activeCategory, setActiveCategory] = useState("All");

  // Mock data for filtering demonstration
  const articles = [
    {
      id: 1,
      category: "Clinical Insights",
      tag: "RPM/CCM",
      date: "Oct 12, 2024",
      title: "Continuous Care Architecture: Scaling Remote Patient Monitoring",
      description: "Deploying an interoperable framework for real-time biometric ingestion. Examining the impact of low-latency data streams on chronic condition management outcomes.",
      type: "main"
    },
    {
      id: 2,
      category: "Research",
      tag: "AI Scribe",
      date: "Oct 10, 2024",
      title: "Ambient Intelligence in the ER: A Case Study",
      description: "Analyzing the reduction of cognitive load on emergency physicians when employing autonomous dictation models.",
      type: "spotlight"
    },
    {
      id: 3,
      category: "Security",
      tag: "Security",
      date: "Oct 03, 2024",
      title: "Zero-Trust Architectures in Modern EHR Infrastructures",
      description: "Moving beyond perimeter defense. How biological computing paradigms necessitate identity-first security protocols for sensitive patient data interoperability.",
      type: "secondary"
    },
    {
      id: 4,
      category: "Product Updates",
      tag: "Product Updates",
      date: "Oct 01, 2024",
      title: "Ezerhealth API v2.4: Enhanced Interoperability Standards",
      description: "Announcing full FHIR R4 compliance and expanded webhook endpoints for seamless integration with legacy clinical systems.",
      type: "horizontal"
    }
  ];

  const filteredArticles = activeCategory === "All"
    ? articles
    : articles.filter(article => article.category === activeCategory);

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16">
          <h2 className="text-3xl font-serif text-brand-dark">Latest Publications</h2>

          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all border ${activeCategory === cat
                    ? "bg-brand-dark text-white border-brand-dark shadow-lg shadow-brand-dark/10"
                    : "bg-white text-zinc-400 border-zinc-100 hover:border-zinc-200 hover:text-zinc-600"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 min-h-[400px]">
          {filteredArticles.length === 0 ? (
            <div className="col-span-12 py-32 text-center bg-zinc-50 rounded-sm border border-dashed border-zinc-200">
              <p className="text-zinc-400 font-serif italic text-lg">No publications found in this category yet.</p>
            </div>
          ) : (
            <>
              {filteredArticles.map((article) => {
                const slug = article.title.toLowerCase().replace(/ /g, "-").replace(/[^\w-]/g, "");

                if (article.type === "main") return (
                  <Link href={`/blog/articles/${slug}`} key={article.id} className="lg:col-span-8 group cursor-pointer animate-in fade-in duration-500">
                    <div className="aspect-video bg-zinc-100 rounded-sm overflow-hidden mb-6 relative">
                      <div className="absolute inset-0 bg-[#0A1A0A] opacity-20 group-hover:opacity-10 transition-opacity" />
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <span className="text-[8px] font-bold uppercase tracking-widest px-2 py-1 bg-brand-accent text-brand-primary rounded-sm">{article.tag}</span>
                        <span className="text-[10px] font-bold text-zinc-300 uppercase tracking-widest">{article.date}</span>
                      </div>
                      <h3 className="text-3xl font-serif text-brand-dark group-hover:text-brand-primary transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-zinc-500 leading-relaxed max-w-2xl">
                        {article.description}
                      </p>
                    </div>
                  </Link>
                );

                if (article.type === "spotlight") return (
                  <Link href={`/blog/articles/${slug}`} key={article.id} className="lg:col-span-4 bg-[#F0F7F0] p-10 rounded-sm flex flex-col justify-between group cursor-pointer animate-in fade-in slide-in-from-right-4 duration-500">
                    <div>
                      <span className="text-[8px] font-bold uppercase tracking-widest px-2 py-1 bg-[#D1E5D1] text-[#4A7A4A] rounded-sm mb-6 inline-block">{article.tag}</span>
                      <h3 className="text-2xl font-serif text-brand-dark mb-4 leading-tight group-hover:text-[#4A7A4A] transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-zinc-500 text-sm leading-relaxed mb-8">
                        {article.description}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-brand-dark group-hover:gap-3 transition-all">
                      Read Brief <ArrowRight className="w-3 h-3" />
                    </div>
                  </Link>
                );

                if (article.type === "secondary") return (
                  <Link href={`/blog/articles/${slug}`} key={article.id} className="lg:col-span-4 group cursor-pointer border border-zinc-100 p-8 rounded-sm hover:border-zinc-200 transition-all animate-in fade-in duration-500">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <span className="text-[8px] font-bold uppercase tracking-widest px-2 py-1 bg-zinc-100 text-zinc-500 rounded-sm">{article.tag}</span>
                        <span className="text-[10px] font-bold text-zinc-300 uppercase tracking-widest">{article.date}</span>
                      </div>
                      <h3 className="text-xl font-bold text-brand-dark leading-snug">
                        {article.title}
                      </h3>
                      <p className="text-zinc-500 text-sm leading-relaxed">
                        {article.description}
                      </p>
                    </div>
                  </Link>
                );

                if (article.type === "horizontal") return (
                  <Link href={`/blog/articles/${slug}`} key={article.id} className="lg:col-span-8 group cursor-pointer border border-zinc-100 p-8 rounded-sm hover:border-zinc-200 transition-all flex flex-col md:flex-row gap-8 items-center animate-in fade-in duration-500">
                    <div className="flex-1 space-y-4">
                      <div className="flex items-center gap-3">
                        <span className="text-[8px] font-bold uppercase tracking-widest px-2 py-1 bg-zinc-100 text-zinc-500 rounded-sm">{article.tag}</span>
                        <span className="text-[10px] font-bold text-zinc-300 uppercase tracking-widest">{article.date}</span>
                      </div>
                      <h3 className="text-xl font-bold text-brand-dark leading-snug">
                        {article.title}
                      </h3>
                      <p className="text-zinc-500 text-sm leading-relaxed">
                        {article.description}
                      </p>
                    </div>
                    <div className="flex-1 w-full h-32 bg-[#0A1A0A] rounded-sm relative overflow-hidden">
                      <div className="absolute inset-0 opacity-20 bg-gradient-to-tr from-brand-accent to-transparent" />
                    </div>
                  </Link>
                );

                return null;
              })}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
