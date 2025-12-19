import { Award, Clock, Shield, Users, CheckCircle, Star, ThumbsUp, Headphones } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "Licensed & Certified",
    description: "All technicians are fully licensed, insured, and continuously trained on the latest techniques and safety standards.",
  },
  {
    icon: Clock,
    title: "On-Time, Every Time",
    description: "We respect your schedule. Our technicians arrive on time and complete jobs efficiently with minimal disruption.",
  },
  {
    icon: Shield,
    title: "Satisfaction Guaranteed",
    description: "Every job comes with our workmanship warranty. If you're not happy, we'll make it right at no extra cost.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Emergencies don't wait. Our team is available around the clock for urgent repairs and questions.",
  },
];

const credentials = [
  "Better Business Bureau A+ Rating",
  "Fully Licensed & Insured",
  "Background-Checked Technicians",
  "Transparent Upfront Pricing",
  "Written Warranties on All Work",
  "Locally Owned & Operated",
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="py-20 md:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              Why HomeFirst
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 leading-tight">
              The HomeFirst
              <span className="block text-primary">Difference</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-lg">
              For over 15 years, we've built our reputation on quality workmanship, 
              honest pricing, and exceptional customer service. We treat every home like our own.
            </p>

            {/* Credentials Grid */}
            <div className="grid sm:grid-cols-2 gap-3 mb-10">
              {credentials.map((credential, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground text-sm">{credential}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 p-6 bg-secondary/50 border border-border/50">
              <div className="text-center">
                <div className="font-heading text-3xl md:text-4xl text-primary font-bold">15+</div>
                <div className="text-muted-foreground text-xs uppercase tracking-wider mt-1">Years</div>
              </div>
              <div className="text-center border-x border-border/50">
                <div className="font-heading text-3xl md:text-4xl text-primary font-bold">5K+</div>
                <div className="text-muted-foreground text-xs uppercase tracking-wider mt-1">Customers</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-1">
                  <div className="font-heading text-3xl md:text-4xl text-primary font-bold">4.9</div>
                  <Star className="w-5 h-5 text-accent fill-current" />
                </div>
                <div className="text-muted-foreground text-xs uppercase tracking-wider mt-1">Rating</div>
              </div>
            </div>
          </div>

          {/* Right - Trust Points */}
          <div className="grid sm:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <div
                key={reason.title}
                className="bg-card p-6 border border-border/50 shadow-card hover:shadow-elevated hover:-translate-y-1 transition-all duration-300 opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${0.12 * index}s` }}
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
