import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Database, Shield, Zap, Users, Award, TrendingUp, Code, Smartphone } from "lucide-react";
import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";
import { ArticleJsonLd } from "@/components/seo/article-json-ld";

export const metadata: Metadata = {
  title: "Guidance Welfare Foundation | Islamic Educational Platform - LMS Case Study",
  description: "Complete case study of Guidance Welfare Foundation - a comprehensive Islamic educational management system with advanced LMS capabilities, PWA features, and production-grade architecture.",
  keywords: "Islamic LMS, educational platform, learning management system, PWA, Next.js, TypeScript, Islamic education, production-ready, case study",
  alternates: {
    canonical: 'https://kiiro.cx/case-studies/guidance-welfare'
  },
  openGraph: {
    type: "article",
    title: "Guidance Welfare Foundation | Islamic Educational Platform Case Study",
    description: "Complete case study of Guidance Welfare Foundation - a comprehensive Islamic educational management system.",
    siteName: "kiiro.cx",
    url: "https://kiiro.cx/case-studies/guidance-welfare",
  },
  twitter: {
    card: "summary_large_image",
    title: "Guidance Welfare Foundation | Islamic LMS Case Study",
    description: "Complete case study of Guidance Welfare Foundation - comprehensive Islamic educational platform.",
  }
};

