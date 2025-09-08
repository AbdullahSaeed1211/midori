import { Metadata } from "next";
import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, X, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "7 Deadly Conversion Optimization Mistakes | kiiro.cx",
  description: "Learn the most common conversion mistakes entrepreneurs make and how to fix them. Stop losing customers to poor website design and user experience.",
  keywords: "conversion optimization, website conversion, sales optimization, entrepreneur mistakes, user experience",
  authors: [{ name: "kiiro.cx" }],
  openGraph: {
    type: "article",
    title: "7 Deadly Conversion Optimization Mistakes That Are Killing Your Sales",
    description: "Learn the most common conversion mistakes entrepreneurs make and how to fix them.",
    siteName: "kiiro.cx",
  }
};

export default function ConversionOptimizationMistakes() {
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
              <span className="px-3 py-1 bg-red-500/20 text-red-400 text-sm font-medium rounded-full">
                Conversion
              </span>
              <div className="flex items-center gap-1 text-off-white/60 text-sm">
                <Calendar className="w-4 h-4" />
                January 22, 2025
              </div>
              <div className="flex items-center gap-1 text-off-white/60 text-sm">
                <Clock className="w-4 h-4" />
                8 min read
              </div>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-off-white mb-6">
              7 Deadly Conversion Optimization Mistakes That Are Killing Your Sales
            </h1>

            <p className="text-xl text-off-white/80 leading-relaxed mb-8">
              Learn the most common conversion mistakes entrepreneurs make and how to fix them. Stop losing customers to poor website design and user experience.
            </p>

            {/* Article Content */}
            <div className="prose prose-lg prose-invert max-w-none">
              <h2>Introduction</h2>
              <p>
                Every day, thousands of potential customers visit your website and leave without converting. The problem isn&apos;t always lack of traffic – it&apos;s often poor conversion optimization. Here are the 7 most common mistakes entrepreneurs make that are silently killing their sales.
              </p>

              <h2>Mistake #1: Poor First Impression</h2>
              <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-6 mb-6">
                <div className="flex items-start gap-3">
                  <X className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-red-400 font-semibold mb-2">The Problem</h3>
                    <p className="text-off-white/80">
                      Your hero section is cluttered, your value proposition is unclear, or your website looks outdated. Visitors make snap judgments within 3 seconds of landing on your site.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-6 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-green-400 font-semibold mb-2">The Solution</h3>
                    <p className="text-off-white/80">
                      Create a clean, focused hero section with a clear headline, compelling subheadline, and prominent call-to-action. Use modern design principles and ensure your site loads quickly.
                    </p>
                  </div>
                </div>
              </div>

              <h2>Mistake #2: Too Many Choices</h2>
              <p>
                The paradox of choice is real. When visitors are overwhelmed with options, they often choose nothing. This is especially common with:
              </p>
              <ul>
                <li>Multiple primary calls-to-action competing for attention</li>
                <li>Overwhelming navigation menus</li>
                <li>Too many form fields</li>
                <li>Excessive product/service options without clear differentiation</li>
              </ul>

              <h2>Mistake #3: Weak Calls-to-Action</h2>
              <p>
                Generic CTAs like &ldquo;Submit&rdquo; or &ldquo;Click Here&rdquo; don&apos;t motivate action. Effective CTAs should:
              </p>
              <ul>
                <li>Use action-oriented language (&ldquo;Get Started,&rdquo; &ldquo;Claim Your Free Trial&rdquo;)</li>
                <li>Create urgency or scarcity</li>
                <li>Highlight specific benefits</li>
                <li>Be visually prominent and strategically placed</li>
              </ul>

              <h2>Mistake #4: Ignoring Mobile Users</h2>
              <p>
                With over 60% of internet traffic coming from mobile devices, ignoring mobile optimization is suicide. Common mobile mistakes include:
              </p>
              <ul>
                <li>Text that&apos;s too small to read</li>
                <li>Buttons that are too small to tap</li>
                <li>Forms that are difficult to fill on mobile</li>
                <li>Images that don&apos;t scale properly</li>
              </ul>

              <h2>Mistake #5: Lack of Social Proof</h2>
              <p>
                People are naturally skeptical. Without social proof, visitors won&apos;t trust your claims. Essential social proof elements include:
              </p>
              <ul>
                <li>Customer testimonials and reviews</li>
                <li>Case studies and success stories</li>
                <li>Trust badges and certifications</li>
                <li>Social media follower counts</li>
                <li>Media mentions and awards</li>
              </ul>

              <h2>Mistake #6: Complicated Checkout Process</h2>
              <p>
                Abandoned carts cost e-commerce businesses billions annually. Simplify your checkout by:
              </p>
              <ul>
                <li>Reducing the number of steps</li>
                <li>Offering guest checkout options</li>
                <li>Providing multiple payment methods</li>
                <li>Showing clear shipping costs upfront</li>
                <li>Adding trust signals throughout the process</li>
              </ul>

              <h2>Mistake #7: No Clear Value Proposition</h2>
              <p>
                The biggest mistake of all is not clearly communicating what makes you different and why customers should choose you. Your value proposition should answer:
              </p>
              <ul>
                <li>What specific problem do you solve?</li>
                <li>How are you different from competitors?</li>
                <li>What results can customers expect?</li>
                <li>Why should they trust you?</li>
              </ul>

              <h2>How to Fix These Mistakes</h2>
              <p>
                Fixing conversion optimization mistakes requires a systematic approach:
              </p>

              <h3>1. Conduct User Research</h3>
              <p>
                Use tools like heatmaps, session recordings, and user surveys to understand how visitors interact with your site.
              </p>

              <h3>2. A/B Test Everything</h3>
              <p>
                Don&apos;t make assumptions. Test different versions of your headlines, CTAs, layouts, and forms to see what performs better.
              </p>

              <h3>3. Focus on Mobile First</h3>
              <p>
                Design for mobile users first, then enhance for desktop. This ensures your site works well for the majority of your visitors.
              </p>

              <h3>4. Implement Analytics</h3>
              <p>
                Track conversion funnels, bounce rates, and user behavior to identify where visitors are dropping off.
              </p>

              <h2>Conclusion</h2>
              <p>
                Conversion optimization isn&apos;t about tricking people into buying – it&apos;s about removing friction and making it easy for the right customers to find and purchase your products or services. By avoiding these 7 deadly mistakes and implementing proven optimization strategies, you&apos;ll see significant improvements in your conversion rates and revenue.
              </p>

              <p>
                Remember, small improvements compound over time. Start with one or two changes, measure the results, and iterate from there.
              </p>
            </div>

            {/* CTA Section */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <div className="bg-gradient-to-r from-kiiro-yellow/10 to-green-500/10 rounded-2xl p-8 border border-kiiro-yellow/20 text-center">
                <h3 className="text-2xl font-bold text-off-white mb-4">
                  Ready to Fix Your Conversion Issues?
                </h3>
                <p className="text-off-white/70 mb-6">
                  Get a professional conversion audit and optimization strategy for your website.
                </p>
                <Button
                  asChild
                  size="lg"
                  className="bg-kiiro-yellow text-charcoal-black hover:bg-kiiro-yellow/90"
                >
                  <Link href="/contact">
                    Get Conversion Audit
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
