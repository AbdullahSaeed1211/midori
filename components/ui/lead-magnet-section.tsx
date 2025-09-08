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
  ExternalLink,
  Users,
  Clock,
  TrendingUp
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
      <section className="relative py-20 bg-charcoal-black overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, rgba(255, 255, 255, 0.1) 2px, transparent 0), 
                             radial-gradient(circle at 75px 75px, rgba(255, 255, 255, 0.1) 2px, transparent 0)`,
            backgroundSize: '100px 100px'
          }} />
        </div>

        <div className="container mx-auto px-4 max-w-7xl relative">
          {/* Enhanced Header */}
          <div className="text-center mb-16">
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-kiiro-yellow/10 border border-kiiro-yellow/20 rounded-full mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              📚
              <span className="text-sm font-medium text-kiiro-yellow">EXPERT INSIGHTS</span>
            </motion.div>
            
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-off-white mb-4 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Latest Insights from{" "}
              <motion.span
                className="text-kiiro-yellow relative"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                High-Converting
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-kiiro-yellow to-teal-accent rounded-full"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                />
              </motion.span>{" "}
              Experts
            </motion.h2>
            
            <motion.p
              className="text-xl text-off-white/80 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Dive deep into our comprehensive blog posts covering SEO strategies, web design trends,
              and conversion optimization techniques. Get actionable insights that drive results.
            </motion.p>

            {/* Social Proof */}
            <motion.div
              className="flex items-center justify-center gap-6 mt-8 text-sm text-off-white/60"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>15,000+ readers</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4" />
                <span>Average 34% conversion lift</span>
              </div>
            </motion.div>
          </div>

          {/* Enhanced Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-3 gap-8 mb-12">
            {blogHighlights && blogHighlights.length > 0 && blogHighlights.map((resource, index) => {
              const Icon = resource.icon;
              return (
                <motion.div
                  key={resource.title}
                  className="relative bg-deep-gray/30 backdrop-blur-sm border border-off-white/10 rounded-xl p-8 hover:border-kiiro-yellow/30 transition-all duration-500 group cursor-pointer h-full flex flex-col"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                  whileHover={{ 
                    y: -12, 
                    scale: 1.02,
                    transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }
                  }}
                  onHoverStart={() => setHoveredCard(index)}
                  onHoverEnd={() => setHoveredCard(null)}
                >
                  {/* Optimized Background Glow */}
                  <div
                    className={cn(
                      "absolute inset-0 bg-gradient-to-br from-kiiro-yellow/10 via-teal-accent/5 to-transparent rounded-xl transition-opacity duration-300",
                      hoveredCard === index ? "opacity-100" : "opacity-0"
                    )}
                  />

                  {/* Popular Badge */}
                  <AnimatePresence>
                    {resource.popular && (
                      <motion.div 
                        className="absolute -top-3 -right-3 px-3 py-1 bg-gradient-to-r from-kiiro-yellow to-kiiro-yellow/80 text-charcoal-black text-xs font-bold rounded-full shadow-lg z-20"
                        initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ 
                          duration: 0.5, 
                          delay: 0.3,
                          ease: [0.68, -0.55, 0.265, 1.55] 
                        }}
                      >
                        Most Popular
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="relative z-10 flex-grow flex flex-col">
                    {/* Enhanced Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-1 bg-kiiro-yellow/20 text-kiiro-yellow text-xs font-semibold rounded-full">
                          {resource.category}
                        </span>
                      </div>
                      <span className="text-sm font-bold text-kiiro-yellow bg-kiiro-yellow/10 px-3 py-1 rounded-full">
                        {resource.readTime}
                      </span>
                    </div>

                    {/* Enhanced Icon */}
                    <motion.div 
                      className="w-16 h-16 bg-gradient-to-br from-kiiro-yellow/20 to-kiiro-yellow/10 rounded-2xl flex items-center justify-center mb-6 group-hover:from-kiiro-yellow/30 group-hover:to-kiiro-yellow/20 transition-all duration-500"
                      whileHover={{ 
                        scale: 1.1, 
                        rotate: [0, -5, 5, 0],
                        transition: { duration: 0.6 }
                      }}
                    >
                      <Icon className="w-8 h-8 text-kiiro-yellow" />
                    </motion.div>

                    <h3 className="text-xl font-bold text-off-white mb-3 leading-tight">
                      {resource.title}
                    </h3>
                    <p className="text-off-white/70 mb-6 leading-relaxed flex-grow">
                      {resource.description}
                    </p>

                    {/* Read Stats */}
                    <div className="flex items-center gap-4 mb-4 text-xs text-off-white/60">
                      <div className="flex items-center gap-1">
                        <Users className="w-3 h-3" />
                        <span>{resource.views} views</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{resource.readTime}</span>
                      </div>
                    </div>

                    {/* Enhanced Features */}
                    <ul className="space-y-3 mb-8">
                      {resource.features && resource.features.length > 0 && resource.features.map((feature, idx) => (
                        <motion.li 
                          key={idx} 
                          className="flex items-start gap-3 text-sm text-off-white/80"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ 
                            duration: 0.4, 
                            delay: (index * 0.1) + (idx * 0.05)
                          }}
                        >
                          <motion.div
                            whileHover={{ scale: 1.2, rotate: 360 }}
                            transition={{ duration: 0.3 }}
                          >
                            <CheckCircle className="w-4 h-4 text-kiiro-yellow flex-shrink-0 mt-0.5" />
                          </motion.div>
                          <span className="leading-relaxed">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>

                    {/* Enhanced CTA */}
                    <motion.div
                      whileHover={{ y: -3 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ duration: 0.2 }}
                      className="mt-auto"
                    >
                      <Link
                        href={resource.readUrl}
                        className="relative flex items-center justify-center gap-2 w-full py-4 bg-gradient-to-r from-kiiro-yellow to-kiiro-yellow/90 text-charcoal-black rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-kiiro-yellow/25 hover:shadow-xl overflow-hidden group"
                      >
                        {/* Optimized Shimmer Effect */}
                        <div
                          className={cn(
                            "absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full transition-transform duration-500 ease-out",
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
          <div className="md:hidden mb-12">
            <div className="relative">
              {/* Navigation Buttons with Progress */}
              <motion.button
                onClick={prevSlide}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-gradient-to-r from-kiiro-yellow to-kiiro-yellow/80 text-charcoal-black rounded-full flex items-center justify-center shadow-xl hover:shadow-kiiro-yellow/25 transition-all duration-300"
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
                className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-gradient-to-r from-kiiro-yellow to-kiiro-yellow/80 text-charcoal-black rounded-full flex items-center justify-center shadow-xl hover:shadow-kiiro-yellow/25 transition-all duration-300"
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
                className="flex gap-6 overflow-x-auto scrollbar-hide px-8 snap-x snap-mandatory pb-4"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
              >
                {blogHighlights.map((resource, index) => {
                  const Icon = resource.icon;
                  return (
                    <motion.div
                      key={resource.title}
                      className="relative bg-gradient-to-br from-charcoal-black/80 to-deep-gray/40 backdrop-blur-sm border border-off-white/10 rounded-xl p-6 min-w-[340px] max-w-[340px] snap-start flex-shrink-0 hover:border-kiiro-yellow/30 transition-all duration-500 group"
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.6, 
                        delay: index * 0.1, 
                        ease: [0.25, 0.1, 0.25, 1] 
                      }}
                      whileHover={{ 
                        y: -8, 
                        scale: 1.02,
                        transition: { duration: 0.4 }
                      }}
                    >
                      {/* Enhanced Popular Badge */}
                      <AnimatePresence>
                        {resource.popular && (
                          <motion.div 
                            className="absolute -top-3 left-6 px-4 py-1 bg-gradient-to-r from-kiiro-yellow via-kiiro-yellow to-kiiro-yellow/80 text-charcoal-black text-xs font-bold rounded-full shadow-lg z-20 flex items-center gap-1"
                            initial={{ opacity: 0, scale: 0.8, y: -15 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ 
                              duration: 0.5, 
                              delay: 0.3, 
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
                        <div className="flex items-center justify-between mb-6">
                          <div className="flex items-center gap-2">
                            <span className="px-2 py-1 bg-kiiro-yellow/20 text-kiiro-yellow text-xs font-semibold rounded-full">
                              {resource.category}
                            </span>
                          </div>
                          <span className="text-sm font-bold text-kiiro-yellow bg-kiiro-yellow/10 px-3 py-1 rounded-full">
                            {resource.readTime}
                          </span>
                        </div>

                        {/* Enhanced Icon */}
                        <motion.div 
                          className="w-16 h-16 bg-gradient-to-br from-kiiro-yellow/20 to-kiiro-yellow/10 rounded-2xl flex items-center justify-center mb-6 group-hover:from-kiiro-yellow/30 group-hover:to-kiiro-yellow/20 transition-all duration-500"
                          whileHover={{ 
                            scale: 1.15, 
                            rotate: [0, -8, 8, 0],
                            transition: { duration: 0.6 }
                          }}
                        >
                          <Icon className="w-8 h-8 text-kiiro-yellow" />
                        </motion.div>

                        <h3 className="text-xl font-bold text-off-white mb-3 leading-tight">
                          {resource.title}
                        </h3>
                        <p className="text-off-white/70 mb-4 text-sm leading-relaxed">
                          {resource.description}
                        </p>

                        {/* Read Stats */}
                        <div className="flex items-center justify-between mb-4 text-xs text-off-white/60 bg-off-white/5 rounded-lg p-3">
                          <div className="flex items-center gap-1">
                            <Users className="w-3 h-3" />
                            <span>{resource.views} views</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            <span>{resource.readTime}</span>
                          </div>
                        </div>

                        {/* Enhanced Features */}
                        <ul className="space-y-3 mb-8">
                          {resource.features.slice(0, 4).map((feature, idx) => (
                            <motion.li 
                              key={idx} 
                              className="flex items-start gap-3 text-sm text-off-white/80"
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ 
                                duration: 0.4, 
                                delay: (index * 0.1) + (idx * 0.05)
                              }}
                            >
                              <motion.div
                                whileHover={{ scale: 1.2, rotate: 360 }}
                                transition={{ duration: 0.3 }}
                              >
                                <CheckCircle className="w-4 h-4 text-kiiro-yellow flex-shrink-0 mt-0.5" />
                              </motion.div>
                              <span className="leading-relaxed">{feature}</span>
                            </motion.li>
                          ))}
                        </ul>

                        {/* Enhanced CTA */}
                        <motion.div
                          whileHover={{ y: -3 }}
                          whileTap={{ scale: 0.98 }}
                          transition={{ duration: 0.2 }}
                          className="mt-auto"
                        >
                          <Link
                            href={resource.readUrl}
                            className="relative flex items-center justify-center gap-2 w-full py-4 bg-gradient-to-r from-kiiro-yellow to-kiiro-yellow/90 text-charcoal-black rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-kiiro-yellow/25 hover:shadow-xl overflow-hidden group"
                          >
                            {/* Optimized Shimmer Effect */}
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
                                hoveredCard === index ? "translate-x-1.5" : ""
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

              {/* Enhanced Dots Indicator with Progress */}
              <div className="flex justify-center mt-8 gap-3">
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
                      className="absolute inset-0 w-3 h-3 rounded-full bg-kiiro-yellow"
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
                        animate={{ scale: 1.6 }}
                        transition={{ duration: 5, ease: "linear" }}
                      >
                        <div className="w-full h-full rounded-full border-2 border-kiiro-yellow/30" />
                      </motion.div>
                    )}
                  </motion.button>
                ))}
              </div>

              {/* Auto-play indicator */}
              <motion.div 
                className="text-center mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                <button
                  onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                  className="text-xs text-off-white/50 hover:text-off-white/70 transition-colors"
                >
                  {isAutoPlaying ? "Auto-playing • Click to pause" : "Auto-play paused • Click to resume"}
                </button>
              </motion.div>
            </div>
          </div>

          {/* Enhanced Bottom CTA */}
          <motion.div 
            className="text-center max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="relative bg-gradient-to-br from-kiiro-yellow/10 via-teal-accent/10 to-kiiro-yellow/5 border border-kiiro-yellow/20 rounded-2xl p-8 overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-4 right-4 w-32 h-32 bg-gradient-to-br from-kiiro-yellow to-transparent rounded-full blur-3xl" />
                <div className="absolute bottom-4 left-4 w-24 h-24 bg-gradient-to-br from-teal-accent to-transparent rounded-full blur-2xl" />
              </div>

              <div className="relative z-10">
                {/* Enhanced Star Rating */}
                <div className="flex items-center justify-center gap-2 mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 0.3, 
                          delay: i * 0.1,
                          ease: [0.68, -0.55, 0.265, 1.55]
                        }}
                      >
                        <Star className="w-5 h-5 fill-kiiro-yellow text-kiiro-yellow" />
                      </motion.div>
                    ))}
                  </div>
                  <span className="text-off-white/80 font-medium">
                    Rated 5/5 by 15+ business owners
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-off-white mb-4">
                  Ready to Apply These Insights?
                </h3>
                <p className="text-off-white/70 mb-8 max-w-2xl mx-auto leading-relaxed">
                  Get personalized guidance on implementing these strategies. Book a free 15-minute
                  consultation where I&apos;ll help you apply these insights to your specific situation.
                </p>

                {/* Enhanced CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.div
                    whileHover={{ y: -3, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      href="#booking"
                      className="relative px-8 py-4 bg-gradient-to-r from-kiiro-yellow to-kiiro-yellow/90 text-charcoal-black rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-kiiro-yellow/25 hover:shadow-xl overflow-hidden group"
                    >
                      {/* Shimmer Effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full"
                        whileHover={{ x: "200%" }}
                        transition={{ duration: 0.8 }}
                      />
                      <span className="relative z-10">Book Free Strategy Call</span>
                      <motion.div
                        className="relative z-10"
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ArrowRight className="w-4 h-4" />
                      </motion.div>
                    </Link>
                  </motion.div>

                  <motion.div
                    whileHover={{ y: -3, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      href="/audit"
                      className="px-8 py-4 border-2 border-teal-accent text-teal-accent rounded-lg font-semibold hover:bg-teal-accent/10 hover:border-teal-accent/80 transition-all duration-300 flex items-center justify-center gap-2 group"
                    >
                      Get Free Website Audit
                      <ExternalLink className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
                    </Link>
                  </motion.div>
                </div>

                {/* Trust Signals */}
                <motion.div
                  className="mt-8 flex items-center justify-center gap-8 text-xs text-off-white/50"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <div className="flex items-center gap-1">
                    <CheckCircle className="w-3 h-3 text-teal-accent" />
                    <span>Expert insights</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="w-3 h-3 text-teal-accent" />
                    <span>Actionable strategies</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="w-3 h-3 text-teal-accent" />
                    <span>Free consultation</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>


      </section>
    </BlurFade>
  );
}