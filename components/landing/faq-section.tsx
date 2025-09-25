"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { TextAnimate } from "@/components/magicui/text-animate";
import { BlurFade } from "@/components/magicui/blur-fade";
import { cn } from "@/lib/utils";
import { useState } from 'react';

const faqData = [
  {
    id: "item-1",
    question: "What if I don't like the design or it doesn't match my vision?",
    answer:
      "We start with a detailed discovery call to understand your vision, brand, and goals. During the design phase, we include revisions to ensure alignment with your expectations. Our collaborative approach means we work closely with you throughout the process to deliver something you're genuinely excited about.",
  },
  {
    id: "item-2",
    question: "How do I know this will actually increase my conversions?",
    answer:
      "We implement proven conversion optimization techniques and user psychology principles that have worked across industries. We set up proper analytics tracking so you can measure the impact. While results vary by business, our focus on conversion-first design typically leads to meaningful improvements in user engagement and lead generation.",
  },
  {
    id: "item-3",
    question: "What if you disappear after taking my payment?",
    answer:
      "We understand this concern in the web industry. We maintain transparent communication throughout the project with regular updates. Our process includes milestone check-ins, and we provide post-launch support to ensure everything runs smoothly. You'll have direct access to our team throughout the engagement.",
  },
  {
    id: "item-4",
    question: "Why should I choose you over a big agency or freelancer?",
    answer:
      "Big agencies charge $15K+ and take 6 months for what we deliver in 2-4 weeks. Freelancers are cheaper but often disappear or lack the full skill set. We're the sweet spot: agency-quality work with freelancer-level attention and startup speed. Plus, you work directly with the founders, not junior staff.",
  },
  {
    id: "item-5",
    question: "My business is unique/complex - can you handle it?",
    answer:
      "We've worked with everything from mortgage brokers to AI startups to document clearing services. Every business thinks they're unique, but conversion principles are universal. We adapt our proven framework to your specific industry, audience, and goals. If we genuinely can't help, we'll tell you upfront and refer you to someone who can.",
  },
  {
    id: "item-6",
    question: "What if I need changes after the website is live?",
    answer:
      "All projects include 30-60 days of post-launch support for bug fixes and minor adjustments. For ongoing changes, we offer retainer packages starting at $500/month, or you can book individual updates as needed. We also provide training so your team can handle basic content updates independently.",
  },
  {
    id: "item-7",
    question: "How fast will my project be completed?",
    answer:
      "One-off projects: 7-14 days from design approval to launch. Retainer projects: 14-21 days. We work in focused sprints, not dragged-out timelines. You'll see progress daily, not monthly. Rush delivery available for an additional 25% if you need it faster.",
  },
  {
    id: "item-8",
    question: "Do you provide hosting and ongoing maintenance?",
    answer:
      "We can handle hosting setup and recommend the best solutions for your needs, but we don't lock you into our hosting. For maintenance, we offer optional retainer packages or you can handle it yourself. We build sites that are easy to maintain and provide full documentation and training.",
  },
  {
    id: "item-9",
    question: "I'm just starting my business - do I really need a professional website?",
    answer:
      "Absolutely. Your website is often the first impression potential customers have of your business. Without it, you're losing credibility before you even get a chance to sell. Course creators especially need a professional hub to convert social media followers into paying customers. A basic website pays for itself with just 1-2 customers.",
  },
];

export function FaqSection() {
  const [openItem, setOpenItem] = useState<string | null>(faqData[0].id);
  const [showAll, setShowAll] = useState(false);

  const visibleFaqs = showAll ? faqData : faqData.slice(0, 4);

  return (
    <BlurFade delay={0.1} inView>
      <section className="py-24 bg-charcoal-black text-off-white" id="faq">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col items-center text-center mb-16 max-w-3xl mx-auto">
            <p className="mb-3 text-xs uppercase tracking-[0.25em] text-kiiro-yellow font-semibold">FAQ</p>
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
              {visibleFaqs.map((item, index) => (
                <AccordionItem 
                  key={item.id} 
                  value={item.id} 
                  className="group border border-code-black-700 bg-deep-gray rounded-xl overflow-hidden transition-all hover:border-code-black-700/60 data-[state=open]:border-kiiro-yellow/40"
                >
                  <AccordionTrigger className="flex w-full items-center justify-between px-4 sm:px-6 py-5 text-left text-base sm:text-lg font-medium text-off-white hover:no-underline">
                    <div className="flex items-center space-x-3 sm:space-x-4 flex-1 min-w-0">
                      <span className={cn(
                        "flex-shrink-0 flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full text-xs sm:text-sm font-semibold transition-colors",
                        openItem === item.id ? "bg-kiiro-yellow text-charcoal-black" : "bg-code-black-700 text-off-white/70 group-hover:bg-gold group-hover:text-charcoal-black"
                      )}>
                        {index + 1}
                      </span>
                      <span className="flex-1 truncate group-hover:text-off-white/90 transition-colors">{item.question}</span>
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

            {/* View More/Less Button */}
            {faqData.length > 4 && (
              <div className="text-center mt-8">
                <button
                  onClick={() => setShowAll(!showAll)}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-kiiro-yellow/10 hover:bg-kiiro-yellow/20 border border-kiiro-yellow/30 hover:border-kiiro-yellow/50 rounded-lg text-kiiro-yellow font-medium transition-all duration-200 hover:scale-105"
                >
                  {showAll ? (
                    <>
                      View Less
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                      </svg>
                    </>
                  ) : (
                    <>
                      View {faqData.length - 4} More FAQs
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </>
                  )}
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </BlurFade>
  );
} 