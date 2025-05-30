import React, { useRef, useEffect, useState } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const TEXT = "Vasee Art";
const FONT_FAMILY = "Maison Neue, Inter, Arial, sans-serif";
const FONT_WEIGHT = "bold";
const FONT_SIZE = 64; // px
const TEXT_COLOR = "#fff";
const GLOW_COLOR = "#9b87f5";

const ANIMATION_DURATION = 2000; // ms

const VaseeArtParticles: React.FC = () => {
  const [revealed, setRevealed] = useState(false);
  const [scale, setScale] = useState(0.9);
  const textRef = useRef<HTMLDivElement>(null);

  // Animate scale and reveal
  useEffect(() => {
    let start: number | null = null;
    let frame: number;
    function animate(ts: number) {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / ANIMATION_DURATION, 1);
      setScale(0.9 + 0.1 * progress);
      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      } else {
        setRevealed(true);
      }
    }
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  // tsparticles config for smokey/dusty effect
  const particlesOptions = {
    fullScreen: { enable: false },
    particles: {
      number: { value: 120, density: { enable: true, value_area: 800 } },
      color: { value: "#fff" },
      opacity: { value: 0.18, random: { enable: true, minimumValue: 0.08 } },
      size: { value: 3, random: { enable: true, minimumValue: 1 } },
      move: {
        enable: true,
        speed: 1.2,
        direction: "none",
        outModes: { default: "out" },
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
  };

  return (
    <div
      style={{
        position: "relative",
        width: 600,
        height: 120,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Particles overlay */}
      <Particles
        id="tsparticles-vaseeart"
        init={loadFull}
        options={particlesOptions}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />
      {/* Text with mask effect */}
      <div
        ref={textRef}
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: FONT_FAMILY,
          fontWeight: FONT_WEIGHT,
          fontSize: FONT_SIZE,
          color: TEXT_COLOR,
          textShadow: `0 0 24px ${GLOW_COLOR}, 0 0 8px ${GLOW_COLOR}`,
          letterSpacing: 2,
          filter: revealed ? "none" : "blur(2.5px)",
          opacity: revealed ? 1 : 0.7,
          transform: `scale(${scale})`,
          transition: revealed
            ? "filter 0.5s, opacity 0.5s"
            : undefined,
          userSelect: "none",
        }}
      >
        {TEXT}
      </div>
    </div>
  );
};

export default VaseeArtParticles; 