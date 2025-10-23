# Flowjo Landing Page MVP – Implementation Phases

This phased to-do list sequences the minimum work required to deliver the Flowjo "Coming Soon" landing page MVP. Each phase ends with a concrete verification step to validate completion.

## Phase 1 – Project Initialization & Tooling
- [ ] Scaffold Next.js 14 + TypeScript project with App Router.
- [ ] Configure Tailwind CSS, Prettier, and ESLint with project conventions.
- [ ] Add project scripts for development (`npm run dev`) and linting (`npm run lint`).
- [ ] Commit baseline README with setup instructions.

**Test/Verification:**
- Run `npm run lint` to ensure code quality tooling is active.
- Start the dev server with `npm run dev` and confirm the starter page renders.

## Phase 2 – Global Styling & Layout Shell
- [ ] Define brand token palette (brown, red, blue accents) in Tailwind config.
- [ ] Implement global styles (fonts, background, responsive spacing) in `app/globals.css`.
- [ ] Create shared layout in `app/layout.tsx` with typography and metadata defaults.

**Test/Verification:**
- Run `npm run lint` to confirm styling modules import correctly.
- Open the dev server and inspect the layout shell on mobile and desktop viewports.

## Phase 3 – Hero & Countdown Experience
- [ ] Build hero section with headline, tagline, and high-contrast CTAs.
- [ ] Implement countdown/launch message component using reusable date utility.
- [ ] Add prominent "Join the Beta" and "Notify Me" buttons.

**Test/Verification:**
- Execute unit tests for countdown logic (e.g., `npm run test` once testing is configured).
- Verify via browser that hero renders above the fold with correct typography and spacing.

## Phase 4 – Lead Capture Form
- [ ] Implement accessible email capture form with validation and inline feedback.
- [ ] Wire form submission to placeholder API (mock) while CRM integration is finalized.
- [ ] Tag submissions with "App Launch – Flowjo" identifier for downstream CRM use.

**Test/Verification:**
- Run form validation tests (e.g., `npm run test form` or equivalent).
- Submit sample emails locally and confirm success/error states display.

## Phase 5 – Feature Highlights & Visual Mock
- [ ] Create feature list component covering Flowjo Score, Dojo, Habit Tracker, Resource Hub, early module access.
- [ ] Design and insert mobile mockup asset (SVG/PNG) aligned with brand palette.
- [ ] Ensure responsive layout keeps copy scannable on mobile devices.

**Test/Verification:**
- Lint and run visual regression/unit tests if configured.
- Manual QA on multiple viewport widths ensuring features and mockup are visible without overlap.

## Phase 6 – Social Proof & Footer
- [ ] Add social proof block (founder credibility, testimonials, brand mentions).
- [ ] Implement footer with Terms, Privacy, Contact, and social handle links.
- [ ] Include beta ribbon or tag reinforcing exclusivity.

**Test/Verification:**
- Check for accessibility issues using `npm run lint` (with JSX a11y rules) or dedicated tooling.
- Validate that all footer links render and navigate correctly in the browser.

## Phase 7 – Analytics, Performance & Deployment Prep
- [ ] Integrate analytics snippet to track email conversions and CTA clicks.
- [ ] Optimize assets and enable Next.js image optimizations where applicable.
- [ ] Configure deployment workflow (e.g., Vercel project or CI pipeline) with environment variables for CRM integration.

**Test/Verification:**
- Run `npm run lint` and `npm run build` to ensure production build passes.
- Smoke test deployed preview URL confirming countdown, forms, and CTAs function end-to-end.

## Phase 8 – Launch Readiness Checklist
- [ ] Review copy for clarity, tone, and ADA compliance (contrast ratios, focus states).
- [ ] Double-check CRM lead capture pipeline and tagging.
- [ ] Assemble success metric dashboards (email capture rate, CTA clicks, bounce rate).

**Test/Verification:**
- Execute final QA pass across devices (mobile, tablet, desktop).
- Confirm analytics dashboards receive test events and metrics populate as expected.
