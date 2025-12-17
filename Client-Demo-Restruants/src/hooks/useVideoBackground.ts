import { useState, useEffect, useRef } from 'react';
import { VideoState, VideoConfig, detectAutoplaySupport, isSlowConnection, isMobileDevice } from '@/utils/videoUtils';
import { useAccessibility } from './useAccessibility';

/**
 * Hook for managing video background state and behavior
 */
export const useVideoBackground = (config: VideoConfig) => {
  const [videoState, setVideoState] = useState<VideoState>({
    loadState: 'loading',
    canAutoplay: true, // Start optimistic
    isPlaying: false,
  });

  const videoRef = useRef<HTMLVideoElement>(null);
  const { shouldShowVideo } = useAccessibility();

  useEffect(() => {
    const initializeVideo = async () => {
      // Only check for reduced motion - be less restrictive
      if (!shouldShowVideo) {
        setVideoState(prev => ({ ...prev, loadState: 'fallback' }));
        return;
      }

      // Set video as loaded immediately - let the browser handle autoplay
      setVideoState(prev => ({ ...prev, loadState: 'loaded', canAutoplay: true }));

      // If we have a video element, set up event listeners
      const video = videoRef.current;
      if (video) {
        const handleLoadedData = () => {
          setVideoState(prev => ({ ...prev, loadState: 'loaded' }));
        };

        const handlePlay = () => {
          setVideoState(prev => ({ ...prev, isPlaying: true }));
        };

        const handlePause = () => {
          setVideoState(prev => ({ ...prev, isPlaying: false }));
        };

        const handleError = () => {
          console.warn('Video failed to load, falling back to image');
          setVideoState(prev => ({ ...prev, loadState: 'error' }));
        };

        video.addEventListener('loadeddata', handleLoadedData);
        video.addEventListener('play', handlePlay);
        video.addEventListener('pause', handlePause);
        video.addEventListener('error', handleError);

        return () => {
          video.removeEventListener('loadeddata', handleLoadedData);
          video.removeEventListener('play', handlePlay);
          video.removeEventListener('pause', handlePause);
          video.removeEventListener('error', handleError);
        };
      }
    };

    initializeVideo();
  }, [shouldShowVideo]);

  const shouldShowFallback = videoState.loadState === 'fallback' || videoState.loadState === 'error';

  return {
    videoRef,
    videoState,
    shouldShowFallback,
    shouldShowVideo: shouldShowVideo && !shouldShowFallback,
  };
};