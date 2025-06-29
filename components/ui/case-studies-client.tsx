"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { LineShadowText } from "@/components/magicui/line-shadow-text";
import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface CaseStudy {
  title: string;
  description: string;
  image: string;
  href: string;
  category: string;
  results: string;
  accentColor: "yellow" | "teal" | "purple" | "magenta";
}

function CaseStudyCard({ study, index }: { study: CaseStudy; index: number }) {
  const accentColors = {
    yellow: {
      border: "border-kiiro-yellow/20",
      hoverBorder: "hover:border-kiiro-yellow/50",
      text: "text-kiiro-yellow",
      bg: "bg-kiiro-yellow/10",
      shadow: "hover:shadow-[0_20px_40px_rgba(255,236,0,0.15)]"
    },
    teal: {
      border: "border-teal-accent/20",
      hoverBorder: "hover:border-teal-accent/50",
      text: "text-teal-accent",
      bg: "bg-teal-accent/10",
      shadow: "hover:shadow-[0_20px_40px_rgba(0,206,209,0.15)]"
    },
    purple: {
      border: "border-purple-accent/20",
      hoverBorder: "hover:border-purple-accent/50",
      text: "text-purple-accent",
      bg: "bg-purple-accent/10",
      shadow: "hover:shadow-[0_20px_40px_rgba(138,43,226,0.15)]"
    },
    magenta: {
      border: "border-magenta-accent/20",
      hoverBorder: "hover:border-magenta-accent/50",
      text: "text-magenta-accent",
      bg: "bg-magenta-accent/10",
      shadow: "hover:shadow-[0_20px_40px_rgba(255,0,255,0.15)]"
    }
  };

  const accent = accentColors[study.accentColor];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={cn(
        "group relative rounded-2xl overflow-hidden border transition-all duration-500",
        "bg-charcoal-gray/40 backdrop-blur-sm hover:-translate-y-2",
        accent.border,
        accent.hoverBorder,
        accent.shadow
      )}
    >
      {/* Image Section */}
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={study.image}
          alt={study.title}
          fill
          className="object-cover transition-all duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-black via-charcoal-black/50 to-transparent opacity-80" />
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <div className={cn(
            "px-3 py-1 rounded-full text-xs font-medium",
            accent.bg,
            accent.text
          )}>
            {study.category}
          </div>
        </div>

        {/* View Case Study Button */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className={cn(
            "w-10 h-10 rounded-full flex items-center justify-center",
            "bg-charcoal-black/80 backdrop-blur-sm border",
            accent.border,
            accent.text
          )}>
            <ExternalLink className="h-4 w-4" />
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-off-white group-hover:text-kiiro-yellow transition-colors duration-300">
            {study.title}
          </h3>
          <ArrowUpRight className={cn(
            "h-5 w-5 transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1",
            accent.text
          )} />
        </div>
        
        <p className="text-off-white/80 text-sm leading-relaxed mb-4 line-clamp-2">
          {study.description}
        </p>

        {/* Results */}
        <div className={cn(
          "px-3 py-2 rounded-lg text-xs font-medium mb-4",
          accent.bg,
          accent.text
        )}>
          {study.results}
        </div>

        {/* Link */}
        <Link 
          href={study.href} 
          className={cn(
            "inline-flex items-center gap-2 text-sm font-medium transition-colors duration-300",
            accent.text,
            "hover:underline"
          )}
        >
          View Case Study
          <ArrowUpRight className="h-3 w-3" />
        </Link>
      </div>
    </motion.div>
  );
}

interface CaseStudiesClientProps {
  caseStudies: CaseStudy[];
}

export function CaseStudiesClient({ caseStudies }: CaseStudiesClientProps) {
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto mb-16 text-center"
        >
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="px-4 py-2 rounded-full bg-kiiro-yellow/10 text-kiiro-yellow text-sm font-medium mb-8 border border-kiiro-yellow/20 inline-block"
          >
            Our Portfolio
          </motion.div>
          
          <LineShadowText 
            shadowColor="dual-yellow"
            shadowIntensity="medium"
            className="text-4xl md:text-6xl mb-6"
          >
            Our Case Studies
          </LineShadowText>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-off-white/80 max-w-3xl mx-auto leading-relaxed"
          >
            Explore our portfolio of successful projects across various industries. 
            See how we&apos;ve helped clients achieve their digital goals with custom web solutions.
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <CaseStudyCard key={index} study={study} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-off-white/70 mb-6">
            Ready to become our next success story?
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/contact"
              className="px-8 py-3 bg-kiiro-yellow text-charcoal-black font-medium rounded-lg hover:bg-kiiro-yellow/90 transition-colors duration-300 inline-flex items-center gap-2"
            >
              Start Your Project
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
} 