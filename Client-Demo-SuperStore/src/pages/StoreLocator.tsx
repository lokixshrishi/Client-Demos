import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { stores } from "@/data/products";
import { ChevronRight, MapPin, Phone, Clock, Navigation } from "lucide-react";
import { useState } from "react";

const StoreLocator = () => {
  const [selectedStore, setSelectedStore] = useState(stores[0]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container py-8">
        <nav className="mb-6 flex items-center gap-2 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-foreground">Home</Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground">Store Locator</span>
        </nav>

        <h1 className="mb-8 text-3xl font-bold">Find a Store Near You</h1>

        <div className="mb-6 flex gap-2">
          <Input placeholder="Enter ZIP code or city" className="max-w-sm" defaultValue="10001" />
          <Button>Search</Button>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-4">
            {stores.map(store => (
              <button
                key={store.id}
                onClick={() => setSelectedStore(store)}
                className={`w-full rounded-lg border p-4 text-left transition-all hover:shadow-md ${selectedStore.id === store.id ? "border-primary bg-primary/5" : "bg-card"}`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-bold">{store.name}</h3>
                    <p className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />{store.address}
                    </p>
                    <p className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
                      <Phone className="h-4 w-4" />{store.phone}
                    </p>
                    <p className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />{store.hours}
                    </p>
                  </div>
                  <span className="rounded-full bg-secondary px-3 py-1 text-sm font-medium">{store.distance}</span>
                </div>
                <div className="mt-4 flex gap-2">
                  <Button size="sm" variant="outline"><Navigation className="mr-2 h-4 w-4" />Directions</Button>
                  <Button size="sm">Set as My Store</Button>
                </div>
              </button>
            ))}
          </div>

          <div className="rounded-lg border bg-muted/50 p-4">
            <div className="flex h-[400px] items-center justify-center rounded-lg bg-muted">
              <div className="text-center">
                <MapPin className="mx-auto h-12 w-12 text-muted-foreground" />
                <p className="mt-2 font-medium">{selectedStore.name}</p>
                <p className="text-sm text-muted-foreground">{selectedStore.address}</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default StoreLocator;
