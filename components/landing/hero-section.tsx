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
            Turning <span className="text-kiiro-yellow">visitors into customers</span> with strategic design, compelling copy, and flawless development. We create digital experiences that drive real business results.
          </motion.p>
        </div>
        
        {/* Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
          initial={{ opacity: 0, y: 10 }}
          animate={isMounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link 
            href="#booking" 
            className={cn(
              "flex items-center justify-center gap-2 px-6 md:px-8 py-3 md:py-4 rounded-lg",
              "bg-kiiro-yellow text-charcoal-black font-medium text-base md:text-lg",
              "transition-all duration-300 hover:scale-105",
              "hover:shadow-[0_0_25px_rgba(255,236,0,0.4)]"
            )}
          >
            Get Started <ArrowRight className="h-4 w-4 ml-1" />
          </Link>
          
          <Link 
            href="#services"
            className={cn(
              "flex items-center justify-center gap-2 px-6 md:px-8 py-3 md:py-4 rounded-lg",
              "bg-transparent text-off-white font-medium text-base md:text-lg",
              "border border-off-white/20 transition-all duration-300",
              "hover:bg-off-white/5 hover:border-off-white/40"
            )}
          >
            See Our Services
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
          
          <motion.div
            className="mt-6 inline-block"
            initial={{ opacity: 0 }}
            animate={isMounted ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            <Link href="#case-studies" className="text-kiiro-yellow/90 hover:text-kiiro-yellow underline text-sm">
              Explore More
            </Link>
          </motion.div>
        </motion.div>
        
        {/* Status Banner */}
        <motion.div 
          className="mt-8 flex justify-center"
          initial={{ opacity: 0, y: 10 }}
          animate={isMounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 1.4 }}
        >
          <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-teal-accent/10 text-teal-accent border border-teal-accent/20">
            <span className="inline-block h-2 w-2 rounded-full bg-teal-accent animate-pulse"></span>
            <span className="text-sm font-medium">Currently accepting new clients for Q3 2025</span>
          </div>
        </motion.div>
        
        {/* Scroll Indicator - Moved up in the layout to avoid collision with the status badge */}
        <motion.div 
          className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20"
          initial={{ opacity: 0 }}
          animate={isMounted ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 1.6 }}
        >
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
      </div>
    </section>
  );
} 