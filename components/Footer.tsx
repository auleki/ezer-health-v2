import Link from "next/link";
import { Globe, Leaf, Mail, MessageSquare, ShieldCheck } from "lucide-react";

export default function Footer() {
  const sections = [
    {
      title: "Platform",
      links: [
        { label: "Unified EHR", href: "/ehr" },
        { label: "RPM & CCM", href: "/rpm" },
        { label: "AI Scribe", href: "/clinical-scribe" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Blog", href: "/blog" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms of Service", href: "/terms" },
      ],
    },
  ];

  return (
    <footer className="pt-32 pb-12 px-6 border-t border-zinc-100 bg-[#FBFBF9] relative overflow-hidden">
      {/* Background decoration to fill space */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 pointer-events-none opacity-[0.02] select-none">
        <span className="text-[30rem] font-serif font-bold text-brand-dark whitespace-nowrap leading-none">
          Ezer
        </span>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-16 mb-24">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-8">
            <h3 className="text-3xl font-serif font-bold text-brand-dark">Ezerhealthcare</h3>
            <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
              The intelligence behind better care. Unifying clinical workflows with ambient AI and real-time monitoring.
            </p>
            <div className="flex items-center gap-4">
              <Link href="#" className="w-10 h-10 rounded-sm bg-white border border-zinc-100 flex items-center justify-center hover:bg-zinc-50 transition-colors">
                <Mail className="w-4 h-4 text-brand-dark" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-sm bg-white border border-zinc-100 flex items-center justify-center hover:bg-zinc-50 transition-colors">
                <MessageSquare className="w-4 h-4 text-brand-dark" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-sm bg-white border border-zinc-100 flex items-center justify-center hover:bg-zinc-50 transition-colors">
                <ShieldCheck className="w-4 h-4 text-brand-dark" />
              </Link>
            </div>
          </div>

          {/* Links Columns */}
          {sections.map((section, i) => (
            <div key={i} className="space-y-6">
              <h4 className="text-[10px] font-bold text-brand-dark uppercase tracking-widest">{section.title}</h4>
              <ul className="space-y-4">
                {section.links.map((link, j) => (
                  <li key={j}>
                    <Link href={link.href} className="text-sm text-zinc-500 hover:text-brand-dark transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter Column */}
          <div className="lg:col-span-1 space-y-6">
            <div className="space-y-2">
              <h4 className="text-[10px] font-bold text-brand-dark uppercase tracking-widest">Stay Updated</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Get the latest in clinical AI and workflow efficiency.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <div className="relative group">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-white border border-zinc-200 px-4 py-3 rounded-sm text-sm focus:outline-none focus:border-brand-dark transition-all placeholder:text-zinc-300"
                />
              </div>
              <button className="w-full bg-brand-dark text-white px-4 py-3 rounded-sm text-xs font-bold hover:bg-brand-primary transition-all flex items-center justify-center gap-2 group">
                Subscribe
                <div className="w-1.5 h-1.5 rounded-full bg-brand-accent group-hover:scale-125 transition-transform" />
              </button>
              <p className="text-[8px] text-zinc-300 uppercase font-bold tracking-tighter">
                * No spam. Just high-density clinical updates.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-zinc-100 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-brand-dark/40" />
              <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Global Operations</span>
            </div>
            <div className="flex items-center gap-2">
              <Leaf className="w-4 h-4 text-brand-dark/40" />
              <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Sustainable Infrastructure</span>
            </div>
          </div>

          <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest text-center md:text-right leading-loose flex items-center gap-3 flex-wrap justify-center md:justify-end">
            <span>© 2024 EZERHEALTHCARE SYSTEMS. ALL RIGHTS RESERVED.</span>
            <span className="hidden md:inline text-zinc-200">·</span>
            <Link
              href="/admin/newsletter"
              className="opacity-20 hover:opacity-60 transition-opacity duration-300 text-[9px] tracking-widest text-zinc-400"
              title="Admin"
            >
              ⬡
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
