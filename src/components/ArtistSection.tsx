
import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { loadImage, removeBackground } from "../utils/imageProcessing";

const ArtistSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [processedImage, setProcessedImage] = useState<string | null>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0.1, 0.3, 0.7, 0.9], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0.1, 0.3, 0.7, 0.9], [0.95, 1, 1, 0.95]);
  const y = useTransform(scrollYProgress, [0.1, 0.3, 0.7, 0.9], [50, 0, 0, -50]);

  useEffect(() => {
    const processImage = async () => {
      try {
        const image = await loadImage("/lovable-uploads/73390a27-545b-4778-821a-09e948195494.png");
        const processed = await removeBackground(image);
        setProcessedImage(processed);
      } catch (error) {
        console.error("Failed to process image:", error);
      }
    };

    processImage();
  }, []);
  
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
        {processedImage ? (
          <img
            src={processedImage}
            alt="Artistic ceramic vase with red cat design"
            className="absolute w-full h-full object-contain"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 border-4 border-white/20 border-t-white/80 rounded-full animate-spin"></div>
          </div>
        )}
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
    </section>
  );
};

export default ArtistSection;
