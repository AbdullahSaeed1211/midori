"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode, RefObject } from "react";

interface TimelineContentProps {
  children: ReactNode;
  animationNum: number;
  customVariants: Variants;
  timelineRef: RefObject<HTMLElement>;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  onClick?: () => void;
}

export function TimelineContent({
  children,
  animationNum,
  customVariants,
  timelineRef,
  className = "",
  as = "div",
  onClick,
}: TimelineContentProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const MotionComponent = motion(as as any);

  return (
    <MotionComponent
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, root: timelineRef }}
      custom={animationNum}
      variants={customVariants}
      onClick={onClick}
    >
      {children}
    </MotionComponent>
  );
}
