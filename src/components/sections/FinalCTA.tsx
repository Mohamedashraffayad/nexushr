"use client";
import { useI18n } from "@/lib/i18n";

export default function FinalCTA() {
  const { t } = useI18n();
  const c = t.cta;

  return (
    <section className="py-24 bg-dark relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0"
          style={{ backgroundImage: "radial-gradient(ellipse at 50% 0%, rgba(37,99,235,0.18) 0%, transparent 60%)" }}
        />
        <svg className="absolute inset-0 w-full h-full opacity-[0.035]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="cta-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M40 0L0 0 0 40" fill="none" stroke="#60a5fa" strokeWidth="0.8"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cta-grid)"/>
        </svg>
      </div>

      <div className="relative max-w-3xl mx-auto px-5 sm:px-8 text-center">
        {/* Icon */}
        <div className="w-14 h-14 rounded-2xl bg-accent/20 border border-accent/30 flex items-center justify-center text-2xl mx-auto mb-8">
          🚀
        </div>

        <h2 className={`${t.displayFont} text-[2.2rem] sm:text-[2.8rem] font-extrabold tracking-tight text-white leading-[1.12] mb-5`}>
          {c.headline}
        </h2>
        <p className="text-[15.5px] text-slate-400 leading-relaxed mb-10 max-w-xl mx-auto">
          {c.body}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a href="#demo" className="btn-primary text-[14px] py-3.5 px-8">
            {c.primary}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </a>
          <a
            href="https://wa.me/201281197000"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost-white text-[14px] py-3.5 px-8"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            {c.secondary}
          </a>
        </div>

        {/* Social proof micro-line */}
        <div className="flex items-center justify-center gap-2 mt-8">
          <div className="flex -space-x-2">
            {["KM","SL","AR","NH"].map((ini, i) => (
              <div key={i} className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 border-2 border-slate-800 flex items-center justify-center text-white text-[9px] font-bold">
                {ini}
              </div>
            ))}
          </div>
          <span className="text-[12px] text-slate-500">
            {t.lang === "ar" ? "انضم إلى فرق تدير مئات الموظفين على NexusHR" : "Join operations teams managing hundreds of employees on NexusHR"}
          </span>
        </div>
      </div>
    </section>
  );
}
