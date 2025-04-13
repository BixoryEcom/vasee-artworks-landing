
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ArtistSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0.1, 0.3, 0.7, 0.9], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0.1, 0.3, 0.7, 0.9], [0.95, 1, 1, 0.95]);
  const y = useTransform(scrollYProgress, [0.1, 0.3, 0.7, 0.9], [50, 0, 0, -50]);
  
  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen md:h-screen w-full flex flex-col md:flex-row bg-vasee-dark"
    >
      <div className="grain-overlay"></div>
      <div className="vignette"></div>
      
      {/* Video Half */}
      <motion.div 
        className="w-full md:w-1/2 h-[50vh] md:h-full relative overflow-hidden"
        style={{ opacity, scale }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute w-full h-full object-cover"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-hands-molding-a-clay-pot-22235-large.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-vasee-dark to-transparent z-10"></div>
      </motion.div>
      
      {/* Quote Half */}
      <motion.div 
        className="w-full md:w-1/2 h-[50vh] md:h-full flex justify-center items-center p-8 md:p-16"
        style={{ opacity, y }}
      >
        <div>
          <h2 className="text-2xl md:text-3xl font-maison font-light text-white/90 mb-8">
            The Artist's Touch
          </h2>
          <blockquote className="text-3xl md:text-4xl lg:text-5xl font-maison font-light italic text-white leading-tight mb-8 text-glow">
            "Crafted by hands that listen to silence."
          </blockquote>
          <p className="text-vasee-gray">
            Every VASEE piece bears the subtle markings of its maker—a testament to the human spirit embodied within.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default ArtistSection;
