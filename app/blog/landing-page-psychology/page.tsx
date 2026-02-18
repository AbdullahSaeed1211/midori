import { Metadata } from "next";
import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { ArticleJsonLd } from "@/components/seo/article-json-ld";

export const metadata: Metadata = {
  title: "The Psychology of Landing Page Conversions | kiiro.cx",
  description: "Discover the psychological principles behind high-converting landing pages. Learn about cognitive load, social proof, urgency triggers, and strategic CTA placement backed by research.",
  keywords: "landing page psychology, conversion rate optimization, CRO, cognitive load, social proof, CTA placement, persuasion design",
  authors: [{ name: "kiiro.cx" }],
  alternates: {
    canonical: 'https://kiiro.cx/blog/landing-page-psychology'
  },
  openGraph: {
    images: ["https://kiiro.cx/og/blog/landing-page-psychology.png"],

    type: "article",
    title: "The Psychology of Landing Page Conversions",
    description: "Discover the psychological principles behind high-converting landing pages. Learn about cognitive load, social proof, and strategic CTA placement.",
    siteName: "kiiro.cx",
    url: "https://kiiro.cx/blog/landing-page-psychology",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Psychology of Landing Page Conversions | kiiro.cx",
    description: "Learn the psychological principles behind high-converting landing pages.",
  }
};

