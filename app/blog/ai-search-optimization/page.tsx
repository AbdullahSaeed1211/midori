import { Metadata } from "next";
import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { ArticleJsonLd } from "@/components/seo/article-json-ld";

export const metadata: Metadata = {
  title: "AI Search Optimization: Preparing for SGE and AI Overviews | kiiro.cx",
  description: "Learn how to optimize your content for Google SGE, AI Overviews, and the future of AI-powered search. Discover strategies for structured data, answer optimization, and featured snippets evolution.",
  keywords: "AI search optimization, Google SGE, AI overviews, search generative experience, featured snippets, structured data, answer engine optimization",
  authors: [{ name: "kiiro.cx" }],
  alternates: {
    canonical: 'https://kiiro.cx/blog/ai-search-optimization'
  },
  openGraph: {
    images: ["https://kiiro.cx/og/blog/ai-search-optimization.png"],

    type: "article",
    title: "AI Search Optimization: Preparing for SGE and AI Overviews",
    description: "Learn how to optimize your content for Google SGE, AI Overviews, and the future of AI-powered search.",
    siteName: "kiiro.cx",
    url: "https://kiiro.cx/blog/ai-search-optimization",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Search Optimization: Preparing for SGE and AI Overviews | kiiro.cx",
    description: "Strategies for the AI-powered search landscape of 2025.",
  }
};

