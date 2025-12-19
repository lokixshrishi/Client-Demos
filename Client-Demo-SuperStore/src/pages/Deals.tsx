import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { getSaleProducts, deals } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { ChevronRight, Clock, Tag } from "lucide-react";

const Deals = () => {
  const { addToCart } = useCart();
  const saleProducts = getSaleProducts();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="bg-destructive py-12 text-destructive-foreground">
          <div className="container text-center">
            <Tag className="mx-auto h-12 w-12" />
            <h1 className="mt-4 text-4xl font-bold">Weekly Deals & Savings</h1>
            <p className="mt-2 text-lg opacity-90">Don't miss out on these amazing offers!</p>
          </div>
        </section>

        <section className="container py-10">
          <h2 className="mb-6 text-2xl font-bold">Current Promotions</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {deals.map(deal => (
              <div key={deal.id} className="rounded-lg border bg-card p-6">
                <h3 className="text-xl font-bold text-foreground">{deal.title}</h3>
                <p className="mt-2 text-muted-foreground">{deal.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />{deal.expires}
                  </span>
                  <Link to={`/category/${deal.category.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}`}>
                    <Button variant="outline" size="sm">Shop Now</Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="container py-10">
          <nav className="mb-6 flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground">Sale Items</span>
          </nav>
          <h2 className="mb-6 text-2xl font-bold">All Sale Items ({saleProducts.length})</h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            {saleProducts.map(product => (
              <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Deals;
