
import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const TeaseSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0.1, 0.3, 0.5, 0.9], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0.3, 0.5], [0.8, 1]);
  const glow = useTransform(scrollYProgress, [0.3, 0.5], [0, 15]);
  const rotate = useTransform(scrollYProgress, [0.3, 0.6], [0, 3]);
  const videoScale = useTransform(scrollYProgress, [0.2, 0.5], [0.9, 1.1]);
  
  // Video URL - updated to use vasee-brand-story-video-2.mp4
  const videoUrl = "/vasee-brand-story-video-2.mp4";
  const fallbackImageUrl = "https://images.pexels.com/photos/1145720/pexels-photo-1145720.jpeg?auto=compress&cs=tinysrgb&w=800";

  // Intersection Observer for video autoplay
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
        if (entry.isIntersecting && videoRef.current) {
          videoRef.current.play().catch(() => {
            // Autoplay failed, video will remain paused
          });
        } else if (videoRef.current) {
          videoRef.current.pause();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);
  
  return (
    <section ref={ref} className="relative min-h-[400px] md:h-[60vh] bg-vasee-dark flex items-center justify-center overflow-hidden py-20 md:py-28 lg:py-36">
      <div className="grain-overlay"></div>
      <div className="vignette"></div>
      
      {/* Enhanced Video Container - Larger and More Prominent */}
      <motion.div
        style={{
          opacity,
          scale: videoScale,
          filter: `blur(${glow}px) drop-shadow(0 0 40px rgba(177, 138, 255, 0.6))`,
          rotate,
        }}
        className="absolute w-[400px] h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] rounded-full overflow-hidden border-2 border-vasee-accent/30"
      >
        {!videoLoaded && (
          <div className="w-full h-full flex items-center justify-center bg-vasee-charcoal">
            <div className="w-20 h-20 rounded-full border-t-2 border-b-2 border-vasee-accent animate-spin"></div>
          </div>
        )}
        
        <video
          ref={videoRef}
          className={`w-full h-full object-cover transition-all duration-700 ${videoLoaded ? 'opacity-80 saturate-110 contrast-105' : 'opacity-0'}`}
          muted
          loop
          playsInline
          preload="metadata"
          onLoadedData={() => setVideoLoaded(true)}
          onError={() => {
            // Fallback to image if video fails
            setVideoLoaded(false);
          }}
        >
          <source src={videoUrl} type="video/mp4" />
        </video>

        {/* Fallback image if video fails */}
        {!videoLoaded && (
          <img 
            src={fallbackImageUrl}
            alt="Glowing Vasee silhouette" 
            className="w-full h-full object-cover opacity-60 saturate-110"
            style={{ display: videoLoaded ? 'none' : 'block' }}
          />
        )}

        {/* Animated border glow */}
        <div className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-vasee-accent via-vasee-glow to-vasee-light bg-clip-border animate-glow-pulse opacity-40"></div>
      </motion.div>
      
      {/* Artistic Title Text with Gradient and Enhanced Effects */}
      <motion.div
        style={{ opacity }}
        className="text-center z-10 px-6 max-w-4xl"
      >
        <h2 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-maison font-light leading-tight">
          <span className="block bg-gradient-to-r from-vasee-light via-white to-vasee-accent bg-clip-text text-transparent animate-pulse">
            Stories in glass.
          </span>
          <span className="block mt-2 bg-gradient-to-r from-vasee-accent via-vasee-glow to-vasee-light bg-clip-text text-transparent">
            Emotions in form.
          </span>
          <span className="block mt-4 text-white/90 text-lg md:text-xl lg:text-2xl font-light tracking-wider">
            Coming soon.
          </span>
        </h2>
        
        {/* Decorative elements */}
        <div className="mt-8 flex justify-center items-center space-x-4">
          <div className="w-12 h-px bg-gradient-to-r from-transparent via-vasee-accent to-transparent"></div>
          <div className="w-2 h-2 rounded-full bg-vasee-accent animate-pulse"></div>
          <div className="w-12 h-px bg-gradient-to-r from-transparent via-vasee-accent to-transparent"></div>
        </div>
      </motion.div>

      {/* Enhanced Responsive Design */}
      <style>{`
        @media (max-width: 768px) {
          .h-[60vh] {
            height: 50vh;
          }
          .w-[400px] {
            width: 280px;
          }
          .h-[400px] {
            height: 280px;
          }
          .md\\:w-[500px] {
            width: 320px;
          }
          .md\\:h-[500px] {
            height: 320px;
          }
        }
        @media (max-width: 480px) {
          .w-[400px] {
            width: 240px;
          }
          .h-[400px] {
            height: 240px;
          }
        }
      `}</style>
    </section>
  );
};

export default TeaseSection;
