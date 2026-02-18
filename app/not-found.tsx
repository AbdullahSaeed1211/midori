import { Metadata } from "next";
import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, Home, Search, Compass } from "lucide-react";

export const metadata: Metadata = {
  title: "404 - Page Not Found | kiiro.cx",
  description: "The page you're looking for doesn't exist. Explore our services or contact us for help.",
};

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col bg-charcoal-black">
      <Header />

      <div className="flex-1 flex items-center justify-center pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            {/* Large 404 */}
            <div className="mb-8">
              <span className="text-[150px] md:text-[200px] font-bold text-kiiro-yellow/20 leading-none">
                404
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-off-white mb-4">
              Page Not Found
            </h1>

            <p className="text-lg text-off-white/70 mb-8 max-w-xl mx-auto">
              Oops! The page you're looking for seems to have wandered off. 
              Let's get you back on track.
            </p>

            {/* Quick Links */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
              <Link
                href="/"
                className="flex flex-col items-center gap-3 p-6 bg-charcoal-gray/50 rounded-xl border border-white/10 hover:border-kiiro-yellow/40 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-full bg-kiiro-yellow/20 flex items-center justify-center group-hover:bg-kiiro-yellow/30 transition-colors">
                  <Home className="w-6 h-6 text-kiiro-yellow" />
                </div>
                <span className="text-off-white font-medium">Home</span>
                <span className="text-off-white/50 text-sm">Go back home</span>
              </Link>

              <Link
                href="/blog"
                className="flex flex-col items-center gap-3 p-6 bg-charcoal-gray/50 rounded-xl border border-white/10 hover:border-kiiro-yellow/40 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-full bg-kiiro-yellow/20 flex items-center justify-center group-hover:bg-kiiro-yellow/30 transition-colors">
                  <Compass className="w-6 h-6 text-kiiro-yellow" />
                </div>
                <span className="text-off-white font-medium">Blog</span>
                <span className="text-off-white/50 text-sm">Read our insights</span>
              </Link>

              <Link
                href="/contact"
                className="flex flex-col items-center gap-3 p-6 bg-charcoal-gray/50 rounded-xl border border-white/10 hover:border-kiiro-yellow/40 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-full bg-kiiro-yellow/20 flex items-center justify-center group-hover:bg-kiiro-yellow/30 transition-colors">
                  <Search className="w-6 h-6 text-kiiro-yellow" />
                </div>
                <span className="text-off-white font-medium">Contact</span>
                <span className="text-off-white/50 text-sm">Get help</span>
              </Link>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-br from-charcoal-gray/50 to-charcoal-gray/30 rounded-2xl p-8 border border-white/10">
              <h2 className="text-xl font-bold text-off-white mb-4">
                Looking for something specific?
              </h2>
              <p className="text-off-white/60 mb-6">
                Check out our main pages or get a free website audit.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-kiiro-yellow text-charcoal-black hover:bg-kiiro-yellow/90"
                >
                  <Link href="/audit">
                    <span className="font-semibold">Free Website Audit</span>
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-kiiro-yellow/50 text-kiiro-yellow hover:bg-kiiro-yellow/10"
                >
                  <Link href="/contact">
                    <span>Contact Us</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
