import { Metadata } from "next";
import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { ArticleJsonLd } from "@/components/seo/article-json-ld";

export const metadata: Metadata = {
  title: "A/B Testing Framework: From Hypothesis to Results | kiiro.cx",
  description: "Master the complete A/B testing framework from hypothesis formation to statistical significance. Learn test design, common mistakes, and tools to optimize your conversion rates.",
  keywords: "A/B testing, conversion rate optimization, CRO, statistical significance, hypothesis testing, split testing",
  authors: [{ name: "kiiro.cx" }],
  alternates: {
    canonical: 'https://kiiro.cx/blog/ab-testing-framework'
  },
  openGraph: {
    images: ["https://kiiro.cx/og/blog/ab-testing-framework.png"],

    type: "article",
    title: "A/B Testing Framework: From Hypothesis to Results",
    description: "Master the complete A/B testing framework from hypothesis formation to statistical significance. Learn test design, common mistakes, and tools to optimize your conversion rates.",
    siteName: "kiiro.cx",
    url: "https://kiiro.cx/blog/ab-testing-framework",
  },
  twitter: {
    card: "summary_large_image",
    title: "A/B Testing Framework: From Hypothesis to Results | kiiro.cx",
    description: "Master the complete A/B testing framework from hypothesis formation to statistical significance.",
  }
};

