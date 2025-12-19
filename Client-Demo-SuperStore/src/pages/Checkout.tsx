import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useCart } from "@/context/CartContext";
import { useToast } from "@/hooks/use-toast";
import { ChevronRight, CreditCard, Lock } from "lucide-react";

const Checkout = () => {
  const { items, totalPrice, clearCart } = useCart();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);

  const subtotal = totalPrice;
  const shipping = subtotal >= 50 ? 0 : 5.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      clearCart();
      toast({ title: "Order Placed!", description: "Thank you for your order. You'll receive a confirmation email shortly." });
      navigate("/order-confirmation");
    }, 2000);
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container py-16 text-center">
          <h1 className="text-2xl font-bold">Your cart is empty</h1>
          <Link to="/"><Button className="mt-4">Continue Shopping</Button></Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container py-8">
        <nav className="mb-6 flex items-center gap-2 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-foreground">Home</Link>
          <ChevronRight className="h-4 w-4" />
          <Link to="/cart" className="hover:text-foreground">Cart</Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground">Checkout</span>
        </nav>

        <h1 className="mb-8 text-3xl font-bold">Checkout</h1>

        <form onSubmit={handleSubmit}>
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="space-y-6 lg:col-span-2">
              <div className="rounded-lg border bg-card p-6">
                <h2 className="mb-4 text-lg font-bold">Shipping Information</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div><Label htmlFor="firstName">First Name</Label><Input id="firstName" defaultValue="John" required /></div>
                  <div><Label htmlFor="lastName">Last Name</Label><Input id="lastName" defaultValue="Doe" required /></div>
                  <div className="sm:col-span-2"><Label htmlFor="email">Email</Label><Input id="email" type="email" defaultValue="john.doe@email.com" required /></div>
                  <div className="sm:col-span-2"><Label htmlFor="address">Address</Label><Input id="address" defaultValue="123 Main Street, Apt 4B" required /></div>
                  <div><Label htmlFor="city">City</Label><Input id="city" defaultValue="New York" required /></div>
                  <div><Label htmlFor="state">State</Label><Input id="state" defaultValue="NY" required /></div>
                  <div><Label htmlFor="zip">ZIP Code</Label><Input id="zip" defaultValue="10001" required /></div>
                  <div><Label htmlFor="phone">Phone</Label><Input id="phone" type="tel" defaultValue="(555) 123-4567" required /></div>
                </div>
              </div>

              <div className="rounded-lg border bg-card p-6">
                <h2 className="mb-4 flex items-center gap-2 text-lg font-bold"><CreditCard className="h-5 w-5" />Payment Information</h2>
                <div className="grid gap-4">
                  <div><Label htmlFor="cardName">Name on Card</Label><Input id="cardName" defaultValue="John Doe" required /></div>
                  <div><Label htmlFor="cardNumber">Card Number</Label><Input id="cardNumber" defaultValue="4242 4242 4242 4242" required /></div>
                  <div className="grid grid-cols-2 gap-4">
                    <div><Label htmlFor="expiry">Expiry Date</Label><Input id="expiry" placeholder="MM/YY" defaultValue="12/26" required /></div>
                    <div><Label htmlFor="cvv">CVV</Label><Input id="cvv" defaultValue="123" required /></div>
                  </div>
                </div>
                <p className="mt-4 flex items-center gap-2 text-sm text-muted-foreground"><Lock className="h-4 w-4" />Your payment information is secure and encrypted</p>
              </div>
            </div>

            <div>
              <div className="rounded-lg border bg-card p-6">
                <h2 className="mb-4 text-lg font-bold">Order Summary</h2>
                <div className="max-h-48 space-y-3 overflow-y-auto">
                  {items.map(item => (
                    <div key={item.id} className="flex items-center gap-3">
                      <img src={item.image} alt={item.name} className="h-12 w-12 rounded border object-contain p-1" />
                      <div className="flex-1 text-sm"><p className="line-clamp-1 font-medium">{item.name}</p><p className="text-muted-foreground">Qty: {item.quantity}</p></div>
                      <span className="text-sm font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 space-y-2 border-t pt-4 text-sm">
                  <div className="flex justify-between"><span className="text-muted-foreground">Subtotal</span><span>${subtotal.toFixed(2)}</span></div>
                  <div className="flex justify-between"><span className="text-muted-foreground">Shipping</span><span>{shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}`}</span></div>
                  <div className="flex justify-between"><span className="text-muted-foreground">Tax</span><span>${tax.toFixed(2)}</span></div>
                  <div className="flex justify-between border-t pt-2 text-lg font-bold"><span>Total</span><span>${total.toFixed(2)}</span></div>
                </div>
                <Button type="submit" className="mt-6 w-full" size="lg" disabled={isProcessing}>
                  {isProcessing ? "Processing..." : `Place Order - $${total.toFixed(2)}`}
                </Button>
              </div>
            </div>
          </div>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default Checkout;
