"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface ComparisonSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  className?: string;
}

export function ComparisonSlider({
  beforeImage,
  afterImage,
  beforeLabel = "Before",
  afterLabel = "After",
  className,
}: ComparisonSliderProps) {
  const [position, setPosition] = React.useState(50);
  const [isDragging, setIsDragging] = React.useState(false);
  const sliderRef = React.useRef<HTMLDivElement>(null);

  const handleMove = (event: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging || !sliderRef.current) return;

    const rect = sliderRef.current.getBoundingClientRect();
    const x = "touches" in event 
      ? event.touches[0].clientX - rect.left
      : event.clientX - rect.left;
    
    const newPosition = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setPosition(newPosition);
  };

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  React.useEffect(() => {
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("touchend", handleMouseUp);
    
    return () => {
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("touchend", handleMouseUp);
    };
  }, []);

  return (
    <div
      ref={sliderRef}
      className={cn(
        "relative w-full overflow-hidden rounded-xl border border-kiiro-yellow/10 bg-deep-gray/30 aspect-video",
        className
      )}
      onMouseMove={handleMove}
      onTouchMove={handleMove}
    >
      {/* Before image (full width) */}
      <div className="absolute inset-0 w-full h-full">
        <Image 
          src={beforeImage} 
          alt={beforeLabel} 
          fill 
          className="object-cover"
          priority
        />
        <div className="absolute bottom-4 left-4 px-3 py-1.5 bg-charcoal-black/70 text-off-white rounded-md text-sm font-medium">
          {beforeLabel}
        </div>
      </div>
      
      {/* After image (clipped based on slider position) */}
      <div 
        className="absolute inset-0 h-full overflow-hidden"
        style={{ width: `${position}%` }}
      >
        <div className="relative h-full w-full">
          <Image 
            src={afterImage} 
            alt={afterLabel} 
            fill 
            className="object-cover"
            style={{ 
              objectPosition: `left center` 
            }}
            priority
          />
          <div className="absolute bottom-4 left-4 px-3 py-1.5 bg-kiiro-yellow/70 text-off-white rounded-md text-sm font-medium">
            {afterLabel}
          </div>
        </div>
      </div>
      
      {/* Slider handle */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-kiiro-yellow cursor-ew-resize"
        style={{ left: `${position}%` }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-kiiro-yellow flex items-center justify-center shadow-lg border-2 border-off-white">
          <svg 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none" 
            className="text-off-white"
          >
            <path 
              d="M8.5 5L15.5 12L8.5 19" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
            <path 
              d="M15.5 5L8.5 12L15.5 19" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
} 