import { Metadata } from "next";
import { BlogTemplate, BlogSection, HighlightBox, StatsGrid, BlogCTA } from "@/components/blog/BlogTemplate";
import { MapPin, Star, TrendingUp, Users, Phone, Globe, Target, CheckCircle2, AlertTriangle } from "lucide-react";

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
  const stats = [
    {
      value: "78%",
      label: "Local Mobile Searches",
      description: "Result in offline purchases within 24 hours"
    },
    {
      value: "46%",
      label: "Local Searchers",
      description: "Seek general information about businesses"
    },
    {
      value: "88%",
      label: "Local Searches",
      description: "Happen on mobile devices"
    }
  ];

  return (
    <BlogTemplate
      title="Local SEO Strategies That Actually Work for Small Businesses"
      description="Dominate your local market with proven SEO strategies. Learn how to optimize for local search and attract more customers from your area."
      category="SEO"
      date="February 12, 2025"
      readTime="11 min read"
      tags={["Local SEO", "Small Business", "Google Business Profile", "Local Search"]}
    >
      {/* Introduction */}
      <BlogSection title="Why Local SEO Matters" icon={<TrendingUp className="w-5 h-5" />}>
        <p>
          78% of local mobile searches result in offline purchases within 24 hours. Whether you&apos;re a restaurant, retail store, service business, or local professional, local SEO can dramatically increase your visibility and customer acquisition.
        </p>
      </BlogSection>

      <StatsGrid stats={stats} />

      <BlogSection title="Google Business Profile: The Foundation" icon={<MapPin className="w-5 h-5" />}>
        <p>
          Your Google Business Profile (formerly Google My Business) is the most important local SEO asset you&apos;ve got. It&apos;s essentially your free local business listing on Google&apos;s platform.
        </p>
      </BlogSection>

      <BlogSection title="Complete Profile Setup">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <HighlightBox type="success">
            <h4 className="font-semibold mb-2">Accurate Information</h4>
            <p className="text-sm">Ensure business name, address, phone number, and hours are correct</p>
          </HighlightBox>
          <HighlightBox type="info">
            <h4 className="font-semibold mb-2">High-Quality Photos</h4>
            <p className="text-sm">Use professional photos of your business, products, and team</p>
          </HighlightBox>
          <HighlightBox type="info">
            <h4 className="font-semibold mb-2">Business Description</h4>
            <p className="text-sm">Write a compelling description with relevant keywords</p>
          </HighlightBox>
          <HighlightBox type="info">
            <h4 className="font-semibold mb-2">Website and Social Links</h4>
            <p className="text-sm">Include all your online presence</p>
          </HighlightBox>
        </div>
      </BlogSection>

      <BlogSection title="Regular Updates">
        <p>Keep your profile fresh and engaging:</p>
        <ul className="space-y-2 mt-4">
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
            <span>Post regular updates and offers</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
            <span>Respond to reviews promptly</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
            <span>Update hours for holidays and special events</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
            <span>Add new products or services</span>
          </li>
        </ul>
      </BlogSection>

      <BlogSection title="Location-Based Keywords" icon={<Target className="w-5 h-5" />}>
        <p>Incorporate local search terms naturally:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <HighlightBox type="info">
            <h4 className="font-semibold mb-2">City + Service</h4>
            <p className="text-sm">&ldquo;[Your City] [Service]&rdquo; (e.g., &ldquo;Austin plumber&rdquo;)</p>
          </HighlightBox>
          <HighlightBox type="info">
            <h4 className="font-semibold mb-2">Service + Landmark</h4>
            <p className="text-sm">&ldquo;[Service] near [Landmark]&rdquo; (e.g., &ldquo;dentist near downtown&rdquo;)</p>
          </HighlightBox>
        </div>
      </BlogSection>

      <BlogSection title="Local Schema Markup" icon={<Globe className="w-5 h-5" />}>
        <p>Add structured data to help search engines understand your local business information:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <HighlightBox type="success">
            <h4 className="font-semibold mb-2">LocalBusiness Schema</h4>
            <p className="text-sm">Structured markup for local businesses</p>
          </HighlightBox>
          <HighlightBox type="info">
            <h4 className="font-semibold mb-2">Business Details</h4>
            <p className="text-sm">Address, contact, and hours information</p>
          </HighlightBox>
        </div>
      </BlogSection>

      <BlogSection title="Local Citations and Directories" icon={<Star className="w-5 h-5" />}>
        <p>Citations are mentions of your business name, address, and phone number on other websites. Consistent citations across directories help establish your local authority.</p>

        <BlogSection title="Essential Citations">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <HighlightBox type="info">
              <ul className="text-sm space-y-1">
                <li>• Yelp</li>
                <li>• Yellow Pages</li>
                <li>• Better Business Bureau</li>
              </ul>
            </HighlightBox>
            <HighlightBox type="info">
              <ul className="text-sm space-y-1">
                <li>• Local chamber of commerce</li>
                <li>• Industry-specific directories</li>
                <li>• Review platforms</li>
              </ul>
            </HighlightBox>
          </div>
        </BlogSection>

        <BlogSection title="Citation Management">
          <HighlightBox type="warning">
            <h4 className="font-semibold mb-2">Quality Over Quantity</h4>
            <p className="text-sm">Focus on directories relevant to your industry</p>
            <ul className="text-sm mt-2 space-y-1">
              <li>• Ensure consistent NAP (Name, Address, Phone)</li>
              <li>• Choose directories relevant to your industry</li>
              <li>• Claim and optimize existing listings</li>
              <li>• Monitor for duplicate or incorrect listings</li>
            </ul>
          </HighlightBox>
        </BlogSection>
      </BlogSection>

      <BlogSection title="Content Marketing for Local SEO" icon={<Users className="w-5 h-5" />}>
        <BlogSection title="Local Content Ideas">
          <ul className="space-y-2 mt-4">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
              <span>Neighborhood-specific blog posts</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
              <span>Local event coverage</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
              <span>Community involvement stories</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
              <span>Local customer testimonials</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
              <span>Seasonal and holiday content</span>
            </li>
          </ul>
        </BlogSection>

        <BlogSection title="Local Link Building">
          <p>Build relationships with local businesses and organizations:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <HighlightBox type="info">
              <h4 className="font-semibold mb-2">Business Partnerships</h4>
              <p className="text-sm">Partner with complementary local businesses</p>
            </HighlightBox>
            <HighlightBox type="info">
              <h4 className="font-semibold mb-2">Community Involvement</h4>
              <p className="text-sm">Sponsor local events and charities</p>
            </HighlightBox>
          </div>
        </BlogSection>
      </BlogSection>

      <BlogSection title="Reviews and Reputation Management" icon={<Star className="w-5 h-5" />}>
        <BlogSection title="Encouraging Reviews">
          <p>Make it easy for satisfied customers to leave reviews:</p>
          <ul className="space-y-2 mt-4">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
              <span>Include review links in email signatures</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
              <span>Add review widgets to your website</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
              <span>Follow up after service with review requests</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
              <span>Display existing reviews prominently</span>
            </li>
          </ul>
        </BlogSection>
      </BlogSection>

      <BlogSection title="Local Mobile Optimization" icon={<Phone className="w-5 h-5" />}>
        <BlogSection title="Click-to-Call Functionality">
          <p>Make it easy for mobile users to contact you:</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <HighlightBox type="success">
              <p className="text-sm">Use tel: links for phone numbers</p>
            </HighlightBox>
            <HighlightBox type="info">
              <p className="text-sm">Include prominent call-to-action buttons</p>
            </HighlightBox>
            <HighlightBox type="info">
              <p className="text-sm">Consider call tracking for attribution</p>
            </HighlightBox>
          </div>
        </BlogSection>
      </BlogSection>

      <BlogSection title="Common Local SEO Mistakes" icon={<AlertTriangle className="w-5 h-5" />}>
        <HighlightBox type="warning">
          <h4 className="font-semibold mb-3">Avoid These Pitfalls</h4>
          <ul className="text-sm space-y-2">
            <li>• Inconsistent business information across platforms</li>
            <li>• Neglecting to respond to reviews</li>
            <li>• Stuffing keywords unnaturally</li>
            <li>• Ignoring mobile users</li>
            <li>• Not claiming and optimizing your Google Business Profile</li>
          </ul>
        </HighlightBox>
      </BlogSection>

      <BlogSection title="Local SEO Strategy Timeline" icon={<Target className="w-5 h-5" />}>
        <BlogSection title="Month 1: Foundation">
          <ul className="space-y-2 mt-4">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
              <span>Claim and optimize Google Business Profile</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
              <span>Ensure consistent NAP across all platforms</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
              <span>Add local schema markup to your website</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
              <span>Set up review monitoring and response system</span>
            </li>
          </ul>
        </BlogSection>

        <BlogSection title="Month 2-3: Optimization">
          <ul className="space-y-2 mt-4">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
              <span>Build local citations in relevant directories</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
              <span>Create local content for your website</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
              <span>Optimize for local keywords</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
              <span>Implement local link building strategy</span>
            </li>
          </ul>
        </BlogSection>

        <BlogSection title="Month 3+: Growth">
          <ul className="space-y-2 mt-4">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
              <span>Monitor and analyze performance</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
              <span>Continue building reviews and citations</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
              <span>Scale successful strategies</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
              <span>Explore advanced local SEO tactics</span>
            </li>
          </ul>
        </BlogSection>
      </BlogSection>

      <BlogSection title="Conclusion" icon={<CheckCircle2 className="w-5 h-5" />}>
        <p>
          Local SEO is one of the most effective marketing strategies for small businesses because it targets customers who are already looking for your services. Unlike broad SEO strategies, local SEO focuses on capturing customers in your immediate geographic area who are ready to buy.
        </p>

        <p className="mt-4">
          The key to success is consistency and patience. Focus on providing excellent service that generates reviews, maintain consistent business information across all platforms, and create content that serves your local community. With time and consistent effort, you&apos;ll see significant improvements in your local search visibility and customer acquisition.
        </p>
      </BlogSection>

      <BlogCTA
        title="Ready to Dominate Your Local Market?"
        description="Get a comprehensive local SEO strategy that drives more customers to your business."
        primaryButton={{
          text: "Get Local SEO Strategy",
          href: "/contact"
        }}
      />
    </BlogTemplate>
  );
}
