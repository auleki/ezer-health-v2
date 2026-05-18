"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, Home } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-[#FBFBF9] flex flex-col">
      <Navbar />
      
      <div className="flex-1 flex flex-col items-center justify-center px-6 pt-32 pb-20">
        <div className="text-center max-w-xl">
          <span className="text-[10rem] font-serif font-bold text-brand-dark/5 leading-none select-none">
            404
          </span>
          
          <h1 className="text-5xl font-serif text-brand-dark mb-6 -mt-8">
            Page not found.
          </h1>
          
          <p className="text-zinc-500 text-lg mb-12 leading-relaxed">
            The clinical module or research paper you are looking for doesn't exist or has been relocated within our infrastructure.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => router.back()}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-brand-dark text-white px-8 py-4 rounded-sm font-bold text-sm hover:bg-brand-primary transition-all group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Go Back
            </button>
            
            <Link 
              href="/"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white border border-zinc-200 text-brand-dark px-8 py-4 rounded-sm font-bold text-sm hover:bg-zinc-50 transition-all"
            >
              <Home className="w-4 h-4" />
              Return Home
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
