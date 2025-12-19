import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ChevronRight, Search, Package, Truck, RotateCcw, CreditCard, HelpCircle, MessageCircle } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Help = () => {
  const topics = [
    { icon: Package, title: "Orders", description: "Track, modify, or cancel orders" },
    { icon: Truck, title: "Shipping & Delivery", description: "Delivery times and options" },
    { icon: RotateCcw, title: "Returns & Refunds", description: "Return policy and process" },
    { icon: CreditCard, title: "Payment", description: "Payment methods and billing" },
    { icon: HelpCircle, title: "Account", description: "Manage your account settings" },
    { icon: MessageCircle, title: "Contact Us", description: "Get in touch with support" },
  ];

  const faqs = [
    { q: "How do I track my order?", a: "You can track your order by going to My Account > Orders and clicking on the order you want to track. You'll see real-time updates on your delivery status." },
    { q: "What is your return policy?", a: "We offer a 30-day return policy on most items. Items must be unused and in original packaging. Perishable items cannot be returned unless defective." },
    { q: "How long does delivery take?", a: "Standard delivery takes 3-5 business days. Express delivery (1-2 days) is available for an additional fee. Free delivery on orders over $50." },
    { q: "Can I modify my order after placing it?", a: "Orders can be modified within 1 hour of placement. After that, please contact customer service for assistance." },
    { q: "What payment methods do you accept?", a: "We accept all major credit cards (Visa, MasterCard, American Express), debit cards, PayPal, and SuperMart gift cards." },
    { q: "How do I use a promo code?", a: "Enter your promo code in the 'Promo Code' field at checkout and click 'Apply'. The discount will be reflected in your order total." },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="bg-primary py-12 text-primary-foreground">
          <div className="container text-center">
            <h1 className="text-4xl font-bold">How can we help you?</h1>
            <div className="mx-auto mt-6 flex max-w-md">
              <Input placeholder="Search for help..." className="rounded-r-none bg-background text-foreground" />
              <Button variant="secondary" className="rounded-l-none"><Search className="h-5 w-5" /></Button>
            </div>
          </div>
        </section>

        <section className="container py-10">
          <nav className="mb-6 flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground">Help Center</span>
          </nav>

          <h2 className="mb-6 text-2xl font-bold">Browse by Topic</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {topics.map(topic => (
              <button key={topic.title} className="flex items-start gap-4 rounded-lg border bg-card p-4 text-left transition-all hover:shadow-md">
                <div className="rounded-lg bg-primary/10 p-3"><topic.icon className="h-6 w-6 text-primary" /></div>
                <div><h3 className="font-bold">{topic.title}</h3><p className="text-sm text-muted-foreground">{topic.description}</p></div>
              </button>
            ))}
          </div>
        </section>

        <section className="container py-10">
          <h2 className="mb-6 text-2xl font-bold">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="rounded-lg border bg-card">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="px-4">{faq.q}</AccordionTrigger>
                <AccordionContent className="px-4 text-muted-foreground">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        <section className="bg-muted py-10">
          <div className="container text-center">
            <h2 className="text-2xl font-bold">Still need help?</h2>
            <p className="mt-2 text-muted-foreground">Our customer service team is here for you</p>
            <div className="mt-6 flex flex-col justify-center gap-4 sm:flex-row">
              <Button size="lg"><MessageCircle className="mr-2 h-5 w-5" />Live Chat</Button>
              <Button size="lg" variant="outline">Call (555) 123-4567</Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Help;
