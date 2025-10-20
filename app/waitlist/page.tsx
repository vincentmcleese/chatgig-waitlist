import Script from "next/script";
import Link from "next/link";

export default function WaitlistPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--color-green-ultralight)] via-white to-[var(--color-green-ultralight)]">
      <section className="relative overflow-hidden py-20 sm:py-32">
        {/* Animated gradient orbs */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-[var(--color-ghostteam-green)]/20 to-transparent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" aria-hidden="true" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-[var(--color-ghostteam-green)]/15 to-transparent rounded-full blur-3xl translate-x-1/2 translate-y-1/2" aria-hidden="true" />
        <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-gradient-to-r from-[var(--color-ghostteam-green)]/10 to-[var(--color-accent)]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" aria-hidden="true" />

        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          {/* Back button */}
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-ghostteam-green)] transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to home
            </Link>
          </div>

          {/* Card container with off-white background */}
          <div className="mx-auto max-w-4xl bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-12 sm:p-16 border border-gray-100">
            <div className="text-center mb-8">
              {/* ChatGPT Apps Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-black rounded-full text-white text-sm font-medium shadow-md">
                {/* ChatGPT Icon */}
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08-4.778 2.758a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z"/>
                </svg>
                <span>ChatGPT Apps</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl font-bold tracking-tight text-[var(--color-text-heading)] sm:text-5xl md:text-6xl mb-4">
                Join the waitlist
              </h1>

              {/* Description */}
              <p className="text-lg text-[var(--color-text-muted)] mb-8 leading-relaxed max-w-xl mx-auto">
                Be the first to know when Chat Gig launches. Get early access and exclusive benefits.
              </p>
            </div>

            {/* Tally Form Embed */}
            <div className="relative">
              <iframe
                data-tally-src="https://tally.so/embed/n0pz1P?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                loading="lazy"
                width="100%"
                height="319"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                title="waitlist - chatgig"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tally Script */}
      <Script id="tally-script" strategy="afterInteractive">
        {`
          var d=document,w="https://tally.so/widgets/embed.js",v=function(){"undefined"!=typeof Tally?Tally.loadEmbeds():d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((function(e){e.src=e.dataset.tallySrc}))};if("undefined"!=typeof Tally)v();else if(d.querySelector('script[src="'+w+'"]')==null){var s=d.createElement("script");s.src=w,s.onload=v,s.onerror=v,d.body.appendChild(s);}
        `}
      </Script>
    </div>
  );
}
