"use client";

import { BlurFade } from "@/components/magicui/blur-fade";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { TextAnimate } from "@/components/magicui/text-animate";
import { Marquee } from "@/components/magicui/marquee";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <BlurFade delay={0.1} inView>
      <section 
        className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden py-24 bg-gradient-to-b from-charcoal-black via-charcoal-black/90 to-charcoal-black text-off-white"
        id="hero"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-verdant-green/10 via-transparent to-transparent opacity-40"></div>
        
        <div className="container mx-auto px-0 sm:px-4 text-center z-10">
          <h1 className="max-w-5xl mx-auto text-4xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl leading-tight text-off-white [text-shadow:_0_2px_4px_rgba(0,0,0,0.4)] px-4 sm:px-0">
            <TextAnimate
              animation="blurInUp"
              by="word"
            >
              We Build Websites That 
            </TextAnimate>
            {" "}
            <span className="relative inline-block">
              <span className="text-verdant-green">10x Your Revenue</span>
              <span className="absolute bottom-[-4px] left-0 h-1 w-full bg-gradient-to-r from-verdant-green to-gold rounded-full"></span>
            </span>
          </h1>
          
          <div className="mx-auto mt-8 max-w-xl text-lg sm:text-xl md:text-2xl text-off-white/90 font-light tracking-wide px-4 sm:px-0">
            <TextAnimate
              animation="fadeIn"
              by="word"
              delay={0.5}
            >
              {"Not just a website. A high-converting digital asset engineered for measurable growth and ROI."}
            </TextAnimate>
          </div>
          
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              variant="default" 
              size="lg" 
              asChild 
              className={cn(
                "bg-verdant-green text-off-white",
                "hover:bg-verdant-green/90 hover:shadow-[0_0_20px_theme(colors.verdant-green/40)]",
                "transition-all duration-300 px-8 font-medium text-lg h-14"
              )}
            >
              <Link href="#booking" className="flex items-center gap-2">
                Get Started <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              asChild 
              className={cn(
                "border-off-white/20 text-off-white bg-transparent",
                "hover:bg-off-white/5 hover:border-off-white/30",
                "transition-all duration-300 px-8 font-medium text-lg h-14"
              )}
            >
              <Link href="#services">
                See Our Services
              </Link>
            </Button>
          </div>
          
          <div className="mt-28 w-full overflow-hidden">
            <p className="mb-6 text-xs uppercase tracking-[0.3em] text-verdant-green/80 font-semibold px-4 sm:px-0">
              Driving Results For
            </p>
            <Marquee pauseOnHover className="[--duration:60s] opacity-80">
              <span className="mx-6 text-xl sm:mx-10 sm:text-2xl md:text-3xl font-medium text-off-white/90">Dubbby</span>
              <span className="mx-6 text-xl sm:mx-10 sm:text-2xl md:text-3xl font-medium text-off-white/90">BrainWise</span>
              <span className="mx-6 text-xl sm:mx-10 sm:text-2xl md:text-3xl font-medium text-off-white/90">BlogSquirrel</span>
              <span className="mx-6 text-xl sm:mx-10 sm:text-2xl md:text-3xl font-medium text-off-white/90">Simply Mortgage</span>
            </Marquee>
          </div>
          
          <div className="mt-8 flex justify-center">
            <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-verdant-green/10 text-verdant-green border border-verdant-green/20">
              <span className="inline-block h-2 w-2 rounded-full bg-verdant-green animate-pulse"></span>
              <span className="text-sm font-medium">Currently accepting new clients for Q4 2023</span>
            </div>
          </div>
        </div>
      </section>
    </BlurFade>
  );
} 