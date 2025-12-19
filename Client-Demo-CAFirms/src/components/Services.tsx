import { FileText, Calculator, TrendingUp, Shield, Building2, Users, ArrowRight } from "lucide-react";

const services = [
  {
    icon: FileText,
    title: "Tax Planning & Preparation",
    description: "Strategic tax planning and preparation services for individuals, businesses, and estates to minimize tax liability and ensure compliance.",
  },
  {
    icon: Calculator,
    title: "Audit & Assurance",
    description: "Independent audit and assurance services that provide stakeholders with confidence in your financial statements and internal controls.",
  },
  {
    icon: TrendingUp,
    title: "Business Advisory",
    description: "Expert guidance on business strategy, financial planning, and growth initiatives to help your organization reach its full potential.",
  },
  {
    icon: Shield,
    title: "Risk Management",
    description: "Comprehensive risk assessment and management services to protect your assets and ensure regulatory compliance.",
  },
  {
    icon: Building2,
    title: "Corporate Accounting",
    description: "Full-service accounting solutions including bookkeeping, financial reporting, and management accounting for businesses of all sizes.",
  },
  {
    icon: Users,
    title: "Wealth Management",
    description: "Personalized wealth management and retirement planning services to help you build and preserve your financial legacy.",
  },
];

const Services = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="bg-background py-24 lg:py-32">
      <div className="container">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Our Services
          </p>
          <h2 className="mb-5 text-3xl font-semibold text-foreground lg:text-4xl">
            Comprehensive Financial Services
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            We offer a full range of accounting and advisory services designed to meet 
            the unique needs of our clients across diverse industries.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative border border-border bg-card p-8 transition-all duration-300 hover:border-gold/40 hover:shadow-lg"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center bg-primary/5 transition-colors group-hover:bg-primary/10">
                <service.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mb-3 text-lg font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
              <button 
                onClick={scrollToContact}
                className="inline-flex items-center text-sm font-medium text-primary transition-colors hover:text-gold"
              >
                Learn more
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
