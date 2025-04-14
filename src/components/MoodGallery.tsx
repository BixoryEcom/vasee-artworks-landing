
import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";

const MoodGallery = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: false, amount: 0.1 }); // Using 'amount' instead of 'threshold'
  const [audioEnabled, setAudioEnabled] = useState<boolean>(false);
  
  const toggleAudio = () => {
    setAudioEnabled(!audioEnabled);
    // Would connect to actual audio element in production
  };
  
  const galleryItems = [
    {
      image: "https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?q=80&w=2832&auto=format&fit=crop",
      size: "large"
    },
    {
      image: "https://images.unsplash.com/photo-1601628828688-632f38a5a7d0?q=80&w=2309&auto=format&fit=crop",
      size: "small"
    },
    {
      image: "https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=2874&auto=format&fit=crop",
      size: "small"
    },
    {
      image: "https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?q=80&w=2788&auto=format&fit=crop",
      size: "large"
    },
    {
      image: "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?q=80&w=2940&auto=format&fit=crop",
      size: "medium"
    }
  ];
  
  return (
    <section ref={ref} className="relative min-h-screen py-20 md:py-32 bg-vasee-charcoal">
      <div className="grain-overlay"></div>
      <div className="vignette"></div>
      
      <div className="container mx-auto px-4 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-maison font-light text-white mb-4 text-glow">
            Emotional Glass in Your Space
          </h2>
          <p className="text-vasee-gray max-w-2xl mx-auto">
            Art pieces that transform environments while telling stories through our signature glass-ceramic process.
          </p>
        </motion.div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              className={`relative overflow-hidden rounded-sm ${
                item.size === "large" ? "lg:col-span-2 lg:row-span-2" : 
                item.size === "medium" ? "lg:col-span-1 lg:row-span-2" : ""
              }`}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              whileHover={{ 
                scale: 1.03, 
                boxShadow: "0 0 30px rgba(155, 135, 245, 0.2)",
                transition: { duration: 0.3 }
              }}
            >
              <img
                src={item.image}
                alt={`Interior styling ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70 pointer-events-none" />
              <div className="absolute inset-0 opacity-0 hover:opacity-100 bg-gradient-to-t from-vasee-vibrant/40 to-transparent transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>
      </div>
      
      <div className="absolute bottom-10 right-10 z-10">
        <button
          onClick={toggleAudio}
          className="p-3 bg-black/50 backdrop-blur-md rounded-full text-white/60 hover:text-white hover:bg-vasee-vibrant/20 transition-all"
          aria-label={audioEnabled ? "Mute audio" : "Enable audio"}
        >
          {audioEnabled ? <Volume2 size={18} /> : <VolumeX size={18} />}
        </button>
      </div>
    </section>
  );
};

export default MoodGallery;
