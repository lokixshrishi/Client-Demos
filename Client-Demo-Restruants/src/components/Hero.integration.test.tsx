import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Hero from './Hero';

describe('Hero Integration Tests', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    
    // Mock successful video conditions
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: vi.fn().mockImplementation(() => ({
        matches: false,
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        addListener: vi.fn(),
        removeListener: vi.fn(),
      })),
    });

    Object.defineProperty(navigator, 'connection', {
      writable: true,
      value: { effectiveType: '4g' },
    });
  });

  it('should render complete hero section with video background', () => {
    render(<Hero />);

    // Check that all essential content is present
    expect(screen.getByText('✦ The Festive Season ✦')).toBeInTheDocument();
    expect(screen.getByText('A Season of')).toBeInTheDocument();
    expect(screen.getByText('Celebration')).toBeInTheDocument();
    expect(screen.getByText(/Join us for an unforgettable festive dining experience/)).toBeInTheDocument();
    
    // Check interactive elements
    const menuButton = screen.getByText('View Festive Menu');
    const reserveButton = screen.getByText('Reserve a Table');
    
    expect(menuButton).toBeInTheDocument();
    expect(reserveButton).toBeInTheDocument();
    
    // Check that buttons are clickable
    expect(menuButton.closest('a')).toHaveAttribute('href', '#menu');
    expect(reserveButton.closest('a')).toHaveAttribute('href', '#reservations');
  });

  it('should handle video fallback scenarios gracefully', () => {
    // Mock reduced motion preference
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: vi.fn().mockImplementation(() => ({
        matches: true, // Prefers reduced motion
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        addListener: vi.fn(),
        removeListener: vi.fn(),
      })),
    });

    render(<Hero />);

    // Content should still be present and functional
    expect(screen.getByText('A Season of')).toBeInTheDocument();
    expect(screen.getByText('View Festive Menu')).toBeInTheDocument();
    
    // Fallback image should be displayed
    const fallbackImage = screen.queryByAltText('Restaurant atmosphere');
    expect(fallbackImage).toBeInTheDocument();
  });

  it('should maintain proper layering and accessibility', () => {
    const { container } = render(<Hero />);

    // Check z-index layering
    const contentDiv = container.querySelector('.z-20');
    const overlayDiv = container.querySelector('.z-10');
    
    expect(contentDiv).toBeInTheDocument();
    expect(overlayDiv).toBeInTheDocument();

    // Check that content is accessible
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
    
    // Check that links are accessible
    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(2);
    links.forEach(link => {
      expect(link).toHaveAttribute('href');
    });
  });

  it('should handle user interactions correctly', () => {
    render(<Hero />);

    const menuButton = screen.getByText('View Festive Menu');
    const reserveButton = screen.getByText('Reserve a Table');

    // Buttons should be interactive
    fireEvent.mouseOver(menuButton);
    fireEvent.mouseOver(reserveButton);
    
    // No errors should occur during interaction
    expect(menuButton).toBeInTheDocument();
    expect(reserveButton).toBeInTheDocument();
  });

  it('should work correctly across different device types', () => {
    // Test desktop
    render(<Hero />);
    expect(screen.getByText('A Season of')).toBeInTheDocument();

    // Test mobile
    const originalUserAgent = navigator.userAgent;
    Object.defineProperty(navigator, 'userAgent', {
      writable: true,
      value: 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X)',
    });

    render(<Hero />);
    expect(screen.getAllByText('A Season of')).toHaveLength(2); // Both renders

    // Restore original user agent
    Object.defineProperty(navigator, 'userAgent', {
      writable: true,
      value: originalUserAgent,
    });
  });
});