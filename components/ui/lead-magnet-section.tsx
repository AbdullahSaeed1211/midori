"use client";

import { motion, AnimatePresence } from "framer-motion";
import { BlurFade } from "@/components/magicui/blur-fade";
import { cn } from "@/lib/utils";
import {
  CheckCircle,
  Star,
  ArrowRight,
  FileText,
  Calculator,
  ChevronLeft,
  ChevronRight,
  ExternalLink
} from "lucide-react";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

const blogHighlights = [
  {
    title: "Ultimate SEO Guide for Entrepreneurs",
    description: "Everything you need to know about SEO in 2025. From technical fundamentals to content strategy, this comprehensive guide covers all essential elements for ranking higher on Google.",
    icon: FileText,
    readUrl: "/blog/seo-guide-2024",
    popular: true,
    readTime: "12 min read",
    views: "5,200",
    category: "SEO",
    features: [
      "Technical SEO fundamentals",
      "Content strategy frameworks",
      "Local SEO optimization",
      "Mobile-first indexing guide",
      "Analytics and reporting setup"
    ]
  },
  {
    title: "7 Deadly Conversion Mistakes",
    description: "Learn the most common conversion mistakes entrepreneurs make and how to fix them. Stop losing customers to poor website design and user experience.",
    icon: CheckCircle,
    readUrl: "/blog/conversion-optimization-mistakes",
    readTime: "8 min read",
    views: "3,800",
    category: "Conversion",
    features: [
      "Psychology-based conversion triggers",
      "Mobile optimization checklist",
      "A/B testing priorities",
      "User experience improvements",
      "Performance optimization tips"
    ]
  },
  {
    title: "Mobile-First Design in 2025",
    description: "With mobile traffic surpassing desktop, learn why mobile-first design is crucial for your business success and how to implement it effectively.",
    icon: Calculator,
    readUrl: "/blog/mobile-first-design-2024",
    readTime: "10 min read",
    views: "4,100",
    category: "Design",
    features: [
      "Mobile-first design principles",
      "Responsive design techniques",
      "Performance optimization",
      "User experience best practices",
      "Cross-device compatibility"
    ]
  }
];

