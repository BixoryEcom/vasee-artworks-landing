
import React from "react";
import { motion } from "framer-motion";
import Logo from "../Logo";

const HeroLogo = () => {
  return (
    <motion.div 
      className="w-full flex justify-center"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <Logo className="scale-90 md:scale-100" />
    </motion.div>
  );
};

export default HeroLogo;
