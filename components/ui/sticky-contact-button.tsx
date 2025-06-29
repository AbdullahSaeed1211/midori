"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Calendar, Star, ArrowRight, Clock } from "lucide-react";
import Link from "next/link";

export function StickyContactButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Main Button */}
      <motion.button
        onClick={() => setShowPopup(true)}
        className="fixed bottom-6 right-6 z-40 bg-kiiro-yellow text-charcoal-black p-4 rounded-full shadow-lg hover:bg-kiiro-yellow/90 transition-all duration-300 hover:scale-110 group"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <MessageCircle className="w-6 h-6" />
        <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
      </motion.button>

      {/* Popup */}
      <AnimatePresence>
        {showPopup && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-50"
              onClick={() => setShowPopup(false)}
            />
            
            {/* Popup Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 100, y: 100 }}
              animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, x: 100, y: 100 }}
              className="fixed bottom-20 right-6 z-50 bg-charcoal-gray/95 backdrop-blur-sm border border-off-white/20 rounded-2xl p-6 w-80 shadow-2xl"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-off-white">Available Now</span>
                </div>
                <button
                  onClick={() => setShowPopup(false)}
                  className="text-off-white/60 hover:text-off-white transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Founder Info */}
              <div className="flex items-center gap-3 mb-6 p-3 bg-kiiro-yellow/10 rounded-lg border border-kiiro-yellow/20">
                <div className="w-12 h-12 rounded-full bg-kiiro-yellow flex items-center justify-center font-bold text-white text-lg border-2 border-kiiro-yellow/30">
                  K
                </div>
                <div>
                  <p className="font-semibold text-off-white text-sm">Kiiro Team</p>
                  <p className="text-xs text-off-white/70">Founder, Kiiro.cx</p>
                  <div className="flex items-center gap-1 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-kiiro-yellow text-kiiro-yellow" />
                    ))}
                    <span className="text-xs text-off-white/60 ml-1">15+ projects</span>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="text-center p-3 bg-deep-gray/50 rounded-lg">
                  <p className="text-lg font-bold text-kiiro-yellow">7 Days</p>
                  <p className="text-xs text-off-white/70">Avg Delivery</p>
                </div>
                <div className="text-center p-3 bg-deep-gray/50 rounded-lg">
                  <p className="text-lg font-bold text-teal-accent">197%</p>
                  <p className="text-xs text-off-white/70">Avg ROI</p>
                </div>
              </div>

              {/* Booking Options */}
              <div className="space-y-3">
                {/* Strategy Call */}
                <Link
                  href="#booking"
                  onClick={() => setShowPopup(false)}
                  className="flex items-center gap-3 p-4 bg-kiiro-yellow text-charcoal-black rounded-lg hover:bg-kiiro-yellow/90 transition-colors group"
                >
                  <Calendar className="w-5 h-5" />
                  <div className="flex-1">
                    <p className="font-semibold text-sm">Book Strategy Call</p>
                    <p className="text-xs opacity-80">15 min • Free consultation</p>
                  </div>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                {/* Free Audit */}
                <Link
                  href="/audit"
                  onClick={() => setShowPopup(false)}
                  className="flex items-center gap-3 p-4 bg-teal-accent text-charcoal-black rounded-lg hover:bg-teal-accent/90 transition-colors group"
                >
                  <MessageCircle className="w-5 h-5" />
                  <div className="flex-1">
                    <p className="font-semibold text-sm">Get Free Audit</p>
                    <p className="text-xs opacity-80">Conversion analysis • No cost</p>
                  </div>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                {/* Quick Message */}
                <Link
                  href="/contact"
                  onClick={() => setShowPopup(false)}
                  className="flex items-center gap-3 p-4 border border-off-white/20 text-off-white rounded-lg hover:bg-off-white/5 transition-colors group"
                >
                  <MessageCircle className="w-5 h-5" />
                  <div className="flex-1">
                    <p className="font-semibold text-sm">Send Quick Message</p>
                    <p className="text-xs text-off-white/70">Get a response within 2 hours</p>
                  </div>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Urgency Element */}
              <div className="mt-4 p-3 bg-orange-500/10 border border-orange-500/20 rounded-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Clock className="w-4 h-4 text-orange-400" />
                  <span className="text-sm font-medium text-orange-400">Limited Availability</span>
                </div>
                <p className="text-xs text-off-white/70">
                  Limited availability - book early
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
} 