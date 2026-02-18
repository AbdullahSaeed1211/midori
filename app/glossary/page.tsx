import { Metadata } from "next";
import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";
import Link from "next/link";
import { Search, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "SEO & Web Design Glossary | Digital Marketing Terms | kiiro.cx",
  description: "Comprehensive glossary of SEO, web design, conversion optimization, and digital marketing terms. Learn the language of online marketing.",
  keywords: "SEO glossary, web design terms, conversion optimization, digital marketing dictionary, CRO terms",
  authors: [{ name: "kiiro.cx" }],
  alternates: {
    canonical: 'https://kiiro.cx/glossary'
  },
  openGraph: {
    type: "website",
    title: "SEO & Web Design Glossary | Digital Marketing Terms",
    description: "Comprehensive glossary of SEO, web design, and digital marketing terms.",
    siteName: "kiiro.cx",
    url: "https://kiiro.cx/glossary",
  },
};

const glossaryTerms = [
  {
    term: "A/B Testing",
    category: "CRO",
    definition: "A method of comparing two versions of a webpage or app against each other to determine which one performs better. Also known as split testing.",
    related: ["Multivariate Testing", "Conversion Rate", "Statistical Significance"]
  },
  {
    term: "Above the Fold",
    category: "Design",
    definition: "Content on a webpage that is visible without scrolling. This area is crucial for capturing user attention and driving conversions.",
    related: ["Hero Section", "Landing Page", "Conversion"]
  },
  {
    term: "Algorithm",
    category: "SEO",
    definition: "A complex set of rules used by search engines to determine the ranking of websites in search results. Google's algorithm considers hundreds of factors.",
    related: ["Google RankBrain", "PageRank", "SERP"]
  },
  {
    term: "Backlink",
    category: "SEO",
    definition: "A link from one website to another. Backlinks are crucial for SEO as search engines view them as votes of confidence in your content.",
    related: ["Link Building", "Domain Authority", "Off-Page SEO"]
  },
  {
    term: "Bounce Rate",
    category: "Analytics",
    definition: "The percentage of visitors who leave a website after viewing only one page. A high bounce rate may indicate poor content relevance or user experience issues.",
    related: ["Exit Rate", "Session Duration", "User Engagement"]
  },
  {
    term: "Call to Action (CTA)",
    category: "CRO",
    definition: "A prompt on a website that encourages users to take a specific action, such as 'Buy Now', 'Sign Up', or 'Learn More'. Effective CTAs are crucial for conversions.",
    related: ["Conversion", "Landing Page", "A/B Testing"]
  },
  {
    term: "Canonical Tag",
    category: "SEO",
    definition: "An HTML element that helps prevent duplicate content issues by telling search engines which version of a URL is the 'master' version.",
    related: ["Duplicate Content", "301 Redirect", "SEO"]
  },
  {
    term: "CLS (Cumulative Layout Shift)",
    category: "Performance",
    definition: "A Core Web Vitals metric that measures visual stability. It quantifies how much the page's content shifts unexpectedly during loading.",
    related: ["Core Web Vitals", "LCP", "Page Speed"]
  },
  {
    term: "Conversion",
    category: "CRO",
    definition: "The completion of a desired action on a website, such as making a purchase, signing up for a newsletter, or filling out a contact form.",
    related: ["Conversion Rate", "CTA", "Funnel"]
  },
  {
    term: "Conversion Rate",
    category: "CRO",
    definition: "The percentage of visitors who complete a desired action. Calculated as (conversions / total visitors) × 100.",
    related: ["A/B Testing", "CRO", "KPI"]
  },
  {
    term: "Core Web Vitals",
    category: "Performance",
    definition: "A set of metrics introduced by Google to measure user experience. Includes LCP (Largest Contentful Paint), FID (First Input Delay), and CLS (Cumulative Layout Shift).",
    related: ["Page Speed", "SEO", "User Experience"]
  },
  {
    term: "Crawling",
    category: "SEO",
    definition: "The process by which search engine bots (spiders) discover and scan pages on the internet to add to their index.",
    related: ["Indexing", "Sitemap", "SEO"]
  },
  {
    term: "CSS",
    category: "Development",
    definition: "Cascading Style Sheets - a styling language used to describe the presentation of a document written in HTML.",
    related: ["HTML", "Responsive Design", "Web Development"]
  },
  {
    term: "Domain Authority (DA)",
    category: "SEO",
    definition: "A search engine ranking score developed by Moz that predicts how likely a website is to rank on search engine result pages (SERPs).",
    related: ["Backlink", "Page Authority", "SEO"]
  },
  {
    term: "E-E-A-T",
    category: "SEO",
    definition: "Experience, Expertise, Authoritativeness, and Trustworthiness. Google's quality guidelines that assess content creators and content quality.",
    related: ["SEO", "Content Quality", "Google Quality Guidelines"]
  },
  {
    term: "Exit Intent",
    category: "CRO",
    definition: "A technology that detects when a user is about to leave a website (typically by moving their mouse toward the close button or address bar) and displays a targeted popup.",
    related: ["Popup", "Conversion", "Lead Generation"]
  },
  {
    term: "Favicon",
    category: "Design",
    definition: "A small icon (16x16 or 32x32 pixels) that appears in browser tabs and bookmarks. Helps with brand recognition and professionalism.",
    related: ["Brand", "User Experience", "Browser"]
  },
  {
    term: "FID (First Input Delay)",
    category: "Performance",
    definition: "A Core Web Vitals metric measuring the time from when a user first interacts with a page to when the browser can begin processing that interaction. Now replaced by INP.",
    related: ["Core Web Vitals", "INP", "Page Speed"]
  },
  {
    term: "Funnel",
    category: "CRO",
    definition: "The journey a user takes through your website toward a conversion. Typically visualized as a funnel with wide top (awareness) and narrow bottom (conversion).",
    related: ["Conversion", "User Journey", "CRO"]
  },
  {
    term: "GDPR",
    category: "Legal",
    definition: "General Data Protection Regulation - a comprehensive data privacy law in the European Union that governs how businesses collect and handle personal data.",
    related: ["Privacy Policy", "Cookie Consent", "Data Protection"]
  },
  {
    term: "Hero Section",
    category: "Design",
    definition: "The top section of a webpage, typically containing the main headline, value proposition, and primary call to action. First impressions matter here.",
    related: ["Above the Fold", "CTA", "Landing Page"]
  },
  {
    term: "HTML",
    category: "Development",
    definition: "HyperText Markup Language - the standard markup language for creating web pages and web applications.",
    related: ["CSS", "JavaScript", "Web Development"]
  },
  {
    term: "HTTPS",
    category: "Security",
    definition: "HyperText Transfer Protocol Secure - an encrypted version of HTTP that protects user data and is now a ranking factor for Google.",
    related: ["SSL", "Security", "SEO"]
  },
  {
    term: "Indexing",
    category: "SEO",
    definition: "The process by which search engines store and organize content discovered during crawling, making it available for search queries.",
    related: ["Crawling", "Sitemap", "SEO"]
  },
  {
    term: "INP (Interaction to Next Paint)",
    category: "Performance",
    definition: "A Core Web Vitals metric that measures responsiveness. It records the latency of all interactions and reports the worst score. Replaced FID in 2024.",
    related: ["Core Web Vitals", "FID", "Page Speed"]
  },
  {
    term: "JavaScript",
    category: "Development",
    definition: "A programming language that enables interactive web pages and dynamic content. Essential for modern web applications but can impact performance.",
    related: ["HTML", "CSS", "Web Development"]
  },
  {
    term: "JSON-LD",
    category: "SEO",
    definition: "JavaScript Object Notation for Linked Data - a method of encoding structured data using JSON. Used for schema markup and structured data.",
    related: ["Schema Markup", "SEO", "Structured Data"]
  },
  {
    term: "Keyword Density",
    category: "SEO",
    definition: "The percentage of times a keyword or phrase appears on a web page compared to the total number of words on the page.",
    related: ["Keyword Research", "On-Page SEO", "Content Optimization"]
  },
  {
    term: "Landing Page",
    category: "CRO",
    definition: "A standalone page designed specifically for a marketing or advertising campaign, focused on converting visitors into leads or customers.",
    related: ["CTA", "Conversion", "A/B Testing"]
  },
  {
    term: "LCP (Largest Contentful Paint)",
    category: "Performance",
    definition: "A Core Web Vitals metric measuring loading performance. It marks the time when the largest content element becomes visible.",
    related: ["Core Web Vitals", "Page Speed", "User Experience"]
  },
  {
    term: "Lead Generation",
    category: "CRO",
    definition: "The process of attracting and converting strangers into people who have indicated interest in your product or service.",
    related: ["Conversion", "CTA", "Funnel"]
  },
  {
    term: "Meta Description",
    category: "SEO",
    definition: "An HTML attribute that provides a brief summary of a web page. Appears in search results below the title tag.",
    related: ["SEO", "Title Tag", "SERP"]
  },
  {
    term: "Mobile-First",
    category: "Design",
    definition: "An approach to web design where the mobile version is designed first, then expanded for larger screens. Essential since Google's mobile-first indexing.",
    related: ["Responsive Design", "Mobile SEO", "Core Web Vitals"]
  },
  {
    term: "Open Graph",
    category: "SEO",
    definition: "A protocol that allows websites to control how they're displayed when shared on social media platforms like Facebook and LinkedIn.",
    related: ["Social Sharing", "Meta Tags", "SEO"]
  },
  {
    term: "Organic Search",
    category: "SEO",
    definition: "Search results that appear naturally (not paid) based on their relevance to the search query. Opposite of paid search advertising.",
    related: ["SEO", "SERP", "PPC"]
  },
  {
    term: "Page Speed",
    category: "Performance",
    definition: "The amount of time it takes for a web page to load. A critical factor for both user experience and SEO rankings.",
    related: ["Core Web Vitals", "LCP", "Performance Optimization"]
  },
  {
    term: "Pagination",
    category: "UX",
    definition: "The method of dividing content across multiple pages. Important for user experience and SEO when dealing with large amounts of content.",
    related: ["UX", "SEO", "Content Strategy"]
  },
  {
    term: "PPC (Pay-Per-Click)",
    category: "Advertising",
    definition: "A model of internet marketing where advertisers pay a fee each time their ad is clicked. Common platforms include Google Ads and Facebook Ads.",
    related: ["SEO", "Advertising", "SEM"]
  },
  {
    term: "Redirect",
    category: "SEO",
    definition: "A way to send both users and search engines from one URL to another. Common types include 301 (permanent) and 302 (temporary) redirects.",
    related: ["SEO", "URL", "Migration"]
  },
  {
    term: "Responsive Design",
    category: "Design",
    definition: "An approach to web design that makes pages render well on all devices and screen sizes by using flexible layouts and media queries.",
    related: ["Mobile-First", "CSS", "UX"]
  },
  {
    term: "Schema Markup",
    category: "SEO",
    definition: "A form of microdata that helps search engines understand the meaning behind your content. Can enhance search results with rich snippets.",
    related: ["JSON-LD", "Structured Data", "SEO"]
  },
  {
    term: "Screaming Frog",
    category: "SEO",
    definition: "A popular SEO tool that crawls websites and provides detailed reports on technical SEO issues, redirects, and more.",
    related: ["SEO Audit", "Technical SEO", "Crawling"]
  },
  {
    term: "SERP",
    category: "SEO",
    definition: "Search Engine Results Page - the page users see after entering a search query. Includes organic results, ads, and featured snippets.",
    related: ["SEO", "Organic Search", "PPC"]
  },
  {
    term: "Sitemap",
    category: "SEO",
    definition: "A file that lists all the pages on your website, helping search engines discover and index your content. Can be XML or HTML.",
    related: ["Crawling", "Indexing", "SEO"]
  },
  {
    term: "SSL/TLS",
    category: "Security",
    definition: "Secure Sockets Layer/Transport Layer Security - encryption protocols that secure data transfer between a website and its visitors.",
    related: ["HTTPS", "Security", "Trust"]
  },
  {
    term: "Technical SEO",
    category: "SEO",
    definition: "The process of optimizing a website for crawling and indexing. Includes site speed, mobile optimization, schema markup, and more.",
    related: ["SEO", "Page Speed", "Schema Markup"]
  },
  {
    term: "Title Tag",
    category: "SEO",
    definition: "An HTML element that specifies the title of a web page. Appears in search results and browser tabs. Critical for both SEO and user experience.",
    related: ["SEO", "Meta Description", "On-Page SEO"]
  },
  {
    term: "Traffic",
    category: "Analytics",
    definition: "The visitors who come to your website. Can be measured by total visits, unique visitors, page views, and other metrics.",
    related: ["Analytics", "Bounce Rate", "Conversions"]
  },
  {
    term: "Trust Signals",
    category: "CRO",
    definition: "Elements on a website that increase visitor confidence, such as testimonials, security badges, client logos, and reviews.",
    related: ["Conversion", "Social Proof", "Trust"]
  },
  {
    term: "URL Structure",
    category: "SEO",
    definition: "The format and organization of URLs on your website. Should be clean, descriptive, and include relevant keywords.",
    related: ["SEO", "Technical SEO", "Site Architecture"]
  },
  {
    term: "User Experience (UX)",
    category: "Design",
    definition: "The overall experience of a user when interacting with a website. Includes ease of use, navigation, and satisfaction.",
    related: ["CRO", "Conversion", "Design"]
  },
  {
    term: "Viewport",
    category: "Design",
    definition: "The visible area of a webpage. Mobile devices have smaller viewports, making responsive design essential.",
    related: ["Responsive Design", "Mobile-First", "CSS"]
  },
  {
    term: "Web Vitals",
    category: "Performance",
    definition: "See Core Web Vitals - Google's initiative to provide unified guidance for quality signals essential to delivering a great user experience.",
    related: ["LCP", "CLS", "INP"]
  },
  {
    term: "White Hat SEO",
    category: "SEO",
    definition: "Ethical SEO techniques that follow search engine guidelines and focus on providing value to users. Opposite of Black Hat SEO.",
    related: ["SEO", "Black Hat SEO", "Link Building"]
  },
  {
    term: "XML Sitemap",
    category: "SEO",
    definition: "A structured list of all pages on a website, formatted for search engines. Helps crawlers discover and index content efficiently.",
    related: ["Sitemap", "Crawling", "Indexing"]
  }
];

