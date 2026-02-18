import { Metadata } from "next";
import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { ArticleJsonLd } from "@/components/seo/article-json-ld";

export const metadata: Metadata = {
  title: "Lead Generation Websites: Architecture That Works | kiiro.cx",
  description: "Learn the proven architecture patterns for high-converting lead generation websites. From landing page structure to form optimization, discover what drives more qualified leads.",
  keywords: "lead generation website, conversion architecture, landing page design, b2b lead generation, lead capture optimization, website conversion",
  authors: [{ name: "kiiro.cx" }],
  alternates: {
    canonical: 'https://kiiro.cx/blog/lead-generation-architecture'
  },
  openGraph: {
    images: ["https://kiiro.cx/og/blog/lead-generation-architecture.png"],

    type: "article",
    title: "Lead Generation Websites: Architecture That Works",
    description: "Learn the proven architecture patterns for high-converting lead generation websites.",
    siteName: "kiiro.cx",
    url: "https://kiiro.cx/blog/lead-generation-architecture",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lead Generation Websites: Architecture That Works | kiiro.cx",
    description: "Learn the proven architecture patterns for high-converting lead generation websites.",
  }
};

export default function LeadGenerationArchitecture() {
  return (
    <main className="flex min-h-screen flex-col bg-charcoal-black">
      <Header />
      <ArticleJsonLd
        title="Lead Generation Websites: Architecture That Works | kiiro.cx"
        description="Learn the proven architecture patterns for high-converting lead generation websites. From landing page structure to form optimization, discover what drives more qualified leads."
        url="https://kiiro.cx/blog/lead-generation-architecture"
        image="https://kiiro.cx/projects/kiiro.webp"
        datePublished="2025-08-10"
        dateModified="2025-08-10"
        keywords={[
          "lead generation website",
          "conversion architecture",
          "landing page design",
          "b2b lead generation",
          "lead capture optimization",
          "website conversion",
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
                August 10, 2025
              </div>
              <div className="flex items-center gap-1 text-off-white/60 text-sm">
                <Clock className="w-4 h-4" />
                15 min read
              </div>
            </div>

            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-off-white mb-8 leading-tight">
              Lead Generation Websites: Architecture That Works
            </h1>

            <p className="text-lg md:text-xl text-off-white/80 leading-relaxed mb-10 max-w-3xl">
              The difference between a website that generates leads and one that doesn't often comes down to architecture. Discover the structural decisions that separate high-converting lead gen sites from the rest.
            </p>

            <div className="flex flex-wrap items-center gap-6 mb-12 p-6 bg-gradient-to-r from-purple-500/10 to-transparent rounded-2xl border border-purple-500/20">
              <div className="flex items-center gap-2 text-purple-400">
                <Clock className="w-5 h-5" />
                <span className="font-semibold">15 min read</span>
              </div>
              <div className="flex items-center gap-4 text-sm text-off-white/70">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                  Architecture
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  Conversion
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  Strategy
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
                  <a href="#foundation" className="block text-off-white/70 hover:text-kiiro-yellow transition-colors text-sm ml-4">Foundation: Site Structure</a>
                  <a href="#landing-pages" className="block text-off-white/70 hover:text-kiiro-yellow transition-colors text-sm ml-4">Landing Page Architecture</a>
                  <a href="#navigation" className="block text-off-white/70 hover:text-kiiro-yellow transition-colors text-sm ml-4">Navigation & User Flow</a>
                  <a href="#forms" className="block text-off-white/70 hover:text-kiiro-yellow transition-colors text-sm ml-4">Form Architecture</a>
                  <a href="#trust" className="block text-off-white/70 hover:text-kiiro-yellow transition-colors text-sm ml-4">Trust & Credibility Elements</a>
                </nav>
              </div>

              <h2 id="introduction" className="text-2xl md:text-3xl font-bold text-off-white mb-6 mt-12 first:mt-0">Introduction</h2>
              <p className="text-off-white/80 text-lg leading-relaxed mb-8">
                Every business website has a primary goal: convert visitors into leads or customers. Yet many websites fail at this fundamental objective because their architecture works against conversion rather than supporting it. The way you structure your site, organize content, and guide users through the conversion funnel directly impacts how many leads you generate.
              </p>
              <p className="text-off-white/80 text-lg leading-relaxed mb-8">
                In this guide, we'll examine the architectural principles that drive lead generation success. These aren't surface-level design tips—they're structural decisions that affect every page and interaction on your site.
              </p>

              <h2 id="foundation" className="text-2xl md:text-3xl font-bold text-off-white mb-6 mt-12">Foundation: Site Structure</h2>
              <p className="text-off-white/80 text-lg leading-relaxed mb-8">
                Your website structure communicates your value proposition and guides visitors toward conversion. A well-organized site reduces friction and helps users find the information they need to make a decision.
              </p>

              <div className="mb-10 p-6 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl border border-purple-500/20">
                <h3 className="text-xl font-bold text-purple-400 mb-4 flex items-center gap-2">
                  <span className="text-2xl">🏗️</span>
                  Core Architecture Principles
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-off-white">Clear value proposition above the fold:</strong>
                      <span className="text-off-white/70 ml-1">Visitors should understand what you offer within seconds</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-off-white">Logical content hierarchy:</strong>
                      <span className="text-off-white/70 ml-1">Information should flow from problem to solution in a clear sequence</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-off-white">Minimal page depth:</strong>
                      <span className="text-off-white/70 ml-1">Users should reach conversion points in 3 clicks or fewer</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-off-white">Clear CTAs on every page:</strong>
                      <span className="text-off-white/70 ml-1">Never leave a visitor wondering what to do next</span>
                    </div>
                  </li>
                </ul>
              </div>

              <h2 id="landing-pages" className="text-2xl md:text-3xl font-bold text-off-white mb-6 mt-12">Landing Page Architecture</h2>
              <p className="text-off-white/80 text-lg leading-relaxed mb-8">
                Landing pages are your highest-value conversion pages. Their architecture should eliminate distractions and focus entirely on the conversion goal.
              </p>

              <div className="mb-10 p-6 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-2xl border border-green-500/20">
                <h3 className="text-xl font-bold text-green-400 mb-4 flex items-center gap-2">
                  <span className="text-2xl">🎯</span>
                  High-Converting Landing Page Structure
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90"><strong>Hero Section:</strong> Headline, subheadline, and primary CTA above the fold</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90"><strong>Social Proof Bar:</strong> Logos of current clients or trust badges immediately following the hero</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90"><strong>Problem/Agitation:</strong> Describe the pain point your solution addresses</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90"><strong>Solution Presentation:</strong> How your product or service solves the problem</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90"><strong>Benefits Breakdown:</strong> Key benefits in scannable format (icons + short text)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90"><strong>Testimonials:</strong> Specific, results-oriented client quotes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90"><strong>Final CTA:</strong> One last push to convert before the footer</span>
                  </li>
                </ul>
              </div>

              <div className="mb-10 p-6 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-2xl border border-blue-500/20">
                <h3 className="text-xl font-bold text-blue-400 mb-4 flex items-center gap-2">
                  <span className="text-2xl">⚠️</span>
                  Common Landing Page Mistakes
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Navigation menus that allow users to leave the page</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Multiple competing CTAs that confuse the user</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Too much information that overwhelms instead of convinces</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Weak or absent social proof</span>
                  </li>
                </ul>
              </div>

              <h2 id="navigation" className="text-2xl md:text-3xl font-bold text-off-white mb-6 mt-12">Navigation & User Flow</h2>
              <p className="text-off-white/80 text-lg leading-relaxed mb-8">
                Navigation should guide users toward conversion without requiring them to think. Every navigation decision should consider the user's journey from awareness to decision.
              </p>

              <div className="mb-10 p-6 bg-gradient-to-r from-orange-500/10 to-yellow-500/10 rounded-2xl border border-orange-500/20">
                <h3 className="text-xl font-bold text-orange-400 mb-4 flex items-center gap-2">
                  <span className="text-2xl">🧭</span>
                  Navigation Best Practices
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Place primary CTAs in the top-right of the header consistently</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Limit main navigation to 5-7 items maximum</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Use descriptive CTA labels ("Get Your Free Quote" vs "Submit")</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Include secondary CTAs in the footer on every page</span>
                  </li>
                </ul>
              </div>

              <h2 id="forms" className="text-2xl md:text-3xl font-bold text-off-white mb-6 mt-12">Form Architecture</h2>
              <p className="text-off-white/80 text-lg leading-relaxed mb-8">
                Forms are the critical interface between your website and lead capture. Form architecture directly affects both conversion rate and lead quality.
              </p>

              <div className="mb-10 p-6 bg-gradient-to-r from-cyan-500/10 to-teal-500/10 rounded-2xl border border-cyan-500/20">
                <h3 className="text-xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
                  <span className="text-2xl">📝</span>
                  Form Optimization Principles
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-off-white">Minimize fields:</strong>
                      <span className="text-off-white/70 ml-1">Every additional field reduces conversion by 3-5%</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-off-white">Progressive profiling:</strong>
                      <span className="text-off-white/70 ml-1">Ask for more information on subsequent interactions</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-off-white">Smart defaults:</strong>
                      <span className="text-off-white/70 ml-1">Pre-fill known information and provide helpful suggestions</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-off-white">Inline validation:</strong>
                      <span className="text-off-white/70 ml-1">Show errors immediately, not after submission</span>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="mb-10 p-6 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-2xl border border-indigo-500/20">
                <h3 className="text-xl font-bold text-indigo-400 mb-4 flex items-center gap-2">
                  <span className="text-2xl">💡</span>
                  Form Field Recommendations
                </h3>
                <p className="text-off-white/80 mb-6">
                  For maximum conversion, prioritize these fields:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Email (required for virtually all lead gen)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Name (personalizes the follow-up)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Company (if B2B)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">One qualification question (budget, timeline, or need)</span>
                  </li>
                </ul>
              </div>

              <h2 id="trust" className="text-2xl md:text-3xl font-bold text-off-white mb-6 mt-12">Trust & Credibility Architecture</h2>
              <p className="text-off-white/80 text-lg leading-relaxed mb-8">
                Trust elements should be architecturally integrated throughout your site, not just on a dedicated "testimonials" page.
              </p>

              <div className="mb-10 p-6 bg-gradient-to-r from-pink-500/10 to-rose-500/10 rounded-2xl border border-pink-500/20">
                <h3 className="text-xl font-bold text-pink-400 mb-4 flex items-center gap-2">
                  <span className="text-2xl">🛡️</span>
                  Trust Elements by Page Position
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90"><strong>Header:</strong> Security badges, industry certifications</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90"><strong>Hero:</strong> Featured client logos, "trusted by" statement</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90"><strong>Content pages:</strong> Author bios, source citations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90"><strong>Forms:</strong> Privacy statement, "No spam" guarantee</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90"><strong>Footer:</strong> Contact information, business hours, physical address</span>
                  </li>
                </ul>
              </div>

              <div className="mb-12 p-8 bg-gradient-to-r from-kiiro-yellow/10 to-yellow-500/10 rounded-2xl border border-kiiro-yellow/20">
                <h2 className="text-2xl md:text-3xl font-bold text-off-white mb-6">Conclusion</h2>
                <p className="text-off-white/80 text-lg leading-relaxed mb-6">
                  Lead generation architecture isn't about tricks or hacks—it's about systematically removing friction and building trust at every step of the user journey. The principles in this guide apply regardless of your industry or business model.
                </p>
                <div className="flex items-center gap-2 text-kiiro-yellow">
                  <span className="text-2xl">🎯</span>
                  <p className="font-semibold">
                    Ready to optimize your website for lead generation? Start with a conversion audit to identify the biggest opportunities.
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
                    Need Help Optimizing for Lead Generation?
                  </h3>

                  <p className="text-off-white/70 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                    Get a comprehensive audit of your lead generation architecture with specific recommendations.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                    <Button
                      asChild
                      size="lg"
                      className="bg-kiiro-yellow text-charcoal-black hover:bg-kiiro-yellow/90 hover:shadow-lg hover:shadow-kiiro-yellow/25 transition-all duration-300"
                    >
                      <Link href="/contact">
                        <span className="font-semibold">Get Lead Gen Consultation</span>
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
                    ✅ Conversion analysis • ✅ Architecture recommendations • ✅ Implementation guidance
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
