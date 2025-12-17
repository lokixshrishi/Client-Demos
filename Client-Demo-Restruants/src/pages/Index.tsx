import { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import SeasonalHighlight from '@/components/SeasonalHighlight';
import Philosophy from '@/components/Philosophy';
import MenuPreview from '@/components/MenuPreview';
import Atmosphere from '@/components/Atmosphere';
import LocationHours from '@/components/LocationHours';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-up');
            entry.target.classList.remove('opacity-0');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('.scroll-animate').forEach((el) => {
      el.classList.add('opacity-0');
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <SeasonalHighlight />
      <Philosophy />
      <MenuPreview />
      <Atmosphere />
      <LocationHours />
      <Footer />
    </main>
  );
};

export default Index;
