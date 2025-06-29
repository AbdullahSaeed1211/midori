"use client";

import { motion } from "framer-motion";

interface SectionDividerProps {
  variant?: "subtle" | "gradient" | "dotted";
  className?: string;
}

export function SectionDivider({ variant = "subtle", className = "" }: SectionDividerProps) {
  if (variant === "gradient") {
    return (
      <div className={`py-8 ${className}`}>
        <div className="container mx-auto px-4">
          <div className="h-px bg-gradient-to-r from-transparent via-kiiro-yellow/30 to-transparent" />
        </div>
      </div>
    );
  }

  if (variant === "dotted") {
    return (
      <div className={`py-8 ${className}`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center gap-2">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="w-2 h-2 rounded-full bg-kiiro-yellow/30"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Subtle variant
  return (
    <div className={`py-6 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="h-px bg-off-white/5" />
      </div>
    </div>
  );
} 