import { Check } from "lucide-react";

const benefits = [
  "Over 25 years of industry experience",
  "Licensed CPAs and certified professionals",
  "Personalized service and dedicated support",
  "Proven track record with 500+ clients",
  "Industry-specific expertise",
  "Technology-driven solutions",
];

const stats = [
  { value: "25+", label: "Years Experience" },
  { value: "500+", label: "Clients Served" },
  { value: "15", label: "Expert CPAs" },
  { value: "98%", label: "Client Retention" },
];

const About = () => {
  return (
    <section id="about" className="bg-secondary/50 py-24 lg:py-32">
      <div className="container">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              About Our Firm
            </p>
            <h2 className="mb-6 text-3xl font-semibold text-foreground lg:text-4xl">
              Trusted Partners in Your Financial Success
            </h2>
            <p className="mb-5 leading-relaxed text-muted-foreground">
              Since 1995, Carter & Associates has been providing exceptional accounting 
              and advisory services to businesses and individuals throughout the United States. 
              Our team of experienced professionals is committed to delivering personalized 
              solutions that address your unique financial challenges.
            </p>
            <p className="mb-8 leading-relaxed text-muted-foreground">
              We pride ourselves on building lasting relationships with our clients, 
              offering the expertise of a large firm with the personalized attention 
              of a boutique practice.
            </p>
            
            <div className="grid gap-3 sm:grid-cols-2">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/10">
                    <Check className="h-3 w-3 text-gold" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-primary p-10 shadow-2xl lg:p-14">
              <div className="grid grid-cols-2 gap-10">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <p className="text-4xl font-bold text-gold lg:text-5xl">{stat.value}</p>
                    <p className="mt-2 text-sm font-medium text-primary-foreground/70">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full border-2 border-gold/20" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
