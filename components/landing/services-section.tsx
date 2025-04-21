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
        "bg-deep-gray",
        "transition-colors duration-300 hover:border-verdant-green/40",
        "shadow-lg",
        className
      )}
    >
      <div>
        <h3 className="mb-3 text-xl font-semibold text-verdant-green md:text-2xl tracking-wide">
          {title}
        </h3>
        <p className="flex-1 text-base text-off-white/80 font-normal leading-relaxed mb-4">
          {description}
        </p>
      </div>
      <ArrowUpRight className="absolute top-4 right-4 h-5 w-5 text-off-white/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:text-verdant-green" />
    </div>
  );
}

export function ServicesSection() {
  return (
    <BlurFade delay={0.1} inView>
      <section className="py-24 bg-charcoal-black text-off-white" id="services">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col items-center mb-16 max-w-3xl mx-auto text-center">
            <p className="mb-3 text-xs uppercase tracking-[0.25em] text-verdant-green font-semibold">Our Approach</p>
            <h2 className="text-4xl font-bold md:text-5xl [text-shadow:_0_1px_2px_rgba(0,0,0,0.2)] mb-4 text-off-white">
              <TextAnimate
                animation="blurInUp"
              >
                How We Drive 
              </TextAnimate>
              {" "}
              <span className="text-off-white">Results</span>
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