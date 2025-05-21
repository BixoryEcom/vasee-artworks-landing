import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const TeaseSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0.1, 0.3, 0.5, 0.9], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0.3, 0.5], [0.8, 1]);
  const glow = useTransform(scrollYProgress, [0.3, 0.5], [0, 30]);
  const rotate = useTransform(scrollYProgress, [0.3, 0.6], [0, 5]);
  
  // More reliable image URL with fallback
  const imageUrl = "https://images.pexels.com/photos/1145720/pexels-photo-1145720.jpeg?auto=compress&cs=tinysrgb&w=800";
  const fallbackUrl = "https://images.pexels.com/photos/3651820/pexels-photo-3651820.jpeg?auto=compress&cs=tinysrgb&w=800";
  
  return (
    <section ref={ref} className="relative min-h-[300px] md:h-[50vh] bg-vasee-dark flex items-center justify-center overflow-hidden">
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
        {!imageLoaded && (
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-20 h-20 rounded-full border-t-2 border-b-2 border-white animate-spin"></div>
          </div>
        )}
        <img 
          src={imageUrl}
          alt="Glowing Vasee silhouette" 
          className={`w-full h-full object-contain opacity-50 transition-opacity duration-500 ${imageLoaded ? 'opacity-50' : 'opacity-0'}`}
          onLoad={() => setImageLoaded(true)}
          onError={(e) => {
            // If primary image fails, try fallback
            (e.target as HTMLImageElement).src = fallbackUrl;
          }}
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

      {/* Responsive Design */}
      <style jsx>{`
        @media (max-width: 768px) {
          .h-[50vh] {
            height: 40vh;
          }
          .w-[300px] {
            width: 200px;
          }
          .h-[300px] {
            height: 200px;
          }
          .md\\:w-[400px] {
            width: 300px;
          }
          .md\\:h-[400px] {
            height: 300px;
          }
          .text-2xl {
            font-size: 1.5rem;
          }
          .md\\:text-3xl {
            font-size: 2rem;
          }
          .lg\\:text-4xl {
            font-size: 2.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default TeaseSection;
