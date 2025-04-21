"use client";

import { BlurFade } from "@/components/magicui/blur-fade";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { TextAnimate } from "@/components/magicui/text-animate";
import { Marquee } from "@/components/magicui/marquee";

export function HeroSection() {
  return (
    <BlurFade delay={0.1} inView>
      <section 
        className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden py-24 bg-gradient-to-b from-background via-background/90 to-background text-foreground"
        id="hero"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent opacity-30"></div>
        
        <div className="container mx-auto px-0 sm:px-4 text-center z-10">
          <h1 className="max-w-6xl mx-auto text-4xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-7xl leading-tight text-foreground [text-shadow:_0_2px_4px_rgba(0,0,0,0.4)] px-4 sm:px-0">
            <TextAnimate
              animation="blurInUp"
              by="word"
            >
              Websites & Products That 
            </TextAnimate>
            {" "}
            <span className="text-primary">Get Results</span>
          </h1>
          
          <div className="mx-auto mt-8 max-w-md text-lg sm:max-w-xl sm:text-xl md:max-w-3xl md:text-2xl lg:text-3xl text-foreground/90 font-light tracking-wide px-4 sm:px-0">
            <TextAnimate
              animation="fadeIn"
              by="word"
              delay={0.5}
            >
              High-performance websites & web solutions designed for conversion and built for scale.
            </TextAnimate>
          </div>
          
          <div className="mt-12">
            <Button 
              variant="default" 
              size="lg" 
              asChild 
              className="mx-4 sm:mx-0 bg-accent text-accent-foreground hover:bg-accent/90"
            >
              <Link href="#booking">
                Start Your Project
              </Link>
            </Button>
          </div>
          
          <div className="mt-28 w-full overflow-hidden">
            <p className="mb-6 text-xs uppercase tracking-[0.3em] text-primary/80 font-semibold px-4 sm:px-0">
              Trusted By
            </p>
            <Marquee pauseOnHover className="[--duration:60s] opacity-70">
              <span className="mx-6 text-xl sm:mx-10 sm:text-2xl md:text-3xl font-medium italic text-foreground/80">Dubbby</span>
              <span className="mx-6 text-xl sm:mx-10 sm:text-2xl md:text-3xl font-medium italic text-foreground/80">BrainWise</span>
              <span className="mx-6 text-xl sm:mx-10 sm:text-2xl md:text-3xl font-medium italic text-foreground/80">BlogSquirrel</span>
              <span className="mx-6 text-xl sm:mx-10 sm:text-2xl md:text-3xl font-medium italic text-foreground/80">Simply Mortgage</span>
            </Marquee>
          </div>
        </div>
      </section>
    </BlurFade>
  );
} 