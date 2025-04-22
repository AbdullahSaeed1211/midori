"use client";

import { useRef } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface BlurFadeProps {
  children: React.ReactNode;
  className?: string;
  duration?: number;
  delay?: number;
  offset?: number;
  direction?: "up" | "down" | "left" | "right";
  inView?: boolean;
  blur?: string;
}

export function BlurFade({
  children,
  className,
  duration = 0.4,
  delay = 0,
  offset = 6,
  direction = "down",
  inView = false,
  blur = "6px",
  ...props
}: BlurFadeProps) {
  const ref = useRef<HTMLDivElement>(null);

  const getTransformValue = () => {
    switch (direction) {
      case "up":
        return { y: offset };
      case "down":
        return { y: -offset };
      case "left":
        return { x: offset };
      case "right":
        return { x: -offset };
      default:
        return { y: -offset };
    }
  };

  // Variants for animation states
  const variants = {
    hidden: {
      opacity: 0,
      filter: `blur(${blur})`,
      ...getTransformValue(),
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      x: 0,
      y: 0,
      transition: {
        duration,
        delay,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      whileInView={!inView ? "visible" : undefined}
      viewport={{ once: true, amount: 0.1 }}
      variants={variants}
      {...props}
    >
      {children}
    </motion.div>
  );
} 