import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Instagram, Mail } from "lucide-react";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="relative bg-vasee-dark py-12 md:py-20 px-4 md:px-6 mt-auto">
      <div className="grain-overlay"></div>
      <div className="vignette"></div>
      
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center mb-12">
          <Logo className="mb-10" />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <a
              href="https://vasee.store"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3 mt-6 bg-transparent border border-white/30 hover:border-vasee-vibrant text-white text-lg font-maison transition-all duration-300 hover:bg-vasee-vibrant/10 hover:shadow-[0_0_20px_rgba(139,92,246,0.3)]"
            >
              Get Your Vasee
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
              className="text-vasee-gray hover:text-vasee-vibrant transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} className="hover:animate-glow-pulse" />
            </a>
            <a 
              href="mailto:contact@vasee.art" 
              className="text-vasee-gray hover:text-vasee-vibrant transition-colors"
              aria-label="Email"
            >
              <Mail size={20} className="hover:animate-glow-pulse" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Responsive Design */}
      <style jsx>{`
        @media (max-width: 768px) {
          .py-20 {
            padding-top: 5rem;
            padding-bottom: 5rem;
          }
          .px-6 {
            padding-left: 1.5rem;
            padding-right: 1.5rem;
          }
          .text-lg {
            font-size: 1.125rem;
          }
          .text-sm {
            font-size: 0.875rem;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
