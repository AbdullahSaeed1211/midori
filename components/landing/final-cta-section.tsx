"use client";

import { BlurFade } from "@/components/magicui/blur-fade";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { RetroGrid } from "@/components/magicui/retro-grid";

export function FinalCtaSection() {
  return (
    <BlurFade delay={0.1} inView>
      <section className="relative py-24 bg-charcoal-black text-off-white overflow-hidden" id="final-cta">
        <RetroGrid className="absolute inset-0 opacity-20" />
        <div className="relative container mx-auto px-4 text-center z-10">
          <h2 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl tracking-tight text-verdant-green">
            Ready to Build?
          </h2>
          <p className="mx-auto mb-10 max-w-xl text-xl text-off-white/80 md:text-2xl">
            Let&apos;s turn your ideas into results.
          </p>
          <Button 
            size="lg"
            asChild
            className={cn(
              "rounded-full",
              "bg-[#FFD700] text-charcoal-black",
              "hover:bg-[#FFD700]/90 hover:shadow-[0_0_15px_theme(colors.gold)]",
              "transition-all duration-300"
            )}
          >
            <Link href="#booking">
              Start Your Project
            </Link>
          </Button>
        </div>
      </section>
    </BlurFade>
  );
} 