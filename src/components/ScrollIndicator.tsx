import React from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const ScrollIndicator = () => {
  return (
    <motion.div
      className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        delay: 2,
        duration: 0.5,
        repeat: Infinity,
        repeatType: "reverse"
      }}
      whileHover={{
        scale: 1.2,
        transition: { duration: 0.2 }
      }}
    >
      <motion.div
        className="relative"
        whileHover={{
          y: 5,
          transition: { duration: 0.3 }
        }}
      >
        <motion.div
          className="absolute inset-0 bg-vasee-vibrant/20 rounded-full blur-lg"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <ArrowDown className="relative text-white h-6 w-6 opacity-75 hover:text-vasee-vibrant hover:opacity-100 transition-colors" />
      </motion.div>
    </motion.div>
  );
};

export default ScrollIndicator;
