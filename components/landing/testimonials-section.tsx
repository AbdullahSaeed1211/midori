"use client";

import { cn } from "@/lib/utils";
import { Star } from "lucide-react";
import Image from "next/image";
import { BlurFade } from "@/components/magicui/blur-fade";
import { TextAnimate } from "@/components/magicui/text-animate";
import { Marquee } from "@/components/magicui/marquee";

// Define the Testimonial type
interface Testimonial {
  name: string;
  title: string;
  quote: string;
  image: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "Alex Johnson",
    title: "CEO, Tech Innovators",
    quote: "MidoriLabs delivered beyond our expectations. The final product was sleek, fast, and perfectly aligned with our brand vision. Highly recommended!",
    image: "/avatars/user1.png",
    rating: 5,
  },
  {
    name: "Samantha Lee",
    title: "Marketing Director, Creative Solutions",
    quote: "Working with the MidoriLabs team was seamless. Their attention to detail and commitment to quality resulted in a website that significantly boosted our conversions.",
    image: "/avatars/user2.png",
    rating: 5,
  },
  {
    name: "David Chen",
    title: "Founder, Startup Hub",
    quote: "As a startup, we needed a high-impact landing page delivered quickly. MidoriLabs provided exactly that – exceptional design and performance.",
    image: "/avatars/user3.png",
    rating: 5,
  },
  {
    name: "Maria Garcia",
    title: "Product Manager, Enterprise Solutions",
    quote: "The technical expertise at MidoriLabs is impressive. They tackled complex requirements for our web app and delivered a robust, scalable solution.",
    image: "/avatars/user4.png",
    rating: 5,
  },
   {
    name: "Jordan Smith",
    title: "E-commerce Entrepreneur",
    quote: "Our new e-commerce site is not only beautiful but incredibly fast. The improved user experience has directly translated to increased sales.",
    image: "/avatars/user5.png",
    rating: 5,
  },
];

interface TestimonialCardProps {
  testimonial: Testimonial;
}

function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div
      className={cn(
        "relative z-20 flex h-full w-[350px] flex-col justify-between overflow-hidden rounded-lg border p-6 shadow-lg",
        "bg-code-black-950 text-code-black-50 border-code-black-700"
      )}
    >
      <div>
        <div className="mb-4 flex w-full items-center justify-between">
          <div className="flex items-center space-x-4">
            <Image
              className="size-10 rounded-full border object-cover"
              width={40}
              height={40}
              alt={testimonial.name}
              src={testimonial.image}
            />
            <div className="flex flex-col">
              <figcaption className="text-sm font-semibold text-code-black-50">
                {testimonial.name}
              </figcaption>
              <p className="text-xs font-medium text-code-black-400">{testimonial.title}</p>
            </div>
          </div>
          <div className="flex items-center">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star key={i} className="mr-0.5 h-4 w-4 fill-midori-300 text-midori-300" />
            ))}
            {[...Array(5 - testimonial.rating)].map((_, i) => (
              <Star key={i + testimonial.rating} className="mr-0.5 h-4 w-4 fill-code-black-800 text-code-black-400" />
            ))}
          </div>
        </div>
        <blockquote className="mt-4 text-base font-light italic leading-relaxed text-code-black-400">
          &ldquo;{testimonial.quote}&rdquo;
        </blockquote>
      </div>
    </div>
  );
}

export function TestimonialsSection() {
  return (
     <BlurFade delay={0.1} inView>
      <section className="py-24 bg-code-black-950 text-code-black-50 overflow-hidden" id="client-wins">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col items-center text-center mb-16 max-w-3xl mx-auto">
            <p className="mb-3 text-xs uppercase tracking-[0.25em] text-midori-300 font-semibold">Client Wins</p>
            <h2 className="text-4xl font-bold md:text-5xl [text-shadow:_0_1px_2px_rgba(0,0,0,0.2)] mb-4">
              <TextAnimate animation="blurInUp">
                Trusted by Innovators
              </TextAnimate>
            </h2>
          </div>
          
          <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg">
            <Marquee pauseOnHover className="[--duration:60s] [--gap:1rem]">
              {testimonials.map((testimonial) => (
                <TestimonialCard key={testimonial.name} testimonial={testimonial} />
              ))}
            </Marquee>
            
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-code-black-950"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-code-black-950"></div>
          </div>
        </div>
      </section>
    </BlurFade>
  );
} 