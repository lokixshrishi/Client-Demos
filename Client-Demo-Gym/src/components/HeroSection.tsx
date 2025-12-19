import { Button } from "./ui/button";
import heroImage from "@/assets/hero-gym.jpg";

export const HeroSection = () => {
  const scrollToMembership = () => {
    document.getElementById("membership")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Premium gym interior with moody lighting"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80" />
      </div>

      {/* Ambient Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[150px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[150px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">
        {/* Seasonal Tag */}
        <div className="inline-flex items-center gap-2 mb-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <div className="w-8 h-px bg-gold" />
          <span className="text-gold text-xs uppercase tracking-[0.3em] font-medium">Winter Season 2024</span>
          <div className="w-8 h-px bg-gold" />
        </div>

        {/* Main Headline */}
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-medium text-foreground mb-6 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          Finish The Year
          <span className="block text-gradient-gold">Powerful</span>
        </h1>

        {/* Subtext */}
        <p className="text-lg md:text-xl text-foreground/60 max-w-xl mx-auto mb-12 font-light animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
          Train with purpose. Build discipline. Enter the new year stronger than ever.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
          <Button variant="gold" size="xl" onClick={scrollToMembership}>
            Start Training
          </Button>
          <Button variant="elegant" size="xl" onClick={() => document.getElementById("programs")?.scrollIntoView({ behavior: "smooth" })}>
            View Programs
          </Button>
        </div>

        {/* Stats */}
        <div className="flex items-center justify-center gap-12 mt-20 animate-fade-in-up" style={{ animationDelay: "1s" }}>
          {[
            { value: "15+", label: "Expert Trainers" },
            { value: "5000", label: "Members Strong" },
            { value: "24/7", label: "Access" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-3xl md:text-4xl text-foreground font-medium">{stat.value}</div>
              <div className="text-xs uppercase tracking-[0.2em] text-foreground/40 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in" style={{ animationDelay: "1.2s" }}>
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-foreground/30 to-transparent" />
      </div>
    </section>
  );
};
