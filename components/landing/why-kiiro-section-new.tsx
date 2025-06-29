"use client";

import { motion } from "framer-motion";
import { Clock, TrendingUp, BarChart3, Users } from "lucide-react";

const features = [
  {
    icon: <Clock className="h-6 w-6" />,
    title: "7-Day Delivery",
    description: "Most projects completed in just one week. No drawn-out timelines that delay your growth.",
    stat: "83% faster than industry average",
    color: "teal"
  },
  {
    icon: <TrendingUp className="h-6 w-6" />,
    title: "ROI-Focused",
    description: "Every design decision and line of code is optimized for conversion and business impact.",
    stat: "Average 197% ROI within 30 days",
    color: "yellow"
  },
  {
    icon: <BarChart3 className="h-6 w-6" />,
    title: "Data-Driven",
    description: "We build with metrics in mind, continuously improving based on real user behavior.",
    stat: "Built-in analytics for every project",
    color: "purple"
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Personal Touch",
    description: "Direct communication, transparent pricing, and dedicated attention from a boutique agency.",
    stat: "One point of contact, always",
    color: "magenta"
  }
];

export function WhyKiiroSectionNew() {
  const getColorClasses = (color: string) => {
    const colors = {
      teal: {
        bg: "bg-teal-accent/5",
        text: "text-teal-accent",
        border: "border-teal-accent/10",
        hoverBorder: "hover:border-teal-accent/30",
        hoverShadow: "hover:shadow-[0_0_30px_rgba(0,206,209,0.1)]"
      },
      yellow: {
        bg: "bg-kiiro-yellow/5",
        text: "text-kiiro-yellow",
        border: "border-kiiro-yellow/10",
        hoverBorder: "hover:border-kiiro-yellow/30",
        hoverShadow: "hover:shadow-[0_0_30px_rgba(255,236,0,0.1)]"
      },
      purple: {
        bg: "bg-purple-accent/5",
        text: "text-purple-accent",
        border: "border-purple-accent/10",
        hoverBorder: "hover:border-purple-accent/30",
        hoverShadow: "hover:shadow-[0_0_30px_rgba(138,43,226,0.1)]"
      },
      magenta: {
        bg: "bg-magenta-accent/5",
        text: "text-magenta-accent",
        border: "border-magenta-accent/10",
        hoverBorder: "hover:border-magenta-accent/30",
        hoverShadow: "hover:shadow-[0_0_30px_rgba(255,0,255,0.1)]"
      }
    };
    return colors[color as keyof typeof colors] || colors.yellow;
  };

  return (
    <section className="py-20 md:py-28 bg-charcoal-black text-off-white" id="why-kiiro">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex flex-col items-center">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="px-4 py-1.5 rounded-full bg-kiiro-yellow/10 text-kiiro-yellow text-sm font-medium mb-6 border border-kiiro-yellow/20"
            >
              Why Choose Kiiro
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-off-white max-w-4xl">
              Tangible Results, Not Empty Promises
            </h2>
            
            <p className="text-xl text-off-white/80 max-w-3xl mx-auto leading-relaxed">
              Kiiro is a boutique digital studio focused on helping businesses achieve measurable growth 
              through strategic design and development.
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const colorClasses = getColorClasses(feature.color);
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`group relative rounded-xl border bg-charcoal-gray/80 p-6 transition-all duration-300 
                           ${colorClasses.border} ${colorClasses.hoverBorder} ${colorClasses.hoverShadow} 
                           hover:-translate-y-1 h-full flex flex-col`}
              >
                <div className={`absolute inset-0 ${colorClasses.bg} rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-full ${colorClasses.bg} ${colorClasses.text}`}>
                    {feature.icon}
                  </div>
                  
                  <h3 className={`mb-3 text-xl font-bold text-off-white group-hover:${colorClasses.text} transition-colors duration-300`}>
                    {feature.title}
                  </h3>
                  
                  <p className="mb-4 text-off-white/80 flex-grow leading-relaxed">
                    {feature.description}
                  </p>
                  
                  <div className={`mt-auto pt-4 border-t border-white/10`}>
                    <p className={`text-sm font-medium ${colorClasses.text}`}>
                      {feature.stat}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
} 