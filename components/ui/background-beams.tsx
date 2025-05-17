"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export function BackgroundBeams({
  className,
  ...props
}: {
  className?: string;
}) {
  const beamContainerRef = useRef<HTMLDivElement>(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    if (!beamContainerRef.current) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!hasInteracted) setHasInteracted(true);
      
      const rect = beamContainerRef.current!.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      setCursorPosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [hasInteracted]);

  const { x, y } = cursorPosition;

  return (
    <div
      ref={beamContainerRef}
      className={cn(
        "h-full w-full absolute inset-0 overflow-hidden opacity-60",
        className
      )}
      {...props}
    >
      <div
        className="absolute -inset-[100%] opacity-30"
        style={{
          background: hasInteracted
            ? `radial-gradient(600px circle at ${x}px ${y}px, rgba(126, 217, 87, 0.15), transparent 40%)`
            : "none",
        }}
      />
      <div
        className="absolute -inset-[100%] opacity-30"
        style={{
          background: hasInteracted
            ? `radial-gradient(800px circle at ${x}px ${y}px, rgba(126, 217, 87, 0.1), transparent 40%)`
            : "none",
        }}
      />
      <div
        className="absolute -inset-[100%] opacity-30"
        style={{
          background: hasInteracted
            ? `radial-gradient(700px circle at ${x}px ${y}px, rgba(126, 217, 87, 0.05), transparent 40%)`
            : "none",
        }}
      />
      <div className="absolute inset-0 [background-image:radial-gradient(#7ED957_0.5px,transparent_0.5px)] [background-size:12px_12px] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_90%)]" />
    </div>
  );
} 