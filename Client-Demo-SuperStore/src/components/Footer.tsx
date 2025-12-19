import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <Link to="/" className="mb-4 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-accent to-yellow-500 shadow-md">
                <svg viewBox="0 0 24 24" className="h-5 w-5 text-accent-foreground" fill="currentColor">
                  <path d="M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM7.17 14.75l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1 1 0 0020 4H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1 1 0 0020 4H5.21l-.94-2H1v2h2l3.6 7.59L5.25 14c-.73 1.34.2 3 1.75 3h12v-2H7.42c-.14 0-.25-.11-.25-.25z"/>
                </svg>
              </div>
              <span className="text-xl font-bold">SuperStore</span>
            </Link>
            <p className="text-sm text-background/70">Your neighborhood supermarket with fresh products, great prices, and friendly service since 1995.</p>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li><Link to="/help" className="hover:text-background">About Us</Link></li>
              <li><Link to="/help" className="hover:text-background">Careers</Link></li>
              <li><Link to="/deals" className="hover:text-background">Weekly Ad</Link></li>
              <li><Link to="/stores" className="hover:text-background">Store Locations</Link></li>
              <li><Link to="/help" className="hover:text-background">Gift Cards</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">Customer Service</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li><Link to="/help" className="hover:text-background">Help Center</Link></li>
              <li><Link to="/help" className="hover:text-background">Returns & Refunds</Link></li>
              <li><Link to="/help" className="hover:text-background">Shipping Info</Link></li>
              <li><Link to="/account" className="hover:text-background">Track Your Order</Link></li>
              <li><Link to="/help" className="hover:text-background">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">Contact Us</h4>
            <ul className="space-y-3 text-sm text-background/70">
              <li><Link to="/stores" className="flex items-center gap-2 hover:text-background"><MapPin className="h-4 w-4" />123 Main Street, City, ST 12345</Link></li>
              <li><span className="flex items-center gap-2"><Phone className="h-4 w-4" />(555) 123-4567</span></li>
              <li><span className="flex items-center gap-2"><Mail className="h-4 w-4" />support@supermart.com</span></li>
              <li className="flex items-center gap-2"><Clock className="h-4 w-4" />Open 7am - 10pm Daily</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-background/10 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-background/50 md:flex-row">
            <p>© 2024 SuperStore. All rights reserved.</p>
            <div className="flex gap-6">
              <Link to="/help" className="hover:text-background">Privacy Policy</Link>
              <Link to="/help" className="hover:text-background">Terms of Service</Link>
              <Link to="/help" className="hover:text-background">Accessibility</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
