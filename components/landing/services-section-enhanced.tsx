// components/landing/services-section-enhanced.tsx
'use client';

import {
  ArrowRight,
  HelpCircle,
  CheckCircle,
} from 'lucide-react';
import Link from 'next/link';
import { BlurFade } from '@/components/magicui/blur-fade';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { useState } from 'react';

// Simplified 4 problems with clear outcomes
const problems = [
  {
    id: 1,
    title: "No Professional Online Presence",
    problem: "Your brand doesn't look credible — which means fewer leads and lower trust.",
    microBenefit: "We rebuild your website so your brand instantly earns trust.",
    solution: "A premium, fast, modern website that instantly positions you as a real business.",
    icon: "🏗️",
    outcome: "60% more professional leads"
  },
  {
    id: 2,
    title: "Unclear Messaging",
    problem: "Visitors don't understand what you offer or why they should care.",
    microBenefit: "We turn your offer into a simple message people understand in 5 seconds.",
    solution: "A simple value-first message that explains your value in 5 seconds.",
    icon: "📝",
    outcome: "3x clearer conversion path"
  },
  {
    id: 3,
    title: "No Social Proof",
    problem: "People don't buy from strangers.",
    microBenefit: "We add testimonials, trust elements, and proof that reduces doubt.",
    solution: "Testimonials, case studies, experience and trust elements that remove doubt.",
    icon: "🛡️",
    outcome: "40% higher conversion rate"
  },
  {
    id: 4,
    title: "Poor Mobile Experience",
    problem: "If your mobile UX fails, you lose 60–80% of traffic.",
    microBenefit: "We redesign your mobile flows for speed, clarity, and high conversions.",
    solution: "Mobile-first layouts, fast loading, clean flows, clear CTAs.",
    icon: "📱",
    outcome: "Mobile conversions doubled"
  }
];

