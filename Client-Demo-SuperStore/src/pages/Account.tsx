import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { ChevronRight, User, Package, MapPin, CreditCard, Heart, Settings } from "lucide-react";

const Account = () => {
  const { toast } = useToast();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggedIn(true);
    toast({ title: "Welcome back!", description: "You have successfully signed in." });
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggedIn(true);
    toast({ title: "Account Created!", description: "Welcome to SuperStore!" });
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container py-8">
          <div className="mx-auto max-w-md">
            <Tabs defaultValue="login">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="login">Sign In</TabsTrigger>
                <TabsTrigger value="register">Create Account</TabsTrigger>
              </TabsList>
              <TabsContent value="login">
                <form onSubmit={handleLogin} className="mt-6 space-y-4">
                  <div><Label htmlFor="email">Email</Label><Input id="email" type="email" placeholder="john@email.com" required /></div>
                  <div><Label htmlFor="password">Password</Label><Input id="password" type="password" placeholder="••••••••" required /></div>
                  <Button type="submit" className="w-full">Sign In</Button>
                  <p className="text-center text-sm text-muted-foreground">
                    <button type="button" className="text-primary hover:underline">Forgot password?</button>
                  </p>
                </form>
              </TabsContent>
              <TabsContent value="register">
                <form onSubmit={handleRegister} className="mt-6 space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div><Label htmlFor="firstName">First Name</Label><Input id="firstName" required /></div>
                    <div><Label htmlFor="lastName">Last Name</Label><Input id="lastName" required /></div>
                  </div>
                  <div><Label htmlFor="regEmail">Email</Label><Input id="regEmail" type="email" required /></div>
                  <div><Label htmlFor="regPassword">Password</Label><Input id="regPassword" type="password" required /></div>
                  <div><Label htmlFor="confirmPassword">Confirm Password</Label><Input id="confirmPassword" type="password" required /></div>
                  <Button type="submit" className="w-full">Create Account</Button>
                </form>
              </TabsContent>
            </Tabs>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const orders = [
    { id: "SM12345678", date: "Dec 15, 2024", status: "Delivered", total: 67.43, items: 8 },
    { id: "SM12345677", date: "Dec 10, 2024", status: "Delivered", total: 124.99, items: 15 },
    { id: "SM12345676", date: "Dec 5, 2024", status: "Delivered", total: 45.67, items: 5 },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container py-8">
        <nav className="mb-6 flex items-center gap-2 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-foreground">Home</Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground">My Account</span>
        </nav>

        <div className="grid gap-8 lg:grid-cols-4">
          <div className="space-y-2">
            {[
              { icon: User, label: "Profile", active: true },
              { icon: Package, label: "Orders" },
              { icon: MapPin, label: "Addresses" },
              { icon: CreditCard, label: "Payment Methods" },
              { icon: Heart, label: "Wishlist" },
              { icon: Settings, label: "Settings" },
            ].map(item => (
              <button key={item.label} className={`flex w-full items-center gap-3 rounded-lg px-4 py-3 text-left ${item.active ? "bg-primary text-primary-foreground" : "hover:bg-muted"}`}>
                <item.icon className="h-5 w-5" />{item.label}
              </button>
            ))}
            <Button variant="outline" className="mt-4 w-full" onClick={() => setIsLoggedIn(false)}>Sign Out</Button>
          </div>

          <div className="lg:col-span-3">
            <div className="rounded-lg border bg-card p-6">
              <h2 className="mb-6 text-xl font-bold">Welcome, John!</h2>
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-lg bg-muted p-4"><p className="text-sm text-muted-foreground">Total Orders</p><p className="text-2xl font-bold">23</p></div>
                <div className="rounded-lg bg-muted p-4"><p className="text-sm text-muted-foreground">Rewards Points</p><p className="text-2xl font-bold">1,250</p></div>
                <div className="rounded-lg bg-muted p-4"><p className="text-sm text-muted-foreground">Saved Items</p><p className="text-2xl font-bold">8</p></div>
              </div>
            </div>

            <div className="mt-6 rounded-lg border bg-card p-6">
              <h3 className="mb-4 text-lg font-bold">Recent Orders</h3>
              <div className="space-y-4">
                {orders.map(order => (
                  <div key={order.id} className="flex items-center justify-between rounded-lg border p-4">
                    <div>
                      <p className="font-medium">Order #{order.id}</p>
                      <p className="text-sm text-muted-foreground">{order.date} • {order.items} items</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold">${order.total.toFixed(2)}</p>
                      <span className="inline-block rounded-full bg-success/10 px-2 py-1 text-xs font-medium text-success">{order.status}</span>
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/orders"><Button variant="outline" className="mt-4">View All Orders</Button></Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Account;
