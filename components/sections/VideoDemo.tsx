export function VideoDemo() {
  return (
    <section className="py-20 bg-[var(--color-green-ultralight)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-[var(--color-text-heading)] sm:text-4xl mb-4">
              See it in action
            </h2>
            <p className="text-lg text-[var(--color-text-muted)]">
              Watch how Chat Gig transforms your casual ChatGPT conversations into professional freelancer briefs
            </p>
          </div>

          {/* Video Container */}
          <div className="relative aspect-[4/3] bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
            <video
              className="absolute inset-0 w-full h-full object-contain"
              controls
              preload="metadata"
            >
              <source src="/video/fiverr app in chatgpt website.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
