"use client";

import React, { useRef } from "react";
import { motion, useScroll, MotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

type AnimationDirection = "up" | "down" | "left" | "right";
type AnimationEffect = "fade" | "slide" | "scale" | "staggered";

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: AnimationDirection;
  effect?: AnimationEffect;
  delay?: number;
  duration?: number;
  staggerChildren?: number;
  threshold?: number;
  className?: string;
  once?: boolean;
  distance?: number;
  // Omit specific props that might cause conflicts
  style?: React.CSSProperties;
  id?: string;
}

export function ScrollReveal({
  children,
  direction = "up",
  effect = "fade",
  delay = 0,
  duration = 0.5,
  staggerChildren = 0.1,
  threshold = 0.2,
  className,
  once = true,
  distance = 50,
  style,
  id,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  // Use useScroll hook to keep the ref connected to scroll observer
  useScroll({
    target: ref,
    offset: [`start ${1 - threshold}`, `end ${threshold}`],
  });
  
  // Different animation variants based on direction
  const getInitialPosition = () => {
    switch (direction) {
      case "up": return { y: distance };
      case "down": return { y: -distance };
      case "left": return { x: distance };
      case "right": return { x: -distance };
      default: return { y: distance };
    }
  };
  
  // Create animation variants based on the effect type
  const getAnimationProps = (): MotionProps => {
    const baseTransition = {
      duration,
      delay,
    };
    
    if (effect === "staggered") {
      return {
        variants: {
          hidden: { opacity: 0, ...getInitialPosition() },
          visible: {
            opacity: 1,
            y: 0,
            x: 0,
            transition: {
              staggerChildren,
              delayChildren: delay,
            },
          },
        },
        initial: "hidden",
        whileInView: "visible",
        viewport: { once, margin: `-${Math.round(threshold * 100)}% 0px` },
      };
    }
    
    const initialProps = { opacity: effect === "fade" || effect === "slide" ? 0 : 1 };
    const initialScale = effect === "scale" ? { scale: 0.9 } : {};
    const initialPosition = effect === "slide" ? getInitialPosition() : {};
    
    return {
      initial: { ...initialProps, ...initialScale, ...initialPosition },
      whileInView: { opacity: 1, scale: 1, y: 0, x: 0 },
      viewport: { once, margin: `-${Math.round(threshold * 100)}% 0px` },
      transition: baseTransition,
    };
  };
  
  // For staggered children
  const ChildWrapper = ({ children }: { children: React.ReactNode }) => (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      {children}
    </motion.div>
  );
  
  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      style={style}
      id={id}
      {...getAnimationProps()}
    >
      {effect === "staggered"
        ? React.Children.map(children, (child) => (
            <ChildWrapper>{child}</ChildWrapper>
          ))
        : children}
    </motion.div>
  );
} 