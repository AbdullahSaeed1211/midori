import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";

export const metadata: Metadata = {
  title: "BrainWise | AI-Driven Learning Platform",
  description: "How we built an AI-powered learning platform that delivers personalized microlearning experiences for busy professionals, resulting in a 67% increase in course completion rates.",
  keywords: "microlearning, AI education, personalized learning, online courses, educational technology, NextJS development, AI implementation",
};

export default function BrainWiseCaseStudy() {
  return (
    <main className="flex min-h-screen flex-col bg-charcoal-black">
      <Header />
      
      <div className="pt-24 pb-20">
        {/* Hero Section */}
        <section className="relative">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-purple-500/20 to-blue-500/20 opacity-30" />
          
          <div className="container mx-auto px-4 relative z-10">
            {/* Back link */}
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-off-white/80 hover:text-kiiro-yellow transition-colors mb-12"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Case Studies</span>
            </Link>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block text-kiiro-yellow font-medium tracking-wider uppercase text-sm mb-4">
                  Educational Technology
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-off-white mb-6">
                  BrainWise
                </h1>
                <p className="text-xl text-off-white/80 mb-6">
                  AI-driven learning platform that delivers personalized microlearning experiences for busy professionals seeking targeted skill development.
                </p>
                
                <div className="flex flex-wrap gap-3 mb-8">
                  <span className="inline-flex px-3 py-1 rounded-full text-sm font-medium bg-kiiro-yellow/10 text-kiiro-yellow">
                    Educational Technology
                  </span>
                  <span className="inline-flex px-3 py-1 rounded-full text-sm font-medium bg-kiiro-yellow/10 text-kiiro-yellow">
                    AI Implementation
                  </span>
                  <span className="inline-flex px-3 py-1 rounded-full text-sm font-medium bg-kiiro-yellow/10 text-kiiro-yellow">
                    UX Design
                  </span>
                  <span className="inline-flex px-3 py-1 rounded-full text-sm font-medium bg-kiiro-yellow/10 text-kiiro-yellow">
                    Next.js
                  </span>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-6">
                  <div>
                    <p className="text-sm text-off-white/60 mb-1">Industry</p>
                    <p className="text-lg text-off-white">EdTech, Professional Development</p>
                  </div>
                  <div>
                    <p className="text-sm text-off-white/60 mb-1">Timeline</p>
                    <p className="text-lg text-off-white">12 Weeks</p>
                  </div>
                  <div>
                    <p className="text-sm text-off-white/60 mb-1">Website</p>
                    <a href="https://brainwise.ai/" target="_blank" rel="noopener noreferrer" className="text-lg text-kiiro-yellow hover:underline">
                      brainwise.ai
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="relative aspect-video rounded-lg overflow-hidden border border-white/10">
                <Image
                  src="/projects/brainwise.webp"
                  alt="BrainWise platform showcase"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Overview Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-off-white mb-8">Project Overview</h2>
              
              <div className="space-y-6 text-off-white/80">
                <p>
                  BrainWise was developed to address the growing need for efficient, targeted learning solutions for busy professionals.
                  Traditional online courses and learning platforms often suffer from low completion rates due to their time-intensive nature.
                  BrainWise tackles this problem through personalized microlearning powered by advanced AI.
                </p>
                
                <p>
                  The platform utilizes machine learning algorithms to analyze individual learning patterns, content engagement, and knowledge retention.
                  This data is used to create customized learning paths that deliver bite-sized knowledge modules precisely when and how users learn best,
                  adapting to their schedule, learning style, and pace.
                </p>
                
                <p>
                  Initial testing with early users indicates promising improvements in course completion rates,
                  with participants reporting better knowledge retention and practical application of skills compared to traditional learning methods.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                <div className="bg-charcoal-gray/20 p-6 rounded-lg border border-white/10">
                  <h3 className="text-xl font-bold text-off-white mb-4">The Challenge</h3>
                  <p className="text-off-white/80">
                    Creating an intelligent learning platform that adapts to individual user needs, delivers content in optimal formats and timeframes, and demonstrably improves learning outcomes.
                  </p>
                </div>
                
                <div className="bg-charcoal-gray/20 p-6 rounded-lg border border-white/10">
                  <h3 className="text-xl font-bold text-off-white mb-4">Our Solution</h3>
                  <p className="text-off-white/80">
                    An AI-powered microlearning platform that personalizes content delivery based on individual learning patterns, cognitive science, and adaptive engagement metrics.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* More Case Studies Section */}
        <section className="pt-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-off-white mb-12 text-center">More Case Studies</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Blog Squirrel */}
              <Link href="/case-studies/blog-squirrel" className="group block">
                <div className="relative aspect-video rounded-lg overflow-hidden border border-white/10 mb-4 transition-all duration-300 group-hover:border-kiiro-yellow/50">
                  <Image
                    src="/projects/blogport.webp"
                    alt="Blog Squirrel"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-lg font-bold text-off-white group-hover:text-kiiro-yellow transition-colors">Blog Squirrel</h3>
                <p className="text-sm text-off-white/60">Modern Blogging for Technical Writers</p>
              </Link>
              
              {/* Dubbby */}
              <Link href="/case-studies/dubbby" className="group block">
                <div className="relative aspect-video rounded-lg overflow-hidden border border-white/10 mb-4 transition-all duration-300 group-hover:border-kiiro-yellow/50">
                  <Image
                    src="/projects/dubbby.webp"
                    alt="Dubbby"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-lg font-bold text-off-white group-hover:text-kiiro-yellow transition-colors">Dubbby</h3>
                <p className="text-sm text-off-white/60">AI-Powered Video Dubbing Platform</p>
              </Link>
              
              {/* Lotus Pro Services */}
              <Link href="/case-studies/lotus-pro-services" className="group block">
                <div className="relative aspect-video rounded-lg overflow-hidden border border-white/10 mb-4 transition-all duration-300 group-hover:border-kiiro-yellow/50">
                  <Image
                    src="/projects/lotus.webp"
                    alt="Lotus Pro Services"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-lg font-bold text-off-white group-hover:text-kiiro-yellow transition-colors">Lotus Pro Services</h3>
                <p className="text-sm text-off-white/60">Premium Document Services</p>
              </Link>
              
              {/* Simply Mortgage */}
              <Link href="/case-studies/simply-mortgage" className="group block">
                <div className="relative aspect-video rounded-lg overflow-hidden border border-white/10 mb-4 transition-all duration-300 group-hover:border-kiiro-yellow/50">
                  <Image
                    src="/projects/simply.webp"
                    alt="Simply Mortgage"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-lg font-bold text-off-white group-hover:text-kiiro-yellow transition-colors">Simply Mortgage</h3>
                <p className="text-sm text-off-white/60">Premier Mortgage Consultancy</p>
              </Link>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </main>
  );
} 