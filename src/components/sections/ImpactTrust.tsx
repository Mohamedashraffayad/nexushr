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
