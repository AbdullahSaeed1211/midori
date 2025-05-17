"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface TimelineItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface VerticalTimelineProps {
  items: TimelineItem[];
  className?: string;
}

export const VerticalTimeline = ({
  items,
  className,
}: VerticalTimelineProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <div ref={containerRef} className={cn("relative", className)}>
      {/* Timeline Track - Centered on desktop, left-aligned on mobile */}
      <div className="absolute left-6 md:left-1/2 top-0 bottom-0 md:-ml-[1px] w-[2px] bg-kiiro-yellow/20" />
      
      {/* Timeline Progress Indicator */}
      <motion.div 
        className="absolute left-6 md:left-1/2 top-0 md:-ml-[1px] w-[2px] bg-kiiro-yellow"
        style={{
          scaleY: scrollYProgress,
          transformOrigin: "top",
        }}
      />

      <div className="relative py-10">
        {items.map((item, index) => (
          <TimelineElement 
            key={index} 
            item={item} 
            index={index}
            isLast={index === items.length - 1}
            position={index % 2 === 0 ? "left" : "right"} 
          />
        ))}
      </div>
    </div>
  );
};

interface TimelineElementProps {
  item: TimelineItem;
  index: number;
  isLast: boolean;
  position: "left" | "right";
}

const TimelineElement = ({ item, index, isLast, position }: TimelineElementProps) => {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const x = useTransform(
    scrollYProgress,
    [0, 0.5],
    position === "left" ? [-100, 0] : [100, 0]
  );
  
  const iconScale = useTransform(scrollYProgress, [0, 0.5], [0.6, 1]);
  const iconRotate = useTransform(scrollYProgress, [0, 0.5], [-60, 0]);
  
  return (
    <div
      ref={ref}
      className={cn(
        "relative grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 py-10 items-center",
        isLast ? "mb-0" : "mb-8"
      )}
    >
      {/* Timeline Node - Left aligned on mobile, centered on desktop */}
      <motion.div
        className="absolute left-6 md:left-1/2 top-1/2 -mt-3 md:-ml-3 h-6 w-6 rounded-full bg-kiiro-yellow z-10 flex items-center justify-center"
        style={{
          scale: iconScale,
          rotate: iconRotate,
          boxShadow: "0 0 20px rgba(255, 209, 0, 0.3)",
        }}
      >
        <div className="text-charcoal-black">{item.icon}</div>
      </motion.div>
      
      {/* Content - Full width with left padding on mobile */}
      <motion.div
        className={cn(
          "bg-charcoal-black rounded-lg p-6 border border-kiiro-yellow/20 relative",
          "transition-all duration-300 hover:border-kiiro-yellow/60 hover:shadow-[0_0_30px_rgba(255,209,0,0.1)]",
          "group cursor-default",
          "ml-12 md:ml-0", // Left margin on mobile only
          position === "left" ? "md:text-right md:ml-auto" : "md:mr-auto md:col-start-2"
        )}
        style={{ 
          opacity, 
          x,
        }}
      >
        <div className="absolute inset-0 bg-kiiro-yellow/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="relative z-10">
          <span className="inline-block px-3 py-1.5 mb-3 text-xs font-semibold rounded-full bg-kiiro-yellow/10 text-kiiro-yellow group-hover:bg-kiiro-yellow/20 transition-colors duration-300">
            Step {index + 1}
          </span>
          <h3 className="mb-3 text-2xl font-bold text-off-white group-hover:text-kiiro-yellow transition-colors duration-300">
            {item.title}
          </h3>
          <p className="text-off-white/80 text-base">
            {item.description}
          </p>
        </div>
        
        {/* Connector Line - Only on desktop */}
        <div 
          className={cn(
            "absolute top-1/2 -mt-0.5 h-[2px] bg-kiiro-yellow/30 w-10 hidden md:block",
            position === "left" ? "right-0 translate-x-full" : "left-0 -translate-x-full"
          )}
        />
      </motion.div>
    </div>
  );
}; 