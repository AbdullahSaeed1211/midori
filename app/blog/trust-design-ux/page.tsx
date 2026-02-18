import { Metadata } from "next";
import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { ArticleJsonLd } from "@/components/seo/article-json-ld";

export const metadata: Metadata = {
  title: "Building Trust Online: UX Design That Converts | kiiro.cx",
  description: "Learn how to design UX that builds trust and drives conversions. Discover the psychology behind trust signals, testimonial placement, security indicators, and brand credibility.",
  keywords: "trust design, UX design, conversion design, trust signals, testimonials, security indicators, brand credibility, user experience",
  authors: [{ name: "kiiro.cx" }],
  alternates: {
    canonical: 'https://kiiro.cx/blog/trust-design-ux'
  },
  openGraph: {
    images: ["https://kiiro.cx/og/blog/trust-design-ux.png"],

    type: "article",
    title: "Building Trust Online: UX Design That Converts",
    description: "Learn how to design UX that builds trust and drives conversions with research-backed strategies.",
    siteName: "kiiro.cx",
    url: "https://kiiro.cx/blog/trust-design-ux",
  },
  twitter: {
    card: "summary_large_image",
    title: "Building Trust Online: UX Design That Converts | kiiro.cx",
    description: "Discover the psychology behind trust signals and conversion-focused UX design.",
  }
};

