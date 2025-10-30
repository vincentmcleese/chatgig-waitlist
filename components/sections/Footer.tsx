export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-ghostteam-black)] text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          {/* Brand */}
          <div className="lg:max-w-sm">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[var(--color-ghostteam-green)] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">CG</span>
              </div>
              <span className="text-xl font-bold">Chat Gig</span>
            </div>
            <p className="text-gray-400 text-sm max-w-xs">
              Turn your ChatGPT conversations into professional freelancer briefs. Effortlessly.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Product
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#features"
                  className="text-gray-400 hover:text-[var(--color-ghostteam-green)] transition-colors text-sm"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  className="text-gray-400 hover:text-[var(--color-ghostteam-green)] transition-colors text-sm"
                >
                  How it Works
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-gray-400 hover:text-[var(--color-ghostteam-green)] transition-colors text-sm"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#waitlist"
                  className="text-gray-400 hover:text-[var(--color-ghostteam-green)] transition-colors text-sm"
                >
                  Join Waitlist
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-center text-sm text-gray-400">
            © {currentYear} Chat Gig. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
