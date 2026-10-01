# Supabase & Backend Integration Guidance (Phase 2)

## Principles
1. **Security & RLS**:
   - Every Supabase table must have Row Level Security (RLS) enabled.
   - Public leads table allows INSERT only via authorized server routes or client policies with strict validation.
   - Never expose `SUPABASE_SERVICE_ROLE_KEY` to client-side bundles.
2. **Form Handling & Lead Intake**:
   - Shared validation schema using Zod (`lib/validation.ts`).
   - Server-side route handler `app/api/leads/route.ts`.
   - Honeypot anti-spam field and request rate limiting.
   - Immediate email dispatch via Resend API to the business notification address.
3. **Resilience & Feedback**:
   - Handle database or email provider downtime gracefully with proper HTTP status codes and user-friendly error messages.
