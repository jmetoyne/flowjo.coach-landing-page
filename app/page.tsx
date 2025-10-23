import { AppMockup } from "@/components/AppMockup";
import { CountdownTimer } from "@/components/CountdownTimer";
import { EmailCaptureForm } from "@/components/EmailCaptureForm";
import { FeatureList } from "@/components/FeatureList";
import { SocialProof } from "@/components/SocialProof";

const footerLinks = [
  { label: "Terms", href: "#" },
  { label: "Privacy", href: "#" },
  { label: "Contact", href: "mailto:hello@flowjo.coach" },
  { label: "Instagram", href: "https://instagram.com/flowjo" }
];

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-16 px-6 pb-24 pt-16">
        <header className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <CountdownTimer />
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Flowjo – Your ADHD Entrepreneur Score &amp; Habit Companion
            </h1>
            <p className="max-w-xl text-lg text-slate-700">
              Build the systems that keep you in flow. Flowjo helps ADHD founders
              stay focused with a personalised score, dojo micro-lessons, and a
              habit tracker built for busy brains.
            </p>
            <EmailCaptureForm />
            <div className="flex flex-wrap items-center gap-3 text-sm text-slate-600">
              <span className="rounded-full bg-white/80 px-3 py-1 font-medium uppercase tracking-wide text-brand-denim">
                Join the Beta
              </span>
              <span className="rounded-full bg-white/60 px-3 py-1">
                First 2 modules free to explore
              </span>
              <span className="rounded-full bg-white/60 px-3 py-1">
                Leads tagged as “App Launch – Flowjo”
              </span>
            </div>
          </div>
          <AppMockup />
        </header>

        <FeatureList />

        <section className="grid gap-6 lg:grid-cols-[1fr_0.8fr]">
          <div className="rounded-3xl border border-brand-sand/70 bg-white/90 p-8 shadow-lg">
            <h2 className="text-2xl font-semibold text-slate-900">
              Rituals that meet you where you are
            </h2>
            <p className="mt-4 text-base text-slate-700">
              Flowjo keeps your focus hygiene simple: daily dojo drills, a habit tracker
              you&apos;ll actually use, and a resource hub curated for ADHD founders. Jump in,
              explore the first modules for free, and get momentum fast.
            </p>
            <div className="mt-6 grid gap-3 text-sm text-slate-600 sm:grid-cols-2">
              <div className="rounded-xl bg-brand-sand/40 p-4">
                <p className="font-semibold text-brand-denim">Micro-lessons in 5 min</p>
                <p className="mt-1 text-slate-700">Actionable drills to build focus muscle.</p>
              </div>
              <div className="rounded-xl bg-brand-sand/40 p-4">
                <p className="font-semibold text-brand-denim">Habit rituals that stick</p>
                <p className="mt-1 text-slate-700">Track wins with ADHD-friendly check-ins.</p>
              </div>
              <div className="rounded-xl bg-brand-sand/40 p-4">
                <p className="font-semibold text-brand-denim">Resource hub</p>
                <p className="mt-1 text-slate-700">Tools, pods, and templates ready to share.</p>
              </div>
              <div className="rounded-xl bg-brand-sand/40 p-4">
                <p className="font-semibold text-brand-denim">CRM-ready tagging</p>
                <p className="mt-1 text-slate-700">Every lead tagged “App Launch – Flowjo”.</p>
              </div>
            </div>
          </div>
          <SocialProof />
        </section>
      </main>

      <footer className="border-t border-brand-sand/70 bg-white/60 py-6">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-slate-600 sm:flex-row">
          <span>© {new Date().getFullYear()} Flowjo Labs</span>
          <nav className="flex flex-wrap justify-center gap-4">
            {footerLinks.map((link) => (
              <a key={link.label} href={link.href} className="hover:text-brand-ember">
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </footer>
    </div>
  );
}
