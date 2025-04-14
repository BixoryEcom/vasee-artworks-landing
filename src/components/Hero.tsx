
import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Logo from "./Logo";

const Hero = () => {
  const controls = useAnimation();
  const particlesRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Start animations
    controls.start({
      opacity: [0, 1],
      transition: { duration: 2 }
    });
    
    // Particles animation
    if (particlesRef.current) {
      const particles = Array.from({ length: 20 }).map(() => {
        const particle = document.createElement("div");
        const size = Math.random() * 2 + 1;
        particle.className = "absolute rounded-full bg-white/10 z-10";
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.opacity = `${Math.random() * 0.5 + 0.1}`;
        particle.style.filter = `blur(${Math.random() * 2}px)`;
        
        // Animation
        const duration = Math.random() * 60 + 30;
        const direction = Math.random() > 0.5 ? 1 : -1;
        const delay = Math.random() * 10;
        
        particle.animate(
          [
            { transform: 'translateY(0) translateX(0)' },
            { transform: `translateY(${direction * 100}px) translateX(${direction * 30}px)` }
          ],
          {
            duration: duration * 1000,
            iterations: Infinity,
            direction: 'alternate',
            easing: 'ease-in-out',
            delay: delay * 1000
          }
        );
        
        return particle;
      });
      
      particles.forEach(particle => {
        particlesRef.current?.appendChild(particle);
      });
      
      return () => {
        particles.forEach(particle => {
          particle.remove();
        });
      };
    }
  }, [controls]);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
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

      {/* Floating particles */}
      <div ref={particlesRef} className="absolute inset-0 overflow-hidden pointer-events-none"></div>
      
      {/* Animated light orb */}
      <motion.div 
        className="absolute rounded-full bg-gradient-to-b from-vasee-vibrant/30 to-transparent blur-3xl w-32 h-32 z-0"
        animate={{
          x: [0, 10, -30, 0],
          y: [0, -20, 30, 0],
          opacity: [0.3, 0.5, 0.4, 0.3]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          top: '30%',
          left: '20%'
        }}
      />
      
      <motion.div 
        className="absolute rounded-full bg-gradient-to-b from-vasee-accent/20 to-transparent blur-3xl w-48 h-48 z-0"
        animate={{
          x: [0, 40, -10, 0],
          y: [0, 30, -40, 0],
          opacity: [0.2, 0.3, 0.2, 0.2]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        style={{
          top: '50%',
          right: '15%'
        }}
      />

      {/* Hero Banner - Added as an overlay with proper positioning */}
      <motion.div 
        className="absolute z-10 w-full h-full flex items-center justify-center pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <div className="relative w-11/12 md:w-4/5 lg:w-3/5 max-w-5xl aspect-[16/9] overflow-hidden rounded-lg">
          <motion.img
            src="https://images.unsplash.com/photo-1486718448742-163732cd1544?auto=format&fit=crop&q=80&w=1200"
            alt="VASEE artistic glass vase"
            className="w-full h-full object-cover brightness-75"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
          />
          <div className="absolute inset-0 bg-black/30 mix-blend-overlay"></div>
          
          {/* Animated highlight effect */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent"
            initial={{ x: '-100%', opacity: 0 }}
            animate={{ x: '100%', opacity: [0, 0.3, 0] }}
            transition={{
              duration: 3,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 5
            }}
          />
        </div>
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-20 flex flex-col justify-center items-center h-full px-4 text-center">
        <div className="mb-16">
          <Logo />
        </div>

        <div className="overflow-hidden max-w-3xl mb-10">
          <motion.h1 
            className="font-maison text-4xl md:text-6xl lg:text-7xl text-white font-light tracking-tight text-glow"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Designed to Hold Presence
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          whileHover={{ scale: 1.05 }}
          className="mt-8"
        >
          <a
            href="https://vasee.art"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 bg-transparent border border-white/30 hover:border-vasee-vibrant text-white text-lg font-maison transition-all duration-300 hover:bg-vasee-vibrant/10 hover:shadow-[0_0_20px_rgba(139,92,246,0.3)]"
          >
            Explore Our Collection 
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
