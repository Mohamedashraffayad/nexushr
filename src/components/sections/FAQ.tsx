"use client";
import { useState } from "react";
import { useI18n } from "@/lib/i18n";
import { Plus, Minus } from "lucide-react";

export default function FAQ() {
  const { t } = useI18n();
  const faq = t.faq;
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-surface-2">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-14">
          <div className="badge badge-blue mb-5">{faq.badge}</div>
          <h2 className={`${t.displayFont} text-[2.1rem] sm:text-[2.6rem] font-extrabold tracking-tight text-ink leading-[1.15]`}>
            {faq.headline}
          </h2>
        </div>

        <div className="space-y-3">
          {faq.items.map((item, i) => (
            <div
              key={i}
              className={`bg-white rounded-[16px] border transition-all duration-200 overflow-hidden
                ${open === i ? "border-blue-200 shadow-sm" : "border-slate-100 hover:border-slate-200"}`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-start"
              >
                <span className={`text-[14.5px] font-semibold leading-snug transition-colors ${open === i ? "text-accent" : "text-ink"}`}>
                  {item.q}
                </span>
                <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-colors
                  ${open === i ? "bg-accent-dim text-accent" : "bg-slate-100 text-ink-muted"}`}>
                  {open === i ? <Minus size={14} strokeWidth={2.5}/> : <Plus size={14} strokeWidth={2.5}/>}
                </div>
              </button>
              {open === i && (
                <div className="px-6 pb-5">
                  <p className="text-[13.5px] text-ink-muted leading-relaxed border-t border-slate-100 pt-4">{item.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom nudge */}
        <div className="text-center mt-12">
          <p className="text-[13.5px] text-ink-faint mb-4">
            {t.lang === "ar" ? "لديك سؤال لم تجد إجابته هنا؟" : "Have a question not covered here?"}
          </p>
          <a href="#demo" className="btn-secondary text-[13px]">
            {t.lang === "ar" ? "تواصل معنا مباشرة" : "Reach out directly"}
          </a>
        </div>
      </div>
    </section>
  );
}
