"use client";
import { useState, useEffect } from "react";
import { useI18n } from "@/lib/i18n";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const { t, lang, setLang } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  const links = [
    { label: t.nav.product, href: "#features" },
    { label: t.nav.contact, href: "#demo" },
  ];

  return (
    <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/96 backdrop-blur-xl border-b border-slate-100 shadow-sm" : "bg-transparent"}`}>
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-[64px]">

          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-[10px] bg-gradient-to-br from-accent-dark to-accent-light flex items-center justify-center shadow-md shadow-blue-500/30 group-hover:scale-105 transition-transform">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <rect x="2" y="2" width="5" height="5" rx="1.5" fill="white" fillOpacity="0.9"/>
                <rect x="9" y="2" width="5" height="5" rx="1.5" fill="white" fillOpacity="0.6"/>
                <rect x="2" y="9" width="5" height="5" rx="1.5" fill="white" fillOpacity="0.6"/>
                <rect x="9" y="9" width="5" height="5" rx="1.5" fill="white"/>
              </svg>
            </div>
            <span className={`text-[17px] font-bold text-ink tracking-tight ${t.displayFont}`}>
              Nexus<span className="text-accent">HR</span>
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-7">
            {links.map(l => (
              <a key={l.href} href={l.href} className="nav-link text-[13.5px] font-medium text-ink-muted hover:text-ink transition-colors pb-0.5">
                {l.label}
              </a>
            ))}
          </div>

          {/* Desktop actions */}
          <div className="hidden lg:flex items-center gap-3">
            <button onClick={() => setLang(lang === "ar" ? "en" : "ar")}
              className="text-[12px] font-semibold text-ink-muted hover:text-accent px-2.5 py-1.5 rounded-lg hover:bg-accent-dim transition-all">
              {t.nav.langToggle}
            </button>
            <a href="#demo" className="btn-primary text-[13px] py-2.5 px-5">
              {t.nav.cta}
            </a>
          </div>

          {/* Mobile */}
          <div className="flex lg:hidden items-center gap-2">
            <button onClick={() => setLang(lang === "ar" ? "en" : "ar")}
              className="text-[11px] font-bold border border-slate-200 text-slate-500 px-2 py-1 rounded-md">
              {t.nav.langToggle}
            </button>
            <button onClick={() => setOpen(!open)} className="p-1.5 text-ink-soft">
              {open ? <X size={19}/> : <Menu size={19}/>}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-white border-t border-slate-100 px-5 py-4 space-y-1 shadow-xl">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="block px-3 py-2.5 text-[14px] font-medium text-ink-soft hover:text-accent hover:bg-slate-50 rounded-lg transition-colors">
              {l.label}
            </a>
          ))}
          <div className="pt-2">
            <a href="#demo" onClick={() => setOpen(false)} className="btn-primary w-full justify-center">
              {t.nav.cta}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
