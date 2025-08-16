"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { BlurFade } from "@/components/magicui/blur-fade";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Founder",
    company: "Sproutly",
    content: "Kiiro transformed our landing page and increased our conversion rate from 2.4% to 92% in just 2 weeks. The attention to detail and understanding of user psychology is incredible.",
    rating: 5,
    image: "/avatars/user1.png",
    metric: "92% conversion rate",
    industry: "SaaS"
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    role: "CEO",
    company: "Simply Mortgage",
    content: "Working with Kiiro was a game-changer. Our lead generation increased by 42% within the first month. Their strategic approach to design really shows.",
    rating: 5,
    image: "/avatars/user2.png",
    metric: "42% lead increase",
    industry: "Finance"
  },
  {
    id: 3,
    name: "Lisa Thompson",
    role: "Marketing Director",
    company: "BrainWise",
    content: "The team delivered exactly what we needed - a website that converts. Our bounce rate dropped by 35% and engagement increased significantly.",
    rating: 5,
    image: "/avatars/user3.png",
    metric: "35% bounce reduction",
    industry: "EdTech"
  },
  {
    id: 4,
    name: "Ahmed Hassan",
    role: "Founder",
    company: "Dubbby",
    content: "Professional, fast, and results-driven. Kiiro understood our vision and delivered a website that perfectly represents our brand while driving conversions.",
    rating: 5,
    image: "/avatars/user4.png",
    metric: "3x faster delivery",
    industry: "Creative Services"
  }
];

export function TestimonialsEnhancedV2() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-advance testimonials
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <BlurFade delay={0.1} inView>
      <section className="py-16 md:py-20 bg-charcoal-black text-off-white overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Header */}
          <div className="text-center mb-12">
            <p className="mb-3 text-xs uppercase tracking-[0.25em] text-kiiro-yellow font-semibold">
              CLIENT SUCCESS STORIES
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-off-white">
              Real Results from Real Clients
            </h2>
            <p className="text-lg text-off-white/80 max-w-2xl mx-auto">
              See how we&apos;ve helped businesses transform their online presence and achieve measurable growth
            </p>
          </div>

          {/* Main Testimonial Display */}
          <div className="relative max-w-6xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="bg-deep-gray/30 border border-off-white/10 rounded-2xl p-8 md:p-12 relative overflow-hidden"
              >
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-kiiro-yellow/5 rounded-full blur-3xl"></div>
                <Quote className="absolute top-6 left-6 w-8 h-8 text-kiiro-yellow/20" />

                <div className="grid md:grid-cols-3 gap-8 items-center relative z-10">
                  {/* Testimonial Content */}
                  <div className="md:col-span-2">
                    {/* Rating */}
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-kiiro-yellow text-kiiro-yellow" />
                      ))}
                    </div>

                    {/* Content */}
                    <blockquote className="text-lg md:text-xl text-off-white leading-relaxed mb-6">
                      &quot;{testimonials[currentIndex].content}&quot;
                    </blockquote>

                    {/* Metric Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-kiiro-yellow/10 border border-kiiro-yellow/20 rounded-full mb-6">
                      <span className="text-sm font-semibold text-kiiro-yellow">
                        {testimonials[currentIndex].metric}
                      </span>
                    </div>

                    {/* Author Info */}
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-kiiro-yellow/10 flex items-center justify-center overflow-hidden">
                        <Image 
                          src={testimonials[currentIndex].image} 
                          alt={testimonials[currentIndex].name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            target.parentElement!.innerHTML = testimonials[currentIndex].name.charAt(0);
                          }}
                        />
                      </div>
                      <div>
                        <p className="font-semibold text-off-white">
                          {testimonials[currentIndex].name}
                        </p>
                        <p className="text-sm text-off-white/70">
                          {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                        </p>
                        <p className="text-xs text-kiiro-yellow/80">
                          {testimonials[currentIndex].industry}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Visual Element */}
                  <div className="hidden md:flex items-center justify-center">
                    <div className="relative">
                      <div className="w-48 h-48 bg-gradient-to-br from-kiiro-yellow/20 to-teal-accent/20 rounded-full flex items-center justify-center">
                        <div className="w-32 h-32 bg-charcoal-black/50 rounded-full flex items-center justify-center">
                          <Quote className="w-16 h-16 text-kiiro-yellow/60" />
                        </div>
                      </div>
                      {/* Floating elements */}
                      <motion.div
                        className="absolute -top-4 -right-4 w-8 h-8 bg-kiiro-yellow/30 rounded-full"
                        animate={{ y: [-10, 10, -10] }}
                        transition={{ duration: 3, repeat: Infinity }}
                      />
                      <motion.div
                        className="absolute -bottom-4 -left-4 w-6 h-6 bg-teal-accent/30 rounded-full"
                        animate={{ y: [10, -10, 10] }}
                        transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-charcoal-black/80 border border-off-white/20 rounded-full flex items-center justify-center hover:bg-kiiro-yellow hover:text-charcoal-black transition-colors z-20"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-charcoal-black/80 border border-off-white/20 rounded-full flex items-center justify-center hover:bg-kiiro-yellow hover:text-charcoal-black transition-colors z-20"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-kiiro-yellow scale-125'
                    : 'bg-off-white/30 hover:bg-off-white/50'
                }`}
              />
            ))}
          </div>

          {/* Progress Bar */}
          <div className="max-w-md mx-auto mt-6">
            <div className="w-full h-1 bg-off-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-kiiro-yellow rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: `${((currentIndex + 1) / testimonials.length) * 100}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>
        </div>
      </section>
    </BlurFade>
  );
} 