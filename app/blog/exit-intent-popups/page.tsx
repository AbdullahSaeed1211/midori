import { Metadata } from "next";
import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { ArticleJsonLd } from "@/components/seo/article-json-ld";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";

export const metadata: Metadata = {
  title: "Exit Intent Popups: Strategy and Implementation | kiiro.cx",
  description: "Learn how to effectively use exit intent popups to recover abandoning visitors. Discover timing, design, and implementation strategies that convert without frustrating users.",
  keywords: "exit intent popup, popup strategy, conversion optimization, website popups, lead capture, cart abandonment",
  authors: [{ name: "kiiro.cx" }],
  alternates: {
    canonical: 'https://kiiro.cx/blog/exit-intent-popups'
  },
  openGraph: {
    images: ["https://kiiro.cx/og/blog/exit-intent-popups.png"],

    type: "article",
    title: "Exit Intent Popups: Strategy and Implementation",
    description: "Learn how to effectively use exit intent popups to recover abandoning visitors.",
    siteName: "kiiro.cx",
    url: "https://kiiro.cx/blog/exit-intent-popups",
  },
  twitter: {
    card: "summary_large_image",
    title: "Exit Intent Popups: Strategy and Implementation | kiiro.cx",
    description: "Learn how to effectively use exit intent popups to recover abandoning visitors.",
  }
};

