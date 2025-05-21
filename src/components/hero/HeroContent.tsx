import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const HeroContent = () => {
  return (
    <div className="flex flex-col justify-center items-center px-4 text-center my-8">
      <motion.div 
        className="overflow-hidden max-w-3xl mb-10"
        whileHover={{
          scale: 1.02,
          transition: { duration: 0.3 }
        }}
      >
        <motion.h1 
          className="font-maison text-4xl md:text-6xl lg:text-7xl text-white font-light tracking-tight text-glow"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          whileHover={{
            scale: 1.05,
            textShadow: "0 0 15px rgba(155, 135, 245, 0.9), 0 0 30px rgba(155, 135, 245, 0.5)",
            color: "#9b87f5",
            transition: { 
              duration: 0.4,
              ease: "easeOut"
            }
          }}
        >
          Designed to Hold Presence
        </motion.h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        whileHover={{ 
          scale: 1.05,
          transition: { duration: 0.3 }
        }}
        className="mt-8"
      >
        <motion.a
          href="#emotional-glass-collection"
          className="inline-flex items-center px-8 py-3 bg-transparent border border-white/30 hover:border-vasee-vibrant text-white text-lg font-maison transition-all duration-300 hover:bg-vasee-vibrant/10 hover:shadow-[0_0_20px_rgba(139,92,246,0.3)]"
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.2 }
          }}
          whileTap={{
            scale: 0.95,
            transition: { duration: 0.1 }
          }}
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('emotional-glass-collection')?.scrollIntoView({ 
              behavior: 'smooth',
              block: 'start'
            });
          }}
        >
          <motion.span
            initial={{ x: 0 }}
            whileHover={{ x: -5 }}
            transition={{ duration: 0.2 }}
          >
            Explore Our Collection
          </motion.span>
          <motion.div
            initial={{ x: 0 }}
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            <ArrowRight className="ml-2 h-5 w-5" />
          </motion.div>
        </motion.a>
      </motion.div>
    </div>
  );
};

export default HeroContent;
