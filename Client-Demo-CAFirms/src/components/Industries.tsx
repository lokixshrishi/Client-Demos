import { Building, Stethoscope, Factory, ShoppingCart, Home, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";

const industries = [
  {
    icon: Building,
    title: "Real Estate",
    description: "Property management, REITs, and real estate investment advisory.",
    clients: "120+ Clients",
  },
  {
    icon: Stethoscope,
    title: "Healthcare",
    description: "Medical practices, hospitals, and healthcare organizations.",
    clients: "85+ Clients",
  },
  {
    icon: Factory,
    title: "Manufacturing",
    description: "Production companies, supply chain, and industrial operations.",
    clients: "95+ Clients",
  },
  {
    icon: ShoppingCart,
    title: "Retail & E-Commerce",
    description: "Brick-and-mortar stores, online retailers, and omnichannel businesses.",
    clients: "110+ Clients",
  },
  {
    icon: Home,
    title: "Construction",
    description: "General contractors, developers, and construction firms.",
    clients: "75+ Clients",
  },
  {
    icon: Briefcase,
    title: "Professional Services",
    description: "Law firms, consulting agencies, and professional partnerships.",
    clients: "130+ Clients",
  },
];

const Industries = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="industries" className="bg-background py-20 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-gold">
            Industries We Serve
          </p>
          <h2 className="mb-4 text-3xl font-semibold text-foreground lg:text-4xl">
            Specialized Industry Expertise
          </h2>
          <p className="text-muted-foreground">
            We bring deep industry knowledge to deliver tailored financial solutions 
            across diverse sectors.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="group border border-border bg-card p-6 hover:border-gold/50"
            >
              <div className="mb-4 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center bg-secondary">
                  <industry.icon className="h-6 w-6 text-primary" />
                </div>
                <span className="text-xs font-medium text-gold">{industry.clients}</span>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                {industry.title}
              </h3>
              <p className="mb-4 text-sm text-muted-foreground">
                {industry.description}
              </p>
              <Button 
                variant="ghost" 
                size="sm" 
                className="px-0 text-primary hover:bg-transparent hover:text-gold"
                onClick={scrollToContact}
              >
                Learn More →
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
