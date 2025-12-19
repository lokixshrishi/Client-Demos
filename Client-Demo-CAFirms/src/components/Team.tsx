import { Linkedin, Mail } from "lucide-react";

const team = [
  {
    name: "Robert Carter",
    title: "Managing Partner, CPA",
    description: "30+ years of experience in tax planning and business advisory.",
    initials: "RC",
  },
  {
    name: "Sarah Mitchell",
    title: "Partner, CPA, CFE",
    description: "Specializes in audit services and fraud examination.",
    initials: "SM",
  },
  {
    name: "David Chen",
    title: "Partner, CPA, MBA",
    description: "Expert in corporate accounting and financial consulting.",
    initials: "DC",
  },
  {
    name: "Jennifer Adams",
    title: "Senior Manager, CPA",
    description: "Focuses on individual tax planning and wealth management.",
    initials: "JA",
  },
];

const Team = () => {
  return (
    <section id="team" className="bg-background py-24 lg:py-32">
      <div className="container">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Our Leadership
          </p>
          <h2 className="mb-5 text-3xl font-semibold text-foreground lg:text-4xl">
            Meet Our Team
          </h2>
          <p className="leading-relaxed text-muted-foreground">
            Our leadership team brings decades of combined experience and a 
            commitment to excellence in everything we do.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, index) => (
            <div key={index} className="group text-center">
              <div className="relative mx-auto mb-6 flex h-36 w-36 items-center justify-center bg-primary transition-all duration-300 group-hover:bg-navy-light">
                <span className="text-3xl font-bold text-gold">
                  {member.initials}
                </span>
                {/* Hover overlay with social links */}
                <div className="absolute inset-0 flex items-center justify-center gap-3 bg-primary/90 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <button className="flex h-9 w-9 items-center justify-center bg-gold/20 text-gold transition-colors hover:bg-gold hover:text-primary">
                    <Linkedin className="h-4 w-4" />
                  </button>
                  <button className="flex h-9 w-9 items-center justify-center bg-gold/20 text-gold transition-colors hover:bg-gold hover:text-primary">
                    <Mail className="h-4 w-4" />
                  </button>
                </div>
              </div>
              <h3 className="mb-1 text-lg font-semibold text-foreground">
                {member.name}
              </h3>
              <p className="mb-3 text-sm font-medium text-gold">
                {member.title}
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {member.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
