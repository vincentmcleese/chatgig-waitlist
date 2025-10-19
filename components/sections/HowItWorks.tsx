const steps = [
  {
    number: "01",
    title: "Chat naturally in ChatGPT",
    description:
      "Describe your project idea, requirements, or goals in a natural conversation. No need to format or structure anything.",
  },
  {
    number: "02",
    title: "Chat Gig captures the details",
    description:
      "Our AI automatically extracts key requirements, scope, deliverables, and context from your conversation in real-time.",
  },
  {
    number: "03",
    title: "Get a professional brief",
    description:
      "Receive a polished, structured brief ready to share with freelancers on any platform. Post it and get quality proposals.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-[var(--color-text-heading)] sm:text-4xl mb-4">
            How it works
          </h2>
          <p className="text-lg text-[var(--color-text-muted)]">
            Three simple steps from conversation to freelancer brief
          </p>
        </div>

        {/* Steps */}
        <div className="mx-auto max-w-4xl">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative pb-16 last:pb-0"
            >
              {/* Connecting Line */}
              {index !== steps.length - 1 && (
                <div className="absolute left-8 top-20 w-0.5 h-full bg-gradient-to-b from-[var(--color-ghostteam-green)] to-transparent" />
              )}

              <div className="relative flex gap-8 items-start group">
                {/* Number Badge */}
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--color-ghostteam-green)] to-[var(--color-ghostteam-green-dark)] flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-transform z-10">
                  {step.number}
                </div>

                {/* Content */}
                <div className="flex-1 pt-2">
                  <h3 className="text-2xl font-semibold text-[var(--color-text-heading)] mb-3 group-hover:text-[var(--color-ghostteam-green)] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-lg text-[var(--color-text-muted)] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
