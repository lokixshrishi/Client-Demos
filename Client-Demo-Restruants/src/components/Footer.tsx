import { Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-16 md:py-20 bg-foreground text-primary-foreground">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center">
          {/* Logo */}
          <a href="#" className="font-display text-3xl md:text-4xl tracking-wide inline-block mb-8">
            Maison d'Hiver
          </a>

          {/* Festive Message */}
          <div className="max-w-md mx-auto mb-10">
            <div className="festive-divider mb-6" />
            <p className="text-primary-foreground/70 italic text-lg">
              "Wishing you warmth, joy, and <br className="hidden sm:block" />
              the finest celebrations this festive season."
            </p>
            <span className="text-gold text-2xl mt-4 inline-block">✦</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6 mb-10">
            <a
              href="#"
              className="w-12 h-12 border border-primary-foreground/20 flex items-center justify-center hover:border-gold hover:text-gold transition-colors duration-300"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-12 h-12 border border-primary-foreground/20 flex items-center justify-center hover:border-gold hover:text-gold transition-colors duration-300"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap items-center justify-center gap-8 mb-10 text-sm tracking-widest uppercase">
            <a href="#menu" className="text-primary-foreground/70 hover:text-gold transition-colors duration-300">
              Menu
            </a>
            <a href="#about" className="text-primary-foreground/70 hover:text-gold transition-colors duration-300">
              About
            </a>
            <a href="#reservations" className="text-primary-foreground/70 hover:text-gold transition-colors duration-300">
              Reservations
            </a>
            <a href="#contact" className="text-primary-foreground/70 hover:text-gold transition-colors duration-300">
              Contact
            </a>
          </nav>

          {/* Copyright */}
          <div className="border-t border-primary-foreground/10 pt-8">
            <p className="text-primary-foreground/40 text-sm">
              © 2024 Maison d'Hiver. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
