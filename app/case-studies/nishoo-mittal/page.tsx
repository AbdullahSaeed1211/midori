import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calculator, Shield, TrendingUp, Users } from "lucide-react";
import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";
import { ArticleJsonLd } from "@/components/seo/article-json-ld";

export const metadata: Metadata = {
  title: "Nishoo Mittal | Financial Advisor Website Design & Development Case Study",
  description: "How we created a comprehensive financial planning website for MDRT Galaxy Club member Nishoo Mittal, featuring interactive calculators and modern design that builds trust with Indian families.",
  keywords: "financial advisor website, Nishoo Mittal, MDRT Galaxy Club, financial planning website, interactive calculators, wealth management, family financial planning, investment planning, risk management",
  authors: [{ name: "kiiro.cx" }],
  alternates: {
    canonical: 'https://kiiro.cx/case-studies/nishoo-mittal'
  },
  openGraph: {
    type: "article",
    title: "Nishoo Mittal | Financial Advisor Website Case Study",
    description: "Comprehensive financial planning website with interactive calculators, modern design, and trust-building elements for MDRT Galaxy Club member.",
    siteName: "kiiro.cx",
    url: "https://kiiro.cx/case-studies/nishoo-mittal",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nishoo Mittal | Financial Advisor Website Case Study",
    description: "Comprehensive financial planning website with interactive calculators for MDRT Galaxy Club member.",
  }
};

