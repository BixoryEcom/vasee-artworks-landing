import React, { useEffect, useState } from "react";
import Particles from "react-tsparticles";

const TEXT = 'VASEE ART';
const GLOW_COLOR = '#9b87f5';
const ANIMATION_DURATION = 2000; // ms

interface PowderTextRevealProps {
  className?: string;
}

const PowderTextReveal: React.FC<PowderTextRevealProps> = ({ className = '' }) => {
  const [revealed, setRevealed] = useState(false);
  const [scale, setScale] = useState(0.7);
  const [blur, setBlur] = useState(8);
  const [opacity, setOpacity] = useState(0.3);

  // Animate scale, blur, and opacity for a pronounced effect
  useEffect(() => {
    let start: number | null = null;
    let frame: number;
    function animate(ts: number) {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / ANIMATION_DURATION, 1);
      setScale(0.7 + 0.3 * progress); // 0.7 -> 1.0
      setBlur(8 - 8 * progress);      // 8px -> 0px
      setOpacity(0.3 + 0.7 * progress); // 0.3 -> 1
      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      } else {
        setRevealed(true);
      }
    }
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  // tsparticles config for smokey/dusty effect with text mask
  const particlesOptions = {
    fullScreen: { enable: false },
    particles: {
      number: { value: 180, density: { enable: true, value_area: 800 } },
      color: { value: "#fff" },
      opacity: { value: 0.22, random: { enable: true, minimumValue: 0.08 } },
      size: { value: 2.5, random: { enable: true, minimumValue: 1 } },
      move: {
        enable: true,
        speed: 1.5,
        direction: "none",
        outModes: { default: 'out' } as const,
        random: true,
        straight: false,
      },
      shape: { type: "circle" },
      shadow: {
        enable: true,
        color: GLOW_COLOR,
        blur: 8,
      },
    },
    detectRetina: true,
    background: { color: "transparent" },
    polygon: {
      enable: true,
      type: "inline",
      move: { radius: 10 },
      url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='120' viewBox='0 0 600 120'%3E%3Ctext x='50%' y='50%' text-anchor='middle' dominant-baseline='middle' font-family='Maison Neue, Arial, sans-serif' font-size='64' font-weight='bold' fill='white'%3EVasee Art%3C/text%3E%3C/svg%3E",
      scale: 1,
      inline: { arrangement: "equidistant" },
      draw: { enable: false },
    },
  };

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {/* Particles overlay */}
      <Particles
        id="tsparticles-vaseeart"
        options={particlesOptions}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />
      {/* Text with mask effect */}
      <div
        className={className}
        style={{
          position: 'relative',
          zIndex: 2,
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          userSelect: 'none',
          overflow: 'hidden',
        }}
      >
        <span
          style={{
            position: 'relative',
            display: 'inline-block',
            filter: `blur(${blur}px)`,
            opacity: opacity,
            transform: `scale(${scale})`,
            transition: revealed
              ? 'filter 0.5s, opacity 0.5s, transform 0.5s'
              : undefined,
          }}
        >
          {/* Base gradient text (always visible) */}
          <span className="gradient-text">
            {TEXT}
          </span>
          {/* True text-masked glimmer effect, only after animation completes */}
          {revealed && (
            <span
              className="text-glimmer"
              aria-hidden="true"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                zIndex: 3,
                display: 'inline-block',
                background: 'linear-gradient(120deg, transparent 0%, #fff8 40%, #fff 50%, #fff8 60%, transparent 100%)',
                backgroundSize: '200% 100%',
                backgroundPosition: '0% 0',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                animation: 'glimmer-text-sweep 1.8s linear infinite',
              }}
            >
              {TEXT}
            </span>
          )}
        </span>
      </div>
    </div>
  );
};

export default PowderTextReveal; 