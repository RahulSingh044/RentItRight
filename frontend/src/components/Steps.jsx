const steps = [
  {
    id: 1,
    title: "Browse",
    description:
      "Explore a curated catalog of local listings. From tools to tech, find exactly what you need right next door.",
    icon: "search",
  },
  {
    id: 2,
    title: "Book",
    description:
      "Secure your rental with our encrypted payment system and flexible scheduling tools. Instant peace of mind.",
    icon: "event_available",
  },
  {
    id: 3,
    title: "Return",
    description:
      "Once finished, follow our simple handoff guide. Rate your experience and help the community thrive.",
    icon: "assignment_return",
  },
];

export default function Steps() {
  return (
    <section className="bg-app py-28 border-y border-divider">
      <div className="max-w-[1400px] mx-auto px-6">

        {/* Section header */}
        <div className="text-center mb-20">
          <h2 className="text-[28px] md:text-[40px] font-bold text-text-primary">
            The Effortless Exchange
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-text-secondary text-base">
            Three simple steps to start sharing and renting within your neighborhood today.
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.id}
              className="group bg-card border border-divider rounded-xl p-10 hover:bg-elevated transition-colors hover:border-bright"
            >
              {/* Icon */}
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-bright-soft border border-bright/30 mb-6">
                <span className="material-symbols-outlined text-bright text-2xl">
                  {step.icon}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-semibold text-text-primary mb-3">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-text-secondary text-lg leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
