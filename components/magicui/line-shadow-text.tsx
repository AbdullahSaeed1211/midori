"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface LineShadowTextProps {
  children: string;
  className?: string;
  shadowColor?: "yellow" | "teal" | "purple" | "magenta" | "dual-yellow";
  shadowIntensity?: "light" | "medium" | "heavy";
  animated?: boolean;
}

export function LineShadowText({
  children,
  className,
  shadowColor = "yellow",
  shadowIntensity = "medium",
  animated = true,
}: LineShadowTextProps) {
  const shadowColors = {
    yellow: {
      light: "drop-shadow-[0_0_10px_rgba(255,236,0,0.3)]",
      medium: "drop-shadow-[0_0_20px_rgba(255,236,0,0.5)]",
      heavy: "drop-shadow-[0_0_30px_rgba(255,236,0,0.8)]"
    },
    "dual-yellow": {
      light: "drop-shadow-[0_0_15px_rgba(255,236,0,0.4)] drop-shadow-[0_0_25px_rgba(255,193,7,0.3)]",
      medium: "drop-shadow-[0_0_20px_rgba(255,236,0,0.6)] drop-shadow-[0_0_35px_rgba(255,193,7,0.4)]",
      heavy: "drop-shadow-[0_0_30px_rgba(255,236,0,0.8)] drop-shadow-[0_0_45px_rgba(255,193,7,0.6)]"
    },
    teal: {
      light: "drop-shadow-[0_0_10px_rgba(0,206,209,0.3)]",
      medium: "drop-shadow-[0_0_20px_rgba(0,206,209,0.5)]",
      heavy: "drop-shadow-[0_0_30px_rgba(0,206,209,0.8)]"
    },
    purple: {
      light: "drop-shadow-[0_0_10px_rgba(138,43,226,0.3)]",
      medium: "drop-shadow-[0_0_20px_rgba(138,43,226,0.5)]",
      heavy: "drop-shadow-[0_0_30px_rgba(138,43,226,0.8)]"
    },
    magenta: {
      light: "drop-shadow-[0_0_10px_rgba(255,0,255,0.3)]",
      medium: "drop-shadow-[0_0_20px_rgba(255,0,255,0.5)]",
      heavy: "drop-shadow-[0_0_30px_rgba(255,0,255,0.8)]"
    }
  };

  const shadowClass = shadowColors[shadowColor][shadowIntensity];

  const textShadowStyles = {
    yellow: {
      light: "text-shadow: 0 0 10px rgba(255,236,0,0.3), 0 0 20px rgba(255,236,0,0.2), 0 0 30px rgba(255,236,0,0.1);",
      medium: "text-shadow: 0 0 10px rgba(255,236,0,0.5), 0 0 20px rgba(255,236,0,0.3), 0 0 30px rgba(255,236,0,0.2);",
      heavy: "text-shadow: 0 0 10px rgba(255,236,0,0.8), 0 0 20px rgba(255,236,0,0.5), 0 0 30px rgba(255,236,0,0.3);"
    },
    "dual-yellow": {
      light: "text-shadow: 0 0 15px rgba(255,236,0,0.4), 0 0 25px rgba(255,193,7,0.3), 0 0 35px rgba(255,152,0,0.2);",
      medium: "text-shadow: 0 0 20px rgba(255,236,0,0.6), 0 0 35px rgba(255,193,7,0.4), 0 0 50px rgba(255,152,0,0.3);",
      heavy: "text-shadow: 0 0 30px rgba(255,236,0,0.8), 0 0 45px rgba(255,193,7,0.6), 0 0 60px rgba(255,152,0,0.4);"
    },
    teal: {
      light: "text-shadow: 0 0 10px rgba(0,206,209,0.3), 0 0 20px rgba(0,206,209,0.2), 0 0 30px rgba(0,206,209,0.1);",
      medium: "text-shadow: 0 0 10px rgba(0,206,209,0.5), 0 0 20px rgba(0,206,209,0.3), 0 0 30px rgba(0,206,209,0.2);",
      heavy: "text-shadow: 0 0 10px rgba(0,206,209,0.8), 0 0 20px rgba(0,206,209,0.5), 0 0 30px rgba(0,206,209,0.3);"
    },
    purple: {
      light: "text-shadow: 0 0 10px rgba(138,43,226,0.3), 0 0 20px rgba(138,43,226,0.2), 0 0 30px rgba(138,43,226,0.1);",
      medium: "text-shadow: 0 0 10px rgba(138,43,226,0.5), 0 0 20px rgba(138,43,226,0.3), 0 0 30px rgba(138,43,226,0.2);",
      heavy: "text-shadow: 0 0 10px rgba(138,43,226,0.8), 0 0 20px rgba(138,43,226,0.5), 0 0 30px rgba(138,43,226,0.3);"
    },
    magenta: {
      light: "text-shadow: 0 0 10px rgba(255,0,255,0.3), 0 0 20px rgba(255,0,255,0.2), 0 0 30px rgba(255,0,255,0.1);",
      medium: "text-shadow: 0 0 10px rgba(255,0,255,0.5), 0 0 20px rgba(255,0,255,0.3), 0 0 30px rgba(255,0,255,0.2);",
      heavy: "text-shadow: 0 0 10px rgba(255,0,255,0.8), 0 0 20px rgba(255,0,255,0.5), 0 0 30px rgba(255,0,255,0.3);"
    }
  };

  const Component = animated ? motion.h1 : "h1";

  const animationProps = animated ? {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  } : {};

  return (
    <Component
      className={cn(
        "font-bold text-off-white relative",
        shadowClass,
        className
      )}
      style={{
        textShadow: textShadowStyles[shadowColor][shadowIntensity].replace("text-shadow: ", "").replace(";", "")
      }}
      {...animationProps}
    >
      {children}
    </Component>
  );
} 