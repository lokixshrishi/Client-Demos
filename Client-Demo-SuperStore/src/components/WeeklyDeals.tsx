import { Link } from "react-router-dom";
import { Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { deals } from "@/data/products";

const WeeklyDeals = () => {
  return (
    <section className="bg-secondary py-10">
      <div className="container">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-foreground">Weekly Deals</h2>
          <Link to="/deals" className="text-sm font-medium text-primary hover:underline">See All Deals</Link>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {deals.slice(0, 3).map((deal) => (
            <div key={deal.id} className="rounded-lg border bg-card p-6">
              <h3 className="mb-2 text-xl font-bold text-foreground">{deal.title}</h3>
              <p className="mb-4 text-muted-foreground">{deal.description}</p>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />{deal.expires}
                </span>
                <Link to={`/category/${deal.category.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}`}>
                  <Button variant="outline" size="sm">Shop Deal</Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WeeklyDeals;
