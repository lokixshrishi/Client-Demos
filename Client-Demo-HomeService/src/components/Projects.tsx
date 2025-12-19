import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Complete Kitchen Renovation",
    category: "Renovation",
    description: "Full kitchen remodel including plumbing, electrical, and custom cabinetry installation.",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800&q=80",
    featured: true,
  },
  {
    title: "HVAC System Upgrade",
    category: "HVAC",
    description: "Energy-efficient heating and cooling system installation with smart thermostat integration.",
    image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Electrical Panel Upgrade",
    category: "Electrical",
    description: "200-amp panel upgrade with whole-home surge protection for modern electrical demands.",
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Bathroom Remodel",
    category: "Plumbing",
    description: "Luxury bathroom renovation with custom tile work and modern fixtures.",
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Outdoor Living Space",
    category: "General",
    description: "Complete deck construction with electrical outlets and outdoor lighting installation.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
  },
];

const Projects = () => {
  const featuredProject = projects.find(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            Our Portfolio
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Recent Projects
          </h2>
          <p className="text-muted-foreground text-lg">
            Take a look at some of our recent work. Every project reflects our commitment to quality craftsmanship and customer satisfaction.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
          {/* Featured Project */}
          {featuredProject && (
            <div className="lg:row-span-2 group relative overflow-hidden bg-card shadow-card hover:shadow-elevated transition-all duration-500 opacity-0 animate-fade-in-up">
              <div className="absolute inset-0">
                <img
                  src={featuredProject.image}
                  alt={featuredProject.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent" />
              </div>
              <div className="relative h-full min-h-[500px] lg:min-h-full flex flex-col justify-end p-8">
                <span className="inline-block bg-accent text-foreground px-3 py-1 text-xs font-semibold uppercase tracking-wider mb-4 w-fit">
                  {featuredProject.category}
                </span>
                <h3 className="font-heading text-2xl md:text-3xl text-primary-foreground mb-3">
                  {featuredProject.title}
                </h3>
                <p className="text-primary-foreground/80 mb-6 max-w-md">
                  {featuredProject.description}
                </p>
              </div>
            </div>
          )}

          {/* Other Projects */}
          {otherProjects.map((project, index) => (
            <div
              key={project.title}
              className="group relative overflow-hidden bg-card shadow-card hover:shadow-elevated transition-all duration-500 opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <div className="relative h-64">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="inline-block bg-accent/90 text-foreground px-2 py-0.5 text-xs font-semibold uppercase tracking-wider mb-2">
                    {project.category}
                  </span>
                  <h3 className="font-heading text-xl text-primary-foreground mb-1">
                    {project.title}
                  </h3>
                  <p className="text-primary-foreground/70 text-sm line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <a href="#contact">
              Discuss Your Project
              <ArrowRight className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
