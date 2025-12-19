import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const HeroBanner = () => {
  return (
    <section className="bg-secondary">
      <div className="container py-8">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="relative overflow-hidden rounded-lg bg-primary p-8 text-primary-foreground md:col-span-2">
            <div className="relative z-10 max-w-md">
              <span className="mb-2 inline-block rounded bg-accent px-3 py-1 text-sm font-semibold text-accent-foreground">This Week's Deals</span>
              <h1 className="mb-4 text-4xl font-bold">Save Big on Fresh Groceries</h1>
              <p className="mb-6 text-primary-foreground/80">Get up to 40% off on selected fresh produce, dairy, and everyday essentials.</p>
              <Link to="/deals"><Button variant="secondary" size="lg">Shop Now</Button></Link>
            </div>
            <div className="absolute -right-10 -top-10 h-64 w-64 rounded-full bg-primary-foreground/5" />
            <div className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-primary-foreground/5" />
          </div>

          <div className="flex flex-col gap-4">
            <Link to="/cart" className="flex-1 rounded-lg bg-accent p-6 text-left transition-transform hover:scale-[1.02]">
              <span className="text-sm font-medium text-accent-foreground/70">Limited Time</span>
              <h3 className="mb-2 text-xl font-bold text-accent-foreground">Free Delivery</h3>
              <p className="text-sm text-accent-foreground/70">On orders over $50</p>
            </Link>
            <Link to="/account" className="flex-1 rounded-lg bg-card p-6 text-left border transition-transform hover:scale-[1.02]">
              <span className="text-sm font-medium text-muted-foreground">New Customers</span>
              <h3 className="mb-2 text-xl font-bold text-foreground">10% Off First Order</h3>
              <p className="text-sm text-muted-foreground">Use code: WELCOME10</p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
