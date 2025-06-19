import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";

export const metadata: Metadata = {
  title: "Simply Mortgage | Premier Mortgage Consultancy in Dubai",
  description: "How we created a premium digital presence for a high-end mortgage brokerage in Dubai, resulting in a 42% increase in qualified leads and improved client conversion rates.",
  keywords: "mortgage consultancy, finance website, UAE mortgage, premium web design, lead generation, interactive calculators, responsive design",
};

export default function SimplyMortgageCaseStudy() {
  return (
    <main className="flex min-h-screen flex-col bg-charcoal-black">
      <Header />
      
      <div className="pt-24 pb-20">
        {/* Hero Section */}
        <section className="relative">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-green-500/20 to-transparent opacity-30" />
          
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
                  Financial Services Website
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-off-white mb-6">
                  Simply Mortgage
                </h1>
                <p className="text-xl text-off-white/80 mb-6">
                  Premium digital presence for UAE&apos;s leading mortgage consultancy with interactive tools and personalized service orientation.
                </p>
                
                <div className="flex flex-wrap gap-3 mb-8">
                  <span className="inline-flex px-3 py-1 rounded-full text-sm font-medium bg-kiiro-yellow/10 text-kiiro-yellow">
                    Financial Services
                  </span>
                  <span className="inline-flex px-3 py-1 rounded-full text-sm font-medium bg-kiiro-yellow/10 text-kiiro-yellow">
                    UI/UX Design
                  </span>
                  <span className="inline-flex px-3 py-1 rounded-full text-sm font-medium bg-kiiro-yellow/10 text-kiiro-yellow">
                    Interactive Tools
                  </span>
                  <span className="inline-flex px-3 py-1 rounded-full text-sm font-medium bg-kiiro-yellow/10 text-kiiro-yellow">
                    Next.js
                  </span>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-6">
                  <div>
                    <p className="text-sm text-off-white/60 mb-1">Industry</p>
                    <p className="text-lg text-off-white">Financial Services, Real Estate</p>
                  </div>
                  <div>
                    <p className="text-sm text-off-white/60 mb-1">Timeline</p>
                    <p className="text-lg text-off-white">12-14 Days</p>
                  </div>
                  <div>
                    <p className="text-sm text-off-white/60 mb-1">Website</p>
                    <a href="https://simply-ten.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-lg text-kiiro-yellow hover:underline">
                      simply-ten.vercel.app
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="relative aspect-video rounded-lg overflow-hidden border border-white/10">
                <Image
                  src="/projects/simply.webp"
                  alt="Simply Mortgage website showcase"
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
                  Simply Mortgage required a sophisticated digital presence that could effectively represent their premium mortgage consultancy services
                  in Dubai&apos;s competitive financial market. Their target audience—high-net-worth individuals and investors—demanded an exceptional
                  user experience that reflected the caliber of service they could expect.
                </p>
                
                <p>
                  We developed a website that combines elegant aesthetics with powerful functionality, including interactive mortgage calculators,
                  personalized rate estimators, and an intuitive application process. The site was designed to convey trust, expertise, and exclusivity
                  while making complex financial information accessible and engaging.
                </p>
                
                <p>
                  The new website has been well-received by the client and their customers, with early feedback highlighting the improved user experience
                  and professional presentation. Initial data shows promising increases in qualified leads and consultation bookings through the platform.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                <div className="bg-charcoal-gray/20 p-6 rounded-lg border border-white/10">
                  <h3 className="text-xl font-bold text-off-white mb-4">The Challenge</h3>
                  <p className="text-off-white/80">
                    Creating a premium digital experience that appeals to high-net-worth individuals while making complex mortgage information approachable and providing tangible value to prospective clients.
                  </p>
                </div>
                
                <div className="bg-charcoal-gray/20 p-6 rounded-lg border border-white/10">
                  <h3 className="text-xl font-bold text-off-white mb-4">Our Solution</h3>
                  <p className="text-off-white/80">
                    A sophisticated website with interactive financial tools, streamlined consultation booking, and content strategically designed to establish expertise and build confidence in the decision-making process.
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
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </main>
  );
} 