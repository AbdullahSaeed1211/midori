import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";

export const metadata: Metadata = {
  title: "Lotus Pro Services | Premium Document Services in Dubai",
  description: "How we created a sophisticated website for Lotus Pro Services that established them as a premium provider in Dubai's competitive document services market.",
  keywords: "document services, business setup, visa services, UAE business, website redesign, brand identity, responsive design",
};

export default function LotusCaseStudy() {
  return (
    <main className="flex min-h-screen flex-col bg-charcoal-black">
      <Header />
      
      <div className="pt-24 pb-20">
        {/* Hero Section */}
        <section className="relative">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-700/20 to-amber-300/20 opacity-30" />
          
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
                  Professional Services Website
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-off-white mb-6">
                  Lotus Pro Services
                </h1>
                <p className="text-xl text-off-white/80 mb-6">
                  A sophisticated website redesign for a premium document clearing and business services provider in Dubai, UAE.
                </p>
                
                <div className="flex flex-wrap gap-3 mb-8">
                  <span className="inline-flex px-3 py-1 rounded-full text-sm font-medium bg-kiiro-yellow/10 text-kiiro-yellow">
                    Business Services
                  </span>
                  <span className="inline-flex px-3 py-1 rounded-full text-sm font-medium bg-kiiro-yellow/10 text-kiiro-yellow">
                    Brand Identity
                  </span>
                  <span className="inline-flex px-3 py-1 rounded-full text-sm font-medium bg-kiiro-yellow/10 text-kiiro-yellow">
                    Web Design
                  </span>
                  <span className="inline-flex px-3 py-1 rounded-full text-sm font-medium bg-kiiro-yellow/10 text-kiiro-yellow">
                    Next.js
                  </span>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-6">
                  <div>
                    <p className="text-sm text-off-white/60 mb-1">Industry</p>
                    <p className="text-lg text-off-white">Business Services, Document Clearing</p>
                  </div>
                  <div>
                    <p className="text-sm text-off-white/60 mb-1">Timeline</p>
                    <p className="text-lg text-off-white">1 Week</p>
                  </div>
                  <div>
                    <p className="text-sm text-off-white/60 mb-1">Website</p>
                    <a href="https://lotusproservices.ae/" target="_blank" rel="noopener noreferrer" className="text-lg text-kiiro-yellow hover:underline">
                      lotusproservices.ae
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="relative aspect-video rounded-lg overflow-hidden border border-white/10">
                <Image
                  src="/projects/lotus.webp"
                  alt="Lotus Pro Services website showcase"
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
                  Lotus Pro Services needed a digital presence that reflected their position as a premium provider of document clearing and business 
                  establishment services in Dubai&apos;s competitive market. Their existing website failed to convey the quality and professionalism of their services,
                  resulting in lower conversion rates than their offline reputation would suggest.
                </p>
                
                <p>
                  We redesigned their entire digital presence with a focus on sophisticated aesthetics, intuitive user journeys, and clear communication
                  of their premium service offerings. The new design emphasizes trust, reliability, and professionalism through careful attention to typography,
                  color psychology, and content structure.
                </p>
                
                <p>
                  Following the launch of the redesigned website, Lotus Pro Services has received positive feedback from clients on the improved user experience
                  and professional presentation, with initial indicators pointing to better lead quality and improved brand perception among target corporate clients.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                <div className="bg-charcoal-gray/20 p-6 rounded-lg border border-white/10">
                  <h3 className="text-xl font-bold text-off-white mb-4">The Challenge</h3>
                  <p className="text-off-white/80">
                    Creating a digital presence that effectively communicates premium quality and reliability in a saturated market, while simplifying complex service offerings for potential clients.
                  </p>
                </div>
                
                <div className="bg-charcoal-gray/20 p-6 rounded-lg border border-white/10">
                  <h3 className="text-xl font-bold text-off-white mb-4">Our Solution</h3>
                  <p className="text-off-white/80">
                    A sophisticated website with strategic UX design that guides visitors through service offerings while emphasizing trust signals and brand differentiation points.
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