export default function ABTestingFramework() {
  return (
    <main className="flex min-h-screen flex-col bg-charcoal-black">
      <Header />
      <ArticleJsonLd
        title="A/B Testing Framework: From Hypothesis to Results | kiiro.cx"
        description="Master the complete A/B testing framework from hypothesis formation to statistical significance. Learn test design, common mistakes, and tools to optimize your conversion rates."
        url="https://kiiro.cx/blog/ab-testing-framework"
        image="https://kiiro.cx/projects/kiiro.webp"
        datePublished="2025-07-08"
        dateModified="2025-07-08"
        keywords={[
          "A/B testing",
          "conversion rate optimization",
          "CRO",
          "statistical significance",
          "hypothesis testing",
          "split testing",
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
                CRO
              </span>
              <div className="flex items-center gap-1 text-off-white/60 text-sm">
                <Calendar className="w-4 h-4" />
                July 8, 2025
              </div>
              <div className="flex items-center gap-1 text-off-white/60 text-sm">
                <Clock className="w-4 h-4" />
                14 min read
              </div>
            </div>

            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-off-white mb-8 leading-tight">
              A/B Testing Framework: From Hypothesis to Results
            </h1>

            <p className="text-lg md:text-xl text-off-white/80 leading-relaxed mb-10 max-w-3xl">
              A systematic approach to A/B testing that transforms guesswork into data-driven decisions. Learn the complete framework from hypothesis formation to statistical significance.
            </p>

            <div className="flex flex-wrap items-center gap-6 mb-12 p-6 bg-gradient-to-r from-kiiro-yellow/10 to-transparent rounded-2xl border border-kiiro-yellow/20">
              <div className="flex items-center gap-2 text-kiiro-yellow">
                <Clock className="w-5 h-5" />
                <span className="font-semibold">14 min read</span>
              </div>
              <div className="flex items-center gap-4 text-sm text-off-white/70">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  Hypothesis Formation
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  Test Design
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                  Statistical Analysis
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
                  <a href="#hypothesis-formation" className="block text-off-white/70 hover:text-kiiro-yellow transition-colors text-sm ml-4">Hypothesis Formation</a>
                  <a href="#test-design" className="block text-off-white/70 hover:text-kiiro-yellow transition-colors text-sm ml-4">Test Design Principles</a>
                  <a href="#statistical-significance" className="block text-off-white/70 hover:text-kiiro-yellow transition-colors text-sm ml-4">Understanding Statistical Significance</a>
                  <a href="#common-mistakes" className="block text-off-white/70 hover:text-kiiro-yellow transition-colors text-sm ml-4">Common A/B Testing Mistakes</a>
                  <a href="#tools" className="block text-off-white/70 hover:text-kiiro-yellow transition-colors text-sm ml-4">A/B Testing Tools</a>
                  <a href="#implementation" className="block text-off-white/70 hover:text-kiiro-yellow transition-colors text-sm ml-4">Implementation Checklist</a>
                </nav>
              </div>

              <h2 id="introduction" className="text-2xl md:text-3xl font-bold text-off-white mb-6 mt-12 first:mt-0">Introduction</h2>
              <p className="text-off-white/80 text-lg leading-relaxed mb-8">
                A/B testing is the cornerstone of conversion rate optimization, yet many businesses approach it haphazardly. Without a structured framework, you risk wasting resources on inconclusive tests or, worse, making decisions based on misleading data. This guide provides a complete methodology for running effective A/B tests that deliver measurable business results.
              </p>

              <h2 id="hypothesis-formation" className="text-2xl md:text-3xl font-bold text-off-white mb-6 mt-12">Hypothesis Formation</h2>
              <p className="text-off-white/80 text-lg leading-relaxed mb-8">
                Every successful A/B test starts with a well-formed hypothesis. A good hypothesis follows the format: "If we change [element], then [metric] will [increase/decrease] because [reason]."
              </p>

              <div className="mb-10 p-6 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-2xl border border-blue-500/20">
                <h3 className="text-xl font-bold text-blue-400 mb-4 flex items-center gap-2">
                  <span className="text-2xl">🔬</span>
                  The PIE Framework for Prioritization
                </h3>
                <p className="text-off-white/80 mb-6">
                  Score each hypothesis on three factors to prioritize your testing roadmap:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-off-white">Potential:</strong>
                      <span className="text-off-white/70 ml-1">How much improvement can be made? (1-10)</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-off-white">Importance:</strong>
                      <span className="text-off-white/70 ml-1">How valuable is this traffic? (1-10)</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-off-white">Ease:</strong>
                      <span className="text-off-white/70 ml-1">How difficult to implement the test? (1-10)</span>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="mb-10 p-6 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-2xl border border-green-500/20">
                <h3 className="text-xl font-bold text-green-400 mb-4 flex items-center gap-2">
                  <span className="text-2xl">📊</span>
                  Data Sources for Hypotheses
                </h3>
                <p className="text-off-white/80 mb-6">
                  Build hypotheses from multiple data sources to ensure validity:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-white/5 rounded-lg">
                    <strong className="text-off-white block mb-2">Quantitative Data</strong>
                    <span className="text-off-white/70 text-sm">Google Analytics, heatmaps, session recordings, form analytics</span>
                  </div>
                  <div className="p-4 bg-white/5 rounded-lg">
                    <strong className="text-off-white block mb-2">Qualitative Data</strong>
                    <span className="text-off-white/70 text-sm">User surveys, customer interviews, support tickets, usability tests</span>
                  </div>
                </div>
              </div>

              <h2 id="test-design" className="text-2xl md:text-3xl font-bold text-off-white mb-6 mt-12">Test Design Principles</h2>
              <p className="text-off-white/80 text-lg leading-relaxed mb-8">
                Proper test design ensures your results are reliable and actionable. Follow these principles to design tests that produce meaningful insights.
              </p>

              <div className="mb-10 p-6 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl border border-purple-500/20">
                <h3 className="text-xl font-bold text-purple-400 mb-4 flex items-center gap-2">
                  <span className="text-2xl">🎯</span>
                  Sample Size Calculation
                </h3>
                <p className="text-off-white/80 mb-6">
                  Calculate your required sample size before starting any test. The formula considers:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-off-white">Baseline conversion rate:</strong>
                      <span className="text-off-white/70 ml-1">Your current conversion percentage</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-off-white">Minimum detectable effect:</strong>
                      <span className="text-off-white/70 ml-1">Smallest improvement worth detecting (typically 5-10%)</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-off-white">Statistical power:</strong>
                      <span className="text-off-white/70 ml-1">Usually set at 80% (80% chance of detecting a real effect)</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-off-white">Significance level:</strong>
                      <span className="text-off-white/70 ml-1">Typically 95% confidence (5% false positive rate)</span>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="mb-10 p-6 bg-gradient-to-r from-orange-500/10 to-yellow-500/10 rounded-2xl border border-orange-500/20">
                <h3 className="text-xl font-bold text-orange-400 mb-4 flex items-center gap-2">
                  <span className="text-2xl">⏱️</span>
                  Test Duration Guidelines
                </h3>
                <p className="text-off-white/80 mb-6">
                  Run tests for a minimum of 7 days to account for day-of-week variations. For most businesses:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Minimum: 7 days (captures weekly patterns)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Recommended: 14-28 days (more reliable data)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Maximum: 6-8 weeks (avoid external factor contamination)</span>
                  </li>
                </ul>
              </div>

              <h2 id="statistical-significance" className="text-2xl md:text-3xl font-bold text-off-white mb-6 mt-12">Understanding Statistical Significance</h2>
              <p className="text-off-white/80 text-lg leading-relaxed mb-8">
                Statistical significance tells you whether your results are likely due to the change you made or just random chance. Understanding this concept is critical for making informed decisions.
              </p>

              <div className="mb-10 p-6 bg-gradient-to-r from-cyan-500/10 to-teal-500/10 rounded-2xl border border-cyan-500/20">
                <h3 className="text-xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
                  <span className="text-2xl">📈</span>
                  Key Statistical Concepts
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-off-white">P-value:</strong>
                      <span className="text-off-white/70 ml-1">Probability the results occurred by chance. Aim for p &lt; 0.05 for 95% confidence.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-off-white">Confidence Interval:</strong>
                      <span className="text-off-white/70 ml-1">Range where the true conversion rate likely falls. Narrower is better.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-off-white">Effect Size:</strong>
                      <span className="text-off-white/70 ml-1">The magnitude of difference between variants. Statistical significance does not equal practical significance.</span>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="mb-10 p-6 bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-2xl border border-red-500/20">
                <h3 className="text-xl font-bold text-red-400 mb-4 flex items-center gap-2">
                  <span className="text-2xl">⚠️</span>
                  The Peeking Problem
                </h3>
                <p className="text-off-white/80">
                  Do not check results and make decisions before reaching your pre-calculated sample size. Peeking inflates false positive rates significantly. A test with 95% confidence but frequent peeking can have an actual false positive rate of 30% or higher.
                </p>
              </div>

              <h2 id="common-mistakes" className="text-2xl md:text-3xl font-bold text-off-white mb-6 mt-12">Common A/B Testing Mistakes</h2>
              <p className="text-off-white/80 text-lg leading-relaxed mb-8">
                Even experienced teams make these mistakes. Learn to recognize and avoid them to ensure your tests produce reliable results.
              </p>

              <div className="mb-10 p-6 bg-gradient-to-r from-pink-500/10 to-rose-500/10 rounded-2xl border border-pink-500/20">
                <h3 className="text-xl font-bold text-pink-400 mb-4 flex items-center gap-2">
                  <span className="text-2xl">❌</span>
                  Mistakes That Kill Test Validity
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-off-white">Testing too many changes at once:</strong>
                      <span className="text-off-white/70 ml-1">Test one variable at a time to isolate impact</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-off-white">Stopping tests early:</strong>
                      <span className="text-off-white/70 ml-1">Wait for statistical significance AND adequate sample size</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-off-white">Ignoring segment differences:</strong>
                      <span className="text-off-white/70 ml-1">Results may differ by device, traffic source, or user type</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-off-white">Not accounting for external factors:</strong>
                      <span className="text-off-white/70 ml-1">Seasonality, promotions, and news events can skew results</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-off-white">Focusing only on conversion rate:</strong>
                      <span className="text-off-white/70 ml-1">Monitor revenue per visitor, bounce rate, and engagement too</span>
                    </div>
                  </li>
                </ul>
              </div>

              <h2 id="tools" className="text-2xl md:text-3xl font-bold text-off-white mb-6 mt-12">A/B Testing Tools</h2>
              <p className="text-off-white/80 text-lg leading-relaxed mb-8">
                Choose tools that match your technical capabilities and testing needs. Here are the top options for 2025.
              </p>

              <div className="mb-10 p-8 bg-gradient-to-r from-violet-500/10 to-purple-500/10 rounded-2xl border border-violet-500/20">
                <h3 className="text-xl font-bold text-violet-400 mb-6 flex items-center gap-2">
                  <span className="text-2xl">🛠️</span>
                  Recommended Tools by Category
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-3 h-3 bg-violet-400 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <strong className="text-off-white block">Google Optimize (Sunset)</strong>
                        <span className="text-off-white/70 text-sm">Migrate to Optimizely or VWO</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-3 h-3 bg-violet-400 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <strong className="text-off-white block">VWO (Visual Website Optimizer)</strong>
                        <span className="text-off-white/70 text-sm">Best all-in-one CRO platform</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-3 h-3 bg-violet-400 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <strong className="text-off-white block">Optimizely</strong>
                        <span className="text-off-white/70 text-sm">Enterprise-grade with advanced features</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-3 h-3 bg-violet-400 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <strong className="text-off-white block">PostHog</strong>
                        <span className="text-off-white/70 text-sm">Open-source with product analytics</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <h2 id="implementation" className="text-2xl md:text-3xl font-bold text-off-white mb-6 mt-12">Implementation Checklist</h2>
              <p className="text-off-white/80 text-lg leading-relaxed mb-8">
                Follow this checklist to ensure your A/B testing program is set up for success.
              </p>

              <div className="mb-10 p-6 bg-gradient-to-r from-emerald-500/10 to-green-500/10 rounded-2xl border border-emerald-500/20">
                <h3 className="text-xl font-bold text-emerald-400 mb-4 flex items-center gap-2">
                  <span className="text-2xl">✅</span>
                  Pre-Test Checklist
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Document hypothesis with PIE score</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Calculate required sample size</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Set primary and secondary metrics</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Define test duration upfront</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">QA test on all devices and browsers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Verify tracking is working correctly</span>
                  </li>
                </ul>
              </div>

              <div className="mb-12 p-8 bg-gradient-to-r from-kiiro-yellow/10 to-yellow-500/10 rounded-2xl border border-kiiro-yellow/20">
                <h2 className="text-2xl md:text-3xl font-bold text-off-white mb-6">Conclusion</h2>
                <p className="text-off-white/80 text-lg leading-relaxed mb-6">
                  A/B testing is a powerful tool for optimization, but only when executed with scientific rigor. By following this framework, you will avoid common pitfalls and generate actionable insights that drive real business growth.
                </p>
                <div className="flex items-center gap-2 text-kiiro-yellow">
                  <span className="text-2xl">💡</span>
                  <p className="font-semibold">
                    Remember: The goal is not to run more tests, but to run better tests. One well-designed test is worth ten poorly planned ones.
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
                    Ready to Optimize Your Conversions?
                  </h3>

                  <p className="text-off-white/70 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                    Get a professional CRO audit and testing roadmap that identifies your biggest optimization opportunities.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                    <Button
                      asChild
                      size="lg"
                      className="bg-kiiro-yellow text-charcoal-black hover:bg-kiiro-yellow/90 hover:shadow-lg hover:shadow-kiiro-yellow/25 transition-all duration-300"
                    >
                      <Link href="/contact">
                        <span className="font-semibold">Get CRO Consultation</span>
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
                    ✅ No obligation • ✅ Personalized strategy • ✅ Actionable insights
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
