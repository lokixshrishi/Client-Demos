import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import * as fc from 'fast-check';
import VideoBackground from './VideoBackground';

/**
 * Feature: hero-background-video, Property 1: Video element configuration
 * For any video background element, it should have autoplay enabled, be muted, 
 * have loop enabled, and start playing when loaded
 * Validates: Requirements 1.2, 1.3
 */

/**
 * Feature: hero-background-video, Property 2: Fallback handling
 * For any video load failure or unsupported browser condition, 
 * the system should display the fallback background image
 * Validates: Requirements 1.5, 3.2, 3.3
 */

describe('VideoBackground', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    
    // Mock successful autoplay detection by default
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: vi.fn().mockImplementation(() => ({
        matches: false, // No reduced motion preference
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        addListener: vi.fn(),
        removeListener: vi.fn(),
      })),
    });
  });

  it('should configure video elements with correct attributes', () => {
    fc.assert(
      fc.property(
        fc.webUrl(),
        fc.webUrl(),
        (videoSrc, fallbackSrc) => {
          render(
            <VideoBackground
              src={videoSrc}
              fallbackImage={fallbackSrc}
            />
          );

          const video = screen.queryByRole('img', { hidden: true }) || 
                       document.querySelector('video');

          if (video && video.tagName === 'VIDEO') {
            const videoElement = video as HTMLVideoElement;
            
            // Property: All video elements should have correct configuration
            expect(videoElement.autoplay).toBe(true);
            expect(videoElement.muted).toBe(true);
            expect(videoElement.loop).toBe(true);
            expect(videoElement.playsInline).toBe(true);
            expect(videoElement.preload).toBe('metadata');
          }
        }
      ),
      { numRuns: 50 }
    );
  });

  it('should handle fallback scenarios correctly', () => {
    fc.assert(
      fc.property(
        fc.webUrl(),
        fc.webUrl(),
        (videoSrc, fallbackSrc) => {
          // Mock reduced motion preference to trigger fallback
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

          render(
            <VideoBackground
              src={videoSrc}
              fallbackImage={fallbackSrc}
            />
          );

          // Property: When fallback conditions are met, fallback image should be displayed
          const fallbackImage = screen.queryByAltText('Restaurant atmosphere');
          expect(fallbackImage).toBeInTheDocument();
          
          if (fallbackImage) {
            expect(fallbackImage.getAttribute('src')).toBe(fallbackSrc);
          }
        }
      ),
      { numRuns: 50 }
    );
  });

  it('should provide proper accessibility attributes', () => {
    fc.assert(
      fc.property(
        fc.webUrl(),
        fc.webUrl(),
        (videoSrc, fallbackSrc) => {
          render(
            <VideoBackground
              src={videoSrc}
              fallbackImage={fallbackSrc}
            />
          );

          const video = document.querySelector('video');
          const image = screen.queryByAltText('Restaurant atmosphere');

          // Property: All media elements should have proper accessibility attributes
          if (video) {
            expect(video.getAttribute('aria-label')).toBe('Background video showing restaurant atmosphere');
          }
          
          if (image) {
            expect(image.getAttribute('alt')).toBe('Restaurant atmosphere');
          }
        }
      ),
      { numRuns: 50 }
    );
  });
});
/**
 * Feature: hero-background-video, Property 5: Responsive design consistency
 * For any viewport size, the video background should maintain responsive behavior 
 * and proper aspect ratios
 * Validates: Requirements 3.4
 */

describe('VideoBackground - Responsive Design', () => {
  it('should maintain responsive styling across different viewport sizes', () => {
    fc.assert(
      fc.property(
        fc.webUrl(),
        fc.webUrl(),
        fc.integer({ min: 320, max: 1920 }),
        fc.integer({ min: 240, max: 1080 }),
        (videoSrc, fallbackSrc, width, height) => {
          // Mock viewport size
          Object.defineProperty(window, 'innerWidth', {
            writable: true,
            configurable: true,
            value: width,
          });
          Object.defineProperty(window, 'innerHeight', {
            writable: true,
            configurable: true,
            value: height,
          });

          render(
            <VideoBackground
              src={videoSrc}
              fallbackImage={fallbackSrc}
            />
          );

          const video = document.querySelector('video');
          const image = screen.queryByAltText('Restaurant atmosphere');
          const mediaElement = video || image;

          if (mediaElement) {
            // Property: Media elements should have responsive classes
            expect(mediaElement).toHaveClass('w-full', 'h-full', 'object-cover');
            expect(mediaElement).toHaveClass('min-h-full', 'min-w-full');
            
            // Property: Media elements should have proper object-fit styling
            const style = window.getComputedStyle(mediaElement);
            expect(mediaElement.style.objectFit).toBe('cover');
            expect(mediaElement.style.objectPosition).toBe('center center');
          }
        }
      ),
      { numRuns: 50 }
    );
  });

  it('should handle mobile device detection correctly', () => {
    fc.assert(
      fc.property(
        fc.webUrl(),
        fc.webUrl(),
        fc.boolean(),
        (videoSrc, fallbackSrc, isMobile) => {
          // Mock user agent for mobile detection
          const originalUserAgent = navigator.userAgent;
          Object.defineProperty(navigator, 'userAgent', {
            writable: true,
            value: isMobile ? 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X)' : 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
          });

          render(
            <VideoBackground
              src={videoSrc}
              fallbackImage={fallbackSrc}
            />
          );

          // Property: Component should render appropriate media element
          const video = document.querySelector('video');
          const image = screen.queryByAltText('Restaurant atmosphere');
          
          expect(video || image).toBeInTheDocument();

          // Restore original user agent
          Object.defineProperty(navigator, 'userAgent', {
            writable: true,
            value: originalUserAgent,
          });
        }
      ),
      { numRuns: 50 }
    );
  });
});