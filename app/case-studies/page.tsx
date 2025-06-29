import React from "react";
import { Metadata } from "next";
import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";
import { CaseStudiesClient } from "@/components/ui/case-studies-client";

export const metadata: Metadata = {
  title: "Case Studies | Kiiro.cx - Web Design & Development Portfolio",
  description: "Explore our portfolio of successful projects across various industries. See how we've helped clients achieve their digital goals with custom web solutions.",
  keywords: "case studies, web design projects, development portfolio, client success stories, web applications, digital transformation",
};

interface CaseStudy {
  title: string;
  description: string;
  image: string;
  href: string;
  category: string;
  results: string;
  accentColor: "yellow" | "teal" | "purple" | "magenta";
}

export default function CaseStudiesPage() {
  const caseStudies: CaseStudy[] = [
    {
      title: "Simply Mortgage",
      description: "UAE premier mortgage consultancy offering personalized solutions with streamlined application process.",
      image: "/projects/simply.webp",
      href: "/case-studies/simply-mortgage",
      category: "Financial Services",
      results: "42% increase in lead generation",
      accentColor: "yellow"
    },
    {
      title: "Lotus Pro Services",
      description: "Document clearing and business services specialist in Dubai with comprehensive service offerings.",
      image: "/projects/lotus.webp",
      href: "/case-studies/lotus-pro-services",
      category: "Business Services",
      results: "300% improvement in online visibility",
      accentColor: "teal"
    },
    {
      title: "Sproutly",
      description: "Urban Gardening Education Platform empowering city dwellers to transform their living spaces into thriving gardens.",
      image: "/projects/sproutly.webp",
      href: "/case-studies/sproutly",
      category: "Education Platform",
      results: "92% mobile conversion rate",
      accentColor: "purple"
    },
    {
      title: "Dubbby",
      description: "AI-driven content creation platform helping creators scale their production with advanced automation tools.",
      image: "/projects/dubbby.webp",
      href: "/case-studies/dubbby",
      category: "AI Platform",
      results: "150% user engagement increase",
      accentColor: "magenta"
    },
    {
      title: "BrainWise",
      description: "AI-driven learning platform for busy professionals seeking targeted skills development and career advancement.",
      image: "/projects/brainwise.webp",
      href: "/case-studies/brain-wise",
      category: "EdTech Platform",
      results: "67% course completion rate",
      accentColor: "teal"
    },
    {
      title: "BlogSquirrel",
      description: "Specialized blogging platform for technical writers with enhanced code presentation and developer-focused features.",
      image: "/projects/blogport.webp",
      href: "/case-studies/blog-squirrel",
      category: "Content Platform",
      results: "200% increase in user retention",
      accentColor: "yellow"
    },
  ];

  return (
    <main className="flex min-h-screen flex-col bg-charcoal-black">
      <Header />
      <CaseStudiesClient caseStudies={caseStudies} />
      <Footer />
    </main>
  );
} 