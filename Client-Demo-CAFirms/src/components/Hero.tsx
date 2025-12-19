import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Award, Users } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  const trustIndicators = [
    { icon: Shield, text: "Licensed & Insured" },
    { icon: Award, text: "25+ Years Excellence" },
    { icon: Users, text: "500+ Clients Served" },
  ];

  return (
    <section className="relative bg-primary py-28 lg:py-36">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />
      
      <div className="container relative">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gold">
            Trusted Financial Expertise Since 1995
          </p>
          <h1 className="mb-6 text-4xl font-semibold leading-[1.1] text-primary-foreground lg:text-5xl xl:text-6xl">
            Strategic Financial Solutions
            <span className="block text-gold">for Your Business</span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-primary-foreground/75 lg:text-xl">
            Comprehensive accounting, tax planning, and advisory services 
            tailored to help individuals and businesses achieve their financial goals.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button variant="gold" size="lg" onClick={scrollToContact} className="min-w-[180px]">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="heroOutline" size="lg" onClick={scrollToServices} className="min-w-[180px]">
              Our Services
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-14 flex flex-wrap items-center justify-center gap-8 border-t border-primary-foreground/10 pt-10">
            {trustIndicators.map((item, index) => (
              <div key={index} className="flex items-center gap-2 text-primary-foreground/70">
                <item.icon className="h-4 w-4 text-gold" />
                <span className="text-sm font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />
    </section>
  );
};

export default Hero;