export function ServicesSection() {
  const [selectedProblem, setSelectedProblem] = useState<number | null>(null);

  return (
    <div suppressHydrationWarning>
    <BlurFade delay={0.15} inView>
      <section className="relative isolate overflow-hidden bg-charcoal-black py-16 sm:py-20 lg:py-24 text-off-white">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.02)_1px,transparent_0)] bg-[size:40px_40px] opacity-20" />

        <div className="container mx-auto max-w-7xl px-4 relative">
          {/* Clean Header */}
          <div className="text-center mb-16 lg:mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-8 inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-off-white/5 to-off-white/10 border border-off-white/20 rounded-full"
            >
              <HelpCircle className="w-5 h-5 text-kiiro-yellow" />
              <span className="text-sm font-semibold text-off-white uppercase tracking-wider">
                Website Problems
              </span>
            </motion.div>

            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              4 Problems Silently{' '}
              <span className="text-kiiro-yellow">
                Killing Your Website
              </span>
            </motion.h2>

            <motion.p
              className="text-lg sm:text-xl text-off-white/80 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              And exactly how we fix each one in 7–14 days.
            </motion.p>
          </div>

          {/* Clean Problem/Solution Layout */}
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Left: Problem Cards */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="space-y-4"
              >
                <h3 className="text-2xl font-bold text-off-white mb-8">The Problems</h3>
                <div className="space-y-3">
                  {problems.map((problem, index) => (
                    <motion.div
                      key={problem.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      onClick={() => setSelectedProblem(selectedProblem === problem.id ? null : problem.id)}
                      className={cn(
                        "group relative p-6 rounded-2xl border cursor-pointer transition-all duration-300 hover:scale-[1.02]",
                        selectedProblem === problem.id
                          ? "bg-red-500/10 border-red-400/50 shadow-lg shadow-red-500/10"
                          : "bg-charcoal-gray/30 border-off-white/10 hover:border-red-400/30 hover:bg-red-500/5 hover:shadow-lg hover:shadow-red-500/5"
                      )}
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <div className={cn(
                            "w-12 h-12 rounded-xl flex items-center justify-center text-2xl transition-all duration-300 border-2",
                            selectedProblem === problem.id
                              ? "bg-red-500/20 border-red-400/40 shadow-lg shadow-red-500/20"
                              : "bg-off-white/10 border-off-white/20 group-hover:bg-red-500/15 group-hover:border-red-400/40 group-hover:shadow-lg group-hover:shadow-red-500/10"
                          )}>
                            {problem.icon}
                          </div>
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-bold text-off-white mb-2 group-hover:text-red-100 transition-colors">
                            {problem.title}
                          </h4>
                          <p className="text-off-white/70 leading-relaxed mb-3">
                            {problem.microBenefit}
                          </p>
                          <div className="text-xs text-off-white/50 italic">
                            {problem.problem}
                          </div>
                          {selectedProblem === problem.id && (
                            <div className="mt-4 pt-4 border-t border-red-400/20">
                              <div className="flex items-center gap-2 text-red-400 text-sm font-medium">
                                <span className="w-2 h-2 bg-red-400 rounded-full" />
                                Costing you {problem.outcome.toLowerCase()}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Right: Solution Reveal */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="relative"
              >
                <h3 className="text-2xl font-bold text-off-white mb-8">How We Fix It</h3>

                {selectedProblem ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="bg-gradient-to-br from-kiiro-yellow/5 via-kiiro-yellow/3 to-transparent border border-kiiro-yellow/20 rounded-3xl p-8 shadow-2xl relative overflow-hidden"
                  >
                    {/* Subtle background pattern */}
                    <div className="absolute inset-0 bg-gradient-to-br from-kiiro-yellow/[0.02] to-transparent" />
                    <div className="absolute top-0 right-0 w-32 h-32 bg-kiiro-yellow/[0.03] rounded-full blur-2xl" />
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-kiiro-yellow/[0.02] rounded-full blur-xl" />

                    <div className="flex items-start gap-4 mb-6 relative z-10">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-kiiro-yellow/20 rounded-2xl flex items-center justify-center border border-kiiro-yellow/30 shadow-lg shadow-kiiro-yellow/10">
                          <CheckCircle className="w-8 h-8 text-kiiro-yellow" />
                        </div>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-off-white mb-3">
                          {problems.find(p => p.id === selectedProblem)?.title}
                        </h4>
                        <p className="text-off-white/80 text-lg leading-relaxed">
                          {problems.find(p => p.id === selectedProblem)?.solution}
                        </p>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-kiiro-yellow/10 to-kiiro-yellow/5 border border-kiiro-yellow/20 rounded-xl p-4 relative z-10">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-kiiro-yellow rounded-full flex items-center justify-center shadow-lg">
                          <span className="text-charcoal-black font-bold text-sm">↗</span>
                        </div>
                        <span className="text-off-white font-semibold">
                          Result: {problems.find(p => p.id === selectedProblem)?.outcome}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <div className="bg-gradient-to-br from-charcoal-gray/20 to-charcoal-gray/10 border border-off-white/10 rounded-3xl p-12 text-center relative overflow-hidden">
                    {/* Subtle background pattern */}
                    <div className="absolute inset-0 bg-gradient-to-br from-off-white/[0.02] to-transparent" />
                    <div className="absolute top-0 right-0 w-24 h-24 bg-off-white/[0.03] rounded-full blur-xl" />

                    <div className="relative z-10">
                      <div className="w-20 h-20 bg-gradient-to-br from-off-white/10 to-off-white/5 rounded-full flex items-center justify-center mx-auto mb-6 border border-off-white/20">
                        <HelpCircle className="w-10 h-10 text-off-white/40" />
                      </div>
                      <h4 className="text-xl font-bold text-off-white mb-4">Click a problem to see how we fix it</h4>
                      <p className="text-off-white/60 leading-relaxed">
                        Each one has a proven 7–14 day solution with measurable results — from messaging and design to UX, trust, and performance.
                      </p>
                    </div>
                  </div>
                )}
              </motion.div>
            </div>
          </div>

          {/* Trust Cues */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-16 pt-16 border-t border-off-white/10"
          >
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-center md:text-left">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full border-2 border-charcoal-black flex items-center justify-center text-xs font-bold text-white shadow-lg">
                    B
                  </div>
                  <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-full border-2 border-charcoal-black flex items-center justify-center text-xs font-bold text-white shadow-lg">
                    L
                  </div>
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full border-2 border-charcoal-black flex items-center justify-center text-xs font-bold text-white shadow-lg">
                    S
                  </div>
                </div>
                <div className="text-sm text-off-white/70">
                  <div className="font-semibold text-off-white">Trusted by SMBs in</div>
                  <div>UAE, India & US</div>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-kiiro-yellow">20+</div>
                  <div className="text-xs text-off-white/60 uppercase tracking-wider">Websites Shipped</div>
                </div>
                <div className="w-px h-8 bg-off-white/20"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-kiiro-yellow">7-14</div>
                  <div className="text-xs text-off-white/60 uppercase tracking-wider">Day Delivery</div>
                </div>
                <div className="w-px h-8 bg-off-white/20"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-kiiro-yellow">100%</div>
                  <div className="text-xs text-off-white/60 uppercase tracking-wider">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Clean CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-16 text-center"
          >
            <Link
              href="#booking"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-kiiro-yellow to-kiiro-yellow/90 text-charcoal-black font-bold text-lg rounded-xl hover:from-kiiro-yellow/90 hover:to-kiiro-yellow transition-all duration-300 shadow-xl hover:shadow-kiiro-yellow/30 hover:scale-105 transform"
            >
              <span>Book Your Free Strategy Call</span>
              <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <p className="text-off-white/60 text-sm sm:text-lg mt-4 sm:mt-6 max-w-lg mx-auto">
              No commitment • 30-minute call • Instant insights
            </p>
          </motion.div>
        </div>
      </section>
    </BlurFade>
    </div>
  );
}

