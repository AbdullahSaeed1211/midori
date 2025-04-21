"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface BlurFadeProps {
  children: React.ReactNode;
  className?: string;
  duration?: number;
  delay?: number;
  offset?: number;
  direction?: "up" | "down" | "left" | "right";
  inView?: boolean;
  blur?: string;
}

export function BlurFade({
  children,
  className,
  duration = 0.4,
  delay = 0,
  offset = 6,
  direction = "down",
  inView = false,
  blur = "6px",
  ...props
}: BlurFadeProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (!ref.current || !window.IntersectionObserver) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView || isInView) {
      const timer = setTimeout(() => {
        setIsAnimating(true);
      }, delay * 1000);
      return () => clearTimeout(timer);
    }
  }, [delay, inView, isInView]);

  const getTransformProperty = () => {
    if (direction === "left" || direction === "right") {
      return {
        x: direction === "right" ? -offset : offset,
      };
    }
    return {
      y: direction === "down" ? -offset : offset,
    };
  };

  const transformProp = getTransformProperty();
  const transformKey = Object.keys(transformProp)[0] as "x" | "y";
  const transformValue = transformProp[transformKey];

  return (
    <div
      ref={ref}
      className={cn(className)}
      style={{
        opacity: isAnimating ? 1 : 0,
        filter: `blur(${isAnimating ? 0 : blur})`,
        transform: `translate${transformKey.toUpperCase()}(${
          isAnimating ? 0 : transformValue
        }px)`,
        transition: `opacity ${duration}s ease-out, filter ${duration}s ease-out, transform ${duration}s ease-out`,
        transitionDelay: `${delay}s`,
      }}
      {...props}
    >
      {children}
    </div>
  );
} 