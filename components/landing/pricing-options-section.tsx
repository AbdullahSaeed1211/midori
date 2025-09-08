"use client";

import { ArrowDown, ArrowRight, Check, Sparkles } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { BlurFade } from "@/components/magicui/blur-fade";
import { cn } from "@/lib/utils";
import { useRef } from "react";

interface PricingOptionProps {
  title: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}

function PricingOption({ title, features, isPopular }: PricingOptionProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  
  return (
    <motion.div 
      ref={cardRef}
      className={cn(
        "w-full h-full bg-deep-gray/50 border rounded-lg sm:rounded-xl p-4 sm:p-6 lg:p-8 relative overflow-hidden transition-colors duration-300",
        isPopular 
          ? "border-kiiro-yellow/30 shadow-lg shadow-kiiro-yellow/10" 
          : "border-kiiro-yellow/10 hover:border-kiiro-yellow/30"
      )}
      whileHover={{ 
        scale: 1.02, 
        boxShadow: isPopular 
          ? "0 15px 50px -15px rgba(76,175,80,0.3)" 
          : "0 10px 40px -15px rgba(76,175,80,0.2)" 
      }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
    >
      {isPopular && (
        <div className="absolute -top-1 -right-1">
          <div className="bg-white text-black text-xs font-bold uppercase px-4 py-1.5 flex items-center gap-1.5 rounded-bl-lg shadow-md">
            <Sparkles className="h-3.5 w-3.5" /> Most Popular
          </div>
        </div>
      )}
      
      <div className="absolute inset-0 bg-gradient-to-br from-kiiro-yellow/5 to-transparent opacity-40"></div>
      <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,theme(colors.kiiro-yellow)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.kiiro-yellow)_1px,transparent_1px)] [background-size:20px_20px]"></div>
      
      <div className="relative z-10">
        <div className="mb-2 text-xs sm:text-sm font-medium text-kiiro-yellow uppercase">
          For {title === "One-off" ? "focused growth" : "serious scaling"}
        </div>
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-off-white mb-2">{title === "One-off" ? "Conversion Accelerator" : "Growth Partnership"}</h3>
        <p className="text-sm sm:text-base lg:text-lg text-off-white/80 mb-4 sm:mb-6">{title === "One-off" ? "Transform your website into a conversion machine" : "Ongoing optimization to maximize your conversions"}</p>
        
        <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="flex items-start gap-2 sm:gap-3"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="flex-shrink-0 rounded-full p-1 mt-0.5 bg-kiiro-yellow/15">
                <Check className="h-3 w-3 sm:h-4 sm:w-4 text-kiiro-yellow" />
              </div>
              <span className="text-xs sm:text-sm lg:text-base text-off-white/90">{feature}</span>
            </motion.div>
          ))}
        </div>
        
        <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
          <Link 
            href="#booking" 
            className={cn(
              "inline-flex items-center justify-center w-full py-2.5 sm:py-3 rounded-lg",
              "text-off-white font-medium text-sm sm:text-base lg:text-lg gap-2",
              "transition-all duration-300",
              isPopular 
                ? "bg-kiiro-yellow/90 hover:bg-kiiro-yellow/80 hover:shadow-[0_0_20px_rgba(76,175,80,0.4)] text-charcoal-black" 
                : "bg-deep-gray hover:bg-deep-gray/80 text-off-white border border-kiiro-yellow/20"
            )}
          >
            <span className="flex-1 text-center">{isPopular ? "Schedule a Call" : "Book Strategy Call"}</span>
            <motion.div
              animate={{ x: [0, 3, 0] }}
              transition={{ repeat: Infinity, repeatDelay: 2, duration: 0.8 }}
              className="flex-shrink-0"
            >
              <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}

export function PricingOptionsSection() {
  const scrollToDetailedPricing = () => {
    const element = document.getElementById('detailed-pricing');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <BlurFade inView>
      <section className="py-28 bg-charcoal-black text-off-white" id="pricing">
        <div className="container px-4 mx-auto max-w-7xl">
          <div className="flex flex-col items-center text-center mb-16 max-w-3xl mx-auto">
            <div className="px-4 py-1.5 rounded-full bg-kiiro-yellow/10 text-kiiro-yellow text-sm font-medium mb-6 border border-kiiro-yellow/20">
              Value-Based Pricing
            </div>
            <h2 className="text-4xl font-bold md:text-5xl mb-6 text-off-white">
              Choose Your Conversion-Focused Solution
            </h2>
            <p className="text-xl text-off-white/80 max-w-2xl">
              Get high-converting websites without the agency overhead. Choose the investment level that matches your growth goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
            <PricingOption 
              title="One-off"
              description="A purpose-built digital asset engineered to deliver a specific business outcome in the shortest possible time."
              features={[
                "Complete in 7-14 days (not months)",
                "Conversion-optimized design & copy",
                "Full responsive implementation",
                "SEO foundation & performance tuning",
                "Analytics & conversion tracking",
                "30 days of priority support",
                "Perfect for landing pages & focused campaigns"
              ]}
            />
            
            <PricingOption 
              title="Retainer"
              description="A comprehensive digital solution built to systematically generate leads, conversions, and revenue for sustainable growth."
              features={[
                "Complete in 14-21 days",
                "Multi-page conversion system",
                "Advanced UX optimization",
                "Content strategy & implementation",
                "A/B testing framework",
                "Detailed analytics dashboard",
                "60 days of priority support & optimizations",
                "Perfect for complete website rebuilds & SaaS products"
              ]}
              isPopular
            />
          </div>
          
          <div className="mt-20 text-center">
            <motion.button
              onClick={scrollToDetailedPricing}
              className="inline-flex flex-col items-center justify-center gap-3 group cursor-pointer"
              whileHover={{ y: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <span className="text-lg font-medium text-kiiro-yellow">See Detailed Comparison</span>
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 1.5,
                  ease: "easeInOut"
                }}
                className="text-kiiro-yellow"
              >
                <ArrowDown className="h-6 w-6" />
              </motion.div>
            </motion.button>
          </div>
        </div>
      </section>
    </BlurFade>
  );
} 