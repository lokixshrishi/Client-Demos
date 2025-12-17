import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative bg-neutral-50 overflow-hidden min-h-screen">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/Timeline 1.mov" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="container-wide relative z-10">
        <div className="flex flex-col justify-center items-center text-center min-h-screen py-16">
          <div className="max-w-4xl">
            <h1 className="heading-display text-white mb-6 animate-slide-up drop-shadow-lg">
              Modular Solutions Built for Performance
            </h1>
            <p className="body-large text-white/90 mb-8 animate-slide-up animate-delay-100 drop-shadow-md">
              We design, manufacture, and deliver premium portable cabins and modular structures 
              tailored to meet the demanding requirements of construction, industrial, and 
              commercial sectors worldwide.
            </p>
            <div className="flex flex-wrap gap-4 justify-center animate-slide-up animate-delay-200">
              <Link to="/contact">
                <Button variant="hero" size="xl">
                  Get Quote
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/gallery">
                <Button variant="heroOutline" size="xl" className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-white/30">
                  View Gallery
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
