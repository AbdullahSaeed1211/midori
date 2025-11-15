import { Metadata } from "next";
import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Calendar, Clock, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog | SEO Tips & Web Design Insights | kiiro.cx",
  description: "Stay updated with the latest SEO strategies, web design trends, and conversion optimization tips to grow your online business.",
  keywords: "SEO blog, web design tips, conversion optimization, entrepreneur blog, website marketing",
  authors: [{ name: "kiiro.cx" }],
  openGraph: {
    type: "website",
    title: "Blog | SEO Tips & Web Design Insights | kiiro.cx",
    description: "Stay updated with the latest SEO strategies and web design tips to grow your online business.",
    url: "https://kiiro.cx/blog",
    siteName: "kiiro.cx",
  },
  alternates: {
    canonical: "https://kiiro.cx/blog",
  },
};

// Simplified blog post data - focus on quality over quantity
const blogPosts = [
  {
    slug: "seo-guide-2024",
    title: "Ultimate SEO Guide for Entrepreneurs in 2025",
    excerpt: "Master the fundamentals of search engine optimization with this comprehensive 2025 guide. Learn technical SEO, content strategy, and advanced tactics to dominate search results.",
    date: "2025-01-15",
    readTime: "12 min read",
    category: "SEO",
    featured: true
  },
  {
    slug: "conversion-optimization-mistakes",
    title: "7 Deadly Conversion Optimization Mistakes That Are Killing Your Sales",
    excerpt: "Discover the critical mistakes costing you sales. From poor first impressions to confusing navigation, learn how to fix conversion killers and boost your revenue.",
    date: "2025-01-22",
    readTime: "8 min read",
    category: "Conversion",
    featured: false
  },
  {
    slug: "mobile-first-design-2024",
    title: "Mobile-First Design in 2025: Why It Matters More Than Ever",
    excerpt: "Mobile dominates internet usage. Learn why mobile-first design is essential for modern businesses and discover practical implementation strategies that drive results.",
    date: "2025-01-29",
    readTime: "10 min read",
    category: "Design",
    featured: false
  },
  {
    slug: "website-speed-business-growth",
    title: "How Website Speed Impacts Your Business Growth (And How to Fix It)",
    excerpt: "Slow websites kill conversions. Learn the measurable impact of speed on revenue and discover actionable optimization strategies that transform your business metrics.",
    date: "2025-02-05",
    readTime: "9 min read",
    category: "Performance",
    featured: false
  },
  {
    slug: "local-seo-small-business",
    title: "Local SEO Strategies That Actually Work for Small Businesses",
    excerpt: "Local search is a goldmine for small businesses. Master Google Business Profile, local keywords, and reputation management to dominate your local market.",
    date: "2025-02-12",
    readTime: "11 min read",
    category: "SEO",
    featured: false
  },
  {
    slug: "content-marketing-strategy",
    title: "Content Marketing Strategy for Entrepreneurs: From Zero to Hero",
    excerpt: "Transform your business with strategic content marketing. From audience research to conversion optimization, build a content engine that drives sustainable growth.",
    date: "2025-02-26",
    readTime: "13 min read",
    category: "Marketing",
    featured: false
  }
];

