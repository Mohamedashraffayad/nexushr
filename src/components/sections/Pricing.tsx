"use client";
import { useI18n } from "@/lib/i18n";
import { Check } from "lucide-react";

export default function Pricing() {
  const { t } = useI18n();
  const p = t.pricing;

  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-16 items-center">
          {/* Left */}
          <div>
            <div className="badge badge-blue mb-5">{p.badge}</div>
            <h2 className={`${t.displayFont} text-[2.1rem] sm:text-[2.6rem] font-extrabold tracking-tight text-ink leading-[1.15] mb-5`}>
              {p.headline}
            </h2>
            <p className="text-[15.5px] text-ink-muted leading-relaxed mb-8">{p.body}</p>
            <ul className="space-y-3 mb-10">
              {p.points.map((pt, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-accent-dim flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-accent" strokeWidth={3}/>
                  </div>
                  <span className="text-[14px] text-ink-soft">{pt}</span>
                </li>
              ))}
            </ul>
            <p className="text-[13px] text-ink-faint">{p.note}</p>
          </div>

          {/* Right: pricing card */}
          <div className="bg-surface-2 rounded-[24px] border border-slate-200 p-8">
            <div className="text-center mb-8">
              <div className="text-5xl mb-4">💡</div>
              <h3 className={`${t.displayFont} text-[1.5rem] font-extrabold text-ink mb-2`}>
                {p.headline}
              </h3>
              <p className="text-[13.5px] text-ink-muted max-w-xs mx-auto">{p.body.split('.')[0]}.</p>
            </div>

            {/* Visual pricing indicator */}
            <div className="bg-white rounded-[16px] border border-slate-100 p-5 mb-5">
              <div className="text-[11px] text-ink-faint uppercase tracking-wide font-semibold mb-4">
                Estimated monthly — example
              </div>
              <div className="space-y-3">
                {[
                  { range: "1–50 employees", tier: "Starter", indicator: 25 },
                  { range: "51–200 employees", tier: "Growth", indicator: 55 },
                  { range: "201–500 employees", tier: "Scale", indicator: 80 },
                  { range: "500+ employees", tier: "Enterprise", indicator: 100 },
                ].map((row, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-1">
                      <span className="text-[12px] text-ink-soft">{row.range}</span>
                      <span className="text-[11px] font-semibold text-accent">{row.tier}</span>
                    </div>
                    <div className="h-1.5 bg-slate-100 rounded-full">
                      <div className="h-full bg-gradient-to-r from-accent to-blue-400 rounded-full transition-all" style={{ width: `${row.indicator}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <a href="#demo" className="btn-primary w-full justify-center text-[14px] py-3.5 mb-3">
              {p.cta}
            </a>
            <p className="text-center text-[12px] text-ink-faint">{p.note}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
