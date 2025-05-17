"use client";

import React, { ReactNode, ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export const ShimmerButton = ({
  children,
  className,
  ...props
}: {
  children: ReactNode;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-lg px-4 py-1.5 text-base font-medium transition-all duration-300",
        "relative overflow-hidden bg-kiiro-yellow text-off-white hover:scale-105",
        "before:absolute before:inset-0 before:-z-10 before:translate-x-[100%] before:animate-[shimmer_2s_infinite]",
        "before:bg-gradient-to-r before:from-transparent before:via-white/25 before:to-transparent",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}; 