
import React from "react";
import { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";
import { CaseStudiesSection } from "@/components/landing/case-studies-section";

export const metadata: Metadata = {
  title: "Case Studies - Web Design & Development Portfolio",
  description: "Explore our portfolio of successful projects across various industries. See how we've helped clients achieve their digital goals with custom web solutions.",
  keywords: "case studies, web design projects, development portfolio, client success stories, web applications, digital transformation",
  openGraph: {
    title: "Case Studies - Web Design & Development Portfolio | kiiro.cx",
    description: "Explore our portfolio of successful projects across various industries. See how we've helped clients achieve their digital goals with custom web solutions.",
    url: "https://kiiro.cx/case-studies",
    type: "website",
  },
  alternates: {
    canonical: "https://kiiro.cx/case-studies",
  },
};

export default function CaseStudiesPage() {

  return (
      <main className="flex min-h-screen flex-col bg-charcoal-black">
        <Header />
      <CaseStudiesSection maxItems={50} showStats={true} showScrollIndicator={false} />

      {/* Dedicated Booking CTA for Case Studies Page */}
      <section className="py-20 bg-gradient-to-br from-kiiro-yellow/5 to-teal-accent/5 border-y border-off-white/10">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-kiiro-yellow/10 border border-kiiro-yellow/20 text-kiiro-yellow text-sm font-bold mb-8">
              <div className="w-2 h-2 bg-kiiro-yellow rounded-full animate-pulse" />
              Ready to Create Your Success Story?
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-off-white mb-6">
              Let&apos;s Build Something <span className="text-kiiro-yellow">Amazing</span> Together
            </h2>

            <p className="text-xl text-off-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
              Inspired by our client success stories? Let&apos;s discuss your project and create measurable results for your business.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#booking"
                className="px-8 py-4 bg-kiiro-yellow text-charcoal-black rounded-xl font-bold text-lg hover:bg-kiiro-yellow/90 transition-all duration-300 flex items-center gap-3 hover:scale-105 hover:shadow-2xl hover:shadow-kiiro-yellow/30"
              >
                Book Free Strategy Call
                <ArrowUpRight className="w-5 h-5" />
              </a>
              <a
                href="/contact"
                className="px-8 py-4 border-2 border-teal-accent text-teal-accent rounded-xl font-bold text-lg hover:bg-teal-accent/10 transition-all duration-300 hover:scale-105"
              >
                Get In Touch
              </a>
            </div>

            {/* Social Proof */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-black text-kiiro-yellow mb-1">15+</div>
                <div className="text-sm text-off-white/70">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-teal-accent mb-1">100%</div>
                <div className="text-sm text-off-white/70">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-purple-accent mb-1">1-2</div>
                <div className="text-sm text-off-white/70">Weeks Average</div>
              </div>
            </div>
          </div>
        </div>
      </section>

        <Footer />
      </main>
  );
} 