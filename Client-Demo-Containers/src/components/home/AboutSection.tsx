import { Shield, Clock, Award, Users, Wrench, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "25+ Years of Expertise",
    description: "Decades of manufacturing excellence delivering reliable modular solutions across industries.",
  },
  {
    icon: Wrench,
    title: "Advanced Manufacturing",
    description: "State-of-the-art facilities equipped with modern technology for precision engineering.",
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "ISO-certified processes ensuring every unit meets stringent quality standards.",
  },
  {
    icon: Users,
    title: "Client Partnerships",
    description: "Long-term relationships with leading construction and industrial organizations.",
  },
  {
    icon: Award,
    title: "Industry Recognition",
    description: "Award-winning designs recognized for innovation and operational efficiency.",
  },
  {
    icon: TrendingUp,
    title: "Competitive Value",
    description: "Premium quality solutions delivered at market-competitive pricing.",
  },
];

export function AboutSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="heading-section text-foreground mb-6">
            Engineering Excellence in Modular Construction
          </h2>
          <p className="body-large">
            ModularPro combines decades of manufacturing expertise with modern technology 
            to deliver portable cabins that set industry benchmarks for durability, 
            functionality, and design.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-8 bg-neutral-50 hover:bg-background hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="heading-card text-foreground mb-3">{feature.title}</h3>
              <p className="body-base">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
