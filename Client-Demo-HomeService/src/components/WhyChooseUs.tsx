import { Award, Clock, Shield, Users, CheckCircle, Star } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "Licensed & Certified",
    description: "All technicians are fully licensed, insured, and continuously trained on the latest techniques and safety standards.",
  },
  {
    icon: Clock,
    title: "Reliable & Punctual",
    description: "We arrive on time, work efficiently, and complete jobs right the first time with minimal disruption to your day.",
  },
  {
    icon: Shield,
    title: "Quality Guaranteed",
    description: "Every job comes with our satisfaction guarantee and warranty protection for your peace of mind.",
  },
  {
    icon: Users,
    title: "Local & Trusted",
    description: "Family-owned business serving the community for over 15 years with thousands of satisfied customers.",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              Why Choose HomeFirst
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 leading-tight">
              Experience You Can
              <span className="block text-primary">Count On</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-lg">
              As a family-owned business, we've built our reputation on quality workmanship, 
              honest pricing, and exceptional customer service. Here's what sets us apart.
            </p>

            {/* Credentials */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-foreground">Better Business Bureau A+ Rating</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-foreground">Fully Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-foreground">Background-Checked Technicians</span>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div>
                <div className="font-heading text-3xl md:text-4xl text-primary font-bold">15+</div>
                <div className="text-muted-foreground text-sm">Years in Business</div>
              </div>
              <div>
                <div className="font-heading text-3xl md:text-4xl text-primary font-bold">5K+</div>
                <div className="text-muted-foreground text-sm">Satisfied Customers</div>
              </div>
              <div>
                <div className="flex items-center gap-1 mb-1">
                  <div className="font-heading text-3xl md:text-4xl text-primary font-bold">4.9</div>
                  <Star className="w-6 h-6 text-accent fill-current" />
                </div>
                <div className="text-muted-foreground text-sm">Average Rating</div>
              </div>
            </div>
          </div>

          {/* Right - Trust Points */}
          <div className="grid sm:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <div
                key={reason.title}
                className="bg-card p-6 border border-border/50 shadow-card opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${0.15 * index}s` }}
              >
                <div className="w-14 h-14 bg-primary/10 flex items-center justify-center mb-4">
                  <reason.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading text-xl text-foreground mb-3">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
