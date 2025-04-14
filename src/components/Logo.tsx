
import React from 'react';
import { motion } from 'framer-motion';

const Logo = ({ className = '' }: { className?: string }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className={`${className} relative flex flex-col items-center`}
    >
      <div className="absolute -inset-2 bg-vasee-glow/20 rounded-full blur-xl animate-glow-pulse"></div>
      <motion.img 
        src="/lovable-uploads/bab78167-9562-4be0-b7df-f7c9eefea51c.png" 
        alt="VASEE Logo" 
        className="h-20 md:h-24 relative z-10 drop-shadow-[0_0_15px_rgba(255,215,0,0.5)]" 
        whileHover={{ 
          scale: 1.05,
          filter: "drop-shadow(0 0 20px rgba(255, 215, 0, 0.7))"
        }}
        transition={{ type: "spring", stiffness: 300, damping: 10 }}
      />
      <div className="mt-3 font-maison tracking-widest text-xl font-bold text-white/90 uppercase text-glow">
        VASEE
      </div>
    </motion.div>
  );
};

export default Logo;
