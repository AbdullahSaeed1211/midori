// components/landing/services-section-enhanced.tsx
'use client';

import {
  ArrowRight,
  HelpCircle,
  CheckCircle,
  XCircle,
} from 'lucide-react';
import Link from 'next/link';
import { BlurFade } from '@/components/magicui/blur-fade';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

// Kiiro's 4 Problems Costing You Customers
const kiiroProblems = [
  {
    title: "No Professional Online Presence",
    description: "Website Foundation",
    subtitle: "Credibility + Leads",
    solution: "We craft sleek, conversion-ready websites that earn trust.",
    quickFixes: [
      "Polished design",
      "Clear messaging",
      "Mobile-first",
      "Fast & SEO"
    ],
    icon: "🏗️"
  },
  {
    title: "Unclear Messaging",
    description: "Messaging Framework",
    subtitle: "↑ 60% engagement",
    solution: "We make your value obvious in the first 5 seconds.",
    quickFixes: [
      "Crisp headline",
      "Benefit copy",
      "Stronger CTA",
      "Handle objections"
    ],
    icon: "📝"
  },
  {
    title: "No Social Proof",
    description: "Trust Building",
    subtitle: "↑ 30% sign-ups",
    solution: "We add proof that removes doubt and builds authority.",
    quickFixes: [
      "Testimonials",
      "Case studies",
      "Trust badges",
      "Founder story"
    ],
    icon: "🛡️"
  },
  {
    title: "Poor Mobile UX",
    description: "Mobile-First",
    subtitle: "↑ 50% mobile CVR",
    solution: "We optimise mobile flows for speed and effortless navigation.",
    quickFixes: [
      "Thumb nav",
      "Fast load",
      "Simple flows",
      "Tap targets"
    ],
    icon: "📱"
  }
];


