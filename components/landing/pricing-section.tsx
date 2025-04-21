"use client";

import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { TextAnimate } from "@/components/magicui/text-animate";
import { BlurFade } from "@/components/magicui/blur-fade";
import { cn } from "@/lib/utils";
import Link from 'next/link';

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
  if (!isFeatured) {
    return (
      <div
        className={cn(
          "relative flex h-full flex-col overflow-hidden rounded-xl border p-8 transition-all duration-300 group",
          "border-code-black-700 bg-deep-gray text-off-white hover:border-code-black-700/60 hover:bg-code-black-800",
          className
        )}
      >
        <div className="mb-6 flex flex-col items-start z-10">
          <h3 className="text-lg font-semibold mb-2 text-off-white">
            {title}
          </h3>
          <div className="mb-4 flex items-baseline">
            <span className="text-3xl font-medium text-verdant-green">{priceInfo}</span>
          </div>
          <p className="mb-8 text-base font-light leading-relaxed text-off-white/80">
            {description}
          </p>
          <Button
            variant="outline"
            className="w-full justify-center rounded-lg py-3 text-base font-medium tracking-wide shadow-sm transition-all border-verdant-green text-verdant-green hover:bg-verdant-green/10 hover:text-verdant-green"
          >
            {ctaText}
          </Button>
        </div>
        <div className="mt-auto space-y-3.5 z-10 text-off-white/80">
          {features.map((feature, i) => (
            <div key={i} className="flex items-start">
              <div className="mr-2.5 flex-shrink-0 rounded-full p-1 mt-0.5 bg-verdant-green/15">
                <Check className="h-3.5 w-3.5 text-verdant-green" />
              </div>
              <span className="text-sm font-light leading-snug text-off-white/80">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative flex h-full flex-col overflow-hidden rounded-xl shadow-2xl shadow-verdant-green/20",
        className
      )}
    >
      <div className="bg-verdant-green p-8 text-charcoal-black rounded-t-xl flex flex-col">
        <h3 className="text-lg font-semibold mb-2 text-charcoal-black/90">
          {title}
        </h3>
        <div className="mb-4 flex items-baseline">
          <span className="text-3xl font-medium text-charcoal-black">{priceInfo}</span>
        </div>
        <p className="mb-8 text-base font-light leading-relaxed text-charcoal-black/80">
          {description}
        </p>
        <Button
          variant="default"
          className="w-full justify-center rounded-lg py-3 text-base font-semibold tracking-wide shadow-md hover:shadow-lg transition-all bg-[#FFD700] text-charcoal-black hover:bg-[#FFD700]/90 mt-auto"
        >
          {ctaText}
        </Button>
      </div>

      <div className="relative bg-charcoal-black p-8 text-off-white/80 rounded-b-xl flex-grow flex flex-col">
        <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,theme(colors.gold)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.gold)_1px,transparent_1px)] [background-size:30px_30px]"></div>
        <div className="mt-auto space-y-3.5 z-10">
          {features.map((feature, i) => (
            <div key={i} className="flex items-start">
              <div className={cn("mr-2.5 flex-shrink-0 rounded-full p-1 mt-0.5 bg-verdant-green/15")}>
                <Check className={cn("h-3.5 w-3.5 text-verdant-green")} />
              </div>
              <span className="text-sm font-light leading-snug text-off-white/80">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function PricingSection() {
  return (
    <BlurFade inView>
      <section className="py-32 bg-charcoal-black text-off-white" id="pricing">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col items-center text-center mb-16 max-w-3xl mx-auto">
            <p className="mb-3 text-xs uppercase tracking-[0.25em] text-verdant-green font-semibold">Flexible Pricing</p>
            <h2 className="text-4xl font-bold md:text-5xl [text-shadow:_0_1px_2px_rgba(0,0,0,0.2)] mb-4 text-off-white">
              <TextAnimate animation="blurInUp">
                Transparent Pricing for Results
              </TextAnimate>
            </h2>
            <p className="text-lg text-off-white/80 font-light leading-relaxed">
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
            <p className="mb-8 text-lg text-off-white/80 font-light leading-relaxed">
              Have a unique challenge or need a tailored solution? Let&apos;s discuss how MidoriLabs can bring your vision to life. Schedule a discovery call today.
            </p>
            <Button 
              variant="default" 
              size="lg"
              asChild
              className="px-8 py-3 rounded-lg font-semibold text-base transition-all duration-300 bg-[#FFD700] text-charcoal-black hover:bg-[#FFD700]/90 hover:shadow-lg hover:shadow-gold/30"
            >
              <Link href="#booking">
                Book a Discovery Call
              </Link>
            </Button>
          </div>
          
        </div>
      </section>
    </BlurFade>
  );
} 