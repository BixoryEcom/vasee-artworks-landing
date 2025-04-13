
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import AnimatedText from "./AnimatedText";

const BrandEssence = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  
  return (
    <section
      ref={sectionRef}
      className="relative w-full py-24 md:py-32 bg-vasee-charcoal overflow-hidden"
    >
      <div className="grain-overlay"></div>
      <motion.div
        className="absolute inset-0 bg-[url('https://assets.mixkit.co/videos/preview/mixkit-white-ceramic-texture-7307-large.mp4')] bg-cover bg-center opacity-[0.06] z-0"
        style={{ y }}
      ></motion.div>
      
      <div className="container relative z-10 mx-auto px-6 max-w-4xl">
        <AnimatedText
          text="At VASEE, we believe in the quiet power of thoughtfully crafted objects. Each vessel is born from moments of stillness—where clay meets intention, where form follows feeling. Our pieces aren't mere containers, but vessels for presence in a world that rarely pauses. They stand as quiet guardians of space, inviting contemplation and holding the beauty of imperfection within their carefully considered forms."
          className="font-maison text-xl md:text-2xl lg:text-3xl font-light leading-relaxed text-white/80 text-center"
          threshold={0.25}
        />
      </div>
    </section>
  );
};

export default BrandEssence;
