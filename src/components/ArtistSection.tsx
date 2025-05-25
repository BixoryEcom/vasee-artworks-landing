import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ArtistSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [parallax, setParallax] = useState({ x: 0, y: 0 });
  const [quoteTouched, setQuoteTouched] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0.1, 0.3, 0.7, 0.9], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0.1, 0.3, 0.7, 0.9], [0.95, 1, 1, 0.95]);
  const y = useTransform(scrollYProgress, [0.1, 0.3, 0.7, 0.9], [50, 0, 0, -50]);

  // Parallax effect for image half (desktop only)
  const handleImageMouseMove = (e: React.MouseEvent) => {
    if (window.innerWidth < 768) return;
    const rect = (e.target as HTMLDivElement).getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 24; // max 12px left/right
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 24; // max 12px up/down
    setParallax({ x, y });
  };
  const handleImageMouseLeave = () => setParallax({ x: 0, y: 0 });

  // Springy tap effect for quote (mobile)
  const handleQuoteTap = () => {
    if (window.innerWidth >= 768) return;
    setQuoteTouched(true);
    setTimeout(() => setQuoteTouched(false), 200);
  };

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen md:h-screen w-full flex flex-col md:flex-row bg-vasee-dark py-16 md:py-24 lg:py-32"
    >
      <div className="grain-overlay"></div>
      <div className="vignette"></div>
      
      {/* Image Half */}
      <motion.div 
        className="w-full md:w-1/2 h-[50vh] md:h-full relative overflow-hidden"
        style={{ opacity, scale, x: parallax.x, y: parallax.y }}
        onMouseMove={handleImageMouseMove}
        onMouseLeave={handleImageMouseLeave}
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
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-2xl md:text-3xl font-maison font-light text-white/90 mb-8">
            The Artist's Vision
          </h2>
          <motion.blockquote
            className="text-3xl md:text-4xl lg:text-5xl font-maison font-light italic text-white leading-tight mb-8 text-glow"
            whileTap={{ scale: 1.08 }}
            animate={{ scale: quoteTouched ? 1.08 : 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
            tabIndex={0}
            aria-label="Artist's quote"
            onTouchStart={handleQuoteTap}
            onTouchEnd={() => setQuoteTouched(false)}
          >
            "Glass that speaks to your soul with a ceramic whisper."
          </motion.blockquote>
          <p className="text-vasee-gray">
            Our revolutionary process transforms glass into emotion—each piece an original story waiting to connect with your spirit and personal narrative.
          </p>
        </motion.div>
      </motion.div>

      {/* Responsive Design */}
      <style>{`
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
