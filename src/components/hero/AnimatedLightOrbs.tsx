
import React from "react";
import { motion } from "framer-motion";

const AnimatedLightOrbs = () => {
  return (
    <>
      <motion.div 
        className="absolute rounded-full bg-gradient-to-b from-vasee-vibrant/30 to-transparent blur-3xl w-32 h-32 z-0"
        animate={{
          x: [0, 10, -30, 0],
          y: [0, -20, 30, 0],
          opacity: [0.3, 0.5, 0.4, 0.3]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          top: '30%',
          left: '20%'
        }}
      />
      
      <motion.div 
        className="absolute rounded-full bg-gradient-to-b from-vasee-accent/20 to-transparent blur-3xl w-48 h-48 z-0"
        animate={{
          x: [0, 40, -10, 0],
          y: [0, 30, -40, 0],
          opacity: [0.2, 0.3, 0.2, 0.2]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        style={{
          top: '50%',
          right: '15%'
        }}
      />
    </>
  );
};

export default AnimatedLightOrbs;
