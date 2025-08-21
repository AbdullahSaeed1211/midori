"use client";
import Link from "next/link";
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
  
  const companyLogos = [
    "Simply Mortgage",
    "Dubbby", 
    "Lotus Pro Services",
    "BrainWise",
    "BlogSquirrel"
  ];

  // Project images for marquee columns
  const column1Images = [
    { src: "/projects/guidancewelfare.webp", alt: "Guidance Welfare Foundation Project", height: "h-40"},
    { src: "/projects/dubbby.webp", alt: "Dubbby Project", height: "h-40"},
    { src: "/projects/brainwise.webp", alt: "BrainWise Project", height: "h-32" },
    { src: "/projects/simply.webp", alt: "Simply Mortgage Project", height: "h-44"},
    { src: "/projects/midori.webp", alt: "Midori Project", height: "h-36" },
  ];

  const column2Images = [
    { src: "/projects/lotus.webp", alt: "Lotus Pro Services Project", height: "h-32"},
    { src: "/projects/sproutly.webp", alt: "Sproutly Project", height: "h-44" },
    { src: "/projects/kiiro.webp", alt: "Kiiro Project", height: "h-36" },
    { src: "/projects/testimonialnudger.webp", alt: "Testimonial Nudger Project", height: "h-32" },
    { src: "/projects/dubbby.webp", alt: "Dubbby Project", height: "h-40"},
  ];



  const renderImageCard = (image: { src: string; alt: string; height: string }, index: number | string, isMobile: boolean = false) => (
    <div key={index} className={cn(
      "relative group rounded-2xl overflow-hidden transition-transform duration-300 hover:scale-105",
      isMobile ? "w-48 h-32 flex-shrink-0" : ""
    )}>
      <img 
        src={image.src}
        alt={image.alt}
       
        loading="lazy"
        className={isMobile ? "w-full h-full object-cover" : `w-full ${image.height} object-cover`}
        style={{ aspectRatio: '16/9' }}
      />
    </div>
  );

  const renderVerticalMarqueeColumn = (images: typeof column1Images, reverse: boolean = false) => (
    <div className="flex-1 relative h-full">
      <Marquee
        vertical={true}
        reverse={reverse}
        className="h-full"
        pauseOnHover={false}
        repeat={3}
      >
        <div className="space-y-6">
          {images.map((image, index) => renderImageCard(image, index))}
        </div>
      </Marquee>
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
      <div className="container relative z-20 mx-auto px-4 py-16 lg:py-12 min-h-screen max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 min-h-screen items-center">
          
          {/* Main Hero Content - Takes majority of width */}
          <div className="lg:col-span-3 flex flex-col justify-center order-1 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isMounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}  
              className="space-y-8 text-center lg:text-left"
            >
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight leading-[0.95]">
                <span className="block mb-4 lg:mb-6 text-off-white">Build a Website That</span>
                
                  Works Like a <span className="italic tracking-tight text-kiiro-yellow">Sales Team</span>
              </h1>
              
              <p className="text-base sm:text-lg lg:text-xl text-off-white/80 leading-snug max-w-3xl mx-auto lg:mx-0">
                Professional websites designed to convert visitors into <span className="text-kiiro-yellow">customers</span>. Fast delivery, proven results, no overpriced retainers.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 pt-4 lg:pt-6 justify-center lg:justify-start">
                <div className="relative flex justify-center lg:justify-start">
                  {/* Limited Offer Badge */}
                  <motion.div 
                    className="absolute -top-5 lg:-top-6 -left-4 lg:-left-8 z-10"
                    initial={{ opacity: 0, scale: 0.8, rotate: -12 }}
                    animate={isMounted ? { opacity: 1, scale: 1, rotate: -12 } : {}}
                    transition={{ duration: 0.6, delay: 0.8, type: "spring", stiffness: 200 }}
                  >
                    <div className="bg-off-white text-charcoal-black text-sm lg:text-base font-bold px-3 lg:px-4 py-2 lg:py-2.5 rounded-full shadow-lg transform -rotate-12">
                      LIMITED OFFER
                    </div>
                  </motion.div>
            
                  <Link 
                    href="#booking" 
                    className={cn(
                      "flex items-center justify-center gap-3 px-6 lg:px-8 py-3 lg:py-4 rounded-xl",
                      "bg-kiiro-yellow text-charcoal-black font-semibold text-base lg:text-lg",
                      "transition-all duration-300 hover:scale-105",
                      "hover:shadow-[0_0_30px_rgba(255,236,0,0.4)]",
                      "w-full sm:w-auto"
                    )}
                  >
                    Get Free Conversion Audit
                    <ArrowRight className="h-4 lg:h-5 w-4 lg:w-5" />
                  </Link>
                </div>
          
                <Link 
                  href="#case-studies"
                  className={cn(
                    "flex items-center justify-center gap-3 px-6 lg:px-8 py-3 lg:py-4 rounded-xl",
                    "bg-transparent text-off-white font-semibold text-base lg:text-lg",
                    "border-2 border-off-white/20 transition-all duration-300",
                    "hover:bg-off-white/10 hover:border-off-white/40",
                    "w-full sm:w-auto"
                  )}
                >
                  View Case Studies
                </Link>
              </div>
        
              {/* Social Proof */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={isMounted ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="pt-8 lg:pt-12"
              >
                <div className="flex flex-col lg:flex-row lg:items-center gap-4 mb-6 justify-center lg:justify-start">
                  <div className="flex justify-center lg:justify-start">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 lg:w-6 h-5 lg:h-6 fill-kiiro-yellow text-kiiro-yellow" />
                    ))}
                  </div>
                  <span className="text-off-white font-semibold text-base lg:text-lg text-center lg:text-left">
                    Loved by 15+ Startup Founders
                  </span>
                </div>
                
                {/* Company Logos */}
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 lg:gap-10 text-off-white/60">
                  {companyLogos.slice(0, 4).map((logo, index) => (
                    <span key={index} className="text-sm lg:text-base font-medium">{logo}</span>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Mobile Horizontal Marquee - Below Hero Content */}
            <div className="lg:hidden mt-12 lg:mt-16">
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
              {renderVerticalMarqueeColumn(column1Images, false)}
              
              {/* Second Column - Reverse direction */}
              {renderVerticalMarqueeColumn(column2Images, true)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
