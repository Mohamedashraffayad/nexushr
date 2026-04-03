"use client";
import { useState } from "react";
import { useI18n } from "@/lib/i18n";
import { Check, ChevronLeft, ChevronRight } from "lucide-react";

export default function Features() {
  const { t } = useI18n();
  const f = t.features;
  const [active, setActive] = useState(f.areas[0].id);
  const current = f.areas.find(a => a.id === active) || f.areas[0];
  const [imgIdx, setImgIdx] = useState(0);

  const handleAreaChange = (id: string) => {
    setActive(id);
    setImgIdx(0);
  };

  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <div className="badge badge-blue mb-5">{f.badge}</div>
          <h2 className={`${t.displayFont} text-[2.1rem] sm:text-[2.6rem] font-extrabold tracking-tight text-ink leading-[1.15] mb-4`}>
            {f.headline}
          </h2>
          <p className="text-[15.5px] text-ink-muted leading-relaxed">{f.body}</p>
        </div>

        {/* Tab nav — scrollable on mobile */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-surface-2 border border-slate-200 rounded-[14px] p-1.5 gap-1 flex-wrap justify-center max-w-full overflow-x-auto">
            {f.areas.map(area => (
              <button key={area.id} onClick={() => handleAreaChange(area.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-[10px] text-[12.5px] font-semibold transition-all whitespace-nowrap
                  ${active === area.id ? "bg-white shadow-sm text-accent border border-slate-100" : "text-ink-muted hover:text-ink"}`}>
                <span>{area.icon}</span>
                <span>{area.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content panel */}
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-10 items-start">
          {/* Left: text content */}
          <div>
            <div className="w-12 h-12 rounded-2xl bg-accent-dim flex items-center justify-center text-[26px] mb-5">
              {current.icon}
            </div>
            <h3 className={`${t.displayFont} text-[1.7rem] font-extrabold text-ink tracking-tight mb-3`}>
              {current.title}
            </h3>
            <p className="text-[15.5px] text-ink-muted leading-relaxed mb-8">
              {current.description}
            </p>
            <ul className="space-y-3.5">
              {current.bullets.map((bullet, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-accent-dim flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-accent" strokeWidth={3}/>
                  </div>
                  <span className="text-[14px] text-ink-soft leading-relaxed">{bullet}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <a href="#demo" className="btn-primary text-[13px]">{t.nav.cta}</a>
            </div>
          </div>

          {/* Right: real screenshot */}
          <div className="space-y-3">
            <div className="rounded-[20px] overflow-hidden shadow-lg border border-slate-200/80">
              <div className="window-chrome">
                <div className="w-[10px] h-[10px] rounded-full bg-[#ff5f57]"/>
                <div className="w-[10px] h-[10px] rounded-full bg-[#febc2e]"/>
                <div className="w-[10px] h-[10px] rounded-full bg-[#28c840]"/>
                <div className="ms-auto">
                  <span className="text-slate-400 text-[10px] font-mono">{current.title}</span>
                </div>
              </div>
              <div className="bg-[#0b1437]">
                <img
                  src={current.images[imgIdx]}
                  alt={current.title}
                  className="w-full h-auto block"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Image pagination for multi-screenshot features */}
            {current.images.length > 1 && (
              <div className="flex items-center justify-center gap-3">
                <button
                  onClick={() => setImgIdx(Math.max(0, imgIdx - 1))}
                  disabled={imgIdx === 0}
                  className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-ink-muted hover:text-accent hover:border-accent disabled:opacity-30 disabled:hover:text-ink-muted disabled:hover:border-slate-200 transition-all"
                >
                  <ChevronLeft size={16} />
                </button>
                <div className="flex gap-2">
                  {current.images.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setImgIdx(i)}
                      className={`w-2.5 h-2.5 rounded-full transition-all ${i === imgIdx ? "bg-accent scale-110" : "bg-slate-200 hover:bg-slate-300"}`}
                    />
                  ))}
                </div>
                <button
                  onClick={() => setImgIdx(Math.min(current.images.length - 1, imgIdx + 1))}
                  disabled={imgIdx === current.images.length - 1}
                  className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-ink-muted hover:text-accent hover:border-accent disabled:opacity-30 disabled:hover:text-ink-muted disabled:hover:border-slate-200 transition-all"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Area cards summary */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 mt-16 pt-16 border-t border-slate-100">
          {f.areas.map((area, i) => (
            <button key={i} onClick={() => handleAreaChange(area.id)}
              className={`text-center p-4 rounded-[14px] border transition-all
                ${active === area.id ? "border-accent bg-accent-dim shadow-sm" : "border-slate-100 bg-white hover:border-slate-200 hover:shadow-sm"}`}>
              <div className="text-2xl mb-2">{area.icon}</div>
              <div className={`font-semibold text-[11.5px] leading-tight ${active === area.id ? "text-accent" : "text-ink"}`}>{area.title}</div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
