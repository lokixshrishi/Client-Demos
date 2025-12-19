import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "#services", label: "Services" },
    { href: "#projects", label: "Our Work" },
    { href: "#why-us", label: "About Us" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#faq", label: "FAQ" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-lg border-b border-border/50 shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-18 md:h-22">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-11 h-11 bg-primary flex items-center justify-center shadow-card group-hover:scale-105 transition-transform">
              <span className="text-primary-foreground font-heading font-bold text-xl">H</span>
            </div>
            <div className="flex flex-col">
              <span className="font-heading text-xl md:text-2xl font-semibold text-foreground leading-tight">
                HomeFirst
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground hidden sm:block">
                Professional Services
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-all font-medium text-sm"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <div className="text-right mr-2 hidden lg:block">
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground">24/7 Emergency</div>
              <a href="tel:+15551234567" className="text-primary font-heading font-bold text-lg hover:text-primary/80 transition-colors">
                (555) 123-4567
              </a>
            </div>
            <Button variant="default" size="default" asChild className="shadow-card">
              <a href="#contact">
                Get Free Quote
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 hover:bg-secondary/50 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-6 border-t border-border animate-fade-in bg-background">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-all font-medium py-3 px-4"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="border-t border-border mt-4 pt-4 px-4">
                <a href="tel:+15551234567" className="flex items-center gap-2 text-primary font-semibold text-lg mb-4">
                  <Phone className="w-5 h-5" />
                  (555) 123-4567
                </a>
                <Button variant="default" size="lg" className="w-full" asChild>
                  <a href="#contact">Get Free Quote</a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
