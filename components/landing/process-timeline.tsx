"use client";

import { BlurFade } from "@/components/magicui/blur-fade";
import { CheckCircle, Users, Code, Zap, ArrowRight } from "lucide-react";

export function ProcessTimeline() {
  const steps = [
    {
      icon: <Users className="h-5 w-5" />,
      title: "Discovery Call",
      description: "Understand your goals and target audience",
      duration: "30 mins"
    },
    {
      icon: <Code className="h-5 w-5" />,
      title: "Design & Build",
      description: "Create conversion-focused website",
      duration: "1-2 weeks"
    },
    {
      icon: <CheckCircle className="h-5 w-5" />,
      title: "Launch & Support",
      description: "Go live with ongoing support",
      duration: "Ongoing"
    }
  ];

  return (
    <section className="py-12 bg-charcoal-black text-off-white" id="process">
      <div className="container px-4 mx-auto max-w-7xl">
        <BlurFade inView>
          <div className="text-center mb-8">
            <p className="text-xs uppercase tracking-[0.25em] text-kiiro-yellow font-semibold mb-3">
              🚀 OUR PROCESS
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-off-white">
              Simple. Focused. Effective.
            </h2>
            <p className="text-lg text-off-white/80 max-w-2xl mx-auto">
              A streamlined approach that gets you online fast.
            </p>
          </div>
        </BlurFade>

        {/* Horizontal Timeline - Compact */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 max-w-4xl mx-auto mb-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
              {/* Step Card */}
              <div className="bg-deep-gray/50 border border-off-white/10 rounded-xl p-6 w-full md:w-64 text-center hover:border-kiiro-yellow/20 transition-all duration-300">
                <div className="w-12 h-12 bg-kiiro-yellow/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  {step.icon}
                </div>
                <h3 className="font-bold text-off-white mb-2">{step.title}</h3>
                <p className="text-sm text-off-white/80 mb-2">{step.description}</p>
                <span className="text-xs text-kiiro-yellow font-medium">{step.duration}</span>
              </div>
              
              {/* Arrow (except for last item) */}
              {index < steps.length - 1 && (
                <ArrowRight className="h-5 w-5 text-kiiro-yellow/60 hidden md:block flex-shrink-0" />
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <BlurFade inView delay={0.3}>
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-kiiro-yellow/10 text-kiiro-yellow border border-kiiro-yellow/20">
              <Zap className="h-4 w-4" />
              <span className="text-sm font-medium">Typical delivery: 1-2 weeks</span>
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
} 