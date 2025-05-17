"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { BlurFade } from "@/components/magicui/blur-fade";
import { useRef } from "react";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Spotlight } from "@/components/ui/spotlight";
import { SparklesCore } from "@/components/ui/sparkles";
import { ScrollIndicator } from "@/components/ui/scroll-indicator";
import { Marquee } from "@/components/magicui/marquee";

export function HeroSection() {
  // We'll use refs for parallex effects
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const companyLogos = [
    { name: "Simply Mortgage", title: "" },
    { name: "Dubbby", title: "" },
    { name: "Lotus Pro Services", title: "" },
    { name: "BrainWise", title: "" },
    { name: "BlogSquirrel", title: "" },
    { name: "Simply Mortgage", title: "" },
    { name: "Dubbby", title: "" },
    { name: "Lotus Pro Services", title: "" },
  ];

  return (
    <section 
      ref={heroRef}
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden py-24 bg-charcoal-black text-off-white"
      id="hero"
    >
      {/* Dynamic background effect */}
      <BackgroundBeams className="z-0" />
      
      {/* Sparkles effect */}
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
      
      <motion.div 
        className="container relative mx-auto px-4 text-center z-20 flex flex-col items-center justify-center"
        style={{ y, opacity }}
      >
        <BlurFade>
          <motion.div 
            ref={titleRef}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="my-8"
          >
            <h1 className="max-w-6xl mx-auto text-4xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl leading-none">
              <motion.span 
                className="block text-off-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                We Build High-Converting
              </motion.span>
              <motion.span 
                className="block text-kiiro-yellow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Websites & Digital Experiences
              </motion.span>
            </h1>
            
            <motion.div 
              className="mx-auto mt-8 max-w-3xl text-xl sm:text-2xl md:text-3xl text-off-white/90 font-light tracking-wide"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Turning <span className="text-kiiro-yellow">visitors into customers</span> with strategic design, compelling copy, and flawless development. We create digital experiences that drive real business results and deliver measurable ROI.
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <Link 
              href="#booking" 
              className={cn(
                "flex items-center justify-center gap-2 px-8 py-4 rounded-lg",
                "bg-kiiro-yellow text-charcoal-black font-medium text-lg",
                "transition-all duration-300 hover:scale-105",
                "hover:shadow-[0_0_25px_rgba(255,236,0,0.4)]"
              )}
            >
              Get Started <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
            
            <Link 
              href="#services"
              className={cn(
                "flex items-center justify-center gap-2 px-8 py-4 rounded-lg",
                "bg-transparent text-off-white font-medium text-lg",
                "border border-off-white/20 transition-all duration-300",
                "hover:bg-off-white/5 hover:border-off-white/40"
              )}
            >
              See Our Services
            </Link>
          </motion.div>
          
          <motion.div 
            className="mt-28 w-full overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.6 }}
          >
            <p className="mb-6 text-xs uppercase tracking-[0.3em] text-kiiro-yellow/80 font-semibold text-center">
              Trusted By
            </p>
            <div className="w-full mx-auto overflow-hidden">
              <Marquee 
                className="py-4 [--duration:30s]" 
                pauseOnHover={true}
                reverse={false}
                repeat={3}
              >
                {companyLogos.map((logo, index) => (
                  <div key={index} className="mx-10 px-6">
                    <span className="text-xl sm:text-2xl md:text-3xl font-medium text-off-white/90">
                      {logo.name}
                    </span>
                  </div>
                ))}
              </Marquee>
            </div>
          </motion.div>
          
          <motion.div 
            className="mt-10 flex justify-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.5 }}
          >
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-teal-accent/10 text-teal-accent border border-teal-accent/20">
              <span className="inline-block h-2 w-2 rounded-full bg-teal-accent animate-pulse"></span>
              <span className="text-sm font-medium">Currently accepting new clients for Q3 2025</span>
            </div>
          </motion.div>
          
          {/* Scroll Indicator */}
          <motion.div 
            className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.7, duration: 0.5 }}
          >
            <ScrollIndicator 
              text="Explore More" 
              style="line"
              onClick={() => {
                const nextSection = document.getElementById('client-wins');
                if (nextSection) {
                  nextSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            />
          </motion.div>
        </BlurFade>
      </motion.div>
    </section>
  );
} 