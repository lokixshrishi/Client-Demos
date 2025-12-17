import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isHomePage 
        ? "bg-transparent border-b-0" 
        : "bg-background/95 backdrop-blur-sm border-b border-border"
    )}>
      <nav className="container-wide">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img 
              src={logo} 
              alt="Karnataka Portable Cabins Logo" 
              className="h-12 w-auto object-contain"
            />
            <span className={cn(
              "text-lg font-semibold tracking-tight",
              isHomePage ? "text-white" : "text-foreground"
            )}>Karnataka Portable Cabins</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "text-sm font-medium link-underline transition-colors",
                  isHomePage
                    ? location.pathname === item.href
                      ? "text-white"
                      : "text-white/80 hover:text-white"
                    : location.pathname === item.href
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Link to="/login">
              <Button 
                variant="ghost" 
                size="sm"
                className={cn(isHomePage && "text-white hover:text-white hover:bg-white/10")}
              >
                Login
              </Button>
            </Link>
            <Link to="/contact">
              <Button 
                variant={isHomePage ? "outline" : "default"}
                size="sm"
                className={cn(isHomePage && "bg-white text-primary hover:bg-white/90 border-white")}
              >
                Get Quote
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className={cn("w-6 h-6", isHomePage ? "text-white" : "text-foreground")} />
            ) : (
              <Menu className={cn("w-6 h-6", isHomePage ? "text-white" : "text-foreground")} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className={cn(
            "lg:hidden py-4 border-t animate-fade-in",
            isHomePage 
              ? "bg-black/90 backdrop-blur-md border-white/20" 
              : "border-border"
          )}>
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "text-base font-medium py-2 transition-colors",
                    isHomePage
                      ? location.pathname === item.href
                        ? "text-white"
                        : "text-white/80 hover:text-white"
                      : location.pathname === item.href
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {item.label}
                </Link>
              ))}
              <div className={cn(
                "flex flex-col gap-2 pt-4 border-t",
                isHomePage ? "border-white/20" : "border-border"
              )}>
                <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="outline" className="w-full">
                    Login
                  </Button>
                </Link>
                <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="default" className="w-full">
                    Get Quote
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
