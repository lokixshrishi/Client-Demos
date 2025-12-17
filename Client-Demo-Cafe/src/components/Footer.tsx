import { Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="container-editorial">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12 mb-16 pb-16 border-b border-primary-foreground/20">
          {/* Brand Quote */}
          <div className="max-w-md">
            <blockquote className="font-serif text-2xl md:text-3xl italic leading-relaxed">
              "Coffee, at its finest, is a quiet celebration of craft."
            </blockquote>
          </div>

          {/* Newsletter Teaser */}
          <div className="text-sm opacity-80">
            <p className="mb-2">Stay in the loop</p>
            <p className="text-xs opacity-60">
              Follow us for roast releases and events
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* Logo */}
          <a
            href="#"
            className="font-serif text-2xl font-medium tracking-tight hover:opacity-80 transition-opacity duration-300"
          >
            Terroir
          </a>

          {/* Navigation */}
          <nav>
            <ul className="flex flex-wrap gap-6 md:gap-10 text-sm">
              <li>
                <a href="#about" className="hover:opacity-80 transition-opacity duration-300">
                  Story
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:opacity-80 transition-opacity duration-300">
                  Menu
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:opacity-80 transition-opacity duration-300">
                  Experience
                </a>
              </li>
              <li>
                <a href="#visit" className="hover:opacity-80 transition-opacity duration-300">
                  Visit
                </a>
              </li>
            </ul>
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:opacity-80 transition-opacity duration-300"
              aria-label="Follow us on Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:opacity-80 transition-opacity duration-300"
              aria-label="Follow us on Facebook"
            >
              <Facebook size={20} />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10 text-center">
          <p className="text-xs opacity-60">
            © {new Date().getFullYear()} Terroir Coffee House. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
