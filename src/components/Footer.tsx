import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-elevate-dark text-white">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="rounded-full w-8 h-8 bg-white flex items-center justify-center">
                <img
                  src="/elevate-venture.png"
                  alt="logo"
                  className="w-6 h-6"
                />
              </div>
              <span className="font-display text-xl font-semibold tracking-tight text-white">
                Elevate<span className="text-elevate-gold">Ventures</span>
              </span>
            </Link>
            <p className="text-sm text-gray-300 max-w-xs">
              Transforming ordinary events into extraordinary experiences. Your
              vision, our expertise.
            </p>
            <div className="flex gap-4">
              {/* Social icons unchanged */}
              {/* ... */}
            </div>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-sm text-gray-300 hover:text-elevate-gold transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="text-sm text-gray-300 hover:text-elevate-gold transition-colors"
                >
                  Event Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="/apply"
                  className="text-sm text-gray-300 hover:text-elevate-gold transition-colors"
                >
                  Apply
                </Link>
              </li>
              <li>
                <Link
                  to="/auth"
                  className="text-sm text-gray-300 hover:text-elevate-gold transition-colors"
                >
                  Sign In / Register
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold mb-4">
              Services
            </h3>
            <ul className="space-y-2">
              <li>
                <span className="text-sm text-gray-300">Corporate Events</span>
              </li>
              <li>
                <span className="text-sm text-gray-300">Weddings</span>
              </li>
              <li>
                <span className="text-sm text-gray-300">Birthday Parties</span>
              </li>
              <li>
                <span className="text-sm text-gray-300">Product Launches</span>
              </li>
              <li>
                <span className="text-sm text-gray-300">
                  Custom Experiences
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold mb-4">
              Contact Us
            </h3>
            <ul className="space-y-2">
              <li className="text-sm text-gray-300">123 Celebration Avenue</li>
              <li className="text-sm text-gray-300">New York, NY 10001</li>
              <li className="text-sm text-gray-300">United States</li>
              <li className="text-sm text-gray-300">
                info@elevateventures.com
              </li>
              <li className="text-sm text-gray-300">+1 (555) 123-4567</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row gap-4 justify-between items-center">
          <p className="text-sm text-gray-400">
            © 2025 Elevate Ventures. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="text-xs text-gray-400 hover:text-elevate-gold transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-xs text-gray-400 hover:text-elevate-gold transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-xs text-gray-400 hover:text-elevate-gold transition-colors"
            >
              Cookies Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
