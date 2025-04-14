
import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";

interface ProductCardProps {
  image: string;
  name: string;
  description: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, name, description }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="flex-shrink-0 w-[85vw] md:w-[55vw] lg:w-[40vw] xl:w-[30vw] mx-5 magnetic-item"
      whileHover={{ 
        scale: 1.03,
        transition: { duration: 0.3 }
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative overflow-hidden rounded-sm">
        <motion.img
          animate={{ 
            scale: hovered ? 1.05 : 1,
            rotateX: hovered ? 2 : 0,
            rotateY: hovered ? -2 : 0
          }}
          transition={{ duration: 0.4 }}
          src={image}
          alt={name}
          className="w-full h-[50vh] md:h-[60vh] object-cover"
        />
        {hovered && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            className="absolute inset-0 bg-gradient-to-t from-vasee-vibrant/40 via-transparent to-transparent"
          />
        )}
      </div>
      <div className="mt-4 text-center">
        <h3 className="text-2xl font-maison font-light text-white">{name}</h3>
        <p className="mt-2 text-vasee-gray">{description}</p>
      </div>
    </motion.div>
  );
};

const ProductShowcase = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollWidth = scrollRef.current?.scrollWidth || 0;
  const clientWidth = scrollRef.current?.clientWidth || 0;
  const maxScroll = scrollWidth - clientWidth;
  
  const scrollLeft = () => {
    if (!scrollRef.current) return;
    const newPosition = Math.max(scrollPosition - clientWidth / 2, 0);
    scrollRef.current.scrollTo({
      left: newPosition,
      behavior: "smooth",
    });
    setScrollPosition(newPosition);
  };

  const scrollRight = () => {
    if (!scrollRef.current) return;
    const newPosition = Math.min(scrollPosition + clientWidth / 2, maxScroll);
    scrollRef.current.scrollTo({
      left: newPosition,
      behavior: "smooth",
    });
    setScrollPosition(newPosition);
  };

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    setScrollPosition(e.currentTarget.scrollLeft);
  };
  
  const products = [
    {
      image: "https://images.unsplash.com/photo-1580894894513-541e068a3e2b?q=80&w=2940&auto=format&fit=crop",
      name: "Lunar Whisper",
      description: "Reflecting inner tranquility through glass that feels like moonlit ceramic."
    },
    {
      image: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?q=80&w=2835&auto=format&fit=crop",
      name: "Dune Symphony",
      description: "Where contoured glass captures the spirit of desert landscapes."
    },
    {
      image: "https://images.unsplash.com/photo-1603204077779-bed963ea7d0e?q=80&w=2833&auto=format&fit=crop",
      name: "Echo Chamber",
      description: "Resonating with memories through our patented glass-ceramic fusion."
    },
    {
      image: "https://images.unsplash.com/photo-1612196808214-b40b912365e4?q=80&w=2874&auto=format&fit=crop",
      name: "Terra Illuminate",
      description: "Earthen textures captured in luminous, translucent glass."
    },
    {
      image: "https://images.unsplash.com/photo-1593592023995-a8a4ffd6153d?q=80&w=2874&auto=format&fit=crop",
      name: "Aura Vessel",
      description: "Embodying emotion through our revolutionary glass fabrication."
    }
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [100, 0, -100]);

  return (
    <section ref={containerRef} className="relative min-h-screen py-20 bg-vasee-dark">
      <div className="grain-overlay"></div>
      <div className="vignette"></div>
      <motion.div style={{ opacity }} className="container mx-auto px-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-maison font-light text-white text-center mb-2 text-glow">
          Emotional Glass Collection
        </h2>
        <p className="text-vasee-gray text-center mb-10">
          Revolutionary glass vessels with ceramic soul, each telling a unique story.
        </p>
      </motion.div>

      <motion.div style={{ y, opacity }} className="relative">
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 md:flex hidden">
          <button 
            onClick={scrollLeft} 
            className="p-3 rounded-full bg-black/40 backdrop-blur-lg text-white/70 hover:text-white hover:bg-vasee-vibrant/30 transition-all"
          >
            <ArrowLeft size={20} />
          </button>
        </div>
        
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto scrollbar-none py-10 snap-x"
          onScroll={handleScroll}
        >
          <div className="flex-shrink-0 w-10 md:w-[10vw]"></div>
          {products.map((product, index) => (
            <div key={index} className="snap-center">
              <ProductCard {...product} />
            </div>
          ))}
          <div className="flex-shrink-0 w-10 md:w-[10vw]"></div>
        </div>
        
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 md:flex hidden">
          <button 
            onClick={scrollRight}
            className="p-3 rounded-full bg-black/40 backdrop-blur-lg text-white/70 hover:text-white hover:bg-vasee-vibrant/30 transition-all"
          >
            <ArrowRight size={20} />
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default ProductShowcase;
