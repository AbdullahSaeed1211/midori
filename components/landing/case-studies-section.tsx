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
    description: "UAE's premier mortgage consultancy offering personalized solutions. We revolutionized their digital presence with a high-converting website featuring interactive tools, seamless appointment scheduling, and clear service showcasing. The result: 150% increase in qualified leads and 35% improvement in conversion rates.",
    image: "/projects/simply.webp",
    link: "/case-studies/simply-mortgage",
    tags: ["Web Design", "UX/UI", "Next.js", "SEO Optimization"],
    accentColor: "yellow"
  },
  {
    title: "Lotus Pro Services",
    description: "Document clearing and business services specialist in Dubai. We created a premium web presence with sophisticated branding, clear service categorization, and direct contact options. The site established them as a premium provider in UAE's competitive document services market, with a professional identity that reflects their expertise.",
    image: "/projects/lotus.webp",
    link: "/case-studies/lotus-pro-services",
    tags: ["Branding", "Web Development", "UI/UX", "React"],
    accentColor: "teal"
  },
  {
    title: "BrainWise",
    description: "AI-driven learning platform for busy professionals seeking targeted skills. Our redesign streamlined the user journey, implemented personalized learning paths, and optimized for mobile. The results were dramatic: 89% increase in course completion rates and 47% growth in subscription renewals.",
    image: "/projects/brainwise.webp",
    link: "/case-studies/brain-wise",
    tags: ["EdTech", "UX Design", "Mobile Optimization", "React"],
    accentColor: "purple"
  },
  {
    title: "Dubbby",
    description: "AI-driven content creation platform helping creators scale their production. Our sleek, user-focused website highlighted their innovative technology and showcased practical use cases. The optimized user journey resulted in a 40% increase in trial signups and significantly improved engagement metrics.",
    image: "/projects/dubbby.webp",
    link: "/case-studies/dubbby",
    tags: ["SaaS", "Web Application", "UI Design", "User Experience"],
    accentColor: "magenta"
  },
  {
    title: "Sproutly",
    description: "Urban Gardening Education Platform. Sproutly empowers city dwellers to transform their living spaces into thriving gardens. The platform offers expert-led courses, practical resources, and a vibrant community, all tailored to the unique challenges of urban gardening. As lead developer and UI/UX designer, I handled everything from research and design to frontend/backend development and iterative improvement. The result is a friendly, informative, and visually appealing experience for aspiring urban gardeners.",
    image: "/projects/sproutly.webp",
    link: "/case-studies/sproutly",
    tags: ["EdTech", "UI/UX", "Next.js", "React", "Branding"],
    accentColor: "teal"
  },
  {
    title: "BlogSquirrel",
    description: "A content management platform for efficient blog production. We revamped the entire user experience with an intuitive dashboard, streamlined content creation tools, and enhanced analytics. The redesign helped increase user retention by 53% and drove a 78% boost in daily active users.",
    image: "/projects/blogport.webp",
    link: "/case-studies/blog-squirrel",
    tags: ["CMS", "Dashboard Design", "Analytics", "Next.js"],
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
            Featured Work
          </motion.span>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Case Studies
          </motion.h2>
          
          <motion.p 
            className="text-white/70 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Explore how we&apos;ve helped businesses transform their digital presence and achieve measurable results. Each case study highlights our strategic approach and impact.
          </motion.p>
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
            text="Why Choose Us" 
            onClick={() => {
              const nextSection = document.getElementById('why-us');
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