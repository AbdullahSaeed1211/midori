"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2 } from "lucide-react";

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressTimer);
          setTimeout(() => setIsLoading(false), 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 100);

    // Minimum loading time
    const minTimer = setTimeout(() => {
      if (progress >= 100) {
        setIsLoading(false);
      }
    }, 1500);

    return () => {
      clearInterval(progressTimer);
      clearTimeout(minTimer);
    };
  }, [progress]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-charcoal-black flex items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center">
            {/* Logo Animation */}
            <motion.div
              className="mb-8"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl font-bold text-off-white mb-2">
                kiiro
                <motion.span
                  className="text-kiiro-yellow inline-block"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  .
                </motion.span>
                <span className="text-off-white/60">cx</span>
              </h1>
              <p className="text-sm text-off-white/60">Strategic Web Engineering</p>
            </motion.div>

            {/* Loading Spinner */}
            <motion.div
              className="mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <Loader2 className="w-8 h-8 text-kiiro-yellow animate-spin mx-auto" />
            </motion.div>

            {/* Progress Bar */}
            <motion.div
              className="w-64 h-1 bg-charcoal-gray rounded-full overflow-hidden mx-auto"
              initial={{ width: 0 }}
              animate={{ width: 256 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.div
                className="h-full bg-kiiro-yellow rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>

            {/* Loading Text */}
            <motion.p
              className="text-xs text-off-white/50 mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Crafting your experience...
            </motion.p>
          </div>

          {/* Background Animation */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-kiiro-yellow/5 blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute bottom-1/4 right-1/4 w-24 h-24 rounded-full bg-teal-accent/5 blur-3xl"
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.6, 0.3, 0.6],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2,
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 