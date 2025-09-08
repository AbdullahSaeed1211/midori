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
              <h1 className="text-4xl md:text-6xl font-bold text-off-white mb-6">
                SEO & Web Design <span className="text-kiiro-yellow">Blog</span>
              </h1>
              <p className="text-xl text-off-white/80 max-w-2xl mx-auto">
                Stay ahead of the curve with actionable insights on SEO, web design, and conversion optimization strategies.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        {blogPosts.filter(post => post.featured).length > 0 && (
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold text-off-white mb-8 text-center">
                  Featured Article
                </h2>

                {blogPosts.filter(post => post.featured).map((post) => (
                  <div key={post.slug} className="bg-charcoal-gray/95 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12 hover:border-kiiro-yellow/30 transition-colors">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="px-3 py-1 bg-kiiro-yellow/20 text-kiiro-yellow text-sm font-medium rounded-full">
                        {post.category}
                      </span>
                      <div className="flex items-center gap-1 text-off-white/60 text-sm">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </div>
                      <div className="flex items-center gap-1 text-off-white/60 text-sm">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </div>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold text-off-white mb-4">
                      {post.title}
                    </h3>

                    <p className="text-off-white/70 text-lg leading-relaxed mb-6">
                      {post.description}
                    </p>

                    <Button
                      asChild
                      className="bg-kiiro-yellow text-charcoal-black hover:bg-kiiro-yellow/90"
                    >
                      <Link href={`/blog/${post.slug}`}>
                        Read Full Article
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
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
              <h2 className="text-2xl md:text-3xl font-bold text-off-white mb-8 text-center">
                All Articles
              </h2>

              {blogPosts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {blogPosts.map((post) => (
                    <article key={post.slug} className="bg-charcoal-gray/95 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-kiiro-yellow/30 transition-colors group">
                      <div className="flex items-center gap-2 mb-4">
                        <span className="px-2 py-1 bg-kiiro-yellow/20 text-kiiro-yellow text-xs font-medium rounded-full">
                          {post.category}
                        </span>
                        <div className="flex items-center gap-1 text-off-white/60 text-xs">
                          <Calendar className="w-3 h-3" />
                          {new Date(post.date).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric'
                          })}
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-off-white mb-3 group-hover:text-kiiro-yellow transition-colors">
                        {post.title}
                      </h3>

                      <p className="text-off-white/70 text-sm leading-relaxed mb-4 line-clamp-3">
                        {post.description}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1 text-off-white/60 text-xs">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </div>
                        <Link
                          href={`/blog/${post.slug}`}
                          className="text-kiiro-yellow hover:text-kiiro-yellow/80 text-sm font-medium flex items-center gap-1 transition-colors"
                        >
                          Read More
                          <ArrowRight className="w-3 h-3" />
                        </Link>
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
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="bg-gradient-to-r from-kiiro-yellow/10 to-green-500/10 rounded-2xl p-8 md:p-12 border border-kiiro-yellow/20 text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-off-white mb-4">
                  Stay Updated
                </h2>
                <p className="text-off-white/80 mb-6">
                  Get the latest SEO strategies and web design insights delivered to your inbox.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    asChild
                    size="lg"
                    className="bg-kiiro-yellow text-charcoal-black hover:bg-kiiro-yellow/90"
                  >
                    <Link href="/contact">
                      Get SEO Tips
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-kiiro-yellow text-kiiro-yellow hover:bg-kiiro-yellow/10"
                  >
                    <Link href="/audit">
                      Free Website Audit
                    </Link>
                  </Button>
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
