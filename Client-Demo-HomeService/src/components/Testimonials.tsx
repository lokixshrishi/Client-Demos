import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    location: "Riverside Heights",
    rating: 5,
    text: "HomeFirst completely transformed our outdated bathroom. The team was professional, punctual, and the quality of work exceeded our expectations. They even finished a day early!",
    service: "Bathroom Renovation",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
  },
  {
    name: "Michael Chen",
    location: "Oak Park",
    rating: 5,
    text: "Had an emergency pipe burst at 2 AM. HomeFirst arrived within 30 minutes and had everything fixed by morning. Their 24/7 service is a lifesaver. Highly recommend!",
    service: "Emergency Plumbing",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
  },
  {
    name: "Jennifer & David Ross",
    location: "Maple Grove",
    rating: 5,
    text: "We've used HomeFirst for multiple projects over the years - HVAC installation, electrical upgrades, and general repairs. Consistently excellent work and fair pricing.",
    service: "Multiple Services",
    image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=150&q=80"
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 md:py-32 bg-primary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            Client Testimonials
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-primary-foreground mb-6">
            What Our Customers Say
          </h2>
          <p className="text-primary-foreground/70 text-lg">
            Don't just take our word for it. Here's what homeowners in your community have to say about their experience with HomeFirst.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="bg-primary-foreground p-8 shadow-elevated opacity-0 animate-fade-in-up relative"
              style={{ animationDelay: `${0.15 * index}s` }}
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 w-10 h-10 text-accent/20" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-accent fill-current" />
                ))}
              </div>

              {/* Text */}
              <p className="text-foreground/80 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Service Tag */}
              <div className="inline-block bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground mb-6">
                {testimonial.service}
              </div>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-border">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 object-cover"
                />
                <div>
                  <div className="font-heading font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 border-t border-primary-foreground/20">
          <div className="text-center">
            <div className="font-heading text-4xl md:text-5xl text-accent font-bold mb-2">4.9</div>
            <div className="text-primary-foreground/70 text-sm">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="font-heading text-4xl md:text-5xl text-accent font-bold mb-2">5K+</div>
            <div className="text-primary-foreground/70 text-sm">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="font-heading text-4xl md:text-5xl text-accent font-bold mb-2">15+</div>
            <div className="text-primary-foreground/70 text-sm">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="font-heading text-4xl md:text-5xl text-accent font-bold mb-2">98%</div>
            <div className="text-primary-foreground/70 text-sm">Would Recommend</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
