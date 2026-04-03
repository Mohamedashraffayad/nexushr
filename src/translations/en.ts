export const en = {
  dir: "ltr" as const,
  lang: "en",
  fontClass: "font-body",
  displayFont: "font-display",

  nav: {
    product: "Product",
    features: "Features",
    faq: "FAQ",
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
    body: "NexusHR covers the full employee lifecycle — from dashboard insights to payroll reconciliation.",
    areas: [
      {
        id: "dashboard",
        icon: "📊",
        title: "Dashboard",
        description: "A real-time command center for your entire HR operation. See what matters at a glance.",
        bullets: [
          "Active employee count, net payroll, and pending requests — all in one view",
          "Payroll trends over time with year-over-year comparison",
          "Recent leave requests with status tracking",
          "Department distribution and audit event log",
          "Quick actions: add employee, run payroll, upload Excel, and more",
        ],
        images: ["/features/dashboard.png"],
      },
      {
        id: "employees",
        icon: "👥",
        title: "Employee Management",
        description: "Complete employee records from hire to exit. Every detail in one structured profile.",
        bullets: [
          "Full employee directory with search, filters, and bulk export (CSV)",
          "40+ profile fields: personal, professional, financial, and contact information",
          "View and generate payslips directly from the employee profile",
          "Role-based access — HR sees everything, managers see their teams",
          "Add employees individually or import in bulk via Excel",
        ],
        images: ["/features/employee-directory.png", "/features/employee-profile.png"],
      },
      {
        id: "attendance",
        icon: "📍",
        title: "Attendance Tracking",
        description: "Multiple check-in methods, one trusted attendance record that feeds directly into payroll.",
        bullets: [
          "Monthly stats: present, late, absent — at a glance",
          "Daily check-in/check-out log with employee-level detail",
          "Filter by date, status, or search by employee name",
          "Fingerprint, GPS, and mobile app all feed into the same record",
          "Export CSV for external analysis or compliance",
        ],
        images: ["/features/attendance.png"],
      },
      {
        id: "leaves",
        icon: "🏖️",
        title: "Leave Management",
        description: "Leave requests, approvals, and balances — managed from both admin and employee sides.",
        bullets: [
          "Admin view: all leave requests with type, dates, status, and approve/reject actions",
          "Employee self-service: submit requests, track balances (annual, casual, sick)",
          "Multiple leave types: annual, sick, compensation, paternity, marriage, bereavement",
          "Proof upload support for documentation",
          "Export leave data to CSV for reporting",
        ],
        images: ["/features/leave-requests.png", "/features/my-leaves.png"],
      },
      {
        id: "payroll",
        icon: "💰",
        title: "Payroll & Finance",
        description: "From salary calculation to payslip generation — payroll runs that are accurate the first time.",
        bullets: [
          "Monthly payroll overview with trend charts and headcount tracking",
          "Full reconciliation report: gross, social insurance, tax, and net per employee",
          "Detailed payslips with earnings and deductions breakdown",
          "Export to CSV or print PDF for finance and auditors",
          "Bilingual payroll reports (Arabic/English) built in",
        ],
        images: ["/features/payroll-history.png", "/features/payroll-reconciliation.png", "/features/my-payslip.png"],
      },
      {
        id: "loans",
        icon: "🏦",
        title: "Employee Loans",
        description: "Manage loan requests, repayment schedules, and outstanding balances — integrated with payroll.",
        bullets: [
          "Loan requests with amount, reason, and repayment method",
          "Flexible repayment: lump sum or installments (1–12 months)",
          "Track remaining balance and monthly deductions automatically",
          "Approve/reject workflow with full audit trail",
          "Loan categories: education, medical, housing, personal",
        ],
        images: ["/features/loans.png"],
      },
      {
        id: "trips",
        icon: "✈️",
        title: "Business Trips",
        description: "Track business trip requests, destinations, and approval status across your entire organization.",
        bullets: [
          "Trip requests with destination, date, and time range",
          "Approve/reject workflow with pending count",
          "Full trip history per employee",
          "Integrated with attendance — trips count as present",
          "Overview of all trips across the organization",
        ],
        images: ["/features/business-trips.png"],
      },
      {
        id: "reports",
        icon: "📈",
        title: "Reports & Analytics",
        description: "Structured data output for finance, auditors, and management — when they need it.",
        bullets: [
          "Employee reports: directory, distribution, new hires, status",
          "Attendance reports: daily, monthly, late, absent, overtime",
          "Payroll reports: summary, per employee, payslip, history",
          "Leave reports: balance, requests, usage, frequent",
          "Financial reports: salary distribution, bonus, deduction, tax",
        ],
        images: ["/features/reports.png"],
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
