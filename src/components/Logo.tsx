
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Logo = ({ className = '' }: { className?: string }) => {
  const [gradientPosition, setGradientPosition] = useState(0);
  
  useEffect(() => {
    // Animate gradient position for the flashing effect
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
        className="rounded-md p-2 bg-transparent border border-white/10"
        whileHover={{ 
          scale: 1.05,
          boxShadow: "0 0 25px rgba(155, 135, 245, 0.6)"
        }}
        transition={{ type: "spring", stiffness: 300, damping: 10 }}
      >
        <motion.img 
          src="/lovable-uploads/fb253245-2a05-45a2-9954-4724b7319a22.png" 
          alt="VASEE ART Logo" 
          className="h-28 w-28 md:h-32 md:w-32 object-contain drop-shadow-[0_0_15px_rgba(255,215,0,0.5)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.2 }}
        />
      </motion.div>
      
      <motion.div 
        className="mt-3 font-maison tracking-widest text-3xl md:text-4xl font-bold uppercase relative overflow-hidden"
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
