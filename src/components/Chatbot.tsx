"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import { useI18n } from "@/lib/i18n";

// ─── Types ───────────────────────────────────────────────────────────────────

type Role = "bot" | "user";

interface Message {
  id: string;
  role: Role;
  text: string;
  actions?: Action[];
  time: Date;
}

interface Action {
  label: string;
  value: string;
  href?: string;
}

// ─── Knowledge Base ──────────────────────────────────────────────────────────

const QUICK_ACTIONS_DEFAULT: Action[] = [
  { label: "📋 Request a Demo", value: "demo" },
  { label: "⚙️ Payroll Features", value: "payroll" },
  { label: "📍 Attendance Tracking", value: "attendance" },
  { label: "🏢 Multi-Branch Support", value: "branches" },
];

const CONVERSION_ACTIONS: Action[] = [
  { label: "Book a Demo →", value: "demo" },
  { label: "View Features", value: "features" },
];

const DEMO_ACTIONS: Action[] = [
  { label: "Request Demo Now", value: "request_demo", href: "#demo" },
  { label: "Ask Something Else", value: "restart" },
];

interface KBEntry {
  keywords: string[];
  response: string;
  actions?: Action[];
}

const KNOWLEDGE_BASE: KBEntry[] = [
  {
    keywords: ["payroll", "salary", "salaries", "pay", "wage", "wages", "compensation", "مرتب", "راتب", "رواتب"],
    response: "NexusHR's payroll engine calculates taxes, deductions, and net pay automatically — based on attendance data, configured rules, and local compliance requirements. No spreadsheets, no manual reconciliation. A payroll run that used to take days typically finishes in under 5 minutes.",
    actions: [
      { label: "See Payroll in Action", value: "payroll_demo", href: "#features" },
      { label: "Request a Demo", value: "demo", href: "#demo" },
    ],
  },
  {
    keywords: ["attendance", "check in", "checkin", "check-in", "fingerprint", "biometric", "gps", "time tracking", "clock", "حضور", "بصمة"],
    response: "Attendance data flows directly into payroll — no re-entry required. NexusHR supports fingerprint devices, GPS check-in, and mobile app check-ins. Late arrivals, absences, and overtime are calculated automatically and reflected in the payroll run.",
    actions: [
      { label: "Explore Attendance", value: "attendance_more", href: "#features" },
      { label: "Book a Demo", value: "demo", href: "#demo" },
    ],
  },
  {
    keywords: ["employee", "employees", "staff", "people", "team", "hr", "human resource", "موظف", "موظفين", "فريق"],
    response: "NexusHR manages the full employee lifecycle — onboarding, profile management, document storage, leave tracking, and self-service access. Employees can view their payslips, leave balances, and attendance history without contacting HR.",
    actions: CONVERSION_ACTIONS,
  },
  {
    keywords: ["branch", "branches", "location", "locations", "multi", "department", "subsidiary", "فرع", "فروع", "موقع"],
    response: "NexusHR is built for multi-location operations. You can set up a full org hierarchy — holding company → subsidiary → branch → employee — with independent payroll rules, compliance configurations, and role-based access at each level.",
    actions: CONVERSION_ACTIONS,
  },
  {
    keywords: ["report", "reports", "reporting", "analytics", "export", "csv", "pdf", "تقرير", "تقارير", "تحليل"],
    response: "NexusHR generates payroll reconciliation reports, attendance summaries, leave analytics, and compliance-ready outputs — all filterable by date range, branch, or department. Data exports as CSV, JSON, or PDF with one click.",
    actions: CONVERSION_ACTIONS,
  },
  {
    keywords: ["price", "pricing", "cost", "plan", "plans", "subscription", "how much", "سعر", "تكلفة", "اشتراك"],
    response: "NexusHR is priced per employee per month — scaling as your team grows. There's no fixed contract required for smaller teams. For larger or enterprise deployments, custom pricing is available. The best way to get exact numbers is through a short demo call.",
    actions: DEMO_ACTIONS,
  },
  {
    keywords: ["demo", "trial", "test", "try", "book", "schedule", "call", "meeting", "عرض", "تجربة", "حجز"],
    response: "Great — a demo takes about 20 minutes and we'll walk through the features most relevant to your company. Fill out the short form and the team will confirm a time within 24 hours.",
    actions: DEMO_ACTIONS,
  },
  {
    keywords: ["setup", "onboard", "onboarding", "implementation", "migrate", "import", "install", "integrate", "تطبيق", "بدء", "تكامل"],
    response: "Setup typically takes 1–3 days. You can import existing employee records, attendance sheets, and historical payroll data via structured Excel upload. The NexusHR team provides guided onboarding to configure payroll rules, compliance settings, and org structure.",
    actions: DEMO_ACTIONS,
  },
  {
    keywords: ["compliance", "tax", "regulation", "legal", "law", "insurance", "ضريبة", "امتثال", "قانون", "تأمين"],
    response: "NexusHR includes a configurable compliance engine — you define tax brackets, insurance thresholds, and deduction rules per company or branch. Every payroll run and attendance change is logged immutably, giving you a full audit trail at all times.",
    actions: CONVERSION_ACTIONS,
  },
  {
    keywords: ["security", "secure", "data", "privacy", "safe", "protect", "أمان", "بيانات", "خصوصية"],
    response: "NexusHR uses role-based access control — HR managers, branch managers, and employees each see only what they're authorized to. All data is stored securely, with audit logging on every sensitive action.",
    actions: CONVERSION_ACTIONS,
  },
  {
    keywords: ["arabic", "language", "rtl", "localization", "region", "عربي", "لغة", "منطقة"],
    response: "NexusHR is built with Arabic as a first-class language — not a translation layer on top of an English system. RTL layouts, regional date formats, and locale-aware content are fully supported throughout the platform.",
    actions: CONVERSION_ACTIONS,
  },
  {
    keywords: ["leave", "vacation", "sick", "absence", "time off", "إجازة", "غياب", "مرض"],
    response: "NexusHR handles all leave types — annual, sick, emergency, maternity/paternity, and custom types you configure. Leave requests and approvals flow through the system, and balances are updated automatically and visible to employees in self-service.",
    actions: CONVERSION_ACTIONS,
  },
  {
    keywords: ["features", "feature", "what can", "what does", "capabilities", "مميزات", "ميزات", "يفعل"],
    response: "NexusHR covers four core areas: Payroll automation, Attendance tracking, People management, and Reporting. Each module feeds into the others — so attendance flows into payroll, leave feeds into attendance, and everything rolls up into reports.",
    actions: [
      { label: "See All Features", value: "features_link", href: "#features" },
      { label: "Book a Demo", value: "demo", href: "#demo" },
    ],
  },
  {
    keywords: ["hello", "hi", "hey", "start", "مرحبا", "السلام", "أهلا", "ابدأ"],
    response: "Hello! I'm the NexusHR assistant. I can answer questions about payroll, attendance, employee management, multi-branch setup, reporting, or anything else about the platform. What would you like to know?",
    actions: QUICK_ACTIONS_DEFAULT,
  },
  {
    keywords: ["thank", "thanks", "great", "perfect", "شكرا", "ممتاز", "رائع"],
    response: "You're welcome! If you'd like to see everything in context, a short demo is the fastest way to get a complete picture.",
    actions: DEMO_ACTIONS,
  },
];

