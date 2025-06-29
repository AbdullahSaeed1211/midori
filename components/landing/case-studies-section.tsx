"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { CaseStudyCard, CaseStudyProps } from "../ui/case-study-card";
import { ScrollIndicator } from "@/components/ui/scroll-indicator";
import { BackgroundBeams } from "@/components/ui/background-beams";

const CASE_STUDIES: CaseStudyProps[] = [
  {
    title: "Simply Mortgage",
    description: "UAE's premier mortgage consultancy needed a digital transformation. We built a conversion-focused website with interactive calculators and streamlined booking. Results: significant increase in qualified leads and improved conversion rates.",
    image: "/projects/simply.webp",
    link: "/case-studies/simply-mortgage",
    tags: ["Lead Generation", "Conversion Optimization", "UAE Market"],
    accentColor: "yellow"
  },
  {
    title: "Lotus Pro Services",
    description: "Document services company in Dubai needed premium positioning. We created a sophisticated brand identity and conversion-optimized website. Established them as a premium provider in UAE's competitive market.",
    image: "/projects/lotus.webp",
    link: "/case-studies/lotus-pro-services",
    tags: ["Premium Positioning", "Brand Identity", "Professional Services"],
    accentColor: "teal"
  },
  {
    title: "Sproutly",
    description: "Urban gardening education platform needed better user engagement. We designed an intuitive learning experience with community features. Improved course completion rates and user retention significantly.",
    image: "/projects/sproutly.webp",
    link: "/case-studies/sproutly",
    tags: ["EdTech Platform", "User Experience", "Community Features"],
    accentColor: "teal"
  },
  {
    title: "Dubbby",
    description: "AI content creation platform needed trial conversions. Our sleek, benefit-focused design showcased the technology's value. Achieved notable increase in trial signups and improved engagement.",
    image: "/projects/dubbby.webp",
    link: "/case-studies/dubbby",
    tags: ["SaaS Platform", "Trial Optimization", "AI Technology"],
    accentColor: "magenta"
  },
  {
    title: "BrainWise",
    description: "Professional learning platform struggled with course completion. We redesigned the user journey with personalized paths and mobile optimization. Improved completion rates and subscription renewals.",
    image: "/projects/brainwise.webp",
    link: "/case-studies/brain-wise",
    tags: ["Learning Platform", "Mobile Optimization", "User Journey"],
    accentColor: "purple"
  },
  {
    title: "BlogSquirrel",
    description: "Content management platform needed better user engagement. We created an intuitive dashboard with enhanced analytics and streamlined workflows. Increased user retention and daily activity.",
    image: "/projects/blogport.webp",
    link: "/case-studies/blog-squirrel",
    tags: ["Content Management", "Dashboard Design", "Analytics"],
    accentColor: "teal"
  },
  {
    title: "Midori Agency",
    description: "Our own website showcasing our design and development expertise. Built with Next.js, TypeScript, and Tailwind CSS, featuring interactive elements and optimized performance. A demonstration of our approach to creating engaging, high-performance web experiences.",
    image: "/projects/midori.webp",
    link: "/",
    tags: ["Agency Website", "Portfolio", "UI/UX", "Next.js"],
    accentColor: "yellow"
  }
];

export function CaseStudiesSection() {
  return (
    <section className="py-20 bg-charcoal-black relative overflow-hidden" id="case-studies">
      {/* Dynamic background */}
      <BackgroundBeams className="z-0 opacity-40" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.span 
            className="inline-block text-kiiro-yellow font-semibold tracking-wider uppercase text-sm mb-3"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
          >
            📈 PROVEN RESULTS
          </motion.span>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Real Projects, Real Results
          </motion.h2>
          
          <motion.p 
            className="text-white/70 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            See how we&apos;ve helped businesses like yours achieve measurable growth with strategic design and development.
          </motion.p>
          
          {/* Quick Stats */}
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-kiiro-yellow">Better Results</div>
              <div className="text-sm text-off-white/70">For Every Client</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-kiiro-yellow">15+</div>
              <div className="text-sm text-off-white/70">Successful Projects</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-kiiro-yellow">1-2 weeks</div>
              <div className="text-sm text-off-white/70">Average Delivery</div>
            </div>
          </div>
        </div>
        
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {CASE_STUDIES.map((caseStudy, index) => (
            <CaseStudyCard
              key={caseStudy.title}
              {...caseStudy}
              className={cn(
                index === 0 && "md:col-span-2 lg:col-span-1",
                index === 4 && "md:col-span-2 lg:col-span-1"
              )}
            />
          ))}
        </div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-kiiro-yellow text-charcoal-black font-medium hover:bg-kiiro-yellow/90 transition-colors duration-300"
          >
            Start Your Project
          </a>
        </motion.div>
        
        {/* Scroll Indicator */}
        <div className="flex justify-center mt-20">
          <ScrollIndicator 
            text="Client Testimonials" 
            onClick={() => {
              const nextSection = document.getElementById('client-wins');
              if (nextSection) {
                nextSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          />
        </div>
      </div>
    </section>
  );
} 