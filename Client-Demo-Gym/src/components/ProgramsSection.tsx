import { Dumbbell, Flame, Users, Target } from "lucide-react";

const programs = [
  {
    icon: Dumbbell,
    title: "Strength Training",
    description: "Build raw power with structured progressive overload programs.",
    accent: "primary",
  },
  {
    icon: Flame,
    title: "Conditioning",
    description: "High-intensity sessions designed to push your limits.",
    accent: "accent",
  },
  {
    icon: Target,
    title: "Personal Training",
    description: "One-on-one coaching tailored to your specific goals.",
    accent: "gold",
  },
  {
    icon: Users,
    title: "Group Classes",
    description: "Train together. Push harder. Achieve more.",
    accent: "primary",
  },
];

export const ProgramsSection = () => {
  return (
    <section id="programs" className="py-32 px-6 bg-background relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary))_0%,transparent_50%)]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-gold text-xs uppercase tracking-[0.3em] font-medium">Our Programs</span>
          <h2 className="font-display text-4xl md:text-6xl text-foreground mt-4 mb-6">
            Train Your Way
          </h2>
          <p className="text-foreground/50 max-w-lg mx-auto">
            Choose the path that aligns with your goals. Every program designed for results.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => (
            <div
              key={program.title}
              className="group relative bg-card border border-border/50 p-8 hover-lift cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className={`w-14 h-14 flex items-center justify-center mb-6 border border-border group-hover:border-gold transition-colors duration-300`}>
                <program.icon className="w-6 h-6 text-foreground/70 group-hover:text-gold transition-colors duration-300" />
              </div>

              {/* Content */}
              <h3 className="font-display text-xl text-foreground mb-3">{program.title}</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">{program.description}</p>

              {/* Hover Line */}
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>

        {/* Winter Message */}
        <div className="mt-20 text-center">
          <div className="inline-block glass-card px-8 py-4">
            <p className="text-sm text-foreground/70 tracking-wide">
              <span className="text-gold">Winter Special:</span> All programs include complimentary nutrition guidance this season.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
