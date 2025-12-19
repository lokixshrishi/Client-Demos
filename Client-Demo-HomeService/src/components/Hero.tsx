import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Shield, Clock, Award } from "lucide-react";
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
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/90 to-primary/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-4xl">
          {/* Trust Badge */}
          <div 
            className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 px-4 py-2 mb-6 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            <Award className="w-4 h-4 text-accent" />
            <span className="text-primary-foreground/90 text-sm font-medium">Trusted by 5,000+ Homeowners</span>
          </div>

          {/* Headline */}
          <h1 
            className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-primary-foreground leading-[1.1] mb-6 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Expert Home Services
            <span className="block text-accent mt-2">Done Right, Every Time</span>
          </h1>

          {/* Subtext */}
          <p 
            className="text-lg md:text-xl text-primary-foreground/85 mb-8 max-w-2xl leading-relaxed opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            From emergency repairs to complete renovations, our licensed professionals deliver 
            exceptional plumbing, electrical, HVAC, and general contracting services with 
            transparent pricing and guaranteed satisfaction.
          </p>

          {/* CTAs */}
          <div 
            className="flex flex-col sm:flex-row gap-4 mb-12 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            <Button variant="hero" size="xl" asChild>
              <a href="#contact">
                Get Free Estimate
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="tel:+15551234567">
                <Phone className="w-5 h-5" />
                (555) 123-4567
              </a>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div 
            className="flex flex-wrap gap-6 md:gap-10 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.8s" }}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary-foreground/10 backdrop-blur-sm flex items-center justify-center">
                <Shield className="w-5 h-5 text-accent" />
              </div>
              <div>
                <div className="text-primary-foreground font-semibold text-sm">Licensed & Insured</div>
                <div className="text-primary-foreground/60 text-xs">Full Coverage</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary-foreground/10 backdrop-blur-sm flex items-center justify-center">
                <Clock className="w-5 h-5 text-accent" />
              </div>
              <div>
                <div className="text-primary-foreground font-semibold text-sm">24/7 Emergency</div>
                <div className="text-primary-foreground/60 text-xs">Always Available</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary-foreground/10 backdrop-blur-sm flex items-center justify-center">
                <Award className="w-5 h-5 text-accent" />
              </div>
              <div>
                <div className="text-primary-foreground font-semibold text-sm">BBB A+ Rated</div>
                <div className="text-primary-foreground/60 text-xs">15+ Years</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background via-background/50 to-transparent z-10" />
    </section>
  );
};

export default Hero;
