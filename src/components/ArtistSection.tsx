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
      
      {/* Image Half */}
      <motion.div 
        className="w-full md:w-1/2 h-[50vh] md:h-full relative overflow-hidden"
        style={{ opacity, scale }}
      >
        <img
          src="/lovable-uploads/0fc4b624-1f64-4e0a-a305-4a6e0af3f452.png"
          alt="Artistic ceramic vase with red cat design"
          className="absolute w-full h-full object-contain"
        />
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
            The Artist's Vision
          </h2>
          <blockquote className="text-3xl md:text-4xl lg:text-5xl font-maison font-light italic text-white leading-tight mb-8 text-glow">
            "Glass that speaks to your soul with a ceramic whisper."
          </blockquote>
          <p className="text-vasee-gray">
            Our revolutionary process transforms glass into emotion—each piece an original story waiting to connect with your spirit and personal narrative.
          </p>
        </div>
      </motion.div>

      {/* Responsive Design */}
      <style jsx>{`
        @media (max-width: 768px) {
          .w-full {
            padding: 1rem;
          }
          .text-2xl {
            font-size: 1.5rem;
          }
          .text-3xl {
            font-size: 2rem;
          }
          .text-4xl {
            font-size: 2.5rem;
          }
          .text-5xl {
            font-size: 3rem;
          }
        }
      `}</style>
    </section>
  );
};

export default ArtistSection;
