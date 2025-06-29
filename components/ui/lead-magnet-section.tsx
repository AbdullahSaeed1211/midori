"use client";

import { motion } from "framer-motion";
import { BlurFade } from "@/components/magicui/blur-fade";
import { Download, CheckCircle, Star, ArrowRight, Gift, FileText, Calculator, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useState, useRef } from "react";

const leadMagnets = [
  {
    title: "Conversion Audit Checklist",
    description: "47-point checklist used to audit and optimize client websites",
    icon: CheckCircle,
    downloadUrl: "#",
    popular: true,
    value: "$197 Value",
    features: [
      "Psychology-based conversion triggers",
      "Mobile optimization checklist", 
      "A/B testing priorities",
      "Industry-specific recommendations"
    ]
  },
  {
    title: "High-Converting Copy Templates",
    description: "Proven headlines, CTAs, and copy frameworks that convert",
    icon: FileText,
    downloadUrl: "#",
    value: "$297 Value",
    features: [
      "50+ headline formulas",
      "CTA button copy library",
      "Email sequence templates",
      "Social proof frameworks"
    ]
  },
  {
    title: "Website ROI Calculator",
    description: "Calculate exactly how much your website improvements are worth",
    icon: Calculator,
    downloadUrl: "#",
    value: "$97 Value",
    badge: "Interactive Tool",
    features: [
      "Revenue impact calculator",
      "Conversion rate projections",
      "Industry benchmarking",
      "Personalized recommendations"
    ]
  }
];

