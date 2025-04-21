
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
      {/* Removed the image and replaced with a minimal design to maintain visual flow */}
      <div className="w-full max-w-5xl pt-3 pb-3 px-4 sm:px-8 flex items-center justify-between">
        <div className="h-[1px] flex-grow bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      </div>
    </motion.div>
  );
};

export default HeroBanner;
