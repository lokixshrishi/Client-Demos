import React, { useState, useRef, useEffect } from 'react';

export interface VideoBackgroundProps {
  src: string;
  fallbackImage: string;
  className?: string;
  onLoadError?: () => void;
  onLoadSuccess?: () => void;
}

const VideoBackground: React.FC<VideoBackgroundProps> = ({
  src,
  fallbackImage,
  className = '',
  onLoadError,
  onLoadSuccess,
}) => {
  const [hasError, setHasError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoError = () => {
    console.error('Video failed to load:', src);
    setHasError(true);
    onLoadError?.();
  };

  const handleVideoLoad = () => {
    console.log('Video loaded successfully:', src);
    onLoadSuccess?.();
  };

  // Always try to show video first, only fallback on error
  const shouldShowVideo = !hasError;
  const shouldShowFallback = hasError;

  console.log('VideoBackground render:', { hasError, shouldShowVideo, shouldShowFallback, src });

  return (
    <div className={`absolute inset-0 ${className}`}>
      {shouldShowVideo && (
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          style={{
            objectFit: 'cover',
            objectPosition: 'center center',
          }}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onError={handleVideoError}
          onLoadedData={handleVideoLoad}
          onCanPlay={() => console.log('Video can play')}
          aria-label="Background video showing restaurant atmosphere"
        >
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
      
      {shouldShowFallback && (
        <img
          src={fallbackImage}
          alt="Restaurant atmosphere"
          className="w-full h-full object-cover"
          style={{
            objectFit: 'cover',
            objectPosition: 'center center',
          }}
        />
      )}
    </div>
  );
};

export default VideoBackground;