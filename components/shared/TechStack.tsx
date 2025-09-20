"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code, Database, Shield, Zap, Smartphone, Users, Award, TrendingUp } from "lucide-react";

interface TechItem {
  icon: React.ReactNode;
  title: string;
  items: Array<{
    label: string;
    value: string;
  }>;
}

interface TechStackProps {
  title?: string;
  description?: string;
  techItems: TechItem[];
  className?: string;
}

const iconMap = {
  frontend: <Code className="h-8 w-8 text-kiiro-yellow" />,
  backend: <Database className="h-8 w-8 text-kiiro-yellow" />,
  security: <Shield className="h-8 w-8 text-kiiro-yellow" />,
  performance: <Zap className="h-8 w-8 text-green-400" />,
  mobile: <Smartphone className="h-8 w-8 text-blue-400" />,
  features: <Users className="h-8 w-8 text-purple-400" />,
  results: <Award className="h-8 w-8 text-orange-400" />,
  metrics: <TrendingUp className="h-8 w-8 text-emerald-400" />,
};

export function TechStack({
  title = "Technical Architecture",
  description = "Enterprise-grade architecture combining modern web technologies with production-ready features",
  techItems,
  className = ""
}: TechStackProps) {
  return (
    <section className={`py-20 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-off-white mb-6">{title}</h2>
            <p className="text-xl text-off-white/80 max-w-3xl mx-auto">
              {description}
            </p>
          </motion.div>

          {/* Tech Stack Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-charcoal-gray/20 p-8 rounded-xl border border-white/10 hover:border-kiiro-yellow/30 transition-colors"
              >
                <div className="flex items-center gap-3 mb-6">
                  {item.icon}
                  <h3 className="text-xl font-bold text-off-white">{item.title}</h3>
                </div>
                <div className="space-y-3 text-off-white/80">
                  {item.items.map((techItem, techIndex) => (
                    <div key={techIndex} className="flex justify-between">
                      <span>{techItem.label}:</span>
                      <span className="text-kiiro-yellow font-medium">{techItem.value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Preset tech stacks for common use cases
export const createFrontendStack = (items: Array<{ label: string; value: string }>): TechItem => ({
  icon: iconMap.frontend,
  title: "Frontend Stack",
  items
});

export const createBackendStack = (items: Array<{ label: string; value: string }>): TechItem => ({
  icon: iconMap.backend,
  title: "Backend & Database",
  items
});

export const createSecurityStack = (items: Array<{ label: string; value: string }>): TechItem => ({
  icon: iconMap.security,
  title: "Security & Auth",
  items
});

export const createPerformanceStack = (items: Array<{ label: string; value: string }>): TechItem => ({
  icon: iconMap.performance,
  title: "Performance & Optimization",
  items
});
