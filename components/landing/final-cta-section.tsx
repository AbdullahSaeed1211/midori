"use client";

import { BlurFade } from "@/components/magicui/blur-fade";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export function FinalCtaSection() {
  return (
    <BlurFade delay={0.1} inView>
      <section className="relative py-32 bg-charcoal-black text-off-white overflow-hidden" id="final-cta">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-verdant-green/15 via-transparent to-transparent opacity-40"></div>
        
        <div className="relative container mx-auto px-4 z-10">
          <div className="max-w-4xl mx-auto bg-deep-gray rounded-2xl p-12 border border-verdant-green/10 shadow-xl">
            <div className="text-center mb-10">
              <h2 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl tracking-tight text-off-white">
                Ready to <span className="text-verdant-green">10x</span> Your Online Results?
              </h2>
              <p className="mx-auto max-w-2xl text-xl text-off-white/80">
                Join the businesses that have transformed their digital presence into a powerful revenue-generating asset.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-5">
              <Button 
                size="lg"
                asChild
                className={cn(
                  "py-6 px-8 h-auto rounded-xl",
                  "bg-verdant-green text-off-white",
                  "hover:bg-verdant-green/90 hover:shadow-[0_0_20px_theme(colors.verdant-green/30)]",
                  "transition-all duration-300 text-lg font-medium"
                )}
              >
                <Link href="#booking" className="flex items-center gap-2">
                  Schedule Your Strategy Call <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                asChild
                className={cn(
                  "py-6 px-8 h-auto rounded-xl",
                  "border-off-white/20 text-off-white",
                  "hover:bg-off-white/5 hover:border-off-white/30",
                  "transition-all duration-300 text-lg"
                )}
              >
                <Link href="#services">
                  Explore Our Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </BlurFade>
  );
} 