import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="section-padding bg-foreground">
      <div className="container-wide">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-section text-background mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-neutral-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Contact our team to discuss your requirements. We provide detailed 
            consultations and competitive quotations for projects of any scale.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button variant="hero" size="xl">
                Request a Quote
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link to="/services">
              <Button 
                variant="outline" 
                size="xl" 
                className="border-neutral-500 text-neutral-300 hover:bg-neutral-700 hover:text-background hover:border-neutral-400"
              >
                Explore Services
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
