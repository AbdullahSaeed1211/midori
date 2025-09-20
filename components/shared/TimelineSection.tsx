"use client";

import React from "react";
import { motion } from "framer-motion";

interface TimelineItem {
  number: number;
  title: string;
  description: string;
  isCompleted?: boolean;
  isCurrent?: boolean;
}

interface TimelineSectionProps {
  title?: string;
  items: TimelineItem[];
  className?: string;
}

export function TimelineSection({
  title = "Development Methodology",
  items,
  className = ""
}: TimelineSectionProps) {
  return (
    <section className={`py-20 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-off-white mb-12 text-center"
          >
            {title}
          </motion.h2>

          <div className="space-y-8">
            {items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-charcoal-gray/20 p-6 rounded-lg border border-white/10"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${
                    item.isCompleted
                      ? "bg-green-500/20 text-green-400 border border-green-500/30"
                      : item.isCurrent
                      ? "bg-kiiro-yellow/20 text-kiiro-yellow border border-kiiro-yellow/30"
                      : "bg-white/10 text-off-white/60 border border-white/20"
                  }`}>
                    {item.number}
                  </div>
                  <h3 className="text-xl font-bold text-off-white">{item.title}</h3>
                </div>
                <p className="text-off-white/80 ml-12">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Preset timeline items for common methodologies
export const createTimelineItem = (
  number: number,
  title: string,
  description: string,
  isCompleted = false,
  isCurrent = false
): TimelineItem => ({
  number,
  title,
  description,
  isCompleted,
  isCurrent
});
