"use client";

import { BlurFade } from "@/components/magicui/blur-fade";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import FeaturesSectionDemo from "@/components/ui/features-section-demo-2";

export function WhyKiiroSectionEnhanced() {
  return (
    <section className="py-24 bg-charcoal-black text-off-white" id="why-kiiro">
      <div className="container px-4 mx-auto max-w-7xl">
        <BlurFade delay={0.1} inView>
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <div className="px-4 py-1.5 rounded-full bg-kiiro-yellow/10 text-kiiro-yellow text-sm font-medium mb-6 border border-kiiro-yellow/20 inline-block">
              Why Choose Kiiro
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-off-white">
              Tangible Results, Not Empty Promises
            </h2>
            <p className="text-xl text-off-white/80 leading-relaxed">
              Kiiro is a boutique digital studio focused on helping businesses achieve measurable 
              growth through strategic design and development.
            </p>
          </div>
        </BlurFade>
        
        <BlurFade delay={0.2} inView>
          <FeaturesSectionDemo />
        </BlurFade>
        
        <BlurFade delay={0.3} inView>
          <div className="flex justify-center mt-16">
            <Button 
              variant="default" 
              size="lg" 
              asChild 
              className="bg-kiiro-yellow text-charcoal-black hover:bg-kiiro-yellow/90 hover:shadow-[0_0_20px_theme(colors.kiiro-yellow/40)] transition-all duration-300 px-10 py-6 h-auto text-lg font-medium"
            >
              <Link href="#booking">
                Schedule a Strategy Call
              </Link>
            </Button>
          </div>
        </BlurFade>
      </div>
    </section>
  );
} 