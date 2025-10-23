# Flowjo Coming Soon Landing Page PRD

## 1. Overview
- **Product Name:** Flowjo Coming Soon Landing Page
- **Prepared By:** Senior Tech Lead / Full-Stack Developer
- **Last Updated:** 2025-10-23
- **Status:** Draft

Flowjo needs a high-impact, minimal landing page that builds anticipation for the upcoming app launch, captures qualified leads, and communicates the product's core value proposition to ADHD entrepreneurs.

## 2. Purpose & Objectives
### 2.1 Purpose
Deliver a conversion-focused "Coming Soon" landing page that introduces Flowjo, encourages early access sign-ups, and sets expectations for the beta launch.

### 2.2 Objectives
1. Communicate Flowjo's mission and differentiated value to ADHD founders.
2. Collect email addresses (and optional intent tagging) for early beta access and CRM follow-up.
3. Reinforce credibility through visual design, social proof, and consistent brand voice.
4. Support shareability for social and email campaigns with a visually compelling hero section.

## 3. Target Audience & User Needs
- **Primary Audience:** ADHD entrepreneurs and founders seeking structure, focus, and energy management tools.
- **Secondary Audience:** Early supporters, investors, and partners interested in Flowjo's progress.
- **Key Needs:** Clear, concise messaging; quick understanding of benefits; low-friction email opt-in; reassurance that Flowjo is tailored for ADHD founders.

## 4. Scope
### 4.1 In Scope
- Single-page responsive web experience (mobile-first with desktop optimization).
- Brand-aligned hero section with headline, tagline, countdown/launch messaging, and visual mock.
- Email capture form with primary CTA ("Join the Beta" / "Get Early Access") and optional secondary CTA ("Notify Me").
- Highlighted key benefits (3-5 bullet list) with supporting visuals/icons.
- Visual representation of Flowjo app (phone mockup or simplified UI graphic).
- Social proof area with credibility statements (e.g., "Designed for ADHD founders").
- Footer with essential links: Terms, Privacy, Contact, Social handles.
- Tagging captured leads with "App Launch – Flowjo" via integrated marketing platform (Mailchimp, HubSpot, etc.).

### 4.2 Out of Scope
- Development of full marketing site navigation or additional subpages.
- In-depth product documentation or onboarding flows.
- Complex CMS integration (static or headless CMS with simple form submission acceptable).
- Localization beyond English.

## 5. User Experience & Content Strategy
### 5.1 Page Structure (Top-to-Bottom)
1. **Notification Banner (Optional):** Brief message on beta status or limited slots.
2. **Hero Section:**
   - Headline: "Flowjo – Your ADHD Entrepreneur Score & Habit Companion."
   - Supporting tagline emphasizing focus, energy, and clarity.
   - Launch messaging: Countdown timer or "Launching Soon" badge.
   - Primary CTA + email input (prominent, above the fold).
   - Secondary CTA link below primary button for "Notify Me" option.
   - App mockup image (mobile phone or UI card) to reinforce product credibility.
3. **Key Benefits Section:** Bulleted list with icons for:
   - Instant Flowjo Score & personalised roadmap.
   - Dojo: Daily micro-lessons + drills.
   - Habit Tracker: Simple daily/weekly check-ins.
   - Resource Hub: Curated tools, podcasts, short lessons.
   - First 1-2 modules free to explore (optional highlight badge).
4. **Social Proof / Credibility:** Quotes, badges, or text such as "Designed for ADHD founders" or "From the creator of …".
5. **Lead Capture Reinforcement:** Secondary form or CTA to capture visitors who scroll.
6. **Footer:** Terms, Privacy, Contact email, Social handles (e.g., Instagram, LinkedIn, Twitter/X).

### 5.2 Tone & Style Guidelines
- Clean, minimal layout with ample white space.
- High-contrast typography for ADHD-friendly readability.
- Mobile-first design with responsive adjustments for desktop.
- Flowjo palette accents (brown, red, blue) applied sparingly to maintain focus.
- Short sentences, active verbs, and scannable sections.

