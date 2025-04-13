
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="relative w-full h-full animate-slow-zoom">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="object-cover w-full h-full"
          >
            <source
              src="https://assets.mixkit.co/videos/preview/mixkit-throwing-white-ceramics-22242-large.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-vasee-dark/90 z-10"></div>
          <div className="vignette"></div>
          <div className="grain-overlay"></div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-20 flex flex-col justify-center items-center h-full px-4 text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-6"
        >
          <img 
            src="https://placehold.co/200x80/1A1F2C/ffffff?text=VASEE" 
            alt="VASEE" 
            className="h-16 md:h-20 animate-glow-pulse"
          />
        </motion.div>

        <div className="overflow-hidden mb-8 max-w-3xl">
          <motion.h1 
            className="font-maison text-4xl md:text-6xl lg:text-7xl text-white font-light tracking-tight text-glow"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Designed to Hold Presence.
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          whileHover={{ scale: 1.05 }}
        >
          <a
            href="https://vasee.art"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 mt-8 bg-transparent border border-white/30 hover:border-vasee-vibrant text-white text-lg font-maison transition-all duration-300 hover:bg-vasee-vibrant/10 hover:shadow-[0_0_20px_rgba(139,92,246,0.3)]"
          >
            Enter the Gallery 
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
