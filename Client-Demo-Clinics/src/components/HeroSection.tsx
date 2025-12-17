import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-clinic.jpg";
import { useState } from "react";
import BookingModal from "./BookingModal";
import ContactModal from "./ContactModal";

const HeroSection = () => {
  const [videoError, setVideoError] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      {/* Background video with fallback to image */}
      <div className="absolute inset-0">
        {!videoError ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="w-full h-full object-cover"
            onError={() => setVideoError(true)}
          >
            <source src="/clinic-video.mp4" type="video/mp4" />
          </video>
        ) : (
          <img
            src={heroImage}
            alt="Modern medical clinic interior with comfortable seating and natural light"
            className="w-full h-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-background/50 to-background/20" />
      </div>

      {/* Subtle decorative elements */}
      <div className="absolute top-40 right-20 w-64 h-64 bg-primary/5 blur-3xl animate-gentle-glow" />
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-accent/5 blur-3xl animate-gentle-glow animation-delay-600" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-2xl">


          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 animate-fade-in-up animation-delay-200">
            Your Health,{" "}
            <span className="text-primary">Our Priority</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed animate-fade-in-up animation-delay-400">
            Experience compassionate care in a warm, welcoming environment. 
            Our dedicated team is here to support your wellness journey, 
            every step of the way.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-600">
            <Button 
              variant="hero" 
              size="xl"
              onClick={() => setIsBookingOpen(true)}
            >
              Book a Visit
            </Button>
            <Button 
              variant="hero-outline" 
              size="xl"
              onClick={() => setIsContactOpen(true)}
            >
              Contact Clinic
            </Button>
          </div>


        </div>
      </div>

      {/* Modals */}
      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
      />
      <ContactModal 
        isOpen={isContactOpen} 
        onClose={() => setIsContactOpen(false)} 
      />
    </section>
  );
};

export default HeroSection;
