"use client";

import { BlurFade } from "@/components/magicui/blur-fade";
import { CheckCircle, Users, Lightbulb, Code, BarChart, Zap } from "lucide-react";
import { VerticalTimeline } from "@/components/ui/vertical-timeline";
import { ScrollIndicator } from "@/components/ui/scroll-indicator";

export function ProcessTimeline() {
  const steps = [
    {
      icon: <Users className="h-4 w-4" />,
      title: "Discovery & Strategy",
      description: "We start by understanding your business goals, target audience, and competitive landscape to develop a strategic roadmap."
    },
    {
      icon: <Lightbulb className="h-4 w-4" />,
      title: "Design & Content",
      description: "Our team creates compelling visuals and conversion-focused messaging that resonates with your ideal customers."
    },
    {
      icon: <Code className="h-4 w-4" />,
      title: "Development",
      description: "Transforming designs into high-performance, responsive code with a focus on speed, accessibility, and SEO."
    },
    {
      icon: <CheckCircle className="h-4 w-4" />,
      title: "Testing & Launch",
      description: "Rigorous quality assurance across devices and browsers, followed by a smooth deployment process."
    },
    {
      icon: <BarChart className="h-4 w-4" />,
      title: "Analyze & Optimize",
      description: "Post-launch monitoring with data-driven improvements to continuously enhance performance and conversions."
    }
  ];

  return (
    <section className="py-28 bg-charcoal-black text-off-white relative" id="process">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute left-1/4 top-1/3 w-64 h-64 rounded-full bg-kiiro-yellow/5 blur-[80px] animate-pulse"></div>
        <div className="absolute right-1/4 bottom-1/3 w-72 h-72 rounded-full bg-kiiro-yellow/5 blur-[100px] animate-pulse" style={{ animationDelay: "1s" }}></div>
      </div>
      
      <div className="container px-4 mx-auto relative">
        <BlurFade inView>
          <div className="text-center mb-16">
            <div className="inline-flex flex-col items-center">
              <div className="px-4 py-1.5 rounded-full bg-kiiro-yellow/10 text-kiiro-yellow text-sm font-medium mb-6 border border-kiiro-yellow/20">
                Our Process
              </div>
              <h2 className="text-4xl font-bold md:text-5xl mb-6 text-off-white relative inline-block">
                How We Bring Your Vision to Life
                <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-kiiro-yellow/30 via-kiiro-yellow to-kiiro-yellow/30 rounded-full"></span>
              </h2>
            </div>
            <p className="text-xl text-off-white/80 max-w-3xl mx-auto mt-6">
              A systematic approach that delivers predictable results and a seamless experience from concept to completion.
            </p>
          </div>
        </BlurFade>

        <div className="mt-20 relative">
          <VerticalTimeline items={steps} />
          
          <BlurFade inView delay={0.6}>
            <div className="mt-16 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-kiiro-yellow/10 text-kiiro-yellow border border-kiiro-yellow/20 hover:bg-kiiro-yellow/20 hover:border-kiiro-yellow/30 transition-all duration-300 cursor-default animate-pulse">
                <Zap className="h-4 w-4 text-kiiro-yellow" />
                <span className="text-sm font-medium">Average project completion: 2-3 weeks</span>
              </div>
            </div>
          </BlurFade>
          
          {/* Scroll Indicator */}
          <div className="flex justify-center mt-16">
            <ScrollIndicator 
              text="See the Benefits" 
              onClick={() => {
                const nextSection = document.getElementById('benefits');
                if (nextSection) {
                  nextSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
} 