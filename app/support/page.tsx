import React from "react";
import { Metadata } from "next";
import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";

export const metadata: Metadata = {
  title: "Customer Support | Kiiro.cx - Get Help & Support",
  description: "Get help with your web development projects. Find answers to frequently asked questions, contact support, and get assistance with your Kiiro.cx services.",
  keywords: ["customer support", "help", "faq", "web development support", "kiiro support"],
};

export default function SupportPage() {
  return (
    <main className="flex min-h-screen flex-col bg-charcoal-black text-off-white">
      <Header />

      <div className="pt-24 pb-20">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-kiiro-yellow/10 to-transparent opacity-30" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center mb-20">
              <div className="px-4 py-2 rounded-full bg-kiiro-yellow/20 text-kiiro-yellow text-sm font-semibold mb-8 border border-kiiro-yellow/30 inline-block backdrop-blur-sm">
                🆘 Customer Support Center
              </div>
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-off-white mb-8 leading-tight">
                How Can We <span className="text-kiiro-yellow">Help You</span>?
              </h1>
              <p className="text-lg md:text-xl text-off-white/80 max-w-3xl mx-auto leading-relaxed mb-8">
                Find answers to common questions, get support for your projects, or reach out to our team.
                We&apos;re here to ensure your success with comprehensive support resources.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-off-white/60">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span>24-hour response time</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-kiiro-yellow rounded-full"></div>
                  <span>Expert support team</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Comprehensive FAQ</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Support Options */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-kiiro-yellow/10 text-kiiro-yellow text-sm font-medium rounded-full border border-kiiro-yellow/20 mb-6">
                ⚡ Quick Support Options
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-off-white mb-4">
                Get Help Your Way
              </h2>
              <p className="text-off-white/70 text-base">
                Choose the support method that works best for you
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-charcoal-gray/95 to-charcoal-gray/90 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:border-kiiro-yellow/40 hover:shadow-xl hover:shadow-kiiro-yellow/5 transition-all duration-500 group relative">
                {/* Subtle background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-kiiro-yellow/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-kiiro-yellow/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-kiiro-yellow/20 transition-colors duration-300">
                    <span className="text-kiiro-yellow text-2xl">💬</span>
                  </div>
                  <h3 className="text-off-white font-semibold mb-3 text-lg">Live Chat</h3>
                  <p className="text-off-white/60 text-sm mb-6 leading-relaxed">Get instant help from our support team</p>
                  <button className="bg-kiiro-yellow text-charcoal-black px-6 py-3 rounded-lg font-medium hover:bg-kiiro-yellow/90 hover:shadow-lg hover:shadow-kiiro-yellow/25 transition-all duration-300 w-full">
                    Start Chat
                  </button>
                </div>
              </div>

              <div className="bg-gradient-to-br from-charcoal-gray/95 to-charcoal-gray/90 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:border-green-500/40 hover:shadow-xl hover:shadow-green-500/5 transition-all duration-500 group relative">
                {/* Subtle background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-green-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-green-500/20 transition-colors duration-300">
                    <span className="text-green-400 text-2xl">📧</span>
                  </div>
                  <h3 className="text-off-white font-semibold mb-3 text-lg">Email Support</h3>
                  <p className="text-off-white/60 text-sm mb-6 leading-relaxed">Send us detailed inquiries</p>
                  <a
                    href="mailto:abdullah.saeed1724@gmail.com"
                    className="inline-flex items-center justify-center gap-2 text-green-400 hover:text-green-300 transition-colors font-medium"
                  >
                    abdullah.saeed1724@gmail.com
                    <span className="text-sm">↗</span>
                  </a>
                </div>
              </div>

              <div className="bg-gradient-to-br from-charcoal-gray/95 to-charcoal-gray/90 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-500 group relative">
                {/* Subtle background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-500/20 transition-colors duration-300">
                    <span className="text-blue-400 text-2xl">📞</span>
                  </div>
                  <h3 className="text-off-white font-semibold mb-3 text-lg">Call Us</h3>
                  <p className="text-off-white/60 text-sm mb-6 leading-relaxed">Quick questions? Call directly</p>
                  <a
                    href="tel:+917398826339"
                    className="inline-flex items-center justify-center gap-2 text-blue-400 hover:text-blue-300 transition-colors font-medium"
                  >
                    +91 7398826339
                    <span className="text-sm">📞</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-kiiro-yellow/10 text-kiiro-yellow text-sm font-medium rounded-full border border-kiiro-yellow/20 mb-6">
                ❓ Frequently Asked Questions
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-off-white mb-4">
                Find Quick Answers
              </h2>
              <p className="text-off-white/70 text-base">
                Browse our comprehensive FAQ to find instant answers to common questions
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              <div className="bg-gradient-to-br from-charcoal-gray/95 to-charcoal-gray/90 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-kiiro-yellow/40 hover:shadow-xl hover:shadow-kiiro-yellow/5 transition-all duration-500 group">
                <div className="p-8">
                  <h3 className="text-xl font-semibold text-off-white mb-4 group-hover:text-kiiro-yellow transition-colors duration-300">
                    How do I get started with a new project?
                  </h3>
                  <p className="text-off-white/80 leading-relaxed">
                    Book a free 15-minute consultation call through our contact page. We&lsquo;ll discuss your requirements,
                    provide a custom proposal, and answer any questions you have about our process.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-charcoal-gray/95 to-charcoal-gray/90 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-500 group">
                <div className="p-8">
                  <h3 className="text-xl font-semibold text-off-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                    What&apos;s included in your web development services?
                  </h3>
                  <p className="text-off-white/80 leading-relaxed">
                    Our services include responsive website design, custom development, SEO optimization, performance optimization,
                    and up to 180 days of post-launch support. All projects include 2 rounds of revisions and mobile-first design.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-charcoal-gray/95 to-charcoal-gray/90 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-green-500/40 hover:shadow-xl hover:shadow-green-500/5 transition-all duration-500 group">
                <div className="p-8">
                  <h3 className="text-xl font-semibold text-off-white mb-4 group-hover:text-green-400 transition-colors duration-300">
                    How long does a typical project take?
                  </h3>
                  <p className="text-off-white/80 leading-relaxed">
                    Project timelines vary based on complexity, but most websites take 2-6 weeks from start to finish.
                    We&lsquo;ll provide a detailed timeline during your consultation and keep you updated throughout the process.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-charcoal-gray/95 to-charcoal-gray/90 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-purple-500/40 hover:shadow-xl hover:shadow-purple-500/5 transition-all duration-500 group">
                <div className="p-8">
                  <h3 className="text-xl font-semibold text-off-white mb-4 group-hover:text-purple-400 transition-colors duration-300">
                    Do you provide ongoing maintenance and support?
                  </h3>
                  <p className="text-off-white/80 leading-relaxed">
                    Yes! All projects include 180 days of free bug fixes and support. We also offer optional monthly maintenance
                    packages for ongoing updates, security monitoring, and performance optimization.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-charcoal-gray/95 to-charcoal-gray/90 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-orange-500/40 hover:shadow-xl hover:shadow-orange-500/5 transition-all duration-500 group">
                <div className="p-8">
                  <h3 className="text-xl font-semibold text-off-white mb-4 group-hover:text-orange-400 transition-colors duration-300">
                    What if I&lsquo;m not satisfied with the final result?
                  </h3>
                  <p className="text-off-white/80 leading-relaxed">
                    We include 2 rounds of revisions in every project to ensure you&apos;re happy with the final result.
                    If you&apos;re still not satisfied, please refer to our <a href="/cancellation" className="text-kiiro-yellow hover:underline">Cancellation &amp; Refund Policy</a> for options.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-charcoal-gray/95 to-charcoal-gray/90 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-indigo-500/40 hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-500 group">
                <div className="p-8">
                  <h3 className="text-xl font-semibold text-off-white mb-4 group-hover:text-indigo-400 transition-colors duration-300">
                    Do you work with clients outside India?
                  </h3>
                  <p className="text-off-white/80 leading-relaxed">
                    Absolutely! We work with clients worldwide and handle all international payments and communications.
                    Our team is experienced in working across different time zones and cultures.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-charcoal-gray/95 to-charcoal-gray/90 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-pink-500/40 hover:shadow-xl hover:shadow-pink-500/5 transition-all duration-500 group">
                <div className="p-8">
                  <h3 className="text-xl font-semibold text-off-white mb-4 group-hover:text-pink-400 transition-colors duration-300">
                    What payment methods do you accept?
                  </h3>
                  <p className="text-off-white/80 leading-relaxed">
                    We accept various payment methods including bank transfers, credit/debit cards, and digital payment platforms.
                    For Indian clients, we support UPI, Paytm, and other local payment methods.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-charcoal-gray/95 to-charcoal-gray/90 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-500/40 hover:shadow-xl hover:shadow-cyan-500/5 transition-all duration-500 group">
                <div className="p-8">
                  <h3 className="text-xl font-semibold text-off-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                    How do I request changes or updates to my website?
                  </h3>
                  <p className="text-off-white/80 leading-relaxed">
                    For projects within the free support period (180 days), simply email us with your request.
                    For ongoing maintenance, we offer monthly packages. All change requests should be submitted in writing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-charcoal-gray/95 to-charcoal-gray/90 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
                {/* Background pattern */}
                <div className="absolute inset-0 bg-gradient-to-r from-kiiro-yellow/5 via-transparent to-green-500/5 opacity-50" />
                <div className="absolute top-0 right-0 w-32 h-32 bg-kiiro-yellow/10 rounded-full -translate-y-16 translate-x-16" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-green-500/10 rounded-full translate-y-12 -translate-x-12" />

                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-kiiro-yellow/10 text-kiiro-yellow text-sm font-medium rounded-full border border-kiiro-yellow/20 mb-6">
                    📞 Still Need Help?
                  </div>

                  <h2 className="text-xl md:text-2xl font-bold text-off-white mb-4">
                    Get Direct Support
                  </h2>

                  <p className="text-off-white/70 text-base md:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                    Can&apos;t find what you&apos;re looking for? Contact our support team directly for personalized assistance.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h3 className="text-lg font-semibold text-off-white mb-6 flex items-center justify-center gap-2">
                        <span className="text-kiiro-yellow">📋</span>
                        Contact Information
                      </h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-center gap-4">
                          <div className="w-12 h-12 bg-kiiro-yellow/10 rounded-2xl flex items-center justify-center">
                            <span className="text-kiiro-yellow text-lg">📧</span>
                          </div>
                          <div className="text-left">
                            <p className="text-off-white/90 font-medium">Email Support</p>
                            <a href="mailto:abdullah.saeed1724@gmail.com" className="text-kiiro-yellow hover:underline">
                              abdullah.saeed1724@gmail.com
                            </a>
                          </div>
                        </div>
                        <div className="flex items-center justify-center gap-4">
                          <div className="w-12 h-12 bg-green-500/10 rounded-2xl flex items-center justify-center">
                            <span className="text-green-400 text-lg">📞</span>
                          </div>
                          <div className="text-left">
                            <p className="text-off-white/90 font-medium">Phone Support</p>
                            <a href="tel:+917398826339" className="text-green-400 hover:underline">
                              +91 7398826339
                            </a>
                          </div>
                        </div>
                        <div className="flex items-center justify-center gap-4">
                          <div className="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center">
                            <span className="text-blue-400 text-lg">🌍</span>
                          </div>
                          <div className="text-left">
                            <p className="text-off-white/90 font-medium">Time Zone</p>
                            <p className="text-off-white/70">IST (UTC +5:30)</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-off-white mb-6 flex items-center justify-center gap-2">
                        <span className="text-green-400">🕒</span>
                        Business Hours
                      </h3>
                      <div className="space-y-3">
                        <div className="flex justify-center items-center gap-4 p-3 bg-charcoal-gray/50 rounded-lg">
                          <span className="text-off-white/80 text-sm">Monday - Friday</span>
                          <span className="text-off-white/90 text-sm font-medium">9:00 AM - 6:00 PM IST</span>
                        </div>
                        <div className="flex justify-center items-center gap-4 p-3 bg-charcoal-gray/50 rounded-lg">
                          <span className="text-off-white/80 text-sm">Saturday</span>
                          <span className="text-off-white/90 text-sm font-medium">10:00 AM - 2:00 PM IST</span>
                        </div>
                        <div className="flex justify-center items-center gap-4 p-3 bg-charcoal-gray/50 rounded-lg">
                          <span className="text-off-white/80 text-sm">Sunday</span>
                          <span className="text-off-white/90 text-sm font-medium">Emergency Support Only</span>
                        </div>
                      </div>
                      <div className="mt-6 p-4 bg-kiiro-yellow/10 rounded-lg border border-kiiro-yellow/20">
                        <p className="text-sm text-off-white/90">
                          <strong>Response Time:</strong> We respond to all inquiries within 24 hours during business days.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Support */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="bg-gradient-to-br from-red-500/10 to-red-500/5 backdrop-blur-sm border border-red-500/20 rounded-2xl p-8 text-center relative overflow-hidden">
                {/* Background pattern */}
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-transparent opacity-50" />

                <div className="relative z-10">
                  <div className="w-20 h-20 bg-red-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <span className="text-red-400 text-2xl">🚨</span>
                  </div>

                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/20 text-red-400 text-sm font-medium rounded-full border border-red-500/30 mb-6">
                    ⚠️ Emergency Support
                  </div>

                  <h2 className="text-xl md:text-2xl font-bold text-off-white mb-4">
                    Critical Issues Only
                  </h2>

                  <p className="text-off-white/80 text-base leading-relaxed mb-8">
                    For critical website issues that affect your business operations, we provide emergency support outside normal business hours.
                    This service is reserved for urgent matters only.
                  </p>

                  <a
                    href="tel:+917398826339"
                    className="inline-flex items-center gap-3 bg-red-500 text-white px-8 py-4 rounded-lg font-medium hover:bg-red-500/90 hover:shadow-lg hover:shadow-red-500/25 transition-all duration-300 text-lg"
                  >
                    <span className="text-2xl">📞</span>
                    Call Emergency Line
                  </a>
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
