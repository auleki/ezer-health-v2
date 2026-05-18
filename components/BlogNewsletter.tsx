import { Mail } from "lucide-react";

export default function BlogNewsletter() {
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
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Work Email</label>
                <input
                  type="email"
                  placeholder="dr.smith@clinic.org"
                  className="w-full bg-white border-b border-zinc-200 py-3 pl-2 text-sm focus:outline-none focus:border-brand-dark transition-colors placeholder:text-zinc-200"
                />
              </div>
              <button className="w-full bg-brand-dark text-white py-4 rounded-sm text-xs font-bold uppercase tracking-widest hover:bg-brand-primary transition-all shadow-sm">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
