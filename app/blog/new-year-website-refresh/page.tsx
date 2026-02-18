import { Metadata } from "next";
import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { ArticleJsonLd } from "@/components/seo/article-json-ld";

export const metadata: Metadata = {
  title: "New Year Website Refresh: Strategy and Execution | kiiro.cx",
  description: "Start the new year with a fresh website. Learn strategies for redesign, content updates, and technical improvements to boost performance and conversions.",
  keywords: "new year website refresh, website redesign strategy, website update, new year website goals, site refresh planning",
  authors: [{ name: "kiiro.cx" }],
  alternates: {
    canonical: 'https://kiiro.cx/blog/new-year-website-refresh'
  },
  openGraph: {
    images: ["https://kiiro.cx/og/blog/new-year-website-refresh.png"],

    type: "article",
    title: "New Year Website Refresh: Strategy and Execution",
    description: "Learn strategies for redesign, content updates, and technical improvements for your website.",
    siteName: "kiiro.cx",
    url: "https://kiiro.cx/blog/new-year-website-refresh",
  },
  twitter: {
    card: "summary_large_image",
    title: "New Year Website Refresh: Strategy and Execution | kiiro.cx",
    description: "Learn strategies for a successful new year website refresh.",
  }
};

export default function NewYearWebsiteRefresh() {
  return (
    <main className="flex min-h-screen flex-col bg-charcoal-black">
      <Header />
      <ArticleJsonLd
        title="New Year Website Refresh: Strategy and Execution | kiiro.cx"
        description="Start the new year with a fresh website. Learn strategies for redesign, content updates, and technical improvements to boost performance and conversions."
        url="https://kiiro.cx/blog/new-year-website-refresh"
        image="https://kiiro.cx/projects/kiiro.webp"
        datePublished="2026-01-10"
        dateModified="2026-01-10"
        keywords={[
          "new year website refresh",
          "website redesign strategy",
          "website update",
          "new year website goals",
          "site refresh planning",
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
              <span className="px-3 py-1 bg-pink-500/20 text-pink-400 text-sm font-medium rounded-full">
                Design
              </span>
              <div className="flex items-center gap-1 text-off-white/60 text-sm">
                <Calendar className="w-4 h-4" />
                January 10, 2026
              </div>
              <div className="flex items-center gap-1 text-off-white/60 text-sm">
                <Clock className="w-4 h-4" />
                13 min read
              </div>
            </div>

            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-off-white mb-8 leading-tight">
              New Year Website Refresh: Strategy and Execution
            </h1>

            <p className="text-lg md:text-xl text-off-white/80 leading-relaxed mb-10 max-w-3xl">
              The new year is the perfect time to refresh your website. Whether you need a complete redesign or strategic updates, this guide covers how to plan and execute a successful website refresh.
            </p>

            <div className="flex flex-wrap items-center gap-6 mb-12 p-6 bg-gradient-to-r from-pink-500/10 to-transparent rounded-2xl border border-pink-500/20">
              <div className="flex items-center gap-2 text-pink-400">
                <Clock className="w-5 h-5" />
                <span className="font-semibold">13 min read</span>
              </div>
              <div className="flex items-center gap-4 text-sm text-off-white/70">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-pink-400 rounded-full"></span>
                  Strategy
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  Execution
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  Optimization
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
                  <a href="#assessment" className="block text-off-white/70 hover:text-kiiro-yellow transition-colors text-sm ml-4">Current State Assessment</a>
                  <a href="#goals" className="block text-off-white/70 hover:text-kiiro-yellow transition-colors text-sm ml-4">Goal Setting</a>
                  <a href="#refresh-types" className="block text-off-white/70 hover:text-kiiro-yellow transition-colors text-sm ml-4">Types of Refresh</a>
                  <a href="#execution" className="block text-off-white/70 hover:text-kiiro-yellow transition-colors text-sm ml-4">Execution Roadmap</a>
                  <a href="#measurement" className="block text-off-white/70 hover:text-kiiro-yellow transition-colors text-sm ml-4">Measuring Success</a>
                </nav>
              </div>

              <h2 id="introduction" className="text-2xl md:text-3xl font-bold text-off-white mb-6 mt-12 first:mt-0">Introduction</h2>
              <p className="text-off-white/80 text-lg leading-relaxed mb-8">
                A new year website refresh can breathe new life into your online presence, improve user experience, and support your business goals. Whether you're making incremental updates or planning a major redesign, strategic planning ensures you get maximum impact.
              </p>

              <h2 id="assessment" className="text-2xl md:text-3xl font-bold text-off-white mb-6 mt-12">Current State Assessment</h2>
              <p className="text-off-white/80 text-lg leading-relaxed mb-8">
                Before planning improvements, understand where your site stands today.
              </p>

              <div className="mb-10 p-6 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-2xl border border-blue-500/20">
                <h3 className="text-xl font-bold text-blue-400 mb-4 flex items-center gap-2">
                  <span className="text-2xl">🔍</span>
                  Assessment Areas
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Analytics review - traffic, conversions, user behavior</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Performance metrics - page speed, Core Web Vitals</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">SEO standing - rankings, visibility, technical issues</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">User feedback - surveys, support tickets, reviews</span>
                  </li>
                </ul>
              </div>

              <h2 id="goals" className="text-2xl md:text-3xl font-bold text-off-white mb-6 mt-12">Goal Setting</h2>
              <p className="text-off-white/80 text-lg leading-relaxed mb-8">
                Define clear goals for your website refresh that align with business objectives.
              </p>

              <div className="mb-10 p-6 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl border border-purple-500/20">
                <h3 className="text-xl font-bold text-purple-400 mb-4 flex items-center gap-2">
                  <span className="text-2xl">🎯</span>
                  Common Refresh Goals
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Increase conversion rates</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Improve mobile experience</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Modernize visual design</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Update content and messaging</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Boost search visibility</span>
                  </li>
                </ul>
              </div>

              <h2 id="refresh-types" className="text-2xl md:text-3xl font-bold text-off-white mb-6 mt-12">Types of Refresh</h2>
              <p className="text-off-white/80 text-lg leading-relaxed mb-8">
                Choose the right level of refresh based on your goals and resources.
              </p>

              <div className="mb-10 p-6 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-2xl border border-green-500/20">
                <h3 className="text-xl font-bold text-green-400 mb-4 flex items-center gap-2">
                  <span className="text-2xl">📊</span>
                  Refresh Options
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-off-white">Content Update:</strong>
                      <span className="text-off-white/70 ml-1">Text, images, messaging updates</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-off-white">Visual Refresh:</strong>
                      <span className="text-off-white/70 ml-1">New colors, typography, imagery</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-off-white">UX Improvement:</strong>
                      <span className="text-off-white/70 ml-1">Navigation, layout, conversion flow</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-off-white">Full Redesign:</strong>
                      <span className="text-off-white/70 ml-1">Complete rebuild with new platform</span>
                    </div>
                  </li>
                </ul>
              </div>

              <h2 id="execution" className="text-2xl md:text-3xl font-bold text-off-white mb-6 mt-12">Execution Roadmap</h2>
              <p className="text-off-white/80 text-lg leading-relaxed mb-8">
                Follow a structured approach to execute your refresh successfully.
              </p>

              <div className="mb-10 p-6 bg-gradient-to-r from-orange-500/10 to-yellow-500/10 rounded-2xl border border-orange-500/20">
                <h3 className="text-xl font-bold text-orange-400 mb-4 flex items-center gap-2">
                  <span className="text-2xl">🗓️</span>
                  Implementation Steps
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Week 1-2: Planning and wireframing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Week 3-4: Design and development</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Week 5: Testing and QA</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Week 6: Launch and monitoring</span>
                  </li>
                </ul>
              </div>

              <h2 id="measurement" className="text-2xl md:text-3xl font-bold text-off-white mb-6 mt-12">Measuring Success</h2>
              <p className="text-off-white/80 text-lg leading-relaxed mb-8">
                Track metrics to ensure your refresh delivers the expected results.
              </p>

              <div className="mb-10 p-6 bg-gradient-to-r from-cyan-500/10 to-teal-500/10 rounded-2xl border border-cyan-500/20">
                <h3 className="text-xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
                  <span className="text-2xl">📈</span>
                  Key Metrics to Track
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Conversion rate changes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Bounce rate and time on site</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Page speed improvements</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">SEO performance</span>
                  </li>
                </ul>
              </div>

              <div className="mb-12 p-8 bg-gradient-to-r from-kiiro-yellow/10 to-yellow-500/10 rounded-2xl border border-kiiro-yellow/20">
                <h2 className="text-2xl md:text-3xl font-bold text-off-white mb-6">Conclusion</h2>
                <p className="text-off-white/80 text-lg leading-relaxed mb-6">
                  A well-planned website refresh can significantly impact your business results. Take time to assess, plan, and execute systematically for the best outcomes.
                </p>
                <div className="flex items-center gap-2 text-kiiro-yellow">
                  <span className="text-2xl">🎯</span>
                  <p className="font-semibold">
                    Ready to refresh your website? Let us help you plan and execute a successful refresh.
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
                    Need Help with Your Website Refresh?
                  </h3>

                  <p className="text-off-white/70 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                    Get expert planning and execution for your new year website refresh.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                    <Button
                      asChild
                      size="lg"
                      className="bg-kiiro-yellow text-charcoal-black hover:bg-kiiro-yellow/90 hover:shadow-lg hover:shadow-kiiro-yellow/25 transition-all duration-300"
                    >
                      <Link href="/contact">
                        <span className="font-semibold">Get Refresh Consultation</span>
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
                    ✅ Strategy • ✅ Design • ✅ Development • ✅ Optimization
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
