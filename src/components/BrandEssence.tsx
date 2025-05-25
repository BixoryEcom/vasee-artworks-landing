import React, { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import AnimatedText from "./AnimatedText";

const BrandEssence = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const glowOrbsRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  
  useEffect(() => {
    const createGlowOrbs = () => {
      if (glowOrbsRef.current) {
        // Clear previous orbs
        while (glowOrbsRef.current.firstChild) {
          glowOrbsRef.current.removeChild(glowOrbsRef.current.firstChild);
        }
        
        // Create new orbs
        const orbs = Array.from({ length: 6 }).map((_, i) => {
          const orb = document.createElement("div");
          
          // Randomize properties
          const size = Math.random() * 80 + 60;
          const left = Math.random() * 100;
          const top = Math.random() * 100;
          const opacity = Math.random() * 0.15 + 0.05;
          const hue = Math.floor(Math.random() * 30) + 250; // Purple-ish hues
          
          // Apply properties
          orb.className = "absolute rounded-full blur-3xl";
          orb.style.width = `${size}px`;
          orb.style.height = `${size}px`;
          orb.style.left = `${left}%`;
          orb.style.top = `${top}%`;
          orb.style.opacity = `${opacity}`;
          orb.style.background = `hsla(${hue}, 70%, 60%, 0.5)`;
          orb.style.mixBlendMode = "screen";
          
          // Animate
          const duration = (Math.random() * 20 + 20) * 1000; // 20-40 seconds
          const xMove = (Math.random() * 20 - 10); // -10 to 10
          const yMove = (Math.random() * 20 - 10); // -10 to 10
          
          orb.animate(
            [
              { transform: `translate(0, 0)` },
              { transform: `translate(${xMove}vw, ${yMove}vh)` }
            ],
            {
              duration,
              iterations: Infinity,
              direction: 'alternate',
              easing: 'ease-in-out'
            }
          );
          
          return orb;
        });
        
        orbs.forEach(orb => {
          glowOrbsRef.current?.appendChild(orb);
        });
      }
    };
    
    createGlowOrbs();
    
    // Clean up
    return () => {
      if (glowOrbsRef.current) {
        while (glowOrbsRef.current.firstChild) {
          glowOrbsRef.current.removeChild(glowOrbsRef.current.firstChild);
        }
      }
    };
  }, []);
  
  return (
    <section
      ref={sectionRef}
      className="relative w-full py-16 md:py-24 lg:py-32 bg-vasee-charcoal overflow-hidden"
    >
      <div className="grain-overlay"></div>
      <div className="vignette"></div>
      
      {/* Animated background elements */}
      <div ref={glowOrbsRef} className="absolute inset-0 overflow-hidden pointer-events-none z-0"></div>
      
      <motion.div
        className="absolute inset-0 bg-[url('https://assets.mixkit.co/videos/preview/mixkit-white-ceramic-texture-7307-large.mp4')] bg-cover bg-center opacity-[0.06] z-0"
        style={{ y }}
      ></motion.div>
      
      {/* Line design elements */}
      <div className="absolute left-0 top-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent z-10"></div>
      <div className="absolute left-0 bottom-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent z-10"></div>
      
      <motion.div 
        className="absolute left-8 top-8 w-24 h-24 md:w-40 md:h-40 border border-white/5 rounded-full z-0"
        animate={{ 
          rotate: 360,
          scale: [1, 1.05, 1]
        }}
        transition={{ 
          rotate: { duration: 40, ease: "linear", repeat: Infinity },
          scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
        }}
      />
      
      <motion.div 
        className="absolute right-12 bottom-12 w-32 h-32 md:w-64 md:h-64 border border-vasee-vibrant/10 rounded-full z-0"
        animate={{ rotate: -360 }}
        transition={{ duration: 60, ease: "linear", repeat: Infinity }}
      />
      
      <div className="container relative z-10 mx-auto px-4 md:px-6 max-w-4xl pt-4 md:pt-0">
        <AnimatedText
          text="At VASEE, we craft emotional vessels through our revolutionary glass fabrication process that captures the essence of ceramic with the elegance of glass. Each piece tells its own story—an artistic dialogue between material and meaning. Our vases aren't merely containers, but storytellers in your space—transformative objects that resonate with your spirit while elevating your surroundings through their thoughtful presence and artistic vision."
          className="font-maison text-base md:text-xl lg:text-2xl font-light leading-relaxed text-white/90 text-center"
          threshold={0.25}
        />
        
        {/* Animated underline */}
        <motion.div 
          className="w-20 h-px bg-vasee-vibrant/60 mx-auto mt-6 md:mt-10"
          animate={{ 
            width: ["5%", "20%", "5%"],
            opacity: [0.4, 0.8, 0.4]
          }}
          transition={{ 
            duration: 8, 
            ease: "easeInOut", 
            repeat: Infinity 
          }}
        />
      </div>

      {/* Responsive Design */}
      <style>{`
        @media (max-width: 768px) {
          .text-base {
            font-size: 1rem;
            line-height: 1.6;
          }
          .md\\:text-xl {
            font-size: 1.25rem;
          }
          .lg\\:text-2xl {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default BrandEssence;
