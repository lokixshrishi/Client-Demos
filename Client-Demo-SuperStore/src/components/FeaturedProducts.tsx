import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import { getFeaturedProducts, Product } from "@/data/products";
import { useCart } from "@/context/CartContext";

const FeaturedProducts = () => {
  const { addToCart } = useCart();
  const products = getFeaturedProducts();

  return (
    <section className="container py-10">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-foreground">Featured Products</h2>
        <Link to="/deals" className="text-sm font-medium text-primary hover:underline">View All</Link>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
