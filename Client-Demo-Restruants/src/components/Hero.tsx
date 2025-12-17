import heroImage from '@/assets/hero-restaurant.jpg';
import VideoBackground from './VideoBackground';

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Video with Fallback */}
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onError={(e) => console.error('Video error:', e)}
          onLoadedData={() => console.log('Video loaded!')}
        >
          <source src="/Cinematic_Restaurant_Video_Generation.mp4" type="video/mp4" />
          <img
            src={heroImage}
            alt="Restaurant atmosphere fallback"
            className="w-full h-full object-cover"
          />
        </video>
      </div>
      
      {/* Overlay - Enhanced for video backgrounds */}
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/45 via-foreground/35 to-foreground/65 z-10" />

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
        <div className="animate-fade-up opacity-0" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
          <span className="inline-block text-gold-light text-sm tracking-ultra uppercase mb-6">
            ✦ The Festive Season ✦
          </span>
        </div>

        <h1 
          className="font-serif text-4xl md:text-6xl lg:text-7xl text-primary-foreground leading-tight mb-6 animate-fade-up opacity-0"
          style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}
        >
          A Season of
          <span className="block italic text-gold-light mt-2">Celebration</span>
        </h1>

        <p 
          className="text-primary-foreground/80 text-lg md:text-xl font-light max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up opacity-0"
          style={{ animationDelay: '600ms', animationFillMode: 'forwards' }}
        >
          Join us for an unforgettable festive dining experience, where European tradition meets seasonal elegance.
        </p>

        <div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up opacity-0"
          style={{ animationDelay: '800ms', animationFillMode: 'forwards' }}
        >
          <a
            href="#menu"
            className="group px-8 py-4 bg-transparent border border-gold text-gold-light hover:bg-gold hover:text-foreground transition-all duration-300 text-sm tracking-widest uppercase"
          >
            View Festive Menu
          </a>
          <a
            href="#reservations"
            className="px-8 py-4 bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground border border-primary-foreground/30 hover:bg-primary-foreground/20 transition-all duration-300 text-sm tracking-widest uppercase"
          >
            Reserve a Table
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in opacity-0 z-20" style={{ animationDelay: '1200ms', animationFillMode: 'forwards' }}>
        <div className="flex flex-col items-center text-primary-foreground/60">
          <span className="text-xs tracking-widest uppercase mb-3">Discover</span>
          <div className="w-px h-12 bg-gradient-to-b from-primary-foreground/60 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
