import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import serviceOffice from "@/assets/service-office.jpg";
import serviceConstruction from "@/assets/service-construction.jpg";
import serviceSecurity from "@/assets/service-security.jpg";
import serviceToilet from "@/assets/service-toilet.jpg";
import serviceCafe from "@/assets/service-cafe.jpg";
import serviceCustom from "@/assets/service-custom.jpg";

const services = [
  {
    id: "office",
    image: serviceOffice,
    title: "Portable Office Cabins",
    description: "Fully-equipped portable offices designed for immediate deployment. Perfect for construction sites, remote locations, and temporary project offices.",
    features: [
      "Climate-controlled HVAC systems",
      "Complete electrical infrastructure",
      "IT & networking provisions",
      "Multiple size options (10x10 to 40x20 ft)",
      "Modular expansion capability",
      "Fire-resistant construction",
    ],
    specs: {
      sizes: "10x10 ft to 40x20 ft",
      capacity: "2-20 persons",
      delivery: "7-14 days",
    },
  },
  {
    id: "construction",
    image: serviceConstruction,
    title: "Construction Site Offices",
    description: "Heavy-duty cabins built to withstand demanding construction environments. Integrated storage and meeting room configurations available.",
    features: [
      "Industrial-grade materials",
      "Forklift-compatible base",
      "Integrated storage units",
      "Meeting room configurations",
      "Site manager offices",
      "Quick assembly design",
    ],
    specs: {
      sizes: "12x12 ft to 50x24 ft",
      capacity: "4-30 persons",
      delivery: "10-21 days",
    },
  },
  {
    id: "security",
    image: serviceSecurity,
    title: "Security & Toll Booths",
    description: "Compact, weather-resistant booths with optimal visibility. Ideal for gate entries, toll plazas, and perimeter security.",
    features: [
      "360° glass visibility",
      "Climate control systems",
      "Counter and cash drawer",
      "Communication equipment ready",
      "Emergency exit provisions",
      "Anti-vandal construction",
    ],
    specs: {
      sizes: "4x4 ft to 8x8 ft",
      capacity: "1-2 persons",
      delivery: "5-10 days",
    },
  },
  {
    id: "toilets",
    image: serviceToilet,
    title: "Portable Toilets",
    description: "Hygienic, durable sanitation units for construction sites, events, and remote locations. Multiple configurations from single units to blocks.",
    features: [
      "Hygienic FRP construction",
      "Self-contained waste system",
      "Water-efficient fixtures",
      "Easy cleaning access",
      "Handicap-accessible options",
      "Block configurations available",
    ],
    specs: {
      sizes: "Single to 8-unit blocks",
      capacity: "50-500 users/day",
      delivery: "3-10 days",
    },
  },
  {
    id: "cafe",
    image: serviceCafe,
    title: "Modular Cafes",
    description: "Commercial-grade modular cafes with full kitchen infrastructure. Perfect for construction sites, industrial areas, and temporary retail.",
    features: [
      "Commercial kitchen ready",
      "Food-grade materials",
      "Customer serving areas",
      "Storage and refrigeration",
      "Exhaust and ventilation",
      "Customizable layouts",
    ],
    specs: {
      sizes: "20x10 ft to 40x20 ft",
      capacity: "20-100 seats",
      delivery: "14-28 days",
    },
  },
  {
    id: "custom",
    image: serviceCustom,
    title: "Custom Solutions",
    description: "Bespoke modular structures designed to your exact specifications. Multi-story complexes, specialized facilities, and unique requirements.",
    features: [
      "Bespoke engineering",
      "Multi-story capability",
      "Specialized facilities",
      "Laboratory configurations",
      "Medical facility specs",
      "Any custom requirement",
    ],
    specs: {
      sizes: "Custom dimensions",
      capacity: "Project-specific",
      delivery: "21-60 days",
    },
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-neutral-50 section-padding">
        <div className="container-wide">
          <div className="max-w-4xl">
            <h1 className="heading-display text-foreground mb-6 animate-slide-up">
              Modular Solutions for Every Requirement
            </h1>
            <p className="body-large max-w-3xl animate-slide-up animate-delay-100">
              From compact security booths to multi-unit complexes, we manufacture 
              portable cabins designed for durability, functionality, and rapid deployment.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-dense" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="relative overflow-hidden rounded-2xl shadow-lg">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-auto aspect-[4/3] object-cover"
                    />
                  </div>
                </div>
                <div className={index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                  <h2 className="heading-section text-foreground mb-4">{service.title}</h2>
                  <p className="body-large mb-6">{service.description}</p>
                  
                  <ul className="grid sm:grid-cols-2 gap-3 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="grid grid-cols-3 gap-4 p-4 bg-neutral-50 rounded-lg mb-8">
                    <div>
                      <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Sizes</div>
                      <div className="text-sm font-medium text-foreground">{service.specs.sizes}</div>
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Capacity</div>
                      <div className="text-sm font-medium text-foreground">{service.specs.capacity}</div>
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Delivery</div>
                      <div className="text-sm font-medium text-foreground">{service.specs.delivery}</div>
                    </div>
                  </div>

                  <Link to="/contact">
                    <Button variant="default" size="lg">
                      Request Quote
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
