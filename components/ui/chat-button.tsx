"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Calendar, Mail } from "lucide-react";
import Link from "next/link";

// Sproutly-inspired easing
const naturalEase = [0.25, 0.1, 0.25, 1] as const;

export function ChatButton() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const scrollToBooking = () => {
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3, ease: naturalEase }}
            className="mb-3 bg-charcoal-black/90 backdrop-blur-md border border-off-white/10 rounded-xl p-3 shadow-2xl min-w-[240px]"
          >
            <motion.div 
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: 0.1, ease: naturalEase }}
              className="mb-2"
            >
              <h3 className="text-off-white font-medium text-xs mb-1">
                Quick Contact
              </h3>
            </motion.div>

            <motion.div 
              className="space-y-1.5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.15, ease: naturalEase }}
            >
              {/* Book Strategy Call */}
              <motion.button
                onClick={scrollToBooking}
                className="flex items-center gap-2 p-2 bg-kiiro-yellow text-charcoal-black rounded-lg hover:bg-kiiro-yellow/90 transition-all duration-200 group w-full text-left"
                whileHover={{ scale: 1.01, x: 2 }}
                whileTap={{ scale: 0.99 }}
                transition={{ duration: 0.2, ease: naturalEase }}
              >
                <Calendar className="w-3.5 h-3.5" />
                <span className="font-medium text-xs">Book Call</span>
              </motion.button>

              {/* Get Free Audit */}
              <motion.div
                whileHover={{ scale: 1.01, x: 2 }}
                whileTap={{ scale: 0.99 }}
                transition={{ duration: 0.2, ease: naturalEase }}
              >
                <Link
                  href="/audit"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2 p-2 bg-teal-accent text-charcoal-black rounded-lg hover:bg-teal-accent/90 transition-all duration-200 group w-full"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span className="font-medium text-xs">Free Audit</span>
                </Link>
              </motion.div>

              {/* Direct Email */}
              <motion.a
                href="mailto:abdullah.saeed1724@gmail.com"
                className="flex items-center gap-2 p-2 bg-off-white/10 text-off-white rounded-lg hover:bg-off-white/20 transition-all duration-200 w-full"
                whileHover={{ scale: 1.01, x: 2 }}
                whileTap={{ scale: 0.99 }}
                transition={{ duration: 0.2, ease: naturalEase }}
              >
                <Mail className="w-3.5 h-3.5" />
                <span className="font-medium text-xs">Email</span>
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Chat Button - Smaller and cooler */}
      <motion.button
        onClick={handleToggle}
        className={`relative w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 cursor-pointer ${
          isOpen 
            ? 'bg-off-white/20 text-off-white' 
            : 'bg-kiiro-yellow text-charcoal-black hover:bg-kiiro-yellow/90 hover:shadow-xl'
        }`}
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.1, y: -1 }}
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.3, ease: naturalEase }}
        style={{ zIndex: 60 }}
      >
        {isOpen ? (
          <X className="w-4 h-4" />
        ) : (
          <MessageCircle className="w-4 h-4" />
        )}
      </motion.button>

      {/* Subtle pulsing ring animation when closed */}
      {!isOpen && (
        <motion.div
          className="absolute inset-0 rounded-full bg-kiiro-yellow/20 pointer-events-none"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0, 0.3],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: naturalEase,
          }}
          style={{ zIndex: 55 }}
        />
      )}
    </div>
  );
} 