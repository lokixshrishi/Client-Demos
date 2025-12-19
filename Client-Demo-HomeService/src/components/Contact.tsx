import { Phone, MapPin, Clock, Mail, MessageSquare, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            Get In Touch
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-muted-foreground text-lg">
            Contact us today for a free, no-obligation estimate. We're here to answer your questions 
            and provide expert solutions for your home.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Cards */}
          <div className="lg:col-span-1 space-y-6">
            {/* Phone Card */}
            <a 
              href="tel:+15551234567" 
              className="block bg-primary p-6 shadow-elevated hover:scale-[1.02] transition-transform group"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-primary-foreground/10 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <div className="text-primary-foreground/70 text-sm mb-1">Call or Text Anytime</div>
                  <div className="text-2xl font-heading font-bold text-primary-foreground group-hover:text-accent transition-colors">
                    (555) 123-4567
                  </div>
                </div>
              </div>
            </a>

            {/* Email Card */}
            <a 
              href="mailto:info@homefirstservices.com"
              className="block bg-card p-6 border border-border/50 shadow-card hover:shadow-elevated hover:-translate-y-1 transition-all group"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-secondary flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-muted-foreground text-sm mb-1">Email Us</div>
                  <div className="text-foreground font-medium group-hover:text-primary transition-colors">
                    info@homefirstservices.com
                  </div>
                </div>
              </div>
            </a>

            {/* Location Card */}
            <div className="bg-card p-6 border border-border/50 shadow-card">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-secondary flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-muted-foreground text-sm mb-1">Service Area</div>
                  <div className="text-foreground font-medium mb-1">
                    Metro Area & Surrounding Counties
                  </div>
                  <div className="text-muted-foreground text-sm">
                    Free estimates within 25 miles
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Hours & CTA Card */}
          <div className="lg:col-span-2">
            <div className="bg-card p-8 md:p-10 shadow-elevated border border-border/50 h-full">
              <div className="grid md:grid-cols-2 gap-8 h-full">
                {/* Hours */}
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-accent/20 flex items-center justify-center">
                      <Clock className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="font-heading text-2xl text-foreground">
                      Business Hours
                    </h3>
                  </div>

                  <div className="space-y-4">
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
                    <div className="flex justify-between items-center py-3 bg-accent/10 px-3 -mx-3">
                      <span className="text-primary font-semibold">Emergency Service</span>
                      <span className="text-accent font-bold">24/7 Available</span>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="flex flex-col justify-center">
                  <h3 className="font-heading text-2xl text-foreground mb-4">
                    Request Your Free Estimate
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Get a detailed, no-obligation quote for your project. Our team typically responds within 2 hours during business hours.
                  </p>
                  <div className="space-y-3">
                    <Button variant="default" size="lg" className="w-full" asChild>
                      <a href="tel:+15551234567">
                        <Phone className="w-5 h-5" />
                        Call Now
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
        </div>
      </div>
    </section>
  );
};

export default Contact;
