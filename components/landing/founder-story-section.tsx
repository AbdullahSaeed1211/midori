"use client";

import { motion } from "framer-motion";
import { BlurFade } from "@/components/magicui/blur-fade";
import { Award, Users, Zap, CheckCircle, Star, Quote, ArrowRight, MessageCircle } from "lucide-react";
import { useState } from "react";
const achievements = [
  {
    icon: Users,
    metric: "15+",
    label: "Projects Delivered",
    description: "Across 8+ industries"
  },
  {
    icon: Zap,
    metric: "7 Days",
    label: "Average Delivery",
    description: "Fast turnaround"
  },
  {
    icon: CheckCircle,
    metric: "197%",
    label: "Average ROI",
    description: "Within 30 days"
  },
  {
    icon: Award,
    metric: "5.0★",
    label: "Client Rating",
    description: "100% satisfaction rate"
  }
];

const testimonials = [
  {
    quote: "Our conversion rate went from 2.1% to 7.3% in two weeks. The difference was night and day.",
    author: "Sarah M.",
    role: "E-commerce Owner"
  },
  {
    quote: "Finally, someone who actually understands conversion psychology. Our demo requests doubled.",
    author: "Mike R.",
    role: "SaaS Founder"
  },
  {
    quote: "The fastest and most effective website optimization I've ever experienced.",
    author: "Jennifer K.",
    role: "Marketing Director"
  }
];

export function FounderStorySection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  return (
    <BlurFade delay={0.1} inView>
      <section className="py-20 bg-deep-gray/20">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Clean Header */}
          <div className="text-center mb-16">
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 bg-kiiro-yellow/10 border border-kiiro-yellow/20 rounded-full mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Award className="w-4 h-4 text-kiiro-yellow" />
              <span className="text-sm font-medium text-kiiro-yellow">TRACK RECORD</span>
            </motion.div>
            
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-off-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Hi, I&apos;m the founder behind <span className="text-kiiro-yellow">Kiiro.cx</span>
            </motion.h2>
            
            <motion.p 
              className="text-xl text-off-white/80 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              I help businesses turn their websites into conversion machines. 
              Here&apos;s what that looks like in practice.
            </motion.p>
          </div>

          {/* Achievement Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <motion.div
                  key={achievement.label}
                  className="bg-charcoal-black/50 border border-off-white/10 rounded-xl p-6 text-center hover:border-kiiro-yellow/30 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="w-12 h-12 bg-kiiro-yellow/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-kiiro-yellow" />
                  </div>
                  <p className="text-2xl md:text-3xl font-bold text-off-white mb-1">
                    {achievement.metric}
                  </p>
                  <p className="text-sm font-medium text-off-white mb-1">
                    {achievement.label}
                  </p>
                  <p className="text-xs text-off-white/60">
                    {achievement.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            {/* Left: Story */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-off-white mb-6">
                Why I Do This Differently
              </h3>
              
              <div className="space-y-4 text-off-white/80 leading-relaxed mb-8">
                <p>
                  Most agencies treat you like a number. They assign junior developers, 
                  use templated solutions, and disappear after launch.
                </p>
                <p>
                  <strong className="text-off-white">I believe your business deserves better.</strong> 
                  Every project I take on gets my personal attention - from the initial strategy 
                  call to the final conversion tracking setup.
                </p>
                <p>
                  No account managers. No junior developers. No templated solutions. 
                  Just me, focused entirely on making your website convert better.
                </p>
              </div>

              {/* Simple Promise List */}
              <div className="space-y-3">
                {[
                  "Direct communication with me throughout",
                  "Custom solutions built for your specific business",
                  "Measurable results within 30 days",
                  "Unlimited revisions until you&apos;re happy"
                ].map((promise, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <CheckCircle className="w-5 h-5 text-kiiro-yellow flex-shrink-0" />
                    <span className="text-off-white/80">{promise}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right: Testimonials */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-off-white mb-6">
                What Clients Actually Say
              </h3>

              {/* Testimonial Carousel */}
              <div className="relative">
                <motion.div 
                  className="bg-charcoal-black/50 border border-off-white/10 rounded-xl p-6 min-h-[200px] flex flex-col justify-between"
                  key={currentTestimonial}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <div>
                    <Quote className="w-8 h-8 text-kiiro-yellow/40 mb-4" />
                    <p className="text-off-white/90 leading-relaxed mb-6 text-lg">
                      &quot;{testimonials[currentTestimonial].quote}&quot;
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-off-white">
                      {testimonials[currentTestimonial].author}
                    </p>
                    <p className="text-sm text-off-white/60">
                      {testimonials[currentTestimonial].role}
                    </p>
                  </div>
                </motion.div>

                {/* Simple Dots Navigation */}
                <div className="flex justify-center mt-6 gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentTestimonial 
                          ? 'bg-kiiro-yellow w-8' 
                          : 'bg-off-white/30 hover:bg-off-white/50'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Rating Display */}
              <div className="flex items-center justify-center gap-1 mt-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-kiiro-yellow text-kiiro-yellow" />
                ))}
                <span className="ml-2 text-off-white/70">5.0 rating from all clients</span>
              </div>
            </motion.div>
          </div>

          {/* Clean CTA Section */}
          <motion.div 
            className="text-center bg-gradient-to-r from-kiiro-yellow/10 to-teal-accent/10 border border-kiiro-yellow/20 rounded-2xl p-8"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-off-white mb-4">
              Want to See What These Results Look Like for Your Business?
            </h3>
            <p className="text-off-white/70 mb-8 max-w-2xl mx-auto">
              Let&apos;s have a quick 15-minute call. I&apos;ll take a look at your current site 
              and show you exactly where the biggest opportunities are.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="#booking"
                className="px-8 py-4 bg-kiiro-yellow text-charcoal-black rounded-lg font-semibold hover:bg-kiiro-yellow/90 transition-all duration-300 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Book Free Strategy Call
                <ArrowRight className="w-4 h-4" />
              </motion.a>
              
              <motion.a
                href="/audit"
                className="px-8 py-4 border border-teal-accent text-teal-accent rounded-lg font-medium hover:bg-teal-accent/10 transition-colors flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <MessageCircle className="w-4 h-4" />
                Get Free Audit
              </motion.a>
            </div>

            {/* Simple Trust Signals */}
            <div className="flex items-center justify-center gap-6 mt-6 text-sm text-off-white/60">
              <span>✓ No sales pressure</span>
              <span>✓ 15-minute commitment</span>
              <span>✓ Immediate value</span>
            </div>
          </motion.div>
        </div>
      </section>
    </BlurFade>
  );
}