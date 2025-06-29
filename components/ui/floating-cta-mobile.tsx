"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageCircle, X } from "lucide-react";
import Link from "next/link";

export function FloatingCTAMobile() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 300px
      const shouldShow = window.scrollY > 300;
      setIsVisible(shouldShow);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-4 z-50 lg:hidden">
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="mb-4 flex flex-col gap-3"
          >
            {/* Free Audit Button */}
            <Link
              href="/audit"
              className="flex items-center gap-3 bg-kiiro-yellow text-charcoal-black px-4 py-3 rounded-full shadow-lg font-medium text-sm hover:bg-kiiro-yellow/90 transition-colors"
              onClick={() => setIsExpanded(false)}
            >
              <MessageCircle className="w-4 h-4" />
              <span>Free Audit</span>
            </Link>

            {/* Book Call Button */}
            <Link
              href="#booking"
              className="flex items-center gap-3 bg-teal-accent text-charcoal-black px-4 py-3 rounded-full shadow-lg font-medium text-sm hover:bg-teal-accent/90 transition-colors"
              onClick={() => setIsExpanded(false)}
            >
              <Phone className="w-4 h-4" />
              <span>Book Call</span>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Toggle Button */}
      <motion.button
        onClick={toggleExpanded}
        className={`w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ${
          isExpanded 
            ? 'bg-red-500 text-white' 
            : 'bg-kiiro-yellow text-charcoal-black hover:bg-kiiro-yellow/90'
        }`}
        whileTap={{ scale: 0.95 }}
        animate={{ rotate: isExpanded ? 45 : 0 }}
      >
        {isExpanded ? (
          <X className="w-6 h-6" />
        ) : (
          <Phone className="w-6 h-6" />
        )}
      </motion.button>

      {/* Pulsing ring animation when not expanded */}
      {!isExpanded && (
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-kiiro-yellow"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.8, 0, 0.8],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      )}
    </div>
  );
} 