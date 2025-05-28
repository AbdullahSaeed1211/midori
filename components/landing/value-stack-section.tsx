"use client";

import { Check, Gift, Star, Sparkles } from "lucide-react";
import { BlurFade } from "@/components/magicui/blur-fade";
import { motion } from "framer-motion";

interface ValueItemProps {
  title: string;
  description: string;
  value: string;
  delay?: number;
}

function ValueItem({ title, description, value, delay = 0 }: ValueItemProps) {
  return (
    <BlurFade delay={delay} inView>
      <motion.div 
        className="group relative p-6 rounded-xl border border-kiiro-yellow/20 bg-deep-gray/80 hover:border-kiiro-yellow/40 transition-all duration-300 overflow-hidden"
        whileHover={{ scale: 1.02, y: -2 }}
      >
        {/* Subtle background glow */}
        <div className="absolute inset-0 bg-kiiro-yellow/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <div className="relative flex items-start gap-4">
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-kiiro-yellow/20 flex items-center justify-center border border-kiiro-yellow/30">
            <Check className="w-4 h-4 text-kiiro-yellow" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex justify-between items-start mb-3">
              <h4 className="font-semibold text-off-white group-hover:text-kiiro-yellow/90 transition-colors duration-300 leading-tight">{title}</h4>
              <span className="text-kiiro-yellow font-bold text-xl ml-4 flex-shrink-0">{value}</span>
            </div>
            <p className="text-off-white/70 text-sm leading-relaxed">{description}</p>
          </div>
        </div>
      </motion.div>
    </BlurFade>
  );
}

