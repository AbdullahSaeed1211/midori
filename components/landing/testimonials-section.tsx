"use client";

import { Marquee } from "@/components/magicui/marquee";
import { useState, useEffect } from "react";
import Image from "next/image";

const testimonials = [
  {
    name: "Olivia Wilde",
    title: "Founder, Sproutly",
    image: "/avatars/user1.png",
    quote: "Our mobile conversion rate was abysmal. Kiiro delivered a new design in just 5 days that not only looked incredible but boosted our mobile conversions from 8% to a staggering 92%. It&apos;s been a complete game-changer for our business.",
  },
  {
    name: "Kashif Siddiqui",
    title: "Simply Mortgages",
    image: "/avatars/user2.png",
    quote: "We needed to generate more qualified leads. The new landing page Kiiro built for us increased our lead capture by 42% in the first month alone. Their focus on conversion is second to none.",
  },
  {
    name: "BrainWise Team",
    title: "Ed-Tech Platform",
    image: "/avatars/user3.png",
    quote: "Our students were dropping off mid-course. Kiiro's redesigned user flow was so intuitive that we saw a 67% increase in course completions. They truly understand user psychology.",
  },
  {
    name: "Dubbby Team",
    title: "SaaS Founders",
    image: "/avatars/user4.png",
    quote: "As a pre-launch SaaS, validating our idea was crucial. The landing page Kiiro created was so effective that it secured our first 100 paid users before we even wrote a line of production code.",
  },
  {
    name: 'Alexandra Kim',
    title: 'Product Lead, Innovate Inc',
    quote: 'The redesign not only looks amazing but has dramatically improved our user experience metrics. Our bounce rate decreased by 40%!',
    image: '/avatars/user5.png'
  },
  {
    name: 'Robert Gonzalez',
    title: 'CTO, DataFlow',
    quote: 'The team provided technical solutions that were both elegant and scalable. They truly understand the balance of design and function.',
    image: '/avatars/user6.png'
  },
];

function TestimonialCard({ name, title, image, quote }: { name: string; title: string; image: string; quote: string; }) {
  return (
    <div className="relative flex h-full w-full flex-col overflow-hidden rounded-xl bg-charcoal-black p-6 md:p-4 border border-white/5 max-h-40">
      <div className="flex items-center gap-3 mb-4 md:mb-3">
        <Image 
          src={image} 
          alt={name} 
          width={40} 
          height={40} 
          className="rounded-full object-cover"
        />
        <div>
          <h4 className="font-semibold text-off-white text-sm">{name}</h4>
          <p className="text-xs text-off-white/70">{title}</p>
        </div>
      </div>
      <blockquote className="text-off-white/80 text-sm line-clamp-3 overflow-hidden">
        &ldquo;{quote}&rdquo;
      </blockquote>
    </div>
  );
}

export function TestimonialsSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="py-16 md:py-20 bg-charcoal-black text-off-white" id="client-wins">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-off-white">Real Results From Real Clients</h2>
          <p className="text-lg text-off-white/70 mt-2 max-w-2xl mx-auto">
            See how we&apos;ve helped businesses improve their website conversions.
          </p>
        </div>

        {mounted && (
          <div className="relative">
            <div className="hidden md:block">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-h-80 overflow-hidden">
                {[...Array(3)].map((_, i) => (
                  <Marquee key={i} pauseOnHover vertical className="[--duration:60s]" reverse={i % 2 === 1}>
                    {testimonials.slice(i * 2, (i + 1) * 2).map((testimonial) => (
                      <div key={testimonial.name} className="py-3">
                        <TestimonialCard {...testimonial} />
                      </div>
                    ))}
                  </Marquee>
                ))}
              </div>
            </div>
            
            <div className="md:hidden">
              <Marquee pauseOnHover className="[--duration:40s]">
                {testimonials.map((testimonial) => (
                  <div key={testimonial.name} className="w-[320px] mx-3">
                    <TestimonialCard {...testimonial} />
                  </div>
                ))}
              </Marquee>
            </div>
          </div>
        )}
      </div>
    </section>
  );
} 