export default function GuidanceWelfareCaseStudy() {
  return (
    <main className="flex min-h-screen flex-col bg-charcoal-black">
      <Header />
      <ArticleJsonLd
        title="Guidance Welfare Foundation | Islamic Educational Platform - LMS Case Study"
        description="Complete case study of Guidance Welfare Foundation - a comprehensive Islamic educational management system with advanced LMS capabilities, PWA features, and production-grade architecture."
        url="https://kiiro.cx/case-studies/guidance-welfare"
        image="https://kiiro.cx/projects/guidancewelfare.webp"
        datePublished="2024-12-01"
        dateModified="2024-12-01"
        keywords={[
          "Islamic LMS",
          "educational platform",
          "learning management system",
          "PWA",
          "Next.js case study",
        ]}
      />
      <div className="pt-24 pb-20">
        {/* Hero Section */}
        <section className="relative">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/20 to-blue-500/20 opacity-30" />
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
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-block text-kiiro-yellow font-medium tracking-wider uppercase text-sm">
                    Islamic Educational Platform
                  </span>
                  <div className="px-3 py-1 bg-green-500/20 text-green-400 text-xs font-bold rounded-full border border-green-500/30">
                    PRODUCTION READY
                  </div>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-off-white mb-6">
                  Guidance Welfare Foundation
                </h1>
                <p className="text-xl text-off-white/80 mb-6">
                  Complete Islamic Educational Management System: A production-ready learning management system serving educational institutions with advanced course management, comprehensive testing, and progressive web app capabilities.
                </p>
                <div className="flex flex-wrap gap-3 mb-8">
                  <span className="inline-flex px-3 py-1 rounded-full text-sm font-medium bg-kiiro-yellow/10 text-kiiro-yellow">
                    Islamic LMS
                  </span>
                  <span className="inline-flex px-3 py-1 rounded-full text-sm font-medium bg-kiiro-yellow/10 text-kiiro-yellow">
                    PWA
                  </span>
                  <span className="inline-flex px-3 py-1 rounded-full text-sm font-medium bg-kiiro-yellow/10 text-kiiro-yellow">
                    Next.js 15
                  </span>
                  <span className="inline-flex px-3 py-1 rounded-full text-sm font-medium bg-kiiro-yellow/10 text-kiiro-yellow">
                    TypeScript
                  </span>
                  <span className="inline-flex px-3 py-1 rounded-full text-sm font-medium bg-kiiro-yellow/10 text-kiiro-yellow">
                    PostgreSQL
                  </span>
                  <span className="inline-flex px-3 py-1 rounded-full text-sm font-medium bg-kiiro-yellow/10 text-kiiro-yellow">
                    Enterprise Security
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div>
                    <p className="text-sm text-off-white/60 mb-1">Industry</p>
                    <p className="text-lg text-off-white">Islamic Education & LMS</p>
                  </div>
                  <div>
                    <p className="text-sm text-off-white/60 mb-1">Timeline</p>
                    <p className="text-lg text-off-white">6 Months (8 Phases)</p>
                  </div>
                  <div>
                    <p className="text-sm text-off-white/60 mb-1">Architecture</p>
                    <p className="text-lg text-off-white">Hybrid SSR + PWA</p>
                  </div>
                  <div>
                    <p className="text-sm text-off-white/60 mb-1">Performance</p>
                    <p className="text-lg text-off-white">30-60% Faster Load Times</p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="https://guidancewelfare.com/" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-3 rounded-lg bg-kiiro-yellow text-charcoal-black font-bold text-lg shadow-lg hover:bg-kiiro-yellow/90 transition-colors duration-300">
                    Visit Live Platform
                  </a>
                  <div className="flex items-center gap-2 text-green-400">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">95% Complete - Production Ready</span>
                  </div>
                </div>
              </div>
              <div className="relative aspect-video rounded-lg overflow-hidden border border-white/10">
                <Image
                  src="/projects/guidancewelfare.webp"
                  alt="Guidance Welfare Foundation Islamic LMS Platform"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Technical Architecture Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-off-white mb-6">Technical Architecture</h2>
                <p className="text-xl text-off-white/80 max-w-3xl mx-auto">
                  Enterprise-grade architecture combining modern web technologies with production-ready features
                </p>
              </div>

              {/* Tech Stack Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <div className="bg-charcoal-gray/20 p-8 rounded-xl border border-white/10">
                  <div className="flex items-center gap-3 mb-6">
                    <Code className="h-8 w-8 text-kiiro-yellow" />
                    <h3 className="text-xl font-bold text-off-white">Frontend Stack</h3>
                  </div>
                  <div className="space-y-3 text-off-white/80">
                    <div className="flex justify-between">
                      <span>Framework:</span>
                      <span className="text-kiiro-yellow font-medium">Next.js 15</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Language:</span>
                      <span className="text-kiiro-yellow font-medium">TypeScript</span>
                    </div>
                    <div className="flex justify-between">
                      <span>UI Framework:</span>
                      <span className="text-kiiro-yellow font-medium">Tailwind + shadcn/ui</span>
                    </div>
                    <div className="flex justify-between">
                      <span>State Management:</span>
                      <span className="text-kiiro-yellow font-medium">React Query</span>
                    </div>
                  </div>
                </div>

                <div className="bg-charcoal-gray/20 p-8 rounded-xl border border-white/10">
                  <div className="flex items-center gap-3 mb-6">
                    <Database className="h-8 w-8 text-kiiro-yellow" />
                    <h3 className="text-xl font-bold text-off-white">Backend & Database</h3>
                  </div>
                  <div className="space-y-3 text-off-white/80">
                    <div className="flex justify-between">
                      <span>API:</span>
                      <span className="text-kiiro-yellow font-medium">Next.js API Routes</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Database:</span>
                      <span className="text-kiiro-yellow font-medium">PostgreSQL</span>
                    </div>
                    <div className="flex justify-between">
                      <span>ORM:</span>
                      <span className="text-kiiro-yellow font-medium">Prisma</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Security:</span>
                      <span className="text-kiiro-yellow font-medium">Supabase RLS</span>
                    </div>
                  </div>
                </div>

                <div className="bg-charcoal-gray/20 p-8 rounded-xl border border-white/10">
                  <div className="flex items-center gap-3 mb-6">
                    <Shield className="h-8 w-8 text-kiiro-yellow" />
                    <h3 className="text-xl font-bold text-off-white">Security & Auth</h3>
                  </div>
                  <div className="space-y-3 text-off-white/80">
                    <div className="flex justify-between">
                      <span>Authentication:</span>
                      <span className="text-kiiro-yellow font-medium">Clerk</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Validation:</span>
                      <span className="text-kiiro-yellow font-medium">Zod</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Deployment:</span>
                      <span className="text-kiiro-yellow font-medium">Vercel</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Monitoring:</span>
                      <span className="text-kiiro-yellow font-medium">Built-in</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Key Features */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-charcoal-gray/20 p-8 rounded-xl border border-white/10">
                  <h3 className="text-2xl font-bold text-off-white mb-6 flex items-center gap-3">
                    <Users className="h-6 w-6 text-kiiro-yellow" />
                    Core LMS Features
                  </h3>
                  <ul className="space-y-3 text-off-white/80">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-kiiro-yellow rounded-full mt-2 flex-shrink-0" />
                      <span>Complete Course Management System</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-kiiro-yellow rounded-full mt-2 flex-shrink-0" />
                      <span>Advanced Testing & Assessment Engine</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-kiiro-yellow rounded-full mt-2 flex-shrink-0" />
                      <span>Student Progress Tracking</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-kiiro-yellow rounded-full mt-2 flex-shrink-0" />
                      <span>Zoom Meeting Integration</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-kiiro-yellow rounded-full mt-2 flex-shrink-0" />
                      <span>Attendance Management System</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-charcoal-gray/20 p-8 rounded-xl border border-white/10">
                  <h3 className="text-2xl font-bold text-off-white mb-6 flex items-center gap-3">
                    <Smartphone className="h-6 w-6 text-kiiro-yellow" />
                    PWA & Performance
                  </h3>
                  <ul className="space-y-3 text-off-white/80">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-kiiro-yellow rounded-full mt-2 flex-shrink-0" />
                      <span>30-60% Performance Improvement</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-kiiro-yellow rounded-full mt-2 flex-shrink-0" />
                      <span>Offline Core Functionality</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-kiiro-yellow rounded-full mt-2 flex-shrink-0" />
                      <span>Mobile-First Responsive Design</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-kiiro-yellow rounded-full mt-2 flex-shrink-0" />
                      <span>One-Click App Installation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-kiiro-yellow rounded-full mt-2 flex-shrink-0" />
                      <span>Intelligent Caching Strategies</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Business Impact Section */}
        <section className="py-20 bg-charcoal-gray/10">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-off-white mb-6">Business Impact & Results</h2>
                <p className="text-xl text-off-white/80">
                  Measurable improvements in educational efficiency and user experience
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <div className="text-center">
                  <div className="bg-kiiro-yellow/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                    <TrendingUp className="h-10 w-10 text-kiiro-yellow" />
                  </div>
                  <div className="text-4xl font-bold text-kiiro-yellow mb-2">40%</div>
                  <div className="text-lg text-off-white">Faster Task Completion</div>
                  <div className="text-sm text-off-white/60">Streamlined admin workflows</div>
                </div>

                <div className="text-center">
                  <div className="bg-green-500/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                    <Smartphone className="h-10 w-10 text-green-400" />
                  </div>
                  <div className="text-4xl font-bold text-green-400 mb-2">85%</div>
                  <div className="text-lg text-off-white">Mobile Usability Improvement</div>
                  <div className="text-sm text-off-white/60">Enhanced mobile navigation</div>
                </div>

                <div className="text-center">
                  <div className="bg-blue-500/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                    <Zap className="h-10 w-10 text-blue-400" />
                  </div>
                  <div className="text-4xl font-bold text-blue-400 mb-2">60%</div>
                  <div className="text-lg text-off-white">Error Reduction</div>
                  <div className="text-sm text-off-white/60">Better validation & feedback</div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-kiiro-yellow/10 via-transparent to-kiiro-yellow/10 border border-kiiro-yellow/20 rounded-2xl p-8">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-off-white mb-4">Production Readiness Status</h3>
                  <div className="flex items-center justify-center gap-4 mb-6">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                      <span className="text-green-400 font-medium">95% Complete</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-kiiro-yellow rounded-full animate-pulse" />
                      <span className="text-kiiro-yellow font-medium">Production Ready</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse" />
                      <span className="text-blue-400 font-medium">Enterprise Grade</span>
                    </div>
                  </div>
                  <p className="text-lg text-off-white/80">
                    A comprehensive Islamic educational platform ready for immediate deployment, featuring production-grade security, scalability, and user experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Development Methodology */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-off-white mb-12 text-center">Development Methodology</h2>

              <div className="space-y-8">
                <div className="bg-charcoal-gray/20 p-6 rounded-lg border border-white/10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-8 h-8 bg-kiiro-yellow/20 rounded-full flex items-center justify-center">
                      <span className="text-kiiro-yellow font-bold">1</span>
                    </div>
                    <h3 className="text-xl font-bold text-off-white">Foundation & Authentication</h3>
                  </div>
                  <p className="text-off-white/80 ml-12">Core authentication setup with Clerk, database initialization, and security foundations</p>
                </div>

                <div className="bg-charcoal-gray/20 p-6 rounded-lg border border-white/10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-8 h-8 bg-kiiro-yellow/20 rounded-full flex items-center justify-center">
                      <span className="text-kiiro-yellow font-bold">2</span>
                    </div>
                    <h3 className="text-xl font-bold text-off-white">Core LMS Development</h3>
                  </div>
                  <p className="text-off-white/80 ml-12">Course management, enrollment system, and basic admin functionality</p>
                </div>

                <div className="bg-charcoal-gray/20 p-6 rounded-lg border border-white/10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-8 h-8 bg-kiiro-yellow/20 rounded-full flex items-center justify-center">
                      <span className="text-kiiro-yellow font-bold">3</span>
                    </div>
                    <h3 className="text-xl font-bold text-off-white">Testing & Assessment Engine</h3>
                  </div>
                  <p className="text-off-white/80 ml-12">Comprehensive testing system with multiple question types and analytics</p>
                </div>

                <div className="bg-charcoal-gray/20 p-6 rounded-lg border border-white/10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-8 h-8 bg-kiiro-yellow/20 rounded-full flex items-center justify-center">
                      <span className="text-kiiro-yellow font-bold">4</span>
                    </div>
                    <h3 className="text-xl font-bold text-off-white">Admin Dashboard & Analytics</h3>
                  </div>
                  <p className="text-off-white/80 ml-12">Advanced administrative tools with real-time analytics and reporting</p>
                </div>

                <div className="bg-charcoal-gray/20 p-6 rounded-lg border border-white/10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-8 h-8 bg-kiiro-yellow/20 rounded-full flex items-center justify-center">
                      <span className="text-kiiro-yellow font-bold">5</span>
                    </div>
                    <h3 className="text-xl font-bold text-off-white">Mobile Optimization & PWA</h3>
                  </div>
                  <p className="text-off-white/80 ml-12">Progressive Web App implementation with offline capabilities</p>
                </div>

                <div className="bg-charcoal-gray/20 p-6 rounded-lg border border-white/10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-8 h-8 bg-kiiro-yellow/20 rounded-full flex items-center justify-center">
                      <span className="text-kiiro-yellow font-bold">6</span>
                    </div>
                    <h3 className="text-xl font-bold text-off-white">Performance & Production Tuning</h3>
                  </div>
                  <p className="text-off-white/80 ml-12">Optimization, testing, and production deployment preparation</p>
                </div>

                <div className="bg-charcoal-gray/20 p-6 rounded-lg border border-white/10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-8 h-8 bg-kiiro-yellow/20 rounded-full flex items-center justify-center">
                      <span className="text-kiiro-yellow font-bold">7</span>
                    </div>
                    <h3 className="text-xl font-bold text-off-white">Final Polish & Documentation</h3>
                  </div>
                  <p className="text-off-white/80 ml-12">UI/UX enhancements, documentation, and deployment readiness</p>
                </div>

                <div className="bg-gradient-to-r from-green-500/20 to-kiiro-yellow/20 p-6 rounded-lg border border-kiiro-yellow/30">
                  <div className="flex items-center gap-4 mb-4">
                    <Award className="h-8 w-8 text-kiiro-yellow" />
                    <h3 className="text-xl font-bold text-off-white">Phase 8-9: Advanced Features (Optional)</h3>
                  </div>
                  <p className="text-off-white/80 ml-12">Real-time notifications, advanced analytics, multi-tenant architecture, and mobile apps</p>
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
              {/* Care4Brain */}
              <Link href="/case-studies/care4brain" className="group block">
                <div className="relative aspect-video rounded-lg overflow-hidden border border-white/10 mb-4 transition-all duration-300 group-hover:border-kiiro-yellow/50">
                  <Image
                    src="/projects/care4brain.webp"
                    alt="Care4Brain"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-lg font-bold text-off-white group-hover:text-kiiro-yellow transition-colors">Care4Brain</h3>
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
                <p className="text-sm text-off-white/60">Premier UAE Mortgage Consultancy</p>
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
              {/* BlogSquirrel */}
              <Link href="/case-studies/blog-squirrel" className="group block">
                <div className="relative aspect-video rounded-lg overflow-hidden border border-white/10 mb-4 transition-all duration-300 group-hover:border-kiiro-yellow/50">
                  <Image
                    src="/projects/blogport.webp"
                    alt="BlogSquirrel"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-lg font-bold text-off-white group-hover:text-kiiro-yellow transition-colors">BlogSquirrel</h3>
                <p className="text-sm text-off-white/60">Modern Blogging for Technical Writers</p>
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
