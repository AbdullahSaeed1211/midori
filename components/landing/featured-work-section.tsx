"use client";

import { BlurFade } from "@/components/magicui/blur-fade";
import { TextAnimate } from "@/components/magicui/text-animate";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, ExternalLink } from "lucide-react";
import Link from "next/link";

interface ProjectProps {
  title: string;
  description: string;
  results: string[];
  image: string;
  liveSiteUrl?: string;
}

const projects: ProjectProps[] = [
  {
    title: "BlogSquirrel",
    description: "A complete redesign of this blogging platform's marketing site led to a 137% increase in sign-ups and dramatically improved user engagement metrics.",
    results: [
      "137% increase in sign-up conversion rate",
      "42% decrease in bounce rate",
      "3.2x improvement in average session duration",
      "Seamless mobile experience with sub-1s load times"
    ],
    image: "/projects/blogport.webp",
    liveSiteUrl: "#"
  },
  {
    title: "BrainWise",
    description: "Transformed an early-stage AI learning platform into a premium educational experience with intuitive UX and strategic information architecture.",
    results: [
      "89% increase in trial-to-paid conversions",
      "Customer acquisition cost reduced by 37%",
      "Improved user retention by 28%",
      "Enhanced visual identity and brand perception"
    ],
    image: "/projects/brainwise.webp",
    liveSiteUrl: "#"
  },
  {
    title: "Dubbby",
    description: "Crafted a high-conversion landing page for this AI dubbing service that effectively communicates complex technology in an accessible way.",
    results: [
      "215% increase in demo requests",
      "52% improvement in qualified lead generation",
      "Reduced explained needed in sales calls by 35%",
      "Established market-leading brand perception"
    ],
    image: "/projects/dubbby.webp",
    liveSiteUrl: "#"
  }
];

function DeviceMockup({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative w-full max-w-md mx-auto">
      <div className="absolute inset-0 w-full h-full bg-deep-gray rounded-[40px] transform translate-y-[3%] translate-x-[2%] shadow-2xl z-0"></div>
      <div className="relative w-full pt-[40px] pb-[60px] px-[20px] bg-deep-gray rounded-[40px] border-8 border-charcoal-black shadow-lg z-10">
        <div className="absolute top-[15px] left-0 right-0 flex justify-center">
          <div className="w-[120px] h-[25px] bg-charcoal-black rounded-full flex items-center justify-center">
            <div className="w-[40px] h-[8px] bg-deep-gray rounded-full"></div>
          </div>
        </div>
        <div className="relative w-full overflow-hidden rounded-lg aspect-[9/16]">
          <Image 
            src={src} 
            alt={alt} 
            fill 
            className="object-cover" 
            sizes="(max-width: 768px) 100vw, 500px"
            priority 
          />
        </div>
        <div className="absolute bottom-[15px] left-0 right-0 flex justify-center">
          <div className="w-[50px] h-[50px] rounded-full border-4 border-charcoal-black"></div>
        </div>
      </div>
    </div>
  );
}

export function FeaturedWorkSection() {
  return (
    <BlurFade delay={0.1} inView>
      <section className="py-28 bg-charcoal-black text-off-white" id="featured-work">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col items-center mb-16 max-w-3xl mx-auto text-center">
            <div className="px-4 py-1.5 rounded-full bg-verdant-green/10 text-verdant-green text-sm font-medium mb-6 border border-verdant-green/20">
              Case Studies
            </div>
            <h2 className="text-4xl font-bold md:text-5xl mb-6 text-off-white">
              <TextAnimate animation="blurInUp">
                Real Results for Real Businesses
              </TextAnimate>
            </h2>
            <p className="text-xl text-off-white/80 max-w-2xl">
              We don&apos;t just make websites look good — we deliver measurable improvements in the metrics that matter to your business.
            </p>
          </div>

          <Tabs defaultValue={projects[0].title} className="w-full max-w-6xl mx-auto">
            <TabsList className="grid grid-cols-3 mb-12 bg-deep-gray/50 p-1 rounded-xl">
              {projects.map((project) => (
                <TabsTrigger 
                  key={project.title} 
                  value={project.title}
                  className="data-[state=active]:bg-verdant-green data-[state=active]:text-off-white rounded-lg"
                >
                  {project.title}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {projects.map((project) => (
              <TabsContent key={project.title} value={project.title} className="focus-visible:outline-none focus-visible:ring-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="order-2 lg:order-1">
                    <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
                    <p className="text-lg text-off-white/80 mb-6">{project.description}</p>
                    
                    <div className="mb-8">
                      <h4 className="text-lg font-semibold mb-3 text-verdant-green">Key Results:</h4>
                      <ul className="space-y-2">
                        {project.results.map((result, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <Check className="h-5 w-5 text-verdant-green shrink-0 mt-1" />
                            <span className="text-base text-off-white/90">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {project.liveSiteUrl && (
                      <Link 
                        href={project.liveSiteUrl} 
                        className="inline-flex items-center gap-2 text-verdant-green hover:text-verdant-green/80 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span>Visit Live Site</span>
                        <ExternalLink className="h-4 w-4" />
                      </Link>
                    )}
                  </div>
                  
                  <div className="order-1 lg:order-2">
                    <div className="bg-deep-gray/30 p-6 rounded-xl border border-verdant-green/10 hover:shadow-[0_10px_40px_-15px_rgba(76,175,80,0.1)] transition-all duration-300">
                      <div className="relative w-full overflow-hidden rounded-lg aspect-video mb-6">
                        <Image 
                          src={project.image} 
                          alt={`${project.title} showcase`} 
                          fill 
                          className="object-cover transition-transform duration-500 hover:scale-105" 
                          sizes="(max-width: 768px) 100vw, 600px"
                          priority 
                        />
                      </div>
                      
                      <div className="hidden md:block mt-8">
                        <h4 className="text-center text-lg font-medium mb-4">Mobile View</h4>
                        <DeviceMockup src={project.image} alt={`${project.title} mobile view`} />
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
    </BlurFade>
  );
} 