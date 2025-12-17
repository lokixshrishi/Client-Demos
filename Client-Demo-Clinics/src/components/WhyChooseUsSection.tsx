import { Card, CardContent } from "@/components/ui/card";
import { Shield, Award, Users, Clock } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Certified Experts",
    description: "Board-certified physicians with extensive training",
  },
  {
    icon: Award,
    title: "Excellence in Care",
    description: "Award-winning patient care and outcomes",
  },
  {
    icon: Users,
    title: "Patient-Centered",
    description: "Your comfort and wellbeing come first",
  },
  {
    icon: Clock,
    title: "Convenient Hours",
    description: "Flexible scheduling to fit your lifestyle",
  },
];

const WhyChooseUsSection = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Why Families Trust{" "}
              <span className="text-primary">Evergreen Clinic</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              For over 15 years, we've been the healthcare partner families rely on. 
              Our commitment to compassionate, personalized care has made us a trusted 
              name in the community.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <Card
                  key={feature.title}
                  variant="flat"
                  className="bg-secondary/50 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-5">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <feature.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">
                          {feature.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-primary/5 rounded-3xl -rotate-3" />
            <div className="relative bg-gradient-to-br from-primary/20 to-accent/10 rounded-2xl p-8 lg:p-12">
              <div className="absolute top-6 right-6 w-16 h-16 bg-accent/20 rounded-full blur-xl animate-gentle-glow" />
              <blockquote className="relative z-10">
                <p className="text-lg md:text-xl text-foreground italic mb-6 leading-relaxed">
                  "The care I received at Evergreen Clinic was exceptional. The doctors 
                  took time to listen and explain everything thoroughly. I finally feel 
                  like I have a healthcare partner I can trust."
                </p>
                <footer>
                  <div className="font-semibold text-foreground">Sarah Mitchell</div>
                  <div className="text-sm text-muted-foreground">Patient since 2019</div>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