export default function BlogPage() {
  return (
    <main className="flex min-h-screen flex-col bg-charcoal-black">
      <Header />

      <div className="pt-24 pb-20">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-kiiro-yellow/10 to-transparent opacity-30" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <div className="px-4 py-2 rounded-full bg-kiiro-yellow/20 text-kiiro-yellow text-sm font-semibold mb-6 border border-kiiro-yellow/30 inline-block backdrop-blur-sm">
                📝 Latest Insights & Strategies
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-off-white mb-6 leading-tight">
                SEO & Web Design <span className="text-kiiro-yellow">Blog</span>
              </h1>
              <p className="text-xl text-off-white/80 max-w-3xl mx-auto leading-relaxed mb-8">
                Actionable insights to help entrepreneurs build better websites and grow their businesses.
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <div className="flex items-center gap-2 text-off-white/60">
                  <TrendingUp className="w-4 h-4 text-kiiro-yellow" />
                  <span>SEO Strategies</span>
                </div>
                <div className="flex items-center gap-2 text-off-white/60">
                  <TrendingUp className="w-4 h-4 text-kiiro-yellow" />
                  <span>Web Design Tips</span>
                </div>
                <div className="flex items-center gap-2 text-off-white/60">
                  <TrendingUp className="w-4 h-4 text-kiiro-yellow" />
                  <span>Conversion Optimization</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        {blogPosts.filter(post => post.featured).length > 0 && (
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-2xl md:text-3xl font-bold text-off-white mb-4">
                    Featured Article
                  </h2>
                  <p className="text-off-white/60">Our most comprehensive guide this month</p>
                </div>

                {blogPosts.filter(post => post.featured).map((post) => (
                  <div key={post.slug} className="bg-gradient-to-br from-charcoal-gray/95 to-charcoal-gray/90 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-kiiro-yellow/40 transition-all duration-500 group">
                    <div className="p-8 md:p-12">
                      <div className="flex items-center gap-3 mb-6">
                        <span className="px-4 py-2 bg-kiiro-yellow/20 text-kiiro-yellow text-sm font-semibold rounded-full border border-kiiro-yellow/30">
                          {post.category}
                        </span>
                        <div className="flex items-center gap-4 text-off-white/60 text-sm">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            {new Date(post.date).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })}
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            {post.readTime}
                          </div>
                        </div>
                      </div>

                      <h3 className="text-3xl md:text-4xl font-bold text-off-white mb-6 group-hover:text-kiiro-yellow transition-colors duration-300 leading-tight">
                        {post.title}
                      </h3>

                      <p className="text-off-white/80 text-lg leading-relaxed mb-8 max-w-3xl">
                        {post.excerpt}
                      </p>

                      <Button
                        asChild
                        size="lg"
                        className="bg-kiiro-yellow text-charcoal-black hover:bg-kiiro-yellow/90 hover:shadow-lg hover:shadow-kiiro-yellow/25 transition-all duration-300 group/btn"
                      >
                        <Link href={`/blog/${post.slug}`}>
                          <span className="font-semibold">Read Full Article</span>
                          <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* All Posts */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-off-white mb-4">
                  Latest Articles
                </h2>
                <p className="text-off-white/60 text-lg max-w-2xl mx-auto">
                  Practical insights to improve your website and grow your business.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogPosts.map((post) => (
                  <article key={post.slug} className="bg-gradient-to-br from-charcoal-gray/95 to-charcoal-gray/90 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:border-kiiro-yellow/40 hover:shadow-xl hover:shadow-kiiro-yellow/5 transition-all duration-500 group">
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 bg-kiiro-yellow/20 text-kiiro-yellow text-xs font-semibold rounded-full border border-kiiro-yellow/30">
                          {post.category}
                        </span>
                        <div className="flex items-center gap-3 text-off-white/60 text-xs">
                          <div className="flex items-center gap-1.5">
                            <Calendar className="w-3 h-3" />
                            {new Date(post.date).toLocaleDateString('en-US', {
                              month: 'short',
                              day: 'numeric'
                            })}
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Clock className="w-3 h-3" />
                            {post.readTime}
                          </div>
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-off-white mb-4 group-hover:text-kiiro-yellow transition-colors duration-300 leading-tight">
                        {post.title}
                      </h3>

                      <p className="text-off-white/70 text-sm leading-relaxed mb-6">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between pt-4 border-t border-white/10">
                        <div className="flex items-center gap-1.5 text-off-white/60 text-xs">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </div>
                        <Link
                          href={`/blog/${post.slug}`}
                          className="text-kiiro-yellow hover:text-kiiro-yellow/80 text-sm font-medium flex items-center gap-1.5 transition-all duration-300 group/link hover:translate-x-1"
                        >
                          Read More
                          <ArrowRight className="w-3 h-3 group-hover/link:translate-x-0.5 transition-transform duration-300" />
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-charcoal-gray/95 to-charcoal-gray/90 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-kiiro-yellow/10 text-kiiro-yellow text-sm font-medium rounded-full border border-kiiro-yellow/20 mb-6">
                    📧 Stay Updated
                  </div>

                  <h2 className="text-2xl md:text-3xl font-bold text-off-white mb-4">
                    Get the Latest Insights
                  </h2>

                  <p className="text-off-white/70 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                    Join entrepreneurs who are improving their websites with our latest tips and strategies.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                      asChild
                      size="lg"
                      className="bg-kiiro-yellow text-charcoal-black hover:bg-kiiro-yellow/90 hover:shadow-lg hover:shadow-kiiro-yellow/25 transition-all duration-300"
                    >
                      <Link href="/contact">
                        <span className="font-semibold">Get Free Consultation</span>
                        <ArrowRight className="w-4 h-4 ml-2" />
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
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
