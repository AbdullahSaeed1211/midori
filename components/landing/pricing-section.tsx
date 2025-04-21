"use client";

import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { TextAnimate } from "@/components/magicui/text-animate";
import { BlurFade } from "@/components/magicui/blur-fade";
import { cn } from "@/lib/utils";

interface PriceProps {
  title: string;
  priceInfo: string;
  description: string;
  features: string[];
  isFeatured?: boolean;
  ctaText: string;
  className?: string;
}

function PriceCard({
  title,
  priceInfo,
  description,
  features,
  isFeatured,
  ctaText,
  className,
}: PriceProps) {
  return (
    <div
      className={cn(
        "relative flex h-full flex-col overflow-hidden rounded-xl border p-8 transition-all duration-300 group",
        isFeatured 
          ? "border-midori-300/50 bg-midori-300 text-midori-950 shadow-2xl shadow-midori-300/30 ring-1 ring-midori-950/20"
          : "border-code-black-700 bg-code-black-950 text-code-black-50 hover:border-code-black-700/60 hover:bg-code-black-800",
        className
      )}
    >
      {isFeatured && (
        <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] [background-size:30px_30px]"></div>
      )}
      <div className="mb-6 flex flex-col items-start z-10">
        <h3 className={cn("text-lg font-semibold mb-2", isFeatured ? "text-midori-950/90" : "text-code-black-50")}>
          {title}
        </h3>
        
        <div className="mb-4 flex items-baseline">
          <span className={cn("text-3xl font-medium", isFeatured ? "text-midori-950" : "text-midori-300")}>{priceInfo}</span>
        </div>
        
        <p className={cn("mb-8 text-base font-light leading-relaxed", isFeatured ? "text-midori-950/80" : "text-code-black-400")}>
          {description}
        </p>
        
        {isFeatured ? (
          <Button
            variant="secondary"
            className="w-full justify-center rounded-lg py-3 text-base font-semibold tracking-wide shadow-md hover:shadow-lg transition-all"
          >
            {ctaText}
          </Button>
        ) : (
          <Button
            variant="outline"
            className="w-full justify-center rounded-lg py-3 text-base font-medium tracking-wide shadow-sm transition-all group-hover:bg-primary/10"
          >
            {ctaText}
          </Button>
        )}
      </div>

      <div className={cn("mt-auto space-y-3.5 z-10", isFeatured ? "text-midori-950/90" : "text-code-black-400")}>
        {features.map((feature, i) => (
          <div key={i} className="flex items-start">
            <div className={cn("mr-2.5 flex-shrink-0 rounded-full p-1 mt-0.5", isFeatured ? "bg-midori-950/20" : "bg-midori-300/15")}>
              <Check className={cn("h-3.5 w-3.5", isFeatured ? "text-midori-950/80" : "text-midori-300")} />
            </div>
            <span className={cn("text-sm font-light leading-snug", isFeatured ? "text-midori-950/80" : "text-code-black-400")}>{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function PricingSection() {
  return (
    <BlurFade>
      <section className="py-32 bg-code-black-950 text-code-black-50" id="pricing">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col items-center text-center mb-16 max-w-3xl mx-auto">
            <p className="mb-3 text-xs uppercase tracking-[0.25em] text-midori-300 font-semibold">Flexible Pricing</p>
            <h2 className="text-4xl font-bold md:text-5xl [text-shadow:_0_1px_2px_rgba(0,0,0,0.2)] mb-4">
              <TextAnimate animation="blurInUp">
                Transparent Pricing for Results
              </TextAnimate>
            </h2>
            <p className="text-lg text-code-black-400 font-light leading-relaxed">
              Choose the engagement model that best suits your project goals and timeline. Let&apos;s build something exceptional together.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 max-w-5xl mx-auto">
            <PriceCard
              title="Project Sprint"
              priceInfo="Starts at $4,500"
              description="Ideal for well-defined projects like landing pages, MVPs, or specific feature builds. Delivered with speed and precision."
              features={[
                "Dedicated 2-4 week sprint",
                "Fixed scope & deliverables",
                "Strategic discovery & design",
                "Development & QA",
                "Launch support",
                "Perfect for focused initiatives"
              ]}
              ctaText="Start a Project Sprint"
            />

            <PriceCard
              title="Growth Retainer"
              priceInfo="Starts at $3,000 / month"
              description="Ongoing partnership for continuous improvement, development, and strategic growth. Flexible and adaptive."
              features={[
                "Monthly dedicated capacity",
                "Flexible scope (design, dev, strategy)",
                "Iterative improvements & optimization",
                "Priority support & consultation",
                "Performance monitoring",
                "Ideal for long-term success"
              ]}
              isFeatured
              ctaText="Explore Retainer Options"
            />
          </div>

          <div className="mt-24 text-center max-w-2xl mx-auto">
            <h4 className="mb-4 text-2xl font-semibold text-midori-300">Need something different?</h4>
            <p className="mb-8 text-lg text-code-black-400 font-light leading-relaxed">
              We excel at unique challenges. For custom projects, complex integrations, or enterprise needs, let&apos;s schedule a discovery call to explore tailored solutions.
            </p>
            <Button 
              variant="outline" 
              className="px-8 py-3 rounded-lg font-medium text-base transition-all duration-300 hover:shadow-midori-300/20"
            >
              Book a Discovery Call
            </Button>
          </div>
          
        </div>
      </section>
    </BlurFade>
  );
} 