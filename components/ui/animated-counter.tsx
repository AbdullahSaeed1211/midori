"use client";

import React, { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

interface AnimatedCounterProps {
  from: number;
  to: number;
  duration?: number;
  delay?: number;
  formatter?: (value: number) => string;
  className?: string;
  prefix?: string;
  suffix?: string;
}

export function AnimatedCounter({
  from = 0,
  to,
  duration = 2,
  delay = 0.2,
  formatter = (value: number) => Math.round(value).toString(),
  className = "",
  prefix = "",
  suffix = "",
}: AnimatedCounterProps) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const [count, setCount] = useState(from);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  useEffect(() => {
    if (!inView) return;

    let start = from;
    const end = to;
    const stepTime = Math.abs(Math.floor(duration * 1000 / (end - start)));
    
    let timer: NodeJS.Timeout;
    
    const step = () => {
      setCount(start);
      start += 1;
      
      if (start <= end) {
        timer = setTimeout(step, stepTime);
      }
    };
    
    const delayTimer = setTimeout(() => {
      step();
    }, delay * 1000);
    
    return () => {
      clearTimeout(timer);
      clearTimeout(delayTimer);
    };
  }, [from, to, duration, inView, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 10 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      <span className="inline-flex items-baseline">
        {prefix && <span>{prefix}</span>}
        <span ref={nodeRef} className="font-bold">
          {formatter(count)}
        </span>
        {suffix && <span>{suffix}</span>}
      </span>
    </motion.div>
  );
} 