"use client";

import { cn } from "@/lib/utils";
import { BlurFade } from "../magicui/blur-fade";
import { TextAnimate } from "../magicui/text-animate";

interface ComparisonItem {
  metric: string;
  industry: string;
  midori: string;
}

interface ComparisonTableProps {
  className?: string;
  items: ComparisonItem[];
}

export function ComparisonTable({ className, items }: ComparisonTableProps) {
  return (
    <BlurFade className={cn("w-full", className)} delay={0.1}>
      <div className="rounded-lg border border-midori/10 bg-white/5 backdrop-blur-sm">
        <div className="grid grid-cols-3 gap-4 p-6 text-xl font-semibold border-b border-midori/10 md:p-8 md:text-2xl">
          <div className="text-gray-600 dark:text-gray-400">Metric</div>
          <div className="text-gray-600 dark:text-gray-400">Industry Average</div>
          <div className="text-midori dark:text-midori-300 font-bold">MidoriLabs Guarantee</div>
        </div>
        
        <div className="divide-y divide-midori/10">
          {items.map((item, index) => (
            <div key={index} className="grid grid-cols-3 gap-4 p-6 text-lg md:p-8 md:text-xl">
              <div className="font-medium text-gray-900 dark:text-white">{item.metric}</div>
              <div className="text-gray-600 dark:text-gray-400">{item.industry}</div>
              <TextAnimate 
                by="character" 
                animation="blurIn" 
                delay={0.2 + index * 0.1} 
                className="font-extrabold text-midori dark:text-midori-300"
              >
                {item.midori}
              </TextAnimate>
            </div>
          ))}
        </div>
      </div>
    </BlurFade>
  );
} 