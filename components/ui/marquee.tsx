"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

type MarqueeProps = {
  children: React.ReactNode;
  className?: string;
  direction?: "horizontal" | "vertical";
  pauseOnHover?: boolean;
  speed?: number;
  reverse?: boolean;
};

export function Marquee({
  children,
  className,
  direction = "horizontal",
  pauseOnHover = false,
  speed = 50,
  reverse = false,
  ...props
}: MarqueeProps & React.HTMLAttributes<HTMLDivElement>) {
  const [contentWidth, setContentWidth] = useState(0);
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      setContentWidth(contentRef.current.offsetWidth);
      setContentHeight(contentRef.current.offsetHeight);
    }
  }, [children]);

  const isHorizontal = direction === "horizontal";
  const animationDuration = isHorizontal
    ? contentWidth / speed
    : contentHeight / speed;

  return (
    <div
      className={cn(
        "flex overflow-hidden",
        isHorizontal ? "w-full" : "h-full flex-col",
        className
      )}
      {...props}
    >
      <div
        className={cn(
          "flex flex-nowrap",
          isHorizontal ? "flex-row" : "flex-col",
          pauseOnHover &&
            "group-hover:[animation-play-state:paused] hover:[animation-play-state:paused]"
        )}
        style={{
          animation: `${
            isHorizontal
              ? `scroll-x-${reverse ? "reverse" : "normal"}`
              : `scroll-y-${reverse ? "reverse" : "normal"}`
          } ${animationDuration}s linear infinite`,
        }}
      >
        <div
          className={isHorizontal ? "flex-shrink-0" : ""}
          aria-hidden="true"
          ref={contentRef}
        >
          {children}
        </div>
        <div className={isHorizontal ? "flex-shrink-0" : ""} aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Marquee; 