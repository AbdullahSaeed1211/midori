// components/landing/services-section-enhanced.tsx
'use client';

import {
  ArrowRight,
  CheckCircle,
  Target,
  TrendingUp,
  Users,
  Zap,
  ChevronDown,
  HelpCircle,
  BarChart3,
  Clock,
  Star,
} from 'lucide-react';
import Link from 'next/link';
import { BlurFade } from '@/components/magicui/blur-fade';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const problems = [
  {
    icon: Users,
    title: 'No Professional Online Presence',
    pillar: 'Website Foundation',
    metric: 'Credibility + Leads',
    desc: 'We craft sleek, conversion-ready websites that earn trust.',
    fixes: ['Polished design', 'Clear messaging', 'Mobile-first', 'Fast & SEO'],
    expandedContent: {
      problem: 'Your website looks amateur and costs you customers every day.',
      impact: '$3,000+ monthly revenue loss from unprofessional design',
      solution: 'Professional websites that establish credibility and convert visitors into customers',
      results: '340% increase in qualified leads for our clients',
      caseStudy: 'TechFlow increased conversions by 280% after redesign'
    }
  },
  {
    icon: Target,
    title: 'Unclear Messaging',
    pillar: 'Messaging Framework',
    metric: '↑ 60% engagement',
    desc: 'We make your value obvious in the first 5 seconds.',
    fixes: ['Crisp headline', 'Benefit copy', 'Stronger CTA', 'Handle objections'],
    expandedContent: {
      problem: 'Visitors leave confused about what you actually do.',
      impact: '85% of visitors bounce within 15 seconds',
      solution: 'Clear value propositions that convert browsers to buyers',
      results: '60% increase in engagement and 40% more qualified leads',
      caseStudy: 'Service business increased bookings by 150% with better messaging'
    }
  },
  {
    icon: TrendingUp,
    title: 'No Social Proof',
    pillar: 'Trust Building',
    metric: '↑ 30% sign-ups',
    desc: 'We add proof that removes doubt and builds authority.',
    fixes: ['Testimonials', 'Case studies', 'Trust badges', 'Founder story'],
    expandedContent: {
      problem: 'Prospects doubt your credibility and expertise.',
      impact: '70% of decision-makers check reviews before buying',
      solution: 'Strategic social proof that builds trust and removes objections',
      results: '30% increase in sign-ups and 25% higher conversion rates',
      caseStudy: 'Consulting firm doubled leads with social proof implementation'
    }
  },
  {
    icon: Zap,
    title: 'Poor Mobile UX',
    pillar: 'Mobile-First',
    metric: '↑ 50% mobile CVR',
    desc: 'We optimise mobile flows for speed and effortless navigation.',
    fixes: ['Thumb nav', 'Fast load', 'Simple flows', 'Tap targets'],
    expandedContent: {
      problem: 'Mobile visitors struggle to navigate and convert.',
      impact: '60% of traffic is mobile, but only 20% convert',
      solution: 'Mobile-first design that works perfectly on all devices',
      results: '50% increase in mobile conversion rates',
      caseStudy: 'E-commerce site increased mobile sales by 200% after mobile optimization'
    }
  },
];

