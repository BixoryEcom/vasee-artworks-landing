import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";

const AnimatedBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Parallax effects for different layers
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const y3 = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  // Gradient animation controls
  const gradientControls = useAnimation();
  const particleControls = useAnimation();

  useEffect(() => {
    // Start gradient animation
    gradientControls.start({
      backgroundPosition: ["0% 0%", "100% 100%"],
      transition: {
        duration: 20,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "linear"
      }
    });

    // Start particle animation
    particleControls.start({
      scale: [1, 1.2, 1],
      opacity: [0.4, 0.6, 0.4],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    });
  }, [gradientControls, particleControls]);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden bg-[#0a192f]">
      {/* Base gradient layer */}
      <motion.div
        className="absolute inset-0 opacity-70"
        animate={gradientControls}
        style={{
          background: "radial-gradient(circle at 50% 50%, #112240 0%, #0a192f 50%, #020c1b 100%)",
          backgroundSize: "200% 200%"
        }}
      />

      {/* Animated particles layer */}
      <motion.div
        className="absolute inset-0"
        animate={particleControls}
      >
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-blue-500/70 to-cyan-500/70"
            style={{
              width: Math.random() * 80 + 60,
              height: Math.random() * 80 + 60,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              filter: "blur(8px)"
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
        ))}
      </motion.div>

      {/* Floating geometric shapes */}
      <motion.div
        className="absolute inset-0"
        style={{ y: y1 }}
      >
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`shape-${i}`}
            className="absolute border-2 border-blue-400/50"
            style={{
              width: Math.random() * 120 + 80,
              height: Math.random() * 120 + 80,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`
            }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.15, 1],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{
              duration: 20 + i * 5,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </motion.div>

      {/* Light trails */}
      <motion.div
        className="absolute inset-0"
        style={{ y: y2 }}
      >
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`trail-${i}`}
            className="absolute h-0.5 bg-gradient-to-r from-transparent via-blue-400/60 to-transparent"
            style={{
              width: "100%",
              top: `${20 + i * 15}%`,
              filter: "blur(2px)"
            }}
            animate={{
              opacity: [0.2, 0.4, 0.2],
              scaleX: [0.8, 1.2, 0.8]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 1.5,
              ease: "easeInOut"
            }}
          />
        ))}
      </motion.div>

      {/* Softer overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-[#0a192f]/70" />
    </div>
  );
};

export default AnimatedBackground; 