const WELCOME_MESSAGE = "Welcome to NexusHR — I can answer questions about payroll, attendance, employee management, and more. What would you like to explore?";

const FALLBACK_RESPONSES = [
  "I want to make sure you get accurate information. That's something best covered in a quick demo — the team can walk you through it directly.",
  "Good question. The specifics there depend on your setup, which is why a short demo call is the best next step.",
  "I'd rather connect you with someone who can give you a precise answer than guess. A 20-minute demo would cover this well.",
];

// ─── Matching Logic ──────────────────────────────────────────────────────────

function findResponse(input: string): { response: string; actions?: Action[] } {
  const normalized = input.toLowerCase().trim();

  for (const entry of KNOWLEDGE_BASE) {
    if (entry.keywords.some(kw => normalized.includes(kw))) {
      return { response: entry.response, actions: entry.actions };
    }
  }

  // fallback
  const fallback = FALLBACK_RESPONSES[Math.floor(Math.random() * FALLBACK_RESPONSES.length)];
  return {
    response: fallback,
    actions: DEMO_ACTIONS,
  };
}

// ─── Utilities ───────────────────────────────────────────────────────────────

function uid() {
  return Math.random().toString(36).slice(2, 10);
}

function formatTime(d: Date) {
  return d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

// ─── Component ───────────────────────────────────────────────────────────────

export default function Chatbot() {
  const { isAr } = useI18n();
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);
  const [showBadge, setShowBadge] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-open after 4 seconds on first visit
  useEffect(() => {
    const alreadyOpened = sessionStorage.getItem("nhr_chat_opened");
    if (alreadyOpened) return;

    const badge = setTimeout(() => setShowBadge(true), 2500);
    const timer = setTimeout(() => {
      setOpen(true);
      setHasOpened(true);
      sessionStorage.setItem("nhr_chat_opened", "1");
      addBotMessage(WELCOME_MESSAGE, QUICK_ACTIONS_DEFAULT);
    }, 4000);

    return () => { clearTimeout(timer); clearTimeout(badge); };
  }, []);

  // Scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  // Focus input on open
  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 150);
  }, [open]);

  const addBotMessage = useCallback((text: string, actions?: Action[]) => {
    setMessages(prev => [...prev, {
      id: uid(),
      role: "bot",
      text,
      actions,
      time: new Date(),
    }]);
  }, []);

  const handleOpen = () => {
    setOpen(true);
    setShowBadge(false);
    if (!hasOpened) {
      setHasOpened(true);
      sessionStorage.setItem("nhr_chat_opened", "1");
      addBotMessage(WELCOME_MESSAGE, QUICK_ACTIONS_DEFAULT);
    }
  };

  const handleSend = useCallback((text: string) => {
    const trimmed = text.trim();
    if (!trimmed || typing) return;

    // Add user message
    setMessages(prev => [...prev, { id: uid(), role: "user", text: trimmed, time: new Date() }]);
    setInput("");
    setTyping(true);

    // Simulate thinking delay
    const delay = 600 + Math.random() * 600;
    setTimeout(() => {
      const { response, actions } = findResponse(trimmed);
      setTyping(false);
      addBotMessage(response, actions);
    }, delay);
  }, [typing, addBotMessage]);

  const handleAction = useCallback((action: Action) => {
    if (action.href) {
      setOpen(false);
      document.querySelector(action.href)?.scrollIntoView({ behavior: "smooth" });
      return;
    }
    if (action.value === "restart") {
      setMessages([]);
      addBotMessage(WELCOME_MESSAGE, QUICK_ACTIONS_DEFAULT);
      return;
    }
    handleSend(action.label.replace(/^[^\w\s]*\s*/, ""));
  }, [addBotMessage, handleSend]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend(input);
    }
  };

  return (
    <>
      {/* Chat Panel */}
      <div
        className={`fixed z-[9999] transition-all duration-300 ease-out
          ${isAr ? "left-5 sm:left-6" : "right-5 sm:right-6"}
          bottom-[88px]
          ${open
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-4 pointer-events-none"
          }`}
        style={{ width: "min(384px, calc(100vw - 40px))" }}
      >
        <div className="flex flex-col rounded-[20px] overflow-hidden"
          style={{
            height: "min(520px, calc(100vh - 140px))",
            background: "#ffffff",
            boxShadow: "0 24px 64px rgba(10,15,30,0.16), 0 4px 16px rgba(10,15,30,0.08), 0 0 0 1px rgba(226,232,240,0.8)",
          }}>

          {/* Header */}
          <div className="flex items-center gap-3 px-5 py-4 flex-shrink-0"
            style={{ background: "linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%)" }}>
            <div className="w-9 h-9 rounded-[11px] bg-white/15 flex items-center justify-center flex-shrink-0">
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                <rect x="2" y="2" width="7" height="7" rx="2" fill="white" fillOpacity="0.9"/>
                <rect x="11" y="2" width="7" height="7" rx="2" fill="white" fillOpacity="0.55"/>
                <rect x="2" y="11" width="7" height="7" rx="2" fill="white" fillOpacity="0.55"/>
                <rect x="11" y="11" width="7" height="7" rx="2" fill="white"/>
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-white font-semibold text-[13.5px] leading-none mb-0.5">NexusHR Assistant</div>
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" style={{ boxShadow: "0 0 0 2px rgba(52,211,153,0.3)" }}/>
                <span className="text-blue-200 text-[11px]">Online — replies instantly</span>
              </div>
            </div>
            <button onClick={() => setOpen(false)}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors flex-shrink-0"
              aria-label="Close chat">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M1 1l10 10M11 1L1 11" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4"
            style={{ background: "#f8fafc" }}>

            {messages.length === 0 && (
              <div className="flex flex-col items-center justify-center h-full text-center px-4 pb-6">
                <div className="w-14 h-14 rounded-2xl mb-4 flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, #dbeafe, #eff6ff)" }}>
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                    <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      stroke="#2563eb" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="text-[13px] text-slate-500 leading-relaxed">Ask me anything about NexusHR — payroll, attendance, features, or pricing.</p>
              </div>
            )}

            {messages.map(msg => (
              <div key={msg.id} className={`flex flex-col gap-1.5 ${msg.role === "user" ? "items-end" : "items-start"}`}>
                {msg.role === "bot" && (
                  <div className="flex items-center gap-2 px-1">
                    <div className="w-5 h-5 rounded-[6px] flex items-center justify-center"
                      style={{ background: "linear-gradient(135deg, #1e3a8a, #2563eb)" }}>
                      <svg width="10" height="10" viewBox="0 0 16 16" fill="none">
                        <rect x="2" y="2" width="5" height="5" rx="1.5" fill="white" fillOpacity="0.9"/>
                        <rect x="9" y="2" width="5" height="5" rx="1.5" fill="white" fillOpacity="0.6"/>
                        <rect x="2" y="9" width="5" height="5" rx="1.5" fill="white" fillOpacity="0.6"/>
                        <rect x="9" y="9" width="5" height="5" rx="1.5" fill="white"/>
                      </svg>
                    </div>
                    <span className="text-[10px] text-slate-400 font-medium">NexusHR · {formatTime(msg.time)}</span>
                  </div>
                )}

                <div className={`max-w-[85%] px-4 py-3 rounded-[14px] text-[13.5px] leading-relaxed
                  ${msg.role === "user"
                    ? "text-white rounded-br-[4px]"
                    : "text-slate-700 rounded-bl-[4px]"
                  }`}
                  style={msg.role === "user"
                    ? { background: "linear-gradient(135deg, #2563eb, #1d4ed8)", boxShadow: "0 2px 8px rgba(37,99,235,0.25)" }
                    : { background: "#ffffff", boxShadow: "0 1px 4px rgba(10,15,30,0.06), 0 0 0 1px rgba(226,232,240,0.8)" }
                  }>
                  {msg.text}
                </div>

                {msg.role === "user" && (
                  <span className="text-[10px] text-slate-400 px-1">{formatTime(msg.time)}</span>
                )}

                {/* Action buttons */}
                {msg.actions && msg.actions.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 max-w-[95%] px-1 mt-0.5">
                    {msg.actions.map((action, i) => (
                      <button key={i} onClick={() => handleAction(action)}
                        className="text-[12px] font-medium px-3 py-1.5 rounded-[8px] transition-all duration-150 whitespace-nowrap"
                        style={{
                          background: "#ffffff",
                          color: "#2563eb",
                          border: "1px solid #bfdbfe",
                          boxShadow: "0 1px 3px rgba(37,99,235,0.08)",
                        }}
                        onMouseEnter={e => {
                          (e.currentTarget as HTMLElement).style.background = "#dbeafe";
                          (e.currentTarget as HTMLElement).style.borderColor = "#93c5fd";
                        }}
                        onMouseLeave={e => {
                          (e.currentTarget as HTMLElement).style.background = "#ffffff";
                          (e.currentTarget as HTMLElement).style.borderColor = "#bfdbfe";
                        }}>
                        {action.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Typing indicator */}
            {typing && (
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-[6px] flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, #1e3a8a, #2563eb)" }}>
                  <svg width="10" height="10" viewBox="0 0 16 16" fill="none">
                    <rect x="2" y="2" width="5" height="5" rx="1.5" fill="white" fillOpacity="0.9"/>
                    <rect x="9" y="2" width="5" height="5" rx="1.5" fill="white" fillOpacity="0.6"/>
                    <rect x="2" y="9" width="5" height="5" rx="1.5" fill="white" fillOpacity="0.6"/>
                    <rect x="9" y="9" width="5" height="5" rx="1.5" fill="white"/>
                  </svg>
                </div>
                <div className="px-4 py-3 rounded-[14px] rounded-bl-[4px] flex items-center gap-1"
                  style={{ background: "#ffffff", boxShadow: "0 1px 4px rgba(10,15,30,0.06), 0 0 0 1px rgba(226,232,240,0.8)" }}>
                  {[0, 1, 2].map(i => (
                    <div key={i} className="w-1.5 h-1.5 rounded-full bg-slate-400"
                      style={{ animation: `nhr-bounce 1.2s ease-in-out ${i * 0.2}s infinite` }}/>
                  ))}
                </div>
              </div>
            )}
            <div ref={messagesEndRef}/>
          </div>

          {/* Quick action chips (only when no messages) */}
          {messages.length === 0 && (
            <div className="px-4 pb-3 flex-shrink-0" style={{ background: "#f8fafc" }}>
              <div className="flex flex-wrap gap-1.5">
                {QUICK_ACTIONS_DEFAULT.map((a, i) => (
                  <button key={i} onClick={() => handleAction(a)}
                    className="text-[12px] font-medium px-3 py-1.5 rounded-[8px] transition-colors whitespace-nowrap"
                    style={{ background: "#ffffff", color: "#475569", border: "1px solid #e2e8f0" }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#2563eb"; (e.currentTarget as HTMLElement).style.borderColor = "#bfdbfe"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "#475569"; (e.currentTarget as HTMLElement).style.borderColor = "#e2e8f0"; }}>
                    {a.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="px-4 py-3 flex-shrink-0"
            style={{ background: "#ffffff", borderTop: "1px solid #f1f5f9" }}>
            <div className="flex items-center gap-2 px-3.5 py-2.5 rounded-[12px]"
              style={{ background: "#f8fafc", border: "1.5px solid #e2e8f0" }}>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask a question..."
                className="flex-1 bg-transparent text-[13.5px] outline-none placeholder-slate-400 text-slate-700 min-w-0"
                dir="auto"
                maxLength={300}
              />
              <button
                onClick={() => handleSend(input)}
                disabled={!input.trim() || typing}
                className="w-8 h-8 rounded-[8px] flex items-center justify-center flex-shrink-0 transition-all duration-150"
                style={{
                  background: input.trim() && !typing ? "#2563eb" : "#e2e8f0",
                  boxShadow: input.trim() && !typing ? "0 2px 8px rgba(37,99,235,0.3)" : "none",
                }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M22 2L11 13" stroke={input.trim() && !typing ? "white" : "#94a3b8"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M22 2L15 22 11 13 2 9l20-7z" stroke={input.trim() && !typing ? "white" : "#94a3b8"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Button */}
      <button
        onClick={open ? () => setOpen(false) : handleOpen}
        aria-label={open ? "Close chat" : "Open chat"}
        className="fixed z-[9999] w-[56px] h-[56px] rounded-full flex items-center justify-center transition-all duration-300"
        style={{
          bottom: "24px",
          [isAr ? "left" : "right"]: "24px",
          background: open ? "#1e3a8a" : "linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%)",
          boxShadow: "0 8px 28px rgba(37,99,235,0.38), 0 2px 8px rgba(37,99,235,0.2)",
          transform: open ? "scale(0.95)" : "scale(1)",
        }}
        onMouseEnter={e => { if (!open) (e.currentTarget as HTMLElement).style.transform = "scale(1.08)"; }}
        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = open ? "scale(0.95)" : "scale(1)"; }}
      >
        {/* Notification badge */}
        {showBadge && !open && (
          <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red-500 flex items-center justify-center"
            style={{ boxShadow: "0 0 0 2px white" }}>
            <span className="text-white text-[9px] font-bold">1</span>
          </div>
        )}

        {/* Icon toggle */}
        <div className="relative w-6 h-6">
          {/* Chat icon */}
          <div className={`absolute inset-0 flex items-center justify-center transition-all duration-200 ${open ? "opacity-0 scale-75" : "opacity-100 scale-100"}`}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          {/* Close icon */}
          <div className={`absolute inset-0 flex items-center justify-center transition-all duration-200 ${open ? "opacity-100 scale-100" : "opacity-0 scale-75"}`}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M1 1l16 16M17 1L1 17" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
        </div>
      </button>

      {/* Bounce animation keyframes */}
      <style>{`
        @keyframes nhr-bounce {
          0%, 60%, 100% { transform: translateY(0); }
          30% { transform: translateY(-5px); }
        }
      `}</style>
    </>
  );
}
