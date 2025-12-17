import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import SeasonalMessage from "@/components/SeasonalMessage";
import ClinicInfoSection from "@/components/ClinicInfoSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <SeasonalMessage />
      <ClinicInfoSection />
      <Footer />
    </main>
  );
};

export default Index;
