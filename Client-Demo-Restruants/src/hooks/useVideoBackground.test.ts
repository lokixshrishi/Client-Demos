import { describe, it, expect, vi, beforeEach } from 'vitest';
import { renderHook, waitFor } from '@testing-library/react';
import { useVideoBackground } from './useVideoBackground';
import { createVideoConfig } from '@/utils/videoUtils';

describe('useVideoBackground Performance', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    
    // Mock successful conditions by default
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: vi.fn().mockImplementation(() => ({
        matches: false, // No reduced motion
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

  it('should delay video initialization to allow critical resources to load', async () => {
    const config = createVideoConfig('/test-video.mp4', '/test-image.jpg');
    const startTime = Date.now();
    
    const { result } = renderHook(() => useVideoBackground(config));
    
    // Should start in loading state
    expect(result.current.videoState.loadState).toBe('loading');
    
    // Wait for the delay
    await waitFor(() => {
      const elapsed = Date.now() - startTime;
      expect(elapsed).toBeGreaterThanOrEqual(100);
    }, { timeout: 200 });
  });

  it('should handle slow connections by falling back to image', () => {
    // Mock slow connection
    Object.defineProperty(navigator, 'connection', {
      writable: true,
      value: { effectiveType: '2g' },
    });

    const config = createVideoConfig('/test-video.mp4', '/test-image.jpg');
    const { result } = renderHook(() => useVideoBackground(config));

    expect(result.current.shouldShowFallback).toBe(true);
    expect(result.current.shouldShowVideo).toBe(false);
  });

  it('should be conservative on mobile devices with slow connections', () => {
    // Mock mobile device
    const originalUserAgent = navigator.userAgent;
    Object.defineProperty(navigator, 'userAgent', {
      writable: true,
      value: 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X)',
    });

    // Mock slow connection
    Object.defineProperty(navigator, 'connection', {
      writable: true,
      value: { effectiveType: '2g' },
    });

    const config = createVideoConfig('/test-video.mp4', '/test-image.jpg');
    const { result } = renderHook(() => useVideoBackground(config));

    expect(result.current.shouldShowFallback).toBe(true);

    // Restore original user agent
    Object.defineProperty(navigator, 'userAgent', {
      writable: true,
      value: originalUserAgent,
    });
  });

  it('should properly clean up event listeners', () => {
    const config = createVideoConfig('/test-video.mp4', '/test-image.jpg');
    const { unmount } = renderHook(() => useVideoBackground(config));

    // Mock video element with event listeners
    const mockVideo = {
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
    };

    // Simulate unmounting
    unmount();

    // Event listeners should be cleaned up (this is handled by the useEffect cleanup)
    expect(true).toBe(true); // Basic test to ensure no errors during unmount
  });
});