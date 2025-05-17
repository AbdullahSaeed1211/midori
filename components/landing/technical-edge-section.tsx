"use client";

import { BlurFade } from "@/components/magicui/blur-fade";
import { Zap, Cpu, Layers } from "lucide-react"; // Icons for features

// Reusing the Reason component structure from WhyMidoriLabsSection
interface FeatureProps {
  icon: React.ElementType;
  title: string;
  description: string;
  delay: number;
}

function Feature({ icon: Icon, title, description, delay }: FeatureProps) {
  return (
    <BlurFade delay={delay} className="flex flex-col items-center text-center h-full">
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-kiiro-yellow/15 text-kiiro-yellow">
        <Icon className="h-8 w-8" />
      </div>
      <h3 className="mb-2 text-2xl font-bold text-off-white">{title}</h3>
      <p className="text-lg text-off-white/80 font-light">{description}</p>
    </BlurFade>
  );
}

export function TechnicalEdgeSection() {
  return (
    <section className="py-24 bg-charcoal-black text-off-white" id="tech-edge">
      <div className="container px-4 mx-auto">
        <BlurFade inView>
          <h2 className="mb-16 text-center text-5xl font-bold md:text-6xl text-off-white">
            Built for Performance
          </h2>
        </BlurFade>

        <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-3">
          <Feature
            icon={Zap}
            title="Top Web Vitals"
            description="Engineered for sub-second loads and elite Core Web Vitals scores."
            delay={0.1}
          />
          <Feature
            icon={Cpu}
            title="AI Integration"
            description="Leveraging modern AI APIs for smarter, more efficient web solutions."
            delay={0.2}
          />
          <Feature
            icon={Layers}
            title="Modern Tech Stack"
            description="Built with Next.js, TypeScript, and Tailwind CSS for robust, maintainable code."
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
}