'use client'; 

import { useState } from "react";
import { motion } from "framer-motion";
import Cal from "@calcom/embed-react";
import { BlurFade } from "@/components/magicui/blur-fade";
import { ContactForm } from "@/components/ui/contact-form";
import { cn } from "@/lib/utils";
import { Calendar, MessageSquare, Zap, Clock, CheckCircle } from "lucide-react";

export function BookingSection() {
  const [activeTab, setActiveTab] = useState<'call' | 'form'>('call');

  const handleBackToTabs = () => {
    setActiveTab('call'); // Navigate back to the call tab by default
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
        
        <div className="container mx-auto px-4 text-center relative z-10">
          {/* Enhanced subtitle with organic animation */}
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 bg-kiiro-yellow/10 border border-kiiro-yellow/20 rounded-full mb-6"
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
          <div className="flex flex-wrap justify-center gap-6 mb-12 max-w-4xl mx-auto">
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
                {/* Enhanced Call Description with Grid Background */}
                <div className="relative bg-gradient-to-br from-kiiro-yellow/15 via-kiiro-yellow/10 to-teal-accent/15 border border-kiiro-yellow/30 rounded-xl p-6 mb-8 overflow-hidden">
                  {/* Grid Background for this section */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                      backgroundImage: `
                        linear-gradient(rgba(255, 209, 0, 0.3) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255, 209, 0, 0.3) 1px, transparent 1px)
                      `,
                      backgroundSize: '20px 20px'
                    }} />
                  </div>
                  
                  {/* Gradient Overlays */}
                  <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-kiiro-yellow/20 to-transparent rounded-full blur-3xl opacity-60" />
                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-teal-accent/20 to-transparent rounded-full blur-2xl opacity-40" />
                  
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-off-white mb-3">
                      What Happens on This Call?
                    </h3>
                    <div className="grid md:grid-cols-3 gap-4 text-left">
                      <div className="bg-charcoal-black/30 backdrop-blur-sm rounded-lg p-4 border border-off-white/10">
                        <div className="w-8 h-8 bg-gradient-to-br from-kiiro-yellow/30 to-kiiro-yellow/20 rounded-full flex items-center justify-center mb-2">
                          <span className="text-kiiro-yellow font-bold text-sm">1</span>
                        </div>
                        <p className="text-sm font-medium text-off-white mb-1">Website Review</p>
                        <p className="text-xs text-off-white/70">I&apos;ll audit your site live and show you what&apos;s blocking conversions</p>
                      </div>
                      <div className="bg-charcoal-black/30 backdrop-blur-sm rounded-lg p-4 border border-off-white/10">
                        <div className="w-8 h-8 bg-gradient-to-br from-teal-accent/30 to-teal-accent/20 rounded-full flex items-center justify-center mb-2">
                          <span className="text-teal-accent font-bold text-sm">2</span>
                        </div>
                        <p className="text-sm font-medium text-off-white mb-1">Strategy Discussion</p>
                        <p className="text-xs text-off-white/70">We&apos;ll discuss your goals and create a roadmap</p>
                      </div>
                      <div className="bg-charcoal-black/30 backdrop-blur-sm rounded-lg p-4 border border-off-white/10">
                        <div className="w-8 h-8 bg-gradient-to-br from-kiiro-yellow/30 to-kiiro-yellow/20 rounded-full flex items-center justify-center mb-2">
                          <span className="text-kiiro-yellow font-bold text-sm">3</span>
                        </div>
                        <p className="text-sm font-medium text-off-white mb-1">Next Steps</p>
                        <p className="text-xs text-off-white/70">Get clear action items whether we work together or not</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Enhanced Calendar */}
                <div className="bg-charcoal-black/60 backdrop-blur-sm p-2 sm:p-4 rounded-lg shadow-2xl border border-off-white/20">
                <Cal
                  calLink="abdullahsaeed/15min"
                  style={{ width: "100%", height: "100%", overflow: "scroll" }}
                  config={{
                    layout: 'month_view' 
                  }}
                />
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                {/* Enhanced Form Description */}
                <div className="relative bg-gradient-to-br from-kiiro-yellow/15 via-kiiro-yellow/10 to-teal-accent/15 border border-kiiro-yellow/30 rounded-xl p-6 mb-8 overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,209,0,0.1),transparent_70%)]" />
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-off-white mb-3">
                      Prefer to Send a Message?
                    </h3>
                    <p className="text-off-white/80">
                      Not ready for a call? No problem. Tell us about your project and we&apos;ll send you 
                      a detailed proposal with pricing and timeline within 24 hours.
                    </p>
                  </div>
                </div>

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