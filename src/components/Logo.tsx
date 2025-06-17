
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Logo = ({ className = '' }: { className?: string }) => {
  const [gradientPosition, setGradientPosition] = useState(0);
  
  useEffect(() => {
    // Animate gradient position for the text flashing effect
    const animationDuration = 3000; // 3 seconds for full animation
    const startTime = Date.now();
    
    const animateGradient = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / animationDuration, 1);
      
      // Move gradient from -100% to 200% for a flash effect
      const position = -100 + progress * 300;
      setGradientPosition(position);
      
      if (progress < 1) {
        requestAnimationFrame(animateGradient);
      }
    };
    
    requestAnimationFrame(animateGradient);
  }, []);
  
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2 }}
      className={`${className} flex flex-col items-center`}
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300, damping: 10 }}
        className="relative"
      >
        {/* Logo image with responsive sizing */}
        <motion.img 
          src="/lovable-uploads/fb253245-2a05-45a2-9954-4724b7319a22.png" 
          alt="VASEE ART Logo" 
          className="h-24 w-24 md:h-32 md:w-32 lg:h-40 lg:w-40 object-contain logo-glow"
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ 
            opacity: 1, 
            y: 0, 
            scale: 1
          }}
          transition={{ 
            duration: 1.2, 
            delay: 0.2,
            type: "spring",
            stiffness: 260, 
            damping: 20
          }}
        />
        
        {/* Illuminating effect achieved through CSS animation */}
        <motion.div 
          className="absolute inset-0 bg-transparent pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          style={{
            background: "transparent",
          }}
        >
          <div className="absolute inset-0 animate-sweep-light" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Logo;
