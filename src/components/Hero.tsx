import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import AnimatedBackground from "./hero/AnimatedBackground";
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
    <section className="relative w-full min-h-screen overflow-hidden py-12 flex items-center justify-center">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <AnimatedBackground />
      </div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 z-10">
        <FloatingParticles />
      </div>
      
      {/* Animated light orbs */}
      <div className="absolute inset-0 z-10">
        <AnimatedLightOrbs />
      </div>

      {/* Main hero content container - centered layout, extra padding */}
      <div className="relative z-20 w-full flex flex-col items-center justify-center gap-8">
        {/* Brand name above the logo, large and prominent */}
        <div className="w-full flex justify-center mt-12 md:mt-20">
          <motion.div 
            className="font-maison tracking-widest text-6xl md:text-8xl font-bold uppercase relative overflow-hidden text-center mb-4 text-glow animate-fade-in-up"
            style={{ 
              background: `linear-gradient(90deg, #cb6ce6 0%, #9b87f5 25%, #D6BCFA 50%, #9b87f5 75%, #cb6ce6 100%)`,
              backgroundSize: '200% 100%',
              backgroundPosition: '0% 0',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              filter: 'drop-shadow(0 4px 32px #cb6ce6aa) drop-shadow(0 1px 2px #0008)'
            }}
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
        
        {/* Logo below the brand name */}
        <div className="relative z-20">
          <HeroLogo />
        </div>
        
        {/* Content in the middle */}
        <div className="relative z-20">
          <HeroContent />
        </div>
        
        {/* Banner at the bottom */}
        <div className="relative z-20 w-full max-w-6xl mx-auto mt-8">
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
