"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface Particle {
  createdAt: number;
  x: number;
  y: number;
  size: number;
  alpha: number;
  velocity: {
    x: number;
    y: number;
  };
}

export const SparklesCore = ({
  id,
  background,
  particleColor,
  particleDensity = 100,
  particleSize = 2,
  speed = 1,
  className,
  ...props
}: {
  id: string;
  background?: string;
  particleColor?: string;
  particleDensity?: number;
  particleSize?: number;
  speed?: number;
  className?: string;
  [key: string]: any;
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const animationRef = useRef<number | null>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const initCanvas = () => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      
      const handleResize = () => {
        if (canvas && ctx) {
          canvas.width = canvas.clientWidth;
          canvas.height = canvas.clientHeight;
          setDimensions({
            width: canvas.width,
            height: canvas.height,
          });
        }
      };
      
      handleResize();
      window.addEventListener("resize", handleResize);
      
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  };

  const createParticles = () => {
    // Only create particles if canvas is initialized
    if (!dimensions.width || !dimensions.height) return;

    const particleCount = Math.min(particleDensity, 500); // Limit to 500 particles
    const newParticles: Particle[] = [];
    
    for (let i = 0; i < particleCount; i++) {
      const particle: Particle = {
        createdAt: Date.now(),
        x: Math.random() * dimensions.width,
        y: Math.random() * dimensions.height,
        size: Math.random() * particleSize + 1,
        alpha: Math.random(),
        velocity: {
          x: (Math.random() - 0.5) * 0.8 * speed, // Slower horizontal movement
          y: -Math.random() * 0.8 * speed, // Upward movement
        },
      };
      newParticles.push(particle);
    }
    
    particles.current = newParticles;
  };

  const renderCanvas = () => {
    if (!canvasRef.current) return;
    
    const ctx = canvasRef.current.getContext("2d");
    if (!ctx) return;
    
    ctx.clearRect(0, 0, dimensions.width, dimensions.height);
    
    particles.current.forEach((particle, i) => {
      // Update particle position
      particle.x += particle.velocity.x;
      particle.y += particle.velocity.y;
      
      // Fade out based on lifetime (5 seconds)
      const lifetime = 5000;
      const age = Date.now() - particle.createdAt;
      const normalizedAge = age / lifetime;
      
      // Calculate alpha based on age
      particle.alpha = normalizedAge < 0.5 
        ? normalizedAge * 2 // Fade in for the first half
        : 1 - (normalizedAge - 0.5) * 2; // Fade out for the second half
      
      // Remove particles that are too old or have gone off-screen
      if (
        normalizedAge >= 1 ||
        particle.x < 0 ||
        particle.x > dimensions.width ||
        particle.y < 0 ||
        particle.y > dimensions.height
      ) {
        // Create a new particle to replace the old one
        particles.current[i] = {
          createdAt: Date.now(),
          x: Math.random() * dimensions.width,
          y: Math.random() * dimensions.height + dimensions.height * 0.2, // Start from lower portion
          size: Math.random() * particleSize + 1,
          alpha: 0,
          velocity: {
            x: (Math.random() - 0.5) * 0.8 * speed,
            y: -Math.random() * 0.8 * speed,
          },
        };
        return;
      }
      
      // Draw the particle
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, 2 * Math.PI);
      ctx.fillStyle = particleColor
        ? `rgba(${hexToRgb(particleColor)}, ${particle.alpha})`
        : `rgba(255, 255, 255, ${particle.alpha})`;
      ctx.fill();
    });
    
    animationRef.current = requestAnimationFrame(renderCanvas);
  };

  // Helper function to convert hex color to rgb
  const hexToRgb = (hex: string): string => {
    // Remove the # if it exists
    hex = hex.replace("#", "");
    
    // Convert 3-digit hex to 6-digit
    if (hex.length === 3) {
      hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    
    // Parse the hex values
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    
    return `${r}, ${g}, ${b}`;
  };

  useEffect(() => {
    const cleanup = initCanvas();
    
    return () => {
      if (cleanup) cleanup();
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  useEffect(() => {
    createParticles();
  }, [dimensions, particleDensity, particleSize, speed]);

  useEffect(() => {
    if (dimensions.width && dimensions.height) {
      renderCanvas();
    }
    
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [dimensions, particles.current, particleColor]);

  return (
    <canvas
      ref={canvasRef}
      id={id}
      className={cn("h-full w-full", className)}
      style={{
        background: background || "transparent",
      }}
      {...props}
    />
  );
}; 