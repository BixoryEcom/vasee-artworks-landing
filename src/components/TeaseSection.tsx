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
  const glow = useTransform(scrollYProgress, [0.3, 0.5], [0, 30]);
  const rotate = useTransform(scrollYProgress, [0.3, 0.6], [0, 5]);
  
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
    <section ref={ref} className="relative min-h-[300px] md:h-[50vh] bg-vasee-dark flex items-center justify-center overflow-hidden py-16 md:py-24 lg:py-32">
      <div className="grain-overlay"></div>
      <div className="vignette"></div>
      
      <motion.div
        style={{
          opacity,
          scale,
          filter: `blur(${glow}px)`,
          rotate,
        }}
        className="absolute w-[300px] h-[300px] md:w-[400px] md:h-[400px] animate-glow-pulse rounded-full overflow-hidden"
      >
        {!videoLoaded && (
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-20 h-20 rounded-full border-t-2 border-b-2 border-white animate-spin"></div>
          </div>
        )}
        
        <video
          ref={videoRef}
          className={`w-full h-full object-cover opacity-50 transition-opacity duration-500 ${videoLoaded ? 'opacity-50' : 'opacity-0'}`}
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
            className="w-full h-full object-cover opacity-50"
            style={{ display: videoLoaded ? 'none' : 'block' }}
          />
        )}
      </motion.div>
      
      <motion.div
        style={{ opacity }}
        className="text-center z-10 px-6"
      >
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-maison font-light text-white text-glow">
          Stories in glass. Emotions in form. Coming soon.
        </h2>
      </motion.div>

      {/* Responsive Design */}
      <style>{`
        @media (max-width: 768px) {
          .h-[50vh] {
            height: 40vh;
          }
          .w-[300px] {
            width: 200px;
          }
          .h-[300px] {
            height: 200px;
          }
          .md\\:w-[400px] {
            width: 300px;
          }
          .md\\:h-[400px] {
            height: 300px;
          }
          .text-2xl {
            font-size: 1.5rem;
          }
          .md\\:text-3xl {
            font-size: 2rem;
          }
          .lg\\:text-4xl {
            font-size: 2.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default TeaseSection;
