import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import CategoryGrid from "@/components/CategoryGrid";
import FeaturedProducts from "@/components/FeaturedProducts";
import WeeklyDeals from "@/components/WeeklyDeals";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroBanner />
        <CategoryGrid />
        <FeaturedProducts />
        <WeeklyDeals />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
