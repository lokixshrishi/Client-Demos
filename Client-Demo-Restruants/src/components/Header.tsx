import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Menu', 'About', 'Reservations', 'Contact'];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled
          ? 'bg-background/95 backdrop-blur-sm shadow-sm py-4'
          : 'bg-transparent py-6'
      )}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <nav className="flex items-center justify-between">
          <a
            href="#"
            className={cn(
              'font-display text-2xl md:text-3xl tracking-wide transition-colors duration-300',
              scrolled ? 'text-foreground' : 'text-primary-foreground'
            )}
          >
            Maison d'Hiver
          </a>

          <div className="hidden md:flex items-center space-x-12">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={cn(
                  'text-sm tracking-widest uppercase font-body transition-colors duration-300 hover:text-gold',
                  scrolled ? 'text-foreground' : 'text-primary-foreground'
                )}
              >
                {item}
              </a>
            ))}
          </div>

          <button
            className={cn(
              'md:hidden p-2 transition-colors',
              scrolled ? 'text-foreground' : 'text-primary-foreground'
            )}
            aria-label="Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
