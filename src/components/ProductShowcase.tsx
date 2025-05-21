import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";

interface ProductCardProps {
  image: string;
  name: string;
  description: string;
}

const ProductCard = ({ image, name, description }: ProductCardProps) => {
  const [hovered, setHovered] = useState(false);
  const [touched, setTouched] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 0.5, 1], [0, 2, 0]);

  const handleTouchStart = () => {
    setTouched(true);
  };

  const handleTouchEnd = () => {
    setTouched(false);
  };

  return (
    <motion.div
      ref={cardRef}
      style={{ y, opacity, scale, rotate }}
      className="relative mx-2 md:mx-4 w-[240px] md:w-[320px] flex-shrink-0"
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <motion.div
        className="relative bg-vasee-charcoal/50 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10"
        animate={{
          scale: hovered || touched ? 1.05 : 1,
          boxShadow: hovered || touched ? "0 0 20px rgba(155, 135, 245, 0.3)" : "none",
        }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="relative h-[300px] md:h-[400px] overflow-hidden"
          animate={{
            scale: hovered || touched ? 1.1 : 1,
          }}
          transition={{ duration: 0.4 }}
        >
          <motion.img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
            initial={{ scale: 1 }}
            animate={{
              scale: hovered || touched ? 1.1 : 1,
              filter: hovered || touched ? "brightness(1.1)" : "brightness(1)"
            }}
            transition={{ duration: 0.4 }}
            onError={(e) => {
              (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1593592023995-a8a4ffd6153d?q=80&w=2874&auto=format&fit=crop";
            }}
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"
            initial={{ opacity: 0.6 }}
            animate={{ 
              opacity: hovered || touched ? 0.8 : 0.6,
              background: hovered || touched ? 
                "linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.4), transparent)" : 
                "linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.4), transparent)"
            }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
        
        <motion.div
          className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white"
          initial={{ y: 20, opacity: 0 }}
          animate={{ 
            y: 0, 
            opacity: 1,
            transform: hovered || touched ? "translateY(-5px)" : "translateY(0)"
          }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <motion.h3
            className="text-lg md:text-xl font-maison mb-1 md:mb-2"
            animate={{
              color: hovered || touched ? "#9b87f5" : "white",
              textShadow: hovered || touched ? "0 0 10px rgba(155, 135, 245, 0.5)" : "none",
              scale: hovered || touched ? 1.05 : 1
            }}
            transition={{ duration: 0.3 }}
          >
            {name}
          </motion.h3>
          <motion.p
            className="text-xs md:text-sm text-gray-300"
            animate={{
              opacity: hovered || touched ? 1 : 0.8,
              y: hovered || touched ? -2 : 0
            }}
            transition={{ duration: 0.3 }}
          >
            {description}
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const ProductShowcase = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [clientWidth, setClientWidth] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Update dimensions on mount and resize
  useEffect(() => {
    const updateDimensions = () => {
      if (scrollRef.current) {
        setClientWidth(scrollRef.current.clientWidth);
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  const products = [
    {
      image: "/lovable-uploads/3f6e8f11-768b-429b-b725-11451a8fbed4.png",
      name: "Lunar Whisper",
      description: "Reflecting inner tranquility through glass that feels like moonlit ceramic."
    },
    {
      image: "/lovable-uploads/5f80813d-49f8-444b-a181-7b9154ea2f97.png",
      name: "Dune Symphony",
      description: "Where contoured glass captures the spirit of desert landscapes."
    },
    {
      image: "https://images.unsplash.com/photo-1603204077779-bed963ea7d0e?q=80&w=2833&auto=format&fit=crop",
      name: "Echo Chamber",
      description: "Resonating with memories through our patented glass-ceramic fusion."
    },
    {
      image: "/lovable-uploads/1e0e4147-a87b-4053-8eca-46d151679d13.png",
      name: "Terra Illuminate",
      description: "Earthen textures captured in luminous, translucent glass."
    },
    {
      image: "/lovable-uploads/1a01d6c2-2237-4ddb-a459-4551d3e1cdc4.png",
      name: "Aura Vessel",
      description: "Embodying emotion through our revolutionary glass fabrication."
    }
  ];

  return (
    <section id="emotional-glass-collection" className="relative py-20 bg-vasee-dark">
      <div className="grain-overlay"></div>
      <div className="vignette"></div>
      <div className="container mx-auto px-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-maison font-light text-white text-center mb-2 text-glow">
          Emotional Glass Collection
        </h2>
        <p className="text-vasee-gray text-center mb-10">
          Revolutionary glass vessels with ceramic soul, each telling a unique story.
        </p>
      </div>

      <div className="relative overflow-hidden">
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto scrollbar-none py-10"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="flex-shrink-0 w-10 md:w-[10vw]"></div>
          <motion.div 
            className="flex"
            animate={{
              x: [0, -clientWidth * 0.8 * products.length],
            }}
            transition={{
              duration: 120,
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop",
              repeatDelay: 0
            }}
          >
            {[...products, ...products, ...products].map((product, index) => (
              <motion.div 
                key={index} 
                className="snap-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  transition: {
                    duration: 0.5,
                    delay: index * 0.1
                  }
                }}
              >
                <ProductCard {...product} />
              </motion.div>
            ))}
          </motion.div>
          <div className="flex-shrink-0 w-10 md:w-[10vw]"></div>
        </div>
      </div>

      {/* Responsive Design */}
      <style>{`
        @media (max-width: 768px) {
          .py-20 {
            padding-top: 3rem;
            padding-bottom: 3rem;
          }
          .text-3xl {
            font-size: 1.5rem;
          }
          .md\\:text-4xl {
            font-size: 2rem;
          }
          .h-[50vh] {
            height: 30vh;
          }
          .md\\:h-[60vh] {
            height: 40vh;
          }
          .container {
            padding-left: 1rem;
            padding-right: 1rem;
          }
          .mx-4 {
            margin-left: 0.5rem;
            margin-right: 0.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default ProductShowcase;
