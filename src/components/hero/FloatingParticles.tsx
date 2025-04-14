
import React, { useEffect, useRef } from "react";

const FloatingParticles = () => {
  const particlesRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
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
  }, []);

  return <div ref={particlesRef} className="absolute inset-0 overflow-hidden pointer-events-none"></div>;
};

export default FloatingParticles;
