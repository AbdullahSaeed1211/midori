import { Metadata } from "next";
import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog | SEO Tips & Web Design Insights | kiiro.cx",
  description: "Stay updated with the latest SEO strategies, web design trends, and conversion optimization tips to grow your online business.",
  keywords: "SEO blog, web design tips, conversion optimization, entrepreneur blog, website marketing",
  authors: [{ name: "kiiro.cx" }],
  openGraph: {
    type: "website",
    title: "Blog | SEO Tips & Web Design Insights | kiiro.cx",
    description: "Stay updated with the latest SEO strategies and web design tips to grow your online business.",
    siteName: "kiiro.cx",
  }
};

// Blog post data - in a real app, this would come from a CMS or database
const blogPosts = [
  {
    slug: "seo-guide-2024",
    title: "Ultimate SEO Guide for Entrepreneurs in 2025",
    description: "Everything you need to know about SEO in 2025. From technical fundamentals to content strategy, this comprehensive guide covers all the essential elements for ranking higher on Google.",
    date: "2025-01-15",
    readTime: "12 min read",
    category: "SEO",
    featured: true
  },
  {
    slug: "conversion-optimization-mistakes",
    title: "7 Deadly Conversion Optimization Mistakes That Are Killing Your Sales",
    description: "Learn the most common conversion mistakes entrepreneurs make and how to fix them. Stop losing customers to poor website design and user experience.",
    date: "2025-01-22",
    readTime: "8 min read",
    category: "Conversion",
    featured: false
  },
  {
    slug: "mobile-first-design-2024",
    title: "Mobile-First Design in 2025: Why It Matters More Than Ever",
    description: "With mobile traffic surpassing desktop, learn why mobile-first design is crucial for your business success and how to implement it effectively.",
    date: "2025-01-29",
    readTime: "10 min read",
    category: "Design",
    featured: false
  },
  {
    slug: "website-speed-business-growth",
    title: "How Website Speed Impacts Your Business Growth (And How to Fix It)",
    description: "Discover the direct correlation between website speed and business metrics. Learn practical strategies to optimize your site speed and boost conversions.",
    date: "2025-02-05",
    readTime: "9 min read",
    category: "Performance",
    featured: false
  },
  {
    slug: "local-seo-small-business",
    title: "Local SEO Strategies That Actually Work for Small Businesses",
    description: "Dominate your local market with proven SEO strategies. Learn how to optimize for local search and attract more customers from your area.",
    date: "2025-02-12",
    readTime: "11 min read",
    category: "SEO",
    featured: false
  },
  {
    slug: "website-redesign-roi",
    title: "The ROI of Website Redesign: When and How to Invest",
    description: "Calculate the return on investment for website redesign projects. Learn when it's time to redesign and how to maximize your investment.",
    date: "2025-02-19",
    readTime: "7 min read",
    category: "Business",
    featured: false
  },
  {
    slug: "content-marketing-strategy",
    title: "Content Marketing Strategy for Entrepreneurs: From Zero to Hero",
    description: "Build a content marketing strategy that drives traffic and leads. Learn the fundamentals of creating content that converts visitors into customers.",
    date: "2025-02-26",
    readTime: "13 min read",
    category: "Marketing",
    featured: false
  },
  {
    slug: "user-experience-design",
    title: "UX Design Principles Every Entrepreneur Should Know",
    description: "Master the fundamentals of user experience design. Learn how to create websites that users love and that drive business results.",
    date: "2025-03-05",
    readTime: "10 min read",
    category: "Design",
    featured: false
  },
  {
    slug: "google-analytics-entrepreneurs",
    title: "Google Analytics for Entrepreneurs: Track What Actually Matters",
    description: "Stop drowning in data. Learn which Google Analytics metrics matter most for entrepreneurs and how to use them to grow your business.",
    date: "2025-03-12",
    readTime: "8 min read",
    category: "Analytics",
    featured: false
  },
  {
    slug: "website-security-101",
    title: "Website Security 101: Protect Your Business Online",
    description: "Learn essential website security practices every business owner should know. Protect your customers and your reputation with these security fundamentals.",
    date: "2025-03-19",
    readTime: "6 min read",
    category: "Security",
    featured: false
  },
  {
    slug: "landing-page-optimization",
    title: "Landing Page Optimization: Turn Visitors Into Customers",
    description: "Master the art of landing page optimization. Learn proven techniques to increase conversions and maximize your marketing spend.",
    date: "2025-03-26",
    readTime: "12 min read",
    category: "Conversion",
    featured: false
  },
  {
    slug: "ecommerce-website-design",
    title: "E-commerce Website Design: Best Practices for 2025",
    description: "Build an e-commerce site that sells. Learn the design principles and technical requirements for creating a high-converting online store.",
    date: "2025-04-02",
    readTime: "15 min read",
    category: "E-commerce",
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
              <div className="px-4 py-1.5 rounded-full bg-kiiro-yellow/20 text-kiiro-yellow text-sm font-medium mb-6 border border-kiiro-yellow/30 inline-block">
                📝 Latest Insights
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-off-white mb-6">
                SEO & Web Design <span className="text-kiiro-yellow">Blog</span>
              </h1>
              <p className="text-lg md:text-xl text-off-white/80 max-w-2xl mx-auto leading-relaxed">
                Stay ahead of the curve with actionable insights on SEO, web design, and conversion optimization strategies.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        {blogPosts.filter(post => post.featured).length > 0 && (
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-kiiro-yellow/10 text-kiiro-yellow text-sm font-medium rounded-full border border-kiiro-yellow/20 mb-4">
                    ⭐ Featured Article
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-off-white">
                    Must-Read Content
                  </h2>
                </div>

                {blogPosts.filter(post => post.featured).map((post) => (
                  <div key={post.slug} className="bg-gradient-to-br from-charcoal-gray/95 to-charcoal-gray/80 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12 hover:border-kiiro-yellow/40 hover:shadow-2xl hover:shadow-kiiro-yellow/10 transition-all duration-300 group relative overflow-hidden">
                    {/* Background gradient effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-kiiro-yellow/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="relative z-10">
                      <div className="flex flex-wrap items-center gap-3 mb-6">
                        <span className="px-4 py-2 bg-kiiro-yellow/20 text-kiiro-yellow text-sm font-semibold rounded-full border border-kiiro-yellow/30">
                          {post.category}
                        </span>
                        <div className="flex items-center gap-2 text-off-white/60 text-sm">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(post.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}</span>
                        </div>
                        <div className="flex items-center gap-2 text-off-white/60 text-sm">
                          <Clock className="w-4 h-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>

                      <h3 className="text-xl md:text-2xl font-bold text-off-white mb-6 group-hover:text-kiiro-yellow transition-colors duration-300 leading-tight">
                        {post.title}
                      </h3>

                      <p className="text-off-white/70 text-base md:text-lg leading-relaxed mb-8 line-clamp-3">
                        {post.description}
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
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-kiiro-yellow/10 text-kiiro-yellow text-sm font-medium rounded-full border border-kiiro-yellow/20 mb-4">
                  📚 All Articles
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-off-white">
                  Explore Our Content
                </h2>
                <p className="text-off-white/60 mt-2 max-w-2xl mx-auto">
                  Discover insights that drive results across SEO, web design, and digital marketing.
                </p>
              </div>

              {blogPosts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {blogPosts.map((post) => (
                    <article key={post.slug} className="bg-gradient-to-br from-charcoal-gray/95 to-charcoal-gray/90 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-kiiro-yellow/40 hover:shadow-xl hover:shadow-kiiro-yellow/5 transition-all duration-300 group relative overflow-hidden">
                      {/* Subtle background gradient on hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-kiiro-yellow/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      <div className="relative z-10">
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                          <span className="px-3 py-1.5 bg-kiiro-yellow/20 text-kiiro-yellow text-xs font-semibold rounded-full border border-kiiro-yellow/30">
                            {post.category}
                          </span>
                          <div className="flex items-center gap-1.5 text-off-white/60 text-xs">
                            <Calendar className="w-3 h-3" />
                            {new Date(post.date).toLocaleDateString('en-US', {
                              month: 'short',
                              day: 'numeric'
                            })}
                          </div>
                        </div>

                        <h3 className="text-lg font-bold text-off-white mb-4 group-hover:text-kiiro-yellow transition-colors duration-300 leading-tight line-clamp-2">
                          {post.title}
                        </h3>

                        <p className="text-off-white/70 text-sm leading-relaxed mb-6 line-clamp-3">
                          {post.description}
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
              ) : (
                <div className="text-center py-16">
                  <div className="w-16 h-16 bg-kiiro-yellow/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-kiiro-yellow text-2xl">📝</span>
                  </div>
                  <h3 className="text-xl font-bold text-off-white mb-2">Coming Soon</h3>
                  <p className="text-off-white/70">
                    We&apos;re working on more insightful content. Check back soon for the latest SEO and web design tips.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-charcoal-gray/95 to-charcoal-gray/90 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
                {/* Background pattern */}
                <div className="absolute inset-0 bg-gradient-to-r from-kiiro-yellow/5 via-transparent to-green-500/5 opacity-50" />
                <div className="absolute top-0 right-0 w-32 h-32 bg-kiiro-yellow/10 rounded-full -translate-y-16 translate-x-16" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-green-500/10 rounded-full translate-y-12 -translate-x-12" />

                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-kiiro-yellow/10 text-kiiro-yellow text-sm font-medium rounded-full border border-kiiro-yellow/20 mb-6">
                    📧 Stay Updated
                  </div>

                  <h2 className="text-xl md:text-2xl font-bold text-off-white mb-4">
                    Never Miss an Update
                  </h2>

                  <p className="text-off-white/70 text-base md:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                    Get the latest SEO strategies, web design insights, and conversion optimization tips delivered straight to your inbox.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                      asChild
                      size="lg"
                      className="bg-kiiro-yellow text-charcoal-black hover:bg-kiiro-yellow/90 hover:shadow-lg hover:shadow-kiiro-yellow/25 transition-all duration-300"
                    >
                      <Link href="/contact">
                        <span className="font-semibold">Get SEO Tips</span>
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