export default function LandingPagePsychology() {
  return (
    <main className="flex min-h-screen flex-col bg-charcoal-black">
      <Header />
      <ArticleJsonLd
        title="The Psychology of Landing Page Conversions | kiiro.cx"
        description="Discover the psychological principles behind high-converting landing pages. Learn about cognitive load, social proof, urgency triggers, and strategic CTA placement backed by research."
        url="https://kiiro.cx/blog/landing-page-psychology"
        image="https://kiiro.cx/projects/kiiro.webp"
        datePublished="2025-04-10"
        dateModified="2025-04-10"
        keywords={[
          "landing page psychology",
          "conversion rate optimization",
          "CRO",
          "cognitive load",
          "social proof",
          "CTA placement",
          "persuasion design",
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
              <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-sm font-medium rounded-full">
                CRO
              </span>
              <div className="flex items-center gap-1 text-off-white/60 text-sm">
                <Calendar className="w-4 h-4" />
                April 10, 2025
              </div>
              <div className="flex items-center gap-1 text-off-white/60 text-sm">
                <Clock className="w-4 h-4" />
                15 min read
              </div>
            </div>

            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-off-white mb-8 leading-tight">
              The Psychology of Landing Page Conversions
            </h1>

            <p className="text-lg md:text-xl text-off-white/80 leading-relaxed mb-10 max-w-3xl">
              Understanding how the human mind processes information and makes decisions is the foundation of high-converting landing pages. Explore the psychological principles that drive conversions.
            </p>

            <div className="flex flex-wrap items-center gap-6 mb-12 p-6 bg-gradient-to-r from-blue-500/10 to-transparent rounded-2xl border border-blue-500/20">
              <div className="flex items-center gap-2 text-blue-400">
                <Clock className="w-5 h-5" />
                <span className="font-semibold">15 min read</span>
              </div>
              <div className="flex items-center gap-4 text-sm text-off-white/70">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  Cognitive Load
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  Social Proof
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                  Trust Signals
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
                  <a href="#cognitive-load" className="block text-off-white/70 hover:text-kiiro-yellow transition-colors text-sm ml-4">Cognitive Load and Decision Making</a>
                  <a href="#social-proof" className="block text-off-white/70 hover:text-kiiro-yellow transition-colors text-sm ml-4">The Power of Social Proof</a>
                  <a href="#urgency-scarcity" className="block text-off-white/70 hover:text-kiiro-yellow transition-colors text-sm ml-4">Urgency and Scarcity Triggers</a>
                  <a href="#trust-signals" className="block text-off-white/70 hover:text-kiiro-yellow transition-colors text-sm ml-4">Trust Signals That Convert</a>
                  <a href="#cta-placement" className="block text-off-white/70 hover:text-kiiro-yellow transition-colors text-sm ml-4">Strategic CTA Placement</a>
                </nav>
              </div>

              <h2 id="introduction" className="text-2xl md:text-3xl font-bold text-off-white mb-6 mt-12 first:mt-0">Introduction</h2>
              <p className="text-off-white/80 text-lg leading-relaxed mb-8">
                Every click, scroll, and conversion on your landing page is the result of complex psychological processes. By understanding how the human brain processes information, handles decisions, and responds to persuasive elements, you can design landing pages that align with natural cognitive patterns rather than fighting against them.
              </p>
              <p className="text-off-white/80 text-lg leading-relaxed mb-8">
                Research from the Nielsen Norman Group shows that users form their first impression of a website in just 50 milliseconds. This means your landing page must communicate value and credibility almost instantly, before conscious thought even begins.
              </p>

              <h2 id="cognitive-load" className="text-2xl md:text-3xl font-bold text-off-white mb-6 mt-12">Cognitive Load and Decision Making</h2>
              <p className="text-off-white/80 text-lg leading-relaxed mb-8">
                Cognitive load theory, originally developed by educational psychologist John Sweller, explains how our working memory has limited capacity. When a landing page overwhelms this capacity, visitors experience decision paralysis and often abandon the page entirely.
              </p>

              <div className="mb-10 p-6 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-2xl border border-green-500/20">
                <h3 className="text-xl font-bold text-green-400 mb-4 flex items-center gap-2">
                  <span className="text-2xl">🧠</span>
                  The Hick-Hyman Law
                </h3>
                <p className="text-off-white/80 mb-6">
                  The time it takes to make a decision increases logarithmically with the number of choices. Research shows:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-off-white">Two options:</strong>
                      <span className="text-off-white/70 ml-1">Decisions made in approximately 0.3 seconds</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-off-white">Five options:</strong>
                      <span className="text-off-white/70 ml-1">Decision time increases to approximately 0.7 seconds</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-off-white">Ten options:</strong>
                      <span className="text-off-white/70 ml-1">Decision time can exceed 1.5 seconds</span>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="mb-10 p-6 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-2xl border border-blue-500/20">
                <h3 className="text-xl font-bold text-blue-400 mb-4 flex items-center gap-2">
                  <span className="text-2xl">📉</span>
                  Reducing Cognitive Load
                </h3>
                <p className="text-off-white/80 mb-6">
                  Apply these evidence-based strategies to minimize mental effort:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Use progressive disclosure to reveal information in layers as needed</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Limit navigation to 5-7 primary options maximum</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Use visual hierarchy to guide attention naturally</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Chunk related information into digestible groups</span>
                  </li>
                </ul>
              </div>

              <h2 id="social-proof" className="text-2xl md:text-3xl font-bold text-off-white mb-6 mt-12">The Power of Social Proof</h2>
              <p className="text-off-white/80 text-lg leading-relaxed mb-8">
                Robert Cialdini identified social proof as one of the six key principles of persuasion. When people are uncertain, they look to the behavior of others to guide their own decisions.
              </p>

              <div className="mb-10 p-6 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl border border-purple-500/20">
                <h3 className="text-xl font-bold text-purple-400 mb-4 flex items-center gap-2">
                  <span className="text-2xl">📊</span>
                  Social Proof Statistics
                </h3>
                <p className="text-off-white/80 mb-6">
                  Studies demonstrate the conversion impact of social proof:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-off-white">70% of consumers</strong>
                      <span className="text-off-white/70 ml-1">look at product reviews before making a purchase (Spiegel Research)</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-off-white">Reviews increase conversions</strong>
                      <span className="text-off-white/70 ml-1">by 270% for higher-priced items</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-off-white">User-generated content</strong>
                      <span className="text-off-white/70 ml-1">drives 29% higher conversion rates (Stackla)</span>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="mb-10 p-6 bg-gradient-to-r from-orange-500/10 to-yellow-500/10 rounded-2xl border border-orange-500/20">
                <h3 className="text-xl font-bold text-orange-400 mb-4 flex items-center gap-2">
                  <span className="text-2xl">🏆</span>
                  Types of Social Proof
                </h3>
                <p className="text-off-white/80 mb-6">
                  Different forms of social proof work for different contexts:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-off-white">Customer testimonials:</strong>
                      <span className="text-off-white/70 ml-1">Specific stories with names, photos, and results</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-off-white">User numbers:</strong>
                      <span className="text-off-white/70 ml-1">Join 50,000+ marketers builds perceived popularity</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-off-white">Expert endorsements:</strong>
                      <span className="text-off-white/70 ml-1">Authority figures lend credibility to your claims</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-off-white">Certifications and badges:</strong>
                      <span className="text-off-white/70 ml-1">Third-party validation from trusted organizations</span>
                    </div>
                  </li>
                </ul>
              </div>

              <h2 id="urgency-scarcity" className="text-2xl md:text-3xl font-bold text-off-white mb-6 mt-12">Urgency and Scarcity Triggers</h2>
              <p className="text-off-white/80 text-lg leading-relaxed mb-8">
                The fear of missing out (FOMO) is a powerful psychological motivator. When people perceive something as scarce or time-limited, its perceived value increases, and action becomes more compelling.
              </p>

              <div className="mb-10 p-6 bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-2xl border border-red-500/20">
                <h3 className="text-xl font-bold text-red-400 mb-4 flex items-center gap-2">
                  <span className="text-2xl">⏰</span>
                  Effective Urgency Tactics
                </h3>
                <p className="text-off-white/80 mb-6">
                  Research-backed approaches to creating genuine urgency:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Use countdown timers for genuine deadlines like limited-time offers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Display remaining inventory when quantities are actually limited</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Show real-time purchase notifications with genuine data</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Create enrollment windows for programs or services</span>
                  </li>
                </ul>
              </div>

              <div className="mb-10 p-6 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-2xl border border-indigo-500/20">
                <h3 className="text-xl font-bold text-indigo-400 mb-4 flex items-center gap-2">
                  <span className="text-2xl">⚠️</span>
                  Authenticity Warning
                </h3>
                <p className="text-off-white/80">
                  False scarcity damages trust and can lead to legal issues. The Federal Trade Commission has taken action against companies that fake urgency cues. Only use scarcity and urgency when they reflect real limitations. Modern consumers are increasingly savvy at detecting artificial pressure tactics.
                </p>
              </div>

              <h2 id="trust-signals" className="text-2xl md:text-3xl font-bold text-off-white mb-6 mt-12">Trust Signals That Convert</h2>
              <p className="text-off-white/80 text-lg leading-relaxed mb-8">
                Trust is the foundation of every online conversion. Without it, even the most compelling offer will fail. Research from the Baymard Institute shows that 17% of cart abandonments are due to a lack of trust in providing credit card information.
              </p>

              <div className="mb-10 p-6 bg-gradient-to-r from-cyan-500/10 to-teal-500/10 rounded-2xl border border-cyan-500/20">
                <h3 className="text-xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
                  <span className="text-2xl">🔒</span>
                  Essential Trust Elements
                </h3>
                <p className="text-off-white/80 mb-6">
                  High-converting landing pages consistently include these trust signals:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-off-white">Security badges:</strong>
                      <span className="text-off-white/70 ml-1">SSL certificates, payment provider logos, security seals</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-off-white">Guarantee policies:</strong>
                      <span className="text-off-white/70 ml-1">Money-back guarantees reduce perceived risk by up to 21%</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-off-white">Contact information:</strong>
                      <span className="text-off-white/70 ml-1">Physical address and phone number increase credibility</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-off-white">Press mentions:</strong>
                      <span className="text-off-white/70 ml-1">As featured in sections with publication logos</span>
                    </div>
                  </li>
                </ul>
              </div>

              <h2 id="cta-placement" className="text-2xl md:text-3xl font-bold text-off-white mb-6 mt-12">Strategic CTA Placement</h2>
              <p className="text-off-white/80 text-lg leading-relaxed mb-8">
                The placement, design, and copy of your call-to-action buttons significantly impact conversion rates. Eye-tracking studies reveal how users scan pages and where their attention naturally settles.
              </p>

              <div className="mb-10 p-6 bg-gradient-to-r from-pink-500/10 to-rose-500/10 rounded-2xl border border-pink-500/20">
                <h3 className="text-xl font-bold text-pink-400 mb-4 flex items-center gap-2">
                  <span className="text-2xl">🎯</span>
                  CTA Best Practices
                </h3>
                <p className="text-off-white/80 mb-6">
                  Research-backed strategies for effective calls-to-action:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-off-white">Above the fold:</strong>
                      <span className="text-off-white/70 ml-1">Primary CTA should be visible without scrolling</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-off-white">Action-oriented copy:</strong>
                      <span className="text-off-white/70 ml-1">Get Your Free Guide outperforms Submit by 32%</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-off-white">Contrast and size:</strong>
                      <span className="text-off-white/70 ml-1">CTAs should stand out visually from surrounding elements</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-off-white">Strategic repetition:</strong>
                      <span className="text-off-white/70 ml-1">Multiple CTAs throughout long pages capture different scroll depths</span>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="mb-12 p-8 bg-gradient-to-r from-kiiro-yellow/10 to-yellow-500/10 rounded-2xl border border-kiiro-yellow/20">
                <h2 className="text-2xl md:text-3xl font-bold text-off-white mb-6">Conclusion</h2>
                <p className="text-off-white/80 text-lg leading-relaxed mb-6">
                  The psychology of conversions is rooted in understanding how humans think, feel, and make decisions. By reducing cognitive load, leveraging social proof, creating authentic urgency, building trust, and strategically placing CTAs, you can create landing pages that work with human psychology rather than against it.
                </p>
                <div className="flex items-center gap-2 text-kiiro-yellow">
                  <span className="text-2xl">🎯</span>
                  <p className="font-semibold">
                    Remember: the best landing pages feel effortless to use. When you reduce friction and align with natural cognitive patterns, conversions follow naturally.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-16 pt-12 border-t border-white/10">
              <div className="bg-gradient-to-br from-charcoal-gray/95 to-charcoal-gray/90 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-kiiro-yellow/5 via-transparent to-blue-500/5 opacity-50" />
                <div className="absolute top-0 right-0 w-32 h-32 bg-kiiro-yellow/10 rounded-full -translate-y-16 translate-x-16" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-500/10 rounded-full translate-y-12 -translate-x-12" />

                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-kiiro-yellow/10 text-kiiro-yellow text-sm font-medium rounded-full border border-kiiro-yellow/20 mb-6">
                    🚀 Ready to Take Action?
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-off-white mb-4">
                    Ready to Improve Your Conversion Rates?
                  </h3>

                  <p className="text-off-white/70 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                    Get a comprehensive CRO audit with psychology-backed recommendations for transforming your landing pages into conversion machines.
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
                    ✅ Psychology-based analysis ✅ Actionable recommendations ✅ ROI-focused approach
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