export function LeadMagnetSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % leadMagnets.length);
    scrollToSlide(currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + leadMagnets.length) % leadMagnets.length);
    scrollToSlide(currentSlide - 1);
  };

  const scrollToSlide = (index: number) => {
    if (scrollContainerRef.current) {
      const cardWidth = 320; // Width of each card + gap
      scrollContainerRef.current.scrollTo({
        left: index * cardWidth,
        behavior: 'smooth'
      });
    }
  };

  return (
    <BlurFade delay={0.1} inView>
      <section className="py-20 bg-charcoal-black">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-kiiro-yellow/10 border border-kiiro-yellow/20 rounded-full mb-6">
              <Gift className="w-4 h-4 text-kiiro-yellow" />
              <span className="text-sm font-medium text-kiiro-yellow">FREE RESOURCES</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-off-white mb-4">
              Get the Same Tools We Use for <span className="text-kiiro-yellow">High-Converting</span> Websites
            </h2>
            <p className="text-xl text-off-white/80 max-w-3xl mx-auto">
              Download the proven frameworks, checklists, and templates we use to build 
              conversion-focused websites. Completely free, no strings attached.
            </p>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-3 gap-8 mb-12">
            {leadMagnets.map((resource, index) => {
              const Icon = resource.icon;
              return (
                <motion.div
                  key={resource.title}
                  className="bg-deep-gray/30 border border-off-white/10 rounded-xl p-8 hover:border-kiiro-yellow/20 transition-all duration-300 group relative overflow-hidden h-full flex flex-col"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Background Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-kiiro-yellow/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Header with Badge */}
                  <div className="relative z-10 flex-grow flex flex-col">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <Download className="w-4 h-4 text-kiiro-yellow" />
                        <span className="text-xs font-medium text-kiiro-yellow uppercase tracking-wider">
                          {resource.badge || "PDF GUIDE"}
                        </span>
                      </div>
                      <span className="text-xs font-bold text-kiiro-yellow">
                        {resource.value}
                      </span>
                    </div>

                    {/* Badge */}
                    {resource.popular && (
                      <div className="absolute top-4 right-4 px-3 py-1 bg-kiiro-yellow text-charcoal-black text-xs font-bold rounded-full">
                        Most Popular
                      </div>
                    )}

                    {/* Icon */}
                    <div className="w-16 h-16 bg-kiiro-yellow/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-kiiro-yellow/20 transition-colors">
                      <Icon className="w-8 h-8 text-kiiro-yellow" />
                    </div>

                    <h3 className="text-xl font-bold text-off-white mb-3">
                      {resource.title}
                    </h3>
                    <p className="text-off-white/70 mb-6 leading-relaxed flex-grow">
                      {resource.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2 mb-6">
                      {resource.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-off-white/80">
                          <CheckCircle className="w-4 h-4 text-kiiro-yellow flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <Link
                      href={resource.downloadUrl}
                      className="flex items-center justify-center gap-2 w-full py-3 bg-kiiro-yellow text-charcoal-black rounded-lg font-medium hover:bg-kiiro-yellow/90 transition-colors group mt-auto"
                    >
                      Download Free
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Mobile Horizontal Scroll */}
          <div className="md:hidden mb-12">
            <div className="relative">
              {/* Navigation Buttons */}
              <motion.button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-kiiro-yellow text-charcoal-black rounded-full flex items-center justify-center shadow-lg hover:bg-kiiro-yellow/90 transition-colors"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <ChevronLeft className="w-5 h-5" />
              </motion.button>
              <motion.button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-kiiro-yellow text-charcoal-black rounded-full flex items-center justify-center shadow-lg hover:bg-kiiro-yellow/90 transition-colors"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <ChevronRight className="w-5 h-5" />
              </motion.button>

              {/* Scrollable Container */}
              <div
                ref={scrollContainerRef}
                className="flex gap-6 overflow-x-auto scrollbar-hide px-6 snap-x snap-mandatory"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {leadMagnets.map((resource, index) => {
                  const Icon = resource.icon;
                  return (
                    <motion.div
                      key={resource.title}
                      className="relative bg-charcoal-black/60 backdrop-blur-sm border border-off-white/10 rounded-xl p-6 min-w-[320px] max-w-[320px] snap-start flex-shrink-0 hover:border-kiiro-yellow/30 transition-all duration-300 group"
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.5, 
                        delay: index * 0.1, 
                        ease: [0.25, 0.1, 0.25, 1] 
                      }}
                      whileHover={{ y: -8, scale: 1.02 }}
                    >
                      {/* Popular Badge - Better positioned */}
                      {resource.popular && (
                        <motion.div 
                          className="absolute -top-3 left-6 px-3 py-1 bg-kiiro-yellow text-charcoal-black text-xs font-bold rounded-full shadow-lg z-20"
                          initial={{ opacity: 0, scale: 0.8, y: -10 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          transition={{ 
                            duration: 0.4, 
                            delay: 0.3, 
                            ease: [0.68, -0.55, 0.265, 1.55] 
                          }}
                        >
                          Most Popular
                        </motion.div>
                      )}

                      <div className="relative z-10">
                        {/* Header with Badge */}
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-2">
                            <Download className="w-4 h-4 text-kiiro-yellow" />
                            <span className="text-xs font-medium text-kiiro-yellow uppercase tracking-wider">
                              {resource.badge || "PDF GUIDE"}
                            </span>
                          </div>
                          <span className="text-sm font-bold text-kiiro-yellow">
                            {resource.value}
                          </span>
                        </div>

                        {/* Icon with organic hover */}
                        <motion.div 
                          className="w-14 h-14 bg-kiiro-yellow/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-kiiro-yellow/20 transition-colors"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                        >
                          <Icon className="w-7 h-7 text-kiiro-yellow" />
                        </motion.div>

                        <h3 className="text-xl font-bold text-off-white mb-3 leading-tight">
                          {resource.title}
                        </h3>
                        <p className="text-off-white/70 mb-4 text-sm leading-relaxed">
                          {resource.description}
                        </p>

                        {/* Features with staggered animation */}
                        <ul className="space-y-2 mb-6">
                          {resource.features.slice(0, 3).map((feature, idx) => (
                            <motion.li 
                              key={idx} 
                              className="flex items-start gap-2 text-sm text-off-white/80"
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ 
                                duration: 0.4, 
                                delay: (index * 0.1) + (idx * 0.1),
                                ease: [0.25, 0.1, 0.25, 1] 
                              }}
                            >
                              <CheckCircle className="w-4 h-4 text-kiiro-yellow flex-shrink-0 mt-0.5" />
                              <span className="leading-relaxed">{feature}</span>
                            </motion.li>
                          ))}
                        </ul>

                        {/* CTA with organic hover */}
                        <motion.div
                          whileHover={{ y: -2, scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                        >
                          <Link
                            href={resource.downloadUrl}
                            className="flex items-center justify-center gap-2 w-full py-3 bg-kiiro-yellow text-charcoal-black rounded-lg font-semibold hover:bg-kiiro-yellow/90 transition-all duration-300 shadow-lg"
                          >
                            Download Free
                            <motion.div
                              whileHover={{ x: 4 }}
                              transition={{ duration: 0.2 }}
                            >
                              <ArrowRight className="w-4 h-4" />
                            </motion.div>
                          </Link>
                        </motion.div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Dots Indicator with organic animations */}
              <div className="flex justify-center mt-8 gap-2">
                {leadMagnets.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => {
                      setCurrentSlide(index);
                      scrollToSlide(index);
                    }}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide 
                        ? 'bg-kiiro-yellow' 
                        : 'bg-off-white/30 hover:bg-off-white/50'
                    }`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    animate={{ 
                      scale: index === currentSlide ? 1.2 : 1,
                      opacity: index === currentSlide ? 1 : 0.6
                    }}
                    transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center max-w-5xl mx-auto">
            <div className="bg-gradient-to-r from-kiiro-yellow/10 to-teal-accent/10 border border-kiiro-yellow/20 rounded-2xl p-8">
              <div className="flex items-center justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-kiiro-yellow text-kiiro-yellow" />
                ))}
                <span className="ml-2 text-off-white/80">Rated 5/5 by 15+ business owners</span>
              </div>
              <h3 className="text-2xl font-bold text-off-white mb-4">
                Want Personal Help Implementing These?
              </h3>
              <p className="text-off-white/70 mb-6 max-w-2xl mx-auto">
                Get a free 15-minute strategy call where I&apos;ll personally review your website 
                and show you exactly how to implement these frameworks for maximum impact.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="#booking"
                  className="px-8 py-4 bg-kiiro-yellow text-charcoal-black rounded-lg font-medium hover:bg-kiiro-yellow/90 transition-colors flex items-center justify-center gap-2"
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
            </div>
          </div>
        </div>
      </section>
    </BlurFade>
  );
} 