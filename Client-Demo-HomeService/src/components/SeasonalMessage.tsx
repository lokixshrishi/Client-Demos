import { Shield, Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "Westfield",
    rating: 5,
    text: "HomeFirst saved the day when our water heater failed on a Sunday. They had someone out within 2 hours and fixed it perfectly. Professional and fair pricing."
  },
  {
    name: "Mike Chen",
    location: "Downtown",
    rating: 5,
    text: "I've used them for electrical work twice now. Always on time, clean work area, and explain everything clearly. Highly recommend for any home repairs."
  },
  {
    name: "Lisa Rodriguez",
    location: "Northside",
    rating: 5,
    text: "Great experience with their HVAC service. They diagnosed the problem quickly and the repair has held up perfectly. Will definitely call them again."
  }
];

const SeasonalMessage = () => {
  return (
    <section className="py-20 md:py-28 bg-primary relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-accent/20 flex items-center justify-center">
                <Shield className="w-8 h-8 text-accent" />
              </div>
            </div>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-primary-foreground mb-6 leading-tight">
              Our Guarantee to You
            </h2>
            <p className="text-primary-foreground/80 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              We stand behind every job with our 100% satisfaction guarantee. 
              If you're not completely happy, we'll make it right.
            </p>
          </div>

          {/* Testimonials */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className="bg-primary-foreground/10 backdrop-blur-sm p-6 border border-primary-foreground/20"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-accent fill-current" />
                  ))}
                </div>
                <Quote className="w-6 h-6 text-accent mb-3" />
                <p className="text-primary-foreground/90 text-sm mb-4 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="text-primary-foreground/70 text-sm">
                  <div className="font-medium">{testimonial.name}</div>
                  <div>{testimonial.location}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Guarantee Points */}
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="text-primary-foreground/80">
              <div className="text-2xl font-bold text-accent mb-2">100%</div>
              <div className="text-sm">Satisfaction Guaranteed</div>
            </div>
            <div className="text-primary-foreground/80">
              <div className="text-2xl font-bold text-accent mb-2">2 Year</div>
              <div className="text-sm">Warranty on Repairs</div>
            </div>
            <div className="text-primary-foreground/80">
              <div className="text-2xl font-bold text-accent mb-2">No</div>
              <div className="text-sm">Hidden Fees</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeasonalMessage;
