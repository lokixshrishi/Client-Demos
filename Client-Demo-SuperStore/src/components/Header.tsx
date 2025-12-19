import { Search, ShoppingCart, MapPin, User, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { categories } from "@/data/products";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { totalItems } = useCart();

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
    }
  };

  return (
    <header className="bg-primary text-primary-foreground">
      <div className="border-b border-primary-foreground/10">
        <div className="container flex items-center justify-between py-2 text-sm">
          <div className="flex items-center gap-4">
            <Link to="/stores" className="flex items-center gap-1 hover:underline"><MapPin className="h-4 w-4" />Store Locator</Link>
            <Link to="/deals" className="hover:underline hidden sm:block">Weekly Ad</Link>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/help" className="hover:underline">Help</Link>
            <Link to="/help" className="hover:underline hidden sm:block">Contact Us</Link>
          </div>
        </div>
      </div>

      <div className="container py-4">
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-accent to-yellow-500 shadow-md">
              <svg viewBox="0 0 24 24" className="h-6 w-6 text-accent-foreground" fill="currentColor">
                <path d="M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM7.17 14.75l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1 1 0 0020 4H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1 1 0 0020 4H5.21l-.94-2H1v2h2l3.6 7.59L5.25 14c-.73 1.34.2 3 1.75 3h12v-2H7.42c-.14 0-.25-.11-.25-.25z"/>
              </svg>
            </div>
            <span className="text-2xl font-bold">SuperStore</span>
          </Link>

          <div className="hidden flex-1 md:flex">
            <div className="flex w-full max-w-2xl">
              <Input type="text" placeholder="Search products..." className="rounded-r-none border-0 bg-background text-foreground" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} onKeyDown={(e) => e.key === "Enter" && handleSearch()} />
              <Button variant="secondary" className="rounded-l-none" onClick={handleSearch}><Search className="h-5 w-5" /></Button>
            </div>
          </div>

          <div className="ml-auto flex items-center gap-4">
            <Link to="/account">
              <Button variant="ghost" className="hidden text-primary-foreground hover:bg-primary-foreground/10 md:flex"><User className="mr-2 h-5 w-5" />Sign In</Button>
            </Link>
            <Link to="/cart">
              <Button variant="ghost" className="relative text-primary-foreground hover:bg-primary-foreground/10">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-foreground">{totalItems}</span>
              </Button>
            </Link>
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" className="text-primary-foreground hover:bg-primary-foreground/10 md:hidden"><Menu className="h-5 w-5" /></Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-72">
                <nav className="mt-8 space-y-4">
                  <Link to="/account" className="block py-2 font-medium" onClick={() => setMobileMenuOpen(false)}>My Account</Link>
                  <Link to="/deals" className="block py-2 font-medium" onClick={() => setMobileMenuOpen(false)}>Weekly Deals</Link>
                  <Link to="/stores" className="block py-2 font-medium" onClick={() => setMobileMenuOpen(false)}>Store Locator</Link>
                  <Link to="/help" className="block py-2 font-medium" onClick={() => setMobileMenuOpen(false)}>Help Center</Link>
                  <div className="border-t pt-4">
                    <p className="mb-2 text-sm font-bold text-muted-foreground">Categories</p>
                    {categories.map(cat => (
                      <Link key={cat.slug} to={`/category/${cat.slug}`} className="block py-2" onClick={() => setMobileMenuOpen(false)}>{cat.name}</Link>
                    ))}
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        <div className="mt-4 flex md:hidden">
          <Input type="text" placeholder="Search products..." className="rounded-r-none border-0 bg-background text-foreground" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} onKeyDown={(e) => e.key === "Enter" && handleSearch()} />
          <Button variant="secondary" className="rounded-l-none" onClick={handleSearch}><Search className="h-5 w-5" /></Button>
        </div>
      </div>

      <nav className="bg-primary-foreground/5">
        <div className="container">
          <ul className="flex items-center gap-6 overflow-x-auto py-3 text-sm font-medium">
            <li><Link to="/deals" className="flex items-center gap-1 whitespace-nowrap hover:underline"><Menu className="h-4 w-4" />All Deals</Link></li>
            {categories.map(cat => (
              <li key={cat.slug}><Link to={`/category/${cat.slug}`} className="whitespace-nowrap hover:underline">{cat.name}</Link></li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
