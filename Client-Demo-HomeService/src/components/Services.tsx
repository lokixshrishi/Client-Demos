import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Plumbing Services",
    description: "Leak repairs, drain cleaning, fixture installation, water heater service, and emergency plumbing repairs available 24/7.",
    features: ["Emergency repairs", "Drain cleaning", "Water heaters", "Fixture installation"],
    image: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Electrical Work",
    description: "Licensed electrical services including panel upgrades, outlet installation, lighting, and electrical troubleshooting.",
    features: ["Panel upgrades", "Outlet installation", "Lighting solutions", "Safety inspections"],
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "HVAC Services",
    description: "Complete heating and cooling solutions with installation, repair, maintenance, and energy-efficient upgrades.",
    features: ["AC repair & install", "Heating systems", "Duct cleaning", "Energy audits"],
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "General Repairs",
    description: "Professional handyman services for all your home repair needs, from minor fixes to major renovations.",
    features: ["Drywall repair", "Carpentry work", "Painting", "Home maintenance"],
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Preventive Maintenance",
    description: "Scheduled maintenance programs to keep your home systems running efficiently and prevent costly breakdowns.",
    features: ["Annual inspections", "System tune-ups", "Filter changes", "Safety checks"],
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Home Inspections",
    description: "Comprehensive home inspections for buyers, sellers, and homeowners to identify potential issues early.",
    features: ["Pre-purchase inspections", "Annual check-ups", "System evaluations", "Detailed reports"],
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
            Our Services
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Complete Home Service Solutions
          </h2>
          <p className="text-muted-foreground text-lg">
            From emergency repairs to routine maintenance, we provide reliable, professional services to keep your home running smoothly.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card shadow-card hover:shadow-elevated transition-all duration-500 hover:-translate-y-2 border border-border/50 overflow-hidden opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              {/* Service Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-colors" />
              </div>
              
              {/* Service Content */}
              <div className="p-6">
                <h3 className="font-heading text-xl md:text-2xl text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-accent mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">Need a service not listed? We handle a wide range of home repairs and maintenance.</p>
          <Button variant="default" size="lg" asChild>
            <a href="tel:+15551234567">
              Get Free Estimate
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
