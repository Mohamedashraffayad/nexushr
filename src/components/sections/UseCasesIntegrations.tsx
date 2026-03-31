"use client";
import { useI18n } from "@/lib/i18n";
import { Check } from "lucide-react";

export function UseCases() {
  const { t } = useI18n();
  const uc = t.useCases;
  return (
    <section id="use-cases" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <div className="badge badge-blue mb-5">{uc.badge}</div>
          <h2 className={`${t.displayFont} text-[2.1rem] sm:text-[2.6rem] font-extrabold tracking-tight text-ink leading-[1.15]`}>
            {uc.headline}
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-5">
          {uc.cases.map((c, i) => (
            <div key={i} className="card p-7 group">
              <div className="w-12 h-12 rounded-2xl bg-accent-dim flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition-transform">
                {c.icon}
              </div>
              <h3 className={`${t.displayFont} font-bold text-ink text-[16px] mb-3`}>{c.title}</h3>
              <p className="text-[14px] text-ink-muted leading-relaxed">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Integrations() {
  const { t } = useI18n();
  const int = t.integrations;
  return (
    <section className="py-24 bg-surface-2">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 items-center">
          <div>
            <div className="badge badge-blue mb-5">{int.badge}</div>
            <h2 className={`${t.displayFont} text-[2.1rem] sm:text-[2.6rem] font-extrabold tracking-tight text-ink leading-[1.15] mb-5`}>
              {int.headline}
            </h2>
            <p className="text-[15.5px] text-ink-muted leading-relaxed">{int.body}</p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {int.items.map((item, i) => (
              <div key={i} className="bg-white rounded-[16px] border border-slate-100 p-4 hover:border-blue-200 hover:shadow-md transition-all group">
                <div className="text-2xl mb-2.5">{item.icon}</div>
                <div className="font-semibold text-ink text-[13px] mb-1">{item.name}</div>
                <div className="text-[12px] text-ink-faint leading-snug">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Localization() {
  const { t } = useI18n();
  const loc = t.localization;
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-16 items-center">
          {/* Visual */}
          <div className="rounded-[20px] overflow-hidden shadow-lg border border-slate-200">
            <div className="window-chrome">
              <div className="w-[10px] h-[10px] rounded-full bg-[#ff5f57]"/>
              <div className="w-[10px] h-[10px] rounded-full bg-[#febc2e]"/>
              <div className="w-[10px] h-[10px] rounded-full bg-[#28c840]"/>
              <div className="ms-auto text-slate-400 text-[10px] font-mono">Language & Compliance</div>
            </div>
            <div className="bg-[#f8fafc] p-5 space-y-3">
              {/* Language switcher mock */}
              <div className="bg-white rounded-xl border border-slate-100 p-4">
                <div className="text-[10px] text-ink-faint uppercase tracking-wide font-semibold mb-3">Interface Language</div>
                <div className="flex gap-2">
                  {[{l:"العربية",a:true},{l:"English",a:false},{l:"Français",a:false}].map((lang,i) => (
                    <div key={i} className={`px-3 py-2 rounded-lg text-[11px] font-semibold cursor-pointer transition-colors ${lang.a ? "bg-accent text-white" : "bg-slate-100 text-ink-muted"}`}>
                      {lang.l}
                    </div>
                  ))}
                </div>
              </div>
              {/* Compliance config */}
              <div className="bg-white rounded-xl border border-slate-100 p-4">
                <div className="text-[10px] text-ink-faint uppercase tracking-wide font-semibold mb-3">Payroll Compliance — Egypt</div>
                {[
                  { k: "Tax bracket (top)", v: "27.5% above EGP 600K/yr" },
                  { k: "Social Insurance cap", v: "EGP 9,400 / month" },
                  { k: "Employee SI rate", v: "11%" },
                  { k: "Employer SI rate", v: "18.75%" },
                ].map((r, i) => (
                  <div key={i} className="flex justify-between py-1.5 border-b border-slate-50 last:border-0">
                    <span className="text-[10px] text-ink-muted">{r.k}</span>
                    <span className="text-[10px] font-semibold text-ink">{r.v}</span>
                  </div>
                ))}
              </div>
              <div className="flex gap-2">
                {["🇪🇬 Egypt","🇸🇦 KSA","🇦🇪 UAE"].map((c,i) => (
                  <div key={i} className={`flex-1 text-center py-2 rounded-lg text-[10px] font-semibold cursor-pointer border transition-colors ${i===0 ? "border-accent text-accent bg-accent-dim" : "border-slate-200 text-ink-muted bg-white"}`}>{c}</div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="badge badge-blue mb-5">{loc.badge}</div>
            <h2 className={`${t.displayFont} text-[2.1rem] sm:text-[2.6rem] font-extrabold tracking-tight text-ink leading-[1.15] mb-5`}>
              {loc.headline}
            </h2>
            <p className="text-[15.5px] text-ink-muted leading-relaxed mb-8">{loc.body}</p>
            <ul className="space-y-3">
              {loc.points.map((pt, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-accent-dim flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-accent" strokeWidth={3}/>
                  </div>
                  <span className="text-[14px] text-ink-soft">{pt}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
