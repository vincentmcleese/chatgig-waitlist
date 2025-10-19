import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    title: "AI-Powered Brief Generation",
    description:
      "Automatically convert your casual ChatGPT sessions into structured, professional briefs that freelancers can understand and execute.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    ),
  },
  {
    title: "Seamless ChatGPT Integration",
    description:
      "Work directly within ChatGPT without switching tabs or apps. Your entire workflow stays in one place for maximum efficiency.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
  {
    title: "Time-Saving Automation",
    description:
      "Reduce hours of brief writing to minutes. Focus on what matters while Chat Gig handles the documentation and communication.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: "Multiple Project Types",
    description:
      "Whether you're vibe coding, designing, or contracting, Chat Gig adapts to any project type and creates the perfect brief.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-3zM14 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1h-4a1 1 0 01-1-1v-3z"
        />
      </svg>
    ),
  },
];

export function Features() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-[var(--color-text-heading)] sm:text-4xl mb-4">
            Everything you need to connect with freelancers
          </h2>
          <p className="text-lg text-[var(--color-text-muted)]">
            Powerful features that make outsourcing as easy as having a conversation
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:gap-12">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-white"
            >
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[var(--color-ghostteam-green)]/10 flex items-center justify-center text-[var(--color-ghostteam-green)] group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-[var(--color-text-heading)] mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-[var(--color-text-muted)] leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>

                {/* Decorative gradient on hover */}
                <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-[var(--color-ghostteam-green)] to-[var(--color-ghostteam-green-dark)] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
