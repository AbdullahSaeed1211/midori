"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

interface VelocityScrollProps extends React.HTMLAttributes<HTMLDivElement> {
  defaultVelocity?: number;
  className?: string;
  numRows?: number;
  children: React.ReactNode;
}

export function VelocityScroll({
  defaultVelocity = 5,
  numRows = 2,
  children,
  className,
  ...props
}: VelocityScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollVelocity, setScrollVelocity] = useState(0);
  const lastScrollY = useRef(0);
  const lastScrollTime = useRef(Date.now());
  const rows = Array.from({ length: numRows });

  useEffect(() => {
    const handleScroll = () => {
      const now = Date.now();
      const timeDelta = now - lastScrollTime.current;
      if (timeDelta > 0) {
        const currentScrollY = window.scrollY;
        const delta = currentScrollY - lastScrollY.current;
        const velocity = (delta / timeDelta) * 100; // Scale up for better effect
        
        // Apply some dampening for smoother transitions
        setScrollVelocity((prev) => prev * 0.7 + velocity * 0.3);
        
        lastScrollY.current = currentScrollY;
        lastScrollTime.current = now;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative w-full overflow-hidden text-4xl font-bold tracking-[-0.02em] md:text-7xl md:leading-[5rem]",
        className
      )}
      {...props}
    >
      {rows.map((_, i) => (
        <ParallaxText
          key={i}
          baseVelocity={defaultVelocity * (i % 2 === 0 ? 1 : -1)}
          scrollVelocity={scrollVelocity}
        >
          {children}
        </ParallaxText>
      ))}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
}

interface ParallaxProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  baseVelocity: number;
  scrollVelocity: number;
}

const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

function ParallaxText({
  children,
  baseVelocity = 10,
  scrollVelocity = 0,
}: ParallaxProps) {
  const [xPosition, setXPosition] = useState(0);
  const [contentWidth, setContentWidth] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current && containerRef.current) {
      setContentWidth(contentRef.current.offsetWidth);
      setViewportWidth(containerRef.current.offsetWidth);
    }

    const handleResize = () => {
      if (contentRef.current && containerRef.current) {
        setContentWidth(contentRef.current.offsetWidth);
        setViewportWidth(containerRef.current.offsetWidth);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [children]);

  useEffect(() => {
    let animationId: number;
    let lastTime = Date.now();

    const animate = () => {
      const currentTime = Date.now();
      const delta = (currentTime - lastTime) / 1000; // Convert to seconds
      lastTime = currentTime;

      // Combine base velocity with scroll velocity
      const directionFactor = baseVelocity >= 0 ? 1 : -1;
      const scrollFactor = directionFactor * scrollVelocity * 0.05;
      const adjustedVelocity = baseVelocity + scrollFactor;
      
      // Calculate the new position
      let newPosition = xPosition + adjustedVelocity * delta * 50; // Scale for better visuals
      
      // Wrap the position if we've scrolled beyond the boundaries
      if (contentWidth > 0) {
        newPosition = wrap(-contentWidth, viewportWidth, newPosition);
      }
      
      setXPosition(newPosition);
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [baseVelocity, scrollVelocity, xPosition, contentWidth, viewportWidth]);

  return (
    <div
      ref={containerRef}
      className="w-full overflow-hidden whitespace-nowrap"
    >
      <div
        className="inline-flex flex-nowrap"
        style={{
          transform: `translateX(${xPosition}px)`,
        }}
      >
        <div
          className="inline-block flex-shrink-0"
          ref={contentRef}
        >
          {children}
        </div>
        <div className="inline-block flex-shrink-0">{children}</div>
        <div className="inline-block flex-shrink-0">{children}</div>
      </div>
    </div>
  );
} 