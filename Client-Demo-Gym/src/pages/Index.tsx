import { Navigation } from "@/components/Navigation";
import { Snowfall } from "@/components/Snowfall";
import { HeroSection } from "@/components/HeroSection";
import { ProgramsSection } from "@/components/ProgramsSection";
import { MembershipSection } from "@/components/MembershipSection";
import { TrainersSection } from "@/components/TrainersSection";
import { ScheduleSection } from "@/components/ScheduleSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Subtle Snowfall Effect */}
      <Snowfall />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Page Sections */}
      <HeroSection />
      <ProgramsSection />
      <MembershipSection />
      <TrainersSection />
      <ScheduleSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
