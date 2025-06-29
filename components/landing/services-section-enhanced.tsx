"use client";

import { BlurFade } from "@/components/magicui/blur-fade";
import { CheckCircle, ArrowRight, TrendingUp, Users, Zap, Target } from "lucide-react";
import Link from "next/link";

const conversionProblems = [
  {
    icon: Users,
    problem: "No Professional Online Presence",
    solution: "Strategic Website Foundation",
    description: "You're losing credibility and customers without a professional website. We build conversion-focused sites that establish trust and drive action from day one.",
    metrics: "Professional credibility + lead generation",
    fixes: [
      "Professional design that builds trust",
      "Clear messaging that converts visitors", 
      "Mobile-optimized for all devices",
      "Fast loading and SEO-ready"
    ]
  },
  {
    icon: Target,
    problem: "Unclear Messaging & Value Prop",
    solution: "Strategic Messaging Framework",
    description: "Visitors don't understand what you do or why they should choose you. We craft clear, compelling messaging that resonates with your ideal customers.",
    metrics: "Up to 60% improvement in engagement",
    fixes: [
      "Crystal-clear headline and subheadline",
      "Benefit-focused copy over features",
      "Compelling calls-to-action",
      "Objection-handling content"
    ]
  },
  {
    icon: TrendingUp,
    problem: "No Social Proof or Credibility",
    solution: "Trust & Authority Building",
    description: "People don't trust unknown brands. We implement proven social proof elements that build credibility and reduce buyer hesitation.",
    metrics: "25-35% increase in form submissions",
    fixes: [
      "Strategic testimonial placement",
      "Case studies with real results",
      "Trust badges and certifications",
      "Founder story and personal touch"
    ]
  },
  {
    icon: Zap,
    problem: "Poor Mobile Experience",
    solution: "Mobile-First Optimization",
    description: "70% of traffic is mobile, but many sites aren't built for it. We ensure your mobile experience converts as well as desktop.",
    metrics: "Up to 50% mobile conversion improvement",
    fixes: [
      "Touch-friendly navigation and buttons",
      "Fast loading on all devices",
      "Simplified mobile user flows",
      "Thumb-optimized design patterns"
    ]
  }
];

export function ServicesSection() {
  return (
    <BlurFade delay={0.1} inView>
      <section className="py-20 bg-charcoal-black text-off-white">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="mb-3 text-xs uppercase tracking-[0.25em] text-kiiro-yellow font-semibold">
              🎯 WEBSITE OPTIMIZATION
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-off-white">
              The 4 Website Problems
              <br />
              <span className="text-kiiro-yellow">Costing You Customers</span>
            </h2>
            <p className="text-xl text-off-white/80 max-w-3xl mx-auto">
              Whether you need a new website or want to fix what you have, these 4 problems are costing you customers every day. We identify exactly what&apos;s broken and fix it with proven strategies.
            </p>
          </div>

          {/* Problems & Solutions Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {conversionProblems.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-deep-gray/30 border border-off-white/10 rounded-2xl p-8 hover:border-kiiro-yellow/20 transition-all duration-300 group h-full flex flex-col"
                >
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-red-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-red-400 mb-2">
                        Problem #{index + 1}: {item.problem}
                      </h3>
                      <div className="flex items-center gap-2 mb-3">
                        <ArrowRight className="w-4 h-4 text-kiiro-yellow" />
                        <span className="font-semibold text-kiiro-yellow">{item.solution}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-off-white/80 mb-6 leading-relaxed flex-grow">
                    {item.description}
                  </p>

                  {/* Metric */}
                  <div className="bg-kiiro-yellow/10 border border-kiiro-yellow/20 rounded-lg p-3 mb-6">
                    <p className="text-sm font-medium text-kiiro-yellow text-center">
                      {item.metrics}
                    </p>
                  </div>

                  {/* Fixes List */}
                  <div className="space-y-2 mt-auto">
                    <p className="text-sm font-medium text-off-white mb-3">What we fix:</p>
                    {item.fixes.map((fix, fixIndex) => (
                      <div key={fixIndex} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-teal-accent mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-off-white/80">{fix}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-kiiro-yellow/10 to-teal-accent/10 border border-kiiro-yellow/20 rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-off-white mb-4">
                                 Ready to Fix What&apos;s Broken?
              </h3>
              <p className="text-off-white/80 mb-6 max-w-2xl mx-auto">
                Get a free conversion audit where we&apos;ll identify exactly which of these problems 
                are costing you customers and show you how to fix them.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/audit"
                  className="px-8 py-4 bg-kiiro-yellow text-charcoal-black rounded-lg font-medium hover:bg-kiiro-yellow/90 transition-colors flex items-center justify-center gap-2"
                >
                  Get Free Conversion Audit
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="#booking"
                  className="px-8 py-4 border border-teal-accent text-teal-accent rounded-lg font-medium hover:bg-teal-accent/10 transition-colors"
                >
                  Book Strategy Call
                </Link>
              </div>
              
              {/* Microcopy under CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-3 text-xs text-off-white/60">
                <span>⚡ Takes 30 seconds. No pressure, just insights.</span>
                <span className="hidden sm:inline">•</span>
                <span>📞 Quick 15-minute call to discuss your needs</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </BlurFade>
  );
} 