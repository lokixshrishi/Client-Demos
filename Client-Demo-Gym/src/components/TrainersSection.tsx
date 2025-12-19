import trainer1 from "@/assets/trainer-1.jpg";
import trainer2 from "@/assets/trainer-2.jpg";
import trainer3 from "@/assets/trainer-3.jpg";

const trainers = [
  {
    name: "Marcus Chen",
    role: "Strength & Power",
    description: "15 years of elite athletic training",
    image: trainer1,
  },
  {
    name: "Sofia Rodriguez",
    role: "Conditioning & HIIT",
    description: "Former Olympic athlete, certified in sports nutrition",
    image: trainer2,
  },
  {
    name: "James Mitchell",
    role: "Personal Training",
    description: "Specializing in body transformation",
    image: trainer3,
  },
];

export const TrainersSection = () => {
  return (
    <section id="trainers" className="py-32 px-6 bg-background relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-gold text-xs uppercase tracking-[0.3em] font-medium">Our Team</span>
          <h2 className="font-display text-4xl md:text-6xl text-foreground mt-4 mb-6">
            Elite Trainers
          </h2>
          <p className="text-foreground/50 max-w-lg mx-auto">
            Learn from the best. Our trainers bring decades of combined experience.
          </p>
        </div>

        {/* Trainers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trainers.map((trainer, index) => (
            <div
              key={trainer.name}
              className="group relative overflow-hidden hover-lift cursor-pointer"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Image */}
              <div className="relative aspect-[4/5] overflow-hidden bg-card">
                <img
                  src={trainer.image}
                  alt={`${trainer.name} - ${trainer.role}`}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-display text-2xl text-foreground mb-1">{trainer.name}</h3>
                <p className="text-gold text-sm uppercase tracking-wider mb-2">{trainer.role}</p>
                <p className="text-sm text-foreground/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {trainer.description}
                </p>
              </div>

              {/* Hover Border */}
              <div className="absolute inset-0 border border-transparent group-hover:border-gold/30 transition-colors duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
