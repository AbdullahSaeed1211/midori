"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Keyboard } from "lucide-react";

export function AccessibilityImprovements() {
  const [isKeyboardUser, setIsKeyboardUser] = useState(false);
  const [showSkipLink, setShowSkipLink] = useState(false);

  useEffect(() => {
    // Detect keyboard navigation
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        setIsKeyboardUser(true);
        document.body.classList.add('keyboard-navigation');
      }
    };

    const handleMouseDown = () => {
      setIsKeyboardUser(false);
      document.body.classList.remove('keyboard-navigation');
    };

    // Skip link visibility
    const handleFocus = (e: FocusEvent) => {
      if ((e.target as HTMLElement)?.id === 'skip-to-main') {
        setShowSkipLink(true);
      }
    };

    const handleBlur = (e: FocusEvent) => {
      if ((e.target as HTMLElement)?.id === 'skip-to-main') {
        setShowSkipLink(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('focusin', handleFocus);
    document.addEventListener('focusout', handleBlur);

    // Add focus styles to CSS
    const style = document.createElement('style');
    style.textContent = `
      .keyboard-navigation *:focus {
        outline: 2px solid #FFD100 !important;
        outline-offset: 2px !important;
      }
      
      .keyboard-navigation button:focus,
      .keyboard-navigation a:focus,
      .keyboard-navigation input:focus,
      .keyboard-navigation textarea:focus {
        box-shadow: 0 0 0 3px rgba(255, 209, 0, 0.3) !important;
      }
      
      /* High contrast mode support */
      @media (prefers-contrast: high) {
        .text-off-white\\/70 {
          color: rgb(255 255 255) !important;
        }
        .text-off-white\\/80 {
          color: rgb(255 255 255) !important;
        }
      }
      
      /* Reduced motion support */
      @media (prefers-reduced-motion: reduce) {
        * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('focusin', handleFocus);
      document.removeEventListener('focusout', handleBlur);
      document.head.removeChild(style);
    };
  }, []);

  return (
    <>
      {/* Skip to main content link */}
      <AnimatePresence>
        {(showSkipLink || isKeyboardUser) && (
          <motion.a
            id="skip-to-main"
            href="#main-content"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            className="fixed top-4 left-4 z-[9999] bg-kiiro-yellow text-charcoal-black px-4 py-2 rounded-lg font-medium text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-kiiro-yellow sr-only focus:not-sr-only"
            onFocus={() => setShowSkipLink(true)}
            onBlur={() => setShowSkipLink(false)}
          >
            Skip to main content
          </motion.a>
        )}
      </AnimatePresence>

      {/* Accessibility toolbar for keyboard users */}
      {isKeyboardUser && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed top-20 right-4 z-50 bg-charcoal-black/95 backdrop-blur-sm border border-kiiro-yellow/30 rounded-lg p-3 text-xs"
        >
          <div className="flex items-center gap-2 mb-2">
            <Keyboard className="w-4 h-4 text-kiiro-yellow" />
            <span className="text-off-white font-medium">Keyboard Navigation Active</span>
          </div>
          <div className="text-off-white/70 space-y-1">
            <div>Tab: Navigate forward</div>
            <div>Shift+Tab: Navigate backward</div>
            <div>Enter/Space: Activate buttons</div>
            <div>Esc: Close modals</div>
          </div>
        </motion.div>
      )}
    </>
  );
}

// Enhanced focus trap hook for modals
export function useFocusTrap(isActive: boolean) {
  useEffect(() => {
    if (!isActive) return;

    const focusableElements = document.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement?.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement?.focus();
          }
        }
      }
      
      if (e.key === 'Escape') {
        // Handle escape key to close modal
        const closeButton = document.querySelector('[data-close-modal]') as HTMLElement;
        closeButton?.click();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    firstElement?.focus();

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isActive]);
} 