"use client";

import { useState } from "react";
import { Mail, CheckCircle2, Loader2 } from "lucide-react";

export default function BlogNewsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/newsletter/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });

      const data = await res.json();

      if (res.ok || res.status === 200) {
        setStatus("success");
        setMessage(data.message || "You're subscribed!");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  };

  return (
    <section id="newsletter" className="py-20 px-6">
      <div className="max-w-7xl mx-auto bg-[#FBFBF9] border border-zinc-100 p-12 lg:p-20 rounded-sm">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1 space-y-4 text-center lg:text-left">
            <div className="flex justify-center lg:justify-start">
              <div className="w-12 h-12 bg-white border border-zinc-100 rounded-sm flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-brand-dark/20" />
              </div>
            </div>
            <h2 className="text-3xl font-serif text-brand-dark">Clinical Intelligence Newsletter</h2>
            <p className="text-zinc-500 leading-relaxed max-w-md">
              Monthly insights on interoperability, AI scribing, and high-performance EHR architecture delivered to your Inbox.
            </p>
          </div>

          <div className="flex-1 w-full max-w-md">
            {status === "success" ? (
              <div className="flex flex-col items-center gap-4 py-6 text-center">
                <CheckCircle2 className="w-10 h-10 text-emerald-500" />
                <p className="text-sm font-medium text-brand-dark">{message}</p>
                <p className="text-xs text-zinc-400">
                  You&apos;ll receive our next issue in your inbox.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 hover:text-brand-dark transition-colors underline underline-offset-4"
                >
                  Subscribe another address
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="newsletter-email" className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
                    Work Email
                  </label>
                  <input
                    id="newsletter-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="dr.smith@clinic.org"
                    required
                    disabled={status === "loading"}
                    className="w-full bg-white border-b border-zinc-200 py-3 pl-2 text-sm focus:outline-none focus:border-brand-dark transition-colors placeholder:text-zinc-200 disabled:opacity-50"
                  />
                </div>

                {status === "error" && (
                  <p className="text-red-500 text-xs font-medium">{message}</p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading" || !email.trim()}
                  className="w-full bg-brand-dark text-white py-4 rounded-sm text-xs font-bold uppercase tracking-widest hover:bg-brand-primary transition-all shadow-sm disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      Subscribing...
                    </>
                  ) : (
                    "Subscribe"
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
