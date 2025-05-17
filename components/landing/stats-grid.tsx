"use client";

import { motion } from "framer-motion";
import { BlurFade } from "@/components/magicui/blur-fade";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { Clock, Users, ChartBar, Zap } from "lucide-react";
import { BackgroundBeams } from "@/components/ui/background-beams";

interface StatProps {
  value: number;
  label: string;
  icon: React.ReactNode;
  prefix?: string;
  suffix?: string;
  delay: number;
  accentColor?: "yellow" | "teal" | "purple" | "magenta";
}

function Stat({ value, label, icon, prefix = "", suffix = "", delay, accentColor = "yellow" }: StatProps) {
  const accentColors = {
    yellow: {
      bg: "bg-kiiro-yellow/10",
      text: "text-kiiro-yellow",
      border: "border-kiiro-yellow/20",
    },
    teal: {
      bg: "bg-teal-accent/10", 
      text: "text-teal-accent",
      border: "border-teal-accent/20",
    },
    purple: {
      bg: "bg-purple-accent/10",
      text: "text-purple-accent",
      border: "border-purple-accent/20",
    },
    magenta: {
      bg: "bg-magenta-accent/10",
      text: "text-magenta-accent",
      border: "border-magenta-accent/20",
    }
  };

  const accent = accentColors[accentColor];
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className={`flex flex-col items-center p-6 ${accent.bg} rounded-xl border ${accent.border} hover:shadow-lg transition-shadow duration-300`}
    >
      <div className="mb-3">
        <div className={`w-12 h-12 flex items-center justify-center rounded-full bg-charcoal-black ${accent.text}`}>
          {icon}
        </div>
      </div>
      <AnimatedCounter
        from={0}
        to={value}
        duration={2.5}
        delay={delay + 0.2}
        prefix={prefix}
        suffix={suffix}
        className={`text-4xl md:text-5xl font-bold mb-2 ${accent.text}`}
      />
      <p className="text-off-white/80 text-center">{label}</p>
    </motion.div>
  );
}

export function StatsGrid() {
  return (
    <section className="py-24 bg-charcoal-black relative overflow-hidden">
      {/* Dynamic background effect */}
      <BackgroundBeams className="z-0 opacity-30" />
      
      <div className="container px-4 mx-auto relative z-10">
        <BlurFade delay={0.1} inView>
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-kiiro-yellow/10 text-kiiro-yellow border border-kiiro-yellow/20 mb-6">
              <Zap className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">The Numbers Speak</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-off-white mb-4">Measurable Results</h2>
            <p className="text-xl text-off-white/80 max-w-2xl mx-auto">
              Our clients see real business impact through strategic design and development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Stat 
              icon={<ChartBar className="h-6 w-6" />} 
              value={197} 
              label="Average ROI percentage" 
              suffix="%" 
              delay={0.1}
              accentColor="yellow"
            />
            <Stat 
              icon={<Zap className="h-6 w-6" />} 
              value={83} 
              label="Speed improvement" 
              suffix="%" 
              delay={0.2}
              accentColor="teal"
            />
            <Stat 
              icon={<Users className="h-6 w-6" />} 
              value={64} 
              label="Conversion increase" 
              suffix="%" 
              delay={0.3}
              accentColor="purple"
            />
            <Stat 
              icon={<Clock className="h-6 w-6" />} 
              value={7} 
              label="Day average delivery time" 
              delay={0.4}
              accentColor="magenta"
            />
          </div>
        </BlurFade>
      </div>
    </section>
  );
} 