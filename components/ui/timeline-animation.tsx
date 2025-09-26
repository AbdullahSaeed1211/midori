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
  onClick?: (event: React.MouseEvent) => void;
  id?: string;
  role?: string;
  tabIndex?: number;
  'aria-label'?: string;
  onKeyDown?: (e: React.KeyboardEvent) => void;
  viewport?: {
    once?: boolean;
    margin?: string;
    amount?: number | "some" | "all";
  };
}

export function TimelineContent({
  children,
  animationNum,
  customVariants,
  timelineRef,
  className = "",
  as = "div",
  onClick,
  id,
  role,
  tabIndex,
  'aria-label': ariaLabel,
  onKeyDown,
  viewport,
}: TimelineContentProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const MotionComponent = motion(as as any);

  return (
    <MotionComponent
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewport || { once: true, root: timelineRef }}
      custom={animationNum}
      variants={customVariants}
      onClick={onClick}
      id={id}
      role={role}
      tabIndex={tabIndex}
      aria-label={ariaLabel}
      onKeyDown={onKeyDown}
    >
      {children}
    </MotionComponent>
  );
}
