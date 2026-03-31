import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { createServerSupabaseClient } from "@/lib/supabase";

const resend = new Resend(process.env.RESEND_API_KEY);

// Simple in-memory rate limiting (per IP, resets on cold start)
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const limit = rateLimitMap.get(ip);

  if (!limit || now > limit.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + 60 * 60 * 1000 }); // 1 hour window
    return true;
  }

  if (limit.count >= 3) return false; // Max 3 requests per hour per IP

  limit.count++;
  return true;
}

export async function POST(req: NextRequest) {
  try {
    // Rate limiting
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0] ||
      req.headers.get("x-real-ip") ||
      "unknown";

    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const body = await req.json();
    const { company_name, contact_name, phone, email, employee_count, message } =
      body;

    // Validation
    if (!company_name || !contact_name || !phone || !email || !employee_count) {
      return NextResponse.json(
        { error: "All required fields must be filled" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
    }

    if (phone.replace(/\D/g, "").length < 10) {
      return NextResponse.json({ error: "Invalid phone number" }, { status: 400 });
    }

    // Store in Supabase
    const supabase = createServerSupabaseClient();
    const { error: dbError } = await supabase.from("demo_requests").insert([
      {
        company_name,
        contact_name,
        phone,
        email,
        employee_count,
        message: message || null,
        status: "new",
      },
    ]);

    if (dbError) {
      console.error("Supabase error:", dbError);
      // Don't fail the request if DB is unavailable — still send email
    }

    // Send admin notification email
    const adminEmail = process.env.ADMIN_EMAIL || "admin@nexushr.com";
    await resend.emails.send({
      from: "NexusHR <onboarding@resend.dev>",
      to: adminEmail,
      subject: `🚀 طلب عرض جديد - ${company_name}`,
      html: `
        <div dir="rtl" style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #f8fafc; border-radius: 12px;">
          <div style="background: linear-gradient(135deg, #1e3a8a, #2563eb); padding: 24px; border-radius: 8px; margin-bottom: 24px;">
            <h1 style="color: white; margin: 0; font-size: 22px;">🚀 طلب عرض توضيحي جديد</h1>
          </div>
          
          <div style="background: white; padding: 24px; border-radius: 8px; border: 1px solid #e2e8f0;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr style="border-bottom: 1px solid #f1f5f9;">
                <td style="padding: 12px 0; color: #64748b; font-size: 14px;">اسم الشركة</td>
                <td style="padding: 12px 0; font-weight: 600; color: #1e293b;">${company_name}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f1f5f9;">
                <td style="padding: 12px 0; color: #64748b; font-size: 14px;">جهة الاتصال</td>
                <td style="padding: 12px 0; font-weight: 600; color: #1e293b;">${contact_name}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f1f5f9;">
                <td style="padding: 12px 0; color: #64748b; font-size: 14px;">الهاتف</td>
                <td style="padding: 12px 0; font-weight: 600; color: #1e293b;">${phone}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f1f5f9;">
                <td style="padding: 12px 0; color: #64748b; font-size: 14px;">البريد الإلكتروني</td>
                <td style="padding: 12px 0; font-weight: 600; color: #1e293b;">${email}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f1f5f9;">
                <td style="padding: 12px 0; color: #64748b; font-size: 14px;">عدد الموظفين</td>
                <td style="padding: 12px 0; font-weight: 600; color: #1e293b;">${employee_count}</td>
              </tr>
              ${
                message
                  ? `
              <tr>
                <td style="padding: 12px 0; color: #64748b; font-size: 14px; vertical-align: top;">الرسالة</td>
                <td style="padding: 12px 0; color: #1e293b;">${message}</td>
              </tr>`
                  : ""
              }
            </table>
          </div>
          
          <p style="text-align: center; color: #94a3b8; font-size: 12px; margin-top: 16px;">
            تم الاستلام في ${new Date().toLocaleString("ar-EG")}
          </p>
        </div>
      `,
    });

    // Send confirmation email to user
    // await resend.emails.send({
    //   from: "NexusHR <noreply@nexushr.com>",
    //   to: email,
    //   subject: "تم استلام طلبك — NexusHR",
    //   html: `
    //     <div dir="rtl" style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
    //       <div style="background: linear-gradient(135deg, #1e3a8a, #2563eb); padding: 24px; border-radius: 8px; margin-bottom: 24px; text-align: center;">
    //         <h1 style="color: white; margin: 0;">NexusHR</h1>
    //       </div>
    //       <h2 style="color: #1e293b;">مرحباً ${contact_name}،</h2>
    //       <p style="color: #475569; line-height: 1.8;">
    //         شكراً لاهتمامك بـ NexusHR. لقد استلمنا طلبك وسيتواصل معك فريقنا خلال <strong>٢٤ ساعة</strong> لتحديد موعد العرض التوضيحي المجاني.
    //       </p>
    //       <div style="background: #f1f5f9; padding: 16px; border-radius: 8px; margin: 20px 0;">
    //         <p style="margin: 0; color: #64748b;">للتواصل المباشر يمكنك مراسلتنا عبر واتساب أو البريد الإلكتروني</p>
    //       </div>
    //       <p style="color: #94a3b8; font-size: 12px;">فريق NexusHR</p>
    //     </div>
    //   `,
    // });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Demo request error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
