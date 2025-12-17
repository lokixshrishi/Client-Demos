import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import heroImage from "@/assets/hero-home.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Professional home service technician working in a modern home"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/50" />
      </div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-4xl">
          {/* Headline */}
          <h1 
            className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-primary-foreground leading-tight mb-6 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Professional Home Services
            <span className="block text-accent">You Can Trust</span>
          </h1>

          {/* Subtext */}
          <p 
            className="text-lg md:text-xl text-primary-foreground/85 mb-10 max-w-2xl leading-relaxed opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            From emergency repairs to routine maintenance, our certified technicians deliver reliable solutions for your plumbing, electrical, HVAC, and general home service needs.
          </p>

          {/* CTAs */}
          <div 
            className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            <Button variant="hero" size="xl" asChild>
              <a href="#services">
                View Our Services
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="tel:+15551234567">
                <Phone className="w-5 h-5" />
                Call (555) 123-4567
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default Hero;