export default function AISearchOptimization() {
  return (
    <main className="flex min-h-screen flex-col bg-charcoal-black">
      <Header />
      <ArticleJsonLd
        title="AI Search Optimization: Preparing for SGE and AI Overviews | kiiro.cx"
        description="Learn how to optimize your content for Google SGE, AI Overviews, and the future of AI-powered search. Discover strategies for structured data, answer optimization, and featured snippets evolution."
        url="https://kiiro.cx/blog/ai-search-optimization"
        image="https://kiiro.cx/projects/kiiro.webp"
        datePublished="2025-08-05"
        dateModified="2025-08-05"
        keywords={[
          "AI search optimization",
          "Google SGE",
          "AI overviews",
          "search generative experience",
          "featured snippets",
          "structured data",
          "answer engine optimization",
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
                SEO
              </span>
              <div className="flex items-center gap-1 text-off-white/60 text-sm">
                <Calendar className="w-4 h-4" />
                August 5, 2025
              </div>
              <div className="flex items-center gap-1 text-off-white/60 text-sm">
                <Clock className="w-4 h-4" />
                13 min read
              </div>
            </div>

            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-off-white mb-8 leading-tight">
              AI Search Optimization: Preparing for SGE and AI Overviews
            </h1>

            <p className="text-lg md:text-xl text-off-white/80 leading-relaxed mb-10 max-w-3xl">
              The search landscape has fundamentally changed. Learn how to optimize your content for AI-powered search results and stay visible in the age of Google SGE and AI Overviews.
            </p>

            <div className="flex flex-wrap items-center gap-6 mb-12 p-6 bg-gradient-to-r from-kiiro-yellow/10 to-transparent rounded-2xl border border-kiiro-yellow/20">
              <div className="flex items-center gap-2 text-kiiro-yellow">
                <Clock className="w-5 h-5" />
                <span className="font-semibold">13 min read</span>
              </div>
              <div className="flex items-center gap-4 text-sm text-off-white/70">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  Google SGE
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  AI Overviews
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                  Structured Data
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
                  <a href="#google-sge" className="block text-off-white/70 hover:text-kiiro-yellow transition-colors text-sm ml-4">Understanding Google SGE and AI Overviews</a>
                  <a href="#featured-snippets" className="block text-off-white/70 hover:text-kiiro-yellow transition-colors text-sm ml-4">The Evolution of Featured Snippets</a>
                  <a href="#structured-data" className="block text-off-white/70 hover:text-kiiro-yellow transition-colors text-sm ml-4">Structured Data for AI Understanding</a>
                  <a href="#answer-optimization" className="block text-off-white/70 hover:text-kiiro-yellow transition-colors text-sm ml-4">Answer Optimization Strategies</a>
                  <a href="#preparing-content" className="block text-off-white/70 hover:text-kiiro-yellow transition-colors text-sm ml-4">Preparing Your Content for AI Search</a>
                </nav>
              </div>

              <h2 id="introduction" className="text-2xl md:text-3xl font-bold text-off-white mb-6 mt-12 first:mt-0">Introduction</h2>
              <p className="text-off-white/80 text-lg leading-relaxed mb-8">
                Google AI Overviews (formerly SGE) have transformed how users interact with search results. Instead of clicking through to websites, users increasingly get their answers directly from AI-generated summaries. This shift requires a fundamental rethink of SEO strategy. In this guide, we explore how to maintain visibility and traffic in the AI search era.
              </p>

              <h2 id="google-sge" className="text-2xl md:text-3xl font-bold text-off-white mb-6 mt-12">Understanding Google SGE and AI Overviews</h2>
              <p className="text-off-white/80 text-lg leading-relaxed mb-8">
                AI Overviews appear at the top of search results, synthesizing information from multiple sources into comprehensive answers. Understanding how they work is essential for optimization.
              </p>

              <div className="mb-10 p-6 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-2xl border border-blue-500/20">
                <h3 className="text-xl font-bold text-blue-400 mb-4 flex items-center gap-2">
                  <span className="text-2xl">🤖</span>
                  How AI Overviews Work
                </h3>
                <p className="text-off-white/80 mb-6">
                  Google AI Overviews use generative AI to:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Analyze and synthesize information from multiple authoritative sources</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Generate comprehensive answers to complex, multi-faceted queries</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Include citations linking to source websites</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Provide follow-up questions for deeper exploration</span>
                  </li>
                </ul>
              </div>

              <div className="mb-10 p-6 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl border border-purple-500/20">
                <h3 className="text-xl font-bold text-purple-400 mb-4 flex items-center gap-2">
                  <span className="text-2xl">📊</span>
                  Impact on Click-Through Rates
                </h3>
                <p className="text-off-white/80 mb-6">
                  Studies in 2025 show significant changes in user behavior:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-off-white">Informational queries:</strong>
                      <span className="text-off-white/70 ml-1">CTR dropped 15-30% for sites not cited in AI Overviews</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-off-white">Commercial queries:</strong>
                      <span className="text-off-white/70 ml-1">Less impact; users still research before purchasing</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-off-white">Cited sources:</strong>
                      <span className="text-off-white/70 ml-1">Often see increased traffic from AI Overview citations</span>
                    </div>
                  </li>
                </ul>
              </div>

              <h2 id="featured-snippets" className="text-2xl md:text-3xl font-bold text-off-white mb-6 mt-12">The Evolution of Featured Snippets</h2>
              <p className="text-off-white/80 text-lg leading-relaxed mb-8">
                Featured snippets have evolved from simple text boxes to sophisticated AI-generated responses. Understanding this evolution helps you adapt your content strategy.
              </p>

              <div className="mb-10 p-6 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-2xl border border-green-500/20">
                <h3 className="text-xl font-bold text-green-400 mb-4 flex items-center gap-2">
                  <span className="text-2xl">📈</span>
                  Featured Snippets vs AI Overviews
                </h3>
                <p className="text-off-white/80 mb-6">
                  Key differences between traditional featured snippets and AI Overviews:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-white/5 rounded-lg">
                    <strong className="text-off-white block mb-2">Featured Snippets</strong>
                    <span className="text-off-white/70 text-sm">Direct excerpt from one source, answers simple questions, single source cited</span>
                  </div>
                  <div className="p-4 bg-white/5 rounded-lg">
                    <strong className="text-off-white block mb-2">AI Overviews</strong>
                    <span className="text-off-white/70 text-sm">Synthesized from multiple sources, handles complex queries, multiple citations</span>
                  </div>
                </div>
              </div>

              <div className="mb-10 p-6 bg-gradient-to-r from-orange-500/10 to-yellow-500/10 rounded-2xl border border-orange-500/20">
                <h3 className="text-xl font-bold text-orange-400 mb-4 flex items-center gap-2">
                  <span className="text-2xl">🎯</span>
                  Types of AI-Generated Results
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-off-white">AI Overviews:</strong>
                      <span className="text-off-white/70 ml-1">Comprehensive answers to complex queries</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-off-white">AI-Powered Knowledge Panels:</strong>
                      <span className="text-off-white/70 ml-1">Dynamic entity information generated by AI</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-off-white">AI Shopping Results:</strong>
                      <span className="text-off-white/70 ml-1">Product recommendations with AI-generated summaries</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-off-white">AI Local Results:</strong>
                      <span className="text-off-white/70 ml-1">Business recommendations with synthesized reviews</span>
                    </div>
                  </li>
                </ul>
              </div>

              <h2 id="structured-data" className="text-2xl md:text-3xl font-bold text-off-white mb-6 mt-12">Structured Data for AI Understanding</h2>
              <p className="text-off-white/80 text-lg leading-relaxed mb-8">
                Structured data has become even more critical for AI search. It helps AI systems understand your content context and relationships.
              </p>

              <div className="mb-10 p-6 bg-gradient-to-r from-cyan-500/10 to-teal-500/10 rounded-2xl border border-cyan-500/20">
                <h3 className="text-xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
                  <span className="text-2xl">📝</span>
                  Essential Schema Types for AI Search
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-off-white">Article/NewsArticle:</strong>
                      <span className="text-off-white/70 ml-1">Helps AI understand content type, authorship, and dates</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-off-white">FAQPage:</strong>
                      <span className="text-off-white/70 ml-1">Structures Q&A content for AI to extract answers</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-off-white">HowTo:</strong>
                      <span className="text-off-white/70 ml-1">Structures step-by-step instructions for AI synthesis</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-off-white">Product:</strong>
                      <span className="text-off-white/70 ml-1">Enables AI shopping features and comparisons</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-off-white">Organization/Person:</strong>
                      <span className="text-off-white/70 ml-1">Establishes E-E-A-T signals for AI evaluation</span>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="mb-10 p-6 bg-gradient-to-r from-pink-500/10 to-rose-500/10 rounded-2xl border border-pink-500/20">
                <h3 className="text-xl font-bold text-pink-400 mb-4 flex items-center gap-2">
                  <span className="text-2xl">⚡</span>
                  Speakable Schema
                </h3>
                <p className="text-off-white/80">
                  Speakable schema identifies sections of content that are particularly suited for audio playback using text-to-speech (TTS). This helps AI assistants identify the best content to speak back to users in voice search scenarios.
                </p>
              </div>

              <h2 id="answer-optimization" className="text-2xl md:text-3xl font-bold text-off-white mb-6 mt-12">Answer Optimization Strategies</h2>
              <p className="text-off-white/80 text-lg leading-relaxed mb-8">
                Optimizing for AI search means creating content that AI can easily understand, synthesize, and cite as an authoritative source.
              </p>

              <div className="mb-10 p-6 bg-gradient-to-r from-violet-500/10 to-purple-500/10 rounded-2xl border border-violet-500/20">
                <h3 className="text-xl font-bold text-violet-400 mb-4 flex items-center gap-2">
                  <span className="text-2xl">✍️</span>
                  Content Strategies for AI Citations
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-violet-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-off-white">Lead with clear definitions:</strong>
                      <span className="text-off-white/70 ml-1">AI looks for definitive statements at the beginning of content</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-violet-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-off-white">Use structured formats:</strong>
                      <span className="text-off-white/70 ml-1">Lists, tables, and step-by-step instructions are easier for AI to parse</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-violet-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-off-white">Provide comprehensive coverage:</strong>
                      <span className="text-off-white/70 ml-1">Cover all aspects of a topic to become a primary source</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-violet-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-off-white">Include original data and research:</strong>
                      <span className="text-off-white/70 ml-1">AI tends to cite sources with unique, citable information</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-violet-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-off-white">Answer related questions:</strong>
                      <span className="text-off-white/70 ml-1">AI Overviews often address multiple angles; cover them all</span>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="mb-10 p-6 bg-gradient-to-r from-indigo-500/10 to-blue-500/10 rounded-2xl border border-indigo-500/20">
                <h3 className="text-xl font-bold text-indigo-400 mb-4 flex items-center gap-2">
                  <span className="text-2xl">🔍</span>
                  E-E-A-T for AI Search
                </h3>
                <p className="text-off-white/80 mb-6">
                  E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) remains crucial for AI citation selection:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Author bios with credentials and real-world experience</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Citations and links to authoritative sources</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Regular content updates showing ongoing expertise</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Transparent about sources and methodology</span>
                  </li>
                </ul>
              </div>

              <h2 id="preparing-content" className="text-2xl md:text-3xl font-bold text-off-white mb-6 mt-12">Preparing Your Content for AI Search</h2>
              <p className="text-off-white/80 text-lg leading-relaxed mb-8">
                Here is a practical framework for adapting your content strategy for the AI search era.
              </p>

              <div className="mb-10 p-6 bg-gradient-to-r from-emerald-500/10 to-green-500/10 rounded-2xl border border-emerald-500/20">
                <h3 className="text-xl font-bold text-emerald-400 mb-4 flex items-center gap-2">
                  <span className="text-2xl">✅</span>
                  AI Search Optimization Checklist
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Audit existing content for AI Overview opportunities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Implement comprehensive structured data markup</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Create definitive guides that cover topics exhaustively</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Develop original research and data that others cite</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Strengthen E-E-A-T signals across your site</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Monitor AI Overviews in your niche for citation patterns</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Diversify traffic sources beyond organic search</span>
                  </li>
                </ul>
              </div>

              <div className="mb-12 p-8 bg-gradient-to-r from-kiiro-yellow/10 to-yellow-500/10 rounded-2xl border border-kiiro-yellow/20">
                <h2 className="text-2xl md:text-3xl font-bold text-off-white mb-6">Conclusion</h2>
                <p className="text-off-white/80 text-lg leading-relaxed mb-6">
                  AI search is not the end of SEO; it is an evolution. By creating authoritative, well-structured content that AI systems can easily understand and cite, you can maintain visibility in the new search landscape. Focus on being the best source for your topic, and AI will reward you with citations.
                </p>
                <div className="flex items-center gap-2 text-kiiro-yellow">
                  <span className="text-2xl">🔮</span>
                  <p className="font-semibold">
                    The future of search is AI-powered, but human expertise remains the foundation. Create content worth citing, and AI will find you.
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
                    Ready to Optimize for AI Search?
                  </h3>

                  <p className="text-off-white/70 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                    Get a comprehensive AI search optimization audit and strategy to ensure your content ranks in the age of AI Overviews.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                    <Button
                      asChild
                      size="lg"
                      className="bg-kiiro-yellow text-charcoal-black hover:bg-kiiro-yellow/90 hover:shadow-lg hover:shadow-kiiro-yellow/25 transition-all duration-300"
                    >
                      <Link href="/contact">
                        <span className="font-semibold">Get AI SEO Consultation</span>
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
                    ✅ No obligation • ✅ AI-ready strategy • ✅ Future-proof your SEO
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
