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
    images: ["https://kiiro.cx/og/blog.png"],
  },
  alternates: {
    canonical: "https://kiiro.cx/blog",
  },
};

const blogPosts = [
  {
    slug: "seo-guide-2025",
    title: "Ultimate SEO Guide for Entrepreneurs in 2026",
    excerpt: "Master the fundamentals of search engine optimization with this comprehensive 2026 guide.",
    date: "2026-01-15",
    readTime: "12 min",
    category: "SEO",
    featured: true,
    image: "/images/blog/seo-guide.jpg"
  },
  {
    slug: "conversion-optimization-mistakes",
    title: "7 Conversion Mistakes Killing Your Sales",
    excerpt: "Discover the critical mistakes costing you sales and how to fix them.",
    date: "2026-01-22",
    readTime: "8 min",
    category: "Conversion",
    featured: false,
    image: "/images/blog/conversion.jpg"
  },
  {
    slug: "mobile-first-design-2025",
    title: "Mobile-First Design in 2026: Why It Matters",
    excerpt: "Mobile dominates internet usage. Learn why mobile-first design is essential.",
    date: "2026-01-29",
    readTime: "10 min",
    category: "Design",
    featured: false,
    image: "/images/blog/mobile-design.jpg"
  },
  {
    slug: "website-speed-business-growth",
    title: "How Website Speed Impacts Business Growth",
    excerpt: "Slow websites kill conversions. Learn optimization strategies that work.",
    date: "2026-02-05",
    readTime: "9 min",
    category: "Performance",
    featured: false,
    image: "/images/blog/speed.jpg"
  },
  {
    slug: "local-seo-small-business",
    title: "Local SEO Strategies for Small Businesses",
    excerpt: "Master local search to dominate your local market.",
    date: "2026-02-12",
    readTime: "11 min",
    category: "SEO",
    featured: false,
    image: "/images/blog/local-seo.jpg"
  },
  {
    slug: "content-marketing-strategy",
    title: "Content Marketing Strategy for Entrepreneurs",
    excerpt: "Build a content engine that drives sustainable growth.",
    date: "2026-02-19",
    readTime: "13 min",
    category: "Marketing",
    featured: false,
    image: "/images/blog/content.jpg"
  },
  {
    slug: "core-web-vitals-2025",
    title: "Core Web Vitals Explained for 2026",
    excerpt: "Understanding Google's page experience signals.",
    date: "2026-02-01",
    readTime: "10 min",
    category: "Performance",
    featured: false,
    image: "/images/blog/web-vitals.jpg"
  },
  {
    slug: "ai-search-optimization",
    title: "AI Search Optimization: The New SEO",
    excerpt: "How to optimize for AI-powered search engines.",
    date: "2026-02-08",
    readTime: "9 min",
    category: "SEO",
    featured: false,
    image: "/images/blog/ai-search.jpg"
  },
  {
    slug: "landing-page-psychology",
    title: "Landing Page Psychology That Converts",
    excerpt: "Design landing pages that turn visitors into customers.",
    date: "2026-02-15",
    readTime: "8 min",
    category: "Conversion",
    featured: false,
    image: "/images/blog/landing-page.jpg"
  }
];

const categories = ["All", "SEO", "Conversion", "Design", "Performance", "Marketing"];

export default function BlogPage() {
  return (
    <main className="flex min-h-screen flex-col bg-charcoal-black">
      <Header />

      <div className="pt-24 pb-20">
        {/* Hero Section - Smaller */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-kiiro-yellow/5 to-transparent" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <span className="text-kiiro-yellow text-sm font-medium mb-3 block">Insights & Strategies</span>
              <h1 className="text-2xl md:text-3xl font-bold text-off-white mb-4">
                SEO & Web Design Blog
              </h1>
              <p className="text-base text-off-white/70 max-w-2xl mx-auto">
                Actionable insights to help entrepreneurs build better websites and grow their businesses.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Post - With Image */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              {blogPosts.filter(post => post.featured).map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="block">
                  <div className="bg-charcoal-gray/40 border border-off-white/10 rounded-2xl overflow-hidden hover:border-kiiro-yellow/30 transition-all group">
                    <div className="grid md:grid-cols-2 gap-0">
                      {/* Image Side */}
                      <div className="relative h-48 md:h-auto bg-gradient-to-br from-kiiro-yellow/20 to-purple-500/20">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center">
                            <TrendingUp className="w-12 h-12 text-kiiro-yellow mx-auto mb-2" />
                            <span className="text-kiiro-yellow text-sm font-medium">Featured</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Content Side */}
                      <div className="p-6 md:p-8">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="px-3 py-1 bg-kiiro-yellow/10 text-kiiro-yellow text-xs font-medium rounded-full">
                            {post.category}
                          </span>
                          <span className="text-off-white/50 text-xs">{post.readTime}</span>
                        </div>
                        
                        <h2 className="text-xl font-bold text-off-white mb-3 group-hover:text-kiiro-yellow transition-colors">
                          {post.title}
                        </h2>
                        
                        <p className="text-off-white/70 text-sm mb-4 line-clamp-2">
                          {post.excerpt}
                        </p>
                        
                        <div className="flex items-center gap-2 text-kiiro-yellow text-sm font-medium">
                          Read Article
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-6">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="flex flex-wrap justify-center gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    className="px-4 py-2 rounded-full text-sm font-medium transition-all bg-charcoal-gray/30 border border-off-white/10 text-off-white/70 hover:border-kiiro-yellow/30 hover:text-off-white"
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* All Posts Grid */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-lg font-semibold text-off-white mb-6">Latest Articles</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {blogPosts.filter(p => !p.featured).map((post) => (
                  <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                    <article className="bg-charcoal-gray/30 border border-off-white/10 rounded-xl overflow-hidden hover:border-kiiro-yellow/30 transition-all h-full">
                      {/* Post Image */}
                      <div className="h-36 bg-gradient-to-br from-off-white/5 to-off-white/10 relative">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-3xl opacity-30">
                            {post.category === 'SEO' && '🔍'}
                            {post.category === 'Conversion' && '📈'}
                            {post.category === 'Design' && '🎨'}
                            {post.category === 'Performance' && '⚡'}
                            {post.category === 'Marketing' && '📢'}
                          </span>
                        </div>
                      </div>
                      
                      {/* Post Content */}
                      <div className="p-5">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xs text-kiiro-yellow font-medium">{post.category}</span>
                          <span className="text-xs text-off-white/40">•</span>
                          <span className="text-xs text-off-white/40">{post.readTime}</span>
                        </div>
                        
                        <h3 className="text-sm font-semibold text-off-white mb-2 group-hover:text-kiiro-yellow transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        
                        <p className="text-xs text-off-white/60 line-clamp-2">
                          {post.excerpt}
                        </p>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <div className="bg-charcoal-gray/40 border border-off-white/10 rounded-2xl p-8">
                <h3 className="text-lg font-semibold text-off-white mb-2">Stay Updated</h3>
                <p className="text-sm text-off-white/60 mb-4">Get the latest SEO tips and web design insights delivered to your inbox.</p>
                <Button asChild className="bg-kiiro-yellow text-charcoal-black hover:bg-kiiro-yellow/90">
                  <Link href="/contact">
                    Subscribe <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
