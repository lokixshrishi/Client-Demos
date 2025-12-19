import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { Minus, Plus, Trash2, ShoppingBag, ChevronRight } from "lucide-react";

const Cart = () => {
  const { items, updateQuantity, removeFromCart, totalPrice, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container py-16 text-center">
          <ShoppingBag className="mx-auto h-16 w-16 text-muted-foreground" />
          <h1 className="mt-4 text-2xl font-bold">Your Cart is Empty</h1>
          <p className="mt-2 text-muted-foreground">Looks like you haven't added anything yet.</p>
          <Link to="/"><Button className="mt-6">Start Shopping</Button></Link>
        </main>
        <Footer />
      </div>
    );
  }

  const subtotal = totalPrice;
  const shipping = subtotal >= 50 ? 0 : 5.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container py-8">
        <nav className="mb-6 flex items-center gap-2 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-foreground">Home</Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground">Shopping Cart</span>
        </nav>

        <h1 className="mb-8 text-3xl font-bold">Shopping Cart</h1>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="rounded-lg border bg-card">
              {items.map((item, index) => (
                <div key={item.id} className={`flex gap-4 p-4 ${index !== items.length - 1 ? "border-b" : ""}`}>
                  <Link to={`/product/${item.id}`}>
                    <img src={item.image} alt={item.name} className="h-24 w-24 rounded-lg border object-contain p-2" />
                  </Link>
                  <div className="flex flex-1 flex-col">
                    <Link to={`/product/${item.id}`} className="font-medium hover:text-primary">{item.name}</Link>
                    <span className="text-sm text-muted-foreground">${item.price.toFixed(2)}/{item.unit}</span>
                    <div className="mt-auto flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="w-8 text-center font-medium">{item.quantity}</span>
                        <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="font-bold">${(item.price * item.quantity).toFixed(2)}</span>
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive" onClick={() => removeFromCart(item.id)}>
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="outline" className="mt-4" onClick={clearCart}>Clear Cart</Button>
          </div>

          <div className="lg:col-span-1">
            <div className="rounded-lg border bg-card p-6">
              <h2 className="mb-4 text-lg font-bold">Order Summary</h2>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between"><span className="text-muted-foreground">Subtotal</span><span>${subtotal.toFixed(2)}</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Shipping</span><span>{shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}`}</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Tax (8%)</span><span>${tax.toFixed(2)}</span></div>
                <div className="border-t pt-3"><div className="flex justify-between text-lg font-bold"><span>Total</span><span>${total.toFixed(2)}</span></div></div>
              </div>
              {shipping > 0 && <p className="mt-4 text-sm text-muted-foreground">Add ${(50 - subtotal).toFixed(2)} more for free shipping!</p>}
              <Link to="/checkout"><Button className="mt-6 w-full" size="lg">Proceed to Checkout</Button></Link>
              <Link to="/" className="mt-3 block text-center text-sm text-primary hover:underline">Continue Shopping</Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
