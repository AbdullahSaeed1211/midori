"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");
  const [isMobile, setIsMobile] = useState(true); // Default to true for SSR

  useEffect(() => {
    // Check for mobile only on client-side
    setIsMobile(window.innerWidth < 1024);
    
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      if (
        target.tagName === "A" || 
        target.tagName === "BUTTON" || 
        target.closest("a") || 
        target.closest("button") ||
        target.classList.contains("cursor-hover") ||
        target.closest(".cursor-hover")
      ) {
        setCursorVariant("hover");
      } else {
        setCursorVariant("default");
      }
    };

    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      height: 32,
      width: 32,
      backgroundColor: "rgba(255, 236, 0, 0)",
      border: "2px solid rgba(255, 236, 0, 0.5)",
      transition: {
        type: "tween",
        ease: "linear",
        duration: 0.1,
      },
    },
    hover: {
      x: mousePosition.x - 24,
      y: mousePosition.y - 24,
      height: 48,
      width: 48,
      backgroundColor: "rgba(255, 236, 0, 0.1)",
      border: "2px solid rgba(255, 236, 0, 0.8)",
      transition: {
        type: "tween",
        ease: "linear",
        duration: 0.15,
      },
    },
  };

  // Don't render anything on mobile
  if (isMobile) {
    return null;
  }

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-50 mix-blend-difference"
        variants={variants}
        animate={cursorVariant}
      />
      <style jsx global>{`
        @media (min-width: 1024px) {
          body {
            cursor: none;
          }
        }
      `}</style>
    </>
  );
} 