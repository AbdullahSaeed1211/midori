"use client";

import { BlurFade } from "@/components/magicui/blur-fade";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowRight, Zap } from "lucide-react";
import { motion } from "framer-motion";

export function FinalCtaSection() {
  return (
    <section className="relative py-32 bg-charcoal-black text-off-white overflow-hidden" id="final-cta">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute left-1/4 top-1/3 w-[500px] h-[500px] rounded-full bg-verdant-green/5 blur-[120px] animate-pulse"></div>
        <div className="absolute right-1/4 bottom-1/4 w-[400px] h-[400px] rounded-full bg-verdant-green/5 blur-[100px] animate-pulse" style={{ animationDelay: "1s" }}></div>
      </div>
      <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,theme(colors.verdant-green)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.verdant-green)_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]"></div>
      
      <div className="relative container mx-auto px-4 z-10">
        <BlurFade inView>
          <div className="max-w-4xl mx-auto bg-deep-gray/50 rounded-2xl p-12 border border-verdant-green/20 shadow-lg shadow-verdant-green/10 backdrop-blur-sm">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-verdant-green/10 text-verdant-green border border-verdant-green/20 mb-6">
                <Zap className="h-4 w-4" />
                <span className="text-sm font-medium">Let&apos;s Grow Together</span>
              </div>
              <h2 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl tracking-tight text-off-white">
                Ready to <span className="text-verdant-green">Transform</span> Your Digital Presence?
              </h2>
              <p className="mx-auto max-w-2xl text-xl text-off-white/80">
                Join the businesses that have turned their websites into powerful growth engines generating measurable ROI.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-5">
              <motion.div 
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link 
                  href="#booking" 
                  className={cn(
                    "flex items-center justify-center gap-2 px-8 py-4 rounded-xl",
                    "bg-verdant-green text-off-white font-medium text-lg",
                    "hover:bg-verdant-green/90 hover:shadow-[0_0_30px_rgba(76,175,80,0.3)]",
                    "transition-all duration-300"
                  )}
                >
                  Schedule Strategy Call 
                  <motion.div
                    animate={{ x: [0, 3, 0] }}
                    transition={{ repeat: Infinity, repeatDelay: 2, duration: 0.8 }}
                  >
                    <ArrowRight className="h-5 w-5" />
                  </motion.div>
                </Link>
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link 
                  href="#services"
                  className={cn(
                    "flex items-center justify-center gap-2 px-8 py-4 rounded-xl",
                    "border border-verdant-green/20 text-off-white font-medium text-lg",
                    "hover:bg-verdant-green/10 hover:border-verdant-green/40",
                    "transition-all duration-300"
                  )}
                >
                  Explore Our Services
                </Link>
              </motion.div>
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
} 