"use client";

import { Shield, Award, Users, Zap, CheckCircle, Star } from "lucide-react";
import { motion } from "framer-motion";

const badges = [
  {
    icon: Award,
    title: "5-Star Rated",
    subtitle: "Client satisfaction"
  },
  {
    icon: Users,
    title: "15+ Projects",
    subtitle: "Successfully delivered"
  },
  {
    icon: Zap,
    title: "7-Day Delivery",
    subtitle: "Average completion"
  },
  {
    icon: CheckCircle,
    title: "100% Satisfaction",
    subtitle: "Money-back guarantee"
  },
  {
    icon: Shield,
    title: "Secure & Professional",
    subtitle: "HTTPS & best practices"
  },
  {
    icon: Star,
    title: "Conversion Expert",
    subtitle: "ROI-focused approach"
  }
];

export function TrustBadges() {
  return (
    <div className="py-12 bg-charcoal-black/50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-xs uppercase tracking-wider text-kiiro-yellow/80 font-semibold mb-2">
            TRUSTED & VERIFIED
          </p>
          <h3 className="text-xl font-semibold text-off-white">
            Your Success is Our Priority
          </h3>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
          {badges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <motion.div
                key={badge.title}
                className="flex flex-col items-center text-center p-4 rounded-lg bg-deep-gray/30 border border-off-white/5 hover:border-kiiro-yellow/20 transition-colors group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-10 h-10 rounded-full bg-kiiro-yellow/10 flex items-center justify-center mb-3 group-hover:bg-kiiro-yellow/20 transition-colors">
                  <Icon className="w-5 h-5 text-kiiro-yellow" />
                </div>
                <h4 className="text-sm font-medium text-off-white mb-1">
                  {badge.title}
                </h4>
                <p className="text-xs text-off-white/60">
                  {badge.subtitle}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
} 