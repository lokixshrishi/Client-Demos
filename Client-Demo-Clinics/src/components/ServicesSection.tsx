import { Card, CardContent } from "@/components/ui/card";
import { Stethoscope, Heart, Bone, Baby, FlaskConical } from "lucide-react";

const services = [
  {
    icon: Stethoscope,
    title: "General Medicine",
    description: "Comprehensive primary care for all ages",
  },
  {
    icon: Heart,
    title: "Cardiology",
    description: "Expert heart health and cardiovascular care",
  },
  {
    icon: Bone,
    title: "Orthopedics",
    description: "Bone, joint, and muscle treatments",
  },
  {
    icon: Baby,
    title: "Pediatrics",
    description: "Gentle care for infants and children",
  },
  {
    icon: FlaskConical,
    title: "Lab Services",
    description: "On-site diagnostics and testing",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-muted-foreground text-lg">
            Comprehensive healthcare services tailored to your needs, 
            delivered with expertise and compassion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {services.map((service, index) => (
            <Card
              key={service.title}
              variant="elevated"
              className="group cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <service.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
