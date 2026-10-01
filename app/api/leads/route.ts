import { NextRequest, NextResponse } from "next/server";
import { serviceRequestSchema } from "@/lib/validation";
import { createServerSupabaseClient } from "@/lib/supabase/server";

// Simple in-memory rate limiting per IP (5 requests per 10 minutes)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS_PER_WINDOW = 5;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  if (record.count >= MAX_REQUESTS_PER_WINDOW) {
    return true;
  }

  record.count += 1;
  return false;
}

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "127.0.0.1";
    const userAgent = req.headers.get("user-agent") || "unknown";

    // 1. Rate Limiting Check
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many service requests from this connection. Please call us directly for emergency service." },
        { status: 429 }
      );
    }

    const body = await req.json();

    // 2. Honeypot Spam Protection
    if (body.honeypot && body.honeypot.trim() !== "") {
      // Silently reject bots without revealing honeypot detection
      return NextResponse.json({ success: true, message: "Request received" }, { status: 200 });
    }

    // 3. Server-side Zod Schema Validation
    const validationResult = serviceRequestSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json(
        {
          error: "Validation failed",
          details: validationResult.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const validData = validationResult.data;

    // 4. Insert into Supabase Database
    const supabase = createServerSupabaseClient();
    const { data: leadRecord, error: dbError } = await supabase
      .from("leads")
      .insert({
        full_name: validData.fullName,
        phone: validData.phone,
        email: validData.email || null,
        service_type: validData.serviceType,
        urgency: validData.urgency,
        street_address: validData.streetAddress,
        zip_code: validData.zipCode,
        issue_description: validData.issueDescription,
        status: "new",
        ip_address: ip,
        user_agent: userAgent,
      })
      .select()
      .single();

    if (dbError) {
      console.error("Supabase lead insertion error:", dbError);
      return NextResponse.json(
        { error: "Failed to store service request in database." },
        { status: 500 }
      );
    }

    // 5. Optional Email Notification via Resend (if RESEND_API_KEY is configured)
    const resendApiKey = process.env.RESEND_API_KEY;
    const notificationEmail = process.env.LEAD_NOTIFICATION_EMAIL || "service@summitairhvac.demo";

    if (resendApiKey) {
      try {
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${resendApiKey}`,
          },
          body: JSON.stringify({
            from: "Summit Air System <onboarding@resend.dev>",
            to: [notificationEmail],
            subject: `[NEW HVAC LEAD] ${validData.urgency.toUpperCase()} - ${validData.fullName} (${validData.serviceType})`,
            html: `
              <h2>New HVAC Service Request</h2>
              <p><strong>Name:</strong> ${validData.fullName}</p>
              <p><strong>Phone:</strong> ${validData.phone}</p>
              <p><strong>Email:</strong> ${validData.email || "Not provided"}</p>
              <p><strong>Urgency:</strong> ${validData.urgency}</p>
              <p><strong>Service:</strong> ${validData.serviceType}</p>
              <p><strong>Address:</strong> ${validData.streetAddress}, ${validData.zipCode}</p>
              <p><strong>Description:</strong> ${validData.issueDescription}</p>
              <hr />
              <p><small>Lead ID: ${leadRecord.id} | Timestamp: ${leadRecord.created_at}</small></p>
            `,
          }),
        });
      } catch (emailErr) {
        console.warn("Failed to dispatch Resend notification email:", emailErr);
      }
    }

    return NextResponse.json(
      {
        success: true,
        leadId: leadRecord.id,
        message: "Service request successfully recorded.",
      },
      { status: 201 }
    );
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Internal server error";
    console.error("Unhandled API error:", err);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
