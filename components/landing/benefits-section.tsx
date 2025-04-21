"use client";

import { BlurFade } from "@/components/magicui/blur-fade";
import {
  LayoutGrid,
  Zap,
  Puzzle,
  Smartphone,
  Users,
  Infinity as InfinityIcon, // Renamed to avoid conflict
  type LucideIcon, 
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Benefit {
  Icon: LucideIcon;
  title: string;
  description: string;
}

const benefits: Benefit[] = [
  {
    Icon: LayoutGrid,
    title: "Responsive Design",
    description: "Flawless experiences across all devices and screen sizes.",
  },
  {
    Icon: Zap,
    title: "Lightning Fast",
    description: "Optimized code for speedy load times and smooth interactions.",
  },
  {
    Icon: Puzzle,
    title: "Custom Solutions",
    description: "Tailor-made frontend solutions to match your unique requirements.",
  },
  {
    Icon: Smartphone, // Changed from Frame to Smartphone based on reference
    title: "Modern Frameworks",
    description: "Expertise in React, Next.js, and modern web technologies.", // Adjusted description
  },
  {
    Icon: Users,
    title: "Collaborative Approach",
    description: "We work closely with your team for seamless integration.",
  },
  {
    Icon: InfinityIcon,
    title: "Ongoing Support",
    description: "Continuous maintenance and updates to keep your frontend fresh.",
  },
];

export function BenefitsSection() {
  return (
    <BlurFade delay={0.1} inView>
      <section className="py-24 bg-charcoal-black text-off-white" id="benefits">
        <div className="container px-4 mx-auto">
          {/* Section Header */}
          <div className="mb-12 text-left">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-verdant-green">
              Benefits
            </p>
            <h2 className="text-4xl font-bold md:text-5xl text-off-white">
              We run behind results
            </h2>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-3">
            {benefits.map((benefit, i) => (
              <div 
                key={i} 
                className={cn(
                  "text-left p-6 rounded-xl border",
                  "bg-deep-gray border-code-black-700",
                  "hover:border-verdant-green/40 transition-all duration-300",
                  "shadow-lg"
                )}
              >
                <benefit.Icon className="mb-4 h-8 w-8 text-verdant-green" />
                <h3 className="mb-2 text-xl font-semibold text-off-white">
                  {benefit.title}
                </h3>
                <p className="text-off-white/80 font-normal">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </BlurFade>
  );
} 