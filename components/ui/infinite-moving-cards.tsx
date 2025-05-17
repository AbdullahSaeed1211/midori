"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "normal",
  pauseOnHover = true,
  className,
  renderItem
}: {
  items: {
    name: string;
    title: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
  renderItem?: (item: { name: string; title: string }) => React.ReactNode;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    const init = () => {
      if (!scrollerRef.current || !containerRef.current) return;
      
      const scrollerContent = Array.from(scrollerRef.current.children);
      
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });
      
      getDirection();
      getSpeed();
      setStart(true);
    };
    
    init();
    
    return () => {
      setStart(false);
    };
  }, []);

  const getDirection = () => {
    if (!containerRef.current) return;
    
    if (direction === "left") {
      containerRef.current.style.setProperty(
        "--animation-direction",
        "forwards"
      );
    } else {
      containerRef.current.style.setProperty(
        "--animation-direction",
        "reverse"
      );
    }
  };
  
  const getSpeed = () => {
    if (!containerRef.current) return;
    
    let speedValue: string;
    
    switch (speed) {
      case "fast":
        speedValue = "20s";
        break;
      case "slow":
        speedValue = "60s";
        break;
      default:
        speedValue = "40s";
    }
    
    containerRef.current.style.setProperty("--animation-duration", speedValue);
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-4 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            className="w-[max-content] flex-shrink-0"
            key={idx}
          >
            {renderItem ? renderItem(item) : <div>{item.name}</div>}
          </li>
        ))}
      </ul>
    </div>
  );
}; 