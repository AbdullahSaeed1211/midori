import React from "react";
import { Metadata } from "next";
import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";
import { ContactTabs } from "@/components/ui/contact-tabs";
import { ContactQuickAnswers } from "@/components/ui/contact-quick-answers";

export const metadata: Metadata = {
  title: "Contact Us | Kiiro.cx - Let's Build Something Amazing",
  description: "Ready to transform your website into a lead-generating machine? Book a free consultation or send us a message. Response guaranteed within 4 hours.",
  keywords: ["contact kiiro", "web development consultation", "website contact", "book a call", "Dubai web developer contact"],
  authors: [{ name: "kiiro.cx" }],
  openGraph: {
    type: "website",
    title: "Contact Us | Kiiro.cx - Let's Build Something Amazing",
    description: "Ready to transform your website into a lead-generating machine? Book a free consultation or send us a message.",
    url: "https://kiiro.cx/contact",
    siteName: "kiiro.cx",
  },
  alternates: {
    canonical: "https://kiiro.cx/contact",
  },
};

export default function ContactPage() {
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
                💬 Let&apos;s Talk Business
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-off-white mb-6">
                Ready to <span className="text-kiiro-yellow">Build Your Digital Presence</span>?<br/>
                Let&apos;s Make It Happen.
              </h1>
              <p className="text-xl text-off-white/80 max-w-2xl mx-auto mb-8">
                Book a <span className="text-kiiro-yellow font-semibold">free 15-minute consultation</span> and get an instant homepage demo. 
                We&apos;ll show you exactly how to improve your conversions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="flex items-center gap-2 text-off-white/60 text-sm">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  Response guaranteed within 4 hours
                </div>
                <div className="flex items-center gap-2 text-off-white/60 text-sm">
                  <div className="w-2 h-2 bg-kiiro-yellow rounded-full"></div>
                  Currently accepting 5 new clients this month
                </div>
              </div>
            </div>

            {/* Contact Tabs */}
            <ContactTabs />

            {/* Contact Info */}
            <div className="mt-16 max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-charcoal-gray/95 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
                  <div className="w-12 h-12 bg-kiiro-yellow/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-kiiro-yellow text-xl">📧</span>
                  </div>
                  <h3 className="text-off-white font-semibold mb-2">Email Us</h3>
                  <p className="text-off-white/60 text-sm mb-3">For detailed inquiries</p>
                  <a href="mailto:abdullah.saeed1724@gmail.com" className="text-kiiro-yellow hover:underline">
                    abdullah.saeed1724@gmail.com
                  </a>
                </div>

                <div className="bg-charcoal-gray/95 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
                  <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-green-400 text-xl">📞</span>
                  </div>
                  <h3 className="text-off-white font-semibold mb-2">Call Us</h3>
                  <p className="text-off-white/60 text-sm mb-3">Quick questions? Call directly</p>
                  <a href="tel:+917398826339" className="text-kiiro-yellow hover:underline">
                    +91 7398826339
                  </a>
                </div>

                <div className="bg-charcoal-gray/95 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-blue-400 text-xl">🌍</span>
                  </div>
                  <h3 className="text-off-white font-semibold mb-2">Time Zone</h3>
                  <p className="text-off-white/60 text-sm mb-3">India Standard Time (IST)</p>
                  <p className="text-kiiro-yellow">UTC +5:30</p>
                </div>

                <div className="bg-charcoal-gray/95 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center md:col-span-2 lg:col-span-3">
                  <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-purple-400 text-xl">🏢</span>
                  </div>
                  <h3 className="text-off-white font-semibold mb-2">Company Information</h3>
                  <p className="text-off-white/60 text-sm mb-4">Registered company address and official contact details</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                    <div>
                      <p className="text-off-white/90 text-sm mb-1"><strong>Registered Address:</strong></p>
                      <p className="text-off-white/70 text-sm">India</p>
                    </div>
                    <div>
                      <p className="text-off-white/90 text-sm mb-1"><strong>Domestic Telephone:</strong></p>
                      <a href="tel:+917398826339" className="text-kiiro-yellow hover:underline text-sm">
                        +91 7398826339
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-charcoal-gray/95 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center md:col-span-2 lg:col-span-3">
                  <div className="w-12 h-12 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-orange-400 text-xl">🆘</span>
                  </div>
                  <h3 className="text-off-white font-semibold mb-2">Customer Support</h3>
                  <p className="text-off-white/60 text-sm mb-3">Need help? Visit our support center</p>
                  <a
                    href="/support"
                    className="inline-flex items-center gap-2 bg-kiiro-yellow text-charcoal-black px-4 py-2 rounded-lg font-medium hover:bg-kiiro-yellow/90 transition-colors"
                  >
                    Visit Support Center
                    <span className="text-sm">→</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Answers Section */}
            <div className="mt-16 max-w-3xl mx-auto">
              <ContactQuickAnswers />
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
} 