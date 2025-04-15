
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const HeroContent = () => {
  return (
    <div className="flex flex-col justify-center items-center px-4 text-center my-8">
      <div className="overflow-hidden max-w-3xl mb-10">
        <motion.h1 
          className="font-maison text-4xl md:text-6xl lg:text-7xl text-white font-light tracking-tight text-glow"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Designed to Hold Presence
        </motion.h1>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        whileHover={{ scale: 1.05 }}
        className="mt-8"
      >
        <a
          href="https://vasee.art"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-8 py-3 bg-transparent border border-white/30 hover:border-vasee-vibrant text-white text-lg font-maison transition-all duration-300 hover:bg-vasee-vibrant/10 hover:shadow-[0_0_20px_rgba(139,92,246,0.3)]"
        >
          Explore Our Collection 
          <ArrowRight className="ml-2 h-5 w-5" />
        </a>
      </motion.div>
    </div>
  );
};

export default HeroContent;
