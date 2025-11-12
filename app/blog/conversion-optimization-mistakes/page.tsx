import { Metadata } from "next";
import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, X, CheckCircle, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "7 Deadly Conversion Optimization Mistakes | kiiro.cx",
  description: "Learn the most common conversion mistakes entrepreneurs make and how to fix them. Stop losing customers to poor website design and user experience.",
  keywords: "conversion optimization, website conversion, sales optimization, entrepreneur mistakes, user experience",
  authors: [{ name: "kiiro.cx" }],
  openGraph: {
    type: "article",
    title: "7 Deadly Conversion Optimization Mistakes That Are Killing Your Sales",
    description: "Learn the most common conversion mistakes entrepreneurs make and how to fix them.",
    siteName: "kiiro.cx",
  }
};

export default function ConversionOptimizationMistakes() {
  return (
    <main className="flex min-h-screen flex-col bg-charcoal-black">
      <Header />

      <article className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Back to Blog Link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-kiiro-yellow hover:text-kiiro-yellow/80 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          {/* Article Header */}
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 bg-red-500/20 text-red-400 text-sm font-medium rounded-full">
                Conversion
              </span>
              <div className="flex items-center gap-1 text-off-white/60 text-sm">
                <Calendar className="w-4 h-4" />
                January 22, 2025
              </div>
              <div className="flex items-center gap-1 text-off-white/60 text-sm">
                <Clock className="w-4 h-4" />
                8 min read
              </div>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-off-white mb-6">
              7 Deadly Conversion Optimization Mistakes That Are Killing Your Sales
            </h1>

            <p className="text-xl text-off-white/80 leading-relaxed mb-8">
              Learn the most common conversion mistakes entrepreneurs make and how to fix them. Stop losing customers to poor website design and user experience.
            </p>

            {/* Article Content */}
            <div className="prose prose-lg prose-invert max-w-none space-y-8">
              <p className="text-lg leading-relaxed text-off-white/90">
                Every day, thousands of potential customers visit your website and leave without converting. The problem isn&apos;t always lack of traffic – it&apos;s often poor conversion optimization. Here are the 7 most common mistakes entrepreneurs make that are silently killing their sales.
              </p>

              <div className="grid gap-6">
                <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-6">
                  <div className="flex items-start gap-3">
                    <X className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
                    <div>
                      <h2 className="text-red-400 font-semibold mb-3 text-xl">Mistake #1: Poor First Impression</h2>
                      <p className="text-off-white/80 mb-4">
                        Your hero section is cluttered, your value proposition is unclear, or your website looks outdated. Visitors make snap judgments within 3 seconds of landing on your site.
                      </p>
                      <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="text-green-400 font-semibold mb-1">Solution:</p>
                            <p className="text-off-white/80 text-sm">Create a clean, focused hero section with a clear headline, compelling subheadline, and prominent call-to-action.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-6">
                  <div className="flex items-start gap-3">
                    <X className="w-6 h-6 text-orange-400 flex-shrink-0 mt-1" />
                    <div>
                      <h2 className="text-orange-400 font-semibold mb-3 text-xl">Mistake #2: Too Many Choices</h2>
                      <p className="text-off-white/80 mb-4">
                        The paradox of choice is real. When visitors are overwhelmed with options, they often choose nothing. This happens with multiple competing CTAs, overwhelming navigation, or too many form fields.
                      </p>
                      <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="text-green-400 font-semibold mb-1">Solution:</p>
                            <p className="text-off-white/80 text-sm">Focus on one primary action per page. Simplify navigation and reduce form fields to the essentials.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-6">
                  <div className="flex items-start gap-3">
                    <X className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                    <div>
                      <h2 className="text-purple-400 font-semibold mb-3 text-xl">Mistake #3: Hidden Contact Information</h2>
                      <p className="text-off-white/80 mb-4">
                        Making it difficult for visitors to contact you or find your business information creates unnecessary friction in the buying process.
                      </p>
                      <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="text-green-400 font-semibold mb-1">Solution:</p>
                            <p className="text-off-white/80 text-sm">Display contact information prominently in headers, footers, and key pages. Make it easy to get in touch.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-6">
                  <div className="flex items-start gap-3">
                    <X className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                    <div>
                      <h2 className="text-blue-400 font-semibold mb-3 text-xl">Mistake #4: Lack of Social Proof</h2>
                      <p className="text-off-white/80 mb-4">
                        Without testimonials, case studies, or trust indicators, visitors have no reason to believe you can deliver on your promises.
                      </p>
                      <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="text-green-400 font-semibold mb-1">Solution:</p>
                            <p className="text-off-white/80 text-sm">Showcase client testimonials, case studies, and social proof throughout your site to build credibility.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-lg p-6">
                  <div className="flex items-start gap-3">
                    <X className="w-6 h-6 text-indigo-400 flex-shrink-0 mt-1" />
                    <div>
                      <h2 className="text-indigo-400 font-semibold mb-3 text-xl">Mistake #5: Slow Loading Times</h2>
                      <p className="text-off-white/80 mb-4">
                        If your website takes more than 3 seconds to load, you&apos;re losing potential customers. Speed is a ranking factor and conversion killer.
                      </p>
                      <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="text-green-400 font-semibold mb-1">Solution:</p>
                            <p className="text-off-white/80 text-sm">Optimize images, use caching, and minimize code. Aim for under 2 seconds load time.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-pink-500/10 border border-pink-500/20 rounded-lg p-6">
                  <div className="flex items-start gap-3">
                    <X className="w-6 h-6 text-pink-400 flex-shrink-0 mt-1" />
                    <div>
                      <h2 className="text-pink-400 font-semibold mb-3 text-xl">Mistake #6: Mobile Experience Issues</h2>
                      <p className="text-off-white/80 mb-4">
                        With 60% of searches happening on mobile, a poor mobile experience means you&apos;re missing out on most of your potential customers.
                      </p>
                      <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="text-green-400 font-semibold mb-1">Solution:</p>
                            <p className="text-off-white/80 text-sm">Design mobile-first. Test everything on actual mobile devices and ensure touch targets are large enough.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-teal-500/10 border border-teal-500/20 rounded-lg p-6">
                  <div className="flex items-start gap-3">
                    <X className="w-6 h-6 text-teal-400 flex-shrink-0 mt-1" />
                    <div>
                      <h2 className="text-teal-400 font-semibold mb-3 text-xl">Mistake #7: No Clear Call-to-Action</h2>
                      <p className="text-off-white/80 mb-4">
                        If visitors don&apos;t know what to do next, they&apos;ll leave. Every page needs a clear, compelling next step.
                      </p>
                      <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="text-green-400 font-semibold mb-1">Solution:</p>
                            <p className="text-off-white/80 text-sm">Place clear, benefit-focused CTAs above the fold and repeat them strategically throughout the page.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-kiiro-yellow/10 to-yellow-500/10 rounded-2xl border border-kiiro-yellow/20 p-8 mt-12">
                <h2 className="text-2xl md:text-3xl font-bold text-off-white mb-6">Ready to Fix Your Conversion Problems?</h2>
                <p className="text-off-white/80 text-lg leading-relaxed mb-8">
                  Don&apos;t let these common mistakes continue costing you sales. Get a professional website audit and discover exactly what&apos;s hurting your conversions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="bg-kiiro-yellow text-charcoal-black hover:bg-kiiro-yellow/90 hover:shadow-lg hover:shadow-kiiro-yellow/25 transition-all duration-300"
                  >
                    <Link href="/audit">
                      <span className="font-semibold">Get Free Website Audit</span>
                      <TrendingUp className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-kiiro-yellow/50 text-kiiro-yellow hover:bg-kiiro-yellow/10 hover:border-kiiro-yellow/70 transition-all duration-300"
                  >
                    <Link href="/contact">
                      Book Consultation
                    </Link>
                  </Button>
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
