import React from "react";
import { motion } from "framer-motion";

const MoodGallery = () => {
  return (
    <section className="bg-vasee-dark py-16 md:py-24 lg:py-32 px-4 md:px-8">
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
              src="/lovable-uploads/1e0e4147-a87b-4053-8eca-46d151679d13.png"
              alt="Artistic vase with cat design and white flowers"
              className="w-full h-[500px] object-cover transition-transform duration-300 group-hover:brightness-110"
            />
            <div className="absolute inset-0 bg-black/20 mix-blend-multiply"></div>
          </motion.div>
        </div>
      </div>

      {/* Responsive Design */}
      <style>{`
        @media (max-width: 768px) {
          .py-16 {
            padding-top: 4rem;
            padding-bottom: 4rem;
          }
          .md\\:py-24 {
            padding-top: 6rem;
            padding-bottom: 6rem;
          }
          .px-4 {
            padding-left: 1rem;
            padding-right: 1rem;
          }
          .md\\:px-8 {
            padding-left: 2rem;
            padding-right: 2rem;
          }
          .text-3xl {
            font-size: 1.875rem;
          }
          .md\\:text-4xl {
            font-size: 2.25rem;
          }
          .h-[500px] {
            height: 300px;
          }
        }
      `}</style>
    </section>
  );
};

export default MoodGallery;
