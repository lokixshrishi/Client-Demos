import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { getProductsByCategory, categories } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { ChevronRight } from "lucide-react";

const Category = () => {
  const { slug } = useParams<{ slug: string }>();
  const { addToCart } = useCart();
  
  const category = categories.find(c => c.slug === slug);
  const categoryName = category?.name || "Products";
  const products = getProductsByCategory(categoryName);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container py-8">
        <nav className="mb-6 flex items-center gap-2 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-foreground">Home</Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground">{categoryName}</span>
        </nav>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">{categoryName}</h1>
          <p className="mt-2 text-muted-foreground">{products.length} products available</p>
        </div>

        {products.length > 0 ? (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4">
            {products.map(product => (
              <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
            ))}
          </div>
        ) : (
          <div className="py-12 text-center">
            <p className="text-lg text-muted-foreground">No products found in this category.</p>
            <Link to="/" className="mt-4 inline-block text-primary hover:underline">
              Back to Home
            </Link>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Category;
