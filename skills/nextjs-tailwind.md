# Next.js & Tailwind CSS Guidelines

## Principles
1. **Next.js App Router**:
   - Clean, modular component architecture.
   - Server Components by default for static sections and SEO.
   - Client Components (`"use client"`) only where user interactivity/state is necessary (e.g., Form, Mobile Sticky Bar, Navigation toggle).
2. **Tailwind CSS**:
   - Use standard Tailwind utility classes with consistent spacing and typography scale.
   - No arbitrary custom CSS spaghetti; use CSS variables for theme tokens in `globals.css` if necessary.
   - Mobile-first breakpoints: default (mobile), `sm:`, `md:`, `lg:`, `xl:`.
3. **TypeScript**:
   - Strict mode enabled.
   - Explicit types and interfaces in `types/index.ts` or co-located schemas in `lib/validation.ts`.
   - Zero `any` and zero `@ts-ignore`.
4. **Performance & Clean Code**:
   - Keep components focused under ~150 lines.
   - Modular UI components in `components/ui/`.
   - Semantic HTML elements (`header`, `nav`, `main`, `section`, `footer`, `article`, `h1`-`h4`, `button`, `a`).
