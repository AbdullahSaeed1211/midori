"use client";

import { BlurFade } from "@/components/magicui/blur-fade";
import { CheckCircle, Users, Lightbulb, Code, BarChart, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  isLast?: boolean;
  index: number;
}

function ProcessStep({ number, title, description, icon, isLast, index }: ProcessStepProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.1 * index }}
      viewport={{ once: true, margin: "-100px" }}
      className="relative pb-12 ml-6 md:ml-0"
    >
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-6 top-10 bottom-0 w-px md:left-1/2 md:-ml-px overflow-hidden">
          <motion.div 
            className="h-full w-full bg-gradient-to-b from-verdant-green/50 to-verdant-green/10"
            initial={{ scaleY: 0, originY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 0.7, delay: 0.2 * (index + 1) }}
            viewport={{ once: true, margin: "-100px" }}
          ></motion.div>
        </div>
      )}

      <div className={cn(
        "relative flex flex-col md:flex-row md:items-center",
        number % 2 === 0 ? "md:flex-row-reverse text-left" : "text-left md:text-right"
      )}>
        {/* Number and icon */}
        <motion.div 
          className="absolute left-0 flex items-center justify-center w-12 h-12 rounded-full 
                     bg-verdant-green/10 text-verdant-green z-10 border border-verdant-green/20 
                     md:left-1/2 md:-ml-6 transition-all duration-300 
                     hover:scale-110 hover:bg-verdant-green/20 hover:border-verdant-green/40"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ 
            type: "spring", 
            stiffness: 300, 
            damping: 20, 
            delay: 0.2 * index
          }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {icon}
        </motion.div>

        {/* Content */}
        <motion.div 
          className={cn(
            "group relative ml-20 p-6 rounded-xl border border-verdant-green/10 bg-deep-gray transition-all duration-300 hover:border-verdant-green/30 hover:shadow-lg md:w-[45%] cursor-default", 
            number % 2 === 0 ? "md:mr-20 md:ml-0" : "md:ml-20"
          )}
          initial={{ opacity: 0, x: number % 2 === 0 ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ 
            type: "spring", 
            stiffness: 100, 
            damping: 20, 
            delay: 0.3 * index 
          }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="absolute inset-0 bg-verdant-green/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative z-10">
            <span className="inline-block px-2 py-1 mb-2 text-xs font-semibold rounded-full bg-verdant-green/10 text-verdant-green group-hover:bg-verdant-green/20 transition-colors duration-300">Step {number}</span>
            <h3 className="mb-2 text-xl font-bold text-off-white group-hover:text-verdant-green transition-colors duration-300">{title}</h3>
            <p className="text-off-white/80">{description}</p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export function ProcessTimeline() {
  const steps = [
    {
      icon: <Users className="h-5 w-5" />,
      title: "Discovery & Strategy",
      description: "We start by understanding your business goals, target audience, and competitive landscape to develop a strategic roadmap."
    },
    {
      icon: <Lightbulb className="h-5 w-5" />,
      title: "Design & Content",
      description: "Our team creates compelling visuals and conversion-focused messaging that resonates with your ideal customers."
    },
    {
      icon: <Code className="h-5 w-5" />,
      title: "Development",
      description: "Transforming designs into high-performance, responsive code with a focus on speed, accessibility, and SEO."
    },
    {
      icon: <CheckCircle className="h-5 w-5" />,
      title: "Testing & Launch",
      description: "Rigorous quality assurance across devices and browsers, followed by a smooth deployment process."
    },
    {
      icon: <BarChart className="h-5 w-5" />,
      title: "Analyze & Optimize",
      description: "Post-launch monitoring with data-driven improvements to continuously enhance performance and conversions."
    }
  ];

  return (
    <section className="py-28 bg-charcoal-black text-off-white relative" id="process">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute left-1/4 top-1/3 w-64 h-64 rounded-full bg-verdant-green/5 blur-[80px] animate-pulse"></div>
        <div className="absolute right-1/4 bottom-1/3 w-72 h-72 rounded-full bg-verdant-green/5 blur-[100px] animate-pulse" style={{ animationDelay: "1s" }}></div>
      </div>
      
      <div className="container px-4 mx-auto relative">
        <BlurFade inView>
          <div className="text-center mb-16">
            <div className="inline-flex flex-col items-center">
              <div className="px-4 py-1.5 rounded-full bg-verdant-green/10 text-verdant-green text-sm font-medium mb-6 border border-verdant-green/20">
                Our Process
              </div>
              <h2 className="text-4xl font-bold md:text-5xl mb-6 text-off-white relative inline-block">
                How We Bring Your Vision to Life
                <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-verdant-green/30 via-verdant-green to-verdant-green/30 rounded-full"></span>
              </h2>
            </div>
            <p className="text-xl text-off-white/80 max-w-3xl mx-auto mt-6">
              A systematic approach that delivers predictable results and a seamless experience from concept to completion.
            </p>
          </div>
        </BlurFade>

        <div className="mt-20 relative">
          {steps.map((step, index) => (
            <ProcessStep
              key={index}
              number={index + 1}
              title={step.title}
              description={step.description}
              icon={step.icon}
              isLast={index === steps.length - 1}
              index={index}
            />
          ))}
          
          <BlurFade inView delay={0.6}>
            <div className="mt-16 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-verdant-green/10 text-verdant-green border border-verdant-green/20 hover:bg-verdant-green/20 hover:border-verdant-green/30 transition-all duration-300 cursor-default animate-pulse">
                <Zap className="h-4 w-4 text-verdant-green" />
                <span className="text-sm font-medium">Average project completion: 2-3 weeks</span>
              </div>
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
} 