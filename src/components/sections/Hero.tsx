"use client";
import { useI18n } from "@/lib/i18n";

export default function Hero() {
  const { t } = useI18n();
  const h = t.hero;

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-mesh">
      {/* Geometric background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -end-32 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-blue-500/6 to-blue-400/3 blur-3xl" />
        <div className="absolute bottom-0 -start-20 w-80 h-80 rounded-full bg-gradient-to-tr from-blue-600/5 to-transparent blur-3xl" />
        {/* Subtle grid */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.018]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="g" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M48 0L0 0 0 48" fill="none" stroke="#1e40af" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#g)"/>
        </svg>
      </div>

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-14 items-center">

          {/* Left */}
          <div className="order-2 lg:order-1">
            {/* Badge */}
            <div className="badge badge-blue mb-6">
              <span className="pulse-dot" />
              {h.badge}
            </div>

            {/* Headline */}
            <h1 className={`${t.displayFont} text-[2.6rem] sm:text-[3.2rem] lg:text-[3.6rem] font-extrabold leading-[1.08] tracking-tight text-ink mb-3`}>
              <span className="text-gradient">{h.headline.split('.')[0]}.</span>
            </h1>
            <p className={`${t.displayFont} text-xl sm:text-2xl font-semibold text-ink-soft mb-5 leading-tight`}>
              {h.subheadline}
            </p>

            {/* Body */}
            <p className="text-[15.5px] text-ink-muted leading-relaxed mb-8 max-w-[520px]">
              {h.body}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 mb-10">
              <a href="#demo" className="btn-primary">
                {h.cta1}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </a>
              <a href="#how-it-works" className="btn-secondary">
                {h.cta2}
              </a>
            </div>

            {/* Trust line */}
            <p className="text-[12px] text-ink-faint mb-8">{h.trustLine}</p>

            {/* Stats */}
            <div className="flex flex-wrap gap-6">
              {h.stats.map((s, i) => (
                <div key={i} className="flex flex-col">
                  <span className={`${t.displayFont} text-2xl font-extrabold text-ink`}>{s.value}</span>
                  <span className="text-[12px] text-ink-faint mt-0.5">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Dashboard mockup */}
          <div className="order-1 lg:order-2 float">
            <div className="relative">
              {/* Main window */}
              <div className="rounded-[20px] overflow-hidden shadow-[0_32px_80px_rgba(10,15,30,0.2),0_8px_24px_rgba(10,15,30,0.08)] border border-slate-200/80">
                <div className="window-chrome">
                  <div className="w-[11px] h-[11px] rounded-full bg-[#ff5f57]"/>
                  <div className="w-[11px] h-[11px] rounded-full bg-[#febc2e]"/>
                  <div className="w-[11px] h-[11px] rounded-full bg-[#28c840]"/>
                  <div className="ms-auto bg-slate-700 rounded px-6 py-1">
                    <span className="text-slate-400 text-[11px] font-mono">app.nexushr.com</span>
                  </div>
                </div>
                <div className="bg-[#f8fafc] p-4">
                  {/* Top bar */}
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="text-[13px] font-bold text-ink">March 2025 Payroll</div>
                      <div className="text-[11px] text-ink-faint mt-0.5">Processing run — 339 employees</div>
                    </div>
                    <div className="flex items-center gap-1.5 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-full">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"/>
                      <span className="text-[11px] font-semibold text-emerald-700">Verified</span>
                    </div>
                  </div>

                  {/* KPI row */}
                  <div className="grid grid-cols-4 gap-2.5 mb-4">
                    {[
                      { l: "Total Employees", v: "339", sub: "+12 this month", c: "text-ink" },
                      { l: "Present Today", v: "312", sub: "92% attendance", c: "text-emerald-700" },
                      { l: "On Leave", v: "18", sub: "5 pending approval", c: "text-amber-700" },
                      { l: "Payroll Ready", v: "98%", sub: "16 flagged items", c: "text-accent" },
                    ].map((k, i) => (
                      <div key={i} className="bg-white rounded-xl p-3 border border-slate-100 shadow-sm">
                        <div className="text-[9px] text-ink-faint uppercase tracking-wide mb-1">{k.l}</div>
                        <div className={`text-[18px] font-black ${k.c}`}>{k.v}</div>
                        <div className="text-[9px] text-ink-faint mt-0.5">{k.sub}</div>
                      </div>
                    ))}
                  </div>

                  {/* Attendance chart */}
                  <div className="bg-white rounded-xl p-3 border border-slate-100 shadow-sm mb-2.5">
                    <div className="flex justify-between items-center mb-2.5">
                      <span className="text-[11px] font-semibold text-ink">Attendance — This Week</span>
                      <span className="text-[10px] text-accent font-medium">View report →</span>
                    </div>
                    <div className="flex items-end gap-1 h-14">
                      {[88, 92, 86, 95, 91, 79, 94].map((v, i) => (
                        <div key={i} className="flex-1 flex flex-col items-center gap-1">
                          <div className={`w-full rounded-t-sm transition-all ${i === 6 ? "bg-accent" : "bg-blue-100"}`} style={{height:`${v}%`}}/>
                          <span className="text-[8px] text-ink-faint">
                            {["M","T","W","T","F","S","S"][i]}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Payroll rows */}
                  <div className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden">
                    <div className="grid grid-cols-5 px-3 py-2 bg-slate-50 border-b border-slate-100">
                      {["Employee","Dept","Gross","Deductions","Net"].map(h => (
                        <div key={h} className="text-[8px] font-semibold text-ink-faint uppercase tracking-wide">{h}</div>
                      ))}
                    </div>
                    {[
                      ["Ahmed M.","Tech","EGP 15,000","EGP 2,900","EGP 12,100"],
                      ["Sara K.","HR","EGP 12,500","EGP 2,335","EGP 10,165"],
                      ["Karim H.","Sales","EGP 11,800","EGP 2,178","EGP 9,622"],
                    ].map((row, i) => (
                      <div key={i} className="grid grid-cols-5 px-3 py-2 border-b border-slate-50 last:border-0 hover:bg-slate-50/50">
                        {row.map((cell, j) => (
                          <div key={j} className={`text-[9px] ${j === 4 ? "font-bold text-emerald-700" : j === 3 ? "text-red-500" : "text-ink-soft"}`}>{cell}</div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating cards */}
              <div className="absolute -top-5 -start-6 bg-white rounded-2xl shadow-xl border border-slate-100 px-4 py-3 flex items-center gap-3 max-w-[200px]">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 flex items-center justify-center text-lg flex-shrink-0">✅</div>
                <div>
                  <div className="text-[11px] font-bold text-ink">Payroll verified</div>
                  <div className="text-[10px] text-ink-faint">0 calculation errors</div>
                </div>
              </div>

              <div className="absolute -bottom-5 -end-6 bg-accent rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3 max-w-[210px]">
                <div className="text-2xl">⚡</div>
                <div>
                  <div className="text-[11px] font-bold text-white">Run completed</div>
                  <div className="text-[10px] text-blue-200">3 min 42 sec</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
