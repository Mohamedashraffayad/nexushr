"use client";
import { useI18n } from "@/lib/i18n";

export function BusinessImpact() {
  const { t } = useI18n();
  const imp = t.impact;
  return (
    <section className="py-24 bg-dark relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 start-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/5 rounded-full blur-3xl" />
      </div>
      <div className="relative max-w-6xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <div className="badge badge-dark mb-5">{imp.badge}</div>
          <h2 className={`${t.displayFont} text-[2.1rem] sm:text-[2.6rem] font-extrabold tracking-tight text-white leading-[1.15] mb-4`}>
            {imp.headline}
          </h2>
          <p className="text-[15.5px] text-slate-400 leading-relaxed">{imp.body}</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {imp.points.map((pt, i) => (
            <div key={i} className={`card-dark p-7 ${i === 0 ? "lg:col-span-1" : ""}`}>
              <div className={`${t.displayFont} text-[2.8rem] font-black text-accent mb-2 leading-none`}>{pt.metric}</div>
              <div className="font-semibold text-white text-[14.5px] mb-2">{pt.label}</div>
              <div className="text-[13px] text-slate-400 leading-relaxed">{pt.detail}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Trust() {
  const { t } = useI18n();
  const tr = t.trust;
  return (
    <section className="py-24 bg-surface-2">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <div className="badge badge-blue mb-5">{tr.badge}</div>
          <h2 className={`${t.displayFont} text-[2.1rem] sm:text-[2.6rem] font-extrabold tracking-tight text-ink leading-[1.15]`}>
            {tr.headline}
          </h2>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-5 mb-16">
          {tr.testimonials.map((tm, i) => (
            <div key={i} className="bg-white rounded-[20px] border border-slate-100 p-7 flex flex-col gap-5 shadow-sm hover:shadow-md hover:border-blue-100 transition-all">
              {/* Quote mark */}
              <div className="text-[40px] leading-none text-blue-100 font-serif select-none">&ldquo;</div>
              <p className="text-[14px] text-ink-soft leading-relaxed flex-1 -mt-4">{tm.quote}</p>
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white font-bold text-[12px] flex-shrink-0">
                  {tm.initials}
                </div>
                <div>
                  <div className="font-semibold text-ink text-[13px]">{tm.name}</div>
                  <div className="text-[11px] text-ink-faint">{tm.title} · {tm.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {tr.indicators.map((ind, i) => (
            <div key={i} className="bg-white rounded-[18px] border border-slate-100 p-5 text-center hover:shadow-sm transition-all">
              <div className="text-3xl mb-3">{ind.icon}</div>
              <div className="font-semibold text-ink text-[13.5px] mb-1.5">{ind.title}</div>
              <div className="text-[12.5px] text-ink-faint leading-relaxed">{ind.body}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
