import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Flowjo – Coming Soon",
  description:
    "Join the Flowjo beta for ADHD entrepreneurs and get early access to focus-building tools, habit tracking, and curated resources."
};

export default function RootLayout({
  children
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-brand-cream text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}
