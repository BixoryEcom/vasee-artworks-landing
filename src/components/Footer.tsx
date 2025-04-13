
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-vasee-dark py-20 px-6">
      <div className="grain-overlay"></div>
      
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-10"
          >
            <img 
              src="https://placehold.co/200x80/1A1F2C/ffffff?text=VASEE"
              alt="VASEE" 
              className="h-12 md:h-14"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <a
              href="https://vasee.art"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3 mt-6 bg-transparent border border-white/30 hover:border-white/60 text-white text-lg font-maison transition-all duration-300 hover:bg-white/5"
            >
              Enter the Gallery
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col md:flex-row justify-between items-center border-t border-white/10 pt-10"
        >
          <div className="mb-6 md:mb-0">
            <p className="text-vasee-gray text-sm">
              &copy; Vasee 2025. All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-vasee-gray hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a 
              href="mailto:contact@vasee.art" 
              className="text-vasee-gray hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
