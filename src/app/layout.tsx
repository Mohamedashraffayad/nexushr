import type { Metadata } from "next";
import "./globals.css";
import { I18nProvider } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "NexusHR — HR & Payroll Infrastructure for Growing Companies",
  description: "Multi-language HR and payroll platform for companies operating across locations, languages, and compliance requirements. Attendance tracking, payroll engine, and employee self-service in one system.",
  keywords: "HR software, payroll management, attendance tracking, multi-branch HR, global HR platform, Arabic HR system",
  openGraph: {
    title: "NexusHR — HR & Payroll Infrastructure",
    description: "Built for companies that operate across locations, languages, and payroll rules.",
    type: "website",
    url: "https://nexushr.com",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400&family=Cairo:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-white text-ink antialiased overflow-x-hidden">
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