export function ValueStackSection() {
  const valueItems: ValueItemProps[] = [
    {
      title: "Custom Website Design & Development",
      description: "Conversion-optimized design with modern development using Next.js, React, and Tailwind CSS",
      value: "$3,500",
      delay: 0.1
    },
    {
      title: "Conversion Rate Optimization",
      description: "Psychology-based design elements, strategic CTAs, and user flow optimization",
      value: "$1,500",
      delay: 0.2
    },
    {
      title: "Mobile-First Responsive Design",
      description: "Perfect experience across all devices with touch-optimized interactions",
      value: "$800",
      delay: 0.3
    },
    {
      title: "Performance Optimization",
      description: "Lightning-fast load times, image optimization, and Core Web Vitals optimization",
      value: "$600",
      delay: 0.4
    },
    {
      title: "SEO Foundation Setup",
      description: "Technical SEO, meta tags, schema markup, and search engine optimization",
      value: "$500",
      delay: 0.5
    },
    {
      title: "Analytics & Tracking Setup",
      description: "Google Analytics 4, conversion tracking, and performance monitoring dashboard",
      value: "$400",
      delay: 0.6
    },
    {
      title: "Contact Form Integration",
      description: "Professional contact forms with email automation and lead capture",
      value: "$300",
      delay: 0.7
    },
    {
      title: "30-Day Priority Support",
      description: "Direct access to our team for bug fixes, adjustments, and questions",
      value: "$500",
      delay: 0.8
    }
  ];

  const bonusItems = [
    {
      title: "Website Speed Audit Report",
      description: "Detailed analysis of your current site's performance issues",
      value: "$200"
    },
    {
      title: "Competitor Analysis",
      description: "Strategic insights into what your competitors are doing wrong",
      value: "$300"
    },
    {
      title: "Conversion Checklist",
      description: "Our proven 47-point checklist for high-converting websites",
      value: "$150"
    }
  ];

  const totalValue = valueItems.reduce((sum, item) => sum + parseInt(item.value.replace('$', '').replace(',', '')), 0);
  const bonusValue = bonusItems.reduce((sum, item) => sum + parseInt(item.value.replace('$', '').replace(',', '')), 0);
  const grandTotal = totalValue + bonusValue;

  return (
    <section className="py-24 bg-charcoal-black text-off-white relative overflow-hidden" id="value-stack">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-kiiro-yellow/5 rounded-bl-full blur-3xl" />
      
      <div className="container px-4 mx-auto relative">
        <BlurFade delay={0.1} inView>
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-kiiro-yellow/10 text-kiiro-yellow text-sm font-medium mb-6 border border-kiiro-yellow/20">
              <Gift className="w-4 h-4" />
              Complete Value Breakdown
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-off-white">
              What You <span className="text-kiiro-yellow">Actually Get</span>
            </h2>
            
            <p className="text-xl text-off-white/80 leading-relaxed">
              Here&apos;s the complete breakdown of everything included in your project. 
              If you hired specialists for each component separately, here&apos;s what it would cost:
            </p>
          </div>
        </BlurFade>

        <div className="max-w-5xl mx-auto">
          {/* Main Value Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            {valueItems.map((item, index) => (
              <ValueItem key={index} {...item} />
            ))}
          </div>

          {/* Bonus Section */}
          <BlurFade delay={0.9} inView>
            <div className="relative p-8 rounded-2xl border border-kiiro-yellow/30 bg-kiiro-yellow/10 mb-8">
              {/* Sparkle decoration */}
              <div className="absolute top-4 right-4">
                <Sparkles className="w-6 h-6 text-kiiro-yellow/60" />
              </div>
              
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-kiiro-yellow/20 border border-kiiro-yellow/40 flex items-center justify-center">
                  <Star className="w-5 h-5 text-kiiro-yellow" />
                </div>
                <h3 className="text-2xl font-bold text-off-white">Founding Client Bonuses</h3>
                <span className="px-3 py-1 bg-kiiro-yellow text-charcoal-black text-sm font-bold rounded-full shadow-lg">FREE</span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {bonusItems.map((bonus, index) => (
                  <motion.div 
                    key={index}
                    className="p-4 rounded-lg border border-kiiro-yellow/20 bg-charcoal-black/50 backdrop-blur-sm"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 + (index * 0.1), duration: 0.5 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-off-white text-sm leading-tight">{bonus.title}</h4>
                      <span className="text-kiiro-yellow font-bold ml-2 flex-shrink-0">{bonus.value}</span>
                    </div>
                    <p className="text-off-white/70 text-xs leading-relaxed">{bonus.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </BlurFade>

          {/* Total Value Calculation */}
          <BlurFade delay={1.3} inView>
            <div className="relative p-8 rounded-2xl border border-kiiro-yellow/40 bg-charcoal-black overflow-hidden">
              {/* Background decoration */}
              <div className="absolute inset-0 bg-kiiro-yellow/5" />
              
              <div className="relative space-y-6">
                <div className="flex justify-between items-center text-lg">
                  <span className="text-off-white font-medium">Core Website Package:</span>
                  <span className="text-off-white font-bold text-xl">${totalValue.toLocaleString()}</span>
                </div>
                
                <div className="flex justify-between items-center text-lg">
                  <span className="text-off-white font-medium">Founding Client Bonuses:</span>
                  <span className="text-kiiro-yellow font-bold text-xl">+${bonusValue.toLocaleString()}</span>
                </div>
                
                <div className="border-t border-kiiro-yellow/30 pt-6">
                  <div className="flex justify-between items-center text-3xl font-bold">
                    <span className="text-off-white">Total Value:</span>
                    <span className="text-kiiro-yellow">${grandTotal.toLocaleString()}</span>
                  </div>
                </div>
                
                <div className="text-center pt-6 border-t border-kiiro-yellow/20">
                  <div className="text-lg text-off-white/80 mb-2">Your Founding Client Investment:</div>
                  <div className="text-5xl font-bold text-kiiro-yellow mb-3">Starting from $400</div>
                  <div className="text-off-white/60 text-lg">Save <span className="text-kiiro-yellow font-semibold">${(grandTotal - 400).toLocaleString()}</span> with founding client pricing</div>
                </div>
              </div>
            </div>
          </BlurFade>

          <BlurFade delay={1.5} inView>
            <div className="text-center mt-12">
              <motion.a
                href="#booking"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-charcoal-black bg-kiiro-yellow hover:bg-kiiro-yellow/90 rounded-lg transition-all duration-300 shadow-lg shadow-kiiro-yellow/20 hover:shadow-kiiro-yellow/40 hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Claim Your Founding Client Spot
              </motion.a>
              <p className="text-sm text-off-white/60 mt-4">
                Limited time offer • Only <span className="text-kiiro-yellow font-semibold">8 spots remaining</span> at this price
              </p>
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
} 