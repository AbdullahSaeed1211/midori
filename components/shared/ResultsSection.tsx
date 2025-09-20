"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award } from "lucide-react";

interface MetricCard {
  icon: React.ReactNode;
  value: string;
  label: string;
  description: string;
}

interface ResultsSectionProps {
  title?: string;
  description?: string;
  metrics: MetricCard[];
  highlightText?: string;
  className?: string;
}

export function ResultsSection({
  title = "Business Impact & Results",
  description = "Measurable improvements in efficiency and user experience",
  metrics,
  highlightText,
  className = ""
}: ResultsSectionProps) {
  return (
    <section className={`py-20 bg-charcoal-gray/10 ${className}`}>
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
            <p className="text-xl text-off-white/80">
              {description}
            </p>
          </motion.div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-kiiro-yellow/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  {metric.icon}
                </div>
                <div className="text-4xl font-bold text-kiiro-yellow mb-2">{metric.value}</div>
                <div className="text-lg text-off-white mb-1">{metric.label}</div>
                <div className="text-sm text-off-white/60">{metric.description}</div>
              </motion.div>
            ))}
          </div>

          {/* Highlight Section */}
          {highlightText && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gradient-to-r from-kiiro-yellow/10 via-transparent to-kiiro-yellow/10 border border-kiiro-yellow/20 rounded-2xl p-8"
            >
              <div className="text-center">
                <div className="inline-flex items-center gap-2 mb-4">
                  <Award className="w-6 h-6 text-kiiro-yellow" />
                  <span className="text-kiiro-yellow font-semibold">Production Readiness Status</span>
                </div>
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-green-400 font-medium">95% Complete</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-kiiro-yellow rounded-full animate-pulse" />
                    <span className="text-kiiro-yellow font-medium">Production Ready</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse" />
                    <span className="text-blue-400 font-medium">Enterprise Grade</span>
                  </div>
                </div>
                <p className="text-lg text-off-white/80">
                  {highlightText}
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}

// Preset metrics for common results
export const createMetricCard = (
  icon: React.ReactNode,
  value: string,
  label: string,
  description: string
): MetricCard => ({
  icon,
  value,
  label,
  description
});
