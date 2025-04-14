
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
        className="rounded-md p-2 bg-transparent border border-white/10"
        whileHover={{ 
          scale: 1.05,
          boxShadow: "0 0 25px rgba(155, 135, 245, 0.6)"
        }}
        transition={{ type: "spring", stiffness: 300, damping: 10 }}
      >
        <motion.img 
          src="/lovable-uploads/fb253245-2a05-45a2-9954-4724b7319a22.png" 
          alt="VASEE Logo" 
          className="h-20 w-20 md:h-24 md:w-24 object-contain drop-shadow-[0_0_15px_rgba(255,215,0,0.5)]"
        />
      </motion.div>
      
      <motion.div 
        className="mt-3 font-maison tracking-widest text-2xl md:text-3xl font-bold uppercase"
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
