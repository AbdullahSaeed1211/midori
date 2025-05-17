"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export interface CaseStudyProps {
  title: string;
  description: string;
  image: string;
  link?: string;
  tags: string[];
  className?: string;
  accentColor?: "yellow" | "teal" | "purple" | "magenta";
}

export function CaseStudyCard({
  title,
  description,
  image,
  link = "#",
  tags,
  className,
  accentColor = "yellow",
}: CaseStudyProps) {
  const [isHovered, setIsHovered] = React.useState(false);
  const [imageError, setImageError] = React.useState(false);

  const accentColors = {
    yellow: {
      bg: "bg-kiiro-yellow/10",
      text: "text-kiiro-yellow",
      border: "border-kiiro-yellow/20",
      hover: "group-hover:shadow-kiiro-yellow/20",
      tag: {
        bg: "bg-kiiro-yellow/10",
        text: "text-kiiro-yellow"
      }
    },
    teal: {
      bg: "bg-teal-accent/10",
      text: "text-teal-accent",
      border: "border-teal-accent/20",
      hover: "group-hover:shadow-teal-accent/20",
      tag: {
        bg: "bg-teal-accent/10",
        text: "text-teal-accent"
      }
    },
    purple: {
      bg: "bg-purple-accent/10",
      text: "text-purple-accent",
      border: "border-purple-accent/20",
      hover: "group-hover:shadow-purple-accent/20",
      tag: {
        bg: "bg-purple-accent/10",
        text: "text-purple-accent"
      }
    },
    magenta: {
      bg: "bg-magenta-accent/10",
      text: "text-magenta-accent",
      border: "border-magenta-accent/20",
      hover: "group-hover:shadow-magenta-accent/20",
      tag: {
        bg: "bg-magenta-accent/10",
        text: "text-magenta-accent"
      }
    }
  };

  const accent = accentColors[accentColor];

  return (
    <motion.div
      className={cn(
        "group relative overflow-hidden rounded-xl bg-charcoal-black border border-white/5",
        "transition-all duration-300 ease-in-out hover:shadow-xl hover:border-white/10",
        "flex flex-col h-full",
        accent.hover,
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative aspect-video w-full overflow-hidden">
        <div className={cn(
          "absolute inset-0 w-1 h-1 opacity-0 transition-all duration-500 ease-in-out z-10",
          "group-hover:w-full group-hover:h-full group-hover:opacity-20",
          accent.bg
        )} />
        {!imageError ? (
          <Image
            src={image}
            alt={title}
            fill
            className={cn(
              "object-cover object-top transition-all duration-500",
              isHovered ? "scale-105" : "scale-100"
            )}
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full bg-deep-gray flex items-center justify-center">
            <p className="text-off-white/50 text-sm">Image not available</p>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-black to-transparent opacity-80" />
      </div>
      
      <div className="flex-1 p-6 flex flex-col">
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className={cn(
                "inline-flex px-2.5 py-0.5 rounded-full text-xs font-medium",
                accent.tag.bg,
                accent.tag.text
              )}
            >
              {tag}
            </span>
          ))}
        </div>
        
        <h3 className="text-2xl font-bold text-off-white mb-2">{title}</h3>
        
        <p className="text-off-white/70 mb-6 line-clamp-3">{description}</p>
        
        <div className="mt-auto">
          <Link href={link} className={cn(
            "group inline-flex items-center gap-1 font-medium transition-all duration-300",
            accent.text
          )}>
            View Case Study
            <ArrowRight 
              className="h-4 w-4 transition-all duration-300 group-hover:translate-x-1" 
            />
          </Link>
        </div>
      </div>
    </motion.div>
  );
} 