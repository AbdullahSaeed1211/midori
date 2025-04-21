"use client";

import { cn } from "@/lib/utils";
import { BlurFade } from "@/components/magicui/blur-fade";
import { TextAnimate } from "@/components/magicui/text-animate";
import { ArrowUpRight } from 'lucide-react';

interface ServiceProps {
  title: string;
  description: string;
  className?: string;
}

function Service({ title, description, className }: ServiceProps) {
  return (
    <div
      className={cn(
        "group relative flex h-full flex-col justify-between overflow-hidden rounded-xl p-6",
        "border border-code-black-700",
        "bg-code-black-900",
        "transition-colors duration-300 hover:border-midori-300/40",
        className
      )}
    >
      <div>
        <h3 className="mb-3 text-xl font-semibold text-midori-300 md:text-2xl tracking-wide">
          {title}
        </h3>
        <p className="flex-1 text-base text-gray-400/90 font-light leading-relaxed mb-4">
          {description}
        </p>
      </div>
      <ArrowUpRight className="absolute top-4 right-4 h-5 w-5 text-gray-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:text-midori-300" />
    </div>
  );
}

export function ServicesSection() {
  return (
    <BlurFade delay={0.1} inView>
      <section className="py-24 bg-code-black-950 text-white" id="services">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col items-center mb-16 max-w-3xl mx-auto text-center">
            <p className="mb-3 text-xs uppercase tracking-[0.25em] text-midori font-semibold">Our Approach</p>
            <h2 className="text-4xl font-bold md:text-5xl [text-shadow:_0_1px_2px_rgba(0,0,0,0.2)] mb-4">
              <TextAnimate
                animation="blurInUp"
              >
                How We Drive 
              </TextAnimate>
              {" "}
              <span className="text-white">Results</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <Service
              title="High-Converting Landing Pages"
              description="Capture more leads with pages built for performance and visual elegance. Each element strategically designed to guide visitors toward conversion."
            />

            <Service
              title="SaaS & AI Web Solutions"
              description="From MVP to scale, we transform your vision into sophisticated, user-friendly products with exceptional attention to detail and performance."
            />

            <Service
              title="Brand Web Identity"
              description="Establish a distinctive online presence with a refined, strategic web identity that elevates your brand and creates memorable impressions."
            />
          </div>
        </div>
      </section>
    </BlurFade>
  );
} 