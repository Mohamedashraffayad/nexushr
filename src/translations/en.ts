export const en = {
  dir: "ltr" as const,
  lang: "en",
  fontClass: "font-body",
  displayFont: "font-display",

  nav: {
    product: "Product",
    contact: "Contact",
    cta: "Book a Demo",
    langToggle: "عربي",
    login: "Log in",
  },

  hero: {
    badge: "HR Infrastructure for Modern Companies",
    headline: "HR and payroll that works the way your company does.",
    subheadline: "Multi-location. Multi-language. Compliance-ready.",
    body: "NexusHR connects attendance, payroll, and people management into one system — built for companies that run across multiple locations, languages, and compliance requirements.",
    cta1: "Book a Demo",
    cta2: "See How It Works",
    trustLine: "Used by operations teams managing distributed workforces.",
    stats: [
      { value: "500+", label: "Employees tracked daily" },
      { value: "12+", label: "Countries supported" },
      { value: "99.9%", label: "Payroll accuracy rate" },
    ],
  },

  problem: {
    sentence: "Dear HR Manager",
    badge: "The Problem",
    headline: "Most HR tools weren't built for how companies actually operate.",
    body: "When your workforce is spread across branches, countries, or compliance zones, a single-region HR tool creates more work than it saves. You end up with disconnected data, manual reconciliation, and payroll processes that don't scale.",
    points: [
      {
        icon: "⏳",
        title: "Payroll takes days, not minutes",
        body: "Collecting attendance from multiple sources, adjusting for absences, and calculating taxes manually consumes your HR team's week — every month.",
      },
      {
        icon: "🗂",
        title: "Branch data stays siloed",
        body: "When each location manages its own records, you lose visibility. Reconciling data across branches means spreadsheets, emails, and version conflicts.",
      },
      {
        icon: "⚠️",
        title: "Compliance creates constant risk",
        body: "Tax rules, insurance thresholds, and leave regulations differ by region. A miscalculation isn't just expensive — it's a legal liability.",
      },
      {
        icon: "📵",
        title: "Employees have no self-service",
        body: "When staff can't access their own records, payslips, or leave balances, every small request becomes an HR ticket.",
      },
    ],
  },

  solution: {
    badge: "The Solution",
    headline: "One system that runs HR across your entire operation.",
    body: "NexusHR gives you a single source of truth for every employee, location, and payroll cycle — with built-in compliance tools that adapt to local rules.",
    pillars: [
      { icon: "🏗", title: "Structure that mirrors your company", body: "Set up organizations, companies, and branches exactly as they exist. Permissions, payroll rules, and reporting follow your structure — not the other way around." },
      { icon: "⚙️", title: "Payroll that calculates correctly the first time", body: "Tax brackets, insurance contributions, and deductions are computed automatically per your configured rules. No manual adjustments. No reconciliation after the fact." },
      { icon: "📡", title: "Attendance data you can actually trust", body: "Fingerprint, GPS, and mobile check-in data flows directly into payroll. If someone is late or absent, the calculation reflects it — without manual entry." },
      { icon: "🌐", title: "Multi-language from the ground up", body: "Arabic, English, and additional languages are first-class — not translations bolted onto an English system. RTL layouts, regional date formats, and locale-aware content throughout." },
    ],
  },

  differentiation: {
    badge: "Why NexusHR",
    headline: "Built for complexity, not around it.",
    body: "Most HR platforms assume your company fits a single country, a single language, and a simple org structure. NexusHR is built for the reality of multi-location operations.",
    points: [
      { title: "Configurable compliance engine", body: "Define payroll rules per company or branch — tax brackets, insurance caps, deduction types. Built for regions with evolving regulations." },
      { title: "Real org hierarchy", body: "Organization → Company → Branch → Employee. Each level inherits and overrides settings independently." },
      { title: "Audit trail built in", body: "Every payroll run, attendance change, and permission update is logged immutably. Compliant by design, not by accident." },
      { title: "Data import that works", body: "Bring in employee records, attendance sheets, and historical data via structured Excel import. Validation happens row by row before anything touches the database." },
    ],
  },

  features: {
    badge: "Product Areas",
    headline: "Every part of HR in one place.",
    body: "NexusHR covers the full employee lifecycle — structured into four core areas that work together.",
    areas: [
      {
        id: "payroll",
        icon: "💰",
        title: "Payroll Engine",
        description: "Accurate payroll calculation across multiple compliance frameworks — without manual intervention.",
        bullets: [
          "Tax brackets and insurance contributions computed automatically per configured rules",
          "Deductions for absences and late arrivals flow from attendance data — no separate entry",
          "PDF payslips generated per employee, ready to distribute or download",
          "Payroll reconciliation report exported as structured data for finance review",
          "Full audit trail of every run — who approved it, when, and what changed",
        ],
      },
      {
        id: "attendance",
        icon: "📍",
        title: "Attendance & Time",
        description: "Multiple check-in methods, one attendance record. Trusted data for payroll and management.",
        bullets: [
          "Fingerprint, mobile app, and GPS check-in all feed into the same record",
          "Geo-fenced zones ensure location-based check-in only within approved areas",
          "Late arrivals and absences flagged automatically — no manual review required",
          "Shift patterns, overtime thresholds, and working hours configured per branch",
          "Daily, weekly, and monthly attendance reports available without exports",
        ],
      },
      {
        id: "people",
        icon: "👥",
        title: "People & Structure",
        description: "Employee records, org structure, and access control that reflect how your company actually works.",
        bullets: [
          "Multi-level org hierarchy — set up holding companies, subsidiaries, and branches independently",
          "Employee profiles with 40+ fields including salary components, documents, and job history",
          "Role-based access control — HR managers, branch managers, and employees see only what they should",
          "Excel bulk import with row-level validation — errors are flagged before data is committed",
          "Configurable leave types, accrual rules, and approval workflows per location",
        ],
      },
      {
        id: "reporting",
        icon: "📊",
        title: "Reporting & Compliance",
        description: "Structured data output for finance, auditors, and management — when they need it.",
        bullets: [
          "Payroll reconciliation reports show gross, deductions, and net per employee",
          "Employee directory exportable as JSON or CSV for integration with external systems",
          "Immutable audit log captures every system action with user, timestamp, and change detail",
          "Leave and absence summaries by team, branch, or company — filtered by any date range",
          "Compliance-ready outputs structured for regional reporting requirements",
        ],
      },
    ],
  },

  impact: {
    badge: "Business Impact",
    headline: "What changes when payroll and attendance actually work.",
    body: "These are the operational shifts companies see after moving off manual processes.",
    points: [
      { metric: "80%", label: "Reduction in payroll preparation time", detail: "From multi-day manual calculations to automated runs that finish in minutes." },
      { metric: "100%", label: "Payroll accuracy on first run", detail: "Automated tax and deduction calculation eliminates the most common source of payroll errors." },
      { metric: "Zero", label: "Manual attendance reconciliation", detail: "Attendance data flows directly into payroll. No spreadsheet consolidation, no re-entry." },
      { metric: "Full", label: "Audit readiness at all times", detail: "Every action logged. Every payroll run documented. Accessible when auditors or management ask." },
      { metric: "5 min", label: "Employee access to their own data", detail: "Self-service for payslips, leave balances, and attendance history removes routine HR requests." },
    ],
  },

  preview: {
    badge: "Product Preview",
    headline: "Built for clarity, not complexity.",
    tabs: [
      { id: "dashboard", label: "Dashboard" },
      { id: "payroll", label: "Payroll" },
      { id: "attendance", label: "Attendance" },
      { id: "employees", label: "Employees" },
    ],
  },


  faq: {
    badge: "FAQ",
    headline: "Common questions.",
    items: [
      {
        q: "Does NexusHR support languages other than Arabic and English?",
        a: "Arabic and English are fully supported with native layouts. Additional languages can be configured for the interface. The system's translation architecture is built to extend without code changes.",
      },
      {
        q: "How does the payroll compliance engine work for different countries?",
        a: "Tax brackets, insurance contribution rates, and deduction rules are configured per company entity — not hardcoded. When local rules change, you update the configuration, not the software. We provide templates for supported regions.",
      },
      {
        q: "What attendance tracking methods are supported?",
        a: "NexusHR supports fingerprint device integration, GPS-based mobile check-in with geo-fencing, and manual entry for exceptional cases. All methods feed into the same attendance record, which flows directly into payroll calculation.",
      },
      {
        q: "How long does setup take?",
        a: "A standard deployment — company structure, employee import, payroll configuration, and first payroll run — typically takes three to five business days. We provide structured onboarding support throughout.",
      },
      {
        q: "Is NexusHR cloud-based or can we host it ourselves?",
        a: "Both options are available. The hosted version is managed infrastructure — updates, backups, and availability are handled for you. On-premise deployment is available for organizations with data residency requirements.",
      },
      {
        q: "Can we import our existing employee data?",
        a: "Yes. Employee records and historical attendance data can be imported via structured Excel sheets. Each row is validated before anything is committed — invalid rows are flagged with specific error messages, and valid rows are staged for review before posting.",
      },
      {
        q: "What can employees access themselves?",
        a: "Employees access a self-service portal via web or mobile app. They can view their attendance history, download payslips, check leave balances, submit leave requests, and request loans. Access to any other employee's data is not possible.",
      },
      {
        q: "How does the multi-branch structure work?",
        a: "You set up your organization hierarchy — holding company, subsidiaries, branches — and assign employees accordingly. Payroll rules, permissions, and reporting can be configured independently at each level. Branch managers see their branch. HR sees everything they're permitted to see.",
      },
      {
        q: "What happens if an employee disputes their payslip?",
        a: "Every payroll run has a full audit trail — attendance data used, deductions applied, tax calculation breakdown, and the approving user. You can reconstruct any payroll decision from the log. This makes disputes easier to resolve and demonstrates due process to auditors.",
      },
      {
        q: "How many employees can the system handle?",
        a: "NexusHR is built on an async database architecture designed for concurrent workloads. Current deployments handle several hundred employees per company. The system scales horizontally — additional capacity is a configuration change, not a rebuild.",
      },
    ],
  },

  cta: {
    headline: "See NexusHR working with your actual data.",
    body: "Book a 30-minute demo. We'll walk through your specific use case — org structure, payroll rules, and attendance setup — and show you exactly how NexusHR handles it.",
    primary: "Book a Demo",
    secondary: "Chat on WhatsApp",
  },

  demo: {
    badge: "Book a Demo",
    headline: "Tell us about your operation.",
    subtext: "We'll reach out within one business day to schedule a walkthrough tailored to your setup.",
    fields: {
      companyName: "Company name",
      contactName: "Your name",
      phone: "Phone number",
      email: "Work email",
      employeeCount: "Number of employees",
      message: "Anything specific you'd like us to cover",
    },
    employeeOptions: ["Under 50", "50–200", "200–500", "500+"],
    submit: "Request Demo",
    submitting: "Sending...",
    success: "Request received. We'll be in touch within one business day.",
    error: "Something went wrong. Please try again or reach us on WhatsApp.",
  },

  footer: {
    tagline: "HR and payroll infrastructure for companies operating across locations, languages, and compliance requirements.",
    links: {
      product: { title: "Product", items: ["Features"] },
      company: { title: "Company", items: ["About", "Contact", "Careers"] },
      legal: { title: "Legal", items: ["Privacy Policy", "Terms of Service", "Data Processing"] },
    },
    copyright: "© 2025 NexusHR. All rights reserved.",
    whatsapp: "WhatsApp",
  },
};

export type Translations = Omit<typeof en, "dir"> & {
  dir: "ltr" | "rtl";
};
