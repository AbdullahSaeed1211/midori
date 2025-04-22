"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { BlurFade } from "@/components/magicui/blur-fade";
import { useEffect, useState, useRef } from "react";
import React from "react";

// Component that only renders on the client to avoid hydration mismatches
function BackgroundParticles() {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  if (!isMounted) return null;

  // Particles will only be created on the client
  return (
    <div className="absolute inset-0 overflow-hidden opacity-40 pointer-events-none">
      {Array.from({ length: 20 }).map((_, i) => {
        // Generate consistent positions for each particle
        const left = Math.floor(Math.random() * 100);
        const top = Math.floor(Math.random() * 100);
        const duration = 10 + Math.floor(Math.random() * 10);
        const delay = Math.floor(Math.random() * 5);
        
        return (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-verdant-green/40"
            style={{
              left: `${left}%`,
              top: `${top}%`,
            }}
            animate={{
              y: [0, Math.random() * -300],
              x: [0, (Math.random() - 0.5) * 100],
              opacity: [0, 0.8, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration,
              repeat: Infinity,
              delay,
              ease: "easeInOut",
            }}
          />
        );
      })}
    </div>
  );
}

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setMousePosition({ x, y });
      }
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden py-24 bg-gradient-to-b from-charcoal-black via-charcoal-black/90 to-charcoal-black text-off-white"
      id="hero"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute w-[700px] h-[700px] rounded-full bg-verdant-green/5 blur-[120px] opacity-40"
          animate={{
            x: mousePosition.x * 0.02,
            y: mousePosition.y * 0.02,
          }}
          transition={{ type: "spring", damping: 50, stiffness: 50 }}
        />
        <motion.div 
          className="absolute right-0 bottom-0 w-[500px] h-[500px] rounded-full bg-verdant-green/5 blur-[100px] opacity-50"
          animate={{
            x: -mousePosition.x * 0.01,
            y: -mousePosition.y * 0.01,
          }}
          transition={{ type: "spring", damping: 70, stiffness: 30 }}
        />
      </div>
      
      {/* Subtle patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-verdant-green/5 via-transparent to-transparent opacity-60"></div>
      <div className="absolute inset-0 opacity-[0.025] [background-image:radial-gradient(circle_at_center,_theme(colors.verdant-green)_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]"></div>
      
      {/* Client-side only particles */}
      <BackgroundParticles />
      
      <BlurFade className="container mx-auto px-4 text-center z-10">
        <div>
          <h1 className="max-w-5xl mx-auto text-4xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl leading-tight text-off-white">
            Websites That Actually{" "}
            <span className="relative inline-block">
              <span className="text-verdant-green">Drive Growth</span>
              <motion.span 
                className="absolute bottom-[-4px] left-0 h-1 w-full bg-gradient-to-r from-verdant-green to-gold rounded-full"
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "100%", opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              ></motion.span>
            </span>
          </h1>
          
          <div className="mx-auto mt-8 max-w-xl text-lg sm:text-xl md:text-2xl text-off-white/90 font-light tracking-wide">
            Not just a website. A strategic digital asset engineered for measurable business results.
          </div>
        </div>
        
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
              "bg-verdant-green text-off-white font-medium text-lg",
              "transition-all duration-300 hover:scale-105",
              "hover:shadow-[0_0_25px_rgba(107,180,94,0.4)]"
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
          <p className="mb-6 text-xs uppercase tracking-[0.3em] text-verdant-green/80 font-semibold text-center">
            Trusted By
          </p>
          <div className="relative w-full max-w-5xl mx-auto overflow-hidden py-4">
            <motion.div 
              className="flex gap-x-12 items-center whitespace-nowrap"
              animate={{ x: [0, -1000] }}
              transition={{ 
                repeat: Infinity, 
                repeatType: "loop", 
                duration: 20,
                ease: "linear"
              }}
            >
              {Array(6).fill(0).map((_, i) => (
                <React.Fragment key={i}>
                  <span className="text-xl sm:text-2xl md:text-3xl font-medium text-off-white/90 inline-block">
                    Dubbby
                  </span>
                  <span className="text-xl sm:text-2xl md:text-3xl font-medium text-off-white/90 inline-block">
                    BrainWise
                  </span>
                  <span className="text-xl sm:text-2xl md:text-3xl font-medium text-off-white/90 inline-block">
                    BlogSquirrel
                  </span>
                  <span className="text-xl sm:text-2xl md:text-3xl font-medium text-off-white/90 inline-block">
                    Simply Mortgage
                  </span>
                </React.Fragment>
              ))}
            </motion.div>
          </div>
        </motion.div>
        
        <motion.div 
          className="mt-10 flex justify-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.5 }}
        >
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-verdant-green/10 text-verdant-green border border-verdant-green/20">
            <span className="inline-block h-2 w-2 rounded-full bg-verdant-green animate-pulse"></span>
            <span className="text-sm font-medium">Currently accepting new clients for Q3 2025</span>
          </div>
        </motion.div>
      </BlurFade>
    </section>
  );
} 