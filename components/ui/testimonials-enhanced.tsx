"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface TestimonialData {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  result: string;
  avatar?: string;
}

const testimonials: TestimonialData[] = [
  {
    name: "Olivia",
    role: "Course Creator & Urban Gardening Expert",
    company: "Sproutly",
    content: "Kiiro transformed my gardening expertise into a complete conversion machine. I went from relying purely on cold DMs to having prospects find me through organic search. The scroll-based animations and trust-building design they created has given me the credibility I needed to convert cold traffic into $497 course sales.",
    rating: 5,
    result: "92% mobile conversion rate",
    avatar: "/avatars/user1.png"
  },
  {
    name: "Simply Mortgages Team",
    role: "Financial Services",
    company: "Simply Mortgage",
    content: "The sophisticated digital presence Kiiro created perfectly represents our premium mortgage consultancy services. The interactive tools and elegant design have significantly improved our lead quality and consultation bookings. Our high-net-worth clients now see the caliber of service they can expect before they even call.",
    rating: 5,
    result: "42% increase in qualified leads",
    avatar: "/avatars/user2.png"
  },
  {
    name: "Dubbby Team",
    role: "AI Startup Founders",
    company: "Dubbby",
    content: "Before launch, we needed a landing page that could sell our AI dubbing product before it was even built. Kiiro's strategic messaging and conversion-focused design helped us build real demand and validate our concept. The waitlist funnel they created generated genuine interest from our target creators.",
    rating: 5,
    result: "Successful pre-launch validation",
    avatar: "/avatars/user3.png"
  },
  {
    name: "BrainWise Team",
    role: "EdTech Platform",
    company: "BrainWise",
    content: "Kiiro built us an AI-powered learning platform that delivers personalized microlearning experiences. Their understanding of educational psychology combined with clean, intuitive design has resulted in significantly higher course completion rates than traditional learning methods.",
    rating: 5,
    result: "67% increase in course completion",
    avatar: "/avatars/user4.png"
  }
];

interface TestimonialCardProps {
  testimonial: TestimonialData;
  index: number;
}

function TestimonialCard({ testimonial, index }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-charcoal-gray/95 backdrop-blur-sm border border-white/10 rounded-xl p-6 h-full flex flex-col shadow-xl"
    >
      {/* Quote Icon */}
      <div className="mb-4">
        <Quote className="h-8 w-8 text-kiiro-yellow/60" />
      </div>

      {/* Rating */}
      <div className="flex items-center gap-1 mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-kiiro-yellow text-kiiro-yellow" />
        ))}
      </div>

      {/* Content */}
      <blockquote className="text-off-white/90 text-sm leading-relaxed mb-6 flex-grow">
        &quot;{testimonial.content}&quot;
      </blockquote>

      {/* Result Badge */}
      <div className="mb-4">
        <div className="inline-flex items-center px-3 py-1.5 bg-kiiro-yellow/10 text-kiiro-yellow text-xs font-medium rounded-full border border-kiiro-yellow/20">
          🎯 {testimonial.result}
        </div>
      </div>

      {/* Author Info */}
      <div className="flex items-center gap-3 mt-auto">
        <div className="w-10 h-10 rounded-full bg-kiiro-yellow/10 border border-kiiro-yellow/20 flex items-center justify-center overflow-hidden">
          {testimonial.avatar ? (
            <img 
              src={testimonial.avatar} 
              alt={testimonial.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-kiiro-yellow font-medium text-sm">
              {testimonial.name.charAt(0)}
            </span>
          )}
        </div>
        <div>
          <div className="text-off-white font-medium text-sm">{testimonial.name}</div>
          <div className="text-off-white/60 text-xs">{testimonial.role}</div>
          <div className="text-kiiro-yellow text-xs font-medium">{testimonial.company}</div>
        </div>
      </div>
    </motion.div>
  );
}

export function TestimonialsEnhanced() {
  return (
    <section className="py-24 bg-charcoal-black" id="testimonials">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-16 max-w-3xl mx-auto">
          <div className="px-4 py-1.5 rounded-full bg-kiiro-yellow/10 text-kiiro-yellow text-sm font-medium mb-6 border border-kiiro-yellow/20">
            Client Success Stories
          </div>
          <h2 className="text-4xl font-bold md:text-5xl mb-6 text-off-white">
            Real Results From Real Clients
          </h2>
          <p className="text-xl text-off-white/80 max-w-2xl">
            See how we&apos;ve helped businesses transform their online presence and drive measurable growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={`${testimonial.company}-${index}`}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-charcoal-gray/95 backdrop-blur-sm border border-white/10 rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-off-white mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-off-white/80 mb-6">
              Get your free homepage demo and see exactly how we&apos;d transform your website for better conversions.
            </p>
            <motion.a
              href="#booking"
              className="inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-charcoal-black bg-kiiro-yellow hover:bg-kiiro-yellow/90 rounded-lg transition-colors duration-300 shadow-lg shadow-kiiro-yellow/25 hover:shadow-kiiro-yellow/40"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Get Your Free Demo
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
} 