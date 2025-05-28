"use client";

import { Check, Code, Palette, MessageSquare, BarChart } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { ScrollIndicator } from "@/components/ui/scroll-indicator";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { motion } from "framer-motion";
import { TextAnimate } from "@/components/magicui/text-animate";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  className?: string;
  accentColor?: "yellow" | "teal" | "purple" | "magenta";
}

function ServiceCard({ 
  icon, 
  title, 
  description, 
  features, 
  className,
  accentColor = "yellow" 
}: ServiceCardProps) {
  const accentColors = {
    yellow: {
      bg: "bg-kiiro-yellow/5",
      text: "text-kiiro-yellow",
      border: "border-kiiro-yellow/10",
      hoverBorder: "hover:border-kiiro-yellow/30",
      hoverShadow: "hover:shadow-[0_0_30px_rgba(255,236,0,0.1)]",
      hoverText: "group-hover:text-kiiro-yellow"
    },
    teal: {
      bg: "bg-teal-accent/5",
      text: "text-teal-accent",
      border: "border-teal-accent/10",
      hoverBorder: "hover:border-teal-accent/30",
      hoverShadow: "hover:shadow-[0_0_30px_rgba(0,206,209,0.1)]",
      hoverText: "group-hover:text-teal-accent"
    },
    purple: {
      bg: "bg-purple-accent/5",
      text: "text-purple-accent",
      border: "border-purple-accent/10",
      hoverBorder: "hover:border-purple-accent/30",
      hoverShadow: "hover:shadow-[0_0_30px_rgba(138,43,226,0.1)]",
      hoverText: "group-hover:text-purple-accent"
    },
    magenta: {
      bg: "bg-magenta-accent/5",
      text: "text-magenta-accent",
      border: "border-magenta-accent/10",
      hoverBorder: "hover:border-magenta-accent/30",
      hoverShadow: "hover:shadow-[0_0_30px_rgba(255,0,255,0.1)]",
      hoverText: "group-hover:text-magenta-accent"
    }
  };

  const accent = accentColors[accentColor];

  return (
    <div className={`group relative rounded-xl border ${accent.border} bg-charcoal-black p-6 transition-all 
                    duration-300 ${accent.hoverShadow} ${accent.hoverBorder} ${className}`}>
      <div className={`absolute inset-0 ${accent.bg} rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
      
      <div className="relative z-10">
        <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-full ${accent.bg} ${accent.text}`}>
          {icon}
        </div>
        
        <h3 className={`mb-2 text-xl font-bold text-off-white ${accent.hoverText} transition-colors duration-300`}>{title}</h3>
        <p className="mb-8 text-off-white/80">{description}</p>
        
        <ul className="space-y-2">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start">
              <Check className={`mr-2 h-5 w-5 mt-0.5 ${accent.text} flex-shrink-0`} />
              <span className="text-off-white/90">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function ServicesSection() {
  type AccentColor = "yellow" | "teal" | "purple" | "magenta";
  
  const services = [
    {
      icon: <Palette className="h-6 w-6" />,
      title: "Website Design",
      description: "Stunning, on-brand designs optimized for conversion and engagement.",
      features: [
        "Responsive design for all devices",
        "UX-focused layouts that convert visitors",
        "Cohesive branding & visual identity",
        "Interactive prototypes & mockups"
      ],
      accentColor: "teal" as AccentColor
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Web Development",
      description: "High-performance, accessible code built with modern technologies.",
      features: [
        "Fast-loading, optimized websites",
        "Clean, maintainable code structure",
        "SEO-friendly implementation",
        "Integration with CMS & third-party tools"
      ],
      accentColor: "yellow" as AccentColor
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Content Strategy",
      description: "Compelling copy and messaging that drives action and builds trust.",
      features: [
        "Conversion-focused copywriting",
        "SEO content optimization",
        "User journey mapping",
        "Value proposition development"
      ],
      accentColor: "purple" as AccentColor
    },
    {
      icon: <BarChart className="h-6 w-6" />,
      title: "Growth Optimization",
      description: "Data-driven improvements to increase conversions and ROI.",
      features: [
        "A/B testing & performance analysis",
        "Conversion rate optimization",
        "User behavior tracking",
        "Continuous iteration & improvement"
      ],
      accentColor: "magenta" as AccentColor
    }
  ];

  return (
    <section className="py-28 bg-charcoal-black text-off-white relative overflow-hidden" id="services">
      {/* Dynamic background effect */}
      <BackgroundBeams className="z-0 opacity-40" />
      
      <div className="container px-4 mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <div className="inline-flex flex-col items-center">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="px-4 py-1.5 rounded-full bg-kiiro-yellow/10 text-kiiro-yellow text-sm font-medium mb-6 border border-kiiro-yellow/20"
            >
              Our Services
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl font-bold md:text-5xl mb-6 text-off-white relative inline-block"
            >
              <TextAnimate animation="blurInUp">
                Expert Solutions for Digital Growth
              </TextAnimate>
              <motion.span 
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.6 }}
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-kiiro-yellow/30 via-kiiro-yellow to-kiiro-yellow/30 rounded-full"
              />
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl text-off-white/80 max-w-2xl mx-auto mt-6"
            >
              We don&apos;t just build websites – we engineer digital assets designed to convert visitors, 
              generate leads, and drive measurable business growth with data-backed strategies.
            </motion.p>
          </div>
        </motion.div>

        <ScrollReveal effect="staggered" direction="up" staggerChildren={0.15} duration={0.5}>
          <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
                accentColor={service.accentColor}
              />
            ))}
          </div>
        </ScrollReveal>
        
        {/* Scroll Indicator */}
        <div className="flex justify-center mt-20">
          <ScrollIndicator 
            text="See Our Process" 
            onClick={() => {
              const nextSection = document.getElementById('process');
              if (nextSection) {
                nextSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          />
        </div>
      </div>
    </section>
  );
} 