import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  const { id, name, price, originalPrice, unit, image, badge } = product;

  return (
    <div className="group rounded-lg border bg-card p-4 transition-shadow hover:shadow-md">
      <Link to={`/product/${id}`} className="block">
        <div className="relative mb-4">
          {badge && (
            <span className="absolute left-0 top-0 rounded bg-destructive px-2 py-1 text-xs font-semibold text-destructive-foreground">
              {badge}
            </span>
          )}
          <img src={image} alt={name} className="mx-auto h-36 w-36 object-contain transition-transform group-hover:scale-105" />
        </div>
        <h3 className="mb-2 line-clamp-2 text-sm font-medium text-card-foreground group-hover:text-primary">{name}</h3>
      </Link>
      <div className="mb-3">
        <span className="text-lg font-bold text-foreground">${price.toFixed(2)}</span>
        <span className="text-sm text-muted-foreground">/{unit}</span>
        {originalPrice && (
          <span className="ml-2 text-sm text-muted-foreground line-through">${originalPrice.toFixed(2)}</span>
        )}
      </div>
      <Button variant="outline" className="w-full" size="sm" onClick={(e) => { e.preventDefault(); onAddToCart(product); }}>
        <ShoppingCart className="mr-2 h-4 w-4" />
        Add to Cart
      </Button>
    </div>
  );
};

export default ProductCard;
