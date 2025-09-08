import { Metadata } from "next";
import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Local SEO Strategies for Small Businesses | kiiro.cx",
  description: "Dominate your local market with proven SEO strategies. Learn how to optimize for local search and attract more customers from your area.",
  keywords: "local SEO, small business SEO, Google My Business, local search optimization, local marketing",
  authors: [{ name: "kiiro.cx" }],
  openGraph: {
    type: "article",
    title: "Local SEO Strategies That Actually Work for Small Businesses",
    description: "Dominate your local market with proven SEO strategies.",
    siteName: "kiiro.cx",
  }
};

export default function LocalSEOSmallBusiness() {
  return (
    <main className="flex min-h-screen flex-col bg-charcoal-black">
      <Header />

      <article className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Back to Blog Link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-kiiro-yellow hover:text-kiiro-yellow/80 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          {/* Article Header */}
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 bg-green-500/20 text-green-400 text-sm font-medium rounded-full">
                SEO
              </span>
              <div className="flex items-center gap-1 text-off-white/60 text-sm">
                <Calendar className="w-4 h-4" />
                February 12, 2025
              </div>
              <div className="flex items-center gap-1 text-off-white/60 text-sm">
                <Clock className="w-4 h-4" />
                11 min read
              </div>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-off-white mb-6">
              Local SEO Strategies That Actually Work for Small Businesses
            </h1>

            <p className="text-xl text-off-white/80 leading-relaxed mb-8">
              Dominate your local market with proven SEO strategies. Learn how to optimize for local search and attract more customers from your area.
            </p>

            {/* Article Content */}
            <div className="prose prose-lg prose-invert max-w-none">
              <h2>Why Local SEO Matters</h2>
              <p>
                78% of local mobile searches result in offline purchases within 24 hours. Whether you&apos;re a restaurant, retail store, service business, or local professional, local SEO can dramatically increase your visibility and customer acquisition.
              </p>

              <h2>Google Business Profile: The Foundation</h2>
              <p>
                Your Google Business Profile (formerly Google My Business) is the most important local SEO asset you&apos;ve got. It&apos;s essentially your free local business listing on Google&apos;s platform.
              </p>

              <h3>Complete Profile Setup</h3>
              <ul>
                <li><strong>Accurate Information:</strong> Ensure business name, address, phone number, and hours are correct</li>
                <li><strong>High-Quality Photos:</strong> Use professional photos of your business, products, and team</li>
                <li><strong>Business Description:</strong> Write a compelling description with relevant keywords</li>
                <li><strong>Website and Social Links:</strong> Include all your online presence</li>
              </ul>

              <h3>Regular Updates</h3>
              <p>
                Keep your profile fresh and engaging:
              </p>
              <ul>
                <li>Post regular updates and offers</li>
                <li>Respond to reviews promptly</li>
                <li>Update hours for holidays and special events</li>
                <li>Add new products or services</li>
              </ul>

              <h2>On-Page Local SEO</h2>

              <h3>Location-Based Keywords</h3>
              <p>
                Incorporate local search terms naturally:
              </p>
              <ul>
                <li>&ldquo;[Your City] [Service]&rdquo; (e.g., &ldquo;Austin plumber&rdquo;)</li>
                <li>&ldquo;[Service] near [Landmark]&rdquo; (e.g., &ldquo;dentist near downtown&rdquo;)</li>
                <li>Neighborhood names and local areas</li>
                <li>&ldquo;Best [Service] in [City]&rdquo;</li>
              </ul>

              <h3>Local Schema Markup</h3>
              <p>
                Add structured data to help search engines understand your local business information:
              </p>
              <ul>
                <li>LocalBusiness schema</li>
                <li>Address and contact information</li>
                <li>Business hours</li>
                <li>Customer reviews and ratings</li>
              </ul>

              <h2>Local Citations and Directories</h2>
              <p>
                Citations are mentions of your business name, address, and phone number on other websites. Consistent citations across directories help establish your local authority.
              </p>

              <h3>Essential Citations</h3>
              <ul>
                <li>Yelp</li>
                <li>Yellow Pages</li>
                <li>Angie&apos;s List</li>
                <li>Better Business Bureau</li>
                <li>Local chamber of commerce</li>
                <li>Industry-specific directories</li>
              </ul>

              <h3>Citation Management</h3>
              <p>
                Focus on quality over quantity:
              </p>
              <ul>
                <li>Ensure consistent NAP (Name, Address, Phone)</li>
                <li>Choose directories relevant to your industry</li>
                <li>Claim and optimize existing listings</li>
                <li>Monitor for duplicate or incorrect listings</li>
              </ul>

              <h2>Content Marketing for Local SEO</h2>

              <h3>Local Content Ideas</h3>
              <ul>
                <li>Neighborhood-specific blog posts</li>
                <li>Local event coverage</li>
                <li>Community involvement stories</li>
                <li>Local customer testimonials</li>
                <li>Seasonal and holiday content</li>
              </ul>

              <h3>Local Link Building</h3>
              <p>
                Build relationships with local businesses and organizations:
              </p>
              <ul>
                <li>Partner with complementary local businesses</li>
                <li>Sponsor local events and charities</li>
                <li>Participate in community organizations</li>
                <li>Guest post on local blogs and websites</li>
              </ul>

              <h2>Reviews and Reputation Management</h2>

              <h3>Encouraging Reviews</h3>
              <p>
                Make it easy for satisfied customers to leave reviews:
              </p>
              <ul>
                <li>Include review links in email signatures</li>
                <li>Add review widgets to your website</li>
                <li>Follow up after service with review requests</li>
                <li>Display existing reviews prominently</li>
              </ul>

              <h3>Responding to Reviews</h3>
              <p>
                Every review is an opportunity to engage:
              </p>
              <ul>
                <li>Thank customers for positive reviews</li>
                <li>Address negative reviews professionally</li>
                <li>Show that you care about customer feedback</li>
                <li>Use reviews to improve your business</li>
              </ul>

              <h2>Local Mobile Optimization</h2>

              <h3>Click-to-Call Functionality</h3>
              <p>
                Make it easy for mobile users to contact you:
              </p>
              <ul>
                <li>Use tel: links for phone numbers</li>
                <li>Include prominent call-to-action buttons</li>
                <li>Consider call tracking for attribution</li>
              </ul>

              <h3>Local Mobile Keywords</h3>
              <p>
                Mobile users often search differently:
              </p>
              <ul>
                <li>&ldquo;Open now&rdquo; and &ldquo;near me&rdquo; searches</li>
                <li>Voice search queries (&ldquo;Find a plumber near me&rdquo;)</li>
                <li>Emergency and urgent service searches</li>
              </ul>

              <h2>Measuring Local SEO Success</h2>

              <h3>Key Metrics to Track</h3>
              <ul>
                <li><strong>Google Business Profile Views:</strong> How many people see your listing</li>
                <li><strong>Website Traffic:</strong> Visits from local search queries</li>
                <li><strong>Phone Calls:</strong> Track calls from your website and GBP</li>
                <li><strong>Direction Requests:</strong> People looking for your address</li>
                <li><strong>Conversion Rate:</strong> Local traffic that becomes customers</li>
              </ul>

              <h3>Tools for Tracking</h3>
              <ul>
                <li>Google Analytics with local search tracking</li>
                <li>Google Business Profile insights</li>
                <li>Call tracking software</li>
                <li>Local rank tracking tools</li>
              </ul>

              <h2>Common Local SEO Mistakes</h2>

              <h3>Avoid These Pitfalls</h3>
              <ul>
                <li>Inconsistent business information across platforms</li>
                <li>Neglecting to respond to reviews</li>
                <li>Stuffing keywords unnaturally</li>
                <li>Ignoring mobile users</li>
                <li>Not claiming and optimizing your Google Business Profile</li>
              </ul>

              <h2>Local SEO Strategy Timeline</h2>

              <h3>Month 1: Foundation</h3>
              <ul>
                <li>Claim and optimize Google Business Profile</li>
                <li>Ensure consistent NAP across all platforms</li>
                <li>Add local schema markup to your website</li>
                <li>Set up review monitoring and response system</li>
              </ul>

              <h3>Month 2-3: Optimization</h3>
              <ul>
                <li>Build local citations in relevant directories</li>
                <li>Create local content for your website</li>
                <li>Optimize for local keywords</li>
                <li>Implement local link building strategy</li>
              </ul>

              <h3>Month 3+: Growth</h3>
              <ul>
                <li>Monitor and analyze performance</li>
                <li>Continue building reviews and citations</li>
                <li>Scale successful strategies</li>
                <li>Explore advanced local SEO tactics</li>
              </ul>

              <h2>Conclusion</h2>
              <p>
                Local SEO is one of the most effective marketing strategies for small businesses because it targets customers who are already looking for your services. Unlike broad SEO strategies, local SEO focuses on capturing customers in your immediate geographic area who are ready to buy.
              </p>

              <p>
                The key to success is consistency and patience. Focus on providing excellent service that generates reviews, maintain consistent business information across all platforms, and create content that serves your local community. With time and consistent effort, you&apos;ll see significant improvements in your local search visibility and customer acquisition.
              </p>
            </div>

            {/* CTA Section */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <div className="bg-gradient-to-r from-kiiro-yellow/10 to-green-500/10 rounded-2xl p-8 border border-kiiro-yellow/20 text-center">
                <h3 className="text-2xl font-bold text-off-white mb-4">
                  Ready to Dominate Your Local Market?
                </h3>
                <p className="text-off-white/70 mb-6">
                  Get a comprehensive local SEO strategy that drives more customers to your business.
                </p>
                <Button
                  asChild
                  size="lg"
                  className="bg-kiiro-yellow text-charcoal-black hover:bg-kiiro-yellow/90"
                >
                  <Link href="/contact">
                    Get Local SEO Strategy
                    <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
