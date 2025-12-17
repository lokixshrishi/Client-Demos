import coffeePreparation from "@/assets/coffee-preparation.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="section-spacing bg-gradient-warm">
      <div className="container-editorial">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <span className="text-caption text-muted-foreground mb-4 block">
              Our Philosophy
            </span>
            
            <h2 className="text-editorial-md text-foreground mb-8">
              A dedication to the
              <br />
              <em className="italic">craft of coffee</em>
            </h2>

            <div className="space-y-6 text-body text-muted-foreground">
              <p>
                At Terroir, we believe exceptional coffee begins long before the first pour. 
                It starts in the highlands of Ethiopia, the volcanic slopes of Guatemala, 
                and the misty farms of Colombia—where dedicated producers cultivate beans 
                with generations of expertise.
              </p>
              
              <p>
                Our roasters work in small batches, coaxing out the unique character of 
                each origin. We taste obsessively, adjust meticulously, and serve only 
                what meets our exacting standards.
              </p>

              <p>
                This is coffee with provenance. Coffee with purpose. Coffee that rewards 
                attention and invites contemplation.
              </p>
            </div>

            <div className="mt-12 pt-8 border-t border-subtle">
              <div className="grid grid-cols-3 gap-8 text-center">
                <div>
                  <span className="font-serif text-3xl md:text-4xl text-foreground block">12</span>
                  <span className="text-caption text-muted-foreground mt-2 block">Origins</span>
                </div>
                <div>
                  <span className="font-serif text-3xl md:text-4xl text-foreground block">87+</span>
                  <span className="text-caption text-muted-foreground mt-2 block">Score</span>
                </div>
                <div>
                  <span className="font-serif text-3xl md:text-4xl text-foreground block">5</span>
                  <span className="text-caption text-muted-foreground mt-2 block">Years</span>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 image-reveal">
            <img
              src={coffeePreparation}
              alt="Pour-over coffee preparation with specialty beans"
              className="w-full aspect-square object-cover shadow-elevated"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
