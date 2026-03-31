"use client";
import { useI18n } from "@/lib/i18n";

export function Problem() {
  const { t } = useI18n();
  const p = t.problem;
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="max-w-3xl mb-16">
          <p className={`${t.displayFont} text-[1.3rem] sm:text-[1.5rem] font-semibold text-ink-soft tracking-tight mb-3`}>
            {p.sentence}
          </p>
          <div className="badge badge-blue mb-5">{p.badge}</div>
          <h2 className={`${t.displayFont} text-[2.1rem] sm:text-[2.6rem] font-extrabold tracking-tight text-ink leading-[1.15] mb-4`}>
            {p.headline}
          </h2>
          <p className="text-[15.5px] text-ink-muted leading-relaxed">{p.body}</p>
        </div>
        <div className="grid sm:grid-cols-2 gap-5">
          {p.points.map((item, i) => (
            <div key={i} className="flex gap-4 p-6 rounded-[18px] border border-slate-100 bg-white hover:border-slate-200 hover:shadow-md transition-all group">
              <div className="w-11 h-11 rounded-xl bg-slate-50 flex items-center justify-center text-[22px] flex-shrink-0 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <div>
                <h3 className="font-semibold text-ink text-[14.5px] mb-1.5">{item.title}</h3>
                <p className="text-[13.5px] text-ink-muted leading-relaxed">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Solution() {
  const { t } = useI18n();
  const s = t.solution;
  return (
    <section className="py-24 bg-dark relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 end-0 w-[500px] h-[500px] rounded-full bg-blue-600/8 blur-3xl" />
        <div className="absolute bottom-0 start-0 w-64 h-64 rounded-full bg-blue-400/5 blur-3xl" />
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
          <defs><pattern id="dots" width="24" height="24" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.2" fill="#60a5fa"/>
          </pattern></defs>
          <rect width="100%" height="100%" fill="url(#dots)"/>
        </svg>
      </div>
      <div className="relative max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-16 items-center">
          <div>
            <div className="badge badge-dark mb-5">{s.badge}</div>
            <h2 className={`${t.displayFont} text-[2.1rem] sm:text-[2.6rem] font-extrabold tracking-tight text-white leading-[1.15] mb-5`}>
              {s.headline}
            </h2>
            <p className="text-[15.5px] text-slate-400 leading-relaxed mb-10">{s.body}</p>
            <a href="#demo" className="btn-primary">{t.nav.cta}</a>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {s.pillars.map((p, i) => (
              <div key={i} className="card-dark p-5 flex gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/20 flex items-center justify-center text-xl flex-shrink-0 group-hover:scale-105 transition-transform">
                  {p.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-white text-[14px] mb-1">{p.title}</h3>
                  <p className="text-[13px] text-slate-400 leading-relaxed">{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Differentiation() {
  const { t } = useI18n();
  const d = t.differentiation;
  return (
    <section className="py-24 bg-surface-2">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-16 items-start">
          <div className="lg:sticky lg:top-24">
            <div className="badge badge-blue mb-5">{d.badge}</div>
            <h2 className={`${t.displayFont} text-[2.1rem] sm:text-[2.6rem] font-extrabold tracking-tight text-ink leading-[1.15] mb-5`}>
              {d.headline}
            </h2>
            <p className="text-[15.5px] text-ink-muted leading-relaxed mb-8">{d.body}</p>
            <a href="#demo" className="btn-secondary">{t.nav.cta}</a>
          </div>
          <div className="space-y-4">
            {d.points.map((pt, i) => (
              <div key={i} className="bg-white rounded-[18px] border border-slate-100 p-6 hover:border-blue-200 hover:shadow-lg transition-all group">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-[11px] font-black">0{i+1}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-ink text-[14.5px] mb-1.5">{pt.title}</h3>
                    <p className="text-[13.5px] text-ink-muted leading-relaxed">{pt.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
