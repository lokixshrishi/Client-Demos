import { describe, it, expect, vi, beforeEach } from 'vitest';
import { 
  detectAutoplaySupport, 
  prefersReducedMotion, 
  isMobileDevice, 
  isSlowConnection,
  createVideoConfig,
  createAccessibilityConfig 
} from './videoUtils';

describe('Video Utilities', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('detectAutoplaySupport', () => {
    it('should detect autoplay support correctly', async () => {
      // Mock successful video play
      const mockPlay = vi.fn().mockResolvedValue(undefined);
      const mockPause = vi.fn();
      
      vi.spyOn(document, 'createElement').mockReturnValue({
        play: mockPlay,
        pause: mockPause,
        muted: false,
        playsInline: false,
        src: '',
      } as any);

      const result = await detectAutoplaySupport();
      expect(result).toBe(true);
      expect(mockPlay).toHaveBeenCalled();
      expect(mockPause).toHaveBeenCalled();
    });

    it('should handle autoplay failure gracefully', async () => {
      // Mock failed video play
      const mockPlay = vi.fn().mockRejectedValue(new Error('Autoplay blocked'));
      
      vi.spyOn(document, 'createElement').mockReturnValue({
        play: mockPlay,
        pause: vi.fn(),
        muted: false,
        playsInline: false,
        src: '',
      } as any);

      const result = await detectAutoplaySupport();
      expect(result).toBe(false);
    });
  });

  describe('prefersReducedMotion', () => {
    it('should detect reduced motion preference', () => {
      const mockMatchMedia = vi.fn().mockReturnValue({ matches: true });
      Object.defineProperty(window, 'matchMedia', {
        writable: true,
        value: mockMatchMedia,
      });

      const result = prefersReducedMotion();
      expect(result).toBe(true);
      expect(mockMatchMedia).toHaveBeenCalledWith('(prefers-reduced-motion: reduce)');
    });

    it('should handle missing matchMedia gracefully', () => {
      // Mock server-side environment
      const originalWindow = global.window;
      delete (global as any).window;

      const result = prefersReducedMotion();
      expect(result).toBe(false);

      global.window = originalWindow;
    });
  });

  describe('isMobileDevice', () => {
    it('should detect mobile devices correctly', () => {
      const originalUserAgent = navigator.userAgent;
      
      // Test mobile user agent
      Object.defineProperty(navigator, 'userAgent', {
        writable: true,
        value: 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X)',
      });

      expect(isMobileDevice()).toBe(true);

      // Test desktop user agent
      Object.defineProperty(navigator, 'userAgent', {
        writable: true,
        value: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
      });

      expect(isMobileDevice()).toBe(false);

      // Restore original user agent
      Object.defineProperty(navigator, 'userAgent', {
        writable: true,
        value: originalUserAgent,
      });
    });
  });

  describe('isSlowConnection', () => {
    it('should detect slow connections', () => {
      Object.defineProperty(navigator, 'connection', {
        writable: true,
        value: { effectiveType: '2g' },
      });

      expect(isSlowConnection()).toBe(true);

      Object.defineProperty(navigator, 'connection', {
        writable: true,
        value: { effectiveType: '4g' },
      });

      expect(isSlowConnection()).toBe(false);
    });

    it('should handle missing connection API', () => {
      const originalConnection = (navigator as any).connection;
      Object.defineProperty(navigator, 'connection', {
        writable: true,
        value: undefined,
      });

      expect(isSlowConnection()).toBe(false);

      Object.defineProperty(navigator, 'connection', {
        writable: true,
        value: originalConnection,
      });
    });
  });

  describe('createVideoConfig', () => {
    it('should create proper video configuration', () => {
      const src = '/test-video.mp4';
      const fallback = '/test-image.jpg';
      
      const config = createVideoConfig(src, fallback);
      
      expect(config).toEqual({
        src,
        fallbackImage: fallback,
        preload: 'metadata',
        muted: true,
        loop: true,
        autoplay: true,
        playsInline: true,
      });
    });
  });

  describe('createAccessibilityConfig', () => {
    it('should create proper accessibility configuration', () => {
      const config = createAccessibilityConfig();
      
      expect(config).toEqual({
        respectReducedMotion: true,
        showVideoControls: false,
        providePauseOption: true,
      });
    });
  });
});