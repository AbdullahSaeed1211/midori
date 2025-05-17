"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

type GradientVariant = "yellow" | "purple" | "magenta" | "teal" | "outline";
type SizeVariant = "default" | "sm" | "lg" | "icon";

interface GradientButtonProps {
  children: React.ReactNode;
  variant?: GradientVariant;
  size?: SizeVariant;
  className?: string;
  pulse?: boolean;
  shine?: boolean;
  href?: string;
  onClick?: () => void;
}

const variantClasses = {
  yellow: "bg-gradient-to-r from-kiiro-yellow to-gold text-charcoal-black hover:opacity-90",
  purple: "bg-gradient-to-r from-teal-accent to-purple-accent text-charcoal-black hover:opacity-90",
  magenta: "bg-gradient-to-r from-purple-accent to-magenta-accent text-charcoal-black hover:opacity-90",
  teal: "bg-gradient-to-r from-kiiro-yellow to-teal-accent text-charcoal-black hover:opacity-90",
  outline: "border border-white/20 bg-transparent text-white hover:bg-white/10",
};

const sizeClasses = {
  default: "h-12 px-6 py-3",
  sm: "h-9 px-3",
  lg: "h-14 px-8 py-4 text-base",
  icon: "h-10 w-10",
};

export function GradientButton({
  children,
  variant = "yellow",
  size = "default",
  className,
  pulse = false,
  shine = true,
  href,
  onClick,
}: GradientButtonProps) {
  const [isHovered, setIsHovered] = React.useState(false);

  const classes = cn(
    "relative inline-flex items-center justify-center rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
    variantClasses[variant],
    sizeClasses[size],
    pulse && "animate-pulse",
    className
  );

  // Common props for both button and anchor
  const commonProps = {
    className: classes,
    onClick,
    onHoverStart: () => setIsHovered(true),
    onHoverEnd: () => setIsHovered(false),
    whileHover: shine ? { scale: 1.02 } : {},
    whileTap: { scale: 0.98 },
  };

  // Render appropriate component based on href
  if (href) {
    return (
      <motion.a href={href} {...commonProps}>
        {children}
        
        {/* Shine effect overlay */}
        {shine && isHovered && (
          <span className="absolute inset-0 w-full h-full overflow-hidden rounded-lg pointer-events-none">
            <motion.span
              className="absolute top-0 -left-full w-1/3 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
              animate={{ x: ["-100%", "200%"] }}
              transition={{
                duration: 0.8,
                ease: "easeInOut",
              }}
            />
          </span>
        )}
      </motion.a>
    );
  }

  return (
    <motion.button type="button" {...commonProps}>
      {children}
      
      {/* Shine effect overlay */}
      {shine && isHovered && (
        <span className="absolute inset-0 w-full h-full overflow-hidden rounded-lg pointer-events-none">
          <motion.span
            className="absolute top-0 -left-full w-1/3 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
            animate={{ x: ["-100%", "200%"] }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
            }}
          />
        </span>
      )}
    </motion.button>
  );
} 