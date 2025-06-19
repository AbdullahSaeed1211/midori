"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles } from "lucide-react";
import Link from "next/link";

export function DemoNotification() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Check if user has dismissed this notification before
    const dismissed = localStorage.getItem('demo-notification-dismissed');
    if (dismissed) {
      setIsDismissed(true);
      return;
    }

    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000); // Show after 3 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
    localStorage.setItem('demo-notification-dismissed', 'true');
  };

  if (isDismissed) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          className="fixed bottom-6 left-6 z-40 max-w-sm hidden md:block"
          initial={{ opacity: 0, x: -20, y: 20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, x: -20, y: 20 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
                    <div className="bg-charcoal-gray/95 backdrop-blur-sm border border-white/10 text-off-white rounded-lg shadow-2xl p-4 relative">
            <button
              onClick={handleDismiss}
              className="absolute top-2 right-2 p-1 hover:bg-white/5 rounded-full transition-colors text-off-white/60 hover:text-off-white"
            >
              <X className="w-3 h-3" />
            </button>
            
            <div className="flex items-start gap-3 pr-6">
              <div className="flex-shrink-0 p-1.5 bg-kiiro-yellow/10 rounded-full border border-kiiro-yellow/20">
                <Sparkles className="w-3 h-3 text-kiiro-yellow" />
              </div>
              <div className="flex-1">
                <p className="text-xs font-medium text-off-white mb-1">
                  Free Homepage Demo
                </p>
                <p className="text-xs text-off-white/70 mb-3 leading-relaxed">
                  See how we&apos;d redesign your homepage for better conversions
                </p>
                <Link
                  href="#booking"
                  className="inline-flex items-center px-3 py-1.5 bg-kiiro-yellow/90 text-charcoal-black text-xs font-medium rounded-md hover:bg-kiiro-yellow transition-colors"
                  onClick={() => setIsVisible(false)}
                >
                  Get Free Demo
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 