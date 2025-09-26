"use client";

import { useRef, useState } from "react";
import { TimelineContent } from "@/components/ui/timeline-animation";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Star, CheckCircle, Award, TrendingUp, Users, Target, Zap, Video } from "lucide-react";
import Link from "next/link";
import { Marquee } from "@/components/magicui/marquee";

interface TestimonialData {
  id: number;
  name: string;
  title: string;
  company?: string;
  quote: string;
  fullQuote: string;
  bgColor: string;
  textColor: string;
  titleColor?: string;
  starColor?: string;
  rating?: number;
  verified?: boolean;
  logo?: string;
  category?: string;
  avatar?: string;
  avatarBg?: string;
  useVideoIcon?: boolean;
  caseStudyUrl?: string;
}

const testimonials: TestimonialData[] = [
  {
    id: 0,
    name: "Guidance Welfare Foundation",
    title: "Non-Profit Organization",
    company: "Guidance Welfare",
    category: "Non-Profit",
    quote: "Kiiro built our complete LMS platform with 100% uptime, priority support, course creation, attendance management, and advanced testing. It eliminated our administrative overload and transformed how we serve our learners.",
    fullQuote: "As a non-profit organization serving thousands of learners across India, we needed a comprehensive Learning Management System that could handle our complex educational requirements. Kiiro delivered an enterprise-grade LMS platform from the ground up, featuring 100% uptime reliability, priority support, intuitive course creation tools, automated attendance management, and a sophisticated testing and scoring platform. This comprehensive solution has dramatically reduced our administrative overhead, allowing our educators to focus on teaching rather than paperwork. The platform now serves over 100 active learners with seamless course delivery, real-time progress tracking, and automated assessment capabilities. Our donation rates have increased by 35% since launching the new platform, and learner engagement has improved significantly across all our educational programs.",
    bgColor: "bg-charcoal-black",
    textColor: "text-off-white",
    rating: 5,
    verified: true,
    logo: "/projects/guidancewelfare.webp",
    avatar: "/client-pfp/guidance.jpg",
    avatarBg: "bg-gray-100",
    caseStudyUrl: "/case-studies/guidance-welfare"
  },
  {
    id: 1,
    name: "Nishoo Mittal",
    title: "Financial Advisor & MDRT Member",
    company: "Nishoo Mittal Financials",
    category: "Financial Services",
    quote: "The website redesign transformed our digital presence, helping us connect with 1000+ families and manage ₹50+ Cr in AUM while showcasing our MDRT credentials.",
    fullQuote: "As a leading financial advisor and MDRT member serving families across India, I needed a website that could effectively communicate our comprehensive financial planning services. Kiiro delivered a professional platform that beautifully showcases our expertise in life insurance, wealth creation, and family protection. The redesign has been instrumental in our growth, helping us reach 1000+ happy families while managing ₹50+ Cr in Assets Under Management. Our online presence now perfectly reflects our commitment to providing tailored financial security solutions with MDRT-level excellence.",
    bgColor: "bg-charcoal-black/50",
    textColor: "text-off-white",
    rating: 5,
    verified: true,
    logo: "/projects/mittal.webp",
    avatar: "/client-pfp/nishoomittalLogo.png",
    avatarBg: "bg-white",
    caseStudyUrl: "/case-studies/nishoo-mittal"
  },
  {
    id: 2,
    name: "Kashif Siddiqui",
    title: "Co-Founder, Simply Mortgages",
    company: "Simply Mortgages",
    category: "Financial Services",
    quote: "The new landing page increased our lead capture by 42% in the first month alone. Their focus on conversion is second to none.",
    fullQuote: "Kiiro transformed our lead generation completely. We were struggling with qualified leads, but their conversion-focused landing page increased our lead capture by 42% in the first month alone. The team's understanding of conversion optimization and user behavior is exceptional. They didn't just create a pretty website - they created a lead generation machine that continues to perform month after month.",
    bgColor: "bg-gradient-to-br from-kiiro-yellow via-kiiro-yellow to-kiiro-yellow/90",
    textColor: "text-charcoal-black",
    titleColor: "text-gray-700",
    starColor: "kiiro-yellow",
    rating: 5,
    verified: true,
    logo: "/projects/simply.webp",
    avatar: "/client-pfp/simplyLogo.png",
    avatarBg: "bg-white",
    caseStudyUrl: "/case-studies/simply-mortgage"
  },
  {
    id: 3,
    name: "BrainWise Team",
    title: "AI-Powered Brain Health Platform",
    company: "BrainWise.pro",
    category: "HealthTech",
    quote: "Kiiro built our research-validated medical AI platform with 95% accuracy in stroke prediction and brain tumor detection, plus 15+ cognitive assessment tools for clinical-grade brain health monitoring.",
    fullQuote: "BrainWise.pro needed a sophisticated platform that could handle clinical-grade medical AI processing while maintaining the highest standards of medical ethics and data security. Kiiro delivered an enterprise-grade solution featuring 3 production AI models with 94-95% accuracy for stroke prediction, brain tumor detection, and Alzheimer's disease assessment. The platform includes 15+ validated cognitive assessment tools covering memory, attention, pattern recognition, and verbal fluency, all with comprehensive performance tracking. Advanced features include real-time MRI scan analysis, distributed AI architecture with Hugging Face Spaces, and 60-75% model size optimization through quantization. The platform achieves 89-91% agreement rates with radiologist assessments, approaching clinical standards. This research-validated medical AI platform serves real patients while maintaining HIPAA-compliant data security and ethical AI practices.",
    bgColor: "bg-charcoal-black",
    textColor: "text-off-white",
    rating: 5,
    verified: true,
    logo: "/projects/brainwise.webp",
    avatar: "/client-pfp/brainwise.png",
    avatarBg: "bg-black",
    caseStudyUrl: "/case-studies/brain-wise"
  },
  {
    id: 4,
    name: "Dubbby Team",
    title: "SaaS Founders",
    company: "Dubbby",
    category: "SaaS",
    quote: "The landing page was so effective that it secured our first 100 paid users before we even wrote production code.",
    fullQuote: "As SaaS founders, we knew validation was crucial before full development. Kiiro created a landing page that was so effective, it secured our first 100 paid users before we even wrote production code. The conversion rate was incredible - 3.2% compared to industry average of 1.2%. Their understanding of SaaS user psychology and conversion optimization gave us the validation we needed to move forward with confidence.",
    bgColor: "bg-charcoal-black",
    textColor: "text-off-white",
    rating: 5,
    verified: true,
    logo: "/projects/dubbby.webp",
    useVideoIcon: true,
    caseStudyUrl: "/case-studies/dubbby"
  },
  {
    id: 5,
    name: "Olivia Wilde",
    title: "Founder, Sproutly",
    company: "Sproutly",
    category: "E-commerce",
    quote: "Kiiro delivered a new design in just 5 days that boosted our mobile conversions from 8% to a staggering 92%. It's been a complete game-changer for our business.",
    fullQuote: "Working with Kiiro was a game-changer for our startup. Their team delivered a completely redesigned mobile experience in just 5 days that not only looked incredible but actually boosted our mobile conversions from 8% to a staggering 92%. The attention to detail and understanding of user psychology is remarkable. They've helped us scale our business significantly and we're seeing results we never thought possible.",
    bgColor: "bg-charcoal-black/50",
    textColor: "text-off-white",
    rating: 5,
    verified: true,
    logo: "/projects/sproutly.webp",
    avatar: "/client-pfp/sproutly.webp",
    caseStudyUrl: "/case-studies/sproutly"
  },
  {
    id: 6,
    name: "Lotus Pro Services",
    title: "Document Services Company",
    company: "Lotus Pro Services",
    category: "Business Services",
    quote: "The website redesign completely transformed our online presence. Our lead generation increased by 85% and client inquiries doubled within the first month.",
    fullQuote: "Lotus Pro Services was a traditional document services company struggling with online presence. Kiiro completely transformed our online presence with a modern, professional website that speaks to our expertise. The lead generation increased by 85% and client inquiries doubled within the first month. Our conversion from inquiry to project has improved by 40%, and we're now seen as the premium choice in our market. The ROI has been exceptional.",
    bgColor: "bg-charcoal-black/50",
    textColor: "text-off-white",
    rating: 5,
    verified: true,
    logo: "/projects/lotus.webp",
    avatar: "/client-pfp/lotuslogo.png",
    avatarBg: "bg-white",
    caseStudyUrl: "/case-studies/lotus-pro-services"
  }
];

