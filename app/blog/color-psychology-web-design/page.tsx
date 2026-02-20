import { Metadata } from "next";
import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { ArticleJsonLd } from "@/components/seo/article-json-ld";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";

export const metadata: Metadata = {
  title: "Color Psychology in Web Design: Data-Driven Choices | kiiro.cx",
  description: "Learn how to use color psychology in web design to influence user behavior. Discover which colors drive conversions, build trust, and create the right emotional response for your brand.",
  keywords: "color psychology web design, website color scheme, conversion color optimization, emotional design, color psychology marketing",
  authors: [{ name: "kiiro.cx" }],
  alternates: {
    canonical: 'https://kiiro.cx/blog/color-psychology-web-design'
  },
  openGraph: {
    images: ["https://kiiro.cx/og/blog/color-psychology-web-design.png"],

    type: "article",
    title: "Color Psychology in Web Design: Data-Driven Choices",
    description: "Learn how to use color psychology in web design to influence user behavior and drive conversions.",
    siteName: "kiiro.cx",
    url: "https://kiiro.cx/blog/color-psychology-web-design",
  },
  twitter: {
    card: "summary_large_image",
    title: "Color Psychology in Web Design: Data-Driven Choices | kiiro.cx",
    description: "Learn how to use color psychology in web design to drive conversions.",
  }
};

