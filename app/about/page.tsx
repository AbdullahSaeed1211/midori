import { Metadata } from "next";
import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Kiiro.cx | Professional Website Design for Entrepreneurs",
  description: "Meet the team behind kiiro.cx - passionate about helping entrepreneurs and growing businesses establish credibility through professional websites that convert visitors into customers.",
  keywords: "about kiiro, web design team, entrepreneur website designer, Abdullah Saeed, kiiro.cx team",
  authors: [{ name: "kiiro.cx" }],
  openGraph: {
    type: "website",
    title: "About Kiiro.cx | Professional Website Design for Entrepreneurs",
    description: "Passionate about helping entrepreneurs establish credibility through professional websites that convert.",
    siteName: "kiiro.cx",
  }
};

export default function AboutPage() {
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
                👋 Meet the Team
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-off-white mb-6">
                Passionate About <span className="text-kiiro-yellow">Your Success</span>
              </h1>
              <p className="text-xl text-off-white/80 max-w-2xl mx-auto">
                We're not just website designers. We're entrepreneurs who understand the challenges you face and the importance of establishing credibility online.
              </p>
            </div>
          </div>
        </section>

        {/* Founder Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-charcoal-gray/95 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="relative">
                    <div className="w-64 h-64 mx-auto rounded-full overflow-hidden border-4 border-kiiro-yellow/30">
                      <img
                        src="/avatars/michael.webp"
                        alt="Abdullah Saeed - Founder of kiiro.cx"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h2 className="text-3xl font-bold text-off-white mb-2">Abdullah Saeed</h2>
                      <p className="text-kiiro-yellow font-medium mb-4">Founder & Lead Designer</p>
                      <p className="text-off-white/80 leading-relaxed">
                        With over 3 years of experience in web design and development, I've helped 15+ entrepreneurs
                        transform their online presence. I understand that your website isn't just a digital business card
                        – it's your most important salesperson.
                      </p>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-kiiro-yellow rounded-full"></div>
                        <span className="text-off-white/80">3+ years in web design & development</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-kiiro-yellow rounded-full"></div>
                        <span className="text-off-white/80">15+ successful client projects</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-kiiro-yellow rounded-full"></div>
                        <span className="text-off-white/80">Specialized in entrepreneur websites</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-off-white mb-4">
                  Our Mission & Values
                </h2>
                <p className="text-xl text-off-white/70 max-w-2xl mx-auto">
                  Building more than websites – building successful businesses
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-charcoal-gray/95 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-blue-400 text-xl">🎯</span>
                  </div>
                  <h3 className="text-off-white font-semibold mb-3">Results-Driven</h3>
                  <p className="text-off-white/60">
                    Every design decision is made with conversion optimization in mind. We focus on what actually works.
                  </p>
                </div>

                <div className="bg-charcoal-gray/95 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
                  <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-green-400 text-xl">🤝</span>
                  </div>
                  <h3 className="text-off-white font-semibold mb-3">Entrepreneur-First</h3>
                  <p className="text-off-white/60">
                    We understand your challenges because we've been there. No corporate jargon, just real solutions.
                  </p>
                </div>

                <div className="bg-charcoal-gray/95 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
                  <div className="w-12 h-12 bg-kiiro-yellow/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-kiiro-yellow text-xl">⚡</span>
                  </div>
                  <h3 className="text-off-white font-semibold mb-3">Fast & Transparent</h3>
                  <p className="text-off-white/60">
                    Clear timelines, regular updates, and honest communication. What you see is what you get.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-kiiro-yellow/10 to-green-500/10 rounded-2xl p-8 md:p-12 border border-kiiro-yellow/20">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-off-white mb-2">By the Numbers</h2>
                  <p className="text-off-white/70">Our track record speaks for itself</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                  <div>
                    <div className="text-3xl md:text-4xl font-bold text-kiiro-yellow mb-2">15+</div>
                    <div className="text-off-white/60 text-sm">Projects Completed</div>
                  </div>
                  <div>
                    <div className="text-3xl md:text-4xl font-bold text-kiiro-yellow mb-2">3+</div>
                    <div className="text-off-white/60 text-sm">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-3xl md:text-4xl font-bold text-kiiro-yellow mb-2">98%</div>
                    <div className="text-off-white/60 text-sm">Client Satisfaction</div>
                  </div>
                  <div>
                    <div className="text-3xl md:text-4xl font-bold text-kiiro-yellow mb-2">24hrs</div>
                    <div className="text-off-white/60 text-sm">Average Response</div>
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
                Ready to Build Something Amazing?
              </h2>
              <p className="text-xl text-off-white/80 mb-8">
                Let's discuss how we can help establish your credibility and convert more visitors into customers.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-kiiro-yellow text-charcoal-black hover:bg-kiiro-yellow/90"
                >
                  <Link href="/contact">
                    Book a Free Consultation
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-kiiro-yellow text-kiiro-yellow hover:bg-kiiro-yellow/10"
                >
                  <Link href="/case-studies">
                    View Our Work
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
