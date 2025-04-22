"use client";

import { Button } from "@/components/ui/button";
import { Check, Zap, ArrowRight } from "lucide-react";
import { TextAnimate } from "@/components/magicui/text-animate";
import { BlurFade } from "@/components/magicui/blur-fade";
import { cn } from "@/lib/utils";
import Link from 'next/link';

interface PriceProps {
  title: string;
  subtitle: string;
  priceInfo: string;
  description: string;
  features: string[];
  isFeatured?: boolean;
  ctaText: string;
  ctaLink: string;
  className?: string;
}

function PriceCard({
  title,
  subtitle,
  priceInfo,
  description,
  features,
  isFeatured,
  ctaText,
  ctaLink,
  className,
}: PriceProps) {
  if (!isFeatured) {
    return (
      <div
        className={cn(
          "relative flex h-full flex-col overflow-hidden rounded-xl p-8 transition-all duration-300",
          "border border-verdant-green/10 bg-deep-gray text-off-white hover:border-verdant-green/20 hover:shadow-[0_10px_40px_-15px_rgba(76,175,80,0.07)]",
          className
        )}
      >
        <div className="mb-8 flex flex-col items-start z-10">
          <span className="text-xs font-medium tracking-wider text-verdant-green/80 uppercase mb-2">{subtitle}</span>
          <h3 className="text-2xl font-bold mb-3 text-off-white">
            {title}
          </h3>
          <div className="mb-4 flex items-baseline">
            <span className="text-3xl font-bold text-verdant-green">{priceInfo}</span>
          </div>
          <p className="mb-8 text-base leading-relaxed text-off-white/80">
            {description}
          </p>
          <Button
            variant="outline"
            asChild
            className="w-full justify-center rounded-lg py-6 h-auto text-base font-medium tracking-wide shadow-sm transition-all border-verdant-green/80 text-verdant-green hover:bg-verdant-green/10 hover:text-verdant-green"
          >
            <Link href={ctaLink}>
              {ctaText}
            </Link>
          </Button>
        </div>
        <div className="mt-auto space-y-4 z-10 text-off-white/80">
          {features.map((feature, i) => (
            <div key={i} className="flex items-start">
              <div className="mr-3 flex-shrink-0 rounded-full p-1 mt-0.5 bg-verdant-green/15">
                <Check className="h-4 w-4 text-verdant-green" />
              </div>
              <span className="text-sm leading-tight text-off-white/80">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative flex h-full flex-col overflow-hidden rounded-xl shadow-xl shadow-verdant-green/20 scale-105 z-10",
        className
      )}
    >
      <div className="absolute top-0 right-0 bg-verdant-green text-charcoal-black text-xs font-bold uppercase px-4 py-1.5 rounded-bl-lg flex items-center gap-1.5">
        <Zap className="h-3.5 w-3.5" /> Most Popular
      </div>
      
      <div className="bg-gradient-to-r from-verdant-green to-verdant-green/90 p-8 text-off-white rounded-t-xl flex flex-col">
        <span className="text-xs font-medium tracking-wider text-off-white/90 uppercase mb-2">{subtitle}</span>
        <h3 className="text-2xl font-bold mb-3 text-off-white">
          {title}
        </h3>
        <div className="mb-4 flex items-baseline">
          <span className="text-4xl font-bold text-off-white">{priceInfo}</span>
        </div>
        <p className="mb-8 text-base leading-relaxed text-off-white/90">
          {description}
        </p>
        <Button
          variant="default"
          asChild
          className="w-full justify-center rounded-lg py-6 h-auto text-base font-semibold tracking-wide shadow-md hover:shadow-lg transition-all bg-off-white text-verdant-green hover:bg-off-white/90 mt-auto"
        >
          <Link href={ctaLink} className="flex items-center justify-center gap-2">
            {ctaText} <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>

      <div className="relative bg-deep-gray p-8 text-off-white/80 rounded-b-xl flex-grow flex flex-col border-x border-b border-verdant-green/20">
        <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,theme(colors.verdant-green)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.verdant-green)_1px,transparent_1px)] [background-size:20px_20px]"></div>
        <div className="mt-auto space-y-4 z-10">
          {features.map((feature, i) => (
            <div key={i} className="flex items-start">
              <div className={cn("mr-3 flex-shrink-0 rounded-full p-1 mt-0.5 bg-verdant-green/15")}>
                <Check className={cn("h-4 w-4 text-verdant-green")} />
              </div>
              <span className="text-sm leading-tight text-off-white/80">{feature}</span>
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
          <div className="flex flex-col items-center text-center mb-20 max-w-3xl mx-auto">
            <div className="px-4 py-1.5 rounded-full bg-verdant-green/10 text-verdant-green text-sm font-medium mb-6 border border-verdant-green/20">Value-Based Pricing</div>
            <h2 className="text-4xl font-bold md:text-6xl mb-6 text-off-white">
              <TextAnimate animation="blurInUp">
                {"Invest in Growth, Not Just a Website"}
              </TextAnimate>
            </h2>
            <p className="text-xl text-off-white/80 leading-relaxed max-w-2xl">
              Our pricing is designed around the value we deliver. Choose the investment level that matches your growth ambitions.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 max-w-5xl mx-auto">
            <PriceCard
              title="Results Accelerator"
              subtitle="For Focused Growth"
              priceInfo="From $6,500"
              description="A purpose-built digital asset engineered to deliver a specific business outcome in the shortest possible time."
              features={[
                "Complete in 7-14 days (not months)",
                "Conversion-optimized design & copy",
                "Full responsive implementation",
                "SEO foundation & performance tuning",
                "Analytics & conversion tracking",
                "30 days of priority support",
                "Perfect for landing pages & focused campaigns"
              ]}
              ctaText="Book Strategy Call"
              ctaLink="#booking"
            />

            <PriceCard
              title="Growth Engine"
              subtitle="For Serious Scaling"
              priceInfo="From $9,500"
              description="A comprehensive digital solution built to systematically generate leads, conversions, and revenue for sustainable growth."
              features={[
                "Complete in 14-21 days",
                "Multi-page conversion system",
                "Advanced UX optimization",
                "Content strategy & implementation",
                "A/B testing framework",
                "Detailed analytics dashboard",
                "60 days of priority support & optimizations",
                "Perfect for complete website rebuilds & SaaS products"
              ]}
              isFeatured
              ctaText="Book Strategy Call"
              ctaLink="#booking"
            />
          </div>

          <div className="mt-20 p-8 border border-verdant-green/10 bg-deep-gray/50 rounded-xl max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-off-white">Need something custom?</h3>
                <p className="text-base text-off-white/80 max-w-md">
                  Let&apos;s discuss your specific requirements and create a tailored solution for your unique business challenges.
                </p>
              </div>
              <Button 
                variant="default" 
                size="lg"
                asChild
                className="px-8 py-6 h-auto rounded-lg font-medium text-base transition-all duration-300 bg-verdant-green text-off-white hover:bg-verdant-green/90 hover:shadow-lg hover:shadow-verdant-green/30 whitespace-nowrap"
              >
                <Link href="#booking" className="flex items-center gap-2">
                  Schedule Discovery Call <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
          
        </div>
      </section>
    </BlurFade>
  );
} 