export default function ColorPsychologyWebDesign() {
  return (
    <main className="flex min-h-screen flex-col bg-charcoal-black">
      <Header />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://kiiro.cx" },
          { name: "Blog", url: "https://kiiro.cx/blog" },
          { name: "Color Psychology in Web Design: Data-Driven Choices | kiiro.cx", url: "https://kiiro.cx/blog/color-psychology-web-design" }
        ]}
      />
      <ArticleJsonLd
        title="Color Psychology in Web Design: Data-Driven Choices | kiiro.cx"
        description="Learn how to use color psychology in web design to influence user behavior. Discover which colors drive conversions, build trust, and create the right emotional response."
        url="https://kiiro.cx/blog/color-psychology-web-design"
        image="https://kiiro.cx/projects/kiiro.webp"
        datePublished="2025-10-20"
        dateModified="2025-10-20"
        keywords={[
          "color psychology web design",
          "website color scheme",
          "conversion color optimization",
          "emotional design",
          "color psychology marketing",
        ]}
      />

      <article className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-kiiro-yellow hover:text-kiiro-yellow/80 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 bg-pink-500/20 text-pink-400 text-sm font-medium rounded-full">
                Design
              </span>
              <div className="flex items-center gap-1 text-off-white/60 text-sm">
                <Calendar className="w-4 h-4" />
                October 20, 2025
              </div>
              <div className="flex items-center gap-1 text-off-white/60 text-sm">
                <Clock className="w-4 h-4" />
                13 min read
              </div>
            </div>

            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-off-white mb-8 leading-tight">
              Color Psychology in Web Design: Data-Driven Choices
            </h1>

            <p className="text-lg md:text-xl text-off-white/80 leading-relaxed mb-10 max-w-3xl">
              Color isn't just aesthetic—it's a powerful psychological tool that influences user behavior, trust, and conversion. Learn how to make data-driven color decisions for your website.
            </p>

            <div className="flex flex-wrap items-center gap-6 mb-12 p-6 bg-gradient-to-r from-pink-500/10 to-transparent rounded-2xl border border-pink-500/20">
              <div className="flex items-center gap-2 text-pink-400">
                <Clock className="w-5 h-5" />
                <span className="font-semibold">13 min read</span>
              </div>
              <div className="flex items-center gap-4 text-sm text-off-white/70">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-pink-400 rounded-full"></span>
                  Psychology
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  Conversion
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  Strategy
                </span>
              </div>
            </div>

            <div className="prose prose-lg prose-invert max-w-none">
              <div className="mb-12 p-6 bg-charcoal-gray/50 rounded-2xl border border-white/10">
                <h3 className="text-lg font-bold text-off-white mb-4 flex items-center gap-2">
                  <span className="text-kiiro-yellow">📋</span>
                  Table of Contents
                </h3>
                <nav className="space-y-2">
                  <a href="#introduction" className="block text-off-white/70 hover:text-kiiro-yellow transition-colors text-sm">Introduction</a>
                  <a href="#color-basics" className="block text-off-white/70 hover:text-kiiro-yellow transition-colors text-sm ml-4">Color Psychology Basics</a>
                  <a href="#color-meanings" className="block text-off-white/70 hover:text-kiiro-yellow transition-colors text-sm ml-4">Color Meanings by Industry</a>
                  <a href="#conversion-colors" className="block text-off-white/70 hover:text-kiiro-yellow transition-colors text-sm ml-4">Conversion Color Optimization</a>
                  <a href="#implementation" className="block text-off-white/70 hover:text-kiiro-yellow transition-colors text-sm ml-4">Implementation Strategy</a>
                  <a href="#testing" className="block text-off-white/70 hover:text-kiiro-yellow transition-colors text-sm ml-4">Testing & Optimization</a>
                </nav>
              </div>

              <h2 id="introduction" className="text-2xl md:text-3xl font-bold text-off-white mb-6 mt-12 first:mt-0">Introduction</h2>
              <p className="text-off-white/80 text-lg leading-relaxed mb-8">
                Color psychology is the study of how colors influence human behavior and decision-making. In web design, these principles can significantly impact conversion rates, user engagement, and brand perception. Research shows that color can increase brand recognition by up to 80% and influence purchase decisions in 85% of consumers.
              </p>
              <p className="text-off-white/80 text-lg leading-relaxed mb-8">
                This guide covers how to apply color psychology in web design with a data-driven approach that moves beyond subjective preferences.
              </p>

              <h2 id="color-basics" className="text-2xl md:text-3xl font-bold text-off-white mb-6 mt-12">Color Psychology Basics</h2>
              <p className="text-off-white/80 text-lg leading-relaxed mb-8">
                Understanding the psychological effects of colors is the foundation for effective web design. Colors trigger emotional responses that influence user behavior.
              </p>

              <div className="mb-10 p-6 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-2xl border border-blue-500/20">
                <h3 className="text-xl font-bold text-blue-400 mb-4 flex items-center gap-2">
                  <span className="text-2xl">🎨</span>
                  Primary Color Meanings
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-off-white">Blue:</strong>
                      <span className="text-off-white/70 ml-1">Trust, security, professionalism - most popular for business</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-off-white">Red:</strong>
                      <span className="text-off-white/70 ml-1">Urgency, excitement, passion - effective for CTAs</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-off-white">Yellow:</strong>
                      <span className="text-off-white/70 ml-1">Optimism, attention, warmth - use as accent</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-off-white">Green:</strong>
                      <span className="text-off-white/70 ml-1">Growth, health, money - nature and finance</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-off-white">Purple:</strong>
                      <span className="text-off-white/70 ml-1">Luxury, creativity, wisdom - premium products</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-off-white">Orange:</strong>
                      <span className="text-off-white/70 ml-1">Friendliness, energy, affordability - e-commerce</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-gray-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-off-white">Black:</strong>
                      <span className="text-off-white/70 ml-1">Luxury, sophistication, authority</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-white-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-off-white">White:</strong>
                      <span className="text-off-white/70 ml-1">Cleanliness, simplicity, modern - background choice</span>
                    </div>
                  </li>
                </ul>
              </div>

              <h2 id="color-meanings" className="text-2xl md:text-3xl font-bold text-off-white mb-6 mt-12">Color Meanings by Industry</h2>
              <p className="text-off-white/80 text-lg leading-relaxed mb-8">
                Industry norms influence color effectiveness. Using colors that align with industry expectations builds trust, while strategic deviation can help differentiation.
              </p>

              <div className="mb-10 p-6 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl border border-purple-500/20">
                <h3 className="text-xl font-bold text-purple-400 mb-4 flex items-center gap-2">
                  <span className="text-2xl">🏢</span>
                  Industry Color Recommendations
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90"><strong>Finance/Banking:</strong> Blue, green - trust, stability</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90"><strong>Healthcare:</strong> Blue, green, white - health, cleanliness</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90"><strong>E-commerce:</strong> Orange, red - urgency, action</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90"><strong>Technology:</strong> Blue, dark gray - innovation, trust</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90"><strong>Food/Restaurant:</strong> Red, orange, yellow - appetite, energy</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90"><strong>Luxury:</strong> Black, gold, purple - exclusivity</span>
                  </li>
                </ul>
              </div>

              <h2 id="conversion-colors" className="text-2xl md:text-3xl font-bold text-off-white mb-6 mt-12">Conversion Color Optimization</h2>
              <p className="text-off-white/80 text-lg leading-relaxed mb-8">
                The color of your call-to-action buttons significantly impacts click-through rates. Research consistently shows that strategic color choices can boost conversions.
              </p>

              <div className="mb-10 p-6 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-2xl border border-green-500/20">
                <h3 className="text-xl font-bold text-green-400 mb-4 flex items-center gap-2">
                  <span className="text-2xl">🎯</span>
                  CTA Color Best Practices
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Create contrast with surrounding colors</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Red and orange buttons often outperform green</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Test colors against your specific background</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Ensure accessibility (contrast ratios)</span>
                  </li>
                </ul>
              </div>

              <div className="mb-10 p-6 bg-gradient-to-r from-orange-500/10 to-yellow-500/10 rounded-2xl border border-orange-500/20">
                <h3 className="text-xl font-bold text-orange-400 mb-4 flex items-center gap-2">
                  <span className="text-2xl">⚠️</span>
                  Common Mistakes
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Using too many colors (aim for 3-5)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Choosing colors based only on personal preference</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Ignoring accessibility requirements</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Not testing colors with actual users</span>
                  </li>
                </ul>
              </div>

              <h2 id="implementation" className="text-2xl md:text-3xl font-bold text-off-white mb-6 mt-12">Implementation Strategy</h2>
              <p className="text-off-white/80 text-lg leading-relaxed mb-8">
                A strategic approach to color implementation ensures consistency and maximizes psychological impact.
              </p>

              <div className="mb-10 p-6 bg-gradient-to-r from-cyan-500/10 to-teal-500/10 rounded-2xl border border-cyan-500/20">
                <h3 className="text-xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
                  <span className="text-2xl">📋</span>
                  Color System Framework
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90"><strong>Primary color:</strong> Main brand identity (40-60% of color usage)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90"><strong>Secondary color:</strong> Support and variety (20-30%)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90"><strong>Accent color:</strong> CTAs and highlights (5-10%)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90"><strong>Neutrals:</strong> Text, backgrounds (20-30%)</span>
                  </li>
                </ul>
              </div>

              <h2 id="testing" className="text-2xl md:text-3xl font-bold text-off-white mb-6 mt-12">Testing & Optimization</h2>
              <p className="text-off-white/80 text-lg leading-relaxed mb-8">
                Color psychology provides guidance, but testing confirms effectiveness for your specific audience and context.
              </p>

              <div className="mb-10 p-6 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-2xl border border-indigo-500/20">
                <h3 className="text-xl font-bold text-indigo-400 mb-4 flex items-center gap-2">
                  <span className="text-2xl">🧪</span>
                  Testing Methods
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">A/B test CTA button colors</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Heatmap analysis of visual attention</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">User surveys about color perception</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Conversion funnel analysis by color variations</span>
                  </li>
                </ul>
              </div>

              <div className="mb-12 p-8 bg-gradient-to-r from-kiiro-yellow/10 to-yellow-500/10 rounded-2xl border border-kiiro-yellow/20">
                <h2 className="text-2xl md:text-3xl font-bold text-off-white mb-6">Conclusion</h2>
                <p className="text-off-white/80 text-lg leading-relaxed mb-6">
                  Color psychology is a powerful tool, but it should guide rather than dictate your design decisions. Use these principles as a starting point, then test with your specific audience to find what works best.
                </p>
                <div className="flex items-center gap-2 text-kiiro-yellow">
                  <span className="text-2xl">🎯</span>
                  <p className="font-semibold">
                    Need help developing a data-driven color strategy? We specialize in conversion-focused design.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-16 pt-12 border-t border-white/10">
              <div className="bg-gradient-to-br from-charcoal-gray/95 to-charcoal-gray/90 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-kiiro-yellow/5 via-transparent to-green-500/5 opacity-50" />
                <div className="absolute top-0 right-0 w-32 h-32 bg-kiiro-yellow/10 rounded-full -translate-y-16 translate-x-16" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-green-500/10 rounded-full translate-y-12 -translate-x-12" />

                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-kiiro-yellow/10 text-kiiro-yellow text-sm font-medium rounded-full border border-kiiro-yellow/20 mb-6">
                    🚀 Ready to Take Action?
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-off-white mb-4">
                    Need Help with Color Strategy?
                  </h3>

                  <p className="text-off-white/70 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                    Get a conversion-focused color design for your website.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                    <Button
                      asChild
                      size="lg"
                      className="bg-kiiro-yellow text-charcoal-black hover:bg-kiiro-yellow/90 hover:shadow-lg hover:shadow-kiiro-yellow/25 transition-all duration-300"
                    >
                      <Link href="/contact">
                        <span className="font-semibold">Get Design Consultation</span>
                        <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
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

                  <p className="text-off-white/50 text-sm">
                    ✅ Color strategy • ✅ Conversion optimization • ✅ Accessibility compliance
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
