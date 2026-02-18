import { Metadata } from "next";
import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { ArticleJsonLd } from "@/components/seo/article-json-ld";

export const metadata: Metadata = {
  title: "Core Web Vitals: INP Metric Replacement Guide | kiiro.cx",
  description: "Complete guide to Google's INP (Interaction to Next Paint) metric. Learn how INP replaced FID, what it measures, and how to optimize for better Core Web Vitals scores.",
  keywords: "INP metric, Interaction to Next Paint, Core Web Vitals, FID replacement, page interactivity, web performance optimization",
  authors: [{ name: "kiiro.cx" }],
  alternates: {
    canonical: 'https://kiiro.cx/blog/inp-metric-replacement'
  },
  openGraph: {
    images: ["https://kiiro.cx/og/blog/inp-metric-replacement.png"],

    type: "article",
    title: "Core Web Vitals: INP Metric Replacement Guide",
    description: "Complete guide to Google's INP metric and how to optimize for better Core Web Vitals scores.",
    siteName: "kiiro.cx",
    url: "https://kiiro.cx/blog/inp-metric-replacement",
  },
  twitter: {
    card: "summary_large_image",
    title: "Core Web Vitals: INP Metric Replacement Guide | kiiro.cx",
    description: "Complete guide to Google's INP metric replacement.",
  }
};

