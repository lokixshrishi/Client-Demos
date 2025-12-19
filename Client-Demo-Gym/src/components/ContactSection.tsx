import { MapPin, Clock, Phone, Mail } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-32 px-6 bg-background relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-gold text-xs uppercase tracking-[0.3em] font-medium">Get In Touch</span>
          <h2 className="font-display text-4xl md:text-6xl text-foreground mt-4 mb-6">
            Visit Us
          </h2>
          <p className="text-foreground/50 max-w-lg mx-auto">
            Experience the space. Book a tour or drop by anytime.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Location */}
          <div className="text-center p-8 border border-border/50 hover:border-gold/30 transition-colors duration-300">
            <div className="w-12 h-12 mx-auto mb-6 flex items-center justify-center border border-border">
              <MapPin className="w-5 h-5 text-gold" />
            </div>
            <h3 className="font-display text-lg text-foreground mb-2">Location</h3>
            <p className="text-sm text-foreground/50 leading-relaxed">
              425 Fitness Avenue<br />
              Downtown District<br />
              New York, NY 10001
            </p>
          </div>

          {/* Hours */}
          <div className="text-center p-8 border border-border/50 hover:border-gold/30 transition-colors duration-300">
            <div className="w-12 h-12 mx-auto mb-6 flex items-center justify-center border border-border">
              <Clock className="w-5 h-5 text-gold" />
            </div>
            <h3 className="font-display text-lg text-foreground mb-2">Hours</h3>
            <p className="text-sm text-foreground/50 leading-relaxed">
              Monday - Friday: 5am - 11pm<br />
              Saturday: 6am - 10pm<br />
              Sunday: 7am - 8pm
            </p>
          </div>

          {/* Phone */}
          <div className="text-center p-8 border border-border/50 hover:border-gold/30 transition-colors duration-300">
            <div className="w-12 h-12 mx-auto mb-6 flex items-center justify-center border border-border">
              <Phone className="w-5 h-5 text-gold" />
            </div>
            <h3 className="font-display text-lg text-foreground mb-2">Phone</h3>
            <p className="text-sm text-foreground/50 leading-relaxed">
              Main: (212) 555-0199<br />
              Support: (212) 555-0198<br />
              Emergency: (212) 555-0197
            </p>
          </div>

          {/* Email */}
          <div className="text-center p-8 border border-border/50 hover:border-gold/30 transition-colors duration-300">
            <div className="w-12 h-12 mx-auto mb-6 flex items-center justify-center border border-border">
              <Mail className="w-5 h-5 text-gold" />
            </div>
            <h3 className="font-display text-lg text-foreground mb-2">Email</h3>
            <p className="text-sm text-foreground/50 leading-relaxed">
              info@forgeelite.com<br />
              membership@forgeelite.com<br />
              trainers@forgeelite.com
            </p>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-20 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-foreground/40 mb-6">Follow Us</p>
          <div className="flex items-center justify-center gap-6">
            {["Instagram", "Twitter", "YouTube", "LinkedIn"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-sm text-foreground/50 hover:text-gold transition-colors duration-300 uppercase tracking-wider"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
