import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, ArrowRight } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    "Plumbing Services",
    "Electrical Work",
    "HVAC Services",
    "General Contracting",
    "Maintenance Plans",
    "Home Inspections",
  ];

  const quickLinks = [
    { label: "Our Services", href: "#services" },
    { label: "Recent Projects", href: "#projects" },
    { label: "About Us", href: "#why-us" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-primary">
      <div className="container mx-auto px-4 py-16 md:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary-foreground flex items-center justify-center">
                <span className="text-primary font-heading font-bold text-xl">H</span>
              </div>
              <div>
                <span className="font-heading text-2xl font-semibold text-primary-foreground block leading-tight">
                  HomeFirst
                </span>
                <span className="text-[10px] uppercase tracking-[0.15em] text-primary-foreground/50">
                  Professional Services
                </span>
              </div>
            </div>
            <p className="text-primary-foreground/70 text-sm mb-6 max-w-xs leading-relaxed">
              Professional home services you can trust. Licensed, insured, and committed to 
              quality workmanship for over 15 years.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors group">
                <Facebook className="w-5 h-5 text-primary-foreground group-hover:text-foreground" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors group">
                <Instagram className="w-5 h-5 text-primary-foreground group-hover:text-foreground" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors group">
                <Linkedin className="w-5 h-5 text-primary-foreground group-hover:text-foreground" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-heading text-lg text-primary-foreground mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a href="#services" className="text-primary-foreground/70 hover:text-accent transition-colors text-sm">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-heading text-lg text-primary-foreground mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-primary-foreground/70 hover:text-accent transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-heading text-lg text-primary-foreground mb-6">Contact Us</h4>
            <div className="space-y-4">
              <a href="tel:+15551234567" className="flex items-center gap-3 text-primary-foreground/70 hover:text-accent transition-colors">
                <Phone className="w-4 h-4" />
                <span className="text-sm">(555) 123-4567</span>
              </a>
              <a href="mailto:info@homefirstservices.com" className="flex items-center gap-3 text-primary-foreground/70 hover:text-accent transition-colors">
                <Mail className="w-4 h-4" />
                <span className="text-sm">info@homefirstservices.com</span>
              </a>
              <div className="flex items-center gap-3 text-primary-foreground/70">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Metro Area & Counties</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-primary-foreground/50 text-sm">
              © {currentYear} HomeFirst Services. All rights reserved.
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-primary-foreground/50">
              <span>Licensed & Insured</span>
              <span>•</span>
              <span>BBB A+ Rating</span>
              <span>•</span>
              <span>24/7 Emergency</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
