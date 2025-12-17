import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import serviceOffice from "@/assets/service-office.jpg";
import serviceConstruction from "@/assets/service-construction.jpg";
import serviceSecurity from "@/assets/service-security.jpg";
import serviceToilet from "@/assets/service-toilet.jpg";
import serviceCafe from "@/assets/service-cafe.jpg";
import serviceCustom from "@/assets/service-custom.jpg";

const services = [
  {
    image: serviceOffice,
    title: "Portable Office Cabins",
    features: ["Climate-controlled interiors", "Electrical & IT infrastructure", "Multiple size configurations"],
  },
  {
    image: serviceConstruction,
    title: "Construction Site Offices",
    features: ["Heavy-duty construction", "Quick deployment", "Storage integration"],
  },
  {
    image: serviceSecurity,
    title: "Security & Toll Booths",
    features: ["360° visibility design", "Weather-resistant", "Compact footprint"],
  },
  {
    image: serviceToilet,
    title: "Portable Toilets",
    features: ["Hygienic materials", "Easy maintenance", "Water-efficient systems"],
  },
  {
    image: serviceCafe,
    title: "Modular Cafes",
    features: ["Commercial kitchen ready", "Customer-facing design", "Customizable layouts"],
  },
  {
    image: serviceCustom,
    title: "Custom Solutions",
    features: ["Bespoke engineering", "Multi-unit complexes", "Special requirements"],
  },
];

export function ServicesSection() {
  return (
    <section className="section-padding bg-neutral-50">
      <div className="container-wide">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="heading-section text-foreground mb-6">
            Comprehensive Modular Solutions
          </h2>
          <p className="body-large">
            From single-unit portable offices to complex multi-structure installations, 
            we deliver solutions engineered for your specific operational requirements.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-background rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="heading-card text-foreground mb-4">{service.title}</h3>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link to="/contact">
                  <Button variant="outlineLight" size="sm" className="w-full group-hover:border-foreground">
                    Get Quote
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
