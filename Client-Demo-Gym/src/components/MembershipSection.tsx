import { Check, Sparkles } from "lucide-react";
import { Button } from "./ui/button";

const plans = [
  {
    name: "Essential",
    price: "79",
    period: "month",
    description: "Everything you need to start your journey.",
    features: [
      "Full gym access",
      "Locker room amenities",
      "Basic fitness assessment",
      "Mobile app access",
    ],
    featured: false,
  },
  {
    name: "Elite",
    price: "149",
    period: "month",
    description: "For those committed to excellence.",
    features: [
      "24/7 unlimited access",
      "All group classes included",
      "Monthly trainer check-in",
      "Nutrition guidance",
      "Priority equipment booking",
      "Guest passes (2/month)",
    ],
    featured: true,
    badge: "Most Popular",
  },
  {
    name: "Private",
    price: "299",
    period: "month",
    description: "The ultimate personal training experience.",
    features: [
      "Everything in Elite",
      "Weekly PT sessions (4x)",
      "Custom meal planning",
      "Recovery room access",
      "Quarterly body composition",
      "Unlimited guest passes",
    ],
    featured: false,
  },
];

export const MembershipSection = () => {
  return (
    <section id="membership" className="py-32 px-6 bg-secondary/30 relative overflow-hidden">
      {/* Subtle Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gold/5 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-gold text-xs uppercase tracking-[0.3em] font-medium">Membership</span>
          <h2 className="font-display text-4xl md:text-6xl text-foreground mt-4 mb-6">
            Invest In Yourself
          </h2>
          <p className="text-foreground/50 max-w-lg mx-auto">
            Choose your commitment level. No long-term contracts required.
          </p>
        </div>

        {/* Winter Offer Banner */}
        <div className="flex items-center justify-center gap-3 mb-12">
          <Sparkles className="w-4 h-4 text-gold" />
          <span className="text-sm text-foreground/70">
            <span className="text-gold font-medium">Winter Offer:</span> First month at 50% off. Limited time.
          </span>
          <Sparkles className="w-4 h-4 text-gold" />
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-card border p-8 lg:p-10 transition-all duration-500 ${
                plan.featured
                  ? "border-gold/50 scale-105 glow-gold"
                  : "border-border/50 hover:border-border"
              }`}
            >
              {/* Featured Badge */}
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-gold text-gold-foreground text-xs uppercase tracking-wider px-4 py-1 font-semibold">
                    {plan.badge}
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="font-display text-2xl text-foreground mb-2">{plan.name}</h3>
                <p className="text-sm text-foreground/50">{plan.description}</p>
              </div>

              {/* Price */}
              <div className="text-center mb-8">
                <div className="flex items-baseline justify-center">
                  <span className="text-foreground/50 text-lg">$</span>
                  <span className="font-display text-5xl text-foreground mx-1">{plan.price}</span>
                  <span className="text-foreground/50">/{plan.period}</span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-10">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-gold flex-shrink-0" />
                    <span className="text-sm text-foreground/70">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                variant={plan.featured ? "gold" : "elegant"}
                size="lg"
                className="w-full"
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
