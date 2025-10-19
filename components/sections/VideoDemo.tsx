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
          <div className="relative aspect-video bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
            {/* Placeholder for video - you can replace this with an actual video embed */}
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[var(--color-ghostteam-green)]/10 to-[var(--color-green-ultralight)]">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-[var(--color-ghostteam-green)] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform cursor-pointer">
                  <svg
                    className="w-8 h-8 text-white ml-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p className="text-sm text-[var(--color-text-muted)]">
                  Video demo coming soon
                </p>
              </div>
            </div>

            {/* Uncomment when you have a video URL */}
            {/* <iframe
              className="absolute inset-0 w-full h-full"
              src="YOUR_VIDEO_URL"
              title="Chat Gig Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
}
