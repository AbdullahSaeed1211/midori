import { Metadata } from "next";
import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";
import { Sparkles, Target, Zap, Heart, ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Kiiro - Conversion-Focused Web Design Agency",
  description: "Learn about Kiiro.cx - a results-driven web design agency helping entrepreneurs build high-conversion websites in 7-14 days.",
  openGraph: {
    title: "About Kiiro - Conversion-Focused Web Design Agency",
    description: "Learn about Kiiro.cx - a results-driven web design agency helping entrepreneurs build high-conversion websites.",
    url: "https://kiiro.cx/about",
    siteName: "kiiro.cx",
  },
};

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col bg-charcoal-black">
      <Header />
      
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-off-white mb-6">
              We Build Websites That <span className="text-kiiro-yellow">Convert</span>
            </h1>
            <p className="text-xl text-off-white/70 mb-12">
              Kiiro.cx is a conversion-focused web design agency built for entrepreneurs who want results, not just a pretty website.
            </p>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div>
                <h2 className="text-2xl font-bold text-off-white mb-4">Our Mission</h2>
                <p className="text-off-white/70 mb-6">
                  We believe every entrepreneur deserves a website that works as hard as they do. Our focus is simple: create websites that turn visitors into customers.
                </p>
                <p className="text-off-white/70">
                  No lengthy timelines. No confusing jargon. Just fast, effective websites that deliver real business results.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-off-white mb-4">Why Kiiro?</h2>
                <ul className="space-y-3">
                  {[
                    "7-14 day delivery",
                    "Conversion-optimized design",
                    "Transparent pricing",
                    "No agency overhead",
                    "Results-focused approach"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-off-white/70">
                      <CheckCircle className="w-5 h-5 text-kiiro-yellow flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-charcoal-gray/30 rounded-2xl p-8 border border-off-white/10">
              <h2 className="text-2xl font-bold text-off-white mb-6">Ready to convert more visitors?</h2>
              <p className="text-off-white/70 mb-6">
                Let&apos;s discuss how we can help grow your business with a high-converting website.
              </p>
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-kiiro-yellow text-charcoal-black font-semibold rounded-lg hover:bg-kiiro-yellow/90 transition-colors"
              >
                Get in touch <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
