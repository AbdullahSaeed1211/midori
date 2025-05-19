import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";

export const metadata: Metadata = {
  title: "Case Studies | Midori - Web Design & Development Agency",
  description: "Explore our portfolio of successful projects across various industries. See how we've helped clients achieve their digital goals with custom web solutions.",
  keywords: "case studies, web design projects, development portfolio, client success stories, web applications, digital transformation",
};

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      title: "Simply Mortgage",
      description: "UAE premier mortgage consultancy offering personalized solutions.",
      image: "/projects/simply.webp",
      href: "/case-studies/simply-mortgage",
    },
    {
      title: "Lotus Pro Services",
      description: "Document clearing and business services specialist in Dubai.",
      image: "/projects/lotus.webp",
      href: "/case-studies/lotus-pro-services",
    },
    {
      title: "Sproutly",
      description: "Urban Gardening Education Platform. Sproutly empowers city dwellers to transform their living spaces into thriving gardens. The platform offers expert-led courses, practical resources, and a vibrant community, all tailored to the unique challenges of urban gardening.",
      image: "/projects/sproutly.webp",
      href: "/case-studies/sproutly",
    },
    {
      title: "Dubbby",
      description: "AI-driven content creation platform helping creators scale their production.",
      image: "/projects/dubbby.webp",
      href: "/case-studies/dubbby",
    },
    {
      title: "BrainWise",
      description: "AI-driven learning platform for busy professionals seeking targeted skills.",
      image: "/projects/brainwise.webp",
      href: "/case-studies/brain-wise",
    },
    {
      title: "BlogSquirrel",
      description: "Specialized blogging platform for technical writers with enhanced code presentation.",
      image: "/projects/blogport.webp",
      href: "/case-studies/blog-squirrel",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col bg-charcoal-black">
      <Header />
      
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-off-white mb-6">
              Our Case Studies
            </h1>
            <p className="text-xl text-off-white/80">
              Explore our portfolio of successful projects across various industries. 
              See how we&apos;ve helped clients achieve their digital goals with custom web solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="relative aspect-video rounded-lg overflow-hidden border border-white/10 group">
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  className="object-cover transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-black to-transparent opacity-80" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-off-white mb-2">{study.title}</h3>
                  <p className="text-off-white/70 line-clamp-2 mb-4">{study.description}</p>
                  <Link href={study.href} className="text-kiiro-yellow font-medium hover:underline">
                    View Case Study
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
} 