export default function TrustDesignUX() {
  return (
    <main className="flex min-h-screen flex-col bg-charcoal-black">
      <Header />
      <ArticleJsonLd
        title="Building Trust Online: UX Design That Converts | kiiro.cx"
        description="Learn how to design UX that builds trust and drives conversions. Discover the psychology behind trust signals, testimonial placement, security indicators, and brand credibility."
        url="https://kiiro.cx/blog/trust-design-ux"
        image="https://kiiro.cx/projects/kiiro.webp"
        datePublished="2025-05-15"
        dateModified="2025-05-15"
        keywords={[
          "trust design",
          "UX design",
          "conversion design",
          "trust signals",
          "testimonials",
          "security indicators",
          "brand credibility",
          "user experience",
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
              <span className="px-3 py-1 bg-purple-500/20 text-purple-400 text-sm font-medium rounded-full">
                Design
              </span>
              <div className="flex items-center gap-1 text-off-white/60 text-sm">
                <Calendar className="w-4 h-4" />
                May 15, 2025
              </div>
              <div className="flex items-center gap-1 text-off-white/60 text-sm">
                <Clock className="w-4 h-4" />
                13 min read
              </div>
            </div>

            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-off-white mb-8 leading-tight">
              Building Trust Online: UX Design That Converts
            </h1>

            <p className="text-lg md:text-xl text-off-white/80 leading-relaxed mb-10 max-w-3xl">
              Trust is the currency of the digital economy. Without it, even the most beautiful designs fail to convert. Learn the UX principles that establish credibility and drive action.
            </p>

            <div className="flex flex-wrap items-center gap-6 mb-12 p-6 bg-gradient-to-r from-purple-500/10 to-transparent rounded-2xl border border-purple-500/20">
              <div className="flex items-center gap-2 text-purple-400">
                <Clock className="w-5 h-5" />
                <span className="font-semibold">13 min read</span>
              </div>
              <div className="flex items-center gap-4 text-sm text-off-white/70">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  Trust Signals
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  Testimonials
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                  Security
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
                  <a href="#trust-psychology" className="block text-off-white/70 hover:text-kiiro-yellow transition-colors text-sm ml-4">The Psychology of Trust</a>
                  <a href="#trust-signals" className="block text-off-white/70 hover:text-kiiro-yellow transition-colors text-sm ml-4">Essential Trust Signals</a>
                  <a href="#testimonials" className="block text-off-white/70 hover:text-kiiro-yellow transition-colors text-sm ml-4">Testimonial Placement Strategies</a>
                  <a href="#security-indicators" className="block text-off-white/70 hover:text-kiiro-yellow transition-colors text-sm ml-4">Security Indicators That Work</a>
                  <a href="#brand-credibility" className="block text-off-white/70 hover:text-kiiro-yellow transition-colors text-sm ml-4">Building Brand Credibility</a>
                </nav>
              </div>

              <h2 id="introduction" className="text-2xl md:text-3xl font-bold text-off-white mb-6 mt-12 first:mt-0">Introduction</h2>
              <p className="text-off-white/80 text-lg leading-relaxed mb-8">
                In an era of sophisticated phishing attacks, data breaches, and online scams, users have become rightfully skeptical. Research from Edelman reveals that 81% of consumers say they need to trust a brand before they will buy from them. This makes trust-building not just a nice-to-have, but a critical business imperative.
              </p>
              <p className="text-off-white/80 text-lg leading-relaxed mb-8">
                The challenge for designers and marketers is that trust cannot be manufactured overnight. It must be earned through consistent, credible signals that reassure users at every stage of their journey. The good news? Strategic UX design can accelerate trust-building and dramatically improve conversion rates.
              </p>

              <h2 id="trust-psychology" className="text-2xl md:text-3xl font-bold text-off-white mb-6 mt-12">The Psychology of Trust</h2>
              <p className="text-off-white/80 text-lg leading-relaxed mb-8">
                Trust operates on both conscious and subconscious levels. While users can rationally evaluate your credentials and policies, their initial trust assessment happens almost instantaneously through visual and experiential cues.
              </p>

              <div className="mb-10 p-6 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-2xl border border-green-500/20">
                <h3 className="text-xl font-bold text-green-400 mb-4 flex items-center gap-2">
                  <span className="text-2xl">🧠</span>
                  Trust Statistics That Matter
                </h3>
                <p className="text-off-white/80 mb-6">
                  Research reveals the business impact of trust:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-off-white">88% of consumers</strong>
                      <span className="text-off-white/70 ml-1">say trust is a deciding factor in purchase decisions (PwC)</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-off-white">75% of users</strong>
                      <span className="text-off-white/70 ml-1">judge a company credibility based on website design (Stanford Persuasive Technology Lab)</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-off-white">Trusted brands</strong>
                      <span className="text-off-white/70 ml-1">command a 31% premium on average (Accenture)</span>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="mb-10 p-6 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-2xl border border-blue-500/20">
                <h3 className="text-xl font-bold text-blue-400 mb-4 flex items-center gap-2">
                  <span className="text-2xl">⚡</span>
                  The Trust Equation
                </h3>
                <p className="text-off-white/80 mb-6">
                  Trust can be understood through a simple formula that combines multiple factors:
                </p>
                <div className="bg-charcoal-black/50 rounded-xl p-4 text-center">
                  <p className="text-lg text-off-white font-semibold">
                    Trust = (Credibility + Reliability + Intimacy) / Self-Orientation
                  </p>
                </div>
                <p className="text-off-white/70 mt-4 text-sm">
                  This equation, developed by David Maister, shows that trust increases with expertise, consistency, and emotional connection, while decreasing with perceived self-interest.
                </p>
              </div>

              <h2 id="trust-signals" className="text-2xl md:text-3xl font-bold text-off-white mb-6 mt-12">Essential Trust Signals</h2>
              <p className="text-off-white/80 text-lg leading-relaxed mb-8">
                Trust signals are visual and textual elements that communicate credibility, security, and reliability. The most effective trust signals work together to create a cohesive narrative of trustworthiness.
              </p>

              <div className="mb-10 p-6 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl border border-purple-500/20">
                <h3 className="text-xl font-bold text-purple-400 mb-4 flex items-center gap-2">
                  <span className="text-2xl">🛡️</span>
                  Primary Trust Signals
                </h3>
                <p className="text-off-white/80 mb-6">
                  Every website should incorporate these fundamental trust elements:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-off-white">Professional design:</strong>
                      <span className="text-off-white/70 ml-1">Clean, modern, consistent visual language signals professionalism</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-off-white">Clear contact information:</strong>
                      <span className="text-off-white/70 ml-1">Physical address, phone number, and responsive support channels</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-off-white">About page:</strong>
                      <span className="text-off-white/70 ml-1">Team photos, company history, and mission statement</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-off-white">Privacy policy:</strong>
                      <span className="text-off-white/70 ml-1">Clear, accessible data handling policies required by GDPR and CCPA</span>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="mb-10 p-6 bg-gradient-to-r from-orange-500/10 to-yellow-500/10 rounded-2xl border border-orange-500/20">
                <h3 className="text-xl font-bold text-orange-400 mb-4 flex items-center gap-2">
                  <span className="text-2xl">🏆</span>
                  Third-Party Validation
                </h3>
                <p className="text-off-white/80 mb-6">
                  External validation carries more weight than self-promotion:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Industry awards and recognition badges</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Press mentions and media coverage</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Partnerships with recognized brands</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Certifications (ISO, SOC 2, HIPAA compliance)</span>
                  </li>
                </ul>
              </div>

              <h2 id="testimonials" className="text-2xl md:text-3xl font-bold text-off-white mb-6 mt-12">Testimonial Placement Strategies</h2>
              <p className="text-off-white/80 text-lg leading-relaxed mb-8">
                Testimonials are among the most powerful trust-building tools, but their effectiveness depends heavily on placement, authenticity, and presentation. A BrightLocal study found that 98% of consumers read online reviews for local businesses.
              </p>

              <div className="mb-10 p-6 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-2xl border border-indigo-500/20">
                <h3 className="text-xl font-bold text-indigo-400 mb-4 flex items-center gap-2">
                  <span className="text-2xl">📍</span>
                  Strategic Placement Locations
                </h3>
                <p className="text-off-white/80 mb-6">
                  Position testimonials at key decision points in the user journey:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-off-white">Homepage hero section:</strong>
                      <span className="text-off-white/70 ml-1">Immediate social proof for first-time visitors</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-off-white">Near pricing information:</strong>
                      <span className="text-off-white/70 ml-1">Reduces purchase anxiety at the moment of commitment</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-off-white">Checkout process:</strong>
                      <span className="text-off-white/70 ml-1">Reinforces decision right before payment</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-off-white">Service/product pages:</strong>
                      <span className="text-off-white/70 ml-1">Relevant testimonials specific to each offering</span>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="mb-10 p-6 bg-gradient-to-r from-cyan-500/10 to-teal-500/10 rounded-2xl border border-cyan-500/20">
                <h3 className="text-xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
                  <span className="text-2xl">✨</span>
                  Authentic Testimonial Elements
                </h3>
                <p className="text-off-white/80 mb-6">
                  Authentic testimonials include specific details that fake ones lack:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Full name and company (with permission)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Professional headshot or company logo</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Specific results or metrics achieved</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Link to LinkedIn profile or company website</span>
                  </li>
                </ul>
              </div>

              <h2 id="security-indicators" className="text-2xl md:text-3xl font-bold text-off-white mb-6 mt-12">Security Indicators That Work</h2>
              <p className="text-off-white/80 text-lg leading-relaxed mb-8">
                With cybersecurity concerns at an all-time high, users actively look for signs that their data will be protected. Security indicators should be visible but not alarming, reassuring without being intrusive.
              </p>

              <div className="mb-10 p-6 bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-2xl border border-red-500/20">
                <h3 className="text-xl font-bold text-red-400 mb-4 flex items-center gap-2">
                  <span className="text-2xl">🔒</span>
                  Essential Security Indicators
                </h3>
                <p className="text-off-white/80 mb-6">
                  These elements signal that user data is protected:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-off-white">SSL certificate:</strong>
                      <span className="text-off-white/70 ml-1">HTTPS padlock icon in browser bar (now table stakes)</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-off-white">Payment security badges:</strong>
                      <span className="text-off-white/70 ml-1">PCI DSS compliance, payment processor logos</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-off-white">Two-factor authentication:</strong>
                      <span className="text-off-white/70 ml-1">Option for enhanced account security</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-off-white">Data encryption notices:</strong>
                      <span className="text-off-white/70 ml-1">Visible statements about how data is protected</span>
                    </div>
                  </li>
                </ul>
              </div>

              <h2 id="brand-credibility" className="text-2xl md:text-3xl font-bold text-off-white mb-6 mt-12">Building Brand Credibility</h2>
              <p className="text-off-white/80 text-lg leading-relaxed mb-8">
                Brand credibility encompasses expertise, authority, and reputation. Unlike transactional trust signals, credibility is built through consistent demonstration of value and knowledge over time.
              </p>

              <div className="mb-10 p-6 bg-gradient-to-r from-violet-500/10 to-purple-500/10 rounded-2xl border border-violet-500/20">
                <h3 className="text-xl font-bold text-violet-400 mb-4 flex items-center gap-2">
                  <span className="text-2xl">📚</span>
                  Content-Based Credibility
                </h3>
                <p className="text-off-white/80 mb-6">
                  Establish authority through valuable content:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-violet-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">In-depth blog posts demonstrating industry expertise</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-violet-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Case studies with measurable results</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-violet-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">White papers and original research</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-violet-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/90">Speaking engagements and podcast appearances</span>
                  </li>
                </ul>
              </div>

              <div className="mb-12 p-8 bg-gradient-to-r from-kiiro-yellow/10 to-yellow-500/10 rounded-2xl border border-kiiro-yellow/20">
                <h2 className="text-2xl md:text-3xl font-bold text-off-white mb-6">Conclusion</h2>
                <p className="text-off-white/80 text-lg leading-relaxed mb-6">
                  Trust is not built through any single element, but through the cumulative effect of consistent, credible signals throughout the user experience. From professional design to security indicators to authentic testimonials, every touchpoint either builds or erodes trust.
                </p>
                <div className="flex items-center gap-2 text-kiiro-yellow">
                  <span className="text-2xl">🎯</span>
                  <p className="font-semibold">
                    The most effective trust-building strategies are authentic, specific, and strategically placed at key decision points in the user journey.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-16 pt-12 border-t border-white/10">
              <div className="bg-gradient-to-br from-charcoal-gray/95 to-charcoal-gray/90 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-kiiro-yellow/5 via-transparent to-purple-500/5 opacity-50" />
                <div className="absolute top-0 right-0 w-32 h-32 bg-kiiro-yellow/10 rounded-full -translate-y-16 translate-x-16" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-500/10 rounded-full translate-y-12 -translate-x-12" />

                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-kiiro-yellow/10 text-kiiro-yellow text-sm font-medium rounded-full border border-kiiro-yellow/20 mb-6">
                    🚀 Ready to Take Action?
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-off-white mb-4">
                    Ready to Build More Trust Online?
                  </h3>

                  <p className="text-off-white/70 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                    Get a comprehensive UX audit with trust-building recommendations tailored to your brand and audience.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                    <Button
                      asChild
                      size="lg"
                      className="bg-kiiro-yellow text-charcoal-black hover:bg-kiiro-yellow/90 hover:shadow-lg hover:shadow-kiiro-yellow/25 transition-all duration-300"
                    >
                      <Link href="/contact">
                        <span className="font-semibold">Get UX Consultation</span>
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
                    ✅ Trust signal analysis ✅ UX recommendations ✅ Conversion optimization
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
