# AGENTS.md

Project instructions for AI coding agents working in this repository.

---

## 1. Project

**Name:** Summit Air Heating & Cooling (demo)

**What this is:** A demo marketing website for a fictional US HVAC company. It is
built as a portfolio and sales asset to send to real HVAC business owners in the
United States.

**This is a demo.** The company, reviews, photos, phone number and address are
fictional. Every page must carry a visible disclosure in the footer:

> Sample website. Summit Air Heating & Cooling is a fictional company created for
> demonstration purposes.

Never copy text, logos, photos or reviews from a real business.

---

## 2. Business goal

The site has one job: **turn a visitor into a booked service call.**

Every design and code decision is judged against that. The two conversion paths are:

1. **Call now** — a tap-to-call action reachable from anywhere on the page.
2. **Request service** — a short form that a homeowner can finish in under 60 seconds.

Anything that does not help one of those two paths is a candidate for deletion.

### Target visitor

A US homeowner whose heating or AC has stopped working. They are:

- On a phone, not a desktop
- In a hurry, possibly uncomfortable or cold
- Comparing 2–3 local companies from Google results
- Looking for: do they cover my area, can they come today, are they licensed, do
  others trust them

Write and design for that person. Not for the business owner, and not for other
developers.

---

## 3. Build order

Do not skip ahead. Finish and verify each phase before starting the next.

**Phase 1 — Frontend (static, no backend)**
Full site with real layout, real copy, responsive behaviour and accessibility.
The service request form renders and validates on the client, but submits nowhere
yet. The site must be deployable and reviewable at the end of this phase.

**Phase 2 — Backend (Supabase + email)**
Add the database, the form submission route, spam protection, email notification,
and a minimal internal leads view.

**Phase 3 — Polish**
SEO metadata, structured data, performance, analytics, final review.

Reason for this order: the frontend is the thing being sold and reviewed by
prospects. It must exist and look finished before any database work begins.

---

## 4. Tech stack

Use exactly this. Do not add libraries without asking first.

| Layer | Choice |
|---|---|
| Framework | Next.js (App Router) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS |
| Database | Supabase (Postgres) — Phase 2 only |
| Forms | React Hook Form + Zod |
| Email | Resend — Phase 2 only |
| Deployment | Vercel |

**Do not install or use:** a UI component library, a CSS-in-JS library, Redux or
any global state manager, an animation library, an ORM, or an icon package larger
than `lucide-react`.

**Do not invent APIs.** If unsure whether a package, function or Supabase feature
exists in the installed version, check `package.json` and the installed docs
first. Never guess an API signature.

---

## 5. Folder structure

Keep it flat and obvious. Do not create folders "for later".

```
summit-air/
├── app/
│   ├── layout.tsx              # Root layout, fonts, metadata
│   ├── page.tsx                # Home page (composes sections)
│   ├── globals.css             # Tailwind directives + CSS variables only
│   ├── not-found.tsx
│   ├── privacy/
│   │   └── page.tsx
│   └── api/
│       └── leads/
│           └── route.ts        # Phase 2: form submission handler
│
├── components/
│   ├── sections/               # Full-width page sections, one file each
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── EmergencyBanner.tsx
│   │   ├── WhyUs.tsx
│   │   ├── Reviews.tsx
│   │   ├── ServiceAreas.tsx
│   │   └── RequestService.tsx
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── StickyCallBar.tsx   # Mobile-only fixed call button
│   └── ui/                     # Small reusable primitives
│       ├── Button.tsx
│       ├── Input.tsx
│       ├── Select.tsx
│       ├── Textarea.tsx
│       └── FieldError.tsx
│
├── lib/
│   ├── site.ts                 # Single source of truth: name, phone, areas, hours
│   ├── services.ts             # Service list data
│   ├── reviews.ts              # Sample review data
│   ├── validation.ts           # Zod schemas (shared client + server)
│   ├── utils.ts                # cn() and small helpers
│   └── supabase/               # Phase 2 only
│       ├── client.ts
│       └── server.ts
│
├── types/
│   └── index.ts
│
├── public/
│   └── images/
│
├── skills/                     # Agent guidance — read before working
│   ├── ui-ux-design.md
│   ├── nextjs-tailwind.md
│   └── supabase-integration.md
│
├── .env.example
├── .env.local                  # Never commit
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── AGENTS.md
```

