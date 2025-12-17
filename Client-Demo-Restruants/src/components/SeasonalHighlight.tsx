import festiveTable from '@/assets/festive-table.jpg';

const SeasonalHighlight = () => {
  return (
    <section className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative group">
            <div className="absolute -inset-4 border border-gold/20 -z-10" />
            <img
              src={festiveTable}
              alt="Festive Christmas dining experience"
              className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            />
            <div className="absolute top-6 right-6 bg-festive-burgundy text-festive-burgundy-foreground px-4 py-2 text-xs tracking-widest uppercase">
              Limited Season
            </div>
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <span className="text-gold text-sm tracking-ultra uppercase">December Collection</span>
            
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mt-4 mb-6 leading-tight">
              The Festive
              <span className="italic text-festive-burgundy block">Menu</span>
            </h2>

            <div className="festive-divider !mx-0 mb-8" />

            <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
              A carefully curated celebration of winter's finest ingredients. Our festive menu 
              honours European tradition while embracing the warmth and joy of the season.
            </p>

            <ul className="space-y-4 mb-10">
              {[
                'Hand-selected seasonal ingredients',
                'Classic European preparations',
                'Vegetarian & dietary options available',
                'Private dining experiences'
              ].map((item, i) => (
                <li key={i} className="flex items-center text-muted-foreground">
                  <span className="text-gold mr-4">✦</span>
                  {item}
                </li>
              ))}
            </ul>

            <a
              href="#menu"
              className="inline-block px-8 py-4 bg-foreground text-background text-sm tracking-widest uppercase hover:bg-foreground/90 transition-colors duration-300"
            >
              Explore the Menu
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeasonalHighlight;
