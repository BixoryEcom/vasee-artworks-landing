
import React from "react";
import { motion } from "framer-motion";

const HeroBanner = () => {
  return (
    <motion.div 
      className="w-full flex items-center justify-center pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.3 }}
    >
      <div className="relative w-full max-w-5xl aspect-[16/9] overflow-hidden rounded-lg">
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
  );
};

export default HeroBanner;
