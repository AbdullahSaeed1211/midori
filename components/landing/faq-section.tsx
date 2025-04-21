"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { TextAnimate } from "@/components/magicui/text-animate";
import { BlurFade } from "@/components/magicui/blur-fade";
import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';
import { cn } from "@/lib/utils";

const faqData = [
  {
    id: "item-1",
    question: "Who is this service best for?",
    answer:
      "Our services are ideal for startups, SaaS companies, and established businesses looking to elevate their online presence, improve conversion rates, and build scalable web solutions with a focus on performance and design excellence.",
  },
  {
    id: "item-2",
    question: "What does \'Project Sprint\' vs. \'Growth Retainer\' mean?",
    answer:
      "A Project Sprint is best for well-defined, one-off projects with a fixed scope and timeline (e.g., landing page, MVP). A Growth Retainer provides ongoing, flexible capacity for continuous development, optimization, and strategic support.",
  },
  {
    id: "item-3",
    question: "How fast will my project or requests be fulfilled?",
    answer:
      "Project Sprints typically run for 2-4 weeks. For retainers, we prioritize rapid iteration, often delivering updates or completing tasks within 2-3 business days, depending on complexity.",
  },
  {
    id: "item-4",
    question: "Can I pause or cancel my Growth Retainer subscription?",
    answer:
      "Yes, our Growth Retainer is designed for flexibility. You can pause or cancel your subscription at any time, ensuring you only pay for the value you receive.",
  },
   {
    id: "item-5",
    question: "What technologies do you specialize in?",
    answer:
      "We specialize in modern web technologies including Next.js, React, TypeScript, Node.js, Tailwind CSS, and various headless CMS and backend solutions, focusing on building high-performance, scalable applications.",
  },
];

export function FaqSection() {
  const [openItem, setOpenItem] = useState<string | null>(faqData[0].id);

  return (
    <BlurFade delay={0.1} inView>
      <section className="py-24 bg-charcoal-black text-off-white" id="faq">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col items-center text-center mb-16 max-w-3xl mx-auto">
            <p className="mb-3 text-xs uppercase tracking-[0.25em] text-verdant-green font-semibold">FAQ</p>
            <h2 className="text-4xl font-bold md:text-5xl [text-shadow:_0_1px_2px_rgba(0,0,0,0.2)] mb-4 text-off-white">
              <TextAnimate animation="blurInUp">
                Questions? Answers.
              </TextAnimate>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion 
              type="single" 
              collapsible 
              value={openItem || ""} 
              onValueChange={setOpenItem}
              className="w-full space-y-4"
            >
              {faqData.map((item, index) => (
                <AccordionItem 
                  key={item.id} 
                  value={item.id} 
                  className="group border border-code-black-700 bg-deep-gray rounded-xl overflow-hidden transition-all hover:border-code-black-700/60 data-[state=open]:border-verdant-green/40"
                >
                  <AccordionTrigger className="flex w-full items-center justify-between px-4 sm:px-6 py-5 text-left text-base sm:text-lg font-medium text-off-white hover:no-underline">
                    <div className="flex items-center space-x-3 sm:space-x-4 flex-1 min-w-0">
                      <span className={cn(
                        "flex-shrink-0 flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full text-xs sm:text-sm font-semibold transition-colors",
                        openItem === item.id ? "bg-verdant-green text-charcoal-black" : "bg-code-black-700 text-off-white/70 group-hover:bg-gold group-hover:text-charcoal-black"
                      )}>
                        {index + 1}
                      </span>
                      <span className="flex-1 truncate group-hover:text-off-white/90 transition-colors">{item.question}</span>
                    </div>
                    <div className="ml-3 sm:ml-4 flex-shrink-0">
                      {openItem === item.id ? <Minus className="h-5 w-5 text-verdant-green" /> : <Plus className="h-5 w-5 text-off-white/70 group-hover:text-off-white" />}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 sm:px-6 pb-5 pt-0 text-base text-off-white/80 font-normal leading-relaxed data-[state=open]:animate-accordion-down">
                    <div className="pl-12 sm:pl-[44px]">
                      {item.answer}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </BlurFade>
  );
} 