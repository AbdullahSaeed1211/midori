import { Metadata } from "next";
import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { ArticleJsonLd } from "@/components/seo/article-json-ld";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";

export const metadata: Metadata = {
  title: "Building Your Email List: Website Integration Guide | kiiro.cx",
  description: "Learn how to effectively build your email list from your website. Discover opt-in strategies, form placement, lead magnets, and integration best practices.",
  keywords: "email list building, lead capture, email signup forms, website lead generation, email marketing integration, list growth strategy",
  authors: [{ name: "kiiro.cx" }],
  alternates: {
    canonical: 'https://kiiro.cx/blog/email-list-website-integration'
  },
  openGraph: {
    images: ["https://kiiro.cx/og/blog/email-list-website-integration.png"],

    type: "article",
    title: "Building Your Email List: Website Integration Guide",
    description: "Learn how to effectively build your email list from your website with proven strategies.",
    siteName: "kiiro.cx",
    url: "https://kiiro.cx/blog/email-list-website-integration",
  },
  twitter: {
    card: "summary_large_image",
    title: "Building Your Email List: Website Integration Guide | kiiro.cx",
    description: "Learn how to effectively build your email list from your website.",
  }
};

export default function EmailListWebsiteIntegration() {
  return (
    <main className="flex min-h-screen flex-col bg-charcoal-black">
      <Header />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://kiiro.cx" },
          { name: "Blog", url: "https://kiiro.cx/blog" },
          { name: "Building Your Email List: Website Integration Guide | kiiro.cx", url: "https://kiiro.cx/blog/email-list-website-integration" }
        ]}
      />
      <ArticleJsonLd
        title="Building Your Email List: Website Integration Guide | kiiro.cx"
        description="Learn how to effectively build your email list from your website. Discover opt-in strategies, form placement, lead magnets, and integration best practices."
        url="https://kiiro.cx/blog/email-list-website-integration"
        image="https://kiiro.cx/projects/kiiro.webp"
        datePublished="2026-01-20"
        dateModified="2026-01-20"
        keywords={[
          "email list building",
          "lead capture",
          "email signup forms",
          "website lead generation",
          "email marketing integration",
          "list growth strategy",
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
              <span className="px-3 py-1 bg-purple-500/20 text-purple-400 text-sm font-medium rounded-full">
                Business
              </span>
              <div className="flex items-center gap-1 text-off-white/60 text-sm">
                <Calendar className="w-4 h-4" />
                January 20, 2026
              </div>
              <div className="flex items-center gap-1 text-off-white/60 text-sm">
                <Clock className="w-4 h-4" />
                14 min read
              </div>
            </div>

            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-off-white mb-8 leading-tight">
              Building Your Email List: Website Integration Guide
            </h1>

            <p className="text-lg md:text-xl text-off-white/80 leading-relaxed mb-10 max-w-3xl">
              Your email list is one of your most valuable marketing assets. Learn how to effectively capture leads on your website and build a list that drives business growth.
            </p>

            <div className="flex flex-wrap items-center gap-6 mb-12 p-6 bg-gradient-to-r from-purple-500/10 to-transparent rounded-2xl border border-purple-500/20">
              <div className="flex items-center gap-2 text-purple-400">
                <Clock className="w-5 h-5" />
                <span className="font-semibold">14 min read</span>
              </div>
              <div className="flex items-center gap-4 text-sm text-off-white/70">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                  Strategy
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  Forms
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  Integration
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
                  <a href="#lead-magnets" className="block text-off-white/70 hover:text-kiiro-yellow transition-colors text-sm ml-4">Lead Magnets</a>
                  <a href="#form-placement" className="block text-off-white/70 hover:text-kiiro-yellow transition-colors text-sm ml-4">Form Placement</a>
                  <a href="#form-design" className="block text-off-white/70 hover:text-kiiro-yellow transition-colors text-sm ml-4">Form Design</a>
                  <a href="#integration" className="block text-off-white/70 hover:text-kiiro-yellow transition-colors text-sm ml-4">Email Integration</a>
                  <a href="#optimization" className="block text-off-white/70 hover:text-kiiro-yellow transition-colors text-sm ml-4">Optimization</a>
                </nav>
              </div>

              <h2 id="introduction" className="text-2xl md:text-3xl font-bold text-off-white mb-6 mt-12 first:mt-0">Introduction</h2>
              <p className="text-off-white/80 text-lg leading-relaxed mb-8">
                Email marketing consistently delivers the highest ROI of any marketing channel. But effective email marketing starts with a quality email list. Your website is your primary tool for capturing leads and growing your list.
              </p>

              <h2 id="lead-magnets" className="text-2xl md:text-3xl font-bold text-off-white mb-6 mt-12">Lead Magnets</h2>
              <p className="text-off-white/80 text-lg leading-relaxed mb-8">
                The key to effective lead capture is offering something valuable in exchange for an email address.
              </p>

              <div className="mb-10 p-6 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl border border-purple-500/20">
                <h3 className="text-xl font-bold text-purple-400 mb-4 flex items-center gap-2">
                  <span className="text-2xl">🎁</span>
                  Effective Lead Magnets
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90"><strong>Ebooks:</strong> Comprehensive guides on relevant topics</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90"><strong>Checklists:</strong> Actionable, printable resources</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90"><strong>Templates:</strong> Ready-to-use business tools</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90"><strong>Webinars:</strong> Live or recorded educational content</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90"><strong>Discounts:</strong> Percentage off first purchase</span>
                  </li>
                </ul>
              </div>

              <h2 id="form-placement" className="text-2xl md:text-3xl font-bold text-off-white mb-6 mt-12">Form Placement</h2>
              <p className="text-off-white/80 text-lg leading-relaxed mb-8">
                Where you place your signup forms significantly impacts conversion rates.
              </p>

              <div className="mb-10 p-6 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-2xl border border-green-500/20">
                <h3 className="text-xl font-bold text-green-400 mb-4 flex items-center gap-2">
                  <span className="text-2xl">📍</span>
                  High-Converting Placements
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90"><strong>Header:</strong> Always-visible signup in navigation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90"><strong>Exit intent:</strong> Capture abandoning visitors</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90"><strong>Blog posts:</strong> Inline and end-of-content forms</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90"><strong>Footer:</strong> Persistent signup opportunity</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90"><strong>Popups:</strong> Timed overlays with value proposition</span>
                  </li>
                </ul>
              </div>

              <h2 id="form-design" className="text-2xl md:text-3xl font-bold text-off-white mb-6 mt-12">Form Design</h2>
              <p className="text-off-white/80 text-lg leading-relaxed mb-8">
                The design of your forms affects both conversion rate and lead quality.
              </p>

              <div className="mb-10 p-6 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-2xl border border-blue-500/20">
                <h3 className="text-xl font-bold text-blue-400 mb-4 flex items-center gap-2">
                  <span className="text-2xl">🎨</span>
                  Form Design Best Practices
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Minimize fields - email and name are usually sufficient</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Use clear, benefit-driven copy</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Create urgency with time-sensitive offers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Add social proof (subscriber count, testimonials)</span>
                  </li>
                </ul>
              </div>

              <h2 id="integration" className="text-2xl md:text-3xl font-bold text-off-white mb-6 mt-12">Email Integration</h2>
              <p className="text-off-white/80 text-lg leading-relaxed mb-8">
                Proper integration ensures leads are captured efficiently and trigger appropriate follow-up sequences.
              </p>

              <div className="mb-10 p-6 bg-gradient-to-r from-orange-500/10 to-yellow-500/10 rounded-2xl border border-orange-500/20">
                <h3 className="text-xl font-bold text-orange-400 mb-4 flex items-center gap-2">
                  <span className="text-2xl">⚙️</span>
                  Integration Requirements
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Connect forms to email marketing platform</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Set up automatic welcome sequences</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Implement tagging for segmentation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Configure double opt-in if needed</span>
                  </li>
                </ul>
              </div>

              <h2 id="optimization" className="text-2xl md:text-3xl font-bold text-off-white mb-6 mt-12">Optimization</h2>
              <p className="text-off-white/80 text-lg leading-relaxed mb-8">
                Continuously test and optimize your lead capture to maximize list growth.
              </p>

              <div className="mb-10 p-6 bg-gradient-to-r from-cyan-500/10 to-teal-500/10 rounded-2xl border border-cyan-500/20">
                <h3 className="text-xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
                  <span className="text-2xl">🧪</span>
                  Testing Priorities
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">A/B test lead magnet offers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Test form field count</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Experiment with CTA copy</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Monitor conversion rates by placement</span>
                  </li>
                </ul>
              </div>

              <div className="mb-12 p-8 bg-gradient-to-r from-kiiro-yellow/10 to-yellow-500/10 rounded-2xl border border-kiiro-yellow/20">
                <h2 className="text-2xl md:text-3xl font-bold text-off-white mb-6">Conclusion</h2>
                <p className="text-off-white/80 text-lg leading-relaxed mb-6">
                  Building a quality email list requires strategic planning, effective lead magnets, and continuous optimization. Start with these fundamentals and refine based on your specific audience and goals.
                </p>
                <div className="flex items-center gap-2 text-kiiro-yellow">
                  <span className="text-2xl">🎯</span>
                  <p className="font-semibold">
                    Need help building your email list? We can help with lead capture strategy and implementation.
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
                    Need Help Building Your Email List?
                  </h3>

                  <p className="text-off-white/70 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                    Get expert strategy for email list building and lead capture optimization.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                    <Button
                      asChild
                      size="lg"
                      className="bg-kiiro-yellow text-charcoal-black hover:bg-kiiro-yellow/90 hover:shadow-lg hover:shadow-kiiro-yellow/25 transition-all duration-300"
                    >
                      <Link href="/contact">
                        <span className="font-semibold">Get Lead Capture Help</span>
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
                    ✅ Strategy • ✅ Form design • ✅ Integration • ✅ Optimization
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
