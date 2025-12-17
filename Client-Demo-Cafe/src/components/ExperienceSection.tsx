import cafeInterior from "@/assets/cafe-interior.jpg";

const ExperienceSection = () => {
  return (
    <section id="experience" className="relative">
      {/* Full-width Image */}
      <div className="relative h-[70vh] lg:h-screen overflow-hidden">
        <img
          src={cafeInterior}
          alt="Warm and inviting cafe interior with natural light"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
      </div>

      {/* Overlapping Content Card */}
      <div className="container-editorial">
        <div className="relative -mt-48 lg:-mt-64 bg-background p-10 md:p-16 lg:p-20 shadow-elevated max-w-3xl ml-auto mr-0 lg:mr-20">
          <span className="text-caption text-muted-foreground mb-4 block">
            The Space
          </span>
          
          <h2 className="text-editorial-md text-foreground mb-8">
            A moment of
            <br />
            <em className="italic">quiet intention</em>
          </h2>

          <div className="space-y-6 text-body text-muted-foreground">
            <p>
              Terroir is designed for presence. Natural light floods through 
              floor-to-ceiling windows, illuminating warm oak surfaces and 
              carefully curated greenery.
            </p>
            
            <p>
              Whether you're lingering over a pour-over with a good book, 
              catching up with a friend, or simply watching the world go by, 
              this is your space to slow down.
            </p>
          </div>

          <div className="mt-10 pt-8 border-t border-subtle">
            <div className="flex flex-wrap gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-sage" />
                <span>Free WiFi</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-sage" />
                <span>Power Outlets</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-sage" />
                <span>Outdoor Seating</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
