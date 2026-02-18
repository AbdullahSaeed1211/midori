import { Metadata } from "next";
import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { ArticleJsonLd } from "@/components/seo/article-json-ld";

export const metadata: Metadata = {
  title: "Accessible Web Design: WCAG 2.2 Compliance Guide | kiiro.cx",
  description: "Complete guide to WCAG 2.2 compliance for web designers and developers. Learn accessibility requirements, testing tools, and legal considerations for building inclusive websites.",
  keywords: "WCAG 2.2, web accessibility, ADA compliance, accessible design, screen readers, inclusive design",
  authors: [{ name: "kiiro.cx" }],
  alternates: {
    canonical: 'https://kiiro.cx/blog/wcag-accessibility-guide'
  },
  openGraph: {
    images: ["https://kiiro.cx/og/blog/wcag-accessibility-guide.png"],

    type: "article",
    title: "Accessible Web Design: WCAG 2.2 Compliance Guide",
    description: "Complete guide to WCAG 2.2 compliance for web designers and developers. Learn accessibility requirements, testing tools, and legal considerations.",
    siteName: "kiiro.cx",
    url: "https://kiiro.cx/blog/wcag-accessibility-guide",
  },
  twitter: {
    card: "summary_large_image",
    title: "Accessible Web Design: WCAG 2.2 Compliance Guide | kiiro.cx",
    description: "Complete guide to WCAG 2.2 compliance for building inclusive websites.",
  }
};

