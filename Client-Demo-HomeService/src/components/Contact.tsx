import { Phone, MapPin, Clock, Mail, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left - Contact Info */}
          <div>
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              Contact Us
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
              Get Your Free
              <span className="block text-primary">Estimate Today</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-10 max-w-lg">
              Ready to get started? Contact us for a free, no-obligation estimate. 
              We're here to answer your questions and provide expert solutions.
            </p>

            <div className="space-y-6">
              <a 
                href="tel:+15551234567" 
                className="flex items-center gap-4 group"
              >
                <div className="w-14 h-14 bg-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Call or Text</div>
                  <div className="text-xl font-heading font-semibold text-foreground group-hover:text-primary transition-colors">
                    (555) 123-4567
                  </div>
                </div>
              </a>

              <a 
                href="mailto:info@homefirstservices.com"
                className="flex items-center gap-4 group"
              >
                <div className="w-14 h-14 bg-secondary flex items-center justify-center group-hover:bg-primary transition-colors">
                  <Mail className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Email Us</div>
                  <div className="text-lg text-foreground group-hover:text-primary transition-colors">
                    info@homefirstservices.com
                  </div>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-secondary flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Service Area</div>
                  <div className="text-lg text-foreground">
                    Metro Area & Surrounding Counties
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Free estimates within 25 miles
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Hours & CTA Card */}
          <div className="flex items-center">
            <div className="w-full bg-card p-8 md:p-10 shadow-elevated border border-border/50">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-accent/20 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-heading text-2xl text-foreground">
                  Business Hours
                </h3>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <span className="text-foreground font-medium">Monday - Friday</span>
                  <span className="text-muted-foreground">7:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <span className="text-foreground font-medium">Saturday</span>
                  <span className="text-muted-foreground">8:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <span className="text-foreground font-medium">Sunday</span>
                  <span className="text-muted-foreground">Closed</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-primary font-medium">Emergency Service</span>
                  <span className="text-accent font-semibold">24/7 Available</span>
                </div>
              </div>

              <div className="space-y-3">
                <Button variant="default" size="lg" className="w-full" asChild>
                  <a href="tel:+15551234567">
                    <Phone className="w-5 h-5" />
                    Call for Free Estimate
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="w-full" asChild>
                  <a href="mailto:info@homefirstservices.com">
                    <MessageSquare className="w-5 h-5" />
                    Send Message
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
