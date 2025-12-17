import { useState, useEffect } from 'react';
import { prefersReducedMotion } from '@/utils/videoUtils';

export interface AccessibilityPreferences {
  prefersReducedMotion: boolean;
  shouldShowVideo: boolean;
}

/**
 * Hook for detecting and managing accessibility preferences
 */
export const useAccessibility = (): AccessibilityPreferences => {
  const [preferences, setPreferences] = useState<AccessibilityPreferences>({
    prefersReducedMotion: false,
    shouldShowVideo: true,
  });

  useEffect(() => {
    const updatePreferences = () => {
      const reducedMotion = prefersReducedMotion();
      setPreferences({
        prefersReducedMotion: reducedMotion,
        shouldShowVideo: !reducedMotion,
      });
    };

    // Initial check
    updatePreferences();

    // Listen for changes in motion preferences
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleChange = () => updatePreferences();
    
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
    } else {
      // Fallback for older browsers
      mediaQuery.addListener(handleChange);
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', handleChange);
      } else {
        mediaQuery.removeListener(handleChange);
      }
    };
  }, []);

  return preferences;
};