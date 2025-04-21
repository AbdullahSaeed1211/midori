"use client";

import { TextAnimate } from "@/components/magicui/text-animate";
import { BlurFade } from "@/components/magicui/blur-fade";
import { Marquee } from "@/components/magicui/marquee";
import { cn } from "@/lib/utils";

const offerings = [
  "Landing Pages",
  "UI/UX Design",
  "SaaS Development",
  "Brand Strategy",
  "Web Applications",
  "AI Integration",
  "Performance Optimization",
  "Headless CMS Builds",
  "E-commerce Platforms",
  "Interaction Design",
  "Conversion Rate Optimization",
  "Technical Consulting",
];

export function OfferingsSection() {
  return (
    <BlurFade delay={0.1} inView>
      <section className="py-24 bg-code-black text-white overflow-hidden">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8 items-center">
            {/* Left Column: Title & Description */}
            <div className="text-center md:text-left">
              <h2 className="text-4xl font-bold md:text-5xl mb-4">
                 <TextAnimate 
                   animation="blurInUp"
                  >
                   The Full Stack.
                 </TextAnimate>
              </h2>
              <p className="text-lg text-gray-400 font-light leading-relaxed max-w-md mx-auto md:mx-0">
                From initial strategy to final deployment, we handle every layer of your digital product with expert precision.
              </p>
            </div>

            {/* Right Column: Single Vertical Marquee Offerings List */}
            <div className="relative h-[300px] md:h-[400px] overflow-hidden">
              <Marquee vertical pauseOnHover className="[--duration:40s] [--gap:0.5rem]">
                {offerings.map((item, index) => {
                  const isHighlighted = item === "AI Integration";
                  return (
                    <span 
                      key={`offering-${index}`}
                      className={cn(
                        "block py-1 text-2xl md:text-3xl lg:text-4xl font-light transition-colors duration-300 whitespace-nowrap text-center md:text-left",
                        isHighlighted ? "text-midori font-medium" : "text-gray-500 hover:text-white"
                      )}
                    >
                      {item}
                    </span>
                  );
                })}
              </Marquee>
              <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-code-black to-transparent"></div>
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-code-black to-transparent"></div>
            </div>
          </div>
        </div>
      </section>
    </BlurFade>
  );
}

// Removed the note about needing external CSS keyframes/animations 