import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, Package, Truck, Mail } from "lucide-react";

const OrderConfirmation = () => {
  const orderNumber = `SM${Date.now().toString().slice(-8)}`;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container py-16">
        <div className="mx-auto max-w-2xl text-center">
          <CheckCircle className="mx-auto h-20 w-20 text-success" />
          <h1 className="mt-6 text-3xl font-bold">Order Confirmed!</h1>
          <p className="mt-2 text-lg text-muted-foreground">Thank you for shopping with SuperStore</p>
          
          <div className="mt-8 rounded-lg border bg-card p-6">
            <p className="text-sm text-muted-foreground">Order Number</p>
            <p className="text-2xl font-bold text-primary">{orderNumber}</p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-lg border bg-card p-4">
              <Mail className="mx-auto h-8 w-8 text-primary" />
              <p className="mt-2 font-medium">Confirmation Email</p>
              <p className="text-sm text-muted-foreground">Sent to your email</p>
            </div>
            <div className="rounded-lg border bg-card p-4">
              <Package className="mx-auto h-8 w-8 text-primary" />
              <p className="mt-2 font-medium">Processing</p>
              <p className="text-sm text-muted-foreground">1-2 business days</p>
            </div>
            <div className="rounded-lg border bg-card p-4">
              <Truck className="mx-auto h-8 w-8 text-primary" />
              <p className="mt-2 font-medium">Delivery</p>
              <p className="text-sm text-muted-foreground">3-5 business days</p>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link to="/"><Button size="lg">Continue Shopping</Button></Link>
            <Link to="/orders"><Button variant="outline" size="lg">View Orders</Button></Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OrderConfirmation;
