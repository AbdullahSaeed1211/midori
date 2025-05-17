"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import Link from "next/link";

export function StickyContactButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        // Close the menu if it's open and user scrolls back to top
        if (isOpen) setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          className="fixed bottom-6 right-6 z-50 flex flex-col items-end"
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3 }}
        >
          <AnimatePresence>
            {isOpen && (
              <motion.div
                className="flex flex-col gap-3 mb-4"
                initial={{ opacity: 0, y: 20, height: 0 }}
                animate={{ opacity: 1, y: 0, height: "auto" }}
                exit={{ opacity: 0, y: 20, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Link
                  href="#booking"
                  className="flex items-center gap-2 px-4 py-3 bg-off-white text-charcoal-black rounded-lg shadow-lg hover:bg-off-white/90 transition-colors duration-300"
                >
                  Book a Call
                </Link>
                <Link
                  href="mailto:hello@kiiro.cx"
                  className="flex items-center gap-2 px-4 py-3 bg-off-white text-charcoal-black rounded-lg shadow-lg hover:bg-off-white/90 transition-colors duration-300"
                >
                  Email Us
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
          
          <motion.button
            className={`flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition-colors duration-300 ${
              isOpen ? "bg-charcoal-black text-off-white" : "bg-kiiro-yellow text-charcoal-black"
            }`}
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <MessageCircle className="w-5 h-5" />
            )}
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 