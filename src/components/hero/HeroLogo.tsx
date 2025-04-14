
import React from "react";
import { motion } from "framer-motion";
import Logo from "../Logo";

const HeroLogo = () => {
  return (
    <motion.div 
      className="absolute z-30 top-[5%] left-1/2 transform -translate-x-1/2 w-full flex flex-col items-center"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <Logo className="scale-110" />
    </motion.div>
  );
};

export default HeroLogo;
