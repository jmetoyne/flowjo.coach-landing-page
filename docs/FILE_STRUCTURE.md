# Flowjo Landing Page – Optimized Project Structure

This document outlines a scalable folder layout for the Flowjo "Coming Soon" landing page so the team can iterate quickly on marketing content, lead capture experiments, and future product previews. The structure is organized to support Next.js 14 App Router conventions, keep UI building blocks discoverable, and segregate documentation, scripts, and tests.

## Principles

1. **Separation of concerns** – marketing routes, UI primitives, domain logic, and configuration live in dedicated spaces.
2. **Composable UI** – shared UI elements and section-level components are grouped for reusability.
3. **Testability** – colocate unit and integration tests alongside the features they cover, while keeping end-to-end scenarios in a dedicated suite.
4. **Documentation-first** – keep artifacts such as the PRD, design notes, and analytics plans within a `/docs` directory so they version alongside code.
5. **Automation ready** – reserved folders for scripts and CI workflows simplify future deployment automation.

## Recommended Directory Tree

```text
/
├─ app/
│  ├─ (marketing)/
│  │  ├─ layout.tsx
│  │  └─ page.tsx
│  ├─ api/
│  │  └─ leads/
│  │     └─ route.ts            # email capture API (Server Actions / Route Handler)
│  ├─ globals.css
│  └─ providers.tsx             # shared context providers (feature flags, analytics)
│
├─ src/
│  ├─ components/
│  │  ├─ sections/              # page-level sections (Hero, Features, SocialProof)
│  │  ├─ ui/                    # low-level primitives (Button, Input, Badge)
│  │  └─ visuals/               # illustrative assets (AppMockup, Logo lockups)
│  ├─ hooks/                    # reusable React hooks (useCountdown, useScrollLock)
│  ├─ lib/
│  │  ├─ analytics/             # event tracking helpers and constants
│  │  ├─ content/               # static content definitions & copy blocks
│  │  └─ utils/                 # generic utilities (date helpers, form validation)
│  ├─ styles/                   # Tailwind extensions, CSS variables, tokens
│  ├─ types/                    # shared TypeScript interfaces & enums
│  └─ config/                   # feature flags, external service configs, copy variants
│
├─ public/
│  ├─ images/
│  │  ├─ mockups/
│  │  └─ social/
│  └─ fonts/
│
├─ tests/
│  ├─ unit/                     # vitest / jest specs colocated by domain
│  ├─ integration/              # React Testing Library for component flows
│  └─ e2e/                      # Playwright smoke scenarios for marketing funnel
│
├─ scripts/                     # node scripts (lead export, content sync)
├─ .github/workflows/           # CI/CD pipelines (lint, test, deploy)
├─ docs/
│  ├─ PRD.md
│  └─ FILE_STRUCTURE.md         # this document
└─ README.md
```

## Implementation Notes

- **App Router segmentation** – The `(marketing)` route group keeps the coming-soon experience distinct, allowing future authenticated app routes to live alongside without URL collisions.
- **API handlers** – Housing a `leads` route enables server-side email capture integrations (e.g., HubSpot, ConvertKit) without exposing credentials client-side.
- **Content as data** – Centralizing marketing copy in `src/lib/content` lets the team localize and run A/B tests with minimal React churn.
- **Theming** – Tailwind customizations (colors, fonts, spacing scales) belong in `src/styles` and feed into `tailwind.config.ts`, keeping `globals.css` lean.
- **Testing strategy** – Unit and integration folders mirror the component hierarchy, while Playwright smoke tests validate opt-in flows and countdown behavior before launches.
- **Documentation home** – Storing strategy docs in `/docs` keeps the repo organized and makes it easy for marketing, design, and engineering to collaborate.

Adopting this structure now will minimize refactors as Flowjo expands from a single landing page into a broader marketing site and web application.
