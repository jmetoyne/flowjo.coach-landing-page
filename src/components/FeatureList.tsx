const features = [
  {
    title: "Instant Flowjo Score",
    description: "Assess your focus stamina and get a personalised roadmap in minutes."
  },
  {
    title: "Dojo Micro-Lessons",
    description: "Daily drills to build focus, energy, and founder resilience without overwhelm."
  },
  {
    title: "Habit Tracker",
    description: "Simple daily and weekly check-ins designed for busy ADHD entrepreneurs."
  },
  {
    title: "Resource Hub",
    description: "Curated tools, podcasts, and short lessons so you stay in the zone."
  },
  {
    title: "Start Free",
    description: "Explore the first modules on us and decide if Flowjo fits your rituals."
  }
];

export function FeatureList() {
  return (
    <section className="grid gap-4 md:grid-cols-2">
      {features.map((feature) => (
        <div
          key={feature.title}
          className="rounded-2xl border border-brand-sand/70 bg-white/80 p-6 shadow-sm"
        >
          <h3 className="text-lg font-semibold text-brand-denim">{feature.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-700">
            {feature.description}
          </p>
        </div>
      ))}
    </section>
  );
}