const categories = ["All", ...new Set(glossaryTerms.map(t => t.category))];

export default function GlossaryPage() {
  return (
    <main className="flex min-h-screen flex-col bg-charcoal-black">
      <Header />

      <div className="pt-24 pb-20">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-kiiro-yellow/10 to-transparent opacity-30" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <div className="px-4 py-2 rounded-full bg-kiiro-yellow/20 text-kiiro-yellow text-sm font-semibold mb-6 border border-kiiro-yellow/30 inline-block">
                📖 Free Resource
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-off-white mb-6">
                SEO & Web Design <span className="text-kiiro-yellow">Glossary</span>
              </h1>
              <p className="text-xl text-off-white/80 max-w-2xl mx-auto">
                Master the language of digital marketing. Comprehensive definitions of SEO, web design, and conversion optimization terms.
              </p>
            </div>
          </div>
        </section>

        {/* Search */}
        <section className="pb-8">
          <div className="container mx-auto px-4">
            <div className="max-w-xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-off-white/40" />
                <input
                  type="text"
                  placeholder="Search terms..."
                  className="w-full pl-12 pr-4 py-4 bg-charcoal-gray/50 border border-white/10 rounded-xl text-off-white placeholder:text-off-white/40 focus:outline-none focus:border-kiiro-yellow/50"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Terms Grid */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 gap-4">
                {glossaryTerms.map((item, index) => (
                  <div
                    key={index}
                    className="bg-charcoal-gray/30 border border-white/5 rounded-xl p-6 hover:border-kiiro-yellow/30 transition-colors"
                  >
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <h3 className="text-xl font-bold text-kiiro-yellow">
                        {item.term}
                      </h3>
                      <span className="px-3 py-1 bg-white/5 text-off-white/60 text-xs rounded-full">
                        {item.category}
                      </span>
                    </div>
                    <p className="text-off-white/80 leading-relaxed mb-4">
                      {item.definition}
                    </p>
                    {item.related && (
                      <div className="flex flex-wrap gap-2">
                        {item.related.map((rel, i) => (
                          <Link
                            key={i}
                            href={`#${rel.toLowerCase().replace(/\s+/g, '-')}`}
                            className="text-xs text-kiiro-yellow/70 hover:text-kiiro-yellow flex items-center gap-1"
                          >
                            {rel}
                            <ArrowRight className="w-3 h-3" />
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="bg-gradient-to-br from-charcoal-gray/50 to-charcoal-gray/30 rounded-2xl p-8 border border-white/10">
                <h2 className="text-2xl font-bold text-off-white mb-4">
                  Need Help Understanding Your Website?
                </h2>
                <p className="text-off-white/70 mb-6">
                  Get a free consultation to understand how these concepts apply to your business.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="px-6 py-3 bg-kiiro-yellow text-charcoal-black font-semibold rounded-lg hover:bg-kiiro-yellow/90 transition-colors"
                  >
                    Get Free Consultation
                  </Link>
                  <Link
                    href="/audit"
                    className="px-6 py-3 border border-kiiro-yellow/50 text-kiiro-yellow font-semibold rounded-lg hover:bg-kiiro-yellow/10 transition-colors"
                  >
                    Free Website Audit
                  </Link>
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
