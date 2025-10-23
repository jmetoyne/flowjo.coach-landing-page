# Flowjo Coming Soon Landing Page

This repository contains the marketing MVP for the Flowjo app launch — a Next.js (App Router) site that captures early-access leads, showcases the product value, and supports future growth outlined in the PRD.

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the development server:
   ```bash
   npm run dev
   ```
3. Open [http://localhost:3000](http://localhost:3000) to preview the page.

> **Note**: The email form currently stores leads client-side only (see `src/components/EmailCaptureForm.tsx`). Integrate with your CRM when backend access is available.

## Tech Stack

- [Next.js 14](https://nextjs.org/) with the App Router
- TypeScript for strict typing
- Tailwind CSS for styling and brand theming

## Project Structure

```
app/                  # App Router entry points
src/components/       # Reusable UI components
src/lib/              # Shared utilities (countdown timer)
public/               # Static assets (app mockup, favicons)
```

Refer to `PRD.md` for the full product requirements and roadmap.
