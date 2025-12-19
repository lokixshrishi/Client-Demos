import { Link } from "react-router-dom";
import { Apple, Milk, Beef, Croissant, Snowflake, Wine, Sparkles, Baby } from "lucide-react";
import { categories } from "@/data/products";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Apple, Milk, Beef, Croissant, Snowflake, Wine, Sparkles, Baby
};

const CategoryGrid = () => {
  return (
    <section className="container py-10">
      <h2 className="mb-6 text-2xl font-bold text-foreground">Shop by Category</h2>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-8">
        {categories.map((category) => {
          const Icon = iconMap[category.icon];
          return (
            <Link
              key={category.slug}
              to={`/category/${category.slug}`}
              className="group cursor-pointer rounded-lg border bg-card p-4 text-center transition-all hover:shadow-md hover:scale-[1.02]"
            >
              <div className={`mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full ${category.color}`}>
                {Icon && <Icon className="h-7 w-7" />}
              </div>
              <span className="text-sm font-medium text-card-foreground">{category.name}</span>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default CategoryGrid;
