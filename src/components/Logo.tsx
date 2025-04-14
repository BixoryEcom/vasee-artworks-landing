
import React from 'react';
import { motion } from 'framer-motion';

const Logo = ({ className = '' }: { className?: string }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2 }} // Slowed down animation
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
          className="h-28 w-28 md:h-32 md:w-32 object-contain drop-shadow-[0_0_15px_rgba(255,215,0,0.5)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.2 }}
        />
      </motion.div>
      
      <motion.div 
        className="mt-3 font-maison tracking-widest text-3xl md:text-4xl font-bold uppercase"
        style={{ 
          color: '#cb6ce6',
          textTransform: 'uppercase'  // Ensure uppercase with inline style as well
        }}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 1 }}
      >
        VASEE
      </motion.div>
    </motion.div>
  );
};

export default Logo;
