import { Metadata } from "next";
import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { ArticleJsonLd } from "@/components/seo/article-json-ld";

export const metadata: Metadata = {
  title: "Google Analytics 4: Complete Setup Guide for 2025 | kiiro.cx",
  description: "Complete guide to setting up Google Analytics 4 for your website. Learn about the new event-based tracking model, enhanced measurement, and GA4 vs Universal Analytics differences.",
  keywords: "Google Analytics 4, GA4 setup, GA4 vs Universal Analytics, event tracking, Google Analytics 2025, website analytics",
  authors: [{ name: "kiiro.cx" }],
  alternates: {
    canonical: 'https://kiiro.cx/blog/google-analytics-4-setup'
  },
  openGraph: {
    images: ["https://kiiro.cx/og/blog/google-analytics-4-setup.png"],

    type: "article",
    title: "Google Analytics 4: Complete Setup Guide for 2025",
    description: "Complete guide to setting up Google Analytics 4 for your website. Learn about the new event-based tracking model and enhanced measurement.",
    siteName: "kiiro.cx",
    url: "https://kiiro.cx/blog/google-analytics-4-setup",
  },
  twitter: {
    card: "summary_large_image",
    title: "Google Analytics 4: Complete Setup Guide for 2025 | kiiro.cx",
    description: "Complete guide to setting up Google Analytics 4 for your website.",
  }
};

