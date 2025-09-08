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
    title: "Ultimate SEO Guide for Entrepreneurs in 2024",
    description: "Everything you need to know about SEO in 2024. From technical fundamentals to content strategy, this comprehensive guide covers all the essential elements for ranking higher on Google.",
    date: "2024-01-15",
    readTime: "12 min read",
    category: "SEO",
    featured: true
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
                    We're working on more insightful content. Check back soon for the latest SEO and web design tips.
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
