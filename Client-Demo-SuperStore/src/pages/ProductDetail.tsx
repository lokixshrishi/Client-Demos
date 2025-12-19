import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { getProductById, getProductsByCategory } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { ChevronRight, ShoppingCart, Star, Truck, Shield, RotateCcw } from "lucide-react";
import ProductCard from "@/components/ProductCard";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const product = getProductById(Number(id));

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container py-16 text-center">
          <h1 className="text-2xl font-bold">Product Not Found</h1>
          <Link to="/" className="mt-4 inline-block text-primary hover:underline">Back to Home</Link>
        </main>
        <Footer />
      </div>
    );
  }

  const relatedProducts = getProductsByCategory(product.category).filter(p => p.id !== product.id).slice(0, 4);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container py-8">
        <nav className="mb-6 flex items-center gap-2 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-foreground">Home</Link>
          <ChevronRight className="h-4 w-4" />
          <Link to={`/category/${product.category.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}`} className="hover:text-foreground">{product.category}</Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground line-clamp-1">{product.name}</span>
        </nav>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="relative">
            {product.badge && (
              <span className="absolute left-4 top-4 z-10 rounded bg-destructive px-3 py-1 text-sm font-semibold text-destructive-foreground">{product.badge}</span>
            )}
            <img src={product.image} alt={product.name} className="w-full rounded-lg border bg-card object-contain p-8" style={{ maxHeight: "400px" }} />
          </div>

          <div>
            <h1 className="text-3xl font-bold text-foreground">{product.name}</h1>
            <div className="mt-2 flex items-center gap-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`h-4 w-4 ${i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">({product.reviews} reviews)</span>
            </div>

            <div className="mt-6">
              <span className="text-4xl font-bold text-foreground">${product.price.toFixed(2)}</span>
              <span className="text-lg text-muted-foreground">/{product.unit}</span>
              {product.originalPrice && (
                <span className="ml-3 text-xl text-muted-foreground line-through">${product.originalPrice.toFixed(2)}</span>
              )}
            </div>

            <p className="mt-4 text-muted-foreground">{product.description}</p>

            <div className="mt-6 flex items-center gap-2">
              <span className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium ${product.inStock ? "bg-success/10 text-success" : "bg-destructive/10 text-destructive"}`}>
                {product.inStock ? "In Stock" : "Out of Stock"}
              </span>
            </div>

            <Button size="lg" className="mt-6 w-full md:w-auto" onClick={() => addToCart(product)} disabled={!product.inStock}>
              <ShoppingCart className="mr-2 h-5 w-5" />
              Add to Cart
            </Button>

            <div className="mt-8 grid gap-4 border-t pt-6 sm:grid-cols-3">
              <div className="flex items-center gap-3">
                <Truck className="h-5 w-5 text-primary" />
                <div className="text-sm"><p className="font-medium">Free Delivery</p><p className="text-muted-foreground">Orders over $50</p></div>
              </div>
              <div className="flex items-center gap-3">
                <RotateCcw className="h-5 w-5 text-primary" />
                <div className="text-sm"><p className="font-medium">Easy Returns</p><p className="text-muted-foreground">30-day policy</p></div>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="h-5 w-5 text-primary" />
                <div className="text-sm"><p className="font-medium">Quality Guarantee</p><p className="text-muted-foreground">Fresh products</p></div>
              </div>
            </div>
          </div>
        </div>

        {relatedProducts.length > 0 && (
          <section className="mt-16">
            <h2 className="mb-6 text-2xl font-bold">Related Products</h2>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {relatedProducts.map(p => <ProductCard key={p.id} product={p} onAddToCart={addToCart} />)}
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
