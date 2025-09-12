"use client";

import { TimelineContent } from "@/components/ui/timeline-animation";
import { useRef, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface TestimonialData {
  id: number;
  name: string;
  title: string;
  quote: string;
  fullQuote: string;
  bgColor: string;
  textColor: string;
}

const testimonials: TestimonialData[] = [
  {
    id: 0,
    name: "Olivia Wilde",
    title: "Founder, Sproutly",
    quote: "Kiiro delivered a new design in just 5 days that not only looked incredible but boosted our mobile conversions from 8% to a staggering 92%. It's been a complete game-changer for our business.",
    fullQuote: "Working with Kiiro was a game-changer for our startup. Their team delivered a completely redesigned mobile experience in just 5 days that not only looked incredible but actually boosted our mobile conversions from 8% to a staggering 92%. The attention to detail and understanding of user psychology is remarkable. They've helped us scale our business significantly and we're seeing results we never thought possible.",
    bgColor: "bg-charcoal-black/50",
    textColor: "text-off-white"
  },
  {
    id: 1,
    name: "Kashif Siddiqui",
    title: "Simply Mortgages",
    quote: "We needed to generate more qualified leads. The new landing page Kiiro built for us increased our lead capture by 42% in the first month alone. Their focus on conversion is second to none.",
    fullQuote: "Kiiro transformed our lead generation completely. We were struggling with qualified leads, but their conversion-focused landing page increased our lead capture by 42% in the first month alone. The team's understanding of conversion optimization and user behavior is exceptional. They didn't just create a pretty website - they created a lead generation machine that continues to perform month after month.",
    bgColor: "bg-gradient-to-br from-kiiro-yellow via-kiiro-yellow to-kiiro-yellow/90",
    textColor: "text-charcoal-black"
  },
  {
    id: 2,
    name: "BrainWise Team",
    title: "Ed-Tech Platform",
    quote: "Their team is highly professional, and their innovative solutions have truly transformed the way we operate.",
    fullQuote: "The BrainWise team was thoroughly impressed with Kiiro's professional approach and innovative solutions. Our complex educational platform required careful handling of user experience and data flow, and they delivered beyond our expectations. The new interface has transformed how our students interact with the platform, leading to significantly improved engagement metrics across all our courses.",
    bgColor: "bg-charcoal-black",
    textColor: "text-off-white"
  },
  {
    id: 3,
    name: "Aisan Shah",
    title: "CA",
    quote: "The redesign not only looks amazing but has dramatically improved our user experience metrics. Our bounce rate decreased significantly.",
    fullQuote: "As a certified accountant serving small businesses, I needed a website that would build trust and convert visitors into clients. Kiiro delivered exactly that. The redesign not only looks professional and trustworthy, but it has dramatically improved our user experience metrics. Our bounce rate decreased by 45%, and we're seeing a 60% increase in qualified leads. The attention to detail and understanding of our target audience was exceptional.",
    bgColor: "bg-charcoal-black",
    textColor: "text-off-white"
  },
  {
    id: 4,
    name: "Guidance Welfare Foundation",
    title: "Guidance Welfare Foundation",
    quote: "The team provided technical solutions that were both elegant and scalable. They truly understand the balance of design and function.",
    fullQuote: "The Guidance Welfare Foundation serves thousands of people in need, and our online presence needed to reflect the importance and scale of our mission. Kiiro provided technical solutions that were both elegant and highly scalable. They understood the delicate balance between beautiful design and functional accessibility. Our donation rates have increased by 35% since the redesign, and we've seen a significant improvement in user engagement across all our services.",
    bgColor: "bg-charcoal-black",
    textColor: "text-off-white"
  },
  {
    id: 5,
    name: "Dubbby Team",
    title: "SaaS Founders",
    quote: "Our students were dropping off mid-course. Kiiro's redesigned user flow was so intuitive that we saw a 67% increase in course completions. They truly understand user psychology.",
    fullQuote: "As SaaS founders, we knew validation was crucial before full development. Kiiro created a landing page that was so effective, it secured our first 100 paid users before we even wrote production code. The conversion rate was incredible - 3.2% compared to industry average of 1.2%. Their understanding of SaaS user psychology and conversion optimization gave us the validation we needed to move forward with confidence.",
    bgColor: "bg-gradient-to-br from-kiiro-yellow via-kiiro-yellow to-kiiro-yellow/90",
    textColor: "text-charcoal-black"
  },
  {
    id: 6,
    name: "Lotus Pro Services",
    title: "Construction Company",
    quote: "The website redesign completely transformed our online presence. Our lead generation increased by 85% and client inquiries doubled within the first month.",
    fullQuote: "Lotus Pro Services was a traditional construction company struggling with online presence. Kiiro completely transformed our online presence with a modern, professional website that speaks to our expertise. The lead generation increased by 85% and client inquiries doubled within the first month. Our conversion from inquiry to project has improved by 40%, and we're now seen as the premium choice in our market. The ROI has been exceptional.",
    bgColor: "bg-charcoal-black/50",
    textColor: "text-off-white"
  }
];

function ClientFeedback() {
  const testimonialRef = useRef<HTMLDivElement>(null);
  const [selectedTestimonial, setSelectedTestimonial] = useState<TestimonialData | null>(null);

  const handleCardClick = (testimonial: TestimonialData) => {
    setSelectedTestimonial(testimonial);
  };

  const revealVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.4,
        duration: 0.5,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      y: -20,
      opacity: 0,
    },
  };

  return (
    <main className="w-full bg-charcoal-black">
      <section className="relative h-full container text-off-white mx-auto rounded-lg py-14 bg-charcoal-black" ref={testimonialRef}>
        <article className="max-w-screen-md mx-auto text-center space-y-2">
          <TimelineContent
            as="h1"
            className="xl:text-4xl text-3xl font-medium"
            animationNum={0}
            customVariants={revealVariants}
            timelineRef={testimonialRef}
          >
            Real Results From Real Clients
          </TimelineContent>
          <TimelineContent
            as="p"
            className="mx-auto text-off-white/70"
            animationNum={1}
            customVariants={revealVariants}
            timelineRef={testimonialRef}
          >
            See how we&apos;ve helped businesses improve their website conversions
          </TimelineContent>
        </article>
        <div className="lg:grid lg:grid-cols-3 gap-2 flex flex-col w-full lg:py-10 pt-10 pb-4 lg:px-10 px-4">
          <div className="md:flex lg:flex-col lg:space-y-2 h-full lg:gap-0 gap-2">
            <TimelineContent
              animationNum={0}
              customVariants={revealVariants}
              timelineRef={testimonialRef}
              className={`lg:flex-[7] flex-[6] flex flex-col justify-between relative ${testimonials[0].bgColor} overflow-hidden rounded-lg border border-off-white/10 p-5 hover:scale-[1.02] hover:shadow-2xl hover:shadow-kiiro-yellow/10 transition-all duration-300 cursor-pointer group`}
              onClick={() => handleCardClick(testimonials[0])}
            >
              <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:50px_56px] opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
              <article className="mt-auto">
                <p className={`${testimonials[0].textColor}/80 text-sm line-clamp-3`}>
                  &ldquo;{testimonials[0].quote}&rdquo;
                </p>
                <div className="pt-4">
                  <h3 className={`font-semibold text-sm ${testimonials[0].textColor}`}>
                    {testimonials[0].name}
                  </h3>
                  <p className={`${testimonials[0].textColor}/60 text-xs`}>{testimonials[0].title}</p>
                </div>
              </article>
            </TimelineContent>
            <TimelineContent
              animationNum={1}
              customVariants={revealVariants}
              timelineRef={testimonialRef}
              className={`lg:flex-[3] flex-[4] lg:h-fit lg:shrink-0 flex flex-col justify-between relative ${testimonials[1].bgColor} text-charcoal-black overflow-hidden rounded-lg border border-charcoal-black/20 p-5 hover:scale-[1.02] hover:shadow-2xl hover:shadow-kiiro-yellow/30 transition-all duration-300 cursor-pointer group`}
              onClick={() => handleCardClick(testimonials[1])}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(0,0,0,0.05)_2px,transparent_2px),radial-gradient(circle_at_75%_75%,rgba(0,0,0,0.05)_2px,transparent_2px)] bg-[size:30px_30px] opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-charcoal-black/10 to-transparent rounded-bl-2xl"></div>
              <div className="absolute bottom-0 left-0 w-12 h-12 bg-gradient-to-tr from-charcoal-black/10 to-transparent rounded-tr-2xl"></div>
              <article className="mt-auto">
                <p className={`${testimonials[1].textColor}/80 text-sm line-clamp-3`}>
                  &ldquo;{testimonials[1].quote}&rdquo;
                </p>
                <div className="pt-4">
                  <h3 className={`font-semibold text-sm ${testimonials[1].textColor}`}>
                    {testimonials[1].name}
                  </h3>
                  <p className={`${testimonials[1].textColor}/60 text-xs`}>{testimonials[1].title}</p>
                </div>
              </article>
            </TimelineContent>
          </div>
          <div className="lg:h-full md:flex lg:flex-col h-fit lg:space-y-2 lg:gap-0 gap-2">
            <TimelineContent
              animationNum={2}
              customVariants={revealVariants}
              timelineRef={testimonialRef}
              className={`flex flex-col justify-between relative ${testimonials[2].bgColor} ${testimonials[2].textColor} overflow-hidden rounded-lg border border-off-white/10 p-5 hover:scale-[1.02] hover:shadow-2xl hover:shadow-kiiro-yellow/10 transition-all duration-300 cursor-pointer group`}
              onClick={() => handleCardClick(testimonials[2])}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[size:20px_20px] opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
              <article className="mt-auto">
                <p className={`${testimonials[2].textColor}/80 text-sm line-clamp-4`}>
                  &ldquo;{testimonials[2].quote}&rdquo;
                </p>
                <div className="pt-4">
                  <h3 className={`font-semibold text-sm ${testimonials[2].textColor}`}>
                    {testimonials[2].name}
                  </h3>
                  <p className={`${testimonials[2].textColor}/60 text-xs`}>{testimonials[2].title}</p>
                </div>
              </article>
            </TimelineContent>
            <TimelineContent
              animationNum={3}
              customVariants={revealVariants}
              timelineRef={testimonialRef}
              className={`flex flex-col justify-between relative ${testimonials[3].bgColor} ${testimonials[3].textColor} overflow-hidden rounded-lg border border-off-white/10 p-5 hover:scale-[1.02] hover:shadow-2xl hover:shadow-kiiro-yellow/10 transition-all duration-300 cursor-pointer group`}
              onClick={() => handleCardClick(testimonials[3])}
            >
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[size:16px_16px] opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
              <article className="mt-auto">
                <p className={`${testimonials[3].textColor}/80 text-sm line-clamp-4`}>
                  &ldquo;{testimonials[3].quote}&rdquo;
                </p>
                <div className="pt-4">
                  <h3 className={`font-semibold text-sm ${testimonials[3].textColor}`}>{testimonials[3].name}</h3>
                  <p className={`${testimonials[3].textColor}/60 text-xs`}>{testimonials[3].title}</p>
                </div>
              </article>
            </TimelineContent>
            <TimelineContent
              animationNum={4}
              customVariants={revealVariants}
              timelineRef={testimonialRef}
              className={`flex flex-col justify-between relative ${testimonials[4].bgColor} ${testimonials[4].textColor} overflow-hidden rounded-lg border border-off-white/10 p-5 hover:scale-[1.02] hover:shadow-2xl hover:shadow-kiiro-yellow/10 transition-all duration-300 cursor-pointer group`}
              onClick={() => handleCardClick(testimonials[4])}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_2px_2px,rgba(255,255,255,0.20)_1px,transparent_0)] bg-[size:24px_24px] opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
              <article className="mt-auto">
                <p className={`${testimonials[4].textColor}/80 text-sm line-clamp-4`}>
                  &ldquo;{testimonials[4].quote}&rdquo;
                </p>
                <div className="pt-4">
                  <h3 className={`font-semibold text-sm ${testimonials[4].textColor}`}>
                    {testimonials[4].name}
                  </h3>
                  <p className={`${testimonials[4].textColor}/60 text-xs`}>{testimonials[4].title}</p>
                </div>
              </article>
            </TimelineContent>
          </div>
          <div className="h-full md:flex lg:flex-col lg:space-y-2 lg:gap-0 gap-2">
            <TimelineContent
              animationNum={5}
              customVariants={revealVariants}
              timelineRef={testimonialRef}
              className={`lg:flex-[3] flex-[4] flex flex-col justify-between relative ${testimonials[5].bgColor} text-charcoal-black overflow-hidden rounded-lg border border-charcoal-black/20 p-5 hover:scale-[1.02] hover:shadow-2xl hover:shadow-kiiro-yellow/20 transition-all duration-300 cursor-pointer group`}
              onClick={() => handleCardClick(testimonials[5])}
            >
              <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(0,0,0,0.08)_1px,transparent_1px),linear-gradient(-45deg,rgba(0,0,0,0.08)_1px,transparent_1px)] bg-[size:12px_12px] opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
              <article className="mt-auto">
                <p className={`${testimonials[5].textColor}/80 text-sm line-clamp-3`}>
                  &ldquo;{testimonials[5].quote}&rdquo;
                </p>
                <div className="pt-4">
                  <h3 className={`font-semibold text-sm ${testimonials[5].textColor}`}>
                    {testimonials[5].name}
                  </h3>
                  <p className={`${testimonials[5].textColor}/60 text-xs`}>{testimonials[5].title}</p>
                </div>
              </article>
            </TimelineContent>
            <TimelineContent
              animationNum={6}
              customVariants={revealVariants}
              timelineRef={testimonialRef}
              className={`lg:flex-[7] flex-[6] flex flex-col justify-between relative ${testimonials[6].bgColor} ${testimonials[6].textColor} overflow-hidden rounded-lg border border-off-white/10 p-5 hover:scale-[1.02] hover:shadow-2xl hover:shadow-kiiro-yellow/10 transition-all duration-300 cursor-pointer group`}
              onClick={() => handleCardClick(testimonials[6])}
            >
              <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[size:50px_56px] opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
              <article className="mt-auto">
                <p className={`${testimonials[6].textColor}/80 text-sm line-clamp-3`}>
                  &ldquo;{testimonials[6].quote}&rdquo;
                </p>
                <div className="pt-4">
                  <h3 className={`font-semibold text-sm ${testimonials[6].textColor}`}>
                    {testimonials[6].name}
                  </h3>
                  <p className={`${testimonials[6].textColor}/60 text-xs`}>{testimonials[6].title}</p>
                </div>
              </article>
            </TimelineContent>
          </div>
        </div>

        <div className="absolute border-b-2 border-off-white/10 bottom-4 h-16 z-[2] md:w-full w-[90%] md:left-0 left-[5%]">
          <div className="container mx-auto w-full h-full relative before:absolute before:-left-2 before:-bottom-2 before:w-4 before:h-4 before:bg-charcoal-black before:shadow-sm before:border border-off-white/10 before:border-off-white/20 after:absolute after:-right-2 after:-bottom-2 after:w-4 after:h-4 after:bg-charcoal-black after:shadow-sm after:border after:border-off-white/20"></div>
        </div>

        {/* Testimonial Modal */}
        <Dialog open={!!selectedTestimonial} onOpenChange={() => setSelectedTestimonial(null)}>
          <DialogContent className="max-w-3xl bg-charcoal-black border-off-white/20 shadow-2xl">
            {selectedTestimonial && (
              <>
                <DialogHeader className="text-center pb-6">
                  <div className="flex flex-col items-center gap-4 mb-6">
                    <div className={`w-20 h-20 rounded-full ${selectedTestimonial.bgColor} flex items-center justify-center border-4 border-off-white/20 shadow-lg`}>
                      <span className={`text-2xl font-bold ${selectedTestimonial.textColor}`}>
                        {selectedTestimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div className="text-center">
                      <DialogTitle className="text-off-white text-2xl font-bold mb-2">
                        {selectedTestimonial.name}
                      </DialogTitle>
                      <DialogDescription className="text-off-white/70 text-base">
                        {selectedTestimonial.title}
                      </DialogDescription>
                    </div>
                  </div>
                  <div className={`p-8 rounded-2xl ${selectedTestimonial.bgColor} border border-off-white/10 relative overflow-hidden shadow-inner`}>
                    <div className={`absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,${selectedTestimonial.textColor === 'text-charcoal-black' ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.08)'}_1px,transparent_0)] bg-[size:24px_24px] opacity-50`}></div>
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-kiiro-yellow/0 via-kiiro-yellow/50 to-kiiro-yellow/0"></div>
                    <blockquote className={`${selectedTestimonial.textColor} text-xl leading-relaxed relative z-10 font-medium`}>
                      &ldquo;{selectedTestimonial.fullQuote}&rdquo;
                    </blockquote>
                    <div className="absolute bottom-0 right-0 w-8 h-8 bg-kiiro-yellow/20 rounded-tl-2xl"></div>
                  </div>
                </DialogHeader>

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
    </main>
  );
}

export default ClientFeedback;