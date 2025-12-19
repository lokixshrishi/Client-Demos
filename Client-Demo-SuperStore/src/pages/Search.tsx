import { useSearchParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { searchProducts } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { ChevronRight, SearchX } from "lucide-react";

const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const { addToCart } = useCart();
  const results = searchProducts(query);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container py-8">
        <nav className="mb-6 flex items-center gap-2 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-foreground">Home</Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground">Search Results</span>
        </nav>

        <div className="mb-8">
          <h1 className="text-3xl font-bold">Search Results for "{query}"</h1>
          <p className="mt-2 text-muted-foreground">{results.length} products found</p>
        </div>

        {results.length > 0 ? (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            {results.map(product => (
              <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
            ))}
          </div>
        ) : (
          <div className="py-16 text-center">
            <SearchX className="mx-auto h-16 w-16 text-muted-foreground" />
            <h2 className="mt-4 text-xl font-bold">No products found</h2>
            <p className="mt-2 text-muted-foreground">Try searching for something else</p>
            <Link to="/" className="mt-4 inline-block text-primary hover:underline">Back to Home</Link>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Search;
