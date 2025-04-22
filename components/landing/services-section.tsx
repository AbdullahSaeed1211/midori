"use client";

import { cn } from "@/lib/utils";
import { BlurFade } from "@/components/magicui/blur-fade";
import { TextAnimate } from "@/components/magicui/text-animate";
import { Check, ArrowUpRight } from 'lucide-react';

interface ServiceProps {
  title: string;
  description: string;
  benefits: string[];
  className?: string;
}

function Service({ title, description, benefits, className }: ServiceProps) {
  return (
    <div
      className={cn(
        "group relative flex h-full flex-col justify-between overflow-hidden rounded-xl p-8",
        "border border-verdant-green/10",
        "bg-gradient-to-b from-deep-gray to-deep-gray/80",
        "transition-all duration-300 hover:border-verdant-green/40 hover:shadow-[0_10px_40px_-15px_rgba(76,175,80,0.1)]",
        className
      )}
    >
      <div className="mb-4">
        <h3 className="mb-4 text-2xl font-bold text-off-white tracking-tight md:text-2xl">
          {title}
        </h3>
        <p className="text-base text-off-white/80 font-normal leading-relaxed mb-6">
          {description}
        </p>
        <ul className="space-y-2">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-start gap-3">
              <Check className="h-5 w-5 text-verdant-green shrink-0 mt-0.5" />
              <span className="text-sm text-off-white/80">{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-end">
        <div className="h-10 w-10 rounded-full flex items-center justify-center bg-verdant-green/10 text-verdant-green border border-verdant-green/20 transition-all duration-300 group-hover:bg-verdant-green group-hover:text-off-white">
          <ArrowUpRight className="h-5 w-5" />
        </div>
      </div>
    </div>
  );
}

export function ServicesSection() {
  return (
    <BlurFade delay={0.1} inView>
      <section className="py-28 bg-charcoal-black text-off-white" id="services">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col items-center mb-16 max-w-4xl mx-auto text-center">
            <div className="px-4 py-1.5 rounded-full bg-verdant-green/10 text-verdant-green text-sm font-medium mb-6 border border-verdant-green/20">Our Core Services</div>
            <h2 className="text-4xl font-bold md:text-6xl mb-6 text-off-white">
              <TextAnimate
                animation="blurInUp"
              >
                {"We Don't Just Build Websites."}
              </TextAnimate>
              {" "}
              <span className="text-verdant-green">We Build Revenue Machines.</span>
            </h2>
            <p className="text-xl text-off-white/80 max-w-3xl">Every pixel strategically placed. Every line of code optimized. All focused on one thing: generating measurable returns on your investment.</p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <Service
              title="Conversion-Obsessed Landing Pages"
              description="Pages engineered to transform visitors into customers with scientific precision."
              benefits={[
                "Outperforms industry conversion rates by 2-3x",
                "Fully responsive with sub-1s load times",
                "Built-in analytics and heatmapping",
                "Optimized for both paid and organic traffic"
              ]}
            />

            <Service
              title="Revenue-Generating SaaS Products"
              description="Web applications that deliver exceptional user experiences while driving business growth."
              benefits={[
                "Intuitive UX that reduces customer support costs",
                "Scalable architecture that grows with your business",
                "Built-in payment and subscription management",
                "Continuous optimization based on user data"
              ]}
            />

            <Service
              title="Brand-Elevating Web Identity"
              description="Digital presence that positions you as the premium choice in your market."
              benefits={[
                "Cohesive visual language that builds immediate trust",
                "Messaging strategy that speaks directly to ideal customers",
                "Complete digital branding package with logo and assets",
                "SEO-optimized content strategy for organic growth"
              ]}
            />
          </div>
        </div>
      </section>
    </BlurFade>
  );
} 