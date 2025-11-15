import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";
import { ArticleJsonLd } from "@/components/seo/article-json-ld";

export const metadata: Metadata = {
  title: "Dubbby | AI-Powered Video Dubbing Platform - Case Study",
  description: "How we developed an innovative AI-powered video dubbing platform that helps creators reach global audiences by breaking language barriers with perfect lip synchronization.",
  keywords: "AI dubbing, video translation, content creation, SaaS platform, language barriers, global reach, NextJS development",
  authors: [{ name: "kiiro.cx" }],
  alternates: {
    canonical: 'https://kiiro.cx/case-studies/dubbby'
  },
  openGraph: {
    type: "article",
    title: "Dubbby | AI-Powered Video Dubbing Platform - Case Study",
    description: "How we developed an innovative AI-powered video dubbing platform that helps creators reach global audiences.",
    siteName: "kiiro.cx",
    url: "https://kiiro.cx/case-studies/dubbby",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dubbby | AI-Powered Video Dubbing Platform Case Study",
    description: "AI-powered video dubbing platform for global content creators.",
  }
};

export default function DubbbyCaseStudy() {
  return (
    <main className="flex min-h-screen flex-col bg-charcoal-black">
      <Header />
      <ArticleJsonLd
        title="Dubbby | AI-Powered Video Dubbing Platform - Case Study"
        description="How we developed an innovative AI-powered video dubbing platform that helps creators reach global audiences by breaking language barriers with perfect lip synchronization."
        url="https://kiiro.cx/case-studies/dubbby"
        image="https://kiiro.cx/projects/dubbby.webp"
        datePublished="2025-01-05"
        dateModified="2025-01-05"
        keywords={[
          "AI dubbing",
          "video translation",
          "content creation platform",
          "SaaS case study",
          "language localization",
        ]}
      />
      
      <div className="pt-24 pb-20">
        {/* Hero Section */}
        <section className="relative">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-500/20 to-pink-500/20 opacity-30" />
          
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
                  SaaS Platform Development
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-off-white mb-6">
                  Dubbby
                </h1>
                <p className="text-xl text-off-white/80 mb-6">
                  AI-driven content creation platform helping creators scale their production through automated video dubbing and translation. Currently on waitlist.
                </p>
                
                <div className="flex flex-wrap gap-3 mb-8">
                  <span className="inline-flex px-3 py-1 rounded-full text-sm font-medium bg-kiiro-yellow/10 text-kiiro-yellow">
                    Content Creation
                  </span>
                  <span className="inline-flex px-3 py-1 rounded-full text-sm font-medium bg-kiiro-yellow/10 text-kiiro-yellow">
                    AI Technology
                  </span>
                  <span className="inline-flex px-3 py-1 rounded-full text-sm font-medium bg-kiiro-yellow/10 text-kiiro-yellow">
                    SaaS
                  </span>
                  <span className="inline-flex px-3 py-1 rounded-full text-sm font-medium bg-kiiro-yellow/10 text-kiiro-yellow">
                    Next.js
                  </span>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-6">
                  <div>
                    <p className="text-sm text-off-white/60 mb-1">Industry</p>
                    <p className="text-lg text-off-white">Content Creation, AI Technology</p>
                  </div>
                  <div>
                    <p className="text-sm text-off-white/60 mb-1">Timeline</p>
                    <p className="text-lg text-off-white">1 Week</p>
                  </div>
                  <div>
                    <p className="text-sm text-off-white/60 mb-1">Status</p>
                    <p className="text-lg text-off-white">Waitlist</p>
                  </div>
                  <div>
                    <p className="text-sm text-off-white/60 mb-1">Website</p>
                    <a href="https://dubbby.com" target="_blank" rel="noopener noreferrer" className="text-lg text-kiiro-yellow hover:underline">
                      dubbby.com
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="relative aspect-video rounded-lg overflow-hidden border border-white/10">
                <Image
                  src="/projects/dubbby.webp"
                  alt="Dubbby platform showcase"
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
                  Dubbby was created to solve a critical problem in the content creation industry: how to efficiently reach global audiences 
                  without the massive expense and time investment of traditional dubbing. Using state-of-the-art AI, Dubbby allows creators
                  to automatically translate and dub their videos while maintaining perfect lip synchronization.
                </p>
                
                <p>
                  The platform uses advanced machine learning models to analyze speech patterns and facial movements, generating dubbed audio
                  that matches the speaker&apos;s lip movements with remarkable accuracy. This technology eliminates the uncanny valley effect
                  that plagues most traditional dubbing efforts.
                </p>
                
                <p>
                  Currently in private beta with a growing waitlist, Dubbby is positioned to help content creators expand their reach across 
                  language barriers, enabling them to connect with global audiences more effectively than with subtitles alone.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                <div className="bg-charcoal-gray/20 p-6 rounded-lg border border-white/10">
                  <h3 className="text-xl font-bold text-off-white mb-4">The Challenge</h3>
                  <p className="text-off-white/80">
                    Creating a seamless AI-powered dubbing solution that preserves the nuances of speech, maintains perfect lip sync, and scales across multiple languages and video formats.
                  </p>
                </div>
                
                <div className="bg-charcoal-gray/20 p-6 rounded-lg border border-white/10">
                  <h3 className="text-xl font-bold text-off-white mb-4">Our Solution</h3>
                  <p className="text-off-white/80">
                    A sophisticated platform combining speech analysis, translation AI, and motion tracking to create natural-sounding, lip-synchronized dubbing across multiple languages.
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
              
              {/* BrainWise */}
              <Link href="/case-studies/brain-wise" className="group block">
                <div className="relative aspect-video rounded-lg overflow-hidden border border-white/10 mb-4 transition-all duration-300 group-hover:border-kiiro-yellow/50">
                  <Image
                    src="/projects/brainwise.webp"
                    alt="BrainWise"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-lg font-bold text-off-white group-hover:text-kiiro-yellow transition-colors">BrainWise</h3>
                <p className="text-sm text-off-white/60">AI-Driven Learning Platform</p>
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