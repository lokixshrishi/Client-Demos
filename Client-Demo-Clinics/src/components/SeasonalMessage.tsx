import { Card, CardContent } from "@/components/ui/card";
import { Snowflake, Heart } from "lucide-react";

const SeasonalMessage = () => {
  return (
    <section className="py-20 bg-secondary/30 relative overflow-hidden">
      {/* Subtle winter decoration */}
      <div className="absolute top-10 left-10 text-primary/10">
        <Snowflake className="h-24 w-24 animate-float" />
      </div>
      <div className="absolute bottom-10 right-10 text-primary/10">
        <Snowflake className="h-16 w-16 animate-float animation-delay-400" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <Card variant="glass" className="max-w-3xl mx-auto border-primary/20">
          <CardContent className="p-8 md:p-12 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-6">
              <Heart className="h-8 w-8 text-accent" />
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Warmth & Care This Winter Season
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed max-w-xl mx-auto">
              As the year comes to a close, we're grateful for the trust you place in us. 
              This holiday season, we remain committed to keeping you and your loved ones 
              healthy. Stay warm, stay well, and know that we're here whenever you need us.
            </p>

            <div className="mt-8 flex items-center justify-center gap-2 text-primary font-medium">
              <span>From our family to yours</span>
              <Heart className="h-4 w-4 fill-current" />
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default SeasonalMessage;