export default function INPMetricReplacement() {
  return (
    <main className="flex min-h-screen flex-col bg-charcoal-black">
      <Header />
      <ArticleJsonLd
        title="Core Web Vitals: INP Metric Replacement Guide | kiiro.cx"
        description="Complete guide to Google's INP (Interaction to Next Paint) metric. Learn how INP replaced FID, what it measures, and how to optimize for better Core Web Vitals scores."
        url="https://kiiro.cx/blog/inp-metric-replacement"
        image="https://kiiro.cx/projects/kiiro.webp"
        datePublished="2026-02-05"
        dateModified="2026-02-05"
        keywords={[
          "INP metric",
          "Interaction to Next Paint",
          "Core Web Vitals",
          "FID replacement",
          "page interactivity",
          "web performance optimization",
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
              <span className="px-3 py-1 bg-green-500/20 text-green-400 text-sm font-medium rounded-full">
                Performance
              </span>
              <div className="flex items-center gap-1 text-off-white/60 text-sm">
                <Calendar className="w-4 h-4" />
                February 5, 2026
              </div>
              <div className="flex items-center gap-1 text-off-white/60 text-sm">
                <Clock className="w-4 h-4" />
                15 min read
              </div>
            </div>

            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-off-white mb-8 leading-tight">
              Core Web Vitals: INP Metric Replacement Guide
            </h1>

            <p className="text-lg md:text-xl text-off-white/80 leading-relaxed mb-10 max-w-3xl">
              Google's INP (Interaction to Next Paint) has replaced FID as a Core Web Vitals metric. This comprehensive guide covers what INP measures, why it matters, and how to optimize your site.
            </p>

            <div className="flex flex-wrap items-center gap-6 mb-12 p-6 bg-gradient-to-r from-green-500/10 to-transparent rounded-2xl border border-green-500/20">
              <div className="flex items-center gap-2 text-green-400">
                <Clock className="w-5 h-5" />
                <span className="font-semibold">15 min read</span>
              </div>
              <div className="flex items-center gap-4 text-sm text-off-white/70">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  INP Basics
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  Optimization
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                  Measurement
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
                  <a href="#what-is-inp" className="block text-off-white/70 hover:text-kiiro-yellow transition-colors text-sm ml-4">What is INP?</a>
                  <a href="#fid-vs-inp" className="block text-off-white/70 hover:text-kiiro-yellow transition-colors text-sm ml-4">FID vs INP</a>
                  <a href="#thresholds" className="block text-off-white/70 hover:text-kiiro-yellow transition-colors text-sm ml-4">INP Thresholds</a>
                  <a href="#optimization" className="block text-off-white/70 hover:text-kiiro-yellow transition-colors text-sm ml-4">Optimization Strategies</a>
                  <a href="#measurement" className="block text-off-white/70 hover:text-kiiro-yellow transition-colors text-sm ml-4">Measuring INP</a>
                </nav>
              </div>

              <h2 id="introduction" className="text-2xl md:text-3xl font-bold text-off-white mb-6 mt-12 first:mt-0">Introduction</h2>
              <p className="text-off-white/80 text-lg leading-relaxed mb-8">
                In 2024, Google completed the transition from First Input Delay (FID) to Interaction to Next Paint (INP) as a Core Web Vitals metric. This change reflects a more comprehensive approach to measuring page interactivity.
              </p>

              <h2 id="what-is-inp" className="text-2xl md:text-3xl font-bold text-off-white mb-6 mt-12">What is INP?</h2>
              <p className="text-off-white/80 text-lg leading-relaxed mb-8">
                INP measures the time between a user's interaction (click, tap, keyboard input) and when the browser paints the next frame. It evaluates all interactions throughout a page's lifecycle and reports the longest interaction.
              </p>

              <div className="mb-10 p-6 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-2xl border border-green-500/20">
                <h3 className="text-xl font-bold text-green-400 mb-4 flex items-center gap-2">
                  <span className="text-2xl">🎯</span>
                  What INP Measures
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Clicks on links and buttons</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Taps on mobile devices</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Keyboard input (typing, pressing Enter)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Interactions with form elements</span>
                  </li>
                </ul>
              </div>

              <h2 id="fid-vs-inp" className="text-2xl md:text-3xl font-bold text-off-white mb-6 mt-12">FID vs INP: Key Differences</h2>
              <p className="text-off-white/80 text-lg leading-relaxed mb-8">
                Understanding the differences helps clarify why this metric change matters for your site.
              </p>

              <div className="mb-10 p-6 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-2xl border border-blue-500/20">
                <h3 className="text-xl font-bold text-blue-400 mb-4 flex items-center gap-2">
                  <span className="text-2xl">⚖️</span>
                  Comparison
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-off-white">FID:</strong>
                      <span className="text-off-white/70 ml-1">Only measured first interaction delay</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-off-white">INP:</strong>
                      <span className="text-off-white/70 ml-1">Measures all interactions, reports worst case</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-off-white">FID:</strong>
                      <span className="text-off-white/70 ml-1">Ignored long after page load</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-off-white">INP:</strong>
                      <span className="text-off-white/70 ml-1">Considers entire page lifecycle</span>
                    </div>
                  </li>
                </ul>
              </div>

              <h2 id="thresholds" className="text-2xl md:text-3xl font-bold text-off-white mb-6 mt-12">INP Thresholds</h2>
              <p className="text-off-white/80 text-lg leading-relaxed mb-8">
                Understanding the thresholds helps you know where your site stands.
              </p>

              <div className="mb-10 p-6 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl border border-purple-500/20">
                <h3 className="text-xl font-bold text-purple-400 mb-4 flex items-center gap-2">
                  <span className="text-2xl">📊</span>
                  INP Score Thresholds
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-off-white">Good (under 200ms):</strong>
                      <span className="text-off-white/70 ml-1">Pages feel responsive</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-off-white">Needs Improvement (200-500ms):</strong>
                      <span className="text-off-white/70 ml-1">Noticeable delays</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-off-white">Poor (over 500ms):</strong>
                      <span className="text-off-white/70 ml-1">Frustrating user experience</span>
                    </div>
                  </li>
                </ul>
              </div>

              <h2 id="optimization" className="text-2xl md:text-3xl font-bold text-off-white mb-6 mt-12">Optimization Strategies</h2>
              <p className="text-off-white/80 text-lg leading-relaxed mb-8">
                Improving INP requires reducing the time between user interactions and visual feedback.
              </p>

              <div className="mb-10 p-6 bg-gradient-to-r from-orange-500/10 to-yellow-500/10 rounded-2xl border border-orange-500/20">
                <h3 className="text-xl font-bold text-orange-400 mb-4 flex items-center gap-2">
                  <span className="text-2xl">🔧</span>
                  Optimization Techniques
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Break up long JavaScript tasks</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Use requestIdleCallback for non-critical work</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Optimize event handlers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Use web workers for heavy computation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Debounce scroll and resize handlers</span>
                  </li>
                </ul>
              </div>

              <h2 id="measurement" className="text-2xl md:text-3xl font-bold text-off-white mb-6 mt-12">Measuring INP</h2>
              <p className="text-off-white/80 text-lg leading-relaxed mb-8">
                Use these tools to measure and monitor your INP scores.
              </p>

              <div className="mb-10 p-6 bg-gradient-to-r from-cyan-500/10 to-teal-500/10 rounded-2xl border border-cyan-500/20">
                <h3 className="text-xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
                  <span className="text-2xl">📈</span>
                  Measurement Tools
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">PageSpeed Insights - field and lab data</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Search Console - real user data</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Chrome DevTools Performance tab</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">web-vitals JavaScript library</span>
                  </li>
                </ul>
              </div>

              <div className="mb-12 p-8 bg-gradient-to-r from-kiiro-yellow/10 to-yellow-500/10 rounded-2xl border border-kiiro-yellow/20">
                <h2 className="text-2xl md:text-3xl font-bold text-off-white mb-6">Conclusion</h2>
                <p className="text-off-white/80 text-lg leading-relaxed mb-6">
                  INP represents a more comprehensive view of page interactivity. By focusing on reducing main thread blocking and optimizing interaction responsiveness, you can improve both user experience and search rankings.
                </p>
                <div className="flex items-center gap-2 text-kiiro-yellow">
                  <span className="text-2xl">🎯</span>
                  <p className="font-semibold">
                    Need help optimizing your INP scores? We specialize in Core Web Vitals optimization.
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
                    Need Help with INP Optimization?
                  </h3>

                  <p className="text-off-white/70 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                    Get expert optimization for your Core Web Vitals scores.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                    <Button
                      asChild
                      size="lg"
                      className="bg-kiiro-yellow text-charcoal-black hover:bg-kiiro-yellow/90 hover:shadow-lg hover:shadow-kiiro-yellow/25 transition-all duration-300"
                    >
                      <Link href="/contact">
                        <span className="font-semibold">Get Performance Help</span>
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
                    ✅ INP analysis • ✅ Optimization • ✅ Core Web Vitals
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
