import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary-foreground flex items-center justify-center">
                <span className="text-primary font-heading font-bold text-lg">H</span>
              </div>
              <span className="font-heading text-2xl font-semibold text-primary-foreground">
                HomeFirst Services
              </span>
            </div>
            <p className="text-primary-foreground/70 text-sm max-w-xs">
              Professional home services you can trust. Licensed, insured, and committed to quality workmanship.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-lg text-primary-foreground mb-4">Contact</h4>
            <div className="space-y-3">
              <a href="tel:+15551234567" className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                <Phone className="w-4 h-4" />
                (555) 123-4567
              </a>
              <a href="mailto:info@homefirstservices.com" className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                <Mail className="w-4 h-4" />
                info@homefirstservices.com
              </a>
              <div className="flex items-center gap-2 text-primary-foreground/70">
                <MapPin className="w-4 h-4" />
                Metro Area & Counties
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-lg text-primary-foreground mb-4">Services</h4>
            <div className="space-y-2 text-sm">
              <div className="text-primary-foreground/70">Plumbing Services</div>
              <div className="text-primary-foreground/70">Electrical Work</div>
              <div className="text-primary-foreground/70">HVAC Services</div>
              <div className="text-primary-foreground/70">General Repairs</div>
              <div className="text-primary-foreground/70">Home Maintenance</div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-primary-foreground/50 text-sm">
            © 2024 HomeFirst Services. All rights reserved.
          </div>
          <div className="flex items-center gap-6 text-sm text-primary-foreground/70">
            <span>Licensed & Insured</span>
            <span>•</span>
            <span>BBB A+ Rating</span>
            <span>•</span>
            <span>24/7 Emergency Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