### 5.3 Accessibility & Compliance
- WCAG AA color contrast compliance.
- Semantic HTML structure with accessible form labels.
- Keyboard navigability and focus states.
- GDPR-compliant email capture consent and link to privacy policy.

## 6. Functional Requirements
| ID | Requirement | Priority |
| --- | --- | --- |
| FR-1 | Display hero headline, tagline, and beta messaging above the fold. | Must Have |
| FR-2 | Provide email capture form with validation and confirmation state. | Must Have |
| FR-3 | Allow tagging of captured leads with "App Launch – Flowjo" via marketing tool integration. | Must Have |
| FR-4 | Present key benefit bullets with visual differentiation. | Must Have |
| FR-5 | Render a mobile app mockup image in the hero area. | Must Have |
| FR-6 | Include social proof messaging with optional testimonials/badges. | Should Have |
| FR-7 | Offer secondary CTA for visitors wanting updates without beta commitment. | Should Have |
| FR-8 | Include countdown timer or "Launching Soon" indicator (configurable). | Should Have |
| FR-9 | Provide footer links to Terms, Privacy, Contact, and Social profiles. | Must Have |
| FR-10 | Ensure page loads in under 2 seconds on 4G mobile (performance budget). | Should Have |

## 7. Technical Requirements
- **Tech Stack:**
  - Front-end: Next.js/React or static HTML/CSS (depending on existing stack) hosted on Vercel or static hosting.
  - Styling: Tailwind CSS or custom CSS modules aligning with brand system.
  - Form Handling: Integrate with existing CRM/email provider (e.g., Mailchimp, HubSpot) via API or embed. Include hidden field/value for tagging.
- **Analytics:**
  - Track page views, CTA clicks, and form submissions (e.g., via Google Analytics, Mixpanel).
  - Configure events for "Join the Beta" and "Notify Me" interactions.
- **Performance:**
  - Optimize hero images (responsive sizes, lazy loading where applicable).
  - Use minimal external scripts to maintain load speed.
- **Deployment:**
  - Continuous deployment pipeline (GitHub Actions/Vercel). Auto-preview for QA before production.

## 8. Success Metrics
- **Primary KPIs:**
  - Email capture rate: ≥ 30% of unique visitors.
  - Primary CTA click-through rate: ≥ 40% of visitors.
- **Secondary KPIs:**
  - Bounce rate: ≤ 45%.
  - Page load time: ≤ 2 seconds on 4G (Lighthouse Performance ≥ 85).
  - Social shares or referral traffic increase month-over-month.

## 9. Risks & Mitigations
| Risk | Impact | Mitigation |
| --- | --- | --- |
| Delayed integration with CRM leads to lost sign-ups. | High | Use interim Zapier/webhook to capture submissions if API is pending. |
| Low fidelity app mockup reduces credibility. | Medium | Commission quick design pass from UI designer or repurpose existing app screens. |
| High bounce due to cognitive overload. | Medium | Emphasize brevity, scannable content, and high contrast. Conduct quick user feedback rounds. |
| Performance degradation from heavy assets. | Low | Compress images, defer non-critical scripts, monitor Lighthouse scores. |

## 10. Milestones & Timeline
| Milestone | Owner | Target Date |
| --- | --- | --- |
| PRD Approval | Product & Stakeholders | +0 days |
| Visual Design + Assets | Design Lead | +7 days |
| Front-end Implementation | Engineering | +14 days |
| CRM Integration & QA | Engineering + Growth | +17 days |
| Beta Launch Landing Page Live | Product | +21 days |

## 11. Open Questions
1. Which CRM/email provider is the team standard (Mailchimp, HubSpot, ConvertKit)?
2. Are there existing app screenshots or should we design a conceptual mock?
3. What legal copy is required for Terms, Privacy, and consent (existing templates or new)?
4. Should we support additional lead fields (e.g., role, company) beyond email?

## 12. Approval
- **Product Lead:** _TBD_
- **Marketing Lead:** _TBD_
- **Engineering Lead:** _TBD_

