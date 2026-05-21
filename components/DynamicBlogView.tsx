"use client";

import { useState, useEffect } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, Calendar, Clock, Sparkles } from "lucide-react";
import Link from "next/link";

interface Category {
  id: number;
  documentId: string;
  name: string;
  slug: string;
}

interface Author {
  id: number;
  documentId: string;
  name: string;
  email: string;
}

interface Cover {
  id: number;
  documentId: string;
  url: string;
  alternativeText?: string;
}

interface Article {
  id: number;
  documentId: string;
  title: string;
  description: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  featured?: boolean;
  cover?: Cover;
  author?: Author;
  category?: Category;
}

interface DynamicBlogViewProps {
  articles: Article[];
}

const getStrapiMediaUrl = (url?: string) => {
  if (!url) return "";
  if (url.startsWith("http")) return url;
  // Use public env or default to localhost
  const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337";
  return `${strapiUrl}${url}`;
};

export default function DynamicBlogView({ articles = [] }: DynamicBlogViewProps) {
  // 1. Separate Featured and Unfeatured
  const featuredArticles = articles.filter(article => article.featured === true);
  const unfeaturedArticles = articles.filter(article => article.featured !== true);

  // If there are no featured articles in the DB, fallback to using the first article as featured
  const finalFeatured = featuredArticles.length > 0 ? featuredArticles : (articles.length > 0 ? [articles[0]] : []);
  const finalUnfeatured = featuredArticles.length > 0 ? unfeaturedArticles : articles.slice(1);

  // 2. Carousel State for Featured Articles
  const [activeSlide, setActiveSlide] = useState(0);

  // Auto-advance featured carousel every 8 seconds
  useEffect(() => {
    if (finalFeatured.length <= 1) return;
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % finalFeatured.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [finalFeatured.length]);

  const handlePrevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + finalFeatured.length) % finalFeatured.length);
  };

  const handleNextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % finalFeatured.length);
  };

  // 3. Category Filter State for Unfeatured Grid
  const [activeCategory, setActiveCategory] = useState("All");

  // Dynamically extract categories from all unfeatured articles
  const categories = ["All", ...Array.from(new Set(finalUnfeatured.map(a => a.category?.name).filter(Boolean))) as string[]];

  // Filter unfeatured articles based on selected category
  const filteredUnfeatured = activeCategory === "All"
    ? finalUnfeatured
    : finalUnfeatured.filter(a => a.category?.name === activeCategory);

  // 4. Pagination State for Unfeatured Grid (3 articles per page)
  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(filteredUnfeatured.length / itemsPerPage);

  // Reset to page 1 if category filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory]);

  const paginatedUnfeatured = filteredUnfeatured.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="w-full">
      {/* ================= FEATURED CAROUSEL SECTION ================= */}
      {finalFeatured.length > 0 && (
        <section className="pt-32 pb-16 px-6 bg-[#FBFBF9] border-b border-zinc-100">
          <div className="max-w-7xl mx-auto">
            <div className="relative overflow-hidden min-h-[460px] lg:min-h-[400px]">
              {finalFeatured.map((article, idx) => {
                const isSelected = idx === activeSlide;
                const coverUrl = article.cover ? getStrapiMediaUrl(article.cover.url) : null;
                const categoryName = article.category?.name || "Clinical Insights";
                const publishedDate = article.publishedAt
                  ? new Date(article.publishedAt).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })
                  : "Insight";

                return (
                  <div
                    key={article.id}
                    className={`absolute inset-0 flex flex-col lg:flex-row gap-12 lg:gap-16 items-center transition-all duration-700 ease-in-out ${
                      isSelected
                        ? "opacity-100 translate-x-0 pointer-events-auto"
                        : "opacity-0 translate-x-12 pointer-events-none"
                    }`}
                  >
                    {/* Cover Media Side */}
                    <div className="flex-1 w-full aspect-[16/10] lg:aspect-[4/3] rounded-sm relative overflow-hidden group shadow-md bg-brand-dark">
                      {coverUrl ? (
                        <img
                          src={coverUrl}
                          alt={article.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                        />
                      ) : (
                        <div className="absolute inset-0 opacity-40 bg-gradient-to-br from-brand-accent/20 to-transparent flex items-center justify-center">
                          <div className="w-4/5 h-4/5 border border-white/10 rounded-full flex items-center justify-center animate-pulse">
                            <div className="w-3/5 h-3/5 border border-white/5 rounded-full" />
                          </div>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-[#0A2E1F] opacity-10 group-hover:opacity-0 transition-opacity" />
                    </div>

                    {/* Metadata & Title Side */}
                    <div className="flex-1 max-w-xl w-full flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-6">
                        <span className="text-[8px] font-bold uppercase tracking-widest px-2.5 py-1 bg-brand-accent text-brand-primary rounded-sm">
                          {categoryName}
                        </span>
                        <div className="flex items-center gap-1 text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
                          <Calendar className="w-3 h-3 text-zinc-300" />
                          <span>{publishedDate}</span>
                        </div>
                      </div>

                      <h1 className="text-4xl lg:text-5xl font-serif text-brand-dark leading-tight mb-6">
                        {article.title}
                      </h1>

                      <p className="text-zinc-500 text-base lg:text-lg leading-relaxed mb-8">
                        {article.description}
                      </p>

                      <div className="mt-2">
                        <Link
                          href={`/blog/articles/${article.slug}`}
                          className="inline-flex items-center gap-2 text-brand-primary font-bold group text-sm uppercase tracking-wider hover:text-brand-dark transition-colors"
                        >
                          Read Full Article
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Carousel Controls */}
            {finalFeatured.length > 1 && (
              <div className="flex justify-between items-center mt-12 pt-6 border-t border-zinc-100/60">
                <div className="flex gap-2">
                  {finalFeatured.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveSlide(idx)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        idx === activeSlide ? "w-8 bg-brand-primary" : "w-2 bg-zinc-200 hover:bg-zinc-300"
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={handlePrevSlide}
                    className="p-2.5 rounded-full border border-zinc-100 hover:border-zinc-300 hover:bg-white text-zinc-500 hover:text-brand-dark transition-all shadow-sm"
                    aria-label="Previous Slide"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleNextSlide}
                    className="p-2.5 rounded-full border border-zinc-100 hover:border-zinc-300 hover:bg-white text-zinc-500 hover:text-brand-dark transition-all shadow-sm"
                    aria-label="Next Slide"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* ================= UNFEATURED ARTICLES GRID ================= */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header & Filter Categories */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16">
            <h2 className="text-3xl font-serif text-brand-dark">Latest Publications</h2>

            {categories.length > 1 && (
              <div className="flex flex-wrap gap-2.5">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-1.5 rounded-full text-[9px] font-bold uppercase tracking-widest transition-all border ${
                      activeCategory === cat
                        ? "bg-brand-dark text-white border-brand-dark shadow-sm"
                        : "bg-white text-zinc-400 border-zinc-100 hover:border-zinc-200 hover:text-zinc-600"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[360px]">
            {paginatedUnfeatured.length === 0 ? (
              <div className="col-span-full py-24 text-center bg-zinc-50/50 rounded-sm border border-dashed border-zinc-200">
                <p className="text-zinc-400 font-serif italic text-lg">No publications found in this category yet.</p>
              </div>
            ) : (
              paginatedUnfeatured.map((article) => {
                const coverUrl = article.cover ? getStrapiMediaUrl(article.cover.url) : null;
                const categoryName = article.category?.name || "Insight";
                const publishedDate = article.publishedAt
                  ? new Date(article.publishedAt).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })
                  : "Insight";

                return (
                  <Link
                    href={`/blog/articles/${article.slug}`}
                    key={article.id}
                    className="group flex flex-col justify-between border border-zinc-100 hover:border-zinc-200 rounded-sm p-6 bg-white hover:shadow-lg hover:shadow-zinc-100/50 transition-all duration-300 animate-in fade-in duration-500"
                  >
                    <div className="space-y-5">
                      {/* Image Preview */}
                      <div className="aspect-video bg-zinc-50 rounded-sm overflow-hidden relative border border-zinc-100/40">
                        {coverUrl ? (
                          <img
                            src={coverUrl}
                            alt={article.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        ) : (
                          <div className="absolute inset-0 bg-[#0F2E23]/5 flex items-center justify-center">
                            <Sparkles className="w-8 h-8 text-[#0F2E23]/10" />
                          </div>
                        )}
                      </div>

                      {/* Meta information */}
                      <div className="flex items-center gap-3">
                        <span className="text-[8px] font-bold uppercase tracking-widest px-2 py-0.5 bg-brand-muted text-brand-primary rounded-sm">
                          {categoryName}
                        </span>
                        <div className="flex items-center gap-1 text-[10px] font-bold text-zinc-300 uppercase tracking-widest">
                          <Calendar className="w-3 h-3" />
                          <span>{publishedDate}</span>
                        </div>
                      </div>

                      {/* Header and Excerpt */}
                      <div className="space-y-3">
                        <h3 className="text-xl font-serif text-brand-dark leading-snug group-hover:text-brand-primary transition-colors">
                          {article.title}
                        </h3>
                        <p className="text-zinc-500 text-sm leading-relaxed line-clamp-3">
                          {article.description}
                        </p>
                      </div>
                    </div>

                    {/* Bottom CTA link */}
                    <div className="mt-8 pt-4 border-t border-zinc-50 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-brand-primary group-hover:text-brand-dark transition-colors">
                      Read Brief <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                );
              })
            )}
          </div>

          {/* Grid Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mt-16 pt-8 border-t border-zinc-100/80">
              <button
                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
                className="p-2 rounded-md hover:bg-zinc-50 text-zinc-500 disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
                aria-label="Previous page"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-9 h-9 rounded-md text-xs font-bold transition-all ${
                    page === currentPage
                      ? "bg-brand-primary text-white shadow-sm"
                      : "text-zinc-500 hover:bg-zinc-50"
                  }`}
                >
                  {page}
                </button>
              ))}

              <button
                onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                disabled={currentPage === totalPages}
                className="p-2 rounded-md hover:bg-zinc-50 text-zinc-500 disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
                aria-label="Next page"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
