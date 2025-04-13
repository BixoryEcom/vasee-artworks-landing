
import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  once?: boolean;
  threshold?: number;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ 
  text, 
  className = '', 
  delay = 0,
  once = true,
  threshold = 0.1
}) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { 
    once, 
    amount: threshold  // Using 'amount' instead of 'threshold'
  });
  
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  
  const words = text.split(' ');
  
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: delay * i },
    }),
  };
  
  const child = {
    hidden: { 
      opacity: 0, 
      y: 20 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };
  
  return (
    <motion.div
      className={className}
      ref={ref}
      variants={container}
      initial="hidden"
      animate={controls}
      custom={1}
    >
      {words.map((word, index) => (
        <div key={index} className="inline-block mr-[0.25em]">
          <motion.span
            variants={child}
            className="inline-block"
          >
            {word}
          </motion.span>
        </div>
      ))}
    </motion.div>
  );
};

export default AnimatedText;
