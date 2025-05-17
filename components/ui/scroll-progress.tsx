"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

interface ScrollProgressProps {
  color?: string;
  height?: number;
  position?: "top" | "bottom";
  showPercentage?: boolean;
}

export function ScrollProgress({
  color = "#FFD100",
  height = 4,
  position = "top",
  showPercentage = false,
}: ScrollProgressProps) {
  const [isMounted, setIsMounted] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  
  const [scrollPercentage, setScrollPercentage] = useState(0);
  
  useEffect(() => {
    setIsMounted(true);
    
    return scrollYProgress.onChange((latest) => {
      setScrollPercentage(Math.round(latest * 100));
    });
  }, [scrollYProgress]);

  // Don't render anything during SSR
  if (!isMounted) return null;
  
  return (
    <>
      <motion.div
        className="fixed left-0 right-0 z-50"
        style={{
          top: position === "top" ? 0 : "auto",
          bottom: position === "bottom" ? 0 : "auto",
          height,
          backgroundColor: color,
          transformOrigin: "0%",
          scaleX,
        }}
      />
      
      {showPercentage && (
        <div 
          className="fixed right-4 z-50 bg-charcoal-black/70 backdrop-blur-sm px-2 py-1 rounded-md text-xs font-medium"
          style={{
            top: position === "top" ? height + 8 : "auto",
            bottom: position === "bottom" ? height + 8 : "auto",
            color,
          }}
        >
          {scrollPercentage}%
        </div>
      )}
    </>
  );
} 