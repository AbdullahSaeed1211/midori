import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";
import { ArticleJsonLd } from "@/components/seo/article-json-ld";

export const metadata: Metadata = {
  title: "Sproutly | Urban Gardening Education Platform - Case Study",
  description: "How we designed and developed Sproutly, a modern web platform empowering urban dwellers to transform their living spaces into thriving gardens through expert-led courses, resources, and community.",
  keywords: "urban gardening, education platform, web development, UI/UX, Next.js, React, branding, case study",
  authors: [{ name: "kiiro.cx" }],
  alternates: {
    canonical: 'https://kiiro.cx/case-studies/sproutly'
  },
  openGraph: {
    type: "article",
    title: "Sproutly | Urban Gardening Education Platform - Case Study",
    description: "Modern web platform empowering urban dwellers to transform their living spaces into thriving gardens.",
    siteName: "kiiro.cx",
    url: "https://kiiro.cx/case-studies/sproutly",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sproutly | Urban Gardening Education Platform Case Study",
    description: "Modern web platform for urban gardening education and community.",
  }
};

export default function SproutlyCaseStudy() {
  return (
    <main className="flex min-h-screen flex-col bg-charcoal-black">
      <Header />
      <ArticleJsonLd
        title="Sproutly | Urban Gardening Education Platform - Case Study"
        description="How we designed and developed Sproutly, a modern web platform empowering urban dwellers to transform their living spaces into thriving gardens through expert-led courses, resources, and community."
        url="https://kiiro.cx/case-studies/sproutly"
        image="https://kiiro.cx/projects/sproutly.webp"
        datePublished="2025-01-02"
        dateModified="2025-01-02"
        keywords={[
          "urban gardening platform",
          "education web app",
          "community platform",
          "Next.js case study",
        ]}
      />
      <div className="pt-24 pb-20">
        {/* Hero Section */}
        <section className="relative">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-green-500/20 to-teal-500/20 opacity-30" />
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
                  EdTech Platform
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-off-white mb-6">
                  Sproutly
                </h1>
                <p className="text-xl text-off-white/80 mb-6">
                  Urban Gardening Education Platform: Empowering city dwellers to transform their living spaces into thriving gardens with expert-led courses, practical resources, and a vibrant community.
                </p>
                <div className="flex flex-wrap gap-3 mb-8">
                  <span className="inline-flex px-3 py-1 rounded-full text-sm font-medium bg-kiiro-yellow/10 text-kiiro-yellow">
                    EdTech
                  </span>
                  <span className="inline-flex px-3 py-1 rounded-full text-sm font-medium bg-kiiro-yellow/10 text-kiiro-yellow">
                    UI/UX Design
                  </span>
                  <span className="inline-flex px-3 py-1 rounded-full text-sm font-medium bg-kiiro-yellow/10 text-kiiro-yellow">
                    Next.js
                  </span>
                  <span className="inline-flex px-3 py-1 rounded-full text-sm font-medium bg-kiiro-yellow/10 text-kiiro-yellow">
                    React
                  </span>
                  <span className="inline-flex px-3 py-1 rounded-full text-sm font-medium bg-kiiro-yellow/10 text-kiiro-yellow">
                    Branding
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row gap-6">
                  <div>
                    <p className="text-sm text-off-white/60 mb-1">Industry</p>
                    <p className="text-lg text-off-white">Education, Urban Gardening</p>
                  </div>
                  <div>
                    <p className="text-sm text-off-white/60 mb-1">Timeline</p>
                    <p className="text-lg text-off-white">5 Days</p>
                  </div>
                  <div>
                    <p className="text-sm text-off-white/60 mb-1">Website</p>
                    <a href="https://sproutly.site/" target="_blank" rel="noopener noreferrer" className="text-lg text-kiiro-yellow hover:underline">
                      sproutly.site
                    </a>
                  </div>
                </div>
                <div className="mt-8">
                  <a href="https://sproutly.site/" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-3 rounded-lg bg-kiiro-yellow text-charcoal-black font-bold text-lg shadow-lg hover:bg-kiiro-yellow/90 transition-colors duration-300">
                    Visit Live Site
                  </a>
                </div>
              </div>
              <div className="relative aspect-video rounded-lg overflow-hidden border border-white/10">
                <Image
                  src="/projects/sproutly.webp"
                  alt="Sproutly platform showcase"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        {/* Project Overview Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-off-white mb-8">Project Overview</h2>
              <div className="space-y-6 text-off-white/80">
                <p>
                  Sproutly is a modern web platform designed to empower urban dwellers to transform their living spaces into thriving gardens. The project&apos;s mission is to make gardening accessible, enjoyable, and educational for people with limited space and experience. Sproutly offers a curated selection of expert-led courses, practical resources, and a vibrant community, all tailored to the unique challenges of urban gardening.
                </p>
                <p>
                  <b>My Role:</b> As the lead developer and UI/UX designer, I was responsible for the end-to-end creation of Sproutly. This included requirements gathering, user experience design, frontend and backend development, and ongoing iteration based on user feedback.
                </p>
              </div>
              {/* Challenge & Solution Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                <div className="bg-charcoal-gray/20 p-6 rounded-lg border border-white/10">
                  <h3 className="text-xl font-bold text-off-white mb-4">The Challenge</h3>
                  <p className="text-off-white/80">
                    Balancing information and simplicity: Urban gardening can be complex, but I aimed to present information in digestible, encouraging ways. I used concise copy, visual cues, and progressive disclosure to avoid overwhelming users.
                  </p>
                  <p className="text-off-white/80 mt-4">
                    Visual consistency: Ensuring a cohesive look and feel across all pages required careful component design and adherence to a style guide.
                  </p>
                  <p className="text-off-white/80 mt-4">
                    Performance: Optimizing images and leveraging Next.js features helped maintain fast load times, even with rich visuals.
                  </p>
                </div>
                <div className="bg-charcoal-gray/20 p-6 rounded-lg border border-white/10">
                  <h3 className="text-xl font-bold text-off-white mb-4">Our Solution</h3>
                  <p className="text-off-white/80">
                    A welcoming, intuitive interface with a fresh, nature-inspired color palette and playful elements like the 🌱 favicon and plant-themed illustrations. Navigation was streamlined to help users quickly find courses, resources, and community features.
                  </p>
                  <ul className="list-disc list-inside ml-4 mt-4 text-off-white/80">
                    <li>Clean, modern layout with clear calls to action.</li>
                    <li>Course cards with engaging images and concise descriptions.</li>
                    <li>Accessible navigation for both desktop and mobile users.</li>
                    <li>Subtle animations and cursor effects to enhance interactivity without distraction.</li>
                    <li>Dynamic course listing and modular components for reusability.</li>
                    <li>Responsive design for all screen sizes.</li>
                    <li>Accessible imagery and SVG-based emoji favicon for brand identity.</li>
                  </ul>
                </div>
              </div>
              {/* Outcome & Reflection */}
              <h3 className="text-2xl font-semibold text-kiiro-yellow mt-12 mb-4">Outcome</h3>
              <p className="text-off-white/80 mb-8">
                Sproutly successfully delivers a friendly, informative, and visually appealing experience for aspiring urban gardeners. The platform&apos;s approachable design and clear course structure make it easy for users to start their gardening journey, regardless of their prior experience or available space.
              </p>
              <h3 className="text-2xl font-semibold text-kiiro-yellow mb-4">Reflection</h3>
              <p className="text-off-white/80">
                This project was a rewarding opportunity to blend my passion for technology and design with a meaningful cause. I enjoyed the challenge of translating complex subject matter into an accessible, delightful web experience. Sproutly stands as a testament to the power of thoughtful design and user-centered development.
              </p>
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