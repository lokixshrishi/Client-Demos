import { describe, it, expect, vi, beforeEach } from 'vitest';
import { renderHook } from '@testing-library/react';
import * as fc from 'fast-check';
import { useAccessibility } from './useAccessibility';

/**
 * Feature: hero-background-video, Property 6: Accessibility compliance
 * For any user with reduced motion preferences or accessibility needs, 
 * the system should provide static alternatives and respect user preferences
 * Validates: Requirements 3.5, 4.3
 */

describe('useAccessibility', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should respect reduced motion preferences', () => {
    fc.assert(
      fc.property(fc.boolean(), (prefersReduced) => {
        // Mock matchMedia to return the preference
        const mockMatchMedia = vi.fn().mockImplementation(() => ({
          matches: prefersReduced,
          addEventListener: vi.fn(),
          removeEventListener: vi.fn(),
          addListener: vi.fn(),
          removeListener: vi.fn(),
        }));
        
        Object.defineProperty(window, 'matchMedia', {
          writable: true,
          value: mockMatchMedia,
        });

        const { result } = renderHook(() => useAccessibility());

        // Property: accessibility preferences should match user's system preferences
        expect(result.current.prefersReducedMotion).toBe(prefersReduced);
        expect(result.current.shouldShowVideo).toBe(!prefersReduced);
        
        // Verify matchMedia was called with correct query
        expect(mockMatchMedia).toHaveBeenCalledWith('(prefers-reduced-motion: reduce)');
      }),
      { numRuns: 100 }
    );
  });

  it('should provide consistent accessibility state', () => {
    fc.assert(
      fc.property(fc.boolean(), (motionPreference) => {
        const mockMatchMedia = vi.fn().mockImplementation(() => ({
          matches: motionPreference,
          addEventListener: vi.fn(),
          removeEventListener: vi.fn(),
          addListener: vi.fn(),
          removeListener: vi.fn(),
        }));
        
        Object.defineProperty(window, 'matchMedia', {
          writable: true,
          value: mockMatchMedia,
        });

        const { result } = renderHook(() => useAccessibility());
        
        // Property: accessibility state should be internally consistent
        const { prefersReducedMotion, shouldShowVideo } = result.current;
        expect(shouldShowVideo).toBe(!prefersReducedMotion);
      }),
      { numRuns: 100 }
    );
  });
});