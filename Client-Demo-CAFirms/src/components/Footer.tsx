import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { Linkedin, Twitter, Facebook } from "lucide-react";

const Footer = () => {
  const { toast } = useToast();

  const handleComingSoon = (feature: string) => {
    toast({
      title: `${feature}`,
      description: "This page is coming soon. Thank you for your interest!",
    });
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-navy-dark py-16">
      <div className="container">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="mb-6 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center border border-gold/30 bg-transparent">
                <span className="text-lg font-bold text-gold">CA</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-semibold text-primary-foreground">Carter & Associates</span>
                <span className="text-[11px] font-medium uppercase tracking-wider text-primary-foreground/50">Certified Public Accountants</span>
              </div>
            </Link>
            <p className="mb-6 text-sm leading-relaxed text-primary-foreground/60">
              Providing exceptional accounting and advisory services since 1995.
            </p>
            {/* Social links */}
            <div className="flex gap-3">
              <button className="flex h-9 w-9 items-center justify-center border border-primary-foreground/20 text-primary-foreground/60 transition-colors hover:border-gold hover:text-gold">
                <Linkedin className="h-4 w-4" />
              </button>
              <button className="flex h-9 w-9 items-center justify-center border border-primary-foreground/20 text-primary-foreground/60 transition-colors hover:border-gold hover:text-gold">
                <Twitter className="h-4 w-4" />
              </button>
              <button className="flex h-9 w-9 items-center justify-center border border-primary-foreground/20 text-primary-foreground/60 transition-colors hover:border-gold hover:text-gold">
                <Facebook className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div>
            <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.15em] text-gold">
              Services
            </h4>
            <ul className="space-y-3">
              <li>
                <button onClick={() => scrollToSection("services")} className="text-sm text-primary-foreground/60 transition-colors hover:text-primary-foreground">
                  Tax Planning & Preparation
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("services")} className="text-sm text-primary-foreground/60 transition-colors hover:text-primary-foreground">
                  Audit & Assurance
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("services")} className="text-sm text-primary-foreground/60 transition-colors hover:text-primary-foreground">
                  Business Advisory
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("services")} className="text-sm text-primary-foreground/60 transition-colors hover:text-primary-foreground">
                  Wealth Management
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.15em] text-gold">
              Company
            </h4>
            <ul className="space-y-3">
              <li>
                <button onClick={() => scrollToSection("about")} className="text-sm text-primary-foreground/60 transition-colors hover:text-primary-foreground">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("team")} className="text-sm text-primary-foreground/60 transition-colors hover:text-primary-foreground">
                  Our Team
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("case-studies")} className="text-sm text-primary-foreground/60 transition-colors hover:text-primary-foreground">
                  Case Studies
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleComingSoon("Careers")}
                  className="text-sm text-primary-foreground/60 transition-colors hover:text-primary-foreground"
                >
                  Careers
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.15em] text-gold">
              Contact Info
            </h4>
            <ul className="space-y-3 text-sm text-primary-foreground/60">
              <li>123 Financial District</li>
              <li>Suite 500, New York, NY 10004</li>
              <li>
                <a href="tel:+15551234567" className="transition-colors hover:text-primary-foreground">
                  (555) 123-4567
                </a>
              </li>
              <li>
                <a href="mailto:info@carterassociates.com" className="transition-colors hover:text-primary-foreground">
                  info@carterassociates.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-foreground/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-primary-foreground/50">
              © {new Date().getFullYear()} Carter & Associates, CPA. All rights reserved.
            </p>
            <div className="flex gap-6">
              <button 
                onClick={() => handleComingSoon("Privacy Policy")}
                className="text-sm text-primary-foreground/50 transition-colors hover:text-primary-foreground"
              >
                Privacy Policy
              </button>
              <button 
                onClick={() => handleComingSoon("Terms of Service")}
                className="text-sm text-primary-foreground/50 transition-colors hover:text-primary-foreground"
              >
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
