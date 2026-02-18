import { Metadata } from "next";
import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { ArticleJsonLd } from "@/components/seo/article-json-ld";

export const metadata: Metadata = {
  title: "Google's Core Web Vitals Update: What Changed in 2025 | kiiro.cx",
  description: "Complete guide to Google's February 2025 Core Web Vitals updates. Learn about the new INP metric, updated LCP thresholds, and practical optimization strategies for better rankings.",
  keywords: "Core Web Vitals 2025, INP metric, LCP optimization, page speed, Google algorithm update, web performance",
  authors: [{ name: "kiiro.cx" }],
  alternates: {
    canonical: 'https://kiiro.cx/blog/core-web-vitals-2025'
  },
  openGraph: {
    images: ["https://kiiro.cx/og/blog/core-web-vitals-2025.png"],

    type: "article",
    title: "Google's Core Web Vitals Update: What Changed in 2025",
    description: "Complete guide to Google's February 2025 Core Web Vitals updates. Learn about the new INP metric, updated LCP thresholds, and practical optimization strategies.",
    siteName: "kiiro.cx",
    url: "https://kiiro.cx/blog/core-web-vitals-2025",
  },
  twitter: {
    card: "summary_large_image",
    title: "Google's Core Web Vitals Update: What Changed in 2025 | kiiro.cx",
    description: "Learn about the new INP metric and February 2025 Core Web Vitals updates.",
  }
};

