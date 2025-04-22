"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Marquee } from "@/components/magicui/marquee";
import { useState, useEffect } from "react";

// Simple Badge component
function Badge({ 
  children, 
  className,
}: { 
  children: React.ReactNode; 
  className?: string;
  variant?: string;
}) {
  return (
    <div className={`inline-flex items-center rounded-full ${className}`}>
      {children}
    </div>
  );
}

// Define the Testimonial type
type Testimonial = {
  id: number;
  name: string;
  location: string;
  quote: string;
  initials: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    location: 'CEO, TechVenture',
    quote: 'Working with Midori Digital has completely transformed our online presence. Our conversion rates have increased by 60% since the redesign!',
    initials: 'SJ',
    image: '/avatars/user1.png'
  },
  {
    id: 2,
    name: 'Michael Chen',
    location: 'Founder, GrowthLabs',
    quote: 'The team at Midori Digital delivered our project on time and on budget. Their strategic approach to design and development was impressive.',
    initials: 'MC',
    image: '/avatars/user2.png'
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    location: 'Marketing Director, Eleva',
    quote: 'Their ability to translate our vision into a functional, beautiful website exceeded our expectations. Highly recommended!',
    initials: 'ER',
    image: '/avatars/user3.png'
  },
  {
    id: 4,
    name: 'David Park',
    location: 'COO, NextLevel Solutions',
    quote: 'Midori Digital helped us clarify our message and create a website that truly represents our brand values. A pleasure to work with.',
    initials: 'DP',
    image: '/avatars/user4.png'
  },
  {
    id: 5,
    name: 'Alexandra Kim',
    location: 'Product Lead, Innovate Inc',
    quote: 'The redesign not only looks amazing but has dramatically improved our user experience metrics. Our bounce rate decreased by 40%!',
    initials: 'AK',
    image: '/avatars/user5.png'
  },
  {
    id: 6,
    name: 'Robert Gonzalez',
    location: 'CTO, DataFlow',
    quote: 'Midori\'s team provided technical solutions that were both elegant and scalable. They truly understand the balance of design and function.',
    initials: 'RG',
    image: '/avatars/user6.png'
  },
  {
    id: 7,
    name: 'Jennifer Tran',
    location: 'Brand Director, Lumina',
    quote: 'From strategy to execution, Midori Digital delivered exceptional quality at every stage. Our new site has received incredible feedback.',
    initials: 'JT',
    image: '/avatars/user7.png'
  },
  {
    id: 8,
    name: 'Thomas Schmidt',
    location: 'CEO, Apex Ventures',
    quote: 'We\'ve seen a 75% increase in qualified leads since launching our new website. Midori Digital\'s strategic approach has paid off tremendously.',
    initials: 'TS',
    image: '/avatars/user8.png'
  },
];

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="flex flex-col space-y-4 rounded-xl bg-charcoal-black/70 p-6 shadow-lg border border-verdant-green/10">
      <div className="flex items-center space-x-3">
        <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-verdant-green/10 border border-verdant-green/20">
          <img 
            src={testimonial.image} 
            alt={testimonial.name}
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <h4 className="text-lg font-semibold text-off-white">{testimonial.name}</h4>
          <p className="text-sm text-off-white/70">{testimonial.location}</p>
        </div>
      </div>
      <p className="text-off-white/80">&quot;{testimonial.quote}&quot;</p>
    </div>
  );
}

export function TestimonialsSection() {
  const [mounted, setMounted] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="py-16 md:py-24 bg-charcoal-black text-off-white relative overflow-hidden" id="client-wins">
      <motion.div 
        className="absolute right-0 top-0 w-1/3 h-1/2 bg-verdant-green/5 rounded-bl-full blur-3xl -z-10"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1 }}
      />
      
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div 
          className="mx-auto max-w-3xl text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          <Badge className="px-4 py-1 text-xs border-verdant-green/20 bg-verdant-green/5 mb-4 inline-flex items-center text-verdant-green">
            Client Wins
          </Badge>
          <h2 className="text-4xl font-bold tracking-tight mb-4 text-off-white">
            Trusted by Innovators
          </h2>
          <p className="text-off-white/80 text-lg max-w-2xl mx-auto">
            Read about how our services have helped clients achieve remarkable growth and digital success.
          </p>
        </motion.div>
        
        {/* Mobile View - Horizontal Marquee */}
        {mounted && (
          <div className="md:hidden">
            <Marquee className="py-4" pauseOnHover repeat={2}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="px-4 min-w-[300px] max-w-[300px]">
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </Marquee>
          </div>
        )}
        
        {/* Desktop View - Three Vertical Columns */}
        <div className="hidden md:block">
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {/* First column - vertical marquee */}
            <div className="h-[550px] lg:h-[600px] overflow-hidden">
              {mounted && (
                <Marquee
                  className="py-4"
                  pauseOnHover
                  repeat={2}
                  vertical
                >
                  {testimonials.slice(0, 3).map((testimonial, index) => (
                    <div key={index} className="py-4 px-2">
                      <TestimonialCard testimonial={testimonial} />
                    </div>
                  ))}
                </Marquee>
              )}
            </div>

            {/* Second column - vertical marquee faster speed */}
            <div className="h-[550px] lg:h-[600px] overflow-hidden mt-12">
              {mounted && (
                <Marquee
                  className="py-4 [--duration:65s]"
                  pauseOnHover
                  repeat={2}
                  vertical
                >
                  {testimonials.slice(2, 5).map((testimonial, index) => (
                    <div key={index} className="py-4 px-2">
                      <TestimonialCard testimonial={testimonial} />
                    </div>
                  ))}
                </Marquee>
              )}
            </div>

            {/* Third column - vertical marquee in reverse direction */}
            <div className="h-[550px] lg:h-[600px] overflow-hidden">
              {mounted && (
                <Marquee
                  className="py-4 [--duration:55s]"
                  pauseOnHover
                  repeat={2}
                  vertical
                  reverse
                >
                  {testimonials.slice(3, 6).map((testimonial, index) => (
                    <div key={index} className="py-4 px-2">
                      <TestimonialCard testimonial={testimonial} />
                    </div>
                  ))}
                </Marquee>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 