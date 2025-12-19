import { TrendingUp, DollarSign, Clock, Award, ArrowRight } from "lucide-react";

const caseStudies = [
  {
    industry: "Manufacturing",
    title: "Cost Reduction for Regional Manufacturer",
    challenge: "A mid-sized manufacturing company was struggling with rising operational costs and inefficient financial processes.",
    solution: "Implemented streamlined accounting systems and identified $2.3M in tax savings through strategic planning.",
    results: [
      { icon: DollarSign, value: "$2.3M", label: "Tax Savings" },
      { icon: TrendingUp, value: "18%", label: "Cost Reduction" },
    ],
  },
  {
    industry: "Healthcare",
    title: "Compliance Overhaul for Medical Group",
    challenge: "A growing medical practice faced regulatory compliance challenges and needed to restructure their financial operations.",
    solution: "Conducted comprehensive audit and implemented new compliance frameworks meeting all healthcare regulations.",
    results: [
      { icon: Award, value: "100%", label: "Compliance" },
      { icon: Clock, value: "45%", label: "Time Saved" },
    ],
  },
  {
    industry: "Real Estate",
    title: "Portfolio Optimization for REIT",
    challenge: "A real estate investment trust needed strategic guidance to optimize their property portfolio and tax structure.",
    solution: "Developed tax-efficient restructuring plan and provided ongoing advisory for property acquisitions.",
    results: [
      { icon: DollarSign, value: "$5.8M", label: "Value Created" },
      { icon: TrendingUp, value: "22%", label: "ROI Increase" },
    ],
  },
];

const CaseStudies = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="case-studies" className="bg-primary py-24 lg:py-32">
      <div className="container">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Case Studies
          </p>
          <h2 className="mb-5 text-3xl font-semibold text-primary-foreground lg:text-4xl">
            Client Success Stories
          </h2>
          <p className="leading-relaxed text-primary-foreground/70">
            See how we've helped businesses like yours achieve their financial goals 
            through strategic planning and expert guidance.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="group bg-background p-8 shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-gold">
                {study.industry}
              </p>
              <h3 className="mb-4 text-xl font-semibold text-foreground">
                {study.title}
              </h3>
              
              <div className="mb-4">
                <p className="mb-1.5 text-xs font-semibold uppercase tracking-wider text-foreground/60">Challenge</p>
                <p className="text-sm leading-relaxed text-muted-foreground">{study.challenge}</p>
              </div>
              
              <div className="mb-6">
                <p className="mb-1.5 text-xs font-semibold uppercase tracking-wider text-foreground/60">Solution</p>
                <p className="text-sm leading-relaxed text-muted-foreground">{study.solution}</p>
              </div>

              <div className="mb-6 flex gap-8 border-t border-border pt-6">
                {study.results.map((result, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center bg-gold/10">
                      <result.icon className="h-5 w-5 text-gold" />
                    </div>
                    <div>
                      <p className="text-xl font-bold text-foreground">{result.value}</p>
                      <p className="text-xs text-muted-foreground">{result.label}</p>
                    </div>
                  </div>
                ))}
              </div>

              <button 
                onClick={scrollToContact}
                className="inline-flex items-center text-sm font-medium text-primary transition-colors hover:text-gold"
              >
                Discuss Your Project
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