export default function GoogleAnalytics4Setup() {
  return (
    <main className="flex min-h-screen flex-col bg-charcoal-black">
      <Header />
      <ArticleJsonLd
        title="Google Analytics 4: Complete Setup Guide for 2025 | kiiro.cx"
        description="Complete guide to setting up Google Analytics 4 for your website. Learn about the new event-based tracking model, enhanced measurement, and GA4 vs Universal Analytics differences."
        url="https://kiiro.cx/blog/google-analytics-4-setup"
        image="https://kiiro.cx/projects/kiiro.webp"
        datePublished="2025-06-15"
        dateModified="2025-06-15"
        keywords={[
          "Google Analytics 4",
          "GA4 setup",
          "GA4 vs Universal Analytics",
          "event tracking",
          "Google Analytics 2025",
          "website analytics",
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
                SEO
              </span>
              <div className="flex items-center gap-1 text-off-white/60 text-sm">
                <Calendar className="w-4 h-4" />
                June 15, 2025
              </div>
              <div className="flex items-center gap-1 text-off-white/60 text-sm">
                <Clock className="w-4 h-4" />
                16 min read
              </div>
            </div>

            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-off-white mb-8 leading-tight">
              Google Analytics 4: Complete Setup Guide for 2025
            </h1>

            <p className="text-lg md:text-xl text-off-white/80 leading-relaxed mb-10 max-w-3xl">
              Google Analytics 4 has become the standard for website tracking in 2025. This comprehensive guide walks you through the complete setup process, from creating your property to configuring advanced event tracking.
            </p>

            <div className="flex flex-wrap items-center gap-6 mb-12 p-6 bg-gradient-to-r from-blue-500/10 to-transparent rounded-2xl border border-blue-500/20">
              <div className="flex items-center gap-2 text-blue-400">
                <Clock className="w-5 h-5" />
                <span className="font-semibold">16 min read</span>
              </div>
              <div className="flex items-center gap-4 text-sm text-off-white/70">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  GA4 Setup
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  Event Tracking
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                  Best Practices
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
                  <a href="#ga4-basics" className="block text-off-white/70 hover:text-kiiro-yellow transition-colors text-sm ml-4">Understanding GA4 Basics</a>
                  <a href="#property-setup" className="block text-off-white/70 hover:text-kiiro-yellow transition-colors text-sm ml-4">Creating Your GA4 Property</a>
                  <a href="#installation" className="block text-off-white/70 hover:text-kiiro-yellow transition-colors text-sm ml-4">Installation Methods</a>
                  <a href="#enhanced-measurement" className="block text-off-white/70 hover:text-kiiro-yellow transition-colors text-sm ml-4">Enhanced Measurement</a>
                  <a href="#events-configuration" className="block text-off-white/70 hover:text-kiiro-yellow transition-colors text-sm ml-4">Configuring Events</a>
                  <a href="#conversions" className="block text-off-white/70 hover:text-kiiro-yellow transition-colors text-sm ml-4">Setting Up Conversions</a>
                </nav>
              </div>

              <h2 id="introduction" className="text-2xl md:text-3xl font-bold text-off-white mb-6 mt-12 first:mt-0">Introduction</h2>
              <p className="text-off-white/80 text-lg leading-relaxed mb-8">
                Google Analytics 4 represents a fundamental shift in how we track website performance. Unlike its predecessor Universal Analytics, GA4 uses an event-based data model that provides more flexibility and deeper insights into user behavior. As of July 2025, Universal Analytics properties are no longer processing new data, making GA4 migration essential for anyone serious about understanding their website traffic.
              </p>
              <p className="text-off-white/80 text-lg leading-relaxed mb-8">
                This guide covers everything you need to set up GA4 correctly, from basic installation to advanced event configuration. Whether you're starting fresh or migrating from Universal Analytics, you'll find actionable steps to get the most out of Google's latest analytics platform.
              </p>

              <h2 id="ga4-basics" className="text-2xl md:text-3xl font-bold text-off-white mb-6 mt-12">Understanding GA4 Basics</h2>
              <p className="text-off-white/80 text-lg leading-relaxed mb-8">
                Before diving into setup, it's crucial to understand how GA4 differs from Universal Analytics. The most significant change is the event-based model. In GA4, every interaction is tracked as an event - page views, clicks, form submissions, video plays, and downloads all become events with optional parameters.
              </p>

              <div className="mb-10 p-6 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-2xl border border-blue-500/20">
                <h3 className="text-xl font-bold text-blue-400 mb-4 flex items-center gap-2">
                  <span className="text-2xl">🔑</span>
                  GA4 Key Concepts
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-off-white">Events:</strong>
                      <span className="text-off-white/70 ml-1">All user interactions are events - no more separate categories like "event", "ecommerce", and "user timing"</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-off-white">Parameters:</strong>
                      <span className="text-off-white/70 ml-1">Events can include up to 25 custom parameters for rich, granular data</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-off-white">User Properties:</strong>
                      <span className="text-off-white/70 ml-1">Demographic and behavioral attributes you can assign to users</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-off-white">Sessions:</strong>
                      <span className="text-off-white/70 ml-1">More flexible session handling with automatic sessionization</span>
                    </div>
                  </li>
                </ul>
              </div>

              <h2 id="property-setup" className="text-2xl md:text-3xl font-bold text-off-white mb-6 mt-12">Creating Your GA4 Property</h2>
              <p className="text-off-white/80 text-lg leading-relaxed mb-8">
                Setting up a new GA4 property is straightforward, but there are important decisions to make during the process. Start by signing into your Google Analytics account and creating a new property.
              </p>

              <div className="mb-10 p-6 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-2xl border border-green-500/20">
                <h3 className="text-xl font-bold text-green-400 mb-4 flex items-center gap-2">
                  <span className="text-2xl">⚙️</span>
                  Property Setup Checklist
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Choose the correct account - typically your business or client name</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Name your property clearly - include the website name and environment (prod/staging)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Select your reporting time zone - match your audience's primary location</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Set currency appropriately - affects ecommerce data visualization</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Enable data sharing settings based on your privacy requirements</span>
                  </li>
                </ul>
              </div>

              <h2 id="installation" className="text-2xl md:text-3xl font-bold text-off-white mb-6 mt-12">Installation Methods</h2>
              <p className="text-off-white/80 text-lg leading-relaxed mb-8">
                GA4 offers several installation methods, each with different levels of complexity and control. Choose the method that best fits your technical setup.
              </p>

              <div className="mb-10 p-6 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl border border-purple-500/20">
                <h3 className="text-xl font-bold text-purple-400 mb-4 flex items-center gap-2">
                  <span className="text-2xl">📦</span>
                  Installation Options
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-off-white">gtag.js (Recommended):</strong>
                      <span className="text-off-white/70 ml-1">Direct installation using Google's global site tag - simplest for most websites</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-off-white">Google Tag Manager:</strong>
                      <span className="text-off-white/70 ml-1">Best for managing multiple tracking tags without code deployments</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-off-white">CMS Integrations:</strong>
                      <span className="text-off-white/70 ml-1">WordPress, Shopify, and other platforms offer native GA4 integrations</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-off-white">Server-Side Tracking:</strong>
                      <span className="text-off-white/70 ml-1">Advanced setup using Google Tag Manager Server Container for better data accuracy</span>
                    </div>
                  </li>
                </ul>
              </div>

              <h2 id="enhanced-measurement" className="text-2xl md:text-3xl font-bold text-off-white mb-6 mt-12">Enhanced Measurement</h2>
              <p className="text-off-white/80 text-lg leading-relaxed mb-8">
                One of GA4's most powerful features is Enhanced Measurement, which automatically tracks common interactions without requiring additional configuration. This feature is enabled by default when you set up a new GA4 property.
              </p>

              <div className="mb-10 p-6 bg-gradient-to-r from-orange-500/10 to-yellow-500/10 rounded-2xl border border-orange-500/20">
                <h3 className="text-xl font-bold text-orange-400 mb-4 flex items-center gap-2">
                  <span className="text-2xl">✨</span>
                  Enhanced Measurement Events
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90"><strong>Outbound clicks:</strong> Traffic leaving to external sites</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90"><strong>Site search:</strong> Internal search queries and results viewed</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90"><strong>Video engagement:</strong> Views, watch percentage, completion</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90"><strong>File downloads:</strong> PDF, document, and media downloads</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90"><strong>Scroll tracking:</strong> Depth of page engagement</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90"><strong>Site forms:</strong> Form field interactions and submissions</span>
                  </li>
                </ul>
              </div>

              <div className="mb-10 p-6 bg-gradient-to-r from-cyan-500/10 to-teal-500/10 rounded-2xl border border-cyan-500/20">
                <h3 className="text-xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
                  <span className="text-2xl">💡</span>
                  Pro Tip: Review Enhanced Measurement
                </h3>
                <p className="text-off-white/80">
                  Take time to review which enhanced measurement events make sense for your site. Disable events that generate noise (like scroll tracking on very short pages) and ensure you're capturing what matters for your business goals.
                </p>
              </div>

              <h2 id="events-configuration" className="text-2xl md:text-3xl font-bold text-off-white mb-6 mt-12">Configuring Custom Events</h2>
              <p className="text-off-white/80 text-lg leading-relaxed mb-8">
                While Enhanced Measurement covers common interactions, most websites need custom events to track business-specific actions. GA4 makes this flexible through the interface and gtag API.
              </p>

              <div className="mb-10 p-6 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-2xl border border-indigo-500/20">
                <h3 className="text-xl font-bold text-indigo-400 mb-4 flex items-center gap-2">
                  <span className="text-2xl">🎯</span>
                  Recommended Custom Events
                </h3>
                <p className="text-off-white/80 mb-6">
                  Consider implementing these events based on your business type:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90"><strong>Ecommerce:</strong> view_item, add_to_cart, begin_checkout, purchase</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90"><strong>Lead Generation:</strong> form_start, form_complete, lead_submitted</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90"><strong>Content Engagement:</strong> article_read, video_start, cta_clicked</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90"><strong>Account Actions:</strong> sign_up, login, subscription_change</span>
                  </li>
                </ul>
              </div>

              <h2 id="conversions" className="text-2xl md:text-3xl font-bold text-off-white mb-6 mt-12">Setting Up Conversions</h2>
              <p className="text-off-white/80 text-lg leading-relaxed mb-8">
                Conversions in GA4 work differently than Universal Analytics. Rather than marking goals, you mark events as conversions directly in the interface. This gives you more flexibility and immediate access to conversion data.
              </p>

              <div className="mb-10 p-6 bg-gradient-to-r from-pink-500/10 to-rose-500/10 rounded-2xl border border-pink-500/20">
                <h3 className="text-xl font-bold text-pink-400 mb-4 flex items-center gap-2">
                  <span className="text-2xl">📊</span>
                  Conversion Setup Steps
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Navigate to Configure → Events in your GA4 property</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Find the event you want to mark as a conversion</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Toggle "Mark as conversion" to on</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Data appears in Reports → Acquisition and Conversion reports</span>
                  </li>
                </ul>
              </div>

              <div className="mb-12 p-8 bg-gradient-to-r from-violet-500/10 to-purple-500/10 rounded-2xl border border-violet-500/20">
                <h3 className="text-xl font-bold text-violet-400 mb-6 flex items-center gap-2">
                  <span className="text-2xl">🛠️</span>
                  Event Implementation Code
                </h3>
                <p className="text-off-white/80 mb-4">
                  Here's how to send custom events using gtag.js:
                </p>
                <pre className="bg-charcoal-gray p-4 rounded-lg overflow-x-auto text-sm text-off-white/80">
{`// Basic custom event
gtag('event', 'custom_event_name', {
  'parameter_name': 'parameter_value'
});

// Example: Track button clicks
gtag('event', 'cta_click', {
  'cta_location': 'hero',
  'cta_text': 'Get Started',
  'cta_url': '/signup'
});`}
                </pre>
              </div>

              <div className="mb-12 p-8 bg-gradient-to-r from-kiiro-yellow/10 to-yellow-500/10 rounded-2xl border border-kiiro-yellow/20">
                <h2 className="text-2xl md:text-3xl font-bold text-off-white mb-6">Conclusion</h2>
                <p className="text-off-white/80 text-lg leading-relaxed mb-6">
                  Setting up Google Analytics 4 correctly is essential for understanding your website performance in 2025 and beyond. Take time to configure Enhanced Measurement appropriately, implement meaningful custom events, and mark your key conversions. The initial investment pays dividends in actionable insights.
                </p>
                <div className="flex items-center gap-2 text-kiiro-yellow">
                  <span className="text-2xl">🎯</span>
                  <p className="font-semibold">
                    Need help setting up GA4? We specialize in proper analytics implementation that provides clean, actionable data.
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
                    Need Help Setting Up GA4?
                  </h3>

                  <p className="text-off-white/70 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                    Get proper analytics implementation with custom events configured for your business goals.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                    <Button
                      asChild
                      size="lg"
                      className="bg-kiiro-yellow text-charcoal-black hover:bg-kiiro-yellow/90 hover:shadow-lg hover:shadow-kiiro-yellow/25 transition-all duration-300"
                    >
                      <Link href="/contact">
                        <span className="font-semibold">Get Analytics Consultation</span>
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
                    ✅ GA4 implementation • ✅ Custom events • ✅ Conversion tracking • ✅ Implementation guidance
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
