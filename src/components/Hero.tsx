
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

      {/* Hero Logo - Now placed at the top */}
      <HeroLogo />

      {/* Hero Banner Image */}
      <HeroBanner />

      {/* Hero Content */}
      <HeroContent />
    </section>
  );
};

export default Hero;
