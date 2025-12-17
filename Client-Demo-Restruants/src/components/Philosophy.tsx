const Philosophy = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-gold text-sm tracking-ultra uppercase">Our Philosophy</span>

          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mt-6 mb-8 leading-tight">
            Where Craft Meets
            <span className="italic block mt-2">Hospitality</span>
          </h2>

          <div className="festive-divider mb-10" />

          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-8">
            At Maison d'Hiver, we believe that exceptional dining is born from the marriage of 
            impeccable ingredients, time-honoured techniques, and genuine warmth. Every dish 
            tells a story of provenance and passion.
          </p>

          <p className="text-muted-foreground leading-relaxed">
            Our kitchen celebrates the art of European brasserie cooking — refined yet approachable, 
            elegant yet comforting. This festive season, we invite you to experience the magic 
            of gathering around a table that has been set with love.
          </p>

          <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            {[
              { number: '15', label: 'Years of Excellence' },
              { number: '4', label: 'Culinary Awards' },
              { number: '∞', label: 'Moments Shared' }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <span className="font-display text-4xl md:text-5xl text-gold">{stat.number}</span>
                <p className="text-xs tracking-widest uppercase text-muted-foreground mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
