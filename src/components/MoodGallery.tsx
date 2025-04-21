
import React from "react";
import { motion } from "framer-motion";

const MoodGallery = () => {
  return (
    <section className="bg-vasee-dark py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-maison font-light text-white/90 text-center mb-12">
          Emotional Glass in Your Space
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div 
            className="relative group overflow-hidden rounded-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img 
              src="/lovable-uploads/1a01d6c2-2237-4ddb-a459-4551d3e1cdc4.png" 
              alt="Artistic vase with yellow flowers" 
              className="w-full h-[500px] object-cover transition-transform duration-300 group-hover:brightness-110"
            />
            <div className="absolute inset-0 bg-black/20 mix-blend-multiply"></div>
          </motion.div>

          <motion.div
            className="relative group overflow-hidden rounded-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src="/lovable-uploads/3d10acdb-be5d-4b02-b927-d519f241e9e5.png"
              alt="Artistic vase with dried sunflowers"
              className="w-full h-[500px] object-cover transition-transform duration-300 group-hover:brightness-110"
            />
            <div className="absolute inset-0 bg-black/20 mix-blend-multiply"></div>
          </motion.div>

          <motion.div
            className="relative group overflow-hidden rounded-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src="https://images.unsplash.com/photo-1549832248-737c769244c5?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Elegant vase in a minimalist setting"
              className="w-full h-[500px] object-cover transition-transform duration-300 group-hover:brightness-110"
            />
            <div className="absolute inset-0 bg-black/20 mix-blend-multiply"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MoodGallery;
