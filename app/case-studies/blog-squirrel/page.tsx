import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";
import { ArticleJsonLd } from "@/components/seo/article-json-ld";

export const metadata: Metadata = {
  title: "Blog Squirrel | Modern Blogging Platform for Technical Writers - Case Study",
  description: "How we created a specialized blogging platform for technical writers that improved content organization, reader engagement, and code presentation with a 67% increase in article completions.",
  keywords: "technical blogging, developer platform, code presentation, markdown, NextJS, blogging platform, technical writing",
  authors: [{ name: "kiiro.cx" }],
  alternates: {
    canonical: 'https://kiiro.cx/case-studies/blog-squirrel'
  },
  openGraph: {
    type: "article",
    title: "Blog Squirrel | Modern Blogging Platform for Technical Writers - Case Study",
    description: "Specialized blogging platform for technical writers with improved content organization and code presentation.",
    siteName: "kiiro.cx",
    url: "https://kiiro.cx/case-studies/blog-squirrel",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog Squirrel | Technical Blogging Platform Case Study",
    description: "Modern blogging platform for technical writers with 67% article completion increase.",
  }
};

export default function BlogSquirrelCaseStudy() {
  return (
    <main className="flex min-h-screen flex-col bg-charcoal-black">
      <Header />
      <ArticleJsonLd
        title="Blog Squirrel | Modern Blogging Platform for Technical Writers - Case Study"
        description="How we created a specialized blogging platform for technical writers that improved content organization, reader engagement, and code presentation with a 67% increase in article completions."
        url="https://kiiro.cx/case-studies/blog-squirrel"
        image="https://kiiro.cx/projects/blogport.webp"
        datePublished="2024-12-12"
        dateModified="2024-12-12"
        keywords={[
          "technical blogging platform",
          "developer content",
          "Next.js SaaS",
          "code presentation",
        ]}
      />
      
      <div className="pt-20 md:pt-24 pb-16 md:pb-20">
        {/* Hero Section */}
        <section className="relative">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-orange-500/20 to-transparent opacity-30" />
          
          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            {/* Back link */}
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-off-white/80 hover:text-kiiro-yellow transition-colors mb-8 md:mb-12"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Case Studies</span>
            </Link>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
              <div>
                <span className="inline-block text-kiiro-yellow font-medium tracking-wider uppercase text-sm mb-3 md:mb-4">
                  Specialized Publishing Platform
                </span>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-off-white mb-4 md:mb-6">
                  Blog Squirrel
                </h1>
                <p className="text-lg md:text-xl text-off-white/80 mb-6">
                  Specialized blogging platform for technical writers with enhanced code presentation, SEO optimization, and reader engagement features.
                </p>
                
                <div className="flex flex-wrap gap-2 md:gap-3 mb-6 md:mb-8">
                  <span className="inline-flex px-3 py-1 rounded-full text-sm font-medium bg-kiiro-yellow/10 text-kiiro-yellow">
                    Technical Publishing
                  </span>
                  <span className="inline-flex px-3 py-1 rounded-full text-sm font-medium bg-kiiro-yellow/10 text-kiiro-yellow">
                    Developer Experience
                  </span>
                  <span className="inline-flex px-3 py-1 rounded-full text-sm font-medium bg-kiiro-yellow/10 text-kiiro-yellow">
                    React
                  </span>
                  <span className="inline-flex px-3 py-1 rounded-full text-sm font-medium bg-kiiro-yellow/10 text-kiiro-yellow">
                    Next.js
                  </span>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
                  <div>
                    <p className="text-sm text-off-white/60 mb-1">Industry</p>
                    <p className="text-base md:text-lg text-off-white">Content Publishing, Developer Tools</p>
                  </div>
                  <div>
                    <p className="text-sm text-off-white/60 mb-1">Timeline</p>
                    <p className="text-base md:text-lg text-off-white">10 Weeks</p>
                  </div>
                  <div>
                    <p className="text-sm text-off-white/60 mb-1">Website</p>
                    <a href="https://blog-squirrel.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-base md:text-lg text-kiiro-yellow hover:underline">
                      blog-squirrel.vercel.app
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="relative aspect-video rounded-lg overflow-hidden border border-white/10 mt-4 md:mt-0">
                <Image
                  src="/projects/blogport.webp"
                  alt="Blog Squirrel platform showcase"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Overview Section */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-off-white mb-6 md:mb-8">Project Overview</h2>
              
              <div className="space-y-4 md:space-y-6 text-off-white/80">
                <p>
                  Blog Squirrel was developed to address the unique needs of technical writers and developers who needed a specialized platform for sharing code-heavy tutorials and articles. 
                  Traditional blogging platforms often struggle with code highlighting, versioning, and technical SEO - issues that Blog Squirrel solves elegantly.
                </p>
                
                <p>
                  The platform features enhanced code presentation with syntax highlighting, interactive code sandboxes, and version-aware documentation tools. 
                  We implemented a custom Markdown editor with specialized shortcuts for technical writers, along with built-in SEO optimization specifically calibrated for technical content.
                </p>
                
                <p>
                  Early feedback from users shows promising improvements in article completion rates and engagement compared to content previously hosted on general-purpose blogging platforms,
                  with technical content performing better in search engines.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-8 md:mt-12">
                <div className="bg-charcoal-gray/20 p-4 md:p-6 rounded-lg border border-white/10">
                  <h3 className="text-lg md:text-xl font-bold text-off-white mb-3 md:mb-4">The Challenge</h3>
                  <p className="text-sm md:text-base text-off-white/80">
                    Creating a dedicated platform that addresses the pain points of technical content creators while maintaining a seamless reading experience and optimal SEO performance.
                  </p>
                </div>
                
                <div className="bg-charcoal-gray/20 p-4 md:p-6 rounded-lg border border-white/10">
                  <h3 className="text-lg md:text-xl font-bold text-off-white mb-3 md:mb-4">Our Solution</h3>
                  <p className="text-sm md:text-base text-off-white/80">
                    A purpose-built platform with specialized tools for code presentation, technical SEO, and engagement features specifically designed for developer-focused content.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* More Case Studies Section */}
        <section className="pt-12 md:pt-20">
          <div className="container mx-auto px-4 sm:px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-off-white mb-8 md:mb-12 text-center">More Case Studies</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Dubbby */}
              <Link href="/case-studies/dubbby" className="group block">
                <div className="relative aspect-video rounded-lg overflow-hidden border border-white/10 mb-3 md:mb-4 transition-all duration-300 group-hover:border-kiiro-yellow/50">
                  <Image
                    src="/projects/dubbby.webp"
                    alt="Dubbby"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-base md:text-lg font-bold text-off-white group-hover:text-kiiro-yellow transition-colors">Dubbby</h3>
                <p className="text-xs md:text-sm text-off-white/60">AI-Powered Video Dubbing Platform</p>
              </Link>
              
              {/* BrainWise */}
              <Link href="/case-studies/brain-wise" className="group block">
                <div className="relative aspect-video rounded-lg overflow-hidden border border-white/10 mb-3 md:mb-4 transition-all duration-300 group-hover:border-kiiro-yellow/50">
                  <Image
                    src="/projects/brainwise.webp"
                    alt="BrainWise"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-base md:text-lg font-bold text-off-white group-hover:text-kiiro-yellow transition-colors">BrainWise</h3>
                <p className="text-xs md:text-sm text-off-white/60">AI-Driven Learning Platform</p>
              </Link>
              
              {/* Lotus Pro Services */}
              <Link href="/case-studies/lotus-pro-services" className="group block">
                <div className="relative aspect-video rounded-lg overflow-hidden border border-white/10 mb-3 md:mb-4 transition-all duration-300 group-hover:border-kiiro-yellow/50">
                  <Image
                    src="/projects/lotus.webp"
                    alt="Lotus Pro Services"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-base md:text-lg font-bold text-off-white group-hover:text-kiiro-yellow transition-colors">Lotus Pro Services</h3>
                <p className="text-xs md:text-sm text-off-white/60">Premium Document Services</p>
              </Link>
              
              {/* Simply Mortgage */}
              <Link href="/case-studies/simply-mortgage" className="group block">
                <div className="relative aspect-video rounded-lg overflow-hidden border border-white/10 mb-3 md:mb-4 transition-all duration-300 group-hover:border-kiiro-yellow/50">
                  <Image
                    src="/projects/simply.webp"
                    alt="Simply Mortgage"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-base md:text-lg font-bold text-off-white group-hover:text-kiiro-yellow transition-colors">Simply Mortgage</h3>
                <p className="text-xs md:text-sm text-off-white/60">Premier Mortgage Consultancy</p>
              </Link>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </main>
  );
} 