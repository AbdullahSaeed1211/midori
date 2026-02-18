import { Metadata } from "next";
import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { ArticleJsonLd } from "@/components/seo/article-json-ld";

export const metadata: Metadata = {
  title: "Page Speed Optimization: Technical Deep Dive | kiiro.cx",
  description: "Comprehensive guide to page speed optimization. Learn about Core Web Vitals, image optimization, code splitting, CDN configuration, and advanced techniques for blazing-fast websites.",
  keywords: "page speed optimization, Core Web Vitals, LCP optimization, image optimization, website performance, page load time",
  authors: [{ name: "kiiro.cx" }],
  alternates: {
    canonical: 'https://kiiro.cx/blog/page-speed-optimization'
  },
  openGraph: {
    type: "article",
    title: "Page Speed Optimization: Technical Deep Dive",
    description: "Comprehensive guide to page speed optimization. Learn advanced techniques for blazing-fast websites.",
    siteName: "kiiro.cx",
    url: "https://kiiro.cx/blog/page-speed-optimization",
  },
  twitter: {
    card: "summary_large_image",
    title: "Page Speed Optimization: Technical Deep Dive | kiiro.cx",
    description: "Comprehensive guide to page speed optimization with advanced techniques.",
  }
};

export default function PageSpeedOptimization() {
  return (
    <main className="flex min-h-screen flex-col bg-charcoal-black">
      <Header />
      <ArticleJsonLd
        title="Page Speed Optimization: Technical Deep Dive | kiiro.cx"
        description="Comprehensive guide to page speed optimization. Learn about Core Web Vitals, image optimization, code splitting, CDN configuration, and advanced techniques."
        url="https://kiiro.cx/blog/page-speed-optimization"
        image="https://kiiro.cx/projects/kiiro.webp"
        datePublished="2025-09-05"
        dateModified="2025-09-05"
        keywords={[
          "page speed optimization",
          "Core Web Vitals",
          "LCP optimization",
          "image optimization",
          "website performance",
          "page load time",
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
                September 5, 2025
              </div>
              <div className="flex items-center gap-1 text-off-white/60 text-sm">
                <Clock className="w-4 h-4" />
                18 min read
              </div>
            </div>

            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-off-white mb-8 leading-tight">
              Page Speed Optimization: Technical Deep Dive
            </h1>

            <p className="text-lg md:text-xl text-off-white/80 leading-relaxed mb-10 max-w-3xl">
              Page speed isn't just about user experience—it's a direct ranking factor and business imperative. This technical guide covers everything you need to know about optimizing your website for speed.
            </p>

            <div className="flex flex-wrap items-center gap-6 mb-12 p-6 bg-gradient-to-r from-green-500/10 to-transparent rounded-2xl border border-green-500/20">
              <div className="flex items-center gap-2 text-green-400">
                <Clock className="w-5 h-5" />
                <span className="font-semibold">18 min read</span>
              </div>
              <div className="flex items-center gap-4 text-sm text-off-white/70">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  Core Web Vitals
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  Image Optimization
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                  Advanced Techniques
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
                  <a href="#core-web-vitals" className="block text-off-white/70 hover:text-kiiro-yellow transition-colors text-sm ml-4">Core Web Vitals Explained</a>
                  <a href="#images" className="block text-off-white/70 hover:text-kiiro-yellow transition-colors text-sm ml-4">Image Optimization</a>
                  <a href="#code" className="block text-off-white/70 hover:text-kiiro-yellow transition-colors text-sm ml-4">Code Optimization</a>
                  <a href="#server" className="block text-off-white/70 hover:text-kiiro-yellow transition-colors text-sm ml-4">Server-Side Optimization</a>
                  <a href="#caching" className="block text-off-white/70 hover:text-kiiro-yellow transition-colors text-sm ml-4">Caching Strategies</a>
                </nav>
              </div>

              <h2 id="introduction" className="text-2xl md:text-3xl font-bold text-off-white mb-6 mt-12 first:mt-0">Introduction</h2>
              <p className="text-off-white/80 text-lg leading-relaxed mb-8">
                In 2025, page speed is more critical than ever. Google's Core Web Vitals update made site performance a direct ranking factor, and user expectations have never been higher. Research shows that 53% of mobile users abandon sites that take more than 3 seconds to load.
              </p>
              <p className="text-off-white/80 text-lg leading-relaxed mb-8">
                This guide provides a comprehensive technical deep dive into page speed optimization. We'll cover everything from image optimization to advanced server configurations, with practical implementation details you can apply immediately.
              </p>

              <h2 id="core-web-vitals" className="text-2xl md:text-3xl font-bold text-off-white mb-6 mt-12">Core Web Vitals Explained</h2>
              <p className="text-off-white/80 text-lg leading-relaxed mb-8">
                Core Web Vitals are Google's set of standardized metrics that measure real-world user experience for loading performance, interactivity, and visual stability. Understanding these metrics is essential for effective optimization.
              </p>

              <div className="mb-10 p-6 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-2xl border border-green-500/20">
                <h3 className="text-xl font-bold text-green-400 mb-4 flex items-center gap-2">
                  <span className="text-2xl">📊</span>
                  Core Web Vitals Overview
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-off-white">LCP (Largest Contentful Paint):</strong>
                      <span className="text-off-white/70 ml-1">Measures loading performance - target under 2.5 seconds</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-off-white">INP (Interaction to Next Paint):</strong>
                      <span className="text-off-white/70 ml-1">Measures interactivity - target under 200 milliseconds</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-off-white">CLS (Cumulative Layout Shift):</strong>
                      <span className="text-off-white/70 ml-1">Measures visual stability - target under 0.1</span>
                    </div>
                  </li>
                </ul>
              </div>

              <h2 id="images" className="text-2xl md:text-3xl font-bold text-off-white mb-6 mt-12">Image Optimization</h2>
              <p className="text-off-white/80 text-lg leading-relaxed mb-8">
                Images typically account for 50-80% of total page weight. Optimizing images provides the biggest immediate performance gains for most websites.
              </p>

              <div className="mb-10 p-6 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-2xl border border-blue-500/20">
                <h3 className="text-xl font-bold text-blue-400 mb-4 flex items-center gap-2">
                  <span className="text-2xl">🖼️</span>
                  Modern Image Formats
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-off-white">AVIF:</strong>
                      <span className="text-off-white/70 ml-1">Best compression - 50% smaller than WebP, 70% smaller than JPEG</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-off-white">WebP:</strong>
                      <span className="text-off-white/70 ml-1">Excellent compression with broad browser support</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-off-white">SVG:</strong>
                      <span className="text-off-white/70 ml-1">Perfect for icons and simple graphics - infinitely scalable</span>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="mb-10 p-6 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl border border-purple-500/20">
                <h3 className="text-xl font-bold text-purple-400 mb-4 flex items-center gap-2">
                  <span className="text-2xl">⚡</span>
                  Image Loading Strategies
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90"><strong>Lazy loading:</strong> Load images only as they enter the viewport</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90"><strong>Responsive images:</strong> Serve the right size for each device</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90"><strong>Preload LCP image:</strong> Use fetchpriority="high" for hero images</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90"><strong>Explicit dimensions:</strong> Always set width and height attributes</span>
                  </li>
                </ul>
              </div>

              <div className="mb-10 p-6 bg-gradient-to-r from-orange-500/10 to-yellow-500/10 rounded-2xl border border-orange-500/20">
                <h3 className="text-xl font-bold text-orange-400 mb-4 flex items-center gap-2">
                  <span className="text-2xl">💻</span>
                  Image Implementation
                </h3>
                <pre className="bg-charcoal-gray p-4 rounded-lg overflow-x-auto text-sm text-off-white/80">
{`<!-- Responsive images with modern formats -->
<picture>
  <source srcset="image.avif" type="image/avif">
  <source srcset="image.webp" type="image/webp">
  <img src="image.jpg" 
       alt="Description" 
       width="800" 
       height="600"
       loading="lazy">
</picture>

<!-- Priority loading for LCP -->
<img src="hero.jpg" 
     alt="Hero" 
     fetchpriority="high">`}
                </pre>
              </div>

              <h2 id="code" className="text-2xl md:text-3xl font-bold text-off-white mb-6 mt-12">Code Optimization</h2>
              <p className="text-off-white/80 text-lg leading-relaxed mb-8">
                JavaScript and CSS bundles can significantly impact load times. Proper code splitting and optimization reduces initial payload and improves Time to Interactive.
              </p>

              <div className="mb-10 p-6 bg-gradient-to-r from-cyan-500/10 to-teal-500/10 rounded-2xl border border-cyan-500/20">
                <h3 className="text-xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
                  <span className="text-2xl">📦</span>
                  JavaScript Optimization
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Code splitting - load only what's needed for the current page</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Tree shaking - remove unused code from bundles</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Defer non-critical scripts with defer attribute</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Use dynamic imports for route-based splitting</span>
                  </li>
                </ul>
              </div>

              <div className="mb-10 p-6 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-2xl border border-indigo-500/20">
                <h3 className="text-xl font-bold text-indigo-400 mb-4 flex items-center gap-2">
                  <span className="text-2xl">🎨</span>
                  CSS Optimization
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Critical CSS inlining - put essential styles in the head</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Purge unused CSS - remove styles that aren't used</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Media query splitting - load appropriate styles for device</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Use CSS containment for complex layouts</span>
                  </li>
                </ul>
              </div>

              <h2 id="server" className="text-2xl md:text-3xl font-bold text-off-white mb-6 mt-12">Server-Side Optimization</h2>
              <p className="text-off-white/80 text-lg leading-relaxed mb-8">
                Server configuration and hosting choices directly impact your site's speed. These optimizations often provide significant improvements with relatively simple changes.
              </p>

              <div className="mb-10 p-6 bg-gradient-to-r from-pink-500/10 to-rose-500/10 rounded-2xl border border-pink-500/20">
                <h3 className="text-xl font-bold text-pink-400 mb-4 flex items-center gap-2">
                  <span className="text-2xl">🌐</span>
                  CDN & Server Configuration
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90"><strong>Content Delivery Network:</strong> Serve static assets from edge locations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90"><strong>Compression:</strong> Enable Brotli (preferred) or gzip</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90"><strong>HTTP/3 or HTTP/2:</strong> Use modern protocols for faster connections</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90"><strong>TLS 1.3:</strong> Faster handshake with modern encryption</span>
                  </li>
                </ul>
              </div>

              <h2 id="caching" className="text-2xl md:text-3xl font-bold text-off-white mb-6 mt-12">Caching Strategies</h2>
              <p className="text-off-white/80 text-lg leading-relaxed mb-8">
                Proper caching reduces server load and improves repeat visit performance. Implementing the right caching strategy can cut load times by 50% or more for returning visitors.
              </p>

              <div className="mb-10 p-6 bg-gradient-to-r from-violet-500/10 to-purple-500/10 rounded-2xl border border-violet-500/20">
                <h3 className="text-xl font-bold text-violet-400 mb-4 flex items-center gap-2">
                  <span className="text-2xl">💾</span>
                  Caching Headers
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-violet-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Static assets: Cache for 1 year (max-age=31536000)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-violet-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">HTML pages: Cache for short period with ETag validation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-violet-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">API responses: Cache appropriately based on update frequency</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-violet-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Use immutable hashes for versioned assets</span>
                  </li>
                </ul>
              </div>

              <div className="mb-12 p-8 bg-gradient-to-r from-kiiro-yellow/10 to-yellow-500/10 rounded-2xl border border-kiiro-yellow/20">
                <h2 className="text-2xl md:text-3xl font-bold text-off-white mb-6">Conclusion</h2>
                <p className="text-off-white/80 text-lg leading-relaxed mb-6">
                  Page speed optimization is an ongoing process. Start with the biggest impact changes (images, caching, CDN) and then move to finer optimizations. Regular performance audits ensure your site maintains optimal speed as you add new content and features.
                </p>
                <div className="flex items-center gap-2 text-kiiro-yellow">
                  <span className="text-2xl">🎯</span>
                  <p className="font-semibold">
                    Need help optimizing your website's speed? We specialize in performance optimization for high-traffic sites.
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
                    Need Help Optimizing Your Site Speed?
                  </h3>

                  <p className="text-off-white/70 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                    Get a comprehensive performance audit with specific recommendations for your site.
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
                    ✅ Core Web Vitals analysis • ✅ Image optimization • ✅ Implementation guidance
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
