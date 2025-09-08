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
    featured: true,
    image: "/projects/seo-guide-hero.jpg",
    excerpt: "Master the fundamentals of search engine optimization with this comprehensive 2025 guide. Learn technical SEO, content strategy, and advanced tactics to dominate search results."
  },
  {
    slug: "conversion-optimization-mistakes",
    title: "7 Deadly Conversion Optimization Mistakes That Are Killing Your Sales",
    description: "Learn the most common conversion mistakes entrepreneurs make and how to fix them. Stop losing customers to poor website design and user experience.",
    date: "2025-01-22",
    readTime: "8 min read",
    category: "Conversion",
    featured: false,
    image: "/projects/conversion-mistakes-hero.jpg",
    excerpt: "Discover the critical mistakes costing you sales. From poor first impressions to confusing navigation, learn how to fix conversion killers and boost your revenue."
  },
  {
    slug: "mobile-first-design-2024",
    title: "Mobile-First Design in 2025: Why It Matters More Than Ever",
    description: "With mobile traffic surpassing desktop, learn why mobile-first design is crucial for your business success and how to implement it effectively.",
    date: "2025-01-29",
    readTime: "10 min read",
    category: "Design",
    featured: false,
    image: "/projects/mobile-design-hero.jpg",
    excerpt: "Mobile dominates internet usage. Learn why mobile-first design is essential for modern businesses and discover practical implementation strategies that drive results."
  },
  {
    slug: "website-speed-business-growth",
    title: "How Website Speed Impacts Your Business Growth (And How to Fix It)",
    description: "Discover the direct correlation between website speed and business metrics. Learn practical strategies to optimize your site speed and boost conversions.",
    date: "2025-02-05",
    readTime: "9 min read",
    category: "Performance",
    featured: false,
    image: "/projects/website-speed-hero.jpg",
    excerpt: "Slow websites kill conversions. Learn the measurable impact of speed on revenue and discover actionable optimization strategies that transform your business metrics."
  },
  {
    slug: "local-seo-small-business",
    title: "Local SEO Strategies That Actually Work for Small Businesses",
    description: "Dominate your local market with proven SEO strategies. Learn how to optimize for local search and attract more customers from your area.",
    date: "2025-02-12",
    readTime: "11 min read",
    category: "SEO",
    featured: false,
    image: "/projects/local-seo-hero.jpg",
    excerpt: "Local search is a goldmine for small businesses. Master Google Business Profile, local keywords, and reputation management to dominate your local market."
  },
  {
    slug: "website-redesign-roi",
    title: "The ROI of Website Redesign: When and How to Invest",
    description: "Calculate the return on investment for website redesign projects. Learn when it's time to redesign and how to maximize your investment.",
    date: "2025-02-19",
    readTime: "7 min read",
    category: "Business",
    featured: false,
    image: "/projects/website-redesign-hero.jpg",
    excerpt: "Is a website redesign worth the investment? Learn to calculate ROI, identify redesign triggers, and maximize returns from your website investment."
  },
  {
    slug: "content-marketing-strategy",
    title: "Content Marketing Strategy for Entrepreneurs: From Zero to Hero",
    description: "Build a content marketing strategy that drives traffic and leads. Learn the fundamentals of creating content that converts visitors into customers.",
    date: "2025-02-26",
    readTime: "13 min read",
    category: "Marketing",
    featured: false,
    image: "/projects/content-marketing-hero.jpg",
    excerpt: "Transform your business with strategic content marketing. From audience research to conversion optimization, build a content engine that drives sustainable growth."
  },
  {
    slug: "user-experience-design",
    title: "UX Design Principles Every Entrepreneur Should Know",
    description: "Master the fundamentals of user experience design. Learn how to create websites that users love and that drive business results.",
    date: "2025-03-05",
    readTime: "10 min read",
    category: "Design",
    featured: false,
    image: "/projects/ux-design-hero.jpg",
    excerpt: "User experience is your competitive advantage. Master the psychology, principles, and practices that create websites users love and businesses profit from."
  },
  {
    slug: "google-analytics-entrepreneurs",
    title: "Google Analytics for Entrepreneurs: Track What Actually Matters",
    description: "Stop drowning in data. Learn which Google Analytics metrics matter most for entrepreneurs and how to use them to grow your business.",
    date: "2025-03-12",
    readTime: "8 min read",
    category: "Analytics",
    featured: false,
    image: "/projects/google-analytics-hero.jpg",
    excerpt: "Cut through the analytics noise. Learn the 5 metrics that actually drive business decisions and how to use Google Analytics to fuel your growth strategy."
  },
  {
    slug: "website-security-101",
    title: "Website Security 101: Protect Your Business Online",
    description: "Learn essential website security practices every business owner should know. Protect your customers and your reputation with these security fundamentals.",
    date: "2025-03-19",
    readTime: "6 min read",
    category: "Security",
    featured: false,
    image: "/projects/website-security-hero.jpg",
    excerpt: "Security breaches destroy businesses. Learn essential protection strategies, from SSL certificates to backup systems, that safeguard your online presence."
  },
  {
    slug: "landing-page-optimization",
    title: "Landing Page Optimization: Turn Visitors Into Customers",
    description: "Master the art of landing page optimization. Learn proven techniques to increase conversions and maximize your marketing spend.",
    date: "2025-03-26",
    readTime: "12 min read",
    category: "Conversion",
    featured: false,
    image: "/projects/landing-page-hero.jpg",
    excerpt: "Your landing page is your sales force. Master conversion psychology, A/B testing, and optimization frameworks that turn browsers into buyers."
  },
  {
    slug: "ecommerce-website-design",
    title: "E-commerce Website Design: Best Practices for 2025",
    description: "Build an e-commerce site that sells. Learn the design principles and technical requirements for creating a high-converting online store.",
    date: "2025-04-02",
    readTime: "15 min read",
    category: "E-commerce",
    featured: false,
    image: "/projects/ecommerce-design-hero.jpg",
    excerpt: "E-commerce success requires more than products. Master UX design, payment flows, and conversion optimization that create profitable online stores."
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
            <div className="max-w-4xl mx-auto text-center mb-20">
              <div className="px-4 py-2 rounded-full bg-kiiro-yellow/20 text-kiiro-yellow text-sm font-semibold mb-8 border border-kiiro-yellow/30 inline-block backdrop-blur-sm">
                📝 Latest Insights & Strategies
              </div>
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-off-white mb-8 leading-tight">
                SEO & Web Design <span className="text-kiiro-yellow">Blog</span>
              </h1>
              <p className="text-lg md:text-xl text-off-white/80 max-w-3xl mx-auto leading-relaxed mb-8">
                Stay ahead of the curve with actionable insights on SEO, web design, and conversion optimization strategies that drive real business results.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-off-white/60">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-kiiro-yellow rounded-full"></div>
                  <span>SEO Strategies</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-kiiro-yellow rounded-full"></div>
                  <span>Web Design Tips</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-kiiro-yellow rounded-full"></div>
                  <span>Conversion Optimization</span>
                </div>
              </div>
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
                  <div key={post.slug} className="bg-gradient-to-br from-charcoal-gray/95 to-charcoal-gray/80 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden hover:border-kiiro-yellow/40 hover:shadow-2xl hover:shadow-kiiro-yellow/10 transition-all duration-500 group relative">
                    {/* Featured badge */}
                    <div className="absolute top-6 left-6 z-20">
                      <div className="px-4 py-2 bg-gradient-to-r from-kiiro-yellow to-kiiro-yellow/80 text-charcoal-black text-sm font-bold rounded-full shadow-lg">
                        ⭐ Featured
                      </div>
                    </div>

                    {/* Background gradient effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-kiiro-yellow/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="grid md:grid-cols-2 gap-0">
                      {/* Content Side */}
                      <div className="p-8 md:p-12 relative z-10">
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

                        <h3 className="text-2xl md:text-3xl font-bold text-off-white mb-6 group-hover:text-kiiro-yellow transition-colors duration-300 leading-tight">
                          {post.title}
                        </h3>

                        <p className="text-off-white/80 text-lg leading-relaxed mb-8 line-clamp-4">
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

                      {/* Image Side */}
                      <div className="relative overflow-hidden">
                        <div className="aspect-[4/3] md:aspect-square bg-gradient-to-br from-kiiro-yellow/20 to-kiiro-yellow/5 relative">
                          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-black/50 to-transparent" />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center text-off-white/60">
                              <div className="text-6xl mb-4">📊</div>
                              <p className="text-sm font-medium">Featured Article</p>
                            </div>
                          </div>
                        </div>
                      </div>
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
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-kiiro-yellow/10 text-kiiro-yellow text-sm font-medium rounded-full border border-kiiro-yellow/20 mb-6">
                  📚 All Articles
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-off-white mb-4">
                  Explore Our Content Library
                </h2>
                <p className="text-off-white/60 text-lg max-w-2xl mx-auto">
                  Discover actionable insights that drive results across SEO, web design, and digital marketing.
                </p>
              </div>

              {blogPosts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {blogPosts.map((post, index) => (
                    <article key={post.slug} className="bg-gradient-to-br from-charcoal-gray/95 to-charcoal-gray/90 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-kiiro-yellow/40 hover:shadow-xl hover:shadow-kiiro-yellow/5 transition-all duration-500 group relative">
                      {/* Subtle background gradient on hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-kiiro-yellow/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* Featured Image */}
                      <div className="aspect-[16/10] bg-gradient-to-br from-kiiro-yellow/20 to-kiiro-yellow/5 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-black/60 via-transparent to-transparent" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center text-off-white/60">
                            <div className="text-4xl mb-2">
                              {post.category === 'SEO' && '🔍'}
                              {post.category === 'Design' && '🎨'}
                              {post.category === 'Conversion' && '📈'}
                              {post.category === 'Performance' && '⚡'}
                              {post.category === 'Marketing' && '📢'}
                              {post.category === 'Business' && '💼'}
                              {post.category === 'Analytics' && '📊'}
                              {post.category === 'Security' && '🔒'}
                              {post.category === 'E-commerce' && '🛒'}
                            </div>
                            <p className="text-xs font-medium">{post.category}</p>
                          </div>
                        </div>
                      </div>

                      <div className="p-6 relative z-10">
                        <div className="flex items-center gap-2 mb-4">
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

                        <h3 className="text-xl font-bold text-off-white mb-4 group-hover:text-kiiro-yellow transition-colors duration-300 leading-tight line-clamp-2">
                          {post.title}
                        </h3>

                        <p className="text-off-white/70 text-sm leading-relaxed mb-6 line-clamp-3">
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
