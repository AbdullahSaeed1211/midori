'use client';

import { useState, Suspense, lazy } from "react";
import { motion } from "framer-motion";
import { BlurFade } from "@/components/magicui/blur-fade";
import { ContactForm } from "@/components/ui/contact-form";
import { Skiper19 } from "@/components/ui/skiper19";
import { cn } from "@/lib/utils";
import { Calendar, MessageSquare, Zap, Clock, CheckCircle } from "lucide-react";

// Lazy load the Cal component
const LazyCal = lazy(() => import('@calcom/embed-react').then(module => ({
  default: module.default || module
})));

export function BookingSection() {
  const [activeTab, setActiveTab] = useState<'call' | 'form'>('call');

  const handleBackToTabs = () => {
    setActiveTab('call');
  };

  return (
    <BlurFade delay={0.1} inView>
      {/* Section needs an ID for navigation */}
      <section className="py-24 relative overflow-hidden" id="booking">
        {/* Simplified Background with Grid */}
        <div className="absolute inset-0 bg-deep-gray/20" />

        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(255, 209, 0, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 209, 0, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }} />
        </div>

        {/* Booking Section Introduction Animation */}
        <Skiper19 />

        <div className="container mx-auto px-4 text-center relative z-10">
          {/* Enhanced subtitle with organic animation */}
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 bg-kiiro-yellow/5 border border-kiiro-yellow rounded-full mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <Zap className="w-4 h-4 text-kiiro-yellow" />
            <span className="text-sm font-medium text-kiiro-yellow">NO TECH JARGON. NO PRESSURE.</span>
          </motion.div>
          
          {/* Main title with staggered animation */}
          <motion.h2 
            className="mb-6 text-3xl sm:text-4xl font-bold md:text-5xl lg:text-6xl tracking-tight text-off-white"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Let&apos;s Turn Your Website Into Your 
            <motion.span 
              className="text-kiiro-yellow"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
            > Best Salesperson</motion.span>
          </motion.h2>
          
          <motion.p 
            className="text-lg sm:text-xl text-off-white/80 max-w-3xl mx-auto mb-8 sm:mb-12 px-4 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Ready to stop losing customers to your competition? Let&apos;s discuss how we can transform 
            your website into a conversion machine that works 24/7.
          </motion.p>

          {/* Enhanced Benefits Before CTA */}
          <div className="grid grid-cols-1 gap-3 mb-12 max-w-4xl mx-auto sm:flex sm:flex-wrap sm:justify-center sm:gap-6">
            <div className="flex items-center gap-2 text-sm text-off-white/80 bg-charcoal-black/30 backdrop-blur-sm px-4 py-2 rounded-full border border-off-white/10">
              <Clock className="w-4 h-4 text-kiiro-yellow" />
              <span>15-minute strategy call</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-off-white/80 bg-charcoal-black/30 backdrop-blur-sm px-4 py-2 rounded-full border border-off-white/10">
              <CheckCircle className="w-4 h-4 text-teal-accent" />
              <span>Free website analysis</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-off-white/80 bg-charcoal-black/30 backdrop-blur-sm px-4 py-2 rounded-full border border-off-white/10">
              <Zap className="w-4 h-4 text-kiiro-yellow" />
              <span>Actionable recommendations</span>
            </div>
          </div>

          {/* Enhanced Tab Navigation */}
          <div className="flex justify-center mb-8 sm:mb-12">
            <div className="bg-charcoal-black/60 backdrop-blur-sm border border-off-white/20 rounded-lg p-1 flex w-full sm:w-auto max-w-sm sm:max-w-none shadow-lg">
              <button
                onClick={() => setActiveTab('call')}
                className={cn(
                  "flex items-center justify-center gap-2 px-3 sm:px-6 py-2 sm:py-3 rounded-md font-medium transition-all duration-300 flex-1 sm:flex-none text-sm sm:text-base",
                  activeTab === 'call'
                    ? "bg-kiiro-yellow text-charcoal-black shadow-lg"
                    : "text-off-white/70 hover:text-off-white hover:bg-off-white/5"
                )}
              >
                <Calendar className="h-4 w-4" />
                <span className="hidden sm:inline">Book a Call</span>
                <span className="sm:hidden">Call</span>
              </button>
              <button
                onClick={() => setActiveTab('form')}
                className={cn(
                  "flex items-center justify-center gap-2 px-3 sm:px-6 py-2 sm:py-3 rounded-md font-medium transition-all duration-300 flex-1 sm:flex-none text-sm sm:text-base",
                  activeTab === 'form'
                    ? "bg-kiiro-yellow text-charcoal-black shadow-lg"
                    : "text-off-white/70 hover:text-off-white hover:bg-off-white/5"
                )}
              >
                <MessageSquare className="h-4 w-4" />
                <span className="hidden sm:inline">Send Message</span>
                <span className="sm:hidden">Message</span>
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="max-w-4xl mx-auto px-4 sm:px-0"
          >
            {activeTab === 'call' ? (
              <div className="space-y-6">
                {/* Simplified Call Description */}
                

                {/* Enhanced Calendar with Better Framing */}
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-kiiro-yellow/20 to-teal-accent/20 rounded-xl blur opacity-60"></div>
                  <div className="relative bg-charcoal-black/80 backdrop-blur-sm p-3 sm:p-6 rounded-xl shadow-2xl border border-off-white/20" style={{ minHeight: '600px' }}>
                    <Suspense fallback={
                      <div className="w-full h-[600px] flex items-center justify-center">
                        <div className="text-center text-off-white/60">
                          <div className="mb-4">
                            <Calendar className="w-12 h-12 mx-auto text-kiiro-yellow mb-2" />
                            <h3 className="text-lg font-semibold">Loading Calendar...</h3>
                          </div>
                          <p className="text-sm">If calendar doesn&apos;t load, please try refreshing the page</p>
                        </div>
                      </div>
                    }>
                      <LazyCal
                        calLink="abdullahsaeed/15min"
                        style={{ width: "100%", height: "600px", overflow: "auto"}}
                        config={{
                          layout: 'month_view',
                          theme: 'dark'
                        }}
                      />
                    </Suspense>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                {/* Enhanced Form Description */}
                

                {/* Enhanced Contact Form */}
                <div className="bg-charcoal-black/60 backdrop-blur-sm border border-off-white/20 rounded-2xl p-4 sm:p-8 md:p-12 shadow-2xl">
                <ContactForm onBack={handleBackToTabs} />
                </div>
              </div>
            )}
          </motion.div>

          {/* Enhanced Bottom Trust Signals */}
          <div className="mt-12 pt-8 border-t border-off-white/20">
            <p className="text-sm text-off-white/60 mb-4">
              Trusted by 15+ businesses • 100% satisfaction rate • Average 197% ROI
            </p>
            <div className="flex justify-center gap-8 text-xs text-off-white/50">
              <span>✓ No long-term contracts</span>
              <span>✓ Transparent pricing</span>
              <span>✓ Fast delivery</span>
            </div>
          </div>
        </div>
      </section>
    </BlurFade>
  );
} 