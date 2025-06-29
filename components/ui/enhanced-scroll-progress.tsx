"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const sections = [
  { id: "hero", label: "Home", offset: 0 },
  { id: "services", label: "Services", offset: 0 },
  { id: "client-wins", label: "Results", offset: 0 },
  { id: "pricing", label: "Pricing", offset: 0 },
  { id: "faq", label: "FAQ", offset: 0 },
  { id: "booking", label: "Contact", offset: 0 }
];

export function EnhancedScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentSection, setCurrentSection] = useState("hero");
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();

  // Only show on homepage
  const isHomepage = pathname === "/";

  useEffect(() => {
    if (!isHomepage) return;

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min((scrollTop / docHeight) * 100, 100);
      
      setScrollProgress(progress);
      setIsVisible(scrollTop > 100);

      // Find current section
      const sectionElements = sections.map(section => ({
        ...section,
        element: document.getElementById(section.id)
      })).filter(section => section.element);

      let current = "hero";
      for (const section of sectionElements) {
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            current = section.id;
            break;
          }
        }
      }
      setCurrentSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomepage]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Don't render if not on homepage
  if (!isHomepage || !isVisible) return null;

  return (
    <>
      {/* Main Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-charcoal-gray/50 z-50">
        <motion.div
          className="h-full bg-gradient-to-r from-kiiro-yellow to-teal-accent"
          style={{ width: `${scrollProgress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>

      {/* Section Navigation - Moved to right side and made smaller, hidden on mobile/tablet */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden xl:block">
        <div className="bg-charcoal-gray/90 backdrop-blur-sm border border-off-white/20 rounded-xl p-3 shadow-2xl max-w-[140px]">
          <div className="space-y-2">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`group flex items-center gap-2 w-full text-left transition-all duration-300 p-1 rounded ${
                  currentSection === section.id
                    ? "text-kiiro-yellow bg-kiiro-yellow/10"
                    : "text-off-white/60 hover:text-off-white hover:bg-off-white/5"
                }`}
              >
                <div
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                    currentSection === section.id
                      ? "bg-kiiro-yellow scale-125"
                      : "bg-off-white/30 group-hover:bg-off-white/50"
                  }`}
                />
                <span className="text-xs font-medium whitespace-nowrap">
                  {section.label}
                </span>
              </button>
            ))}
          </div>
          
          {/* Progress Circle - Made smaller */}
          <div className="mt-3 pt-3 border-t border-off-white/10">
            <div className="relative w-8 h-8 mx-auto">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="rgba(255, 255, 255, 0.1)"
                  strokeWidth="2"
                />
                <motion.path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="url(#gradient)"
                  strokeWidth="2"
                  strokeDasharray="100, 100"
                  strokeDashoffset={100 - scrollProgress}
                  strokeLinecap="round"
                  transition={{ duration: 0.1 }}
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#FFEC00" />
                    <stop offset="100%" stopColor="#00CED1" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xs font-bold text-off-white">
                  {Math.round(scrollProgress)}%
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 