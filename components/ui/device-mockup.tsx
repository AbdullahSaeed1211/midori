"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function DeviceMockup({
  className,
  image,
  alt = "Device screenshot",
  device = "iphone"
}: {
  className?: string;
  image: string;
  alt?: string;
  device?: "iphone" | "browser" | "macbook";
}) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setMousePosition({ x, y });
  };

  // Normalize the mouse position to be between -15 and 15 degrees
  const normalizePosition = (pos: number) => (pos * 2 - 1) * 15;

  // Get the appropriate display based on device type
  const getDeviceDisplay = () => {
    switch (device) {
      case "browser":
        return (
          <div className="rounded-lg overflow-hidden border-4 border-gray-800 shadow-2xl w-full max-w-md">
            <div className="bg-gray-800 px-4 py-2 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="bg-gray-700 flex-1 h-6 rounded-md flex items-center justify-center">
                <div className="text-white/80 text-xs font-mono">yourwebsite.com</div>
              </div>
            </div>
            <div className="relative aspect-[16/10] w-full bg-white">
              <Image
                src={image}
                alt={alt}
                fill
                className="object-cover"
              />
            </div>
          </div>
        );
      case "macbook":
        return (
          <div className="relative max-w-md">
            <div className="rounded-xl overflow-hidden bg-gray-900 pt-6 border-[8px] border-gray-800 shadow-2xl">
              <div className="absolute top-[10px] left-1/2 transform -translate-x-1/2 w-2 h-2 rounded-full bg-gray-700" />
              <div className="relative aspect-[16/10] bg-white">
                <Image
                  src={image}
                  alt={alt}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="bg-gray-800 h-3 w-[102%] -ml-[1%] rounded-b-xl" />
            <div className="bg-gray-700 h-1 w-[70%] mx-auto rounded-b-xl" />
          </div>
        );
      default: // iPhone
        return (
          <div className="relative max-w-[220px]">
            <div className="rounded-[42px] overflow-hidden border-[10px] border-gray-900 shadow-2xl">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-6 bg-gray-900 rounded-b-xl z-10" />
              <div className="relative aspect-[9/19.5] bg-white">
                <Image
                  src={image}
                  alt={alt}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <motion.div
      className={cn("relative select-none", className)}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        perspective: "1000px",
      }}
    >
      <motion.div
        animate={{
          rotateX: isHovered ? -normalizePosition(mousePosition.y) : 0,
          rotateY: isHovered ? normalizePosition(mousePosition.x) : 0,
          scale: isHovered ? 1.05 : 1,
        }}
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 100,
        }}
        className="w-full h-full"
      >
        {getDeviceDisplay()}
      </motion.div>
    </motion.div>
  );
} 