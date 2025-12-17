// Video utility functions for browser capability detection and video state management

export interface VideoConfig {
  src: string;
  fallbackImage: string;
  preload: 'none' | 'metadata' | 'auto';
  muted: boolean;
  loop: boolean;
  autoplay: boolean;
  playsInline: boolean;
}

export interface AccessibilityConfig {
  respectReducedMotion: boolean;
  showVideoControls: boolean;
  providePauseOption: boolean;
}

export type VideoLoadState = 'loading' | 'loaded' | 'error' | 'fallback';

export interface VideoState {
  loadState: VideoLoadState;
  canAutoplay: boolean;
  isPlaying: boolean;
}

/**
 * Detects if the browser supports video autoplay
 */
export const detectAutoplaySupport = async (): Promise<boolean> => {
  try {
    const video = document.createElement('video');
    video.muted = true;
    video.playsInline = true;
    video.src = 'data:video/mp4;base64,AAAAIGZ0eXBpc29tAAACAGlzb21pc28yYXZjMWF2YzEAAAAIZnJlZQAAABBtZGF0AAAA';
    
    const playPromise = video.play();
    if (playPromise !== undefined) {
      await playPromise;
      video.pause();
      return true;
    }
    return false;
  } catch {
    return false;
  }
};

/**
 * Checks if user prefers reduced motion
 */
export const prefersReducedMotion = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

/**
 * Detects if device is mobile
 */
export const isMobileDevice = (): boolean => {
  if (typeof window === 'undefined') return false;
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};

/**
 * Checks if connection is slow (for fallback decisions)
 */
export const isSlowConnection = (): boolean => {
  if (typeof navigator === 'undefined' || !('connection' in navigator)) return false;
  const connection = (navigator as any).connection;
  return connection && (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g');
};

/**
 * Creates default video configuration
 */
export const createVideoConfig = (src: string, fallbackImage: string): VideoConfig => ({
  src,
  fallbackImage,
  preload: 'metadata',
  muted: true,
  loop: true,
  autoplay: true,
  playsInline: true,
});

/**
 * Creates default accessibility configuration
 */
export const createAccessibilityConfig = (): AccessibilityConfig => ({
  respectReducedMotion: true,
  showVideoControls: false,
  providePauseOption: true,
});