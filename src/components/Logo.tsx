
import React from 'react';
import { motion } from 'framer-motion';

const Logo = ({ className = '' }: { className?: string }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className={`${className} animate-glow-pulse`}
    >
      <img 
        src="https://placehold.co/200x80/1A1F2C/ffffff?text=VASEE" 
        alt="VASEE Logo" 
        className="h-16 md:h-20" 
      />
    </motion.div>
  );
};

export default Logo;
