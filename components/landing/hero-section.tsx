"use client";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ArrowRight, Star} from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Spotlight } from "@/components/ui/spotlight";
import { SparklesCore } from "@/components/ui/sparkles";
import { DotPattern } from "@/components/magicui/dot-pattern";
import { Marquee } from "@/components/magicui/marquee";


export function HeroSection() {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);
  

  // Project images for marquee columns
  const column1Images = [
    { src: "/projects/guidancewelfare.webp", alt: "Guidance Welfare Foundation - Non-profit website design showcasing charitable work and community impact", height: "h-40"},
    { src: "/projects/sprintmedia.webp", alt: "Sprint Media - Professional digital marketing agency website with modern design and conversion optimization", height: "h-40"},
    { src: "/projects/dubbby.webp", alt: "Dubbby - AI-powered video dubbing platform landing page with interactive demo and waitlist signup", height: "h-40"},
    { src: "/projects/brainwise.webp", alt: "BrainWise - Educational platform website for cognitive development courses and training programs", height: "h-32" },
    { src: "/projects/simply.webp", alt: "Simply Mortgage - Financial services website design with trust indicators and lead generation forms", height: "h-44"},
    { src: "/projects/midori.webp", alt: "Midori - Professional web development agency portfolio showcasing expertise in React and Next.js", height: "h-36" },
  ];

  const column2Images = [
    { src: "/projects/lotus.webp", alt: "Lotus Pro Services - Professional services website design for consultants and business advisors", height: "h-32"},
    { src: "/projects/sproutly.webp", alt: "Sproutly - Urban gardening course platform with interactive plant selection and ROI calculator", height: "h-44" },
    { src: "/projects/kiiro.webp", alt: "Kiiro - Modern web design agency homepage featuring conversion-optimized design and fast delivery", height: "h-36" },
    { src: "/projects/testimonialnudger.webp", alt: "Testimonial Nudger - SaaS platform website for automated customer testimonial collection and management", height: "h-32" },
    { src: "/projects/mittal.webp", alt: "Nishoo Mittal - Financial planning website for MDRT Galaxy Club member with interactive calculators and family-centric design", height: "h-40" },
  ];



  const renderImageCard = (image: { src: string; alt: string; height: string }, index: number | string, isMobile: boolean = false) => (
    <div key={index} className={cn(
      "relative group rounded-2xl overflow-hidden transition-transform duration-300 hover:scale-105",
      isMobile ? "w-48 h-32 flex-shrink-0" : ""
    )}>
      <Image
        src={image.src}
        alt={image.alt}
        width={400}
        height={225}
        loading="lazy"
        className={isMobile ? "w-full h-full object-cover" : `w-full ${image.height} object-cover`}
        style={{ aspectRatio: '16/9' }}
      />
    </div>
  );


  return (
    <section 
      className="relative min-h-screen bg-charcoal-black text-off-white overflow-hidden"
      id="hero"
    >
      {/* Background effects - layered */}
      <DotPattern
        className={cn(
          "opacity-30 text-kiiro-yellow/20",
          "[mask-image:radial-gradient(800px_circle_at_center,white,transparent)]"
        )}
        width={20}
        height={20}
        cx={1}
        cy={1}
        cr={1}
      />
      
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
      
      {/* Hero Layout with Responsive Marquee */}
      <div className="container relative z-20 mx-auto px-4 sm:px-6 lg:px-8 min-h-screen max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 min-h-screen items-center">
          
          {/* Main Hero Content - Takes majority of width */}
          <div className="lg:col-span-3 flex flex-col justify-center order-1 lg:order-1 pt-16 xs:pt-20 lg:pt-20 xl:pt-24 px-4 sm:px-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isMounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="space-y-6 xs:space-y-8 lg:space-y-16 text-left"
            >
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={isMounted ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="inline-flex items-center gap-3 px-4 py-2 bg-kiiro-yellow/10 border border-kiiro-yellow/30 rounded-full mb-6"
                >
                  <div className="w-2 h-2 bg-kiiro-yellow rounded-full animate-pulse" />
                  <span className="text-kiiro-yellow font-medium text-xs xs:text-sm sm:text-[10px] tracking-wide uppercase">
                    Professional Website Design Agency
                  </span>
                </motion.div>

                <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-10xl font-black tracking-tight leading-[0.95] sm:leading-[0.9] text-off-white">
                  <span className="block mb-3 xs:mb-4 sm:mb-6">Build a Website That Works Like a <span className="text-kiiro-yellow italic">Sales Team</span></span>
                </h1>
              </div>

              <div className="space-y-6 xs:space-y-8 lg:space-y-10">
                <p className="text-base xs:text-lg sm:text-xl lg:text-2xl text-off-white/90 leading-relaxed xs:leading-loose sm:leading-relaxed max-w-3xl lg:max-w-4xl font-light">
                  Stop wasting time on cold outreach that doesn&apos;t work. Get a professional website that <span className="text-kiiro-yellow font-semibold">attracts qualified prospects</span> and converts them into paying customers automatically.
                </p>

                <div className="flex flex-col xs:flex-row items-start xs:items-center justify-start gap-2 xs:gap-3 text-xs xs:text-xs sm:text-xs text-off-white/80">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 xs:w-2 xs:h-2 bg-[#4CAF50] rounded-full" />
                    <span>7-Day Launch</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 xs:w-2 xs:h-2 bg-[#00CED1] rounded-full" />
                    <span>Join 15+ Successful SMBs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 xs:w-2 xs:h-2 bg-[#8A2BE2] rounded-full" />
                    <span>Outrank Your Competitors</span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-4 justify-start">
                <div className="relative flex justify-start">
                  {/* Limited Offer Badge */}
                  <motion.div
                    className="absolute -top-6 lg:-top-8 -left-4 lg:-left-8 z-10"
                    initial={{ opacity: 0, scale: 0.8, rotate: -12 }}
                    animate={isMounted ? { opacity: 1, scale: 1, rotate: -12 } : {}}
                    transition={{ duration: 0.6, delay: 0.8, type: "spring", stiffness: 200 }}
                  >
                    <div className="bg-red-500 text-off-white text-xs xs:text-sm lg:text-base font-black px-2 xs:px-3 lg:px-4 py-1.5 xs:py-2 lg:py-2.5 rounded-full shadow-2xl transform -rotate-12 border-2 border-red-400">
                      ⚡ LIMITED TIME
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href="#booking"
                      className={cn(
                        "flex items-center justify-center gap-2 sm:gap-3 px-4 sm:px-6 md:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-xl sm:rounded-2xl",
                        "bg-kiiro-yellow text-charcoal-black font-bold text-base xs:text-lg sm:text-base md:text-lg lg:text-xl",
                        "transition-all duration-300 hover:scale-105",
                        "hover:shadow-[0_0_40px_rgba(255,236,0,0.6)]",
                        "w-full sm:w-auto sm:min-w-[240px] md:min-w-[260px] lg:min-w-[280px]",
                        "border-2 border-kiiro-yellow"
                      )}
                    >
                      <span className="text-center">Stop Cold Outreach Today</span>
                      <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 flex-shrink-0" />
                    </Link>
                  </motion.div>
                </div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    href="#case-studies"
                    className={cn(
                      "flex items-center justify-center gap-2 sm:gap-3 px-4 sm:px-6 md:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-xl sm:rounded-2xl",
                      "bg-transparent text-off-white font-bold text-base xs:text-lg sm:text-base md:text-lg lg:text-xl",
                      "border-2 border-off-white/40 transition-all duration-300",
                      "hover:bg-off-white/10 hover:border-off-white/60",
                      "w-full sm:w-auto sm:min-w-[240px] md:min-w-[260px] lg:min-w-[280px]",
                      "backdrop-blur-sm"
                    )}
                  >
                    <span className="text-center">See How It Works</span>
                  </Link>
                </motion.div>
              </div>

              {/* Social Proof - Integrated with CTA */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={isMounted ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-left"
              >
                <div className="flex xs:flex-row items-start xs:items-center justify-center md:justify-start gap-3 xs:gap-4">
                  <div className="flex items-center gap-3">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 xs:w-5 xs:h-5 fill-kiiro-yellow text-kiiro-yellow" />
                      ))}
                    </div>
                    <span className="text-kiiro-yellow font-bold text-base xs:text-lg">5.0</span>
                    <span className="text-off-white/60 text-xs xs:text-sm">• Trusted by 15+ companies</span>
                  </div>
                  
                </div>
              </motion.div>
              
            </motion.div>

            {/* Mobile Horizontal Marquee */}
            <div className="lg:hidden mt-12">
              <Marquee
                className="py-4"
                pauseOnHover={true}
                reverse={false}
                repeat={2}
              >
                <div className="flex space-x-4">
                  {column1Images.map((image, index) => renderImageCard(image, index, true))}
                </div>
              </Marquee>
              <Marquee
                className="py-4"
                pauseOnHover={true}
                reverse={true}
                repeat={2}
              >
                <div className="flex space-x-4">
                  {column2Images.map((image, index) => renderImageCard(image, index, true))}
                </div>
              </Marquee>
             </div>
          </div>

          {/* Desktop Vertical Marquees */}
          <div className="hidden lg:block lg:col-span-2 relative h-screen overflow-hidden order-2 lg:order-2">
            <div className="flex gap-4 h-full">
              {/* First Column - Normal direction */}
              <div className="flex-1 relative h-full">
                <Marquee
                  vertical={true}
                  reverse={false}
                  className="h-full"
                  pauseOnHover={false}
                  repeat={3}
                >
                  <div className="space-y-6">
                    {column1Images.map((image, index) => renderImageCard(image, index))}
                  </div>
                </Marquee>
              </div>

              {/* Second Column - Reverse direction */}
              <div className="flex-1 relative h-full">
                <Marquee
                  vertical={true}
                  reverse={true}
                  className="h-full"
                  pauseOnHover={false}
                  repeat={3}
                >
                  <div className="space-y-6">
                    {column2Images.map((image, index) => renderImageCard(image, index))}
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}