"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { LineShadowText } from "@/components/magicui/line-shadow-text";
import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface CaseStudy {
  title: string;
  description: string;
  image: string;
  href: string;
  category: string;
  results: string;
  accentColor: "yellow" | "teal" | "purple" | "magenta";
}

function CaseStudyCard({ study, index }: { study: CaseStudy; index: number }) {
  const accentColors = {
    yellow: {
      border: "border-kiiro-yellow/20",
      hoverBorder: "hover:border-kiiro-yellow/50",
      text: "text-kiiro-yellow",
      bg: "bg-kiiro-yellow/10",
      shadow: "hover:shadow-[0_20px_40px_rgba(255,236,0,0.15)]"
    },
    teal: {
      border: "border-teal-accent/20",
      hoverBorder: "hover:border-teal-accent/50",
      text: "text-teal-accent",
      bg: "bg-teal-accent/10",
      shadow: "hover:shadow-[0_20px_40px_rgba(0,206,209,0.15)]"
    },
    purple: {
      border: "border-purple-accent/20",
      hoverBorder: "hover:border-purple-accent/50",
      text: "text-purple-accent",
      bg: "bg-purple-accent/10",
      shadow: "hover:shadow-[0_20px_40px_rgba(138,43,226,0.15)]"
    },
    magenta: {
      border: "border-magenta-accent/20",
      hoverBorder: "hover:border-magenta-accent/50",
      text: "text-magenta-accent",
      bg: "bg-magenta-accent/10",
      shadow: "hover:shadow-[0_20px_40px_rgba(255,0,255,0.15)]"
    }
  };

  const accent = accentColors[study.accentColor];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={cn(
        "group relative rounded-2xl overflow-hidden border transition-all duration-500 focus-within:ring-2 focus-within:ring-kiiro-yellow/50 focus-within:ring-offset-2 focus-within:ring-offset-charcoal-black",
        "bg-charcoal-gray/40 backdrop-blur-sm hover:-translate-y-2",
        accent.border,
        accent.hoverBorder,
        accent.shadow
      )}
      role="article"
      aria-labelledby={`case-study-title-${index}`}
    >
      {/* Image Section */}
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={study.image}
          alt={study.title}
          fill
          className="object-cover transition-all duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-black via-charcoal-black/50 to-transparent opacity-80" />
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <div className={cn(
            "px-3 py-1 rounded-full text-xs font-medium",
            accent.bg,
            accent.text
          )}>
            {study.category}
          </div>
        </div>

        {/* View Case Study Button */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className={cn(
            "w-10 h-10 rounded-full flex items-center justify-center",
            "bg-charcoal-black/80 backdrop-blur-sm border",
            accent.border,
            accent.text
          )}>
            <ExternalLink className="h-4 w-4" />
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3
            id={`case-study-title-${index}`}
            className="text-xl font-bold text-off-white group-hover:text-kiiro-yellow transition-colors duration-300"
          >
            {study.title}
          </h3>
          <ArrowUpRight className={cn(
            "h-5 w-5 transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1",
            accent.text
          )} />
        </div>
        
        <p className="text-off-white/80 text-sm leading-relaxed mb-4 line-clamp-2">
          {study.description}
        </p>

        {/* Results */}
        <div
          id={`case-study-results-${index}`}
          className={cn(
            "px-3 py-2 rounded-lg text-xs font-medium mb-4",
            accent.bg,
            accent.text
          )}
          aria-label="Case study results"
        >
          {study.results}
        </div>

        {/* Link */}
        <Link
          href={study.href}
          className={cn(
            "inline-flex items-center gap-2 text-sm font-medium transition-colors duration-300",
            accent.text,
            "hover:underline focus:outline-none focus:ring-2 focus:ring-current focus:ring-offset-2 focus:ring-offset-charcoal-gray rounded-sm"
          )}
          aria-label={`View detailed case study for ${study.title}`}
          aria-describedby={`case-study-results-${index}`}
        >
          View Case Study
          <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
        </Link>
      </div>
    </motion.div>
  );
}

interface CaseStudiesClientProps {
  caseStudies: CaseStudy[];
}

