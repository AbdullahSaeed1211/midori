"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Target } from "lucide-react";
import { BackgroundBeams } from "@/components/ui/background-beams";

export function ConversionAuditCTA() {
  const benefits = [
    "Identify what's stopping your website from converting",
    "Get specific recommendations to fix conversion leaks",
    "See exactly how much revenue you're losing monthly",
    "Receive a personalized action plan in minutes"
  ];

  return (
    <section className="py-20 md:py-28 bg-charcoal-black text-off-white relative overflow-hidden" id="audit-cta">
      <BackgroundBeams className="z-0 opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        <div className="w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="px-4 py-1.5 rounded-full bg-kiiro-yellow/20 text-kiiro-yellow text-sm font-medium mb-6 border border-kiiro-yellow/30 inline-block">
                🎯 FREE Conversion Audit
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-off-white">
                Is Your Website Converting Visitors Into Customers?
              </h2>
              
              <p className="text-lg text-off-white/80 mb-8 leading-relaxed">
                Most websites fail to convert because of simple, fixable issues. 
                                 <span className="text-kiiro-yellow font-semibold"> Discover what&apos;s costing you $3,000+ monthly</span> with our free conversion audit.
              </p>

              <ul className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="h-5 w-5 text-kiiro-yellow mt-0.5 flex-shrink-0" />
                    <span className="text-off-white/90">{benefit}</span>
                  </motion.li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/audit"
                  className="flex items-center justify-center gap-2 px-8 py-4 bg-kiiro-yellow text-charcoal-black font-bold rounded-lg hover:bg-kiiro-yellow/90 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-[0_0_25px_rgba(255,236,0,0.3)]"
                >
                  Get Free Revenue Recovery Audit
                  <ArrowRight className="h-5 w-5" />
                </Link>
                
                <Link 
                  href="#case-studies"
                  className="flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-off-white font-medium rounded-lg border border-off-white/20 hover:bg-off-white/5 hover:border-off-white/40 transition-all duration-300"
                >
                  See Case Studies
                </Link>
              </div>
            </motion.div>

            {/* Right Side - Visual Stats */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-charcoal-gray/80 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-kiiro-yellow/10 rounded-full border border-kiiro-yellow/20 mb-4">
                    <Target className="w-8 h-8 text-kiiro-yellow" />
                  </div>
                  <h3 className="text-xl font-bold text-off-white mb-2">Quick Estimate</h3>
                  <p className="text-off-white/70 text-sm">See what you could be earning</p>
                </div>

                <div className="space-y-6">
                  <div className="flex justify-between items-center py-3 border-b border-white/10">
                    <span className="text-off-white/80">Monthly Visitors:</span>
                    <span className="text-off-white font-semibold">10,000</span>
                  </div>
                  
                  <div className="flex justify-between items-center py-3 border-b border-white/10">
                    <span className="text-off-white/80">Current Conversion:</span>
                    <span className="text-red-400 font-semibold">2%</span>
                  </div>
                  
                  <div className="flex justify-between items-center py-3 border-b border-white/10">
                    <span className="text-off-white/80">Optimized Conversion:</span>
                    <span className="text-green-400 font-semibold">8%</span>
                  </div>
                  
                  <div className="bg-kiiro-yellow/10 border border-kiiro-yellow/20 rounded-lg p-4 mt-6">
                    <div className="flex justify-between items-center">
                      <span className="text-off-white font-medium">Monthly Revenue Increase:</span>
                      <span className="text-kiiro-yellow font-bold text-xl">+$12,000</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <p className="text-xs text-off-white/60">
                    * Based on average client improvements
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
} 