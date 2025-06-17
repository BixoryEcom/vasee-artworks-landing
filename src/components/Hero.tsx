
import React, { useEffect, useRef, useState } from "react";
import { useAnimation, motion } from "framer-motion";
import FloatingParticles from "./hero/FloatingParticles";
import AnimatedLightOrbs from "./hero/AnimatedLightOrbs";
import HeroLogo from "./hero/HeroLogo";
import HeroBanner from "./hero/HeroBanner";
import HeroContent from "./hero/HeroContent";
import PowderTextReveal from "./hero/PowderTextReveal";

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
    // Try to force video autoplay on mobile
    if (videoRef.current && videoRef.current.muted) {
      const playPromise = videoRef.current.play();
      if (playPromise && typeof playPromise.then === 'function') {
        playPromise.catch(() => {/* ignore errors */});
      }
    }
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
      {/* Animated Background - Absolutely positioned to ensure flush positioning */}
      <div className="absolute top-0 left-0 w-full h-full">
        <video
          ref={videoRef}
          autoPlay
          loop={false}
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
          onEnded={handleVideoEnded}
          muted={isMuted}
        >
          <source src={videoSources[currentVideo]} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      {/* Mute/Unmute Button */}
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
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l6 6m0-6l-6 6M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        ) : (
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

      {/* Main hero content container - optimized vertical spacing */}
      <div className="relative z-20 w-full h-full flex flex-col justify-center items-center px-4">
        {/* Brand name - reduced size for better fit */}
        <div className="w-full flex justify-center mb-2 md:mb-4 relative">
          <PowderTextReveal className="font-maison tracking-widest text-4xl md:text-6xl lg:text-7xl font-bold uppercase relative overflow-hidden text-center gradient-text vasee-glow animate-fade-in-up" />
        </div>
        
        {/* Icon (logo) - reduced size */}
        <div className="relative z-20 mb-3 md:mb-6">
          <HeroLogo />
        </div>
        
        {/* Subtitle - compact spacing */}
        <div className="flex flex-col justify-center items-center text-center mb-4 md:mb-8">
          <motion.div 
            className="overflow-hidden max-w-3xl mb-3 md:mb-6"
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
          >
            <motion.h1 
              className="font-maison text-lg md:text-xl lg:text-2xl text-white font-light tracking-tight text-glow"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              whileHover={{
                scale: 1.05,
                textShadow: "0 0 15px rgba(155, 135, 245, 0.9), 0 0 30px rgba(155, 135, 245, 0.5)",
                color: "#9b87f5",
                transition: { 
                  duration: 0.4,
                  ease: "easeOut"
                }
              }}
            >
              Designed to Hold Presence
            </motion.h1>
          </motion.div>
          
          {/* CTA Button - compact design */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.3 }
            }}
          >
            <motion.a
              href="#emotional-glass-collection"
              className="inline-flex items-center px-6 py-2.5 bg-transparent border border-white/30 hover:border-vasee-vibrant text-white text-base md:text-lg font-maison transition-all duration-300 hover:bg-vasee-vibrant/10 hover:shadow-[0_0_20px_rgba(139,92,246,0.3)]"
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              whileTap={{
                scale: 0.95,
                transition: { duration: 0.1 }
              }}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('emotional-glass-collection')?.scrollIntoView({ 
                  behavior: 'smooth',
                  block: 'start'
                });
              }}
            >
              <motion.span
                initial={{ x: 0 }}
                whileHover={{ x: -5 }}
                transition={{ duration: 0.2 }}
              >
                Explore Our Collection
              </motion.span>
              <motion.div
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="ml-2 h-4 w-4 md:h-5 md:w-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </motion.div>
            </motion.a>
          </motion.div>
        </div>
        
        {/* Banner at the bottom - compact */}
        <div className="relative z-20 w-full max-w-6xl mx-auto">
          <HeroBanner />
        </div>
      </div>
    </section>
  );
};

export default Hero;