export function TestimonialsSection() {
  const testimonialRef = useRef<HTMLDivElement>(null);
  const [selectedTestimonial, setSelectedTestimonial] = useState<TestimonialData | null>(null);
  const [rippleEffect, setRippleEffect] = useState<{ x: number; y: number; id: number } | null>(null);

  const handleCardClick = (testimonial: TestimonialData, event: React.MouseEvent | React.KeyboardEvent) => {
    // Only create ripple effect for mouse events
    if ('clientX' in event) {
      const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      setRippleEffect({ x, y, id: testimonial.id });

      // Remove ripple after animation
      setTimeout(() => setRippleEffect(null), 600);
    }

    setSelectedTestimonial(testimonial);
  };

  // Show all testimonials (no filtering)
  const filteredTestimonials = testimonials;

  const revealVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.3,
        duration: 0.5,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      y: -20,
      opacity: 0,
    },
  };

  // Mobile Testimonial Card Component for Marquee
  const MobileTestimonialCard = ({ testimonial }: { testimonial: TestimonialData }) => (
    <div
      className={`flex-shrink-0 w-72 mx-2 ${testimonial.bgColor} rounded-xl border border-off-white/10 p-4 hover:scale-[1.02] transition-all duration-300 cursor-pointer group`}
      onClick={(e) => handleCardClick(testimonial, e)}
      role="button"
      tabIndex={0}
      aria-label={`Read full testimonial from ${testimonial.name} at ${testimonial.company || testimonial.title}`}
      onKeyDown={(e: React.KeyboardEvent) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleCardClick(testimonial, e);
        }
      }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.04)_1px,transparent_0)] bg-[size:16px_16px] opacity-60 rounded-xl"></div>

      {/* Rating and Verification */}
      <div className="flex items-center justify-between mb-3 relative z-10">
        <div className="flex items-center gap-1">
          {[...Array(testimonial.rating || 5)].map((_, i) => (
            <Star key={i} className={`w-3 h-3 ${testimonial.starColor ? `fill-${testimonial.starColor.replace('text-', '')} ${testimonial.starColor}` : 'fill-kiiro-yellow text-kiiro-yellow'}`} />
          ))}
        </div>
        {testimonial.verified && (
          <div className="flex items-center gap-1 text-xs text-green-400">
            <CheckCircle className="w-3 h-3" />
            <span>Verified</span>
          </div>
        )}
      </div>

      {/* Quote */}
      <blockquote className={`${testimonial.textColor}/80 text-sm line-clamp-3 mb-3 relative z-10 leading-relaxed`}>
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>

      {/* Author Info */}
      <div className="relative z-10 mt-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className={`w-8 h-8 rounded-full ${testimonial.useVideoIcon ? 'bg-gradient-to-br from-blue-500 to-purple-600' : (testimonial.avatarBg || (testimonial.bgColor === 'bg-gradient-to-br from-kiiro-yellow via-kiiro-yellow to-kiiro-yellow/90' ? 'bg-charcoal-black/20' : 'bg-off-white/10'))} flex items-center justify-center border border-off-white/20 overflow-hidden`}>
              {testimonial.useVideoIcon ? (
                <Video className="w-4 h-4 text-white" />
              ) : testimonial.avatar ? (
                <img
                  src={testimonial.avatar}
                  alt={`${testimonial.name} avatar`}
                  className={`${testimonial.avatar.includes('nishoomittalLogo') ? 'w-5 h-5' : 'w-full h-full'} object-contain rounded-full`}
                  loading="lazy"
                />
              ) : (
                <span className={`text-xs font-bold ${testimonial.textColor}`}>
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </span>
              )}
            </div>
            <div>
              <h4 className={`font-semibold text-xs ${testimonial.textColor}`}>{testimonial.name}</h4>
              <p className={`${testimonial.titleColor || testimonial.textColor}/60 text-xs`}>{testimonial.title}</p>
            </div>
          </div>
          {testimonial.logo && (
            <div className="flex-shrink-0">
              <div className={`w-6 h-6 rounded-md ${testimonial.bgColor === 'bg-gradient-to-br from-kiiro-yellow via-kiiro-yellow to-kiiro-yellow/90' ? 'bg-charcoal-black/30' : 'bg-off-white/10'} flex items-center justify-center border border-off-white/20 overflow-hidden`}>
                <img
                  src={testimonial.logo}
                  alt={`${testimonial.company} logo`}
                  className="w-4 h-4 object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Hover Effect Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-kiiro-yellow/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
    </div>
  );

  return (
    <section className="relative py-16 md:py-20 bg-charcoal-black text-off-white overflow-hidden" id="client-wins" aria-labelledby="testimonials-heading">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.03)_1px,transparent_0)] bg-[size:40px_40px] opacity-30"></div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10" ref={testimonialRef}>
        <div className="text-center mb-12">
          <TimelineContent
            as="h2"
            id="testimonials-heading"
            className="text-3xl md:text-4xl font-bold text-off-white mb-4"
            animationNum={0}
            customVariants={revealVariants}
            timelineRef={testimonialRef}
            viewport={{ once: true }}
          >
            Real Results From <span className="text-kiiro-yellow">Real Clients</span>
          </TimelineContent>
          <TimelineContent
            as="p"
            className="text-lg text-off-white/70 max-w-2xl mx-auto"
            animationNum={1}
            customVariants={revealVariants}
            timelineRef={testimonialRef}
            viewport={{ once: true }}
          >
            See how we&apos;ve helped businesses improve their website conversions and achieve measurable results.
          </TimelineContent>
        </div>

        {/* Trust Indicators */}
        <TimelineContent
          animationNum={2}
          customVariants={revealVariants}
          timelineRef={testimonialRef}
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-3 mt-6 sm:mt-8 mb-4 px-4 sm:flex sm:flex-wrap sm:justify-center sm:items-center sm:gap-8"
        >
          <div className="flex items-center justify-center gap-2 text-off-white/80">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-kiiro-yellow text-kiiro-yellow" />
              ))}
            </div>
            <span className="text-sm font-medium">5.0 Average Rating</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-off-white/80">
            <CheckCircle className="w-4 h-4 text-green-400" />
            <span className="text-sm font-medium">100% Verified Reviews</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-off-white/80">
            <div className="w-2 h-2 rounded-full bg-kiiro-yellow animate-pulse"></div>
            <span className="text-sm font-medium">15+ Projects Completed</span>
          </div>
        </TimelineContent>

        {/* Animated Statistics */}
        <TimelineContent
          animationNum={3}
          customVariants={revealVariants}
          timelineRef={testimonialRef}
          viewport={{ once: true }}
          className="mt-8 mb-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-kiiro-yellow/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="w-6 h-6 text-kiiro-yellow" />
              </div>
              <div className="text-2xl font-bold text-off-white mb-1">67%</div>
              <div className="text-sm text-off-white/70">Avg. Conversion Increase</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-kiiro-yellow/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Target className="w-6 h-6 text-kiiro-yellow" />
              </div>
              <div className="text-2xl font-bold text-off-white mb-1">92%</div>
              <div className="text-sm text-off-white/70">Max Mobile Conversion</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-kiiro-yellow/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Zap className="w-6 h-6 text-kiiro-yellow" />
              </div>
              <div className="text-2xl font-bold text-off-white mb-1">5 Days</div>
              <div className="text-sm text-off-white/70">Average Delivery Time</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-kiiro-yellow/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="w-6 h-6 text-kiiro-yellow" />
              </div>
              <div className="text-2xl font-bold text-off-white mb-1">500+</div>
              <div className="text-sm text-off-white/70">Happy Clients</div>
            </div>
          </div>
        </TimelineContent>

        {/* Testimonials - Mobile Marquee / Desktop Bento Grid */}
        <div className="block lg:hidden">
          {/* Mobile Marquee - 2 Rows */}
          <TimelineContent
            animationNum={3}
            customVariants={revealVariants}
            timelineRef={testimonialRef}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* First Row */}
            <Marquee pauseOnHover className="[--duration:50s]" reverse>
              {filteredTestimonials.slice(0, Math.ceil(filteredTestimonials.length / 2)).map((testimonial) => (
                <MobileTestimonialCard key={`row1-${testimonial.id}`} testimonial={testimonial} />
              ))}
            </Marquee>

            {/* Second Row */}
            <Marquee pauseOnHover className="[--duration:50s]">
              {filteredTestimonials.slice(Math.ceil(filteredTestimonials.length / 2)).map((testimonial) => (
                <MobileTestimonialCard key={`row2-${testimonial.id}`} testimonial={testimonial} />
              ))}
            </Marquee>
          </TimelineContent>
        </div>

        {/* Desktop Bento Grid */}
        <div className="hidden lg:block">
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-3 gap-4 sm:gap-6 lg:gap-8 auto-rows-[280px] sm:auto-rows-[300px] lg:auto-rows-[minmax(280px,auto)]"
            role="region"
            aria-labelledby="testimonials-heading"
            aria-label="Client testimonials grid"
          >
            {filteredTestimonials.map((testimonial, index) => {
              // Bento grid spans for different card sizes - more dynamic layout
              const getGridClasses = (index: number) => {
                switch (index) {
                  case 0: return 'lg:col-span-2 lg:row-span-2'; // Hero card - spans 2 columns and 2 rows
                  case 1: return 'lg:col-span-1 lg:row-span-1'; // Small card
                  case 2: return 'lg:col-span-1 lg:row-span-1'; // Small card
                  case 3: return 'lg:col-span-2 lg:row-span-1'; // Wide card
                  case 4: return 'lg:col-span-1 lg:row-span-1'; // Small card
                  case 5: return 'lg:col-span-1 lg:row-span-1'; // Small card
                  case 6: return 'lg:col-span-2 lg:row-span-1'; // Wide card
                  default: return 'lg:col-span-1';
                }
              };

              return (
              <TimelineContent
                key={testimonial.id}
                animationNum={index + 3}
                customVariants={revealVariants}
                timelineRef={testimonialRef}
                className={`relative ${testimonial.bgColor} overflow-hidden rounded-xl border border-off-white/10 p-4 sm:p-6 hover:scale-[1.02] hover:shadow-2xl hover:shadow-kiiro-yellow/10 transition-all duration-500 cursor-pointer group flex flex-col justify-between hover:-translate-y-1 active:scale-[0.98] touch-manipulation focus:outline-none focus:ring-2 focus:ring-kiiro-yellow focus:ring-offset-2 focus:ring-offset-charcoal-black ${getGridClasses(index)} ${
                  index === 0 ? 'lg:rounded-2xl lg:shadow-2xl lg:shadow-kiiro-yellow/20 lg:ring-1 lg:ring-kiiro-yellow/30' : // Hero card gets extra styling and glow
                  getGridClasses(index).includes('col-span-2') ? 'lg:shadow-lg' : '' // Wide cards get medium shadow
                }`}
                onClick={(e) => handleCardClick(testimonial, e)}
                role="button"
                tabIndex={0}
                aria-label={`Read full testimonial from ${testimonial.name} at ${testimonial.company || testimonial.title}`}
                viewport={{ once: true }}
                onKeyDown={(e: React.KeyboardEvent) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleCardClick(testimonial, e);
                  }
                }}
              >
                {/* Background Pattern */}
                <div className={`absolute inset-0 ${
                  index === 0
                    ? 'bg-[radial-gradient(circle_at_1px_1px,rgba(255,215,0,0.05)_1px,transparent_0)] bg-[size:24px_24px]' // Hero card gets gold pattern
                    : getGridClasses(index).includes('col-span-2')
                    ? 'bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.06)_1px,transparent_0)] bg-[size:18px_18px]' // Wide cards get subtle pattern
                    : 'bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.04)_1px,transparent_0)] bg-[size:16px_16px]' // Small cards get minimal pattern
                } opacity-60 group-hover:opacity-80 transition-opacity duration-300`}></div>

                {/* Rating and Verification */}
                <div className="flex items-center justify-between mb-4 relative z-10">
                  <div className="flex items-center gap-1">
                    {[...Array(testimonial.rating || 5)].map((_, i) => (
                      <Star key={i} className={`w-4 h-4 ${testimonial.starColor ? `fill-${testimonial.starColor.replace('text-', '')} ${testimonial.starColor}` : 'fill-kiiro-yellow text-kiiro-yellow'}`} />
                    ))}
                  </div>
                  {testimonial.verified && (
                    <div className="flex items-center gap-1 text-xs text-green-400">
                      <CheckCircle className="w-3 h-3" />
                      <span>Verified</span>
                    </div>
                  )}
                </div>

                {/* Quote */}
                <blockquote className={`${testimonial.textColor}/80 ${
                  index === 0 ? 'lg:text-base' : 'text-sm'
                } line-clamp-4 mb-4 relative z-10 leading-relaxed ${
                  index === 0 ? 'lg:line-clamp-none' : ''
                }`}>
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>

                {/* Author Info */}
                <div className="relative z-10 mt-auto">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-full ${testimonial.useVideoIcon ? 'bg-gradient-to-br from-blue-500 to-purple-600' : (testimonial.avatarBg || (testimonial.bgColor === 'bg-gradient-to-br from-kiiro-yellow via-kiiro-yellow to-kiiro-yellow/90' ? 'bg-charcoal-black/20' : 'bg-off-white/10'))} flex items-center justify-center border border-off-white/20 overflow-hidden`}>
                        {testimonial.useVideoIcon ? (
                          <Video className="w-5 h-5 text-white" />
                        ) : testimonial.avatar ? (
                          <img
                            src={testimonial.avatar}
                            alt={`${testimonial.name} avatar`}
                            className={`${testimonial.avatar.includes('nishoomittalLogo') ? 'w-6 h-6' : 'w-full h-full'} object-contain rounded-full`}
                            loading="lazy"
                          />
                        ) : (
                          <span className={`text-sm font-bold ${testimonial.textColor}`}>
                            {testimonial.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        )}
                      </div>
                      <div>
                        <h4 className={`font-semibold text-sm ${testimonial.textColor}`}>{testimonial.name}</h4>
                        <p className={`${testimonial.titleColor || testimonial.textColor}/60 text-xs`}>{testimonial.title}</p>
                      </div>
                    </div>
                    {testimonial.logo && (
                      <div className="flex-shrink-0">
                        <div className={`w-8 h-8 rounded-md ${testimonial.bgColor === 'bg-gradient-to-br from-kiiro-yellow via-kiiro-yellow to-kiiro-yellow/90' ? 'bg-charcoal-black/30' : 'bg-off-white/10'} flex items-center justify-center border border-off-white/20 overflow-hidden group/logo hover:scale-110 transition-transform duration-200`}>
                          <img
                            src={testimonial.logo}
                            alt={`${testimonial.company} logo`}
                            className="w-6 h-6 object-contain group-hover/logo:scale-110 transition-transform duration-200"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Ripple Effect */}
                {rippleEffect && rippleEffect.id === testimonial.id && (
                  <div
                    className="absolute pointer-events-none rounded-full bg-kiiro-yellow/30 animate-ping"
                    style={{
                      left: rippleEffect.x - 10,
                      top: rippleEffect.y - 10,
                      width: 20,
                      height: 20,
                    }}
                  />
                )}

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-kiiro-yellow/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              </TimelineContent>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <TimelineContent
            animationNum={filteredTestimonials.length + 4}
            customVariants={revealVariants}
            timelineRef={testimonialRef}
            viewport={{ once: true }}
            className="inline-block"
          >
            <p className="text-off-white/60 mb-4">
              Want to join these success stories?
            </p>
            <button
              onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-kiiro-yellow text-charcoal-black font-medium rounded-lg hover:bg-kiiro-yellow/90 transition-colors"
            >
              Start Your Project
            </button>
          </TimelineContent>
        </div>

        {/* Trust Badges */}
        <TimelineContent
          animationNum={filteredTestimonials.length + 5}
          customVariants={revealVariants}
          timelineRef={testimonialRef}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="flex flex-wrap justify-center items-center gap-6 opacity-60">
            <div className="flex items-center gap-2 text-off-white/80">
              <Award className="w-5 h-5 text-kiiro-yellow" />
              <span className="text-sm font-medium">Award-Winning Design</span>
            </div>
            <div className="flex items-center gap-2 text-off-white/80">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span className="text-sm font-medium">100% Satisfaction Guarantee</span>
            </div>
            <div className="flex items-center gap-2 text-off-white/80">
              <div className="w-2 h-2 rounded-full bg-kiiro-yellow"></div>
              <span className="text-sm font-medium">GDPR Compliant</span>
            </div>
            <div className="flex items-center gap-2 text-off-white/80">
              <div className="w-5 h-5 rounded-full bg-kiiro-yellow/20 flex items-center justify-center">
                <span className="text-xs font-bold text-kiiro-yellow">5★</span>
              </div>
              <span className="text-sm font-medium">Top Rated Agency</span>
            </div>
          </div>
        </TimelineContent>
      </div>

      {/* Testimonial Modal */}
      <Dialog open={!!selectedTestimonial} onOpenChange={() => setSelectedTestimonial(null)}>
        <DialogContent
          className="max-w-4xl w-[95vw] sm:w-full bg-charcoal-black border-off-white/20 shadow-2xl max-h-[90vh] overflow-y-auto"
          aria-labelledby="testimonial-modal-title"
          aria-describedby="testimonial-modal-description"
        >
          {selectedTestimonial && (
            <>
              <DialogHeader className="text-center pb-6">
                <div className="flex flex-col items-center gap-4 mb-6">
                  <div className={`w-20 h-20 rounded-full ${selectedTestimonial.useVideoIcon ? 'bg-gradient-to-br from-blue-500 to-purple-600' : (selectedTestimonial.avatarBg || selectedTestimonial.bgColor)} flex items-center justify-center border-4 border-off-white/20 shadow-lg overflow-hidden`}>
                    {selectedTestimonial.useVideoIcon ? (
                      <Video className="w-10 h-10 text-white" />
                    ) : selectedTestimonial.avatar ? (
                      <img
                        src={selectedTestimonial.avatar}
                        alt={`${selectedTestimonial.name} avatar`}
                        className="w-full h-full object-cover rounded-full"
                        loading="lazy"
                      />
                    ) : (
                      <span className={`text-2xl font-bold ${selectedTestimonial.textColor}`}>
                        {selectedTestimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    )}
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-1">
                    {[...Array(selectedTestimonial.rating || 5)].map((_, i) => (
                      <Star key={i} className={`w-5 h-5 ${selectedTestimonial.starColor ? `fill-${selectedTestimonial.starColor.replace('text-', '')} ${selectedTestimonial.starColor}` : 'fill-kiiro-yellow text-kiiro-yellow'}`} />
                    ))}
                  </div>

                  <div className="text-center">
                    <DialogTitle id="testimonial-modal-title" className="text-off-white text-2xl font-bold mb-2">
                      {selectedTestimonial.name}
                    </DialogTitle>
                    <DialogDescription id="testimonial-modal-description" className="text-off-white/70 text-base">
                      {selectedTestimonial.title}
                    </DialogDescription>
                    {selectedTestimonial.verified && (
                      <div className="flex items-center justify-center gap-1 mt-2 text-sm text-green-400">
                        <CheckCircle className="w-4 h-4" />
                        <span>Verified Client</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className={`p-4 sm:p-8 rounded-2xl ${selectedTestimonial.bgColor} border border-off-white/10 relative overflow-hidden shadow-inner`}>
                  <div className={`absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,${selectedTestimonial.textColor === 'text-charcoal-black' ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.08)'}_1px,transparent_0)] bg-[size:24px_24px] opacity-50`}></div>
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-kiiro-yellow/0 via-kiiro-yellow/50 to-kiiro-yellow/0"></div>
                  <blockquote className={`${selectedTestimonial.textColor} text-lg leading-relaxed relative z-10 font-medium`}>
                    &ldquo;{selectedTestimonial.fullQuote}&rdquo;
                  </blockquote>
                  <div className="absolute bottom-0 right-0 w-8 h-8 bg-kiiro-yellow/20 rounded-tl-2xl"></div>
                </div>
              </DialogHeader>

              {selectedTestimonial.caseStudyUrl && (
                <div className="mt-6 flex justify-center">
                  <Link
                    href={selectedTestimonial.caseStudyUrl}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-kiiro-yellow text-charcoal-black font-medium rounded-lg hover:bg-kiiro-yellow/90 transition-colors"
                  >
                    <Target className="w-4 h-4" />
                    View Detailed Case Study
                  </Link>
                </div>
              )}

              <div className="mt-8 flex items-center justify-center gap-6">
                <div className="flex items-center gap-2 text-sm text-off-white/60">
                  <div className="w-2 h-2 rounded-full bg-kiiro-yellow animate-pulse"></div>
                  <span>Verified Client Testimonial</span>
                </div>
                <div className="text-sm text-off-white/50">
                  Press ESC or click outside to close
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
} 