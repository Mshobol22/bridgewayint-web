import { NextRequest, NextResponse } from "next/server";

const REQUIRED_FIELDS = [
  "fullName",
  "email",
  "phone",
  "country",
  "program",
  "service",
  "startDate",
] as const;

function validateBody(body: Record<string, unknown>): string | null {
  for (const field of REQUIRED_FIELDS) {
    const value = body[field];
    if (value == null || String(value).trim() === "") {
      return `Missing required field: ${field}`;
    }
  }
  return null;
}

function buildEmailHtml(data: {
  fullName: string;
  email: string;
  phone: string;
  country: string;
  program: string;
  service: string;
  startDate: string;
  message?: string;
}): string {
  const rows = [
    ["Full Name", data.fullName],
    ["Email", data.email],
    ["Phone", data.phone],
    ["Country", data.country],
    ["Program Interest", data.program],
    ["Service Needed", data.service],
    ["Preferred Start Date", data.startDate],
    ...(data.message ? [["Additional Information", data.message]] : []),
  ];

  const tableRows = rows
    .map(
      ([label, value]) => `
    <tr>
      <td style="padding: 10px 16px; border-bottom: 1px solid #334155; color: #94a3b8; font-size: 14px; width: 40%;">${label}</td>
      <td style="padding: 10px 16px; border-bottom: 1px solid #334155; color: #f8fafc; font-size: 14px;">${escapeHtml(value)}</td>
    </tr>`
    )
    .join("");

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; font-family: system-ui, -apple-system, sans-serif; background: #0f172a;">
  <div style="max-width: 600px; margin: 0 auto; padding: 24px;">
    <div style="background: #030712; border-radius: 12px; overflow: hidden; border: 1px solid #334155;">
      <div style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); padding: 24px 32px; border-bottom: 1px solid #334155;">
        <h1 style="margin: 0; font-size: 24px; font-weight: 700; color: #ffffff;">BridgeWay International</h1>
        <p style="margin: 8px 0 0; font-size: 14px; color: #94a3b8;">New Consultation Request</p>
      </div>
      <div style="background: #0f172a; padding: 8px 16px; border-bottom: 1px solid #334155;">
        <p style="margin: 0; font-size: 13px; color: #fbbf24;">⏰ Please respond within 24–48 hours to maximize conversion.</p>
      </div>
      <table style="width: 100%; border-collapse: collapse; background: #0f172a;">
        ${tableRows}
      </table>
    </div>
  </div>
</body>
</html>`;
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
    .replace(/\n/g, "<br>");
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const errorMsg = validateBody(body);
    if (errorMsg) {
      return NextResponse.json({ error: errorMsg }, { status: 400 });
    }

    const fullName = String(body.fullName).trim();
    const email = String(body.email).trim();
    const phone = String(body.phone).trim();
    const country = String(body.country).trim();
    const program = String(body.program).trim();
    const service = String(body.service).trim();
    const startDate = String(body.startDate).trim();
    const message = body.message != null ? String(body.message).trim() : undefined;

    const timestamp = new Date().toISOString();
    console.log("Consultation submission:", {
      name: fullName,
      email,
      country,
      program,
      service,
      timestamp,
    });

    const resendKey = process.env.RESEND_API_KEY;
    const contactEmail =
      process.env.CONTACT_EMAIL || "hello@bridgewayinternational.com";

    if (resendKey) {
      try {
        const res = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${resendKey}`,
          },
          body: JSON.stringify({
            from: "BridgeWay International <noreply@bridgewayinternational.com>",
            to: [contactEmail],
            reply_to: email,
            subject: `🎓 New Consultation Request — ${fullName} (${country})`,
            html: buildEmailHtml({
              fullName,
              email,
              phone,
              country,
              program,
              service,
              startDate,
              message: message || undefined,
            }),
          }),
        });

        if (!res.ok) {
          const errBody = await res.text();
          console.error("Resend API error:", res.status, errBody);
        }
      } catch (err) {
        console.error("Resend send failed:", err);
      }
    } else {
      console.warn(
        "RESEND_API_KEY not set. Form logged but NOT emailed. Set it in Vercel env vars."
      );
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
