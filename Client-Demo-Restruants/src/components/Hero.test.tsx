import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import * as fc from 'fast-check';
import Hero from './Hero';

/**
 * Feature: hero-background-video, Property 3: Content preservation and visibility
 * For any hero section state (with or without video), all existing text content, 
 * buttons, animations, and interactive elements should remain visible, functional, and properly styled
 * Validates: Requirements 1.4, 2.2, 2.3, 2.4, 2.5
 */

describe('Hero Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    
    // Mock matchMedia for consistent testing
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
  });

  it('should preserve all essential content elements regardless of video state', () => {
    fc.assert(
      fc.property(fc.boolean(), (hasReducedMotion) => {
        // Mock reduced motion preference
        Object.defineProperty(window, 'matchMedia', {
          writable: true,
          value: vi.fn().mockImplementation(() => ({
            matches: hasReducedMotion,
            addEventListener: vi.fn(),
            removeEventListener: vi.fn(),
            addListener: vi.fn(),
            removeListener: vi.fn(),
          })),
        });

        render(<Hero />);

        // Property: Essential content should always be present
        expect(screen.getByText('✦ The Festive Season ✦')).toBeInTheDocument();
        expect(screen.getByText('A Season of')).toBeInTheDocument();
        expect(screen.getByText('Celebration')).toBeInTheDocument();
        expect(screen.getByText(/Join us for an unforgettable festive dining experience/)).toBeInTheDocument();
        
        // Property: Interactive elements should be present and accessible
        const menuButton = screen.getByText('View Festive Menu');
        const reserveButton = screen.getByText('Reserve a Table');
        
        expect(menuButton).toBeInTheDocument();
        expect(reserveButton).toBeInTheDocument();
        expect(menuButton.closest('a')).toHaveAttribute('href', '#menu');
        expect(reserveButton.closest('a')).toHaveAttribute('href', '#reservations');
        
        // Property: Scroll indicator should be present
        expect(screen.getByText('Discover')).toBeInTheDocument();
      }),
      { numRuns: 50 }
    );
  });

  it('should maintain proper z-index layering for all content', () => {
    fc.assert(
      fc.property(fc.boolean(), (videoEnabled) => {
        Object.defineProperty(window, 'matchMedia', {
          writable: true,
          value: vi.fn().mockImplementation(() => ({
            matches: !videoEnabled, // Reduced motion = !videoEnabled
            addEventListener: vi.fn(),
            removeEventListener: vi.fn(),
            addListener: vi.fn(),
            removeListener: vi.fn(),
          })),
        });

        const { container } = render(<Hero />);

        // Property: Content should have higher z-index than background
        const contentDiv = container.querySelector('.z-20');
        const overlayDiv = container.querySelector('.z-10');
        const backgroundDiv = container.querySelector('.z-0');

        expect(contentDiv).toBeInTheDocument();
        expect(overlayDiv).toBeInTheDocument();
        
        // Background should exist (either video or fallback)
        expect(backgroundDiv || container.querySelector('img')).toBeInTheDocument();
      }),
      { numRuns: 50 }
    );
  });

  it('should preserve animation classes and styling', () => {
    fc.assert(
      fc.property(fc.boolean(), (motionPreference) => {
        Object.defineProperty(window, 'matchMedia', {
          writable: true,
          value: vi.fn().mockImplementation(() => ({
            matches: motionPreference,
            addEventListener: vi.fn(),
            removeEventListener: vi.fn(),
            addListener: vi.fn(),
            removeListener: vi.fn(),
          })),
        });

        const { container } = render(<Hero />);

        // Property: Animation classes should be preserved
        const animatedElements = container.querySelectorAll('.animate-fade-up, .animate-fade-in');
        expect(animatedElements.length).toBeGreaterThan(0);

        // Property: Text styling should be preserved
        const heading = screen.getByText('A Season of');
        expect(heading).toHaveClass('font-serif');
        
        const goldText = screen.getByText('Celebration');
        expect(goldText).toHaveClass('text-gold-light');
      }),
      { numRuns: 50 }
    );
  });
});

/**
 * Feature: hero-background-video, Property 4: Overlay and contrast maintenance
 * For any video background state, appropriate overlay elements should be present 
 * to ensure text readability and contrast
 * Validates: Requirements 2.1
 */

describe('Hero Component - Overlay and Contrast', () => {
  it('should maintain proper overlay for text readability', () => {
    fc.assert(
      fc.property(fc.boolean(), (hasVideo) => {
        Object.defineProperty(window, 'matchMedia', {
          writable: true,
          value: vi.fn().mockImplementation(() => ({
            matches: !hasVideo, // Reduced motion = no video
            addEventListener: vi.fn(),
            removeEventListener: vi.fn(),
            addListener: vi.fn(),
            removeListener: vi.fn(),
          })),
        });

        const { container } = render(<Hero />);

        // Property: Overlay should always be present for text contrast
        const overlay = container.querySelector('.bg-gradient-to-b');
        expect(overlay).toBeInTheDocument();
        
        // Property: Overlay should have appropriate opacity values
        if (overlay) {
          const classes = overlay.className;
          expect(classes).toMatch(/from-foreground\/\d+/);
          expect(classes).toMatch(/via-foreground\/\d+/);
          expect(classes).toMatch(/to-foreground\/\d+/);
        }
      }),
      { numRuns: 50 }
    );
  });

  it('should ensure text elements have sufficient contrast', () => {
    fc.assert(
      fc.property(fc.boolean(), (videoState) => {
        Object.defineProperty(window, 'matchMedia', {
          writable: true,
          value: vi.fn().mockImplementation(() => ({
            matches: !videoState,
            addEventListener: vi.fn(),
            removeEventListener: vi.fn(),
            addListener: vi.fn(),
            removeListener: vi.fn(),
          })),
        });

        render(<Hero />);

        // Property: Text should have high contrast classes
        const mainHeading = screen.getByText('A Season of');
        const subHeading = screen.getByText('Celebration');
        const description = screen.getByText(/Join us for an unforgettable/);

        expect(mainHeading).toHaveClass('text-primary-foreground');
        expect(subHeading).toHaveClass('text-gold-light');
        expect(description).toHaveClass('text-primary-foreground/80');
      }),
      { numRuns: 50 }
    );
  });
});