export default function WCAGAccessibilityGuide() {
  return (
    <main className="flex min-h-screen flex-col bg-charcoal-black">
      <Header />
      <ArticleJsonLd
        title="Accessible Web Design: WCAG 2.2 Compliance Guide | kiiro.cx"
        description="Complete guide to WCAG 2.2 compliance for web designers and developers. Learn accessibility requirements, testing tools, and legal considerations for building inclusive websites."
        url="https://kiiro.cx/blog/wcag-accessibility-guide"
        image="https://kiiro.cx/projects/kiiro.webp"
        datePublished="2025-07-22"
        dateModified="2025-07-22"
        keywords={[
          "WCAG 2.2",
          "web accessibility",
          "ADA compliance",
          "accessible design",
          "screen readers",
          "inclusive design",
        ]}
      />

      <article className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-kiiro-yellow hover:text-kiiro-yellow/80 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 bg-kiiro-yellow/20 text-kiiro-yellow text-sm font-medium rounded-full">
                Design
              </span>
              <div className="flex items-center gap-1 text-off-white/60 text-sm">
                <Calendar className="w-4 h-4" />
                July 22, 2025
              </div>
              <div className="flex items-center gap-1 text-off-white/60 text-sm">
                <Clock className="w-4 h-4" />
                15 min read
              </div>
            </div>

            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-off-white mb-8 leading-tight">
              Accessible Web Design: WCAG 2.2 Compliance Guide
            </h1>

            <p className="text-lg md:text-xl text-off-white/80 leading-relaxed mb-10 max-w-3xl">
              A comprehensive guide to building websites that work for everyone. Learn WCAG 2.2 requirements, common accessibility issues, and practical implementation techniques.
            </p>

            <div className="flex flex-wrap items-center gap-6 mb-12 p-6 bg-gradient-to-r from-kiiro-yellow/10 to-transparent rounded-2xl border border-kiiro-yellow/20">
              <div className="flex items-center gap-2 text-kiiro-yellow">
                <Clock className="w-5 h-5" />
                <span className="font-semibold">15 min read</span>
              </div>
              <div className="flex items-center gap-4 text-sm text-off-white/70">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  WCAG 2.2 Standards
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  Testing Tools
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                  Legal Compliance
                </span>
              </div>
            </div>

            <div className="prose prose-lg prose-invert max-w-none">
              <div className="mb-12 p-6 bg-charcoal-gray/50 rounded-2xl border border-white/10">
                <h3 className="text-lg font-bold text-off-white mb-4 flex items-center gap-2">
                  <span className="text-kiiro-yellow">📋</span>
                  Table of Contents
                </h3>
                <nav className="space-y-2">
                  <a href="#introduction" className="block text-off-white/70 hover:text-kiiro-yellow transition-colors text-sm">Introduction</a>
                  <a href="#wcag-principles" className="block text-off-white/70 hover:text-kiiro-yellow transition-colors text-sm ml-4">WCAG 2.2 Core Principles</a>
                  <a href="#common-issues" className="block text-off-white/70 hover:text-kiiro-yellow transition-colors text-sm ml-4">Common Accessibility Issues</a>
                  <a href="#testing-tools" className="block text-off-white/70 hover:text-kiiro-yellow transition-colors text-sm ml-4">Testing Tools and Methods</a>
                  <a href="#legal-considerations" className="block text-off-white/70 hover:text-kiiro-yellow transition-colors text-sm ml-4">Legal Considerations</a>
                  <a href="#implementation" className="block text-off-white/70 hover:text-kiiro-yellow transition-colors text-sm ml-4">Practical Implementation</a>
                </nav>
              </div>

              <h2 id="introduction" className="text-2xl md:text-3xl font-bold text-off-white mb-6 mt-12 first:mt-0">Introduction</h2>
              <p className="text-off-white/80 text-lg leading-relaxed mb-8">
                Web accessibility is not just about compliance. It is about creating digital experiences that work for the 1.3 billion people worldwide who live with disabilities. With WCAG 2.2 now the current standard and legal requirements tightening globally, accessibility must be a core consideration in every web project.
              </p>

              <h2 id="wcag-principles" className="text-2xl md:text-3xl font-bold text-off-white mb-6 mt-12">WCAG 2.2 Core Principles</h2>
              <p className="text-off-white/80 text-lg leading-relaxed mb-8">
                WCAG 2.2 is built on four principles, known as POUR. Every guideline falls under one of these categories.
              </p>

              <div className="mb-10 p-6 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-2xl border border-blue-500/20">
                <h3 className="text-xl font-bold text-blue-400 mb-4 flex items-center gap-2">
                  <span className="text-2xl">👁️</span>
                  Perceivable
                </h3>
                <p className="text-off-white/80 mb-6">
                  Information and UI components must be presentable in ways users can perceive.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Provide text alternatives for non-text content</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Provide captions and alternatives for multimedia</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Create content that can be presented in different ways</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Make it easier for users to see and hear content</span>
                  </li>
                </ul>
              </div>

              <div className="mb-10 p-6 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-2xl border border-green-500/20">
                <h3 className="text-xl font-bold text-green-400 mb-4 flex items-center gap-2">
                  <span className="text-2xl">🖱️</span>
                  Operable
                </h3>
                <p className="text-off-white/80 mb-6">
                  UI components and navigation must be operable by all users.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Make all functionality available from a keyboard</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Give users enough time to read and use content</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Do not use content that causes seizures</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Help users navigate and find content</span>
                  </li>
                </ul>
              </div>

              <div className="mb-10 p-6 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl border border-purple-500/20">
                <h3 className="text-xl font-bold text-purple-400 mb-4 flex items-center gap-2">
                  <span className="text-2xl">🧠</span>
                  Understandable
                </h3>
                <p className="text-off-white/80 mb-6">
                  Information and UI operation must be understandable.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Make text readable and understandable</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Make pages appear and operate in predictable ways</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Help users avoid and correct mistakes</span>
                  </li>
                </ul>
              </div>

              <div className="mb-10 p-6 bg-gradient-to-r from-orange-500/10 to-yellow-500/10 rounded-2xl border border-orange-500/20">
                <h3 className="text-xl font-bold text-orange-400 mb-4 flex items-center gap-2">
                  <span className="text-2xl">🔧</span>
                  Robust
                </h3>
                <p className="text-off-white/80 mb-6">
                  Content must be robust enough for diverse user agents.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Maximize compatibility with current and future tools</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Use valid, semantic HTML</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Ensure proper ARIA implementation when needed</span>
                  </li>
                </ul>
              </div>

              <div className="mb-10 p-6 bg-gradient-to-r from-cyan-500/10 to-teal-500/10 rounded-2xl border border-cyan-500/20">
                <h3 className="text-xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
                  <span className="text-2xl">🆕</span>
                  New in WCAG 2.2
                </h3>
                <p className="text-off-white/80 mb-6">
                  WCAG 2.2 introduced several new success criteria. Key additions include:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-off-white">Focus Not Obscured:</strong>
                      <span className="text-off-white/70 ml-1">Focused elements must be at least partially visible</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-off-white">Focus Appearance:</strong>
                      <span className="text-off-white/70 ml-1">Focus indicators must be clearly visible</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-off-white">Dragging:</strong>
                      <span className="text-off-white/70 ml-1">Drag operations must have single-pointer alternatives</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-off-white">Target Size:</strong>
                      <span className="text-off-white/70 ml-1">Interactive targets must be at least 24x24 pixels</span>
                    </div>
                  </li>
                </ul>
              </div>

              <h2 id="common-issues" className="text-2xl md:text-3xl font-bold text-off-white mb-6 mt-12">Common Accessibility Issues</h2>
              <p className="text-off-white/80 text-lg leading-relaxed mb-8">
                These issues appear on millions of websites. Address them to significantly improve your accessibility score.
              </p>

              <div className="mb-10 p-6 bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-2xl border border-red-500/20">
                <h3 className="text-xl font-bold text-red-400 mb-4 flex items-center gap-2">
                  <span className="text-2xl">⚠️</span>
                  Top 10 Accessibility Failures
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Missing or poor alt text on images</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Insufficient color contrast (text/background)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Missing form labels and error messages</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Keyboard traps and focus issues</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Non-descriptive link text like Click here</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Missing skip navigation links</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Auto-playing media without controls</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Poor heading structure (skipping levels)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Inaccessible PDFs and documents</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">CAPTCHAs without alternative verification</span>
                  </li>
                </ul>
              </div>

              <h2 id="testing-tools" className="text-2xl md:text-3xl font-bold text-off-white mb-6 mt-12">Testing Tools and Methods</h2>
              <p className="text-off-white/80 text-lg leading-relaxed mb-8">
                Use a combination of automated and manual testing to ensure comprehensive accessibility coverage.
              </p>

              <div className="mb-10 p-8 bg-gradient-to-r from-violet-500/10 to-purple-500/10 rounded-2xl border border-violet-500/20">
                <h3 className="text-xl font-bold text-violet-400 mb-6 flex items-center gap-2">
                  <span className="text-2xl">🛠️</span>
                  Recommended Testing Tools
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-3 h-3 bg-violet-400 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <strong className="text-off-white block">axe DevTools</strong>
                        <span className="text-off-white/70 text-sm">Browser extension for automated testing</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-3 h-3 bg-violet-400 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <strong className="text-off-white block">WAVE</strong>
                        <span className="text-off-white/70 text-sm">Visual accessibility evaluation tool</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-3 h-3 bg-violet-400 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <strong className="text-off-white block">Lighthouse</strong>
                        <span className="text-off-white/70 text-sm">Built into Chrome DevTools</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-3 h-3 bg-violet-400 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <strong className="text-off-white block">NVDA / VoiceOver</strong>
                        <span className="text-off-white/70 text-sm">Screen reader testing (free)</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-3 h-3 bg-violet-400 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <strong className="text-off-white block">Keyboard Navigation</strong>
                        <span className="text-off-white/70 text-sm">Manual Tab/Enter/Esc testing</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-3 h-3 bg-violet-400 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <strong className="text-off-white block">Colour Contrast Analyser</strong>
                        <span className="text-off-white/70 text-sm">TPGI color contrast checker</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-10 p-6 bg-gradient-to-r from-pink-500/10 to-rose-500/10 rounded-2xl border border-pink-500/20">
                <h3 className="text-xl font-bold text-pink-400 mb-4 flex items-center gap-2">
                  <span className="text-2xl">⚡</span>
                  Quick Manual Tests
                </h3>
                <p className="text-off-white/80 mb-6">
                  Run these tests on every page before launch:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Navigate using only Tab, Enter, and Escape keys</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Zoom to 200% and check layout breaks</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Disable CSS and verify content order makes sense</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Test with a screen reader for at least 5 minutes</span>
                  </li>
                </ul>
              </div>

              <h2 id="legal-considerations" className="text-2xl md:text-3xl font-bold text-off-white mb-6 mt-12">Legal Considerations</h2>
              <p className="text-off-white/80 text-lg leading-relaxed mb-8">
                Accessibility is increasingly becoming a legal requirement. Understanding the legal landscape helps protect your business.
              </p>

              <div className="mb-10 p-6 bg-gradient-to-r from-indigo-500/10 to-blue-500/10 rounded-2xl border border-indigo-500/20">
                <h3 className="text-xl font-bold text-indigo-400 mb-4 flex items-center gap-2">
                  <span className="text-2xl">⚖️</span>
                  Key Legal Frameworks
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-off-white">ADA (Americans with Disabilities Act):</strong>
                      <span className="text-off-white/70 ml-1">US federal law requiring accessible digital experiences</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-off-white">EAA (European Accessibility Act):</strong>
                      <span className="text-off-white/70 ml-1">EU directive effective June 2025 for products and services</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-off-white">Section 508:</strong>
                      <span className="text-off-white/70 ml-1">US federal agencies and contractors must meet WCAG 2.0 AA</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-off-white">AODA:</strong>
                      <span className="text-off-white/70 ml-1">Ontario accessibility legislation requiring WCAG 2.0 AA</span>
                    </div>
                  </li>
                </ul>
              </div>

              <h2 id="implementation" className="text-2xl md:text-3xl font-bold text-off-white mb-6 mt-12">Practical Implementation</h2>
              <p className="text-off-white/80 text-lg leading-relaxed mb-8">
                Implementing accessibility does not have to be overwhelming. Start with these high-impact changes.
              </p>

              <div className="mb-10 p-6 bg-gradient-to-r from-emerald-500/10 to-green-500/10 rounded-2xl border border-emerald-500/20">
                <h3 className="text-xl font-bold text-emerald-400 mb-4 flex items-center gap-2">
                  <span className="text-2xl">✅</span>
                  Implementation Checklist
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Add meaningful alt text to all images</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Ensure color contrast meets 4.5:1 ratio</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Label all form inputs properly</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Add skip links for keyboard navigation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Use proper heading hierarchy (h1 through h6)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Make all interactive elements focusable</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Provide clear error messages and recovery paths</span>
                  </li>
                </ul>
              </div>

              <div className="mb-12 p-8 bg-gradient-to-r from-kiiro-yellow/10 to-yellow-500/10 rounded-2xl border border-kiiro-yellow/20">
                <h2 className="text-2xl md:text-3xl font-bold text-off-white mb-6">Conclusion</h2>
                <p className="text-off-white/80 text-lg leading-relaxed mb-6">
                  Accessibility is both a moral imperative and a business opportunity. By following WCAG 2.2 guidelines, you create better experiences for everyone while reducing legal risk. Start with automated testing, add manual verification, and build accessibility into your development workflow.
                </p>
                <div className="flex items-center gap-2 text-kiiro-yellow">
                  <span className="text-2xl">♿</span>
                  <p className="font-semibold">
                    Remember: Accessibility is not a feature to add later. It is a fundamental requirement that should be considered from the start of every project.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-16 pt-12 border-t border-white/10">
              <div className="bg-gradient-to-br from-charcoal-gray/95 to-charcoal-gray/90 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-kiiro-yellow/5 via-transparent to-green-500/5 opacity-50" />
                <div className="absolute top-0 right-0 w-32 h-32 bg-kiiro-yellow/10 rounded-full -translate-y-16 translate-x-16" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-green-500/10 rounded-full translate-y-12 -translate-x-12" />

                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-kiiro-yellow/10 text-kiiro-yellow text-sm font-medium rounded-full border border-kiiro-yellow/20 mb-6">
                    🚀 Ready to Take Action?
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-off-white mb-4">
                    Need Help With Accessibility?
                  </h3>

                  <p className="text-off-white/70 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                    Get a professional accessibility audit and remediation plan that ensures your website meets WCAG 2.2 standards.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                    <Button
                      asChild
                      size="lg"
                      className="bg-kiiro-yellow text-charcoal-black hover:bg-kiiro-yellow/90 hover:shadow-lg hover:shadow-kiiro-yellow/25 transition-all duration-300"
                    >
                      <Link href="/contact">
                        <span className="font-semibold">Get Accessibility Audit</span>
                        <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
                      </Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      size="lg"
                      className="border-kiiro-yellow/50 text-kiiro-yellow hover:bg-kiiro-yellow/10 hover:border-kiiro-yellow/70 transition-all duration-300"
                    >
                      <Link href="/audit">
                        Free Website Audit
                      </Link>
                    </Button>
                  </div>

                  <p className="text-off-white/50 text-sm">
                    ✅ No obligation • ✅ WCAG compliant • ✅ Inclusive design
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
