"use client";

import { cn } from "@/lib/utils";
import {
  Clock,
  TrendingUp,
  BarChart3,
  Users,
  Zap,
  Headphones,
  Shield,
  Heart,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { useState } from "react";

export default function FeaturesSectionDemo() {
  const [showAllFeatures, setShowAllFeatures] = useState(false);

  const features = [
    {
      title: "7-Day Delivery",
      description:
        "Most projects completed in just one week. No drawn-out timelines that delay your growth.",
      icon: <Clock className="h-6 w-6" />,
    },
    {
      title: "ROI-Focused",
      description:
        "Every design decision and line of code is optimized for conversion and business impact.",
      icon: <TrendingUp className="h-6 w-6" />,
    },
    {
      title: "Data-Driven",
      description:
        "We build with metrics in mind, continuously improving based on real user behavior.",
      icon: <BarChart3 className="h-6 w-6" />,
    },
    {
      title: "Personal Touch",
      description: "Direct communication, transparent pricing, and dedicated attention from a boutique agency.",
      icon: <Users className="h-6 w-6" />,
    },
    {
      title: "Performance Optimized",
      description: "Lightning-fast websites that score 90+ on Google PageSpeed for better SEO and user experience.",
      icon: <Zap className="h-6 w-6" />,
    },
    {
      title: "Ongoing Support",
      description:
        "Post-launch support and maintenance to ensure your website continues performing at its best.",
      icon: <Headphones className="h-6 w-6" />,
    },
    {
      title: "Security First",
      description:
        "Built with security best practices, SSL certificates, and regular updates to keep your site safe.",
      icon: <Shield className="h-6 w-6" />,
    },
    {
      title: "Client Success",
      description: "Your success is our success. We're invested in helping your business grow through better web presence.",
      icon: <Heart className="h-6 w-6" />,
    },
  ];

  // Show only first 4 features on mobile unless showAllFeatures is true
  const visibleFeatures = showAllFeatures ? features : features.slice(0, 4);
  
  return (
    <div className="max-w-7xl mx-auto">
      {/* Mobile: 2-column grid, Desktop: 4-column grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10">
        {visibleFeatures.map((feature, index) => (
          <Feature key={feature.title} {...feature} index={index} />
        ))}
      </div>

      {/* View More Button - Only show on mobile when not all features are visible */}
      {!showAllFeatures && (
        <div className="flex justify-center mt-6 lg:hidden">
          <button
            onClick={() => setShowAllFeatures(true)}
            className="flex items-center gap-2 px-6 py-3 rounded-lg bg-kiiro-yellow/10 text-kiiro-yellow border border-kiiro-yellow/20 hover:bg-kiiro-yellow/20 transition-all duration-300"
          >
            <span className="text-sm font-medium">View More Features</span>
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* View Less Button - Only show on mobile when all features are visible */}
      {showAllFeatures && (
        <div className="flex justify-center mt-6 lg:hidden">
          <button
            onClick={() => setShowAllFeatures(false)}
            className="flex items-center gap-2 px-6 py-3 rounded-lg bg-kiiro-yellow/10 text-kiiro-yellow border border-kiiro-yellow/20 hover:bg-kiiro-yellow/20 transition-all duration-300"
          >
            <span className="text-sm font-medium">View Less</span>
            <ChevronUp className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature border-white/10",
        (index === 0 || index === 4) && "lg:border-l border-white/10",
        index < 4 && "lg:border-b border-white/10"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-kiiro-yellow/5 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-kiiro-yellow/5 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-off-white/70 group-hover/feature:text-kiiro-yellow transition-colors duration-200">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-white/20 group-hover/feature:bg-kiiro-yellow transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-off-white">
          {title}
        </span>
      </div>
      <p className="text-sm text-off-white/80 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
}; 