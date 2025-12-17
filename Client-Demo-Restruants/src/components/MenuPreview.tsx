const menuCategories = [
  {
    title: 'Starters',
    items: [
      { name: 'Winter Truffle Velouté', description: 'Chestnut cream, aged parmesan' },
      { name: 'Smoked Salmon Rillettes', description: 'Dill crème fraîche, toasted brioche' },
      { name: 'Roasted Beetroot Carpaccio', description: 'Goat cheese, candied walnuts' },
    ]
  },
  {
    title: 'Mains',
    items: [
      { name: 'Slow-Roasted Duck Breast', description: 'Cherry reduction, fondant potato' },
      { name: 'Pan-Seared Sea Bass', description: 'Champagne beurre blanc, winter greens' },
      { name: 'Wild Mushroom Wellington', description: 'Truffle sauce, seasonal vegetables' },
    ]
  },
  {
    title: 'Festive Specials',
    items: [
      { name: 'Traditional Roast Goose', description: 'Sage stuffing, all the trimmings' },
      { name: 'Chateaubriand for Two', description: 'Béarnaise, roasted bone marrow' },
      { name: 'Lobster Thermidor', description: 'Classic preparation, saffron rice' },
    ]
  },
  {
    title: 'Desserts',
    items: [
      { name: 'Christmas Pudding', description: 'Brandy butter, candied orange' },
      { name: 'Chocolate Fondant', description: 'Salted caramel, vanilla bean ice cream' },
      { name: 'Cheese Selection', description: 'Artisan cheeses, quince paste' },
    ]
  }
];

const MenuPreview = () => {
  return (
    <section id="menu" className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <span className="text-gold text-sm tracking-ultra uppercase">Festive Offerings</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mt-4 mb-6">
            The Menu
          </h2>
          <div className="festive-divider" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 max-w-5xl mx-auto">
          {menuCategories.map((category, categoryIndex) => (
            <div key={category.title} className="relative">
              {/* Decorative corner */}
              <div className="absolute -top-3 -left-3 w-8 h-8 border-l border-t border-gold/30" />
              <div className="absolute -bottom-3 -right-3 w-8 h-8 border-r border-b border-gold/30" />
              
              <div className="p-6 md:p-8">
                <h3 className="font-serif text-2xl mb-6 text-center">
                  <span className="text-gold mr-2">✦</span>
                  {category.title}
                  <span className="text-gold ml-2">✦</span>
                </h3>

                <div className="space-y-6">
                  {category.items.map((item, itemIndex) => (
                    <div key={item.name} className="group">
                      <div className="flex items-baseline justify-between gap-4">
                        <h4 className="font-serif text-lg group-hover:text-gold transition-colors duration-300">
                          {item.name}
                        </h4>
                        <div className="flex-1 border-b border-dotted border-border min-w-[40px]" />
                      </div>
                      <p className="text-sm text-muted-foreground mt-1 italic">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-muted-foreground text-sm mb-6">
            Full tasting menus and wine pairings available upon request
          </p>
          <a
            href="#reservations"
            className="inline-block px-8 py-4 border border-gold text-gold hover:bg-gold hover:text-foreground transition-all duration-300 text-sm tracking-widest uppercase"
          >
            Make a Reservation
          </a>
        </div>
      </div>
    </section>
  );
};

export default MenuPreview;
