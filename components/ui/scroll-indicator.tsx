"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export const ScrollIndicator = ({
  className,
  text = "Scroll Down",
  color = "#FFEC00",
  style = "line", // "line" | "mouse" | "arrow"
  onClick,
}: {
  className?: string;
  text?: string;
  color?: string;
  style?: "line" | "mouse" | "arrow";
  onClick?: () => void;
}) => {
  if (style === "line") {
    return (
      <motion.div 
        className={cn("flex flex-col items-center gap-3 cursor-pointer", className)}
        onClick={onClick}
        whileHover={{ y: 5 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        {text && <p className="text-sm font-medium" style={{ color }}>{text}</p>}
        <motion.div
          className="h-16 w-0.5 rounded-full overflow-hidden"
          style={{ backgroundColor: `${color}40` }}
        >
          <motion.div
            className="h-full w-full"
            style={{ backgroundColor: color }}
            animate={{ 
              y: ["-100%", "100%"],
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 1.5,
              ease: "easeInOut" 
            }}
          />
        </motion.div>
      </motion.div>
    );
  }
  
  if (style === "arrow") {
    return (
      <motion.div 
        className={cn("flex flex-col items-center gap-2 cursor-pointer", className)}
        onClick={onClick}
        whileHover={{ y: 5 }}
      >
        {text && <p className="text-sm font-medium" style={{ color }}>{text}</p>}
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ 
            repeat: Infinity, 
            duration: 1.5,
            ease: "easeInOut"
          }}
          style={{ color }}
        >
          <ArrowDown className="h-6 w-6" />
        </motion.div>
      </motion.div>
    );
  }
  
  // Default mouse style
  return (
    <motion.div 
      className={cn("flex flex-col items-center gap-2 cursor-pointer", className)}
      onClick={onClick}
    >
      {text && <p className="text-sm font-medium" style={{ color }}>{text}</p>}
      <motion.div
        className="relative w-6 h-8 border-2 rounded-full"
        style={{ borderColor: color }}
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
      >
        <motion.div
          className="absolute top-1 left-1/2 w-1.5 h-1.5 rounded-full -translate-x-1/2"
          style={{ backgroundColor: color }}
          animate={{
            y: [0, 8, 0]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>
    </motion.div>
  );
}; 