export function LeadMagnetSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % blogHighlights.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  // Sync scroll with current slide
  useEffect(() => {
    scrollToSlide(currentSlide);
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % blogHighlights.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + blogHighlights.length) % blogHighlights.length);
    setIsAutoPlaying(false);
  };

  const scrollToSlide = (index: number) => {
    if (scrollContainerRef.current) {
      const cardWidth = 340;
      scrollContainerRef.current.scrollTo({
        left: index * cardWidth,
        behavior: 'smooth'
      });
    }
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  return (
    <BlurFade delay={0.1} inView>
      <section className="relative py-16 bg-charcoal-black overflow-hidden">
        {/* Enhanced Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, rgba(255, 209, 0, 0.15) 2px, transparent 0),
                             radial-gradient(circle at 75px 75px, rgba(255, 209, 0, 0.15) 2px, transparent 0)`,
            backgroundSize: '100px 100px'
          }} />
          <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-kiiro-yellow/20 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-24 h-24 bg-gradient-to-br from-teal-accent/20 to-transparent rounded-full blur-2xl" />
        </div>

        <div className="container mx-auto px-4 max-w-6xl relative">
          {/* Ultra-Compact Header */}
          <div className="text-center mb-8">
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-kiiro-yellow/15 to-teal-accent/10 border border-kiiro-yellow/30 rounded-full mb-4"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-xs font-bold text-kiiro-yellow">📚 EXPERT INSIGHTS</span>
            </motion.div>

            <motion.h2
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-off-white mb-3 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Latest Insights from{" "}
              <motion.span
                className="bg-clip-text text-kiiro-yellow relative"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                High-Converting
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-kiiro-yellow via-teal-accent to-kiiro-yellow rounded-full"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                />
              </motion.span>{" "}
              Experts
            </motion.h2>

            <motion.p
              className="text-base text-off-white/70 max-w-xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Actionable strategies for SEO, design, and conversion optimization.
            </motion.p>
          </div>

          {/* Enhanced Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-3 gap-5 mb-6">
            {blogHighlights && blogHighlights.length > 0 && blogHighlights.map((resource, index) => {
              const Icon = resource.icon;
              return (
                <motion.div
                  key={resource.title}
                  className="relative bg-gradient-to-br from-deep-gray/40 to-charcoal-black/60 backdrop-blur-sm border border-off-white/10 rounded-xl p-5 hover:border-kiiro-yellow/30 transition-all duration-500 group cursor-pointer h-full flex flex-col"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{
                    y: -6,
                    scale: 1.02,
                    transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }
                  }}
                  onHoverStart={() => setHoveredCard(index)}
                  onHoverEnd={() => setHoveredCard(null)}
                >
                  {/* Enhanced Background Glow */}
                  <div
                    className={cn(
                      "absolute inset-0 bg-gradient-to-br from-kiiro-yellow/15 via-teal-accent/5 to-transparent rounded-xl transition-opacity duration-300",
                      hoveredCard === index ? "opacity-100" : "opacity-0"
                    )}
                  />

                  {/* Popular Badge */}
                  <AnimatePresence>
                    {resource.popular && (
                      <motion.div
                        className="absolute -top-2 -right-2 px-3 py-1 bg-gradient-to-r from-kiiro-yellow to-kiiro-yellow/90 text-charcoal-black text-xs font-bold rounded-full shadow-lg z-20"
                        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{
                          duration: 0.4,
                          delay: 0.2,
                          ease: [0.68, -0.55, 0.265, 1.55]
                        }}
                      >
                        ⭐ Most Popular
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="relative z-10 flex-grow flex flex-col">
                    {/* Enhanced Header */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-1 bg-gradient-to-r from-kiiro-yellow/20 to-teal-accent/20 text-kiiro-yellow text-xs font-semibold rounded-full border border-kiiro-yellow/30">
                          {resource.category}
                        </span>
                      </div>
                      <span className="text-xs font-bold text-kiiro-yellow bg-kiiro-yellow/10 px-2 py-1 rounded-full">
                        {resource.readTime}
                      </span>
                    </div>

                    {/* Enhanced Icon */}
                    <motion.div
                      className="w-14 h-14 bg-gradient-to-br from-kiiro-yellow/25 to-teal-accent/15 rounded-xl flex items-center justify-center mb-4 group-hover:from-kiiro-yellow/35 group-hover:to-teal-accent/25 transition-all duration-500 border border-kiiro-yellow/20"
                      whileHover={{
                        scale: 1.15,
                        rotate: [0, -3, 3, 0],
                        transition: { duration: 0.5 }
                      }}
                    >
                      <Icon className="w-7 h-7 text-kiiro-yellow" />
                    </motion.div>

                    <h3 className="text-lg font-bold text-off-white mb-2 leading-tight group-hover:text-kiiro-yellow transition-colors duration-300">
                      {resource.title}
                    </h3>
                    <p className="text-off-white/70 mb-4 leading-relaxed flex-grow text-sm line-clamp-2">
                      {resource.description}
                    </p>

                    {/* Enhanced Features */}
                    <ul className="space-y-2 mb-5">
                      {resource.features && resource.features.length > 0 && resource.features.slice(0, 2).map((feature, idx) => (
                        <motion.li
                          key={idx}
                          className="flex items-start gap-2 text-sm text-off-white/80"
                          initial={{ opacity: 0, x: -15 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.4,
                            delay: (index * 0.08) + (idx * 0.1)
                          }}
                        >
                          <motion.div
                            whileHover={{ scale: 1.2, rotate: 360 }}
                            transition={{ duration: 0.3 }}
                          >
                            <CheckCircle className="w-3 h-3 text-kiiro-yellow flex-shrink-0 mt-0.5" />
                          </motion.div>
                          <span className="leading-relaxed">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>

                    {/* Enhanced CTA */}
                    <motion.div
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ duration: 0.2 }}
                      className="mt-auto"
                    >
                      <Link
                        href={resource.readUrl}
                        className="relative flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-kiiro-yellow to-kiiro-yellow/90 text-charcoal-black rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-kiiro-yellow/25 overflow-hidden group text-sm"
                      >
                        {/* Shimmer Effect */}
                        <div
                          className={cn(
                            "absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full transition-transform duration-600 ease-out",
                            hoveredCard === index ? "translate-x-full" : ""
                          )}
                        />
                        <span className="relative z-10">Read Article</span>
                        <div
                          className={cn(
                            "relative z-10 transition-transform duration-200",
                            hoveredCard === index ? "translate-x-1" : ""
                          )}
                        >
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </Link>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Enhanced Mobile Carousel */}
          <div className="md:hidden mb-6">
            <div className="relative">
              {/* Enhanced Navigation Buttons */}
              <motion.button
                onClick={prevSlide}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-11 h-11 bg-gradient-to-r from-kiiro-yellow to-kiiro-yellow/90 text-charcoal-black rounded-full flex items-center justify-center shadow-xl hover:shadow-kiiro-yellow/25 transition-all duration-300 border border-kiiro-yellow/50"
                whileHover={{ scale: 1.1, x: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <ChevronLeft className="w-5 h-5" />
              </motion.button>

              <motion.button
                onClick={nextSlide}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-11 h-11 bg-gradient-to-r from-kiiro-yellow to-kiiro-yellow/90 text-charcoal-black rounded-full flex items-center justify-center shadow-xl hover:shadow-kiiro-yellow/25 transition-all duration-300 border border-kiiro-yellow/50"
                whileHover={{ scale: 1.1, x: 2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <ChevronRight className="w-5 h-5" />
              </motion.button>

              {/* Enhanced Scrollable Container */}
              <div
                ref={scrollContainerRef}
                className="flex gap-4 overflow-x-auto scrollbar-hide px-8 snap-x snap-mandatory pb-4"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
              >
                {blogHighlights.map((resource, index) => {
                  const Icon = resource.icon;
                  return (
                    <motion.div
                      key={resource.title}
                      className="relative bg-gradient-to-br from-charcoal-black/90 to-deep-gray/50 backdrop-blur-sm border border-off-white/10 rounded-xl p-5 min-w-[300px] max-w-[300px] snap-start flex-shrink-0 hover:border-kiiro-yellow/30 transition-all duration-500 group"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.08,
                        ease: [0.25, 0.1, 0.25, 1]
                      }}
                      whileHover={{
                        y: -5,
                        scale: 1.02,
                        transition: { duration: 0.3 }
                      }}
                    >
                      {/* Enhanced Popular Badge */}
                      <AnimatePresence>
                        {resource.popular && (
                          <motion.div
                            className="absolute -top-3 left-8 px-4 py-1 bg-gradient-to-r from-kiiro-yellow via-kiiro-yellow to-kiiro-yellow/90 text-charcoal-black text-xs font-bold rounded-full shadow-lg z-20 flex items-center gap-1"
                            initial={{ opacity: 0, scale: 0.8, y: -15 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{
                              duration: 0.4,
                              delay: 0.2,
                              ease: [0.68, -0.55, 0.265, 1.55]
                            }}
                          >
                            <Star className="w-3 h-3 fill-current" />
                            Most Popular
                          </motion.div>
                        )}
                      </AnimatePresence>

                      <div className="relative z-10">
                        {/* Enhanced Header */}
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-2">
                            <span className="px-3 py-1 bg-gradient-to-r from-kiiro-yellow/20 to-teal-accent/20 text-kiiro-yellow text-xs font-semibold rounded-full border border-kiiro-yellow/30">
                              {resource.category}
                            </span>
                          </div>
                          <span className="text-xs font-bold text-kiiro-yellow bg-kiiro-yellow/10 px-2 py-1 rounded-full">
                            {resource.readTime}
                          </span>
                        </div>

                        {/* Enhanced Icon */}
                        <motion.div
                          className="w-16 h-16 bg-gradient-to-br from-kiiro-yellow/25 to-teal-accent/15 rounded-xl flex items-center justify-center mb-4 group-hover:from-kiiro-yellow/35 group-hover:to-teal-accent/25 transition-all duration-500 border border-kiiro-yellow/20"
                          whileHover={{
                            scale: 1.15,
                            rotate: [0, -5, 5, 0],
                            transition: { duration: 0.5 }
                          }}
                        >
                          <Icon className="w-8 h-8 text-kiiro-yellow" />
                        </motion.div>

                        <h3 className="text-lg font-bold text-off-white mb-2 leading-tight group-hover:text-kiiro-yellow transition-colors duration-300">
                          {resource.title}
                        </h3>
                        <p className="text-off-white/70 mb-4 text-sm leading-relaxed line-clamp-2">
                          {resource.description}
                        </p>

                        {/* Enhanced Features */}
                        <ul className="space-y-2 mb-5">
                          {resource.features.slice(0, 2).map((feature, idx) => (
                            <motion.li
                              key={idx}
                              className="flex items-start gap-2 text-sm text-off-white/80"
                              initial={{ opacity: 0, x: -15 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{
                                duration: 0.4,
                                delay: (index * 0.08) + (idx * 0.1)
                              }}
                            >
                              <motion.div
                                whileHover={{ scale: 1.2, rotate: 360 }}
                                transition={{ duration: 0.3 }}
                              >
                                <CheckCircle className="w-3 h-3 text-kiiro-yellow flex-shrink-0 mt-0.5" />
                              </motion.div>
                              <span className="leading-relaxed">{feature}</span>
                            </motion.li>
                          ))}
                        </ul>

                        {/* Enhanced CTA */}
                        <motion.div
                          whileHover={{ y: -2 }}
                          whileTap={{ scale: 0.98 }}
                          transition={{ duration: 0.2 }}
                          className="mt-auto"
                        >
                          <Link
                            href={resource.readUrl}
                            className="relative flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-kiiro-yellow to-kiiro-yellow/90 text-charcoal-black rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-kiiro-yellow/25 overflow-hidden group text-sm"
                          >
                            {/* Shimmer Effect */}
                            <div
                              className={cn(
                                "absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full transition-transform duration-600 ease-out",
                                hoveredCard === index ? "translate-x-full" : ""
                              )}
                            />
                            <span className="relative z-10">Read Article</span>
                            <div
                              className={cn(
                                "relative z-10 transition-transform duration-200",
                                hoveredCard === index ? "translate-x-1" : ""
                              )}
                            >
                              <ArrowRight className="w-4 h-4" />
                            </div>
                          </Link>
                        </motion.div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Enhanced Dots Indicator */}
              <div className="flex justify-center mt-6 gap-3">
                {blogHighlights.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className="relative group"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {/* Background dot */}
                    <div className="w-3 h-3 rounded-full bg-off-white/20" />

                    {/* Active/Progress dot */}
                    <motion.div
                      className="absolute inset-0 w-3 h-3 rounded-full bg-gradient-to-r from-kiiro-yellow to-kiiro-yellow/80"
                      initial={{ scale: 0 }}
                      animate={{
                        scale: index === currentSlide ? 1 : 0,
                        opacity: index === currentSlide ? 1 : 0
                      }}
                      transition={{ duration: 0.3 }}
                    />

                    {/* Auto-play progress ring */}
                    {index === currentSlide && isAutoPlaying && (
                      <motion.div
                        className="absolute inset-0 w-3 h-3"
                        initial={{ scale: 1 }}
                        animate={{ scale: 1.8 }}
                        transition={{ duration: 5, ease: "linear" }}
                      >
                        <div className="w-full h-full rounded-full border-2 border-kiiro-yellow/40" />
                      </motion.div>
                    )}
                  </motion.button>
                ))}
              </div>

              {/* Enhanced Auto-play indicator */}
              <motion.div
                className="text-center mt-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                <button
                  onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                  className="text-xs text-off-white/50 hover:text-off-white/70 transition-colors px-3 py-1 rounded-full bg-off-white/5 hover:bg-off-white/10"
                >
                  {isAutoPlaying ? "⏸️ Auto-playing" : "▶️ Auto-play paused"}
                </button>
              </motion.div>
            </div>
          </div>

          {/* Compact Bottom CTA */}
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="relative bg-gradient-to-br from-kiiro-yellow/10 via-teal-accent/10 to-kiiro-yellow/5 border border-kiiro-yellow/20 rounded-xl p-6 overflow-hidden">
              <div className="relative z-10">
                {/* Compact Star Rating */}
                <div className="flex items-center justify-center gap-2 mb-3">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-kiiro-yellow text-kiiro-yellow" />
                    ))}
                  </div>
                  <span className="text-off-white/80 font-medium text-sm">
                    Rated 5/5 by 15+ business owners
                  </span>
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-off-white mb-3">
                  Ready to Apply These Insights?
                </h3>
                <p className="text-off-white/70 mb-6 max-w-xl mx-auto leading-relaxed text-sm">
                  Get personalized guidance on implementing these strategies.
                </p>

                {/* Compact CTAs */}
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link
                    href="#booking"
                    className="relative px-6 py-3 bg-gradient-to-r from-kiiro-yellow to-kiiro-yellow/90 text-charcoal-black rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-kiiro-yellow/25"
                  >
                    <span>Get Free Quote</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <Link
                    href="/audit"
                    className="px-6 py-3 border-2 border-teal-accent text-teal-accent rounded-lg font-semibold hover:bg-teal-accent/10 hover:border-teal-accent/80 transition-all duration-300 flex items-center justify-center gap-2 group"
                  >
                    Free Website Audit
                    <ExternalLink className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>


      </section>
    </BlurFade>
  );
}