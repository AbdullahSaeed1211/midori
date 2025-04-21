"use client";

import { BlurFade } from "@/components/magicui/blur-fade";
import { TextAnimate } from "@/components/magicui/text-animate";
import { Zap, Target, Filter } from "lucide-react"; // Example icons

interface ReasonProps {
  icon: React.ElementType;
  title: string;
  description: string;
  delay: number;
}

function Reason({ icon: Icon, title, description, delay }: ReasonProps) {
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

export function WhyMidoriLabsSection() {
  return (
    <section className="py-24 bg-code-black text-white" id="why-us">
      <div className="container px-4 mx-auto">
        <BlurFade>
          <TextAnimate
            as="h2"
            className="mb-16 text-center text-5xl font-bold md:text-6xl"
            animation="blurInUp"
          >
            Why MidoriLabs?
          </TextAnimate>
        </BlurFade>

        <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-3">
          <Reason
            icon={Zap}
            title="Fast Turnaround"
            description="Most projects delivered in days, not weeks."
            delay={0.1}
          />
          <Reason
            icon={Target}
            title="Business-First"
            description="Every build is focused on your goals and ROI."
            delay={0.2}
          />
          <Reason
            icon={Filter}
            title="No-Nonsense"
            description="Clear process, transparent pricing, no jargon."
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
} 