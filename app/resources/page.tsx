import { Metadata } from "next";
import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Download, CheckCircle, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Free Resources | Website Templates, Checklists & Tools | kiiro.cx",
  description: "Download free website design templates, conversion optimization checklists, and SEO tools to improve your online business. All resources designed for entrepreneurs.",
  keywords: "free website templates, SEO checklist, conversion optimization tools, entrepreneur resources, web design checklist",
  authors: [{ name: "kiiro.cx" }],
  openGraph: {
    type: "website",
    title: "Free Resources | Website Templates, Checklists & Tools | kiiro.cx",
    description: "Download free website design templates and conversion optimization tools for entrepreneurs.",
    siteName: "kiiro.cx",
  }
};

// Resource data - in a real app, this could come from a CMS
const resources = [
  {
    id: "seo-checklist",
    title: "Complete SEO Checklist for Entrepreneurs",
    description: "A comprehensive 50-point checklist covering everything from technical SEO to content optimization. Perfect for entrepreneurs launching their first website.",
    type: "Checklist",
    downloadUrl: "/scripts/seo-checklist.js",
    category: "SEO",
    featured: true,
    rating: 4.8,
    downloads: 250
  },
  {
    id: "conversion-audit",
    title: "Website Conversion Audit Template",
    description: "Step-by-step framework to audit your website's conversion potential. Identify bottlenecks and optimization opportunities worth thousands in revenue.",
    type: "Template",
    downloadUrl: "/audit",
    category: "Conversion",
    featured: true,
    rating: 4.9,
    downloads: 180
  },
  {
    id: "landing-page-blueprint",
    title: "High-Converting Landing Page Blueprint",
    description: "A proven template structure that has generated 300%+ improvement in conversion rates for our clients. Includes copy framework and design principles.",
    type: "Template",
    downloadUrl: "#blueprint",
    category: "Design",
    featured: false,
    rating: 4.7,
    downloads: 320
  },
  {
    id: "pricing-strategy",
    title: "Entrepreneur Pricing Strategy Guide",
    description: "How to price your services for maximum profit while remaining competitive. Real examples from successful entrepreneur websites.",
    type: "Guide",
    downloadUrl: "#pricing",
    category: "Business",
    featured: false,
    rating: 4.6,
    downloads: 150
  }
];

export default function ResourcesPage() {
  return (
    <main className="flex min-h-screen flex-col bg-charcoal-black">
      <Header />

      <div className="pt-24 pb-20">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-kiiro-yellow/10 to-transparent opacity-30" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <div className="px-4 py-1.5 rounded-full bg-green-500/20 text-green-400 text-sm font-medium mb-6 border border-green-500/30 inline-block">
                🎁 Free Resources
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-off-white mb-6">
                Tools & Templates to <span className="text-kiiro-yellow">Grow Your Business</span>
              </h1>
              <p className="text-xl text-off-white/80 max-w-2xl mx-auto">
                Download proven templates, checklists, and guides that have helped 15+ entrepreneurs improve their websites and increase conversions.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Resources */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-off-white mb-8 text-center">
                Featured Resources
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                {resources.filter(resource => resource.featured).map((resource) => (
                  <div key={resource.id} className="bg-charcoal-gray/95 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-kiiro-yellow/30 transition-colors">
                    <div className="flex items-start justify-between mb-4">
                      <span className="px-3 py-1 bg-kiiro-yellow/20 text-kiiro-yellow text-sm font-medium rounded-full">
                        {resource.category}
                      </span>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-kiiro-yellow text-kiiro-yellow" />
                        <span className="text-off-white/80 text-sm">{resource.rating}</span>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-off-white mb-3">
                      {resource.title}
                    </h3>

                    <p className="text-off-white/70 leading-relaxed mb-6">
                      {resource.description}
                    </p>

                    <div className="flex items-center justify-between mb-6">
                      <div className="text-off-white/60 text-sm">
                        {resource.downloads}+ downloads
                      </div>
                      <div className="text-off-white/60 text-sm">
                        {resource.type}
                      </div>
                    </div>

                    <Button
                      asChild
                      className="w-full bg-kiiro-yellow text-charcoal-black hover:bg-kiiro-yellow/90"
                    >
                      <Link href={resource.downloadUrl}>
                        <Download className="w-4 h-4 mr-2" />
                        Download Free
                      </Link>
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* All Resources */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-off-white mb-8 text-center">
                All Resources
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {resources.map((resource) => (
                  <div key={resource.id} className="bg-charcoal-gray/95 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-kiiro-yellow/30 transition-colors">
                    <div className="flex items-start justify-between mb-3">
                      <span className="px-2 py-1 bg-kiiro-yellow/20 text-kiiro-yellow text-xs font-medium rounded-full">
                        {resource.category}
                      </span>
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 fill-kiiro-yellow text-kiiro-yellow" />
                        <span className="text-off-white/80 text-xs">{resource.rating}</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-off-white mb-2">
                      {resource.title}
                    </h3>

                    <p className="text-off-white/70 text-sm leading-relaxed mb-4">
                      {resource.description}
                    </p>

                    <div className="flex items-center justify-between mb-4">
                      <div className="text-off-white/60 text-xs">
                        {resource.downloads}+ downloads
                      </div>
                      <div className="text-off-white/60 text-xs">
                        {resource.type}
                      </div>
                    </div>

                    <Button
                      asChild
                      size="sm"
                      className="w-full bg-kiiro-yellow text-charcoal-black hover:bg-kiiro-yellow/90"
                    >
                      <Link href={resource.downloadUrl}>
                        <Download className="w-3 h-3 mr-2" />
                        Download
                      </Link>
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Value Proposition */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-kiiro-yellow/10 to-blue-500/10 rounded-2xl p-8 md:p-12 border border-kiiro-yellow/20">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-off-white mb-4">
                    Why These Resources Work
                  </h2>
                  <p className="text-off-white/80">
                    Based on real results from our client projects
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-6 h-6 text-green-400" />
                    </div>
                    <h3 className="text-off-white font-semibold mb-2">Proven Results</h3>
                    <p className="text-off-white/70 text-sm">
                      Templates based on strategies that increased client conversions by 200-400%
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-6 h-6 text-blue-400" />
                    </div>
                    <h3 className="text-off-white font-semibold mb-2">Entrepreneur-Focused</h3>
                    <p className="text-off-white/70 text-sm">
                      Designed specifically for entrepreneurs, not large corporations
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-12 h-12 bg-kiiro-yellow/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-6 h-6 text-kiiro-yellow" />
                    </div>
                    <h3 className="text-off-white font-semibold mb-2">Actionable</h3>
                    <p className="text-off-white/70 text-sm">
                      Step-by-step guides that you can implement immediately
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-off-white mb-4">
                Need More Personalized Help?
              </h2>
              <p className="text-xl text-off-white/80 mb-8">
                Get a free website audit and homepage demo customized for your business.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-kiiro-yellow text-charcoal-black hover:bg-kiiro-yellow/90"
                >
                  <Link href="/contact">
                    Book Free Consultation
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
        </section>
      </div>

      <Footer />
    </main>
  );
}