### Structure rules

- All business constants live in `lib/site.ts`. The phone number, company name,
  email and service areas must never be hardcoded in a component.
- `components/sections/` files are page-specific and composed in `app/page.tsx`.
- `components/ui/` files are generic, take props, and contain no business copy.
- A component file over ~150 lines should be split.
- No `utils/` and `helpers/` and `lib/` all at once. Use `lib/` only.

---

## 6. Skills

Read the relevant skill file **before** writing code in that area. They contain
the detailed rules for each domain.

| Working on | Read |
|---|---|
| Layout, colour, type, copy, conversion, accessibility | `skills/ui-ux-design.md` |
| Components, routing, Tailwind, TypeScript, performance | `skills/nextjs-tailwind.md` |
| Database, schema, RLS, API routes, email, security | `skills/supabase-integration.md` |

If a skill file contradicts this document, this document wins, and flag the
conflict.

---

## 7. Working rules

**Before implementing anything non-trivial:**

1. State what you understood the requirement to be.
2. Name the files you will create or change.
3. Note any decision that would be hard to reverse.
4. Then implement.

For a one-line fix, skip the ceremony and just do it.

**While implementing:**

- One logical feature at a time. Do not build three sections in one pass.
- Do not touch unrelated files.
- Reuse what exists before creating something new. Check `components/ui/` first.
- Match the conventions already in the codebase, even if you would do it
  differently.
- Handle the loading, empty and error state of anything asynchronous. Not later.

**Never do silently:**

- Change the folder structure
- Add a dependency
- Change the data model
- Change an environment variable contract
- Delete working code

Explain the decision and ask.

---

## 8. Quality floor

Code is not done when it renders. It is done when all of this is true.

**Correctness**
- `npm run build` passes
- No TypeScript errors, no `any`, no `@ts-ignore`
- No console errors or warnings in the browser
- No React key warnings, no hydration mismatches

**Responsive**
- Designed mobile-first, verified at 375px, 768px and 1440px
- No horizontal scroll at any width
- Tap targets at least 44×44px

**Accessibility**
- Semantic HTML: one `h1`, headings in order, real `button` and `a` elements
- Every input has a linked `<label>`
- Visible keyboard focus on every interactive element
- Text contrast meets WCAG AA (4.5:1 for body text)
- Images have meaningful `alt`, decorative ones have `alt=""`
- `prefers-reduced-motion` respected

**Forms**
- Client and server validation from the same Zod schema
- Errors are specific and attached to the field
- Disabled submit button while pending
- A clear success state that tells the person what happens next

**Security (Phase 2)**
- No secret ever reaches the client bundle
- Service role key only in server code
- RLS enabled on every table
- All input validated server-side, never trusting the client
- Rate limiting and a honeypot on the public form

**SEO (Phase 3)**
- Unique title and description per page
- Open Graph tags
- `LocalBusiness` JSON-LD structured data
- `sitemap.xml` and `robots.txt`
- Semantic heading structure

---

## 9. Content rules

The copy is part of the product. Write it, do not leave placeholders.

- Plain language a homeowner uses. "Your AC stopped working," not "HVAC system
  remediation solutions."
- Active voice. Buttons say what happens: "Request service," not "Submit."
- No marketing filler: "cutting-edge," "seamless," "one-stop solution,"
  "unlock," "elevate."
- No fake trust signals that could mislead. Sample reviews must be visibly
  labelled as sample content.
- No invented statistics, certifications or award claims.
- Never write "Lorem ipsum."

---

## 10. Environment variables

Document every variable in `.env.example` with a comment. Never commit real
values.

```
# Public — safe in the browser
NEXT_PUBLIC_SITE_URL=

# Phase 2 — Supabase
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=      # Server only. Never prefix with NEXT_PUBLIC_.

# Phase 2 — Email
RESEND_API_KEY=
LEAD_NOTIFICATION_EMAIL=
```

---

## 11. Definition of done

A task is complete when:

1. It is implemented
2. The build passes with no type errors
3. It was checked at mobile, tablet and desktop widths
4. Loading, empty and error states exist where relevant
5. Keyboard navigation and focus work
6. No console errors
7. Nothing unrelated was broken
8. The change was explained in plain language

Report honestly what was verified and what was not. Do not claim something was
tested when it was not.
