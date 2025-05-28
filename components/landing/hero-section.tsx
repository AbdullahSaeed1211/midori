"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Spotlight } from "@/components/ui/spotlight";
import { SparklesCore } from "@/components/ui/sparkles";
import { ScrollIndicator } from "@/components/ui/scroll-indicator";
import { Marquee } from "@/components/magicui/marquee";

export function HeroSection() {
  // State to handle client-side animations
  const [isMounted, setIsMounted] = useState(false);

  // Ensure animations only run after client-side hydration
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const companyLogos = [
    "Simply Mortgage",
    "Dubbby", 
    "Lotus Pro Services",
    "BrainWise",
    "BlogSquirrel"
  ];

  return (
    <section 
      className="relative min-h-screen flex flex-col items-center justify-center bg-charcoal-black text-off-white overflow-hidden"
      id="hero"
    >
      {/* Background effects */}
      <BackgroundBeams className="z-0" />
      
      <div className="absolute inset-0 z-10">
        <SparklesCore
          id="tsparticles"
          background="transparent"
          particleColor="#FFFFFF"
          particleDensity={70}
          particleSize={1.5}
          speed={0.8}
          className="w-full h-full opacity-40"
        />
      </div>

      <Spotlight
        className="z-10"
        fill="rgba(0, 206, 209, 0.15)"
      />
      
      {/* Content */}
      <div className="container relative z-20 mx-auto px-4 text-center py-12 flex flex-col justify-center min-h-screen">
        {/* Heading */}
        <div className="max-w-4xl mx-auto mb-8 sm:mb-12 mt-20">
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]"
            initial={{ opacity: 0, y: 20 }}
            animate={isMounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="block mb-3 text-off-white">We Build High-Converting</span>
            <span className="block text-kiiro-yellow">Websites & Digital Experiences</span>
          </motion.h1>
          
          <motion.p 
            className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-off-white/80 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isMounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Without delays, fluff, or overpriced retainers. We build <span className="text-kiiro-yellow">conversion-focused websites</span> that turn your visitors into <span className="text-kiiro-yellow">paying customers</span>—fast.
          </motion.p>
        </div>
        
        {/* Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
          initial={{ opacity: 0, y: 10 }}
          animate={isMounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="relative flex justify-center sm:justify-start">
            {/* Limited Offer Badge */}
            <motion.div 
              className="absolute -top-2 -left-2 sm:-left-2 z-10"
              initial={{ opacity: 0, scale: 0.8, rotate: -12 }}
              animate={isMounted ? { opacity: 1, scale: 1, rotate: -12 } : {}}
              transition={{ duration: 0.6, delay: 0.8, type: "spring", stiffness: 200 }}
            >
              <div className="bg-off-white text-charcoal-black text-xs font-bold px-2 sm:px-3 py-1 rounded-full shadow-lg transform -rotate-12">
                <span className="hidden sm:inline">LIMITED OFFER</span>
                <span className="sm:hidden">LIMITED</span>
              </div>
            </motion.div>
            
            <Link 
              href="#booking" 
              className={cn(
                "flex items-center justify-center gap-2 px-4 sm:px-6 md:px-8 py-3 md:py-4 rounded-lg w-full sm:w-auto",
                "bg-kiiro-yellow text-charcoal-black font-medium text-sm sm:text-base md:text-lg",
                "transition-all duration-300 hover:scale-105",
                "hover:shadow-[0_0_25px_rgba(255,236,0,0.4)]"
              )}
            >
              <span className="hidden sm:inline">Get Free Homepage Demo</span>
              <span className="sm:hidden">Get Free Demo</span>
              <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
          
          <Link 
            href="#case-studies"
            className={cn(
              "flex items-center justify-center gap-2 px-4 sm:px-6 md:px-8 py-3 md:py-4 rounded-lg w-full sm:w-auto",
              "bg-transparent text-off-white font-medium text-sm sm:text-base md:text-lg",
              "border border-off-white/20 transition-all duration-300",
              "hover:bg-off-white/5 hover:border-off-white/40"
            )}
          >
            View Case Studies
          </Link>
        </motion.div>
        
        {/* Trusted By */}
        <motion.div
          className="mt-16 sm:mt-20 md:mt-24"
          initial={{ opacity: 0 }}
          animate={isMounted ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p className="text-xs uppercase tracking-wider text-kiiro-yellow/80 font-semibold mb-6">
            TRUSTED BY
          </p>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-charcoal-black to-transparent z-10"></div>
            <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-charcoal-black to-transparent z-10"></div>
            
            <div className="overflow-hidden">
              <Marquee 
                className="py-4 [--duration:30s]" 
                pauseOnHover={true}
                reverse={false}
              >
                {companyLogos.map((logo, index) => (
                  <div key={index} className="mx-8 sm:mx-10 lg:mx-12 px-3 sm:px-4 lg:px-6">
                    <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-off-white/80 whitespace-nowrap">
                      {logo}
                    </span>
                  </div>
                ))}
              </Marquee>
            </div>
          </div>
          
          {/* Explore More and Scroll To Explore combined */}
          <motion.div
            className="mt-8 flex flex-col items-center"
            initial={{ opacity: 0 }}
            animate={isMounted ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            <Link href="#case-studies" className="text-kiiro-yellow/90 hover:text-kiiro-yellow underline text-sm mb-8">
              Explore More
            </Link>
            
            {/* Status Banner - Moved above scroll indicator */}
            <div className="flex items-center gap-2 px-3 sm:px-5 py-2.5 rounded-full bg-teal-accent/10 text-teal-accent border border-teal-accent/20 mb-8 mx-4 sm:mx-0">
              <span className="inline-block h-2 w-2 rounded-full bg-teal-accent animate-pulse"></span>
              <span className="text-xs sm:text-sm font-medium text-center">
                <span className="hidden sm:inline">Currently accepting new clients for Q3 2025</span>
                <span className="sm:hidden">Accepting new clients Q3 2025</span>
              </span>
            </div>
            
            <ScrollIndicator 
              text="Scroll to explore" 
              style="line"
              onClick={() => {
                const nextSection = document.getElementById('client-wins');
                if (nextSection) {
                  nextSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 