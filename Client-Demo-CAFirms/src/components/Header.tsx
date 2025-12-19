import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { label: "Services", id: "services" },
    { label: "Industries", id: "industries" },
    { label: "About Us", id: "about" },
    { label: "Resources", id: "resources" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled 
          ? "bg-background/98 shadow-sm backdrop-blur-sm" 
          : "bg-background"
      }`}
    >
      <div className="container flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center bg-primary">
            <span className="text-lg font-bold text-gold">CA</span>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-semibold tracking-tight text-foreground">Carter & Associates</span>
            <span className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">Certified Public Accountants</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <a href="tel:+15551234567" className="flex items-center gap-2 text-sm font-medium text-foreground">
            <Phone className="h-4 w-4 text-gold" />
            (555) 123-4567
          </a>
          <Button variant="default" size="sm" onClick={scrollToContact}>
            Schedule Consultation
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          className="flex h-10 w-10 items-center justify-center lg:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="border-t bg-background lg:hidden">
          <nav className="container flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="py-3 text-left text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </button>
            ))}
            <div className="mt-4 flex flex-col gap-3 border-t pt-4">
              <a href="tel:+15551234567" className="flex items-center gap-2 text-sm font-medium text-foreground">
                <Phone className="h-4 w-4 text-gold" />
                (555) 123-4567
              </a>
              <Button variant="default" size="sm" onClick={scrollToContact} className="w-full">
                Schedule Consultation
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
