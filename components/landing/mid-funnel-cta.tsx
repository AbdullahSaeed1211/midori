"use client";


import { BlurFade } from "@/components/magicui/blur-fade";
import { ArrowRight, Zap } from "lucide-react";
import Link from "next/link";

export function MidFunnelCTA() {
  return (
    <BlurFade delay={0.1} inView>
      <section className="py-16 bg-gradient-to-br from-kiiro-yellow/5 to-teal-accent/5 border-y border-off-white/10">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-kiiro-yellow/10 border border-kiiro-yellow/20 rounded-full mb-6">
              <Zap className="w-4 h-4 text-kiiro-yellow" />
              <span className="text-sm font-medium text-kiiro-yellow">READY TO GET STARTED?</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-off-white mb-4">
              Your Website Should Be Working 
              <span className="text-kiiro-yellow"> While You Sleep</span>
            </h2>
            
            <p className="text-xl text-off-white/80 leading-relaxed mb-8 max-w-2xl mx-auto">
              Stop losing potential customers to poor website performance. 
              Let&apos;s turn your website into your most effective sales tool.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#booking"
                className="px-8 py-4 bg-kiiro-yellow text-charcoal-black rounded-lg font-medium hover:bg-kiiro-yellow/90 transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105"
              >
                Book Free Strategy Call
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/audit"
                className="px-8 py-4 border border-teal-accent text-teal-accent rounded-lg font-medium hover:bg-teal-accent/10 transition-colors"
              >
                Get Free Website Audit
              </Link>
            </div>

            {/* Simple Social Proof */}
            <div className="mt-8 pt-6 border-t border-off-white/10">
              <p className="text-sm text-off-white/60">
                Join 15+ successful businesses • Average 197% ROI within 30 days
              </p>
            </div>
          </div>
        </div>
      </section>
    </BlurFade>
  );
} 