import React, { useEffect, useRef, useState } from "react";
import { useAnimation, motion } from "framer-motion";
import FloatingParticles from "./hero/FloatingParticles";
import AnimatedLightOrbs from "./hero/AnimatedLightOrbs";
import HeroLogo from "./hero/HeroLogo";
import HeroBanner from "./hero/HeroBanner";
import HeroContent from "./hero/HeroContent";

const videoSources = ["/hero-bg.mp4", "/hero-bg2.mp4"];

const Hero = () => {
  const controls = useAnimation();
  const [currentVideo, setCurrentVideo] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  
  useEffect(() => {
    // Start animations
    controls.start({
      opacity: [0, 1],
      transition: { duration: 2 }
    });
  }, [controls]);

  // Handle video end to switch to next video
  const handleVideoEnded = () => {
    setCurrentVideo((prev) => (prev + 1) % videoSources.length);
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
    }
  }, [currentVideo]);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0 h-full w-full">
        <video
          ref={videoRef}
          autoPlay
          loop={false}
          playsInline
          className="w-full h-full object-cover"
          onEnded={handleVideoEnded}
          muted={isMuted}
        >
          <source src={videoSources[currentVideo]} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      {/* Mute/Unmute Button - moved outside video container */}
      <button
        onClick={() => {
          if (videoRef.current) {
            videoRef.current.muted = !videoRef.current.muted;
            setIsMuted(videoRef.current.muted);
            if (!videoRef.current.muted) {
              videoRef.current.play();
            }
          }
        }}
        className="absolute bottom-4 right-4 z-40 bg-black/40 hover:bg-black/60 text-white rounded-full p-2 transition-colors duration-200 shadow-md focus:outline-none"
        aria-label={isMuted ? 'Unmute video' : 'Mute video'}
      >
        {isMuted ? (
          // Muted icon (simple SVG)
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l6 6m0-6l-6 6M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        ) : (
          // Unmuted icon (simple SVG)
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        )}
      </button>
      
      {/* Floating particles */}
      <div className="absolute inset-0 z-10">
        <FloatingParticles />
      </div>
      
      {/* Animated light orbs */}
      <div className="absolute inset-0 z-10">
        <AnimatedLightOrbs />
      </div>

      {/* Main hero content container - centered layout, extra padding */}
      <div className="relative z-20 w-full h-full flex flex-col justify-between items-center">
        {/* Icon (logo) above the brand name */}
        <div className="relative z-20 mt-4">
          <HeroLogo />
        </div>
        {/* Brand name below the logo, large and prominent */}
        <div className="w-full flex justify-center mt-2 mb-2">
          <motion.div
            className="font-maison tracking-widest text-5xl md:text-7xl lg:text-8xl font-bold uppercase relative overflow-hidden text-center gradient-text vasee-glow animate-fade-in-up"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0, backgroundPosition: ['0% 0', '100% 0', '0% 0'] }}
            transition={{ duration: 2, delay: 0.1, backgroundPosition: { duration: 8, repeat: Infinity, ease: 'linear' } }}
          >
            VASEE ART
            {/* Animated gradient shine overlay */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'linear-gradient(120deg, transparent 0%, #fff8 40%, transparent 60%)',
                WebkitMaskImage: 'linear-gradient(120deg, transparent 0%, #fff 40%, transparent 60%)',
                opacity: 0.18
              }}
              initial={{ x: '-100%' }}
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'linear', delay: 0.5 }}
            />
          </motion.div>
        </div>
        {/* Content in the middle */}
        <div className="relative z-20 mb-0">
          <HeroContent />
        </div>
        {/* Banner at the bottom */}
        <div className="relative z-20 w-full max-w-6xl mx-auto mb-8">
          <HeroBanner />
        </div>
      </div>

      {/* Responsive Design */}
      <style>{`
        @media (max-width: 768px) {
          .h-screen {
            height: 100vh;
          }
          .py-8 {
            padding-top: 2rem;
            padding-bottom: 2rem;
          }
          .text-4xl {
            font-size: 2.25rem;
          }
          .md\\:text-6xl {
            font-size: 3.75rem;
          }
          .lg\\:text-7xl {
            font-size: 4.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
