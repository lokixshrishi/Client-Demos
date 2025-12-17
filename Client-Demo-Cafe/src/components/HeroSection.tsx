import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-coffee.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video with Fallback */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="w-full h-full object-cover"
          poster={heroImage}
        >
          <source src="/Cinematic_AI_Cafe_Video_Generation.mp4" type="video/mp4" />
          {/* Fallback image for browsers that don't support video */}
          <img
            src={heroImage}
            alt="Specialty coffee being prepared by expert barista"
            className="w-full h-full object-cover"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-editorial text-center">
        <span className="text-caption text-foreground/80 animate-fade-up mb-6 block">
          Specialty Coffee House
        </span>
        
        <h1 className="text-editorial-xl text-foreground mb-8 animate-fade-up-delay-1">
          Craft in
          <br />
          <em className="italic">Every Cup</em>
        </h1>

        <p className="text-body-lg text-foreground/80 max-w-xl mx-auto mb-12 animate-fade-up-delay-2">
          Where meticulous sourcing meets artisan roasting.
          A sanctuary for those who appreciate the ritual.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up-delay-3">
          <Button variant="hero" asChild>
            <a href="#menu">Explore Menu</a>
          </Button>
          <Button variant="editorial" asChild>
            <a href="#visit">Visit Us</a>
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-foreground/60 hover:text-foreground transition-colors duration-300 animate-bounce"
        aria-label="Scroll to content"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
};

export default HeroSection;
