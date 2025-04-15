
import React, { useEffect } from "react";
import { useAnimation } from "framer-motion";
import VideoBackground from "./hero/VideoBackground";
import FloatingParticles from "./hero/FloatingParticles";
import AnimatedLightOrbs from "./hero/AnimatedLightOrbs";
import HeroLogo from "./hero/HeroLogo";
import HeroBanner from "./hero/HeroBanner";
import HeroContent from "./hero/HeroContent";

const Hero = () => {
  const controls = useAnimation();
  
  useEffect(() => {
    // Start animations
    controls.start({
      opacity: [0, 1],
      transition: { duration: 2 }
    });
  }, [controls]);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <VideoBackground />
      
      {/* Floating particles */}
      <FloatingParticles />
      
      {/* Animated light orbs */}
      <AnimatedLightOrbs />

      {/* Main hero content container - restructured for better layout */}
      <div className="relative z-20 w-full h-full flex flex-col items-center justify-between py-8">
        {/* Logo at the top */}
        <HeroLogo />
        
        {/* Content in the middle */}
        <HeroContent />
        
        {/* Banner at the bottom */}
        <div className="w-full max-w-6xl mx-auto mt-8">
          <HeroBanner />
        </div>
      </div>
    </section>
  );
};

export default Hero;