export function ServicesSection() {
  return (
    <BlurFade delay={0.15} inView>
      <section className="relative isolate overflow-hidden bg-charcoal-black py-16 sm:py-20 lg:py-24 text-off-white">
        {/* Enhanced Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, rgba(255, 209, 0, 0.15) 1px, transparent 0),
                             radial-gradient(circle at 75px 75px, rgba(255, 209, 0, 0.1) 1px, transparent 0)`,
            backgroundSize: '120px 120px'
          }} />
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-charcoal-black/50 to-charcoal-black" />
        </div>

        <div className="container mx-auto max-w-7xl px-4 relative">
          {/* Enhanced Header */}
          <div className="text-center mb-12 lg:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-6 inline-flex items-center gap-3 px-5 py-2.5 bg-gradient-to-r from-kiiro-yellow/10 to-kiiro-yellow/5 border border-kiiro-yellow/20 rounded-full shadow-lg shadow-kiiro-yellow/5"
            >
              <HelpCircle className="w-4 h-4 text-kiiro-yellow" />
              <span className="text-sm font-semibold text-kiiro-yellow uppercase tracking-wider">
                Website Optimization
              </span>
            </motion.div>

            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              4 Problems{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-kiiro-yellow via-kiiro-yellow to-kiiro-yellow/80">
                Costing You Customers
              </span>
            </motion.h2>

            <motion.p
              className="text-lg text-off-white/70 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Click any problem below to see exactly how much it&apos;s costing you and how we fix it.
            </motion.p>
          </div>

          {/* Enhanced Problem Cards */}
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Problem Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="group relative bg-gradient-to-bt from-red-950/40 via-charcoal-black/80 to-red-900/20 rounded-3xl overflow-hidden shadow-2xl border border-red-500/30 p-4 sm:p-5 lg:p-6 backdrop-blur-sm"
              >
                {/* Enhanced background effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-transparent to-red-950/30" />
                <div className="absolute top-0 right-0 w-40 h-40 bg-red-500/5 rounded-full blur-3xl transform translate-x-20 -translate-y-20" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-red-400/5 rounded-full blur-2xl transform -translate-x-16 translate-y-16" />

                <div className="relative z-10">
                  <div className="mb-4">
                    <h3 className="text-xl sm:text-2xl font-bold text-off-white">
                      The Problem
                    </h3>
                  </div>

                  <div className="space-y-2">
                    {kiiroProblems.map((problem, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 + 0.1 }}
                        className="group/item relative overflow-hidden rounded-xl p-3 hover:border-red-400/40 transition-all duration-300 cursor-pointer"
                      >
                        {/* Subtle glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-300" />

                        <div className="flex items-start gap-3 relative z-10">
                          <div className="flex-shrink-0">
                            <div className="w-10 h-10 bg-red-500/20 rounded-xl flex items-center justify-center border border-red-400/30 group-hover/item:bg-red-500/30 group-hover/item:border-red-400/50 transition-all duration-300 shadow-lg shadow-red-500/10">
                              <span className="text-lg">{problem.icon}</span>
                            </div>
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="text-sm font-bold text-off-white mb-1 leading-tight group-hover/item:text-red-100 transition-colors duration-300">
                              {problem.title}
                            </h4>
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-xs font-semibold text-kiiro-yellow bg-kiiro-yellow/10 px-2 py-0.5 rounded-full border border-kiiro-yellow/20">
                                {problem.description}
                              </span>
                              <span className="text-xs font-medium text-green-400 bg-green-500/10 px-2 py-0.5 rounded-full border border-green-500/20">
                                {problem.subtitle}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Animated indicator */}
                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 w-1 h-6 bg-red-400/30 rounded-full opacity-0 group-hover/item:opacity-100 transition-all duration-300 scale-y-0 group-hover/item:scale-y-100 origin-center" />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Solution Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="group relative bg-gradient-to-br from-kiiro-yellow via-kiiro-yellow to-kiiro-yellow/95 rounded-3xl overflow-hidden shadow-2xl border border-kiiro-yellow/40 p-4 sm:p-5 lg:p-6"
              >
                {/* Enhanced glow effects */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-white/15 rounded-full blur-3xl transform translate-x-24 -translate-y-24" />
                <div className="absolute bottom-0 left-0 w-36 h-36 bg-black/5 rounded-full blur-2xl transform -translate-x-18 translate-y-18" />
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/10" />

                <div className="relative z-10">
                  <div className="mb-4">
                    <h3 className="text-xl sm:text-2xl font-bold text-charcoal-black">
                      How We Fix It
                    </h3>
                  </div>

                  <div className="space-y-2">
                    {kiiroProblems.map((problem, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                        className="group/item relative overflow-hidden rounded-xl p-3 hover:border-black/40  transition-all duration-300 cursor-pointer"
                      >
                        {/* Subtle glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-kiiro-yellow/5 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-300" />

                        <div className="flex items-start gap-3 relative z-10">
                          <div className="flex-shrink-0">
                            <div className="w-10 h-10 bg-kiiro-yellow/20 rounded-xl flex items-center justify-center border border-kiiro-yellow/30 group-hover/item:bg-kiiro-yellow/30 group-hover/item:border-kiiro-yellow/50 transition-all duration-300 shadow-lg shadow-kiiro-yellow/10">
                              <CheckCircle className="w-5 h-5 text-charcoal-black" />
                            </div>
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="text-sm font-bold text-charcoal-black mb-2 leading-tight group-hover/item:text-charcoal-black transition-colors duration-300">
                              {problem.solution}
                            </h4>
                            <div className="flex flex-wrap gap-1.5">
                              {problem.quickFixes.map((fix, fixIndex) => (
                                <span
                                  key={fixIndex}
                                  className="inline-flex items-center gap-1.5 px-2 py-1 bg-kiiro-yellow/15 text-charcoal-black/90 text-xs font-medium rounded-lg border border-kiiro-yellow/20 hover:bg-kiiro-yellow/25 transition-colors duration-200"
                                >
                                  <div className="w-1.5 h-1.5 bg-kiiro-yellow rounded-full" />
                                  {fix}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Animated indicator */}
                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 w-1 h-6 bg-kiiro-yellow/30 rounded-full opacity-0 group-hover/item:opacity-100 transition-all duration-300 scale-y-0 group-hover/item:scale-y-100 origin-center" />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Enhanced CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-12 lg:mt-16 text-center"
          >
            <Link
              href="#booking"
              className="group inline-flex items-center gap-4 px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-kiiro-yellow to-kiiro-yellow/90 text-charcoal-black font-bold text-lg sm:text-xl rounded-2xl hover:from-kiiro-yellow/90 hover:to-kiiro-yellow transition-all duration-300 shadow-2xl hover:shadow-kiiro-yellow/30 hover:scale-105 transform"
            >
              <span>Book Your Free Strategy Call</span>
              <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <p className="text-off-white/60 text-sm mt-4 max-w-md mx-auto">
              No commitment • 30-minute call • Instant insights
            </p>
          </motion.div>
        </div>
      </section>
    </BlurFade>
  );
}

// Enhanced Comparison table component
export function ComparisonTable() {
  const comparisonData = [
    {
      category: "Kiiro",
      speed: "Launches 40-70% faster",
      conversion: "+30% conversion in 60 days",
      quality: "Consistent, on-brand outputs",
      costEfficiency: "One partner, no vendor bloat",
      color: "text-kiiro-yellow",
      isHighlight: true,
      icon: CheckCircle
    },
    {
      category: "In-house Team",
      speed: "Slow hiring/onboarding",
      conversion: "Know product, but messaging foggy",
      quality: "Consistent brand voice",
      costEfficiency: "Expensive, inflexible salaries",
      color: "text-red-400",
      icon: XCircle
    },
    {
      category: "Agencies",
      speed: "Long timelines, rigid scopes",
      conversion: "Generic positioning focus",
      quality: "High production quality",
      costEfficiency: "High retainers, overhead-heavy",
      color: "text-orange-400",
      icon: XCircle
    },
    {
      category: "Freelancers",
      speed: "Inconsistent delivery",
      conversion: "Mixed clarity, talent-dependent",
      quality: "Variable quality",
      costEfficiency: "Cheap per project, costly in mgmt",
      color: "text-orange-400",
      icon: XCircle
    },
    {
      category: "AI Tools",
      speed: "Instant outputs",
      conversion: "No narrative clarity",
      quality: "Inconsistent quality",
      costEfficiency: "Low cost, but high manual polish",
      color: "text-red-400",
      icon: XCircle
    },
    {
      category: "DIY Tools",
      speed: "Fast, but basic",
      conversion: "No strategic clarity",
      quality: "Off-brand, inconsistent",
      costEfficiency: "High hidden labor cost",
      color: "text-red-400",
      icon: XCircle
    }
  ];

  return (
    <section className="py-20 lg:py-24 bg-charcoal-black text-off-white relative overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, rgba(255, 209, 0, 0.2) 1px, transparent 0),
                           radial-gradient(circle at 75px 75px, rgba(255, 209, 0, 0.15) 1px, transparent 0)`,
          backgroundSize: '140px 140px'
        }} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-charcoal-black/30 to-charcoal-black" />
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative">
        {/* Enhanced Header */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-off-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Why 15+ Businesses Trust{" "}
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-kiiro-yellow via-kiiro-yellow to-kiiro-yellow/80 relative"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Kiiro
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-kiiro-yellow to-kiiro-yellow rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </motion.span>
          </motion.h2>

          <motion.p
            className="text-lg text-off-white/70 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We don&apos;t just build websites. We build trust and credibility that converts visitors into customers.
          </motion.p>
        </div>

        {/* Modern Comparison Grid */}
        <div className="max-w-7xl mx-auto overflow-x-auto px-4 sm:px-0">
          <motion.div
            className="bg-charcoal-black border border-off-white/10 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-sm relative"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Enhanced gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-kiiro-yellow/3 via-transparent to-charcoal-black/20" />

            {/* Grid Container */}
            <div className="min-w-[900px] relative">
              {/* Grid Header */}
              <div className="grid grid-cols-[300px_1fr_1fr_1fr_1fr] gap-0 bg-charcoal-black border-b border-kiiro-yellow/40 backdrop-blur-sm">
                <div className="px-6 py-5 text-lg font-bold text-off-white sticky left-0 bg-charcoal-black backdrop-blur-sm z-10 border-r border-off-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-6 bg-kiiro-yellow rounded-full"></div>
                    <span>Solution</span>
                  </div>
                </div>
                <div className="px-4 py-5 text-sm font-bold text-off-white/90 text-center border-r border-off-white/10">
                  <div className="flex flex-col items-center gap-1">
                    <span className="text-xs text-off-white/60 uppercase tracking-wider">Delivery</span>
                    <span className="text-base">Speed</span>
                  </div>
                </div>
                <div className="px-4 py-5 text-sm font-bold text-off-white/90 text-center border-r border-off-white/10">
                  <div className="flex flex-col items-center gap-1">
                    <span className="text-xs text-off-white/60 uppercase tracking-wider">Marketing</span>
                    <span className="text-base">Conversion</span>
                  </div>
                </div>
                <div className="px-4 py-5 text-sm font-bold text-off-white/90 text-center border-r border-off-white/10">
                  <div className="flex flex-col items-center gap-1">
                    <span className="text-xs text-off-white/60 uppercase tracking-wider">Brand</span>
                    <span className="text-base">Quality</span>
                  </div>
                </div>
                <div className="px-4 py-5 text-sm font-bold text-off-white/90 text-center">
                  <div className="flex flex-col items-center gap-1">
                    <span className="text-xs text-off-white/60 uppercase tracking-wider">Business</span>
                    <span className="text-base">ROI</span>
                  </div>
                </div>
              </div>

              {/* Grid Body */}
              <div className="divide-y divide-off-white/10">
                {comparisonData.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <motion.div
                      key={item.category}
                      className={cn(
                        "group relative transition-all duration-500 hover:bg-off-white/5 grid grid-cols-[300px_1fr_1fr_1fr_1fr] gap-0",
                        item.isHighlight
                          ? "bg-gradient-to-r from-kiiro-yellow via-kiiro-yellow/95 to-kiiro-yellow shadow-xl shadow-kiiro-yellow/25 border-y border-kiiro-yellow/50"
                          : "hover:shadow-lg hover:shadow-slate-900/10"
                      )}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, delay: index * 0.12 }}
                    >
                      {/* Enhanced background effects for highlight row */}
                      {item.isHighlight && (
                        <>
                          <div className="absolute inset-0 bg-gradient-to-r from-kiiro-yellow/15 via-kiiro-yellow/25 to-kiiro-yellow/15" />
                          <div className="absolute top-0 right-0 w-40 h-40 bg-white/8 rounded-full blur-3xl transform translate-x-20 -translate-y-20" />
                          <div className="absolute bottom-0 left-0 w-32 h-32 bg-charcoal-black/10 rounded-full blur-2xl transform -translate-x-16 translate-y-16" />
                        </>
                      )}

                      <div className="px-6 py-5 border-r border-off-white/10 relative z-10 sticky left-0 bg-inherit backdrop-blur-sm">
                        <div className="flex items-center gap-4">
                          <div className={cn(
                            "w-14 h-14 rounded-2xl flex items-center justify-center border-2 transition-all duration-300 flex-shrink-0 shadow-lg",
                            item.isHighlight
                              ? "bg-white border-white shadow-white/40"
                              : "bg-charcoal-black/60 border-off-white/20 group-hover:border-off-white/40 group-hover:shadow-off-white/10"
                          )}>
                            <IconComponent className={cn(
                              "w-7 h-7",
                              item.isHighlight ? "text-charcoal-black" : item.color
                            )} />
                          </div>
                          <span className={cn(
                            "font-bold text-lg leading-tight",
                            item.isHighlight ? "text-charcoal-black" : "text-off-white"
                          )}>
                            {item.category}
                          </span>
                        </div>
                      </div>

                      <div className={cn(
                        "px-4 py-5 text-center font-medium text-sm leading-relaxed border-r border-off-white/10 relative z-10",
                        item.isHighlight ? "text-charcoal-black" : "text-off-white/80"
                      )}>
                        <div className="max-w-36 mx-auto">
                          {item.speed}
                        </div>
                      </div>

                      <div className={cn(
                        "px-4 py-5 text-center font-medium text-sm leading-relaxed border-r border-off-white/10 relative z-10",
                        item.isHighlight ? "text-charcoal-black" : "text-off-white/80"
                      )}>
                        <div className="max-w-36 mx-auto">
                          {item.conversion}
                        </div>
                      </div>

                      <div className={cn(
                        "px-4 py-5 text-center font-medium text-sm leading-relaxed border-r border-off-white/10 relative z-10",
                        item.isHighlight ? "text-charcoal-black" : "text-off-white/80"
                      )}>
                        <div className="max-w-36 mx-auto">
                          {item.quality}
                        </div>
                      </div>

                      <div className={cn(
                        "px-4 py-5 text-center font-medium text-sm leading-relaxed relative z-10",
                        item.isHighlight ? "text-charcoal-black" : "text-off-white/80"
                      )}>
                        <div className="max-w-36 mx-auto">
                          {item.costEfficiency}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Enhanced Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Link
            href="#booking"
            className="group inline-flex items-center gap-4 px-10 py-5 bg-gradient-to-r from-kiiro-yellow via-kiiro-yellow to-kiiro-yellow/90 text-charcoal-black rounded-2xl font-bold text-xl transition-all duration-300 shadow-2xl hover:shadow-kiiro-yellow/40 hover:scale-105 transform"
          >
            <span>Build Trust That Converts</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
          <p className="text-off-white/60 text-base mt-4 max-w-lg mx-auto">
            Join 15+ businesses already building credibility with Kiiro
          </p>
        </motion.div>
      </div>
    </section>
  );
}
