import pastries from "@/assets/pastries.jpg";

const menuCategories = [
  {
    title: "Coffee",
    items: [
      { name: "Espresso", description: "Single origin, rotational", price: "4" },
      { name: "Cortado", description: "Equal parts espresso and steamed milk", price: "5" },
      { name: "Flat White", description: "Double ristretto, velvety microfoam", price: "5.5" },
      { name: "Pour Over", description: "Kalita Wave, single origin", price: "6" },
      { name: "Cold Brew", description: "18-hour steep, nitrogen-infused", price: "5.5" },
    ],
  },
  {
    title: "Food",
    items: [
      { name: "Croissant", description: "Butter, house-made daily", price: "4.5" },
      { name: "Avocado Toast", description: "Sourdough, heirloom tomato, dukkah", price: "12" },
      { name: "Granola Bowl", description: "House granola, seasonal fruit, yogurt", price: "10" },
      { name: "Egg Sandwich", description: "Soft scramble, gruyère, brioche", price: "11" },
    ],
  },
  {
    title: "Seasonal",
    items: [
      { name: "Ethiopian Yirgacheffe", description: "Floral, bergamot, honey", price: "7" },
      { name: "Matcha Latte", description: "Ceremonial grade, oat milk", price: "6" },
      { name: "Cardamom Rose", description: "House chai, steamed milk", price: "5.5" },
    ],
  },
];

const MenuSection = () => {
  return (
    <section id="menu" className="section-spacing bg-background">
      <div className="container-editorial">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-caption text-muted-foreground mb-4 block">
            What We Serve
          </span>
          <h2 className="text-editorial-lg text-foreground">
            The <em className="italic">Menu</em>
          </h2>
        </div>

        {/* Menu Grid */}
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-8">
          {menuCategories.map((category) => (
            <div key={category.title} className="space-y-8">
              <h3 className="font-serif text-2xl text-foreground border-b border-subtle pb-4">
                {category.title}
              </h3>
              
              <ul className="space-y-6">
                {category.items.map((item) => (
                  <li key={item.name} className="group">
                    <div className="flex justify-between items-start mb-1">
                      <span className="font-sans font-medium text-foreground group-hover:text-coffee-medium transition-colors duration-300">
                        {item.name}
                      </span>
                      <span className="font-sans text-muted-foreground ml-4">
                        ${item.price}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Featured Image */}
        <div className="mt-24 image-reveal">
          <img
            src={pastries}
            alt="Fresh artisan pastries and croissants"
            className="w-full aspect-[21/9] object-cover shadow-elevated"
          />
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
