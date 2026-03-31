"use client";
import { useState } from "react";
import { useI18n } from "@/lib/i18n";
import { Check } from "lucide-react";

export default function Features() {
  const { t } = useI18n();
  const f = t.features;
  const [active, setActive] = useState(f.areas[0].id);
  const current = f.areas.find(a => a.id === active) || f.areas[0];

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

        {/* Tab nav */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-surface-2 border border-slate-200 rounded-[14px] p-1.5 gap-1 flex-wrap justify-center">
            {f.areas.map(area => (
              <button key={area.id} onClick={() => setActive(area.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-[10px] text-[13px] font-semibold transition-all whitespace-nowrap
                  ${active === area.id ? "bg-white shadow-sm text-accent border border-slate-100" : "text-ink-muted hover:text-ink"}`}>
                <span>{area.icon}</span>
                <span>{area.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content panel */}
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 items-start">
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

          {/* Right: mini dashboard panel for current feature */}
          <div className="rounded-[20px] overflow-hidden shadow-lg border border-slate-200/80">
            <div className="window-chrome">
              <div className="w-[10px] h-[10px] rounded-full bg-[#ff5f57]"/>
              <div className="w-[10px] h-[10px] rounded-full bg-[#febc2e]"/>
              <div className="w-[10px] h-[10px] rounded-full bg-[#28c840]"/>
              <div className="ms-auto">
                <span className="text-slate-400 text-[10px] font-mono">{current.title}</span>
              </div>
            </div>
            <div className="bg-[#f8fafc] p-4 min-h-[280px]">
              <FeatureVisual id={current.id} />
            </div>
          </div>
        </div>

        {/* Area cards summary */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-16 pt-16 border-t border-slate-100">
          {f.areas.map((area, i) => (
            <button key={i} onClick={() => setActive(area.id)}
              className={`text-start p-5 rounded-[16px] border transition-all
                ${active === area.id ? "border-accent bg-accent-dim shadow-sm" : "border-slate-100 bg-white hover:border-slate-200 hover:shadow-sm"}`}>
              <div className="text-2xl mb-3">{area.icon}</div>
              <div className={`font-semibold text-[13.5px] mb-1 ${active === area.id ? "text-accent" : "text-ink"}`}>{area.title}</div>
              <div className="text-[12px] text-ink-faint leading-snug">{area.description}</div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureVisual({ id }: { id: string }) {
  if (id === "payroll") return (
    <div className="space-y-2.5">
      <div className="bg-white rounded-xl border border-slate-100 p-3">
        <div className="text-[10px] text-ink-faint uppercase tracking-wide mb-2 font-semibold">Tax Calculation Breakdown</div>
        {[
          { label: "Gross Salary", value: "EGP 15,000", bar: 100, color: "bg-blue-200" },
          { label: "Social Insurance (11%)", value: "– EGP 1,034", bar: 44, color: "bg-amber-200" },
          { label: "Income Tax", value: "– EGP 866", bar: 36, color: "bg-red-200" },
          { label: "Net Pay", value: "EGP 13,100", bar: 87, color: "bg-emerald-300" },
        ].map((r, i) => (
          <div key={i} className="mb-2">
            <div className="flex justify-between mb-1">
              <span className="text-[10px] text-ink-soft">{r.label}</span>
              <span className={`text-[10px] font-bold ${i === 3 ? "text-emerald-700" : "text-ink-soft"}`}>{r.value}</span>
            </div>
            <div className="h-1.5 bg-slate-100 rounded-full">
              <div className={`h-full ${r.color} rounded-full`} style={{width:`${r.bar}%`}}/>
            </div>
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        {[{l:"Runs",v:"12"},{l:"Employees",v:"339"},{l:"Accuracy",v:"100%"}].map((s,i) => (
          <div key={i} className="flex-1 bg-white rounded-xl border border-slate-100 p-2.5 text-center">
            <div className="text-[15px] font-black text-accent">{s.v}</div>
            <div className="text-[9px] text-ink-faint">{s.l}</div>
          </div>
        ))}
      </div>
    </div>
  );

  if (id === "attendance") return (
    <div className="space-y-2.5">
      <div className="bg-white rounded-xl border border-slate-100 p-3">
        <div className="text-[10px] text-ink-faint uppercase tracking-wide mb-2.5 font-semibold">Today&apos;s Check-ins</div>
        {[
          { name: "Ahmed M.", method: "Fingerprint", time: "08:02", status: "On time" },
          { name: "Sara K.", method: "GPS", time: "08:47", status: "Late 12m" },
          { name: "Nour H.", method: "Mobile App", time: "07:58", status: "On time" },
          { name: "Karim R.", method: "Fingerprint", time: "—", status: "Absent" },
        ].map((r, i) => (
          <div key={i} className="flex items-center justify-between py-1.5 border-b border-slate-50 last:border-0">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-blue-700 flex items-center justify-center text-white text-[9px] font-bold">{r.name[0]}</div>
              <div>
                <div className="text-[9px] font-semibold text-ink-soft">{r.name}</div>
                <div className="text-[8px] text-ink-faint">{r.method}</div>
              </div>
            </div>
            <div className="text-end">
              <div className="text-[9px] font-mono text-ink-soft">{r.time}</div>
              <div className={`text-[8px] font-semibold ${r.status === "On time" ? "text-emerald-600" : r.status === "Absent" ? "text-red-500" : "text-amber-600"}`}>{r.status}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  if (id === "people") return (
    <div className="space-y-2.5">
      <div className="bg-white rounded-xl border border-slate-100 overflow-hidden">
        <div className="px-3 py-2 bg-slate-50 border-b border-slate-100">
          <span className="text-[10px] font-semibold text-ink-faint uppercase tracking-wide">Employee Directory</span>
        </div>
        {[
          { name: "Ahmed Mohamed", dept: "Engineering", role: "Senior Dev", status: "Active" },
          { name: "Sara Khalil", dept: "HR", role: "HR Manager", status: "Active" },
          { name: "Nour Hassan", dept: "Finance", role: "Accountant", status: "On Leave" },
          { name: "Karim Rashed", dept: "Sales", role: "Sales Lead", status: "Active" },
        ].map((e, i) => (
          <div key={i} className="flex items-center gap-2.5 px-3 py-2 border-b border-slate-50 last:border-0 hover:bg-slate-50/50">
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-300 to-blue-600 flex items-center justify-center text-white text-[10px] font-bold">{e.name[0]}</div>
            <div className="flex-1 min-w-0">
              <div className="text-[9px] font-semibold text-ink truncate">{e.name}</div>
              <div className="text-[8px] text-ink-faint">{e.dept} · {e.role}</div>
            </div>
            <div className={`text-[8px] px-1.5 py-0.5 rounded-full font-semibold ${e.status === "Active" ? "bg-emerald-50 text-emerald-700" : "bg-amber-50 text-amber-700"}`}>{e.status}</div>
          </div>
        ))}
      </div>
    </div>
  );

  // reporting
  return (
    <div className="space-y-2.5">
      <div className="bg-white rounded-xl border border-slate-100 p-3">
        <div className="text-[10px] text-ink-faint uppercase tracking-wide mb-2 font-semibold">Payroll Reconciliation</div>
        {[
          { label: "Total Gross", value: "EGP 2,340,000" },
          { label: "Total Deductions", value: "EGP 345,600" },
          { label: "Total Net", value: "EGP 1,994,400" },
          { label: "Employees Paid", value: "339 / 339" },
        ].map((r, i) => (
          <div key={i} className="flex justify-between py-1.5 border-b border-slate-50 last:border-0">
            <span className="text-[10px] text-ink-muted">{r.label}</span>
            <span className={`text-[10px] font-bold ${i === 2 ? "text-emerald-700" : "text-ink"}`}>{r.value}</span>
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        {["Export CSV","Export PDF","Audit Log"].map((btn, i) => (
          <div key={i} className="flex-1 bg-white border border-slate-200 rounded-lg py-2 text-center text-[9px] font-semibold text-ink-muted hover:border-accent hover:text-accent cursor-pointer transition-colors">
            {btn}
          </div>
        ))}
      </div>
    </div>
  );
}
