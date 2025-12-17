import { MapPin, Clock, Phone } from 'lucide-react';

const LocationHours = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <span className="text-gold text-sm tracking-ultra uppercase">Visit Us</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mt-4 mb-6">
            Location & Hours
          </h2>
          <div className="festive-divider" />
        </div>

        <div className="grid md:grid-cols-3 gap-12 max-w-4xl mx-auto">
          {/* Address */}
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 border border-gold/30 mb-6">
              <MapPin className="w-6 h-6 text-gold" />
            </div>
            <h3 className="font-serif text-xl mb-4">Address</h3>
            <p className="text-muted-foreground leading-relaxed">
              24 Rue de la Paix<br />
              Mayfair, London<br />
              W1S 4HT
            </p>
          </div>

          {/* Hours */}
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 border border-gold/30 mb-6">
              <Clock className="w-6 h-6 text-gold" />
            </div>
            <h3 className="font-serif text-xl mb-4">Festive Hours</h3>
            <div className="text-muted-foreground space-y-2">
              <p>Monday – Thursday: 6pm – 11pm</p>
              <p>Friday – Saturday: 12pm – 11pm</p>
              <p>Sunday: 12pm – 9pm</p>
              <p className="text-gold text-sm mt-4 pt-4 border-t border-border">
                Christmas Eve: 12pm – 6pm<br />
                Christmas Day: Closed<br />
                Boxing Day: 12pm – 10pm
              </p>
            </div>
          </div>

          {/* Contact */}
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 border border-gold/30 mb-6">
              <Phone className="w-6 h-6 text-gold" />
            </div>
            <h3 className="font-serif text-xl mb-4">Reservations</h3>
            <p className="text-muted-foreground leading-relaxed">
              +44 (0) 20 7123 4567<br />
              <span className="text-sm">reservations@maisondhiver.com</span>
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              For parties of 8 or more,<br />
              please contact us directly.
            </p>
          </div>
        </div>

        <div className="text-center mt-16" id="reservations">
          <a
            href="tel:+442071234567"
            className="inline-block px-10 py-4 bg-foreground text-background text-sm tracking-widest uppercase hover:bg-foreground/90 transition-colors duration-300"
          >
            Book Your Table
          </a>
        </div>
      </div>
    </section>
  );
};

export default LocationHours;