export function ServicesSection() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const toggleCard = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <BlurFade delay={0.15} inView>
      <section className="relative isolate overflow-hidden bg-charcoal-black py-24 sm:py-28 text-off-white">
        {/* Soft vignette */}
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-kiiro-yellow/5 via-transparent to-transparent [mask-image:radial-gradient(65%_65%_at_50%_40%,#000_40%,transparent_100%)]" />

        <div className="container mx-auto max-w-6xl px-4">
          {/* Header */}
          <header className="mx-auto mb-16 max-w-2xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-4 inline-flex items-center gap-3 px-4 py-2 bg-kiiro-yellow/10 border border-kiiro-yellow/30 rounded-full"
            >
              <HelpCircle className="w-4 h-4 text-kiiro-yellow" />
              <span className="text-sm font-medium text-kiiro-yellow uppercase tracking-wide">
                Website Optimization
              </span>
            </motion.div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug tracking-tight mb-6">
              4 Problems{' '}
              <span className="text-kiiro-yellow">Costing You Customers</span>
            </h2>

            <p className="text-lg text-off-white/80 max-w-xl mx-auto leading-relaxed">
              Click any problem below to see exactly how much it&apos;s costing you and how we fix it.
            </p>
          </header>

          {/* Enhanced Problem Grid with Accordion */}
          <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
            {problems.map((item, i) => {
              const Icon = item.icon;
              const isExpanded = expandedCard === i;

              return (
                <motion.article
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
                  className={cn(
                    'group relative flex flex-col rounded-xl sm:rounded-2xl border bg-white/[0.02] backdrop-blur-md transition-all duration-500 cursor-pointer',
                    'hover:bg-white/[0.05] hover:border-white/20 hover:shadow-lg hover:shadow-kiiro-yellow/10',
                    'active:scale-[0.98] transform',
                    isExpanded ? 'border-kiiro-yellow/50 bg-kiiro-yellow/[0.02] shadow-xl shadow-kiiro-yellow/10' : 'border-white/5'
                  )}
                  onClick={() => toggleCard(i)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Card Header - Always Visible */}
                  <div className="p-4 sm:p-6 lg:p-8 pb-4 sm:pb-6">
                    <header className="flex gap-3 sm:gap-4 items-start mb-4">
                      <div className={cn(
                        "flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl transition-all duration-300",
                        isExpanded ? "bg-kiiro-yellow/20 scale-110" : "bg-kiiro-yellow/10"
                      )}>
                        <Icon className={cn(
                          "h-4 w-4 sm:h-5 sm:w-5 transition-all duration-300",
                          isExpanded ? "text-kiiro-yellow" : "text-kiiro-yellow/80"
                        )} />
                      </div>

                      <div className="flex-1 min-w-0">
                        <h3 className="text-base sm:text-lg font-semibold tracking-tight text-off-white mb-2">
                          {item.title}
                        </h3>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                          <span className="text-xs uppercase tracking-wide text-teal-accent/80 font-medium">
                            {item.pillar}
                          </span>
                          <span className="rounded-full bg-kiiro-yellow/10 px-2.5 py-1 text-xs text-kiiro-yellow font-medium inline-block w-fit">
                            {item.metric}
                          </span>
                        </div>
                      </div>

                      <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="flex-shrink-0 mt-1"
                      >
                        <ChevronDown className="h-4 w-4 sm:h-5 sm:w-5 text-off-white/60" />
                      </motion.div>
                    </header>

                    <p className="text-off-white/80 leading-relaxed mb-4">
                      {item.desc}
                    </p>

                    {/* Quick Fixes - Always Visible */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-sm text-off-white/60">
                        <span className="font-medium">Quick Fixes:</span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                        {item.fixes.map((fix, idx) => (
                          <motion.div 
                            key={idx} 
                            className="flex items-center gap-2 text-sm text-off-white/70"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: idx * 0.1 }}
                          >
                            <CheckCircle className="h-3 w-3 text-teal-accent flex-shrink-0" />
                            <span className="text-xs sm:text-sm">{fix}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Expandable Content */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 sm:px-6 lg:px-8 pb-4 sm:pb-6 lg:pb-8 border-t border-white/10 pt-4 sm:pt-6">
                          <div className="space-y-6">
                            {/* Problem Details */}
                            <div className="space-y-4">
                              <div className="flex items-start gap-3">
                                <div className="w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                                  <BarChart3 className="w-4 h-4 text-red-400" />
                                </div>
                                <div>
                                  <h4 className="text-sm font-semibold text-off-white mb-1">The Problem</h4>
                                  <p className="text-sm text-off-white/70">{item.expandedContent.problem}</p>
                                </div>
                              </div>

                              <div className="flex items-start gap-3">
                                <div className="w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                                  <TrendingUp className="w-4 h-4 text-red-400" />
                                </div>
                                <div>
                                  <h4 className="text-sm font-semibold text-off-white mb-1">Revenue Impact</h4>
                                  <p className="text-sm text-off-white/70">{item.expandedContent.impact}</p>
                                </div>
                              </div>

                              <div className="flex items-start gap-3">
                                <div className="w-8 h-8 bg-kiiro-yellow/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                                  <Zap className="w-4 h-4 text-kiiro-yellow" />
                                </div>
                                <div>
                                  <h4 className="text-sm font-semibold text-off-white mb-1">Our Solution</h4>
                                  <p className="text-sm text-off-white/70">{item.expandedContent.solution}</p>
                                </div>
                              </div>

                              <div className="flex items-start gap-3">
                                <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                                  <Star className="w-4 h-4 text-green-400" />
                                </div>
                                <div>
                                  <h4 className="text-sm font-semibold text-off-white mb-1">Proven Results</h4>
                                  <p className="text-sm text-off-white/70">{item.expandedContent.results}</p>
                                </div>
                              </div>
                            </div>

                            {/* Case Study */}
                            <div className="bg-kiiro-yellow/5 border border-kiiro-yellow/20 rounded-xl p-4">
                              <div className="flex items-center gap-2 mb-2">
                                <Clock className="w-4 h-4 text-kiiro-yellow" />
                                <span className="text-sm font-semibold text-kiiro-yellow">Real Case Study</span>
                              </div>
                              <p className="text-sm text-off-white/90">{item.expandedContent.caseStudy}</p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.article>
              );
            })}
          </div>

          {/* Enhanced CTA Section */}
          <motion.footer
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-20 text-center space-y-6"
          >
            <div className="bg-gradient-to-r from-kiiro-yellow/10 via-transparent to-kiiro-yellow/10 border border-kiiro-yellow/20 rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-xl font-bold text-off-white mb-3">
                Ready to Fix These Problems?
              </h3>
              <p className="text-off-white/80 mb-6">
                Get a free website audit that identifies your biggest conversion leaks and shows you exactly how to fix them.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/audit"
                    className="inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-kiiro-yellow text-charcoal-black font-bold text-base sm:text-lg rounded-xl hover:bg-kiiro-yellow/90 transition-all duration-300 shadow-lg hover:shadow-kiiro-yellow/20 w-full sm:w-auto justify-center"
                  >
                    Get My Free Audit ($200 Value)
                    <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
                  </Link>
                </motion.div>

                <div className="flex items-center gap-2 text-xs sm:text-sm text-off-white/60 justify-center">
                  <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-400" />
                  <span>30-second form • No credit card required</span>
                </div>
              </div>
            </div>
          </motion.footer>
        </div>
      </section>
    </BlurFade>
  );
}
