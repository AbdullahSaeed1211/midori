"use client";

import { cn } from "@/lib/utils";
import { BlurFade } from "@/components/magicui/blur-fade";
import { TextAnimate } from "@/components/magicui/text-animate";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface WorkItem {
  title: string;
  type: string;
  imageUrl: string;
}

function WorkCard({ title, type, imageUrl }: WorkItem) {
  return (
    <div
      className={cn(
        "relative flex h-[400px] flex-col overflow-hidden rounded-2xl",
        "border border-code-black-700",
        "bg-code-black-900",
        "shadow-lg group"
      )}
    >
      {imageUrl && (
        <Image 
          src={imageUrl} 
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
        <h3 className="mb-1 text-lg font-semibold text-white">{title}</h3>
        <p className="text-sm text-code-black-100">{type}</p>
      </div>
    </div>
  );
}

export function FeaturedWorkSection() {
  const workItems: WorkItem[] = [
    {
      title: "BlogSquirrel",
      type: "Blogging SaaS",
      imageUrl: "/projects/blogport.webp",
    },
    {
      title: "BrainWise",
      type: "AI Learning SaaS",
      imageUrl: "/projects/brainwise.webp",
    },
    {
      title: "Dubbby",
      type: "AI Dubbing SaaS",
      imageUrl: "/projects/dubbby.webp",
    },
  ];

  return (
    <BlurFade delay={0.1} inView>
      <section className="py-24 bg-code-black-950 text-code-black-50" id="work">
        <div className="container px-4 mx-auto">
          <TextAnimate
            as="h2"
            className="mb-12 text-center text-4xl font-bold md:text-5xl"
            animation="blurInUp"
          >
            Featured Work
          </TextAnimate>

          <Carousel 
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent>
              {workItems.map((item, i) => (
                <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <WorkCard {...item} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-[-50px] bg-midori-300/80 hover:bg-midori-300 text-midori-950 border-midori-300" />
            <CarouselNext className="right-[-50px] bg-midori-300/80 hover:bg-midori-300 text-midori-950 border-midori-300" />
          </Carousel>
        </div>
      </section>
    </BlurFade>
  );
} 