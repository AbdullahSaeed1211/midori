"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

const Textarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[120px] w-full rounded-lg border border-off-white/20 bg-charcoal-black/50 px-4 py-3 text-base text-off-white placeholder:text-off-white/50 focus:border-kiiro-yellow focus:outline-none focus:ring-2 focus:ring-kiiro-yellow/20 disabled:cursor-not-allowed disabled:opacity-50 resize-none transition-colors duration-200",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea }; 