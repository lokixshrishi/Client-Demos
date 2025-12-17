import atmosphereImage from '@/assets/atmosphere.jpg';
import heroImage from '@/assets/hero-restaurant.jpg';

const Atmosphere = () => {
  return (
    <section className="py-24 md:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <span className="text-gold text-sm tracking-ultra uppercase">The Experience</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mt-4 mb-6">
            An Evening to Remember
          </h2>
          <div className="festive-divider" />
        </div>

        {/* Image Grid */}
        <div className="grid md:grid-cols-12 gap-4 md:gap-6 max-w-6xl mx-auto">
          <div className="md:col-span-7 relative group overflow-hidden">
            <img
              src={atmosphereImage}
              alt="Intimate candlelit dining"
              className="w-full h-80 md:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-primary-foreground text-sm tracking-widest uppercase">Candlelit Evenings</p>
            </div>
          </div>

          <div className="md:col-span-5 relative group overflow-hidden">
            <img
              src={heroImage}
              alt="Festive table setting"
              className="w-full h-80 md:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-primary-foreground text-sm tracking-widest uppercase">Festive Celebrations</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-16 max-w-2xl mx-auto">
          <p className="text-muted-foreground leading-relaxed text-lg">
            Step into a world where every detail has been considered — from the gentle flicker of candlelight 
            to the soft notes of seasonal music. This is dining as it should be: intimate, elegant, unforgettable.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Atmosphere;
