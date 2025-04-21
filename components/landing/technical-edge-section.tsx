"use client";

import { cn } from "@/lib/utils";
import { BlurFade } from "@/components/magicui/blur-fade";
import { TextAnimate } from "@/components/magicui/text-animate";
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
    <BlurFade delay={delay} className="flex flex-col items-center text-center">
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-midori/10 text-midori">
        <Icon className="h-8 w-8" />
      </div>
      <h3 className="mb-2 text-2xl font-bold text-white">{title}</h3>
      <p className="text-lg text-gray-300">{description}</p>
    </BlurFade>
  );
}

export function TechnicalEdgeSection() {
  return (
    <section className="py-24 bg-code-black text-white" id="tech-edge">
      <div className="container px-4 mx-auto">
        <BlurFade>
          <TextAnimate
            as="h2"
            className="mb-16 text-center text-5xl font-bold md:text-6xl"
            animation="blurInUp"
          >
            Built for Performance
          </TextAnimate>
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