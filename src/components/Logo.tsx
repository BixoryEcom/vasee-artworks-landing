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
        {/* Logo image with larger size and enhanced illumination */}
        <motion.img 
          src="/lovable-uploads/fb253245-2a05-45a2-9954-4724b7319a22.png" 
          alt="VASEE ART Logo" 
          className="h-40 w-40 md:h-48 md:w-48 object-contain"
          style={{
            filter: `drop-shadow(0 0 12px rgba(155, 135, 245, 0.8)) 
                     drop-shadow(0 0 20px rgba(177, 138, 255, 0.6))`
          }}
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ 
            opacity: 1, 
            y: 0, 
            scale: 1,
            filter: [
              'drop-shadow(0 0 6px rgba(155, 135, 245, 0.4))', 
              'drop-shadow(0 0 20px rgba(177, 138, 255, 1))',
              'drop-shadow(0 0 12px rgba(155, 135, 245, 0.8))'
            ]
          }}
          transition={{ 
            duration: 1.2, 
            delay: 0.2,
            type: "spring",
            stiffness: 260, 
            damping: 20,
            filter: {
              duration: 2,
              repeat: 0,
              ease: "easeInOut"
            }
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
      
      <motion.div 
        className="mt-4 font-maison tracking-widest text-4xl md:text-5xl font-bold uppercase relative overflow-hidden"
        style={{ 
          background: `linear-gradient(90deg, 
            #cb6ce6 0%, 
            #9b87f5 25%, 
            #D6BCFA 50%, 
            #9b87f5 75%, 
            #cb6ce6 100%)`,
          backgroundSize: '200% 100%',
          backgroundPosition: `${gradientPosition}% 0`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          textTransform: 'uppercase'
        }}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 1 }}
      >
        VASEE ART
      </motion.div>
    </motion.div>
  );
};

export default Logo;
