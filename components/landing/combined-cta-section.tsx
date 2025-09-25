"use client";

import { Star, Users, Zap, ArrowRight, Shield, CheckCircle, Clock } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export function CombinedCTASection() {
  return (
    <section className="py-12 bg-gradient-to-br from-kiiro-yellow/5 to-teal-accent/5 border-y border-off-white/10">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Main CTA Content */}
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-kiiro-yellow/10 border border-kiiro-yellow/20 rounded-full mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Zap className="w-4 h-4 text-kiiro-yellow" />
            <span className="text-sm font-medium text-kiiro-yellow">READY TO GET STARTED?</span>
          </motion.div>

          <motion.h2
            className="text-2xl md:text-3xl font-bold text-off-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Your Website Should Work <span className="text-kiiro-yellow">While You Sleep</span>
          </motion.h2>

          <motion.p
            className="text-lg text-off-white/80 leading-relaxed mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Stop losing potential customers to poor website performance. Get a free conversion audit and turn your website into your most effective sales tool.
          </motion.p>

          {/* Compact CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-3 justify-center mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Link
              href="#booking"
              className="px-6 py-3 bg-kiiro-yellow text-charcoal-black rounded-lg font-medium hover:bg-kiiro-yellow/90 transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 text-sm"
            >
              Book Free Strategy Call
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/audit"
              className="px-6 py-3 border border-teal-accent text-teal-accent rounded-lg font-medium hover:bg-teal-accent/10 transition-colors text-sm"
            >
              Get Free Website Audit
            </Link>
          </motion.div>

          {/* Compact Social Proof */}
          <motion.p
            className="text-sm text-off-white/60 mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Join 15+ successful businesses • Average 197% ROI within 30 days
          </motion.p>

          {/* Trust Badges Row */}
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-kiiro-yellow/10 border border-kiiro-yellow/20 rounded-full">
              <Star className="w-4 h-4 text-kiiro-yellow" />
              <span className="text-sm font-medium text-kiiro-yellow">5-Star Rated</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
              <Users className="w-4 h-4 text-emerald-400" />
              <span className="text-sm font-medium text-emerald-400">15+ Projects</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full">
              <Clock className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium text-blue-400">7-Day Delivery</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full">
              <Shield className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-medium text-purple-400">100% Secure</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full">
              <CheckCircle className="w-4 h-4 text-orange-400" />
              <span className="text-sm font-medium text-orange-400">Money Back</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