export default function ExitIntentPopups() {
  return (
    <main className="flex min-h-screen flex-col bg-charcoal-black">
      <Header />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://kiiro.cx" },
          { name: "Blog", url: "https://kiiro.cx/blog" },
          { name: "Exit Intent Popups: Strategy and Implementation | kiiro.cx", url: "https://kiiro.cx/blog/exit-intent-popups" }
        ]}
      />
      <ArticleJsonLd
        title="Exit Intent Popups: Strategy and Implementation | kiiro.cx"
        description="Learn how to effectively use exit intent popups to recover abandoning visitors. Discover timing, design, and implementation strategies."
        url="https://kiiro.cx/blog/exit-intent-popups"
        image="https://kiiro.cx/projects/kiiro.webp"
        datePublished="2025-11-15"
        dateModified="2025-11-15"
        keywords={[
          "exit intent popup",
          "popup strategy",
          "conversion optimization",
          "website popups",
          "lead capture",
          "cart abandonment",
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
                CRO
              </span>
              <div className="flex items-center gap-1 text-off-white/60 text-sm">
                <Calendar className="w-4 h-4" />
                November 15, 2025
              </div>
              <div className="flex items-center gap-1 text-off-white/60 text-sm">
                <Clock className="w-4 h-4" />
                12 min read
              </div>
            </div>

            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-off-white mb-8 leading-tight">
              Exit Intent Popups: Strategy and Implementation
            </h1>

            <p className="text-lg md:text-xl text-off-white/80 leading-relaxed mb-10 max-w-3xl">
              Exit intent popups are one of the most powerful tools in conversion rate optimization. When implemented correctly, they can recover up to 15% of abandoning visitors. Here's how to do it right.
            </p>

            <div className="flex flex-wrap items-center gap-6 mb-12 p-6 bg-gradient-to-r from-pink-500/10 to-transparent rounded-2xl border border-pink-500/20">
              <div className="flex items-center gap-2 text-pink-400">
                <Clock className="w-5 h-5" />
                <span className="font-semibold">12 min read</span>
              </div>
              <div className="flex items-center gap-4 text-sm text-off-white/70">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-pink-400 rounded-full"></span>
                  Strategy
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  Design
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  Implementation
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
                  <a href="#how-it-works" className="block text-off-white/70 hover:text-kiiro-yellow transition-colors text-sm ml-4">How Exit Intent Works</a>
                  <a href="#strategy" className="block text-off-white/70 hover:text-kiiro-yellow transition-colors text-sm ml-4">Popup Strategy</a>
                  <a href="#design" className="block text-off-white/70 hover:text-kiiro-yellow transition-colors text-sm ml-4">Design Best Practices</a>
                  <a href="#implementation" className="block text-off-white/70 hover:text-kiiro-yellow transition-colors text-sm ml-4">Implementation Tips</a>
                  <a href="#testing" className="block text-off-white/70 hover:text-kiiro-yellow transition-colors text-sm ml-4">Testing & Optimization</a>
                </nav>
              </div>

              <h2 id="introduction" className="text-2xl md:text-3xl font-bold text-off-white mb-6 mt-12 first:mt-0">Introduction</h2>
              <p className="text-off-white/80 text-lg leading-relaxed mb-8">
                Exit intent technology detects when a user is about to leave your website and displays a targeted message at that critical moment. It's one of the few opportunities to engage visitors who have decided to leave, making it incredibly valuable for capturing leads and recovering sales.
              </p>
              <p className="text-off-white/80 text-lg leading-relaxed mb-8">
                However, poorly implemented exit popups can frustrate users and damage your brand. This guide covers how to use exit intent effectively without creating negative user experiences.
              </p>

              <h2 id="how-it-works" className="text-2xl md:text-3xl font-bold text-off-white mb-6 mt-12">How Exit Intent Works</h2>
              <p className="text-off-white/80 text-lg leading-relaxed mb-8">
                Exit intent detection uses mouse movement tracking to identify when a user's cursor moves toward the browser's close button or navigation area. The technology detects this behavior pattern and triggers your popup before the user actually leaves.
              </p>

              <div className="mb-10 p-6 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-2xl border border-blue-500/20">
                <h3 className="text-xl font-bold text-blue-400 mb-4 flex items-center gap-2">
                  <span className="text-2xl">🎯</span>
                  Exit Intent Triggers
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Mouse movement toward browser chrome</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Cursor leaving the viewport area</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Activity on browser tabs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Mobile "back gesture" detection</span>
                  </li>
                </ul>
              </div>

              <h2 id="strategy" className="text-2xl md:text-3xl font-bold text-off-white mb-6 mt-12">Popup Strategy</h2>
              <p className="text-off-white/80 text-lg leading-relaxed mb-8">
                The key to successful exit intent is offering genuine value. Users are more likely to engage with your popup if they see a clear benefit.
              </p>

              <div className="mb-10 p-6 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl border border-purple-500/20">
                <h3 className="text-xl font-bold text-purple-400 mb-4 flex items-center gap-2">
                  <span className="text-2xl">💎</span>
                  High-Converting Popup Offers
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90"><strong>Discount code:</strong> 10-20% off first order</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90"><strong>Free resource:</strong> Ebook, guide, or template</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90"><strong>Free shipping:</strong> Remove purchase barrier</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90"><strong>Newsletter signup:</strong> Exclusive content or early access</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90"><strong>Abandoned cart recovery:</strong> Reminder with incentive</span>
                  </li>
                </ul>
              </div>

              <div className="mb-10 p-6 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-2xl border border-green-500/20">
                <h3 className="text-xl font-bold text-green-400 mb-4 flex items-center gap-2">
                  <span className="text-2xl">⚠️</span>
                  When NOT to Show Exit Intent
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">After user has already closed a previous popup</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">On pages with very short visit duration</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">For users who have already converted</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Too frequently (once per session maximum)</span>
                  </li>
                </ul>
              </div>

              <h2 id="design" className="text-2xl md:text-3xl font-bold text-off-white mb-6 mt-12">Design Best Practices</h2>
              <p className="text-off-white/80 text-lg leading-relaxed mb-8">
                The design of your exit popup significantly impacts conversion rates. Follow these guidelines for maximum effectiveness.
              </p>

              <div className="mb-10 p-6 bg-gradient-to-r from-orange-500/10 to-yellow-500/10 rounded-2xl border border-orange-500/20">
                <h3 className="text-xl font-bold text-orange-400 mb-4 flex items-center gap-2">
                  <span className="text-2xl">🎨</span>
                  Design Requirements
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Clean, focused design with single call to action</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Compelling headline that addresses the leaving user</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Easy-to-close (X button prominent)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Mobile-responsive design</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">High contrast for key elements</span>
                  </li>
                </ul>
              </div>

              <h2 id="implementation" className="text-2xl md:text-3xl font-bold text-off-white mb-6 mt-12">Implementation Tips</h2>
              <p className="text-off-white/80 text-lg leading-relaxed mb-8">
                Proper implementation ensures your popups work effectively without causing technical issues or negative user experiences.
              </p>

              <div className="mb-10 p-6 bg-gradient-to-r from-cyan-500/10 to-teal-500/10 rounded-2xl border border-cyan-500/20">
                <h3 className="text-xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
                  <span className="text-2xl">⚙️</span>
                  Technical Implementation
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Delay popup appearance by 1-2 seconds</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Set frequency caps (once per session)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Don't show to users who have converted</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Test on all devices and browsers</span>
                  </li>
                </ul>
              </div>

              <h2 id="testing" className="text-2xl md:text-3xl font-bold text-off-white mb-6 mt-12">Testing & Optimization</h2>
              <p className="text-off-white/80 text-lg leading-relaxed mb-8">
                Exit intent popups require ongoing optimization to maximize their effectiveness.
              </p>

              <div className="mb-10 p-6 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-2xl border border-indigo-500/20">
                <h3 className="text-xl font-bold text-indigo-400 mb-4 flex items-center gap-2">
                  <span className="text-2xl">🧪</span>
                  Optimization Checklist
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">A/B test headlines and offers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Test different discount percentages</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Experiment with popup timing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Monitor exit intent triggered vs converted</span>
                  </li>
                </ul>
              </div>

              <div className="mb-12 p-8 bg-gradient-to-r from-kiiro-yellow/10 to-yellow-500/10 rounded-2xl border border-kiiro-yellow/20">
                <h2 className="text-2xl md:text-3xl font-bold text-off-white mb-6">Conclusion</h2>
                <p className="text-off-white/80 text-lg leading-relaxed mb-6">
                  Exit intent popups are a powerful conversion tool when implemented thoughtfully. Focus on providing genuine value, respect user experience, and continuously test to optimize performance.
                </p>
                <div className="flex items-center gap-2 text-kiiro-yellow">
                  <span className="text-2xl">🎯</span>
                  <p className="font-semibold">
                    Need help implementing effective exit intent popups? We specialize in conversion optimization.
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
                    Need Help with Exit Intent Popups?
                  </h3>

                  <p className="text-off-white/70 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                    Get expert implementation and optimization for your exit intent strategy.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                    <Button
                      asChild
                      size="lg"
                      className="bg-kiiro-yellow text-charcoal-black hover:bg-kiiro-yellow/90 hover:shadow-lg hover:shadow-kiiro-yellow/25 transition-all duration-300"
                    >
                      <Link href="/contact">
                        <span className="font-semibold">Get Popup Strategy</span>
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
                    ✅ Strategy • ✅ Design • ✅ Implementation • ✅ Testing
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
