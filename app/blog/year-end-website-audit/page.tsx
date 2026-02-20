import { Metadata } from "next";
import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { ArticleJsonLd } from "@/components/seo/article-json-ld";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";

export const metadata: Metadata = {
  title: "Year-End Website Audit: Complete Checklist | kiiro.cx",
  description: "Complete year-end website audit checklist. Review your site's performance, SEO, security, and conversion elements to start the new year strong.",
  keywords: "year-end website audit, website review, site audit checklist, website health check, annual website review",
  authors: [{ name: "kiiro.cx" }],
  alternates: {
    canonical: 'https://kiiro.cx/blog/year-end-website-audit'
  },
  openGraph: {
    images: ["https://kiiro.cx/og/blog/year-end-website-audit.png"],

    type: "article",
    title: "Year-End Website Audit: Complete Checklist",
    description: "Complete year-end website audit checklist to start the new year strong.",
    siteName: "kiiro.cx",
    url: "https://kiiro.cx/blog/year-end-website-audit",
  },
  twitter: {
    card: "summary_large_image",
    title: "Year-End Website Audit: Complete Checklist | kiiro.cx",
    description: "Complete year-end website audit checklist for your business.",
  }
};

export default function YearEndWebsiteAudit() {
  return (
    <main className="flex min-h-screen flex-col bg-charcoal-black">
      <Header />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://kiiro.cx" },
          { name: "Blog", url: "https://kiiro.cx/blog" },
          { name: "Year-End Website Audit: Complete Checklist | kiiro.cx", url: "https://kiiro.cx/blog/year-end-website-audit" }
        ]}
      />
      <ArticleJsonLd
        title="Year-End Website Audit: Complete Checklist | kiiro.cx"
        description="Complete year-end website audit checklist. Review your site's performance, SEO, security, and conversion elements to start the new year strong."
        url="https://kiiro.cx/blog/year-end-website-audit"
        image="https://kiiro.cx/projects/kiiro.webp"
        datePublished="2025-12-15"
        dateModified="2025-12-15"
        keywords={[
          "year-end website audit",
          "website review",
          "site audit checklist",
          "website health check",
          "annual website review",
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
                December 15, 2025
              </div>
              <div className="flex items-center gap-1 text-off-white/60 text-sm">
                <Clock className="w-4 h-4" />
                15 min read
              </div>
            </div>

            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-off-white mb-8 leading-tight">
              Year-End Website Audit: Complete Checklist
            </h1>

            <p className="text-lg md:text-xl text-off-white/80 leading-relaxed mb-10 max-w-3xl">
              The end of the year is the perfect time to review your website's performance and prepare for success in the coming year. This comprehensive checklist covers everything you need to audit.
            </p>

            <div className="flex flex-wrap items-center gap-6 mb-12 p-6 bg-gradient-to-r from-purple-500/10 to-transparent rounded-2xl border border-purple-500/20">
              <div className="flex items-center gap-2 text-purple-400">
                <Clock className="w-5 h-5" />
                <span className="font-semibold">15 min read</span>
              </div>
              <div className="flex items-center gap-4 text-sm text-off-white/70">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                  Performance
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  SEO
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  Security
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
                  <a href="#performance" className="block text-off-white/70 hover:text-kiiro-yellow transition-colors text-sm ml-4">Performance Audit</a>
                  <a href="#seo" className="block text-off-white/70 hover:text-kiiro-yellow transition-colors text-sm ml-4">SEO Audit</a>
                  <a href="#conversion" className="block text-off-white/70 hover:text-kiiro-yellow transition-colors text-sm ml-4">Conversion Audit</a>
                  <a href="#security" className="block text-off-white/70 hover:text-kiiro-yellow transition-colors text-sm ml-4">Security Audit</a>
                  <a href="#content" className="block text-off-white/70 hover:text-kiiro-yellow transition-colors text-sm ml-4">Content Review</a>
                </nav>
              </div>

              <h2 id="introduction" className="text-2xl md:text-3xl font-bold text-off-white mb-6 mt-12 first:mt-0">Introduction</h2>
              <p className="text-off-white/80 text-lg leading-relaxed mb-8">
                A year-end website audit is your opportunity to identify issues, measure progress, and set priorities for the coming year. Use this checklist to ensure nothing is overlooked.
              </p>

              <h2 id="performance" className="text-2xl md:text-3xl font-bold text-off-white mb-6 mt-12">Performance Audit</h2>
              <p className="text-off-white/80 text-lg leading-relaxed mb-8">
                Site speed impacts user experience and SEO. Review these performance metrics.
              </p>

              <div className="mb-10 p-6 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-2xl border border-green-500/20">
                <h3 className="text-xl font-bold text-green-400 mb-4 flex items-center gap-2">
                  <span className="text-2xl">⚡</span>
                  Performance Checklist
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Test Core Web Vitals (LCP, INP, CLS)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Check mobile page load times</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Review image optimization</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Check CDN configuration</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Review caching policies</span>
                  </li>
                </ul>
              </div>

              <h2 id="seo" className="text-2xl md:text-3xl font-bold text-off-white mb-6 mt-12">SEO Audit</h2>
              <p className="text-off-white/80 text-lg leading-relaxed mb-8">
                Review your search visibility and identify opportunities for improvement.
              </p>

              <div className="mb-10 p-6 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-2xl border border-blue-500/20">
                <h3 className="text-xl font-bold text-blue-400 mb-4 flex items-center gap-2">
                  <span className="text-2xl">🔍</span>
                  SEO Checklist
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Review search console for ranking changes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Check for crawl errors</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Audit internal linking structure</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Review backlink profile</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Check meta titles and descriptions</span>
                  </li>
                </ul>
              </div>

              <h2 id="conversion" className="text-2xl md:text-3xl font-bold text-off-white mb-6 mt-12">Conversion Audit</h2>
              <p className="text-off-white/80 text-lg leading-relaxed mb-8">
                Evaluate your site's ability to convert visitors into customers.
              </p>

              <div className="mb-10 p-6 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl border border-purple-500/20">
                <h3 className="text-xl font-bold text-purple-400 mb-4 flex items-center gap-2">
                  <span className="text-2xl">🎯</span>
                  Conversion Checklist
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Review conversion funnel analytics</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Test all forms for functionality</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Check CTA visibility and placement</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Review checkout flow if ecommerce</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Analyze bounce rates by page</span>
                  </li>
                </ul>
              </div>

              <h2 id="security" className="text-2xl md:text-3xl font-bold text-off-white mb-6 mt-12">Security Audit</h2>
              <p className="text-off-white/80 text-lg leading-relaxed mb-8">
                Ensure your site and user data are properly protected.
              </p>

              <div className="mb-10 p-6 bg-gradient-to-r from-orange-500/10 to-yellow-500/10 rounded-2xl border border-orange-500/20">
                <h3 className="text-xl font-bold text-orange-400 mb-4 flex items-center gap-2">
                  <span className="text-2xl">🔒</span>
                  Security Checklist
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Verify SSL certificate validity</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Review user access and permissions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Check for outdated plugins/software</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Verify backup systems working</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Review security scan results</span>
                  </li>
                </ul>
              </div>

              <h2 id="content" className="text-2xl md:text-3xl font-bold text-off-white mb-6 mt-12">Content Review</h2>
              <p className="text-off-white/80 text-lg leading-relaxed mb-8">
                Assess your content for accuracy, freshness, and effectiveness.
              </p>

              <div className="mb-10 p-6 bg-gradient-to-r from-cyan-500/10 to-teal-500/10 rounded-2xl border border-cyan-500/20">
                <h3 className="text-xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
                  <span className="text-2xl">📝</span>
                  Content Checklist
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Update outdated information</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Review and update CTAs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Check for broken links</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Verify contact information accuracy</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Update testimonials and case studies</span>
                  </li>
                </ul>
              </div>

              <div className="mb-12 p-8 bg-gradient-to-r from-kiiro-yellow/10 to-yellow-500/10 rounded-2xl border border-kiiro-yellow/20">
                <h2 className="text-2xl md:text-3xl font-bold text-off-white mb-6">Conclusion</h2>
                <p className="text-off-white/80 text-lg leading-relaxed mb-6">
                  A thorough year-end audit sets you up for success in the new year. Prioritize issues discovered and create an action plan for improvements.
                </p>
                <div className="flex items-center gap-2 text-kiiro-yellow">
                  <span className="text-2xl">🎯</span>
                  <p className="font-semibold">
                    Need help with your year-end website audit? We can conduct a comprehensive review.
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
                    Need a Professional Website Audit?
                  </h3>

                  <p className="text-off-white/70 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                    Get a comprehensive year-end audit with actionable recommendations.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                    <Button
                      asChild
                      size="lg"
                      className="bg-kiiro-yellow text-charcoal-black hover:bg-kiiro-yellow/90 hover:shadow-lg hover:shadow-kiiro-yellow/25 transition-all duration-300"
                    >
                      <Link href="/contact">
                        <span className="font-semibold">Get Website Audit</span>
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
                    ✅ Performance • ✅ SEO • ✅ Security • ✅ Conversion
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