export default function CoreWebVitals2025() {
  return (
    <main className="flex min-h-screen flex-col bg-charcoal-black">
      <Header />
      <ArticleJsonLd
        title="Google's Core Web Vitals Update: What Changed in 2025 | kiiro.cx"
        description="Complete guide to Google's February 2025 Core Web Vitals updates. Learn about the new INP metric, updated LCP thresholds, and practical optimization strategies for better rankings."
        url="https://kiiro.cx/blog/core-web-vitals-2025"
        image="https://kiiro.cx/projects/kiiro.webp"
        datePublished="2025-02-20"
        dateModified="2025-02-20"
        keywords={[
          "Core Web Vitals 2025",
          "INP metric",
          "LCP optimization",
          "page speed",
          "Google algorithm update",
          "web performance",
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
                February 20, 2025
              </div>
              <div className="flex items-center gap-1 text-off-white/60 text-sm">
                <Clock className="w-4 h-4" />
                14 min read
              </div>
            </div>

            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-off-white mb-8 leading-tight">
              Google&apos;s Core Web Vitals Update: What Changed in 2025
            </h1>

            <p className="text-lg md:text-xl text-off-white/80 leading-relaxed mb-10 max-w-3xl">
              The February 2025 Core Web Vitals update brought significant changes to how Google evaluates page experience. With INP replacing FID and updated thresholds across all metrics, here&apos;s everything you need to know.
            </p>

            <div className="flex flex-wrap items-center gap-6 mb-12 p-6 bg-gradient-to-r from-green-500/10 to-transparent rounded-2xl border border-green-500/20">
              <div className="flex items-center gap-2 text-green-400">
                <Clock className="w-5 h-5" />
                <span className="font-semibold">14 min read</span>
              </div>
              <div className="flex items-center gap-4 text-sm text-off-white/70">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  INP Metric
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  LCP Updates
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                  Optimization Tips
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
                  <a href="#inp-replacement" className="block text-off-white/70 hover:text-kiiro-yellow transition-colors text-sm ml-4">INP Replaces FID</a>
                  <a href="#lcp-updates" className="block text-off-white/70 hover:text-kiiro-yellow transition-colors text-sm ml-4">LCP Threshold Updates</a>
                  <a href="#cls-refinements" className="block text-off-white/70 hover:text-kiiro-yellow transition-colors text-sm ml-4">CLS Measurement Refinements</a>
                  <a href="#optimization-strategies" className="block text-off-white/70 hover:text-kiiro-yellow transition-colors text-sm ml-4">Practical Optimization Strategies</a>
                  <a href="#measuring-performance" className="block text-off-white/70 hover:text-kiiro-yellow transition-colors text-sm ml-4">Measuring Your Performance</a>
                </nav>
              </div>

              <h2 id="introduction" className="text-2xl md:text-3xl font-bold text-off-white mb-6 mt-12 first:mt-0">Introduction</h2>
              <p className="text-off-white/80 text-lg leading-relaxed mb-8">
                On February 11, 2025, Google rolled out a major Core Web Vitals update that reshaped how websites are evaluated for page experience. The most significant change was the official replacement of First Input Delay (FID) with Interaction to Next Paint (INP) as a ranking factor. Combined with updated thresholds for Largest Contentful Paint (LCP) and refinements to Cumulative Layout Shift (CLS) measurement, this update has substantial implications for SEO professionals and web developers alike.
              </p>
              <p className="text-off-white/80 text-lg leading-relaxed mb-8">
                According to Google&apos;s Chromium team, approximately 35% of websites that previously passed Core Web Vitals assessments now fail due to the INP requirement alone. This makes understanding and optimizing for these new metrics critical for maintaining search visibility.
              </p>

              <h2 id="inp-replacement" className="text-2xl md:text-3xl font-bold text-off-white mb-6 mt-12">INP Replaces FID: A Fundamental Shift</h2>
              <p className="text-off-white/80 text-lg leading-relaxed mb-8">
                The transition from FID to INP represents more than a simple metric swap. While FID measured only the delay before the first interaction, INP captures the entire interaction lifecycle, providing a much more comprehensive view of page responsiveness.
              </p>

              <div className="mb-10 p-6 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-2xl border border-green-500/20">
                <h3 className="text-xl font-bold text-green-400 mb-4 flex items-center gap-2">
                  <span className="text-2xl">📊</span>
                  INP Thresholds
                </h3>
                <p className="text-off-white/80 mb-6">
                  Google has established the following thresholds for INP scoring:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-off-white">Good (under 200ms):</strong>
                      <span className="text-off-white/70 ml-1">Pages feel instantly responsive</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-off-white">Needs Improvement (200-500ms):</strong>
                      <span className="text-off-white/70 ml-1">Noticeable but acceptable delay</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-off-white">Poor (over 500ms):</strong>
                      <span className="text-off-white/70 ml-1">Sluggish, frustrating user experience</span>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="mb-10 p-6 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-2xl border border-blue-500/20">
                <h3 className="text-xl font-bold text-blue-400 mb-4 flex items-center gap-2">
                  <span className="text-2xl">🔍</span>
                  Why INP Matters More Than FID
                </h3>
                <p className="text-off-white/80 mb-4">
                  FID had a significant blind spot: it only measured the first click, tap, or keypress on a page. Modern web applications are highly interactive, and users often perform dozens of interactions per session.
                </p>
                <p className="text-off-white/80">
                  INP solves this by observing all interactions throughout a page&apos;s lifecycle and reporting the worst interaction latency (or the 98th percentile for pages with many interactions). This gives a much more accurate picture of how responsive a page feels during actual use.
                </p>
              </div>

              <h2 id="lcp-updates" className="text-2xl md:text-3xl font-bold text-off-white mb-6 mt-12">LCP Threshold Updates</h2>
              <p className="text-off-white/80 text-lg leading-relaxed mb-8">
                Largest Contentful Paint measures when the largest visible content element renders in the viewport. The February 2025 update introduced more nuanced thresholds and changed how Google handles pages with multiple LCP candidates.
              </p>

              <div className="mb-10 p-6 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl border border-purple-500/20">
                <h3 className="text-xl font-bold text-purple-400 mb-4 flex items-center gap-2">
                  <span className="text-2xl">⚡</span>
                  New LCP Thresholds
                </h3>
                <p className="text-off-white/80 mb-6">
                  The 2025 update maintained existing thresholds but changed how they&apos;re evaluated:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-off-white">Good (under 2.5s):</strong>
                      <span className="text-off-white/70 ml-1">Now measured at the 75th percentile of page loads</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-off-white">Needs Improvement (2.5s - 4.0s):</strong>
                      <span className="text-off-white/70 ml-1">Previously 2.5s - 4.0s, now with stricter evaluation</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-off-white">Poor (over 4.0s):</strong>
                      <span className="text-off-white/70 ml-1">Same threshold, but weighted more heavily in rankings</span>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="mb-10 p-6 bg-gradient-to-r from-orange-500/10 to-yellow-500/10 rounded-2xl border border-orange-500/20">
                <h3 className="text-xl font-bold text-orange-400 mb-4 flex items-center gap-2">
                  <span className="text-2xl">🎯</span>
                  LCP Optimization Priorities
                </h3>
                <p className="text-off-white/80 mb-6">
                  Based on Google&apos;s 2025 data, focus on these optimization areas:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Eliminate render-blocking resources above the fold</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Use fetchpriority=&quot;high&quot; for LCP images</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Implement server-side rendering or static generation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Use Content Delivery Networks for static assets</span>
                  </li>
                </ul>
              </div>

              <h2 id="cls-refinements" className="text-2xl md:text-3xl font-bold text-off-white mb-6 mt-12">CLS Measurement Refinements</h2>
              <p className="text-off-white/80 text-lg leading-relaxed mb-8">
                Cumulative Layout Shift measures visual stability. The 2025 update refined how Google detects and scores layout shifts, particularly around dynamically loaded content and user-initiated shifts.
              </p>

              <div className="mb-10 p-6 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-2xl border border-indigo-500/20">
                <h3 className="text-xl font-bold text-indigo-400 mb-4 flex items-center gap-2">
                  <span className="text-2xl">📐</span>
                  Key CLS Changes
                </h3>
                <p className="text-off-white/80 mb-6">
                  The updated measurement now:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Better excludes user-initiated layout shifts (clicks, keypresses)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">More accurately tracks shifts during SPA navigation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Applies session windows with 1-second gap and 5-second max</span>
                  </li>
                </ul>
              </div>

              <h2 id="optimization-strategies" className="text-2xl md:text-3xl font-bold text-off-white mb-6 mt-12">Practical Optimization Strategies</h2>
              <p className="text-off-white/80 text-lg leading-relaxed mb-8">
                With these updates in mind, here are actionable strategies for improving your Core Web Vitals scores in 2025.
              </p>

              <div className="mb-10 p-6 bg-gradient-to-r from-cyan-500/10 to-teal-500/10 rounded-2xl border border-cyan-500/20">
                <h3 className="text-xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
                  <span className="text-2xl">🔧</span>
                  INP Optimization Techniques
                </h3>
                <p className="text-off-white/80 mb-6">
                  To improve INP scores, focus on reducing main thread blocking:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Break up long tasks using setTimeout or requestIdleCallback</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Use web workers for CPU-intensive operations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Debounce expensive event handlers (scroll, resize)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Use React concurrent features or similar framework optimizations</span>
                  </li>
                </ul>
              </div>

              <div className="mb-10 p-6 bg-gradient-to-r from-pink-500/10 to-rose-500/10 rounded-2xl border border-pink-500/20">
                <h3 className="text-xl font-bold text-pink-400 mb-4 flex items-center gap-2">
                  <span className="text-2xl">🖼️</span>
                  LCP Quick Wins
                </h3>
                <p className="text-off-white/80 mb-6">
                  For immediate LCP improvements:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Preload critical images with &lt;link rel=&quot;preload&quot;&gt;</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Use modern image formats (WebP, AVIF) with proper sizing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Inline critical CSS and defer non-critical styles</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Implement streaming HTML rendering</span>
                  </li>
                </ul>
              </div>

              <h2 id="measuring-performance" className="text-2xl md:text-3xl font-bold text-off-white mb-6 mt-12">Measuring Your Performance</h2>
              <p className="text-off-white/80 text-lg leading-relaxed mb-8">
                Use these tools to assess and monitor your Core Web Vitals performance.
              </p>

              <div className="mb-10 p-8 bg-gradient-to-r from-violet-500/10 to-purple-500/10 rounded-2xl border border-violet-500/20">
                <h3 className="text-xl font-bold text-violet-400 mb-6 flex items-center gap-2">
                  <span className="text-2xl">📊</span>
                  Recommended Tools
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-3 h-3 bg-violet-400 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <strong className="text-off-white block">PageSpeed Insights</strong>
                        <span className="text-off-white/70 text-sm">Field and lab data from Lighthouse</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-3 h-3 bg-violet-400 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <strong className="text-off-white block">Search Console</strong>
                        <span className="text-off-white/70 text-sm">Real user data from Chrome UX Report</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-3 h-3 bg-violet-400 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <strong className="text-off-white block">web-vitals JS library</strong>
                        <span className="text-off-white/70 text-sm">Collect real user metrics in production</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-3 h-3 bg-violet-400 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <strong className="text-off-white block">Lighthouse CLI</strong>
                        <span className="text-off-white/70 text-sm">Automated testing in CI/CD pipelines</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-12 p-8 bg-gradient-to-r from-kiiro-yellow/10 to-yellow-500/10 rounded-2xl border border-kiiro-yellow/20">
                <h2 className="text-2xl md:text-3xl font-bold text-off-white mb-6">Conclusion</h2>
                <p className="text-off-white/80 text-lg leading-relaxed mb-6">
                  The February 2025 Core Web Vitals update marks a significant evolution in how Google evaluates page experience. With INP replacing FID and refined measurements across all metrics, websites must prioritize responsive, fast-loading, and visually stable experiences.
                </p>
                <div className="flex items-center gap-2 text-kiiro-yellow">
                  <span className="text-2xl">🎯</span>
                  <p className="font-semibold">
                    Focus on real user experience improvements rather than gaming metrics. The algorithms are increasingly sophisticated at detecting manipulation.
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
                    Need Help Optimizing Your Core Web Vitals?
                  </h3>

                  <p className="text-off-white/70 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                    Get a comprehensive performance audit with specific recommendations for improving your INP, LCP, and CLS scores.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                    <Button
                      asChild
                      size="lg"
                      className="bg-kiiro-yellow text-charcoal-black hover:bg-kiiro-yellow/90 hover:shadow-lg hover:shadow-kiiro-yellow/25 transition-all duration-300"
                    >
                      <Link href="/contact">
                        <span className="font-semibold">Get Performance Consultation</span>
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
                    ✅ Core Web Vitals analysis • ✅ Actionable recommendations • ✅ Implementation guidance
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
