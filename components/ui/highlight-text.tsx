"use client";

import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export const HighlightText = ({
  children,
  className,
  highlightClassName,
  animationDuration = 0.5,
  animationDelay = 0
}: {
  children: ReactNode;
  className?: string;
  highlightClassName?: string;
  animationDuration?: number;
  animationDelay?: number;
}) => {
  return (
    <span className={cn("relative inline-block", className)}>
      {children}
      <motion.span
        className={cn(
          "absolute bottom-0 left-0 w-full h-[30%] bg-kiiro-yellow/20 rounded-md -z-10",
          highlightClassName
        )}
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{
          duration: animationDuration,
          delay: animationDelay,
          ease: "easeInOut"
        }}
      />
    </span>
  );
}; 