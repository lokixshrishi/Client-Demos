import { Button } from "@/components/ui/button";
import { Wrench, Zap, Wind, Hammer, ClipboardCheck, Search, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Wrench,
    title: "Plumbing Services",
    description: "Complete plumbing solutions from leak repairs and drain cleaning to water heater installation and bathroom remodels.",
    features: ["Emergency repairs", "Drain cleaning", "Water heaters", "Fixture installation", "Pipe replacement"],
    image: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=600&q=80"
  },
  {
    icon: Zap,
    title: "Electrical Work",
    description: "Licensed electrical services including panel upgrades, rewiring, outlet installation, and smart home integration.",
    features: ["Panel upgrades", "Outlet installation", "Lighting design", "Safety inspections", "EV charger install"],
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&q=80"
  },
  {
    icon: Wind,
    title: "HVAC Services",
    description: "Heating and cooling expertise with installation, repair, maintenance, and energy-efficient system upgrades.",
    features: ["AC repair & install", "Heating systems", "Duct cleaning", "Smart thermostats", "Energy audits"],
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=600&q=80"
  },
  {
    icon: Hammer,
    title: "General Contracting",
    description: "Professional renovation and repair services for kitchens, bathrooms, basements, and whole-home projects.",
    features: ["Kitchen remodels", "Bathroom renovation", "Basement finishing", "Drywall & painting", "Carpentry"],
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80"
  },
  {
    icon: ClipboardCheck,
    title: "Maintenance Plans",
    description: "Scheduled maintenance programs to keep your home systems running efficiently and prevent costly breakdowns.",
    features: ["Annual inspections", "Priority scheduling", "Discounted repairs", "Filter changes", "System tune-ups"],
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=600&q=80"
  },
  {
    icon: Search,
    title: "Home Inspections",
    description: "Comprehensive inspections for buyers, sellers, and homeowners to identify issues before they become problems.",
    features: ["Pre-purchase", "Pre-listing", "Annual check-ups", "System evaluations", "Detailed reports"],
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=600&q=80"
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            What We Do
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Comprehensive Home Services
          </h2>
          <p className="text-muted-foreground text-lg">
            From emergency repairs to complete renovations, we deliver professional solutions 
            backed by 15+ years of experience and a satisfaction guarantee.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card shadow-card hover:shadow-elevated transition-all duration-500 hover:-translate-y-1 border border-border/50 overflow-hidden opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${0.08 * index}s` }}
            >
              {/* Service Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 bg-accent flex items-center justify-center shadow-elevated">
                    <service.icon className="w-6 h-6 text-foreground" />
                  </div>
                </div>
              </div>
              
              {/* Service Content */}
              <div className="p-6">
                <h3 className="font-heading text-xl md:text-2xl text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-5 leading-relaxed text-sm">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.slice(0, 4).map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-accent mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a 
                  href="#contact" 
                  className="inline-flex items-center gap-2 text-primary font-medium text-sm hover:gap-3 transition-all"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-primary p-8 md:p-12 text-center">
          <h3 className="font-heading text-2xl md:text-3xl text-primary-foreground mb-4">
            Need a Service Not Listed?
          </h3>
          <p className="text-primary-foreground/70 mb-6 max-w-xl mx-auto">
            We handle a wide range of home repairs and improvements. Contact us to discuss your specific needs.
          </p>
          <Button variant="hero" size="lg" asChild>
            <a href="tel:+15551234567">
              Get Free Estimate
              <ArrowRight className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
