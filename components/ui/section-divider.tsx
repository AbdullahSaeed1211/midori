"use client";

import { motion } from "framer-motion";

interface SectionDividerProps {
  variant?: "subtle" | "gradient" | "dotted" | "wave" | "geometric";
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

  if (variant === "wave") {
    return (
      <div className={`py-12 relative ${className}`}>
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 w-full h-full"
            initial={{ x: -100 }}
            whileInView={{ x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeInOut" }}
          >
            <svg
              className="w-full h-full"
              viewBox="0 0 1200 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 30C100 15 200 45 300 30C400 15 500 45 600 30C700 15 800 45 900 30C1000 15 1100 45 1200 30V60H0V30Z"
                fill="url(#wave-gradient)"
                fillOpacity="0.1"
              />
              <defs>
                <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(255, 236, 0, 0)" />
                  <stop offset="50%" stopColor="rgba(255, 236, 0, 0.3)" />
                  <stop offset="100%" stopColor="rgba(255, 236, 0, 0)" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="h-px bg-gradient-to-r from-transparent via-kiiro-yellow/20 to-transparent" />
        </div>
      </div>
    );
  }

  if (variant === "geometric") {
    return (
      <div className={`py-16 relative ${className}`}>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <motion.div
              className="w-32 h-32 border border-kiiro-yellow/10 rounded-full"
              initial={{ scale: 0, rotate: 0 }}
              whileInView={{ scale: 1, rotate: 360 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 border border-kiiro-yellow/20 rounded-full"
              initial={{ scale: 0, rotate: 0 }}
              whileInView={{ scale: 1, rotate: -360 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.2, ease: "easeInOut" }}
            />
          </div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex justify-center items-center gap-4">
            <div className="h-px bg-gradient-to-r from-transparent to-kiiro-yellow/20 w-24" />
            <div className="w-3 h-3 bg-kiiro-yellow/30 rounded-full" />
            <div className="h-px bg-gradient-to-l from-transparent to-kiiro-yellow/20 w-24" />
          </div>
        </div>
      </div>
    );
  }

  // Subtle variant with enhanced shadow
  return (
    <div className={`py-6 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="h-px bg-off-white/5 shadow-sm" />
      </div>
    </div>
  );
} 