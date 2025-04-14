
import React from "react";

const VideoBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="relative w-full h-full animate-slow-zoom">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="object-cover w-full h-full"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-throwing-white-ceramics-22242-large.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-vasee-dark/90 z-10"></div>
        <div className="vignette"></div>
        <div className="grain-overlay"></div>
      </div>
    </div>
  );
};

export default VideoBackground;