export default function NishooMittalCaseStudy() {
  return (
    <main className="flex min-h-screen flex-col bg-charcoal-black">
      <Header />
      <ArticleJsonLd
        title="Nishoo Mittal | Financial Advisor Website Design & Development Case Study"
        description="How we created a comprehensive financial planning website for MDRT Galaxy Club member Nishoo Mittal, featuring interactive calculators and modern design that builds trust with Indian families."
        url="https://kiiro.cx/case-studies/nishoo-mittal"
        image="https://kiiro.cx/projects/mittal.webp"
        datePublished="2025-01-18"
        dateModified="2025-01-18"
        keywords={[
          "financial advisor website",
          "wealth management website",
          "interactive calculators",
          "MDRT Galaxy Club",
        ]}
      />

      <div className="pt-20 md:pt-24 pb-16 md:pb-20">
        {/* Hero Section */}
        <section className="relative">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-amber-500/20 to-transparent opacity-30" />

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
                  Financial Services Excellence
                </span>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-off-white mb-4 md:mb-6">
                  Nishoo Mittal
                </h1>
                <p className="text-lg md:text-xl text-off-white/80 mb-6">
                  Comprehensive financial planning website for MDRT Galaxy Club member serving Indian families with personalized wealth management solutions.
                </p>

                <div className="flex flex-wrap gap-2 md:gap-3 mb-6 md:mb-8">
                  <span className="inline-flex px-3 py-1 rounded-full text-sm font-medium bg-kiiro-yellow/10 text-kiiro-yellow">
                    Financial Planning
                  </span>
                  <span className="inline-flex px-3 py-1 rounded-full text-sm font-medium bg-kiiro-yellow/10 text-kiiro-yellow">
                    Wealth Management
                  </span>
                  <span className="inline-flex px-3 py-1 rounded-full text-sm font-medium bg-kiiro-yellow/10 text-kiiro-yellow">
                    Interactive Calculators
                  </span>
                  <span className="inline-flex px-3 py-1 rounded-full text-sm font-medium bg-kiiro-yellow/10 text-kiiro-yellow">
                    Family-Centric Design
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
                  <div>
                    <p className="text-sm text-off-white/60 mb-1">Industry</p>
                    <p className="text-base md:text-lg text-off-white">Financial Services, Wealth Management</p>
                  </div>
                  <div>
                    <p className="text-sm text-off-white/60 mb-1">Timeline</p>
                    <p className="text-base md:text-lg text-off-white">3 Days</p>
                  </div>
                  <div>
                    <p className="text-sm text-off-white/60 mb-1">Website</p>
                    <a href="https://nishoomittal.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-base md:text-lg text-kiiro-yellow hover:underline">
                      nishoomittal.vercel.app
                    </a>
                  </div>
                </div>
              </div>

              <div className="relative aspect-video rounded-lg overflow-hidden border border-white/10 mt-4 md:mt-0">
                <Image
                  src="/projects/mittal.webp"
                  alt="Nishoo Mittal Financial Planning website showcase"
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
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-off-white mb-6 md:mb-8">Project Overview</h2>

              <div className="space-y-4 md:space-y-6 text-off-white/80">
                <p>
                  Nishoo Mittal, an MDRT Galaxy Club member with over 15 years of experience in financial services, needed a comprehensive online presence that would establish immediate credibility and attract Indian families seeking professional financial planning services.
                </p>

                <p>
                  We created a modern, trust-building website that showcases his expertise while providing practical tools for families to make informed financial decisions. The site combines professional design with interactive financial calculators, creating both credibility and utility.
                </p>

                <p>
                  The website serves as both a credibility showcase and a lead generation platform, featuring his MDRT Galaxy Club membership, extensive experience, and comprehensive service offerings that cater specifically to Indian family financial planning needs.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-8 md:mt-12">
                <div className="bg-charcoal-gray/20 p-4 md:p-6 rounded-lg border border-white/10">
                  <div className="flex items-center gap-3 mb-3">
                    <Shield className="w-6 h-6 text-kiiro-yellow" />
                    <h3 className="text-lg md:text-xl font-bold text-off-white">Trust Building</h3>
                  </div>
                  <p className="text-sm md:text-base text-off-white/80">
                    MDRT Galaxy Club membership and 15+ years experience prominently displayed for immediate credibility.
                  </p>
                </div>

                <div className="bg-charcoal-gray/20 p-4 md:p-6 rounded-lg border border-white/10">
                  <div className="flex items-center gap-3 mb-3">
                    <Calculator className="w-6 h-6 text-kiiro-yellow" />
                    <h3 className="text-lg md:text-xl font-bold text-off-white">Interactive Tools</h3>
                  </div>
                  <p className="text-sm md:text-base text-off-white/80">
                    SIP, loan, retirement, and BMI calculators for financial planning education and engagement.
                  </p>
                </div>

                <div className="bg-charcoal-gray/20 p-4 md:p-6 rounded-lg border border-white/10">
                  <div className="flex items-center gap-3 mb-3">
                    <Users className="w-6 h-6 text-kiiro-yellow" />
                    <h3 className="text-lg md:text-xl font-bold text-off-white">Family Focus</h3>
                  </div>
                  <p className="text-sm md:text-base text-off-white/80">
                    Content and design tailored to Indian family values and generational financial planning.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features Section */}
        <section className="py-12 md:py-20 bg-charcoal-gray/10">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-off-white mb-6 md:mb-8">Key Features Implemented</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div className="bg-charcoal-gray/20 p-6 rounded-lg border border-white/10">
                  <h3 className="text-xl font-bold text-kiiro-yellow mb-4">Professional Credibility</h3>
                  <ul className="space-y-2 text-off-white/80">
                    <li>• MDRT Galaxy Club membership prominently featured</li>
                    <li>• 15+ years experience quantification</li>
                    <li>• 1000+ families served social proof</li>
                    <li>• Professional certifications and memberships</li>
                  </ul>
                </div>

                <div className="bg-charcoal-gray/20 p-6 rounded-lg border border-white/10">
                  <h3 className="text-xl font-bold text-kiiro-yellow mb-4">Interactive Financial Tools</h3>
                  <ul className="space-y-2 text-off-white/80">
                    <li>• SIP Calculator for mutual fund investments</li>
                    <li>• Loan EMI Calculator for home/personal loans</li>
                    <li>• Retirement Planning Calculator</li>
                    <li>• BMI Calculator for health-wealth connection</li>
                  </ul>
                </div>

                <div className="bg-charcoal-gray/20 p-6 rounded-lg border border-white/10">
                  <h3 className="text-xl font-bold text-kiiro-yellow mb-4">Comprehensive Services</h3>
                  <ul className="space-y-2 text-off-white/80">
                    <li>• Investment Planning & Portfolio Management</li>
                    <li>• Risk Management & Insurance Solutions</li>
                    <li>• Tax Planning & Optimization</li>
                    <li>• Retirement Planning & Wealth Management</li>
                  </ul>
                </div>

                <div className="bg-charcoal-gray/20 p-6 rounded-lg border border-white/10">
                  <h3 className="text-xl font-bold text-kiiro-yellow mb-4">Mobile-First Design</h3>
                  <ul className="space-y-2 text-off-white/80">
                    <li>• Touch-optimized interface (48px minimum targets)</li>
                    <li>• Responsive typography scaling</li>
                    <li>• Fast loading for 4G/5G networks</li>
                    <li>• Progressive Web App capabilities</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-off-white mb-6 md:mb-8">Results & Impact</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div className="text-center p-6 bg-gradient-to-br from-kiiro-yellow/10 to-kiiro-yellow/5 rounded-lg border border-kiiro-yellow/20">
                  <div className="text-4xl font-bold text-kiiro-yellow mb-2">100%</div>
                  <div className="text-lg text-off-white/80 mb-2">Mobile-Friendly</div>
                  <div className="text-sm text-off-white/60">Optimized for financial decision-making on mobile devices</div>
                </div>

                <div className="text-center p-6 bg-gradient-to-br from-kiiro-yellow/10 to-kiiro-yellow/5 rounded-lg border border-kiiro-yellow/20">
                  <div className="text-4xl font-bold text-kiiro-yellow mb-2">95+</div>
                  <div className="text-lg text-off-white/80 mb-2">Performance Score</div>
                  <div className="text-sm text-off-white/60">Google PageSpeed Insights optimization</div>
                </div>

                <div className="text-center p-6 bg-gradient-to-br from-kiiro-yellow/10 to-kiiro-yellow/5 rounded-lg border border-kiiro-yellow/20">
                  <div className="text-4xl font-bold text-kiiro-yellow mb-2">98%</div>
                  <div className="text-lg text-off-white/80 mb-2">Accessibility Score</div>
                  <div className="text-sm text-off-white/60">WCAG 2.1 AA compliance for inclusive design</div>
                </div>

                <div className="text-center p-6 bg-gradient-to-br from-kiiro-yellow/10 to-kiiro-yellow/5 rounded-lg border border-kiiro-yellow/20">
                  <div className="text-4xl font-bold text-kiiro-yellow mb-2">&lt;2s</div>
                  <div className="text-lg text-off-white/80 mb-2">Loading Speed</div>
                  <div className="text-sm text-off-white/60">Fast performance on 4G/5G networks</div>
                </div>
              </div>

              <div className="mt-8 md:mt-12 p-6 bg-charcoal-gray/20 rounded-lg border border-white/10">
                <h3 className="text-xl font-bold text-off-white mb-4">Business Impact</h3>
                <div className="space-y-3 text-off-white/80">
                  <div className="flex items-start gap-3">
                    <TrendingUp className="w-5 h-5 text-kiiro-yellow mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-off-white">Enhanced Credibility:</strong> MDRT Galaxy Club membership and professional experience establish immediate trust with potential clients.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Calculator className="w-5 h-5 text-kiiro-yellow mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-off-white">Lead Generation:</strong> Interactive calculators serve as both educational tools and consultation booking mechanisms.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-kiiro-yellow mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-off-white">Family Connection:</strong> Content and design resonate with Indian family values and generational financial planning needs.
                    </div>
                  </div>
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

              {/* Sproutly */}
              <Link href="/case-studies/sproutly" className="group block">
                <div className="relative aspect-video rounded-lg overflow-hidden border border-white/10 mb-3 md:mb-4 transition-all duration-300 group-hover:border-kiiro-yellow/50">
                  <Image
                    src="/projects/sproutly.webp"
                    alt="Sproutly"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-base md:text-lg font-bold text-off-white group-hover:text-kiiro-yellow transition-colors">Sproutly</h3>
                <p className="text-xs md:text-sm text-off-white/60">Urban Gardening Education</p>
              </Link>

              {/* Care4Brain */}
              <Link href="/case-studies/care4brain" className="group block">
                <div className="relative aspect-video rounded-lg overflow-hidden border border-white/10 mb-3 md:mb-4 transition-all duration-300 group-hover:border-kiiro-yellow/50">
                  <Image
                    src="/projects/care4brain.webp"
                    alt="Care4Brain"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-base md:text-lg font-bold text-off-white group-hover:text-kiiro-yellow transition-colors">Care4Brain</h3>
                <p className="text-xs md:text-sm text-off-white/60">AI-Driven Learning Platform</p>
              </Link>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
