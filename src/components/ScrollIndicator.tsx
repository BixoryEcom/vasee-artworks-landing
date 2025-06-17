
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUp } from "lucide-react";

const ScrollIndicator = () => {
  const [isNearBottom, setIsNearBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Consider "near bottom" when within 20% of the total scroll distance
      const scrollThreshold = documentHeight - windowHeight * 1.2;
      setIsNearBottom(scrollTop > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    if (isNearBottom) {
      // Scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Scroll down by one viewport height
      window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 cursor-pointer"
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
      onClick={handleClick}
    >
      <motion.div
        className="relative"
        whileHover={{
          y: isNearBottom ? -5 : 5,
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
        {isNearBottom ? (
          <ArrowUp className="relative text-white h-6 w-6 opacity-75 hover:text-vasee-vibrant hover:opacity-100 transition-colors" />
        ) : (
          <ArrowDown className="relative text-white h-6 w-6 opacity-75 hover:text-vasee-vibrant hover:opacity-100 transition-colors" />
        )}
      </motion.div>
    </motion.div>
  );
};

export default ScrollIndicator;
