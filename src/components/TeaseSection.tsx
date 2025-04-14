
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const TeaseSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0.1, 0.3, 0.5, 0.9], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0.3, 0.5], [0.8, 1]);
  const glow = useTransform(scrollYProgress, [0.3, 0.5], [0, 30]);
  const rotate = useTransform(scrollYProgress, [0.3, 0.6], [0, 5]);
  
  return (
    <section ref={ref} className="relative h-[50vh] bg-vasee-dark flex items-center justify-center overflow-hidden">
      <div className="grain-overlay"></div>
      <div className="vignette"></div>
      
      <motion.div
        style={{
          opacity,
          scale,
          filter: `blur(${glow}px)`,
          rotate,
        }}
        className="absolute w-[300px] h-[300px] md:w-[400px] md:h-[400px] animate-glow-pulse"
      >
        <img 
          src="https://images.unsplash.com/photo-1631125915902-761c0ab9106a?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3" 
          alt="Glowing Vasee silhouette" 
          className="w-full h-full object-contain opacity-50"
        />
      </motion.div>
      
      <motion.div
        style={{ opacity }}
        className="text-center z-10 px-6"
      >
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-maison font-light text-white text-glow">
          Stories in glass. Emotions in form. Coming soon.
        </h2>
      </motion.div>
    </section>
  );
};

export default TeaseSection;
