"use client";
import { useState } from "react";
import { useI18n } from "@/lib/i18n";

export default function DemoForm() {
  const { t } = useI18n();
  const d = t.demo;
  const [form, setForm] = useState({
    company_name: "", contact_name: "", phone: "",
    email: "", employee_count: "", message: "",
  });
  const [status, setStatus] = useState<"idle"|"loading"|"success"|"error">("idle");

  const change = (e: React.ChangeEvent<HTMLInputElement|HTMLSelectElement|HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/demo-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? "success" : "error");
      if (res.ok) setForm({ company_name:"", contact_name:"", phone:"", email:"", employee_count:"", message:"" });
    } catch { setStatus("error"); }
  };

  return (
    <section id="demo" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-[1fr_1.15fr] gap-16 items-start">

          {/* Left */}
          <div className="lg:pt-4">
            <div className="badge badge-blue mb-5">{d.badge}</div>
            <h2 className={`${t.displayFont} text-[2.1rem] sm:text-[2.6rem] font-extrabold tracking-tight text-ink leading-[1.15] mb-5`}>
              {d.headline}
            </h2>
            <p className="text-[15.5px] text-ink-muted leading-relaxed mb-10">{d.subtext}</p>

            {/* What happens next */}
            <div className="space-y-5">
              {[
                { step: "01", title: t.lang === "ar" ? "نتواصل معك خلال يوم عمل" : "We reach out within one business day", body: t.lang === "ar" ? "مستشارنا يتصل بك لتحديد وقت مناسب" : "Our consultant calls to schedule a convenient time" },
                { step: "02", title: t.lang === "ar" ? "جلسة مخصصة لإعداداتك" : "A session tailored to your setup", body: t.lang === "ar" ? "نستعرض هيكلك التنظيمي وقواعد الرواتب وإعداد الحضور" : "We walk through your org structure, payroll rules, and attendance setup" },
                { step: "03", title: t.lang === "ar" ? "أسئلة مفتوحة — بدون أي ضغط" : "Open Q&A — no pressure", body: t.lang === "ar" ? "تسأل ما تريد. لا وعود مبالغ فيها." : "Ask anything. No inflated promises." },
              ].map((s, i) => (
                <div key={i} className="flex gap-4">
                  <div className={`${t.displayFont} text-[11px] font-black text-accent/40 mt-1 flex-shrink-0 w-6`}>{s.step}</div>
                  <div>
                    <div className="font-semibold text-ink text-[14px] mb-1">{s.title}</div>
                    <div className="text-[13px] text-ink-muted leading-relaxed">{s.body}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="bg-surface-2 rounded-[24px] border border-slate-200 p-8">
            {status === "success" ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-5">✅</div>
                <h3 className={`${t.displayFont} text-xl font-bold text-ink mb-2`}>
                  {t.lang === "ar" ? "تم الاستلام" : "Request received"}
                </h3>
                <p className="text-[14px] text-ink-muted">{d.success}</p>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[12px] font-semibold text-ink-soft mb-1.5">{d.fields.companyName} *</label>
                    <input name="company_name" value={form.company_name} onChange={change} required
                      className="form-input" placeholder={d.fields.companyName}/>
                  </div>
                  <div>
                    <label className="block text-[12px] font-semibold text-ink-soft mb-1.5">{d.fields.contactName} *</label>
                    <input name="contact_name" value={form.contact_name} onChange={change} required
                      className="form-input" placeholder={d.fields.contactName}/>
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[12px] font-semibold text-ink-soft mb-1.5">{d.fields.phone} *</label>
                    <input name="phone" type="tel" value={form.phone} onChange={change} required
                      className="form-input" placeholder="+20 1XX XXX XXXX"/>
                  </div>
                  <div>
                    <label className="block text-[12px] font-semibold text-ink-soft mb-1.5">{d.fields.email} *</label>
                    <input name="email" type="email" value={form.email} onChange={change} required
                      className="form-input" placeholder="you@company.com"/>
                  </div>
                </div>
                <div>
                  <label className="block text-[12px] font-semibold text-ink-soft mb-1.5">{d.fields.employeeCount} *</label>
                  <select name="employee_count" value={form.employee_count} onChange={change} required className="form-input">
                    <option value="">{d.fields.employeeCount}</option>
                    {d.employeeOptions.map((o, i) => <option key={i} value={o}>{o}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-[12px] font-semibold text-ink-soft mb-1.5">{d.fields.message}</label>
                  <textarea name="message" value={form.message} onChange={change} rows={3}
                    className="form-input resize-none" placeholder={d.fields.message}/>
                </div>
                {status === "error" && (
                  <div className="bg-red-50 border border-red-100 text-red-600 text-[13px] px-4 py-3 rounded-xl">{d.error}</div>
                )}
                <button type="submit" disabled={status === "loading"}
                  className="btn-primary w-full justify-center text-[14px] py-3.5 disabled:opacity-60 disabled:cursor-not-allowed">
                  {status === "loading" ? d.submitting : d.submit}
                </button>
                <p className="text-center text-[11.5px] text-ink-faint">
                  {t.lang === "ar" ? "لا رسائل تسويقية. نرد فقط بخصوص طلبك." : "No marketing emails. We only respond about your request."}
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
