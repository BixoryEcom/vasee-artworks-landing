
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
    >
      <ArrowDown className="text-white h-6 w-6 opacity-75 hover:text-vasee-vibrant hover:opacity-100 transition-colors" />
    </motion.div>
  );
};

export default ScrollIndicator;
