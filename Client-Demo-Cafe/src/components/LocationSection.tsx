import { MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const LocationSection = () => {
  return (
    <section id="visit" className="section-spacing bg-secondary/50">
      <div className="container-editorial">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Map Placeholder */}
          <div className="relative aspect-square lg:aspect-auto bg-muted overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center p-8">
                <MapPin size={48} className="text-muted-foreground mx-auto mb-4" />
                <p className="text-caption text-muted-foreground">
                  Interactive map coming soon
                </p>
              </div>
            </div>
            {/* Decorative grid overlay */}
            <div className="absolute inset-0 opacity-20">
              <div className="w-full h-full" 
                style={{
                  backgroundImage: `
                    linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px),
                    linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px)
                  `,
                  backgroundSize: '40px 40px'
                }}
              />
            </div>
          </div>

          {/* Location Details */}
          <div className="flex flex-col justify-center">
            <span className="text-caption text-muted-foreground mb-4 block">
              Find Us
            </span>
            
            <h2 className="text-editorial-md text-foreground mb-12">
              Come <em className="italic">visit</em>
            </h2>

            <div className="space-y-10">
              {/* Address */}
              <div className="flex gap-4">
                <MapPin size={20} className="text-sage mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-sans font-medium text-foreground mb-2">Address</h3>
                  <p className="text-body text-muted-foreground">
                    247 Smith Street<br />
                    Fitzroy, Melbourne<br />
                    VIC 3065, Australia
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-4">
                <Clock size={20} className="text-sage mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-sans font-medium text-foreground mb-2">Hours</h3>
                  <div className="text-body text-muted-foreground space-y-1">
                    <p>Monday – Friday: 7:00am – 5:00pm</p>
                    <p>Saturday – Sunday: 8:00am – 4:00pm</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <Button variant="outline" size="lg" asChild>
                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Get Directions
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
