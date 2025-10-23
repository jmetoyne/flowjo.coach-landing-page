const socialProof = [
  "Designed by a coach who has helped 500+ ADHD founders stay in flow",
  "Backed by neuroscience-informed habit loops",
  "Loved by product leaders at bootstrapped startups"
];

export function SocialProof() {
  return (
    <section className="rounded-2xl bg-brand-sand/40 p-6 text-sm font-medium text-slate-700">
      <h3 className="text-sm font-semibold uppercase tracking-wide text-brand-denim">
        Why founders trust Flowjo
      </h3>
      <ul className="mt-3 space-y-2">
        {socialProof.map((item) => (
          <li key={item} className="flex items-start gap-2">
            <span aria-hidden className="mt-1 text-brand-ember">
              •
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
