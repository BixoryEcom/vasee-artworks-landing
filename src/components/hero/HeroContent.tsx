
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Instagram, Twitter } from "lucide-react";

const StickyNav = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Use a fixed pixel value that works better on mobile
      // Mobile viewports are typically shorter, so use 600px as a reliable threshold
      const isMobile = window.innerWidth < 768;
      const threshold = isMobile ? 500 : window.innerHeight * 0.8;
      const shouldShow = window.scrollY > threshold;
      
      // Debug logging for mobile
      if (isMobile) {
        console.log('Mobile scroll debug:', {
          scrollY: window.scrollY,
          threshold,
          shouldShow,
          windowHeight: window.innerHeight,
          windowWidth: window.innerWidth
        });
      }
      
      setShow(shouldShow);
    };

    // Add throttling to improve performance
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    // Initial check
    handleScroll();
    
    window.addEventListener("scroll", throttledScroll);
    window.addEventListener("resize", handleScroll); // Handle orientation changes
    return () => {
      window.removeEventListener("scroll", throttledScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  // Debug logging for render state
  console.log('StickyNav render:', { show });

  // Don't render at all when hidden to avoid iOS Safari issues
  if (!show) {
    return null;
  }

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -60, opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 bg-vasee-dark/90 backdrop-blur-lg border-b border-white/10 shadow-lg flex items-center justify-between px-4 md:px-12 py-2 md:py-3"
      role="navigation"
      aria-label="Sticky navigation"
    >
      <a href="#" className="flex items-center gap-2 font-maison text-lg text-white font-bold tracking-widest">
        <img src="/lovable-uploads/fb253245-2a05-45a2-9954-4724b7319a22.png" alt="Vasee Logo" className="h-8 w-8 object-contain" />
        VASEE
      </a>
      <div className="flex items-center gap-2 md:gap-4">
        <a
          href="#emotional-glass-collection"
          className="inline-flex items-center px-3 md:px-5 py-2 bg-vasee-vibrant/90 hover:bg-vasee-vibrant text-white font-maison rounded-full shadow transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-vasee-vibrant text-sm md:text-base"
          onClick={e => {
            e.preventDefault();
            document.getElementById('emotional-glass-collection')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }}
        >
          Get Your Vasee
          <ArrowRight className="ml-1 md:ml-2 h-4 w-4 md:h-5 md:w-5" />
        </a>
        <a href="https://x.com" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="ml-2 text-vasee-gray hover:text-vasee-vibrant transition-colors">
          <Twitter className="h-5 w-5 md:h-6 md:w-6" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="ml-2 text-vasee-gray hover:text-vasee-vibrant transition-colors">
          <Instagram className="h-5 w-5 md:h-6 md:w-6" />
        </a>
      </div>
    </motion.nav>
  );
};

const HeroContent = () => {
  return (
    <>
      <StickyNav />
      <div className="flex flex-col justify-center items-center px-4 text-center my-2 md:my-8">
        <motion.div 
          className="overflow-hidden max-w-3xl mb-4 md:mb-10"
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.3 }
          }}
        >
          <motion.h1 
            className="font-maison text-xl md:text-2xl lg:text-3xl text-white font-light tracking-tight text-glow"
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
          className="mt-4 md:mt-8"
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
    </>
  );
};

export default HeroContent;
