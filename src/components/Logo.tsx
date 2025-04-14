
import React from 'react';
import { motion } from 'framer-motion';

const Logo = ({ className = '' }: { className?: string }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className={`${className} flex flex-col items-center`}
    >
      <motion.div
        className="rounded-md p-1 bg-black/50 border border-white/10"
        whileHover={{ 
          scale: 1.05,
          boxShadow: "0 0 25px rgba(155, 135, 245, 0.6)"
        }}
        transition={{ type: "spring", stiffness: 300, damping: 10 }}
      >
        <motion.img 
          src="/lovable-uploads/bab78167-9562-4be0-b7df-f7c9eefea51c.png" 
          alt="VASEE Logo" 
          className="h-14 w-14 md:h-16 md:w-16 object-contain drop-shadow-[0_0_15px_rgba(255,215,0,0.5)]"
        />
      </motion.div>
      
      <motion.div 
        className="mt-3 font-maison tracking-widest text-xl md:text-2xl font-bold uppercase"
        style={{ color: '#cb6ce6' }}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        VASEE
      </motion.div>
    </motion.div>
  );
};

export default Logo;

