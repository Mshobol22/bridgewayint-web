"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const IMAGE_SRC = "/images/programs-parallax.png";

const LAYERS = [
  {
    id: "deep-bg",
    clipPath: "inset(0 0 60% 0)",
    bgPosition: "center top",
    yMultiplier: 0.08,
    zIndex: 1,
  },
  {
    id: "mid-structures",
    clipPath: "inset(15% 10% 40% 10%)",
    bgPosition: "center 45%",
    yMultiplier: 0.22,
    zIndex: 2,
  },
  {
    id: "light-ribbons",
    clipPath: "inset(30% 5% 30% 5%)",
    bgPosition: "center 55%",
    yMultiplier: 0.45,
    zIndex: 3,
  },
  {
    id: "particles",
    clipPath: "inset(45% 0 20% 0)",
    bgPosition: "center bottom",
    yMultiplier: 0.8,
    zIndex: 4,
  },
] as const;

interface ProgramsParallaxProps {
  children?: React.ReactNode;
}

export function ProgramsParallax({ children }: ProgramsParallaxProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: contentRef,
    offset: ["start start", "end end"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -35]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -95]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -195]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, -320]);

  const x3 = useTransform(scrollYProgress, [0, 0.33, 0.66, 1], [0, 25, -15, 20]);
  const x4 = useTransform(scrollYProgress, [0, 0.5, 1], [0, 12, -8]);

  const yTransforms = [y1, y2, y3, y4];
  const xTransforms = [0, 0, x3, x4];

  return (
    <>
      {/* Fixed parallax background - always visible, continues while scrolling */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {LAYERS.map((layer, i) => (
          <motion.div
            key={layer.id}
            style={{
              y: yTransforms[i],
              x: xTransforms[i],
              zIndex: layer.zIndex,
              clipPath: layer.clipPath,
            }}
            className="absolute inset-0"
          >
            <div
              className="absolute inset-0 bg-cover bg-no-repeat"
              style={{
                backgroundImage: `url(${IMAGE_SRC})`,
                backgroundSize: "cover",
                backgroundPosition: layer.bgPosition,
              }}
            />
          </motion.div>
        ))}
        {/* Central soft overlay for text legibility */}
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 75% 65% at 50% 45%, transparent 0%, rgba(2,6,23,0.4) 35%, rgba(2,6,23,0.85) 100%)",
          }}
        />
      </div>
      {/* Page content scrolls on top - ref drives parallax scroll progress */}
      <div ref={contentRef} className="relative">
        {children}
      </div>
    </>
  );
}
