"use client";

import { motion } from "framer-motion";
import { BlurFade } from "@/components/magicui/blur-fade";
import { Award, Users, Zap, CheckCircle, Star, Quote } from "lucide-react";
import { ArrowRight } from "lucide-react";

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

export function FounderStorySection() {
  return (
    <BlurFade delay={0.1} inView>
      <section className="py-20 bg-deep-gray/20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Left: Sticky Founder Info - 2 columns */}
            <div className="lg:col-span-2">
              <div className="lg:sticky lg:top-8">
                <motion.div 
                  className="bg-charcoal-black/50 backdrop-blur-sm border border-off-white/10 rounded-2xl p-8 space-y-6 shadow-lg"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  <motion.div 
                    className="flex items-center gap-4 mb-6"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                  >
                    <motion.div 
                      className="w-20 h-20 rounded-full bg-kiiro-yellow flex items-center justify-center font-bold text-charcoal-black text-2xl shadow-lg"
                      whileHover={{ scale: 1.05, rotate: 5 }}
                      transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                    >
                      K
                    </motion.div>
                    <div>
                      <h3 className="text-2xl font-bold text-off-white">Our Founder</h3>
                      <div className="flex items-center gap-1 mt-1">
                        {[...Array(5)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ 
                              duration: 0.3, 
                              delay: 0.2 + (i * 0.1),
                              ease: [0.68, -0.55, 0.265, 1.55]
                            }}
                          >
                            <Star className="w-4 h-4 fill-kiiro-yellow text-kiiro-yellow" />
                          </motion.div>
                        ))}
                        <span className="text-sm text-off-white/60 ml-2">Trusted by 15+ businesses</span>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="space-y-4 text-off-white/80 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                  >
                    <p>
                      <strong className="text-off-white">I started Kiiro.cx with a simple mission:</strong> help businesses 
                      turn their websites into conversion machines without the typical agency BS.
                    </p>
                    <p>
                      After seeing too many businesses struggle with overpriced agencies that take months 
                      to deliver mediocre results, I decided to do things differently. <strong className="text-kiiro-yellow">
                      Fast delivery, transparent pricing, and measurable results.</strong>
                    </p>
                  </motion.div>

                  {/* Simplified Personal Touch */}
                  <motion.div 
                    className="bg-kiiro-yellow/10 border border-kiiro-yellow/20 rounded-xl p-6"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                  >
                    <Quote className="w-8 h-8 text-kiiro-yellow/40 mb-3" />
                    <p className="text-sm text-off-white/90 italic">
                      I personally review every project and am available for direct communication 
                      throughout the entire process. No account managers, no junior developers - 
                      just me, focused on your success.
                    </p>
                    <p className="text-sm text-kiiro-yellow mt-3 font-medium">- Kiiro Founder</p>
                  </motion.div>
                </motion.div>
              </div>
            </div>

            {/* Right: Scrollable Content - 3 columns */}
            <div className="lg:col-span-3">
              <div className="space-y-8 lg:max-h-[600px] lg:overflow-y-auto lg:pr-4 custom-scrollbar">
                <div className="text-center lg:text-left">
                  <p className="text-xs uppercase tracking-wider text-kiiro-yellow/80 font-semibold mb-2">
                    PROVEN TRACK RECORD
                  </p>
                  <h2 className="text-3xl md:text-4xl font-bold text-off-white mb-4">
                    Results That Speak for Themselves
                  </h2>
                  <p className="text-off-white/70 text-lg">
                    These aren&apos;t vanity metrics - they&apos;re real results from real businesses 
                    that trusted me to transform their online presence.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  {achievements.map((achievement, index) => {
                    const Icon = achievement.icon;
                    return (
                      <motion.div
                        key={achievement.label}
                        className="relative bg-charcoal-black/60 backdrop-blur-sm border border-off-white/20 rounded-xl p-6 text-center hover:border-kiiro-yellow/40 transition-all duration-300 group overflow-hidden"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.02 }}
                      >
                        {/* Enhanced Background Effects */}
                        <div className="absolute inset-0 bg-gradient-to-br from-kiiro-yellow/5 via-transparent to-teal-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-kiiro-yellow/10 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        
                        <div className="relative z-10">
                          <div className="w-12 h-12 bg-gradient-to-br from-kiiro-yellow/20 to-kiiro-yellow/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:from-kiiro-yellow/30 group-hover:to-kiiro-yellow/20 transition-all duration-300">
                            <Icon className="w-6 h-6 text-kiiro-yellow" />
                          </div>
                          <p className="text-3xl font-bold text-off-white mb-2">
                            {achievement.metric}
                          </p>
                          <p className="text-sm font-medium text-off-white mb-1">
                            {achievement.label}
                          </p>
                          <p className="text-xs text-off-white/60">
                            {achievement.description}
                          </p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Enhanced Story Content */}
                <div className="relative bg-charcoal-black/40 backdrop-blur-sm border border-off-white/20 rounded-xl p-6 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-accent/5 via-transparent to-kiiro-yellow/5" />
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-off-white mb-4">
                      Why I Do This Differently
                    </h3>
                    <div className="space-y-4 text-off-white/80 leading-relaxed">
                      <p>
                        Most agencies treat you like a number. They assign junior developers, 
                        use templated solutions, and disappear after launch. I believe your 
                        business deserves better.
                      </p>
                      <p>
                        Every project I take on is treated like my own business. Because at the end of the day, 
                        your success is my success. That&apos;s why <strong className="text-teal-accent">97% of my clients 
                        see measurable improvements within 30 days.</strong>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Enhanced Process Highlights */}
                <div className="relative bg-gradient-to-br from-kiiro-yellow/10 via-kiiro-yellow/5 to-teal-accent/10 border border-kiiro-yellow/30 rounded-xl p-6 overflow-hidden">
                  <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-kiiro-yellow/20 to-transparent rounded-full blur-3xl opacity-60" />
                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-teal-accent/20 to-transparent rounded-full blur-2xl opacity-40" />
                  
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-off-white mb-4">
                      My Personal Promise to You
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-kiiro-yellow mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-off-white">Direct Communication</p>
                          <p className="text-sm text-off-white/70">You&apos;ll work directly with me, not account managers</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-kiiro-yellow mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-off-white">Transparent Process</p>
                          <p className="text-sm text-off-white/70">Daily updates and full project visibility</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-kiiro-yellow mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-off-white">Results Guarantee</p>
                          <p className="text-sm text-off-white/70">If you&apos;re not happy, we&apos;ll make it right</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-kiiro-yellow mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-off-white">Fast Delivery</p>
                          <p className="text-sm text-off-white/70">Most projects completed in 7-14 days</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Enhanced Call to Action */}
                <div className="relative bg-gradient-to-r from-kiiro-yellow/15 via-kiiro-yellow/10 to-teal-accent/15 border border-kiiro-yellow/40 rounded-xl p-8 text-center overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,209,0,0.1),transparent_70%)]" />
                  <div className="relative z-10">
                    <p className="text-lg text-off-white/90 mb-4">
                      Ready to see what these results could look like for your business?
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <a
                        href="#booking"
                        className="px-8 py-4 bg-kiiro-yellow text-charcoal-black rounded-lg font-semibold hover:bg-kiiro-yellow/90 transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                      >
                        Book Strategy Call
                        <ArrowRight className="w-4 h-4" />
                      </a>
                      <a
                        href="/audit"
                        className="px-8 py-4 border border-teal-accent text-teal-accent rounded-lg font-medium hover:bg-teal-accent/10 transition-colors"
                      >
                        Get Free Audit
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Scrollbar Styles */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 209, 0, 0.5);
          border-radius: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 209, 0, 0.7);
        }
      `}</style>
    </BlurFade>
  );
} 