# NexusHR Landing Website

A professional, conversion-focused SaaS landing website for NexusHR — built with **Next.js 14**, **Tailwind CSS**, **Supabase**, and **Resend**.

## 🌟 Features

- ✅ **Bilingual** — Arabic (default, RTL) + English (LTR) with i18n
- ✅ **Fully Responsive** — desktop, tablet, mobile
- ✅ **12 sections** — Hero → Problem → Solution → Features → Structure → How It Works → System Preview → Mobile → Industries → Pricing → Demo Form → Footer
- ✅ **Demo Request API** — Supabase storage + Resend email notifications
- ✅ **Rate limiting** — basic IP-based protection (3 req/hr)
- ✅ **Interactive System Preview** — tabbed dashboard mockup
- ✅ **Production-ready** — Vercel-deployable in minutes

---

## 🚀 Quick Deploy to Vercel

### 1. Push to GitHub

```bash
git init
git add .
git commit -m "Initial NexusHR landing"
git remote add origin https://github.com/YOUR_USERNAME/nexushr-landing.git
git push -u origin main
```

### 2. Connect to Vercel

1. Go to [vercel.com](https://vercel.com) → New Project
2. Import your GitHub repo
3. Vercel auto-detects Next.js — no configuration needed
4. Add environment variables (see below)
5. Click **Deploy** ✅

### 3. Connect Domain

In Vercel: Project Settings → Domains → Add `nexushr.com`
Then update your DNS (A record or CNAME as instructed by Vercel).

---

## ⚙️ Environment Variables

Create `.env.local` for local dev, and add these in **Vercel → Project Settings → Environment Variables**:

```bash
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...
SUPABASE_SERVICE_ROLE_KEY=eyJ...

# Resend
RESEND_API_KEY=re_...
ADMIN_EMAIL=admin@nexushr.com
```

---

## 🗄️ Supabase Setup

1. Create a new project at [supabase.com](https://supabase.com)
2. Go to **SQL Editor** and run the contents of `supabase_schema.sql`
3. Copy your project URL and keys from **Settings → API**

---

## 📧 Resend Setup

1. Create an account at [resend.com](https://resend.com)
2. Add and verify your sending domain (`nexushr.com`)
3. Create an API key under **API Keys**
4. Update `ADMIN_EMAIL` to your real admin email

---

## 🛠️ Local Development

```bash
npm install
cp .env.example .env.local
# Fill in your env vars
npm run dev
# Open http://localhost:3000
```

---

## 📁 Project Structure

```
nexushr-landing/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout + fonts + I18nProvider
│   │   ├── page.tsx            # Main page (assembles all sections)
│   │   ├── globals.css         # Design system + Tailwind
│   │   └── api/
│   │       └── demo-request/
│   │           └── route.ts    # POST /api/demo-request (serverless)
│   ├── components/
│   │   ├── Navbar.tsx          # Sticky nav + language toggle
│   │   ├── Footer.tsx          # Footer with links
│   │   └── sections/
│   │       ├── Hero.tsx
│   │       ├── Problem.tsx
│   │       ├── Solution.tsx
│   │       ├── Features.tsx
│   │       ├── Structure.tsx
│   │       ├── HowItWorks.tsx
│   │       ├── SystemPreview.tsx
│   │       ├── Mobile.tsx
│   │       ├── Industries.tsx
│   │       ├── Pricing.tsx
│   │       └── DemoForm.tsx
│   ├── lib/
│   │   ├── i18n.tsx            # I18n context + provider
│   │   └── supabase.ts         # Supabase client
│   └── translations/
│       ├── ar.ts               # Arabic strings (default)
│       └── en.ts               # English strings
├── supabase_schema.sql         # Database schema to run in Supabase
├── .env.example
├── next.config.js
├── tailwind.config.ts
└── tsconfig.json
```

---

## 🎨 Customization

### Colors
Edit `tailwind.config.ts` → `colors.brand` to change the primary color.

### Content / Text
Edit `src/translations/ar.ts` (Arabic) and `src/translations/en.ts` (English).

### WhatsApp Number
Search for `wa.me/201000000000` and replace with your actual WhatsApp number.

### Admin Email
Set `ADMIN_EMAIL` env var to your real admin email address.

---

## 📊 Optional: Analytics

Add to `src/app/layout.tsx`:

```tsx
// Google Analytics
<Script src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXX" />
```

Or use [Vercel Analytics](https://vercel.com/analytics) — just add:
```bash
npm install @vercel/analytics
```

---

## 🔐 Security Notes

- Inputs are validated server-side in the API route
- Rate limiting: 3 requests per IP per hour (in-memory, resets on deploy)
- For production: consider [Upstash Redis](https://upstash.com) for persistent rate limiting
- Supabase uses service role key only on the server (never exposed to client)

---

*Built for NexusHR — Professional HR & Payroll Management for Egyptian Companies*
