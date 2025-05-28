'use client'; 

import { useState } from "react";
import { motion } from "framer-motion";
import Cal from "@calcom/embed-react";
import { BlurFade } from "@/components/magicui/blur-fade";
import { ContactForm } from "@/components/ui/contact-form";
import { cn } from "@/lib/utils";
import { Calendar, MessageSquare } from "lucide-react";

export function BookingSection() {
  const [activeTab, setActiveTab] = useState<'call' | 'form'>('call');

  return (
    <BlurFade delay={0.1} inView>
      {/* Section needs an ID for navigation */}
      <section className="py-24 bg-charcoal-black text-off-white" id="booking">
        <div className="container mx-auto px-4 text-center">
          {/* Updated subtitle style for consistency */}
          <p className="mb-3 text-xs uppercase tracking-[0.25em] text-kiiro-yellow font-semibold">
            Get Started
          </p>
          {/* Main title */}
          <h2 className="mb-6 text-3xl sm:text-4xl font-bold md:text-5xl lg:text-6xl tracking-tight text-off-white">
            Let&apos;s discuss your project!
          </h2>
          <p className="text-lg sm:text-xl text-off-white/80 max-w-2xl mx-auto mb-8 sm:mb-12 px-4 sm:px-0">
            Choose your preferred way to get in touch. We&apos;re here to help bring your vision to life.
          </p>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-6 sm:mb-8 px-4 sm:px-0">
            <div className="bg-charcoal-black/50 border border-off-white/10 rounded-lg p-1 flex w-full sm:w-auto max-w-sm sm:max-w-none">
              <button
                onClick={() => setActiveTab('call')}
                className={cn(
                  "flex items-center justify-center gap-2 px-3 sm:px-6 py-2 sm:py-3 rounded-md font-medium transition-all duration-300 flex-1 sm:flex-none text-sm sm:text-base",
                  activeTab === 'call'
                    ? "bg-kiiro-yellow text-charcoal-black"
                    : "text-off-white/70 hover:text-off-white"
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
                    ? "bg-kiiro-yellow text-charcoal-black"
                    : "text-off-white/70 hover:text-off-white"
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
              <div className="bg-deep-gray p-2 sm:p-4 rounded-lg shadow-lg border border-code-black-700">
                <Cal
                  calLink="abdullahsaeed/15min"
                  style={{ width: "100%", height: "100%", overflow: "scroll" }}
                  config={{
                    layout: 'month_view' 
                  }}
                />
              </div>
            ) : (
              <div className="bg-charcoal-black/50 border border-off-white/10 rounded-2xl p-4 sm:p-8 md:p-12">
                <ContactForm />
              </div>
            )}
          </motion.div>
        </div>
      </section>
    </BlurFade>
  );
} 