
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-elevate-dark text-white">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="rounded-full w-8 h-8 bg-white flex items-center justify-center">
              <img src="\elevate-venture.png" alt="logo" />
              </div>
              <span className="font-display text-xl font-semibold tracking-tight text-white">Elevate<span className="text-elevate-gold">Ventures</span></span>
            </Link>
            <p className="text-sm text-gray-300 max-w-xs">
              Transforming ordinary events into extraordinary experiences. Your vision, our expertise.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-300 hover:text-elevate-gold transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-elevate-gold transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-elevate-gold transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-elevate-gold transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-display text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm text-gray-300 hover:text-elevate-gold transition-colors">Home</Link></li>
              <li><Link to="/gallery" className="text-sm text-gray-300 hover:text-elevate-gold transition-colors">Event Gallery</Link></li>
              <li><Link to="/services" className="text-sm text-gray-300 hover:text-elevate-gold transition-colors">Our Services</Link></li>
              <li><Link to="/about" className="text-sm text-gray-300 hover:text-elevate-gold transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-sm text-gray-300 hover:text-elevate-gold transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-display text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-gray-300 hover:text-elevate-gold transition-colors">Corporate Events</a></li>
              <li><a href="#" className="text-sm text-gray-300 hover:text-elevate-gold transition-colors">Weddings</a></li>
              <li><a href="#" className="text-sm text-gray-300 hover:text-elevate-gold transition-colors">Birthday Parties</a></li>
              <li><a href="#" className="text-sm text-gray-300 hover:text-elevate-gold transition-colors">Product Launches</a></li>
              <li><a href="#" className="text-sm text-gray-300 hover:text-elevate-gold transition-colors">Custom Experiences</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-display text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="text-sm text-gray-300">123 Celebration Avenue</li>
              <li className="text-sm text-gray-300">New York, NY 10001</li>
              <li className="text-sm text-gray-300">United States</li>
              <li className="text-sm text-gray-300">info@elevateventures.com</li>
              <li className="text-sm text-gray-300">+1 (555) 123-4567</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row gap-4 justify-between items-center">
          <p className="text-sm text-gray-400">© 2025 Elevate Ventures. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="text-xs text-gray-400 hover:text-elevate-gold transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-gray-400 hover:text-elevate-gold transition-colors">Terms of Service</a>
            <a href="#" className="text-xs text-gray-400 hover:text-elevate-gold transition-colors">Cookies Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
