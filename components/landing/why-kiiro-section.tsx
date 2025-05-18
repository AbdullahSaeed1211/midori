"use client";

import { BlurFade } from "@/components/magicui/blur-fade";
import { Zap, Target, Filter, BarChart } from "lucide-react"; 
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ScrollIndicator } from "@/components/ui/scroll-indicator";

interface ReasonProps {
  icon: React.ElementType;
  title: string;
  description: string;
  highlight?: string;
  delay: number;
}

function Reason({ icon: Icon, title, description, highlight, delay }: ReasonProps) {
  return (
    <BlurFade delay={delay} className="flex flex-col p-6 border border-kiiro-yellow/10 rounded-xl bg-deep-gray/50 hover:bg-deep-gray transition-all duration-300">
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-kiiro-yellow/15 text-kiiro-yellow">
        <Icon className="h-7 w-7" />
      </div>
      <h3 className="mb-3 text-2xl font-bold text-off-white">{title}</h3>
      <p className="text-base text-off-white/80 font-normal">{description}</p>
      {highlight && (
        <p className="mt-4 text-lg font-medium text-kiiro-yellow">{highlight}</p>
      )}
    </BlurFade>
  );
}

export function WhyKiiroSection() {
  return (
    <section className="py-28 bg-charcoal-black text-off-white" id="why-us">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center text-center mb-20">
          <div className="px-4 py-1.5 rounded-full bg-kiiro-yellow/10 text-kiiro-yellow text-sm font-medium mb-6 border border-kiiro-yellow/20">Why Choose Us</div>
          
        <BlurFade inView>
            <h2 className="mb-6 text-center text-4xl font-bold md:text-6xl text-off-white">
              <span className="text-kiiro-yellow">Tangible Results</span>, Not Empty Promises
            </h2>
        </BlurFade>

          <p className="text-xl text-off-white/80 max-w-3xl mx-auto">
            Kiiro is a boutique digital studio focused on helping businesses achieve measurable growth through strategic design and development.
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-6 mb-16 md:grid-cols-2 lg:grid-cols-4">
          <Reason
            icon={Zap}
            title="7-Day Delivery"
            description="Most projects completed in just one week. No drawn-out timelines that delay your growth."
            highlight="83% faster than industry average"
            delay={0.1}
          />
          <Reason
            icon={Target}
            title="ROI-Focused"
            description="Every design decision and line of code is optimized for conversion and business impact."
            highlight="Average 197% ROI within 30 days"
            delay={0.2}
          />
          <Reason
            icon={BarChart}
            title="Data-Driven"
            description="We build with metrics in mind, continuously improving based on real user behavior."
            highlight="Built-in analytics for every project"
            delay={0.3}
          />
          <Reason
            icon={Filter}
            title="Personal Touch"
            description="Direct communication, transparent pricing, and dedicated attention from a boutique agency."
            highlight="One point of contact, always"
            delay={0.4}
          />
        </div>
        
        <div className="flex justify-center">
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
        
        {/* Scroll Indicator */}
        <div className="flex justify-center mt-20">
          <ScrollIndicator 
            text="See Our Work" 
            onClick={() => {
              const nextSection = document.getElementById('featured-work');
              if (nextSection) {
                nextSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          />
        </div>
      </div>
    </section>
  );
} 