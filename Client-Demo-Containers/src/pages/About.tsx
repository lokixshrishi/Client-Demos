import { Layout } from "@/components/layout/Layout";
import { Shield, Clock, Award, Users, Wrench, TrendingUp, CheckCircle } from "lucide-react";

const milestones = [
  { year: "1998", title: "Company Founded", description: "Started with a small manufacturing unit in Delhi" },
  { year: "2005", title: "ISO Certification", description: "Achieved ISO 9001:2000 quality management certification" },
  { year: "2010", title: "Expansion", description: "Opened second manufacturing facility, doubled production capacity" },
  { year: "2018", title: "National Presence", description: "Expanded operations to 15 states across India" },
  { year: "2023", title: "Innovation Hub", description: "Launched R&D center for sustainable modular solutions" },
];

const values = [
  {
    icon: Shield,
    title: "Quality First",
    description: "Every unit undergoes rigorous quality checks before delivery.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "We understand project timelines and deliver as promised.",
  },
  {
    icon: Award,
    title: "Innovation",
    description: "Continuously improving designs for better performance.",
  },
  {
    icon: Users,
    title: "Customer Focus",
    description: "Long-term partnerships built on trust and reliability.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-neutral-50 section-padding">
        <div className="container-wide">
          <div className="max-w-4xl">
            <h1 className="heading-display text-foreground mb-6 animate-slide-up">
              Building India's Infrastructure, One Cabin at a Time
            </h1>
            <p className="body-large max-w-3xl animate-slide-up animate-delay-100">
              For over two decades, ModularPro has been at the forefront of portable 
              cabin manufacturing, delivering solutions that power construction sites, 
              industrial facilities, and commercial operations across the nation.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="heading-section text-foreground mb-6">Our Story</h2>
              <div className="space-y-4 body-base">
                <p>
                  Founded in 1998, ModularPro began as a small fabrication workshop with a 
                  vision to transform how temporary structures are built and deployed. What 
                  started with three employees and basic machinery has grown into one of 
                  India's leading portable cabin manufacturers.
                </p>
                <p>
                  Today, we operate from two state-of-the-art manufacturing facilities spanning 
                  over 50,000 square feet, employing more than 200 skilled professionals. Our 
                  integrated production capabilities allow us to handle projects of any scale, 
                  from single portable toilets to multi-story modular complexes.
                </p>
                <p>
                  We have successfully delivered over 500 projects across India, serving sectors 
                  including construction, oil & gas, infrastructure, healthcare, and education. 
                  Our client list includes some of India's largest infrastructure companies and 
                  government organizations.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-neutral-50 p-8 rounded-xl text-center">
                <div className="text-4xl font-bold text-primary mb-2">25+</div>
                <div className="text-sm text-muted-foreground">Years in Business</div>
              </div>
              <div className="bg-neutral-50 p-8 rounded-xl text-center">
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="bg-neutral-50 p-8 rounded-xl text-center">
                <div className="text-4xl font-bold text-primary mb-2">200+</div>
                <div className="text-sm text-muted-foreground">Team Members</div>
              </div>
              <div className="bg-neutral-50 p-8 rounded-xl text-center">
                <div className="text-4xl font-bold text-primary mb-2">15</div>
                <div className="text-sm text-muted-foreground">States Served</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-neutral-50">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h2 className="heading-section text-foreground mb-6">Our Values</h2>
            <p className="body-large max-w-2xl mx-auto">
              The principles that guide every decision we make and every product we deliver.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="heading-card text-foreground mb-3">{value.title}</h3>
                <p className="body-base">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h2 className="heading-section text-foreground mb-6">Our Journey</h2>
            <p className="body-large max-w-2xl mx-auto">
              Key milestones that have shaped our growth over the years.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={milestone.year} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-primary-foreground" />
                  </div>
                  {index < milestones.length - 1 && (
                    <div className="w-0.5 flex-1 bg-border mt-2" />
                  )}
                </div>
                <div className="pb-8">
                  <div className="text-sm font-semibold text-primary mb-1">{milestone.year}</div>
                  <h3 className="heading-card text-foreground mb-2">{milestone.title}</h3>
                  <p className="body-base">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
