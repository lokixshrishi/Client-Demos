
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'About', path: '/about' },
    { name: 'AI Consultant', path: '/ai-consultant' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              <Link to="/" className="text-2xl font-serif font-bold tracking-widest text-slate-800">
                ETHEREAL <span className="text-gold">AURA</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium tracking-wide transition-colors hover:text-gold ${
                    location.pathname === link.path ? 'text-gold' : 'text-slate-600'
                  }`}
                >
                  {link.name.toUpperCase()}
                </Link>
              ))}
              <Link
                to="/contact"
                className="bg-gold text-white px-6 py-2 rounded-sm text-sm font-semibold tracking-widest hover:bg-opacity-90 transition-all"
              >
                BOOK NOW
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-slate-600 hover:text-gold transition-colors"
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white border-b border-gray-100 py-4 px-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block text-sm font-medium text-slate-600 hover:text-gold py-2"
              >
                {link.name.toUpperCase()}
              </Link>
            ))}
          </div>
        )}
      </nav>

      <main className="flex-grow pt-20">
        {children}
      </main>

      <footer className="bg-slate-900 text-slate-300 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-1">
              <h3 className="text-xl font-serif text-white mb-6 tracking-widest uppercase">Ethereal Aura</h3>
              <p className="text-sm leading-relaxed mb-6 italic opacity-80">
                Elevating natural beauty through sophisticated skincare and artistic makeup expression.
              </p>
              <div className="flex space-x-4">
                <Instagram className="cursor-pointer hover:text-gold" size={20} />
                <Facebook className="cursor-pointer hover:text-gold" size={20} />
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-6 tracking-widest uppercase text-xs">Quick Links</h4>
              <ul className="space-y-3 text-sm">
                <li><Link to="/services" className="hover:text-gold">All Services</Link></li>
                <li><Link to="/portfolio" className="hover:text-gold">Our Gallery</Link></li>
                <li><Link to="/about" className="hover:text-gold">Meet the Artist</Link></li>
                <li><Link to="/ai-consultant" className="hover:text-gold">AI Beauty Guide</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-6 tracking-widest uppercase text-xs">Contact</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2"><Phone size={14} className="text-gold" /> +1 (555) 012-3456</li>
                <li className="flex items-center gap-2"><Mail size={14} className="text-gold" /> hello@etherealaura.com</li>
                <li className="flex items-center gap-2"><MapPin size={14} className="text-gold" /> Beverly Hills, CA</li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-6 tracking-widest uppercase text-xs">Stay Inspired</h4>
              <p className="text-xs mb-4">Join our newsletter for beauty tips and exclusive offers.</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Email address"
                  className="bg-slate-800 border-none px-4 py-2 text-sm w-full focus:ring-1 focus:ring-gold outline-none"
                />
                <button className="bg-gold text-white px-4 py-2 text-xs font-bold">JOIN</button>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-16 pt-8 text-center text-xs opacity-50 uppercase tracking-widest">
            © {new Date().getFullYear()} Ethereal Aura Spa & Makeup. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};