export function CaseStudiesClient({ caseStudies }: CaseStudiesClientProps) {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  // Get unique categories from case studies
  const categories = useMemo(() => {
    const uniqueCategories = Array.from(new Set(caseStudies.map(study => study.category)));
    return ['All', ...uniqueCategories.sort()];
  }, [caseStudies]);

  // Filter case studies based on active filter
  const filteredStudies = useMemo(() => {
    if (activeFilter === 'All') return caseStudies;
    return caseStudies.filter(study => study.category === activeFilter);
  }, [caseStudies, activeFilter]);

  // Get category stats
  const categoryStats = useMemo(() => {
    const stats: Record<string, number> = {};
    caseStudies.forEach(study => {
      if (study.category !== 'Innovation' && study.category !== 'Wellness') {
        stats[study.category] = (stats[study.category] || 0) + 1;
      }
    });
    return stats;
  }, [caseStudies]);

  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto mb-16 text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="px-4 py-2 rounded-full bg-kiiro-yellow/10 text-kiiro-yellow text-sm font-medium mb-8 border border-kiiro-yellow/20 inline-block"
          >
            Our Portfolio
          </motion.div>

          <LineShadowText
            shadowColor="dual-yellow"
            shadowIntensity="medium"
            className="text-4xl md:text-6xl mb-6"
          >
            Our Case Studies
          </LineShadowText>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-off-white/80 max-w-3xl mx-auto leading-relaxed mb-8"
          >
            Explore our portfolio of successful projects across various industries.
            See how we&apos;ve helped clients achieve their digital goals with custom web solutions.
          </motion.p>

          {/* Project Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-6 mb-12"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-kiiro-yellow mb-1">
                {Object.values(categoryStats).reduce((a, b) => a + b, 0)}
              </div>
              <div className="text-sm text-off-white/60">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-kiiro-yellow mb-1">
                {Object.keys(categoryStats).length}
              </div>
              <div className="text-sm text-off-white/60">Industries Served</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-kiiro-yellow mb-1">100%</div>
              <div className="text-sm text-off-white/60">Client Satisfaction</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category, index) => {
            const count = category === 'All'
              ? Object.values(categoryStats).reduce((a, b) => a + b, 0)
              : categoryStats[category] || 0;

            return (
              <motion.button
                key={category}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                onClick={() => setActiveFilter(category)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2",
                  activeFilter === category
                    ? "bg-kiiro-yellow text-charcoal-black shadow-lg shadow-kiiro-yellow/25"
                    : "bg-white/5 text-off-white/70 hover:bg-white/10 hover:text-off-white border border-white/10"
                )}
              >
                {category}
                <span className={cn(
                  "px-2 py-0.5 rounded-full text-xs",
                  activeFilter === category
                    ? "bg-charcoal-black/20 text-charcoal-black"
                    : "bg-white/10 text-off-white/60"
                )}>
                  {count}
                </span>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Case Studies Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredStudies.map((study, index) => (
            <CaseStudyCard key={study.title} study={study} index={index} />
          ))}
        </motion.div>

        {/* Client Testimonials Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-off-white mb-4">
              What Our Clients Say
            </h3>
            <p className="text-off-white/70 max-w-2xl mx-auto">
              Don&apos;t just take our word for it. Hear from the clients we&apos;ve helped transform their digital presence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors duration-300"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-4 h-4 bg-kiiro-yellow rounded-full"></div>
                ))}
              </div>
              <p className="text-off-white/90 mb-4 italic">
                &ldquo;The Guidance Welfare Foundation serves thousands of people in need, and our online presence needed to reflect the importance and scale of our mission. Kiiro provided technical solutions that were both elegant and highly scalable.&rdquo;
              </p>
              <div className="border-t border-white/10 pt-4">
                <div className="font-semibold text-kiiro-yellow">Guidance Welfare Foundation</div>
                <div className="text-sm text-off-white/60">Non-profit Organization</div>
              </div>
            </motion.div>

            {/* Testimonial 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors duration-300"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-4 h-4 bg-kiiro-yellow rounded-full"></div>
                ))}
              </div>
              <p className="text-off-white/90 mb-4 italic">
                &ldquo;Nishoo Mittal&apos;s website perfectly captures his expertise and trustworthiness. The interactive calculators have become a key differentiator in client conversations.&rdquo;
              </p>
              <div className="border-t border-white/10 pt-4">
                <div className="font-semibold text-kiiro-yellow">Nishoo Mittal</div>
                <div className="text-sm text-off-white/60">Financial Advisor</div>
              </div>
            </motion.div>

            {/* Testimonial 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors duration-300"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-4 h-4 bg-kiiro-yellow rounded-full"></div>
                ))}
              </div>
              <p className="text-off-white/90 mb-4 italic">
                &ldquo;Simply Mortgage&apos;s digital transformation exceeded our expectations. The lead generation has improved significantly, and our conversion rates have never been better.&rdquo;
              </p>
              <div className="border-t border-white/10 pt-4">
                <div className="font-semibold text-kiiro-yellow">Simply Mortgage</div>
                <div className="text-sm text-off-white/60">Financial Services</div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-kiiro-yellow/10 via-purple-500/10 to-teal-500/10 rounded-3xl p-8 md:p-12 border border-white/10">
            <h3 className="text-2xl md:text-3xl font-bold text-off-white mb-4">
              Ready to Become Our Next Success Story?
            </h3>
            <p className="text-off-white/70 mb-8 max-w-2xl mx-auto">
              Join the growing list of businesses that have transformed their digital presence with our expertise.
              Let&apos;s discuss your project and create something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/contact"
                  className="px-8 py-3 bg-kiiro-yellow text-charcoal-black font-medium rounded-lg hover:bg-kiiro-yellow/90 transition-colors duration-300 inline-flex items-center gap-2"
                >
                  Start Your Project
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/audit"
                  className="px-8 py-3 bg-white/10 text-off-white border border-white/20 rounded-lg hover:bg-white/20 transition-colors duration-300 inline-flex items-center gap-2"
                >
                  Free Audit
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 