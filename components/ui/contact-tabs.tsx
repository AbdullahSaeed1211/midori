"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Cal from "@calcom/embed-react";
import { Calendar, MessageSquare, Zap, Send } from "lucide-react";

type TabType = "book" | "message" | "chat";

export function ContactTabs() {
  const [activeTab, setActiveTab] = useState<TabType>("book");

  const tabs = [
    { id: "book", label: "📞 Book a Call", icon: Calendar, description: "15-min free consultation" },
    { id: "message", label: "📝 Send Message", icon: MessageSquare, description: "Detailed inquiries" },
    { id: "chat", label: "💬 Quick Chat", icon: Zap, description: "Instant responses" },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      {/* Tab Navigation */}
      <div className="flex flex-col sm:flex-row bg-charcoal-gray/50 p-2 rounded-xl border border-white/10 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as TabType)}
            className={`relative flex-1 px-6 py-4 rounded-lg text-center transition-all duration-300 ${
              activeTab === tab.id
                ? "bg-kiiro-yellow text-charcoal-black"
                : "text-off-white/70 hover:text-off-white hover:bg-white/5"
            }`}
          >
            <div className="flex flex-col items-center gap-2">
              <span className="text-lg font-medium">{tab.label}</span>
              <span className="text-xs opacity-80">{tab.description}</span>
            </div>
            {activeTab === tab.id && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 bg-kiiro-yellow rounded-lg -z-10"
                transition={{ type: "spring", duration: 0.5 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="bg-charcoal-gray/95 backdrop-blur-sm border border-white/10 rounded-xl p-8">
        {activeTab === "book" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="text-center"
          >
            <div className="mb-6">
              <Calendar className="w-12 h-12 text-kiiro-yellow mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-off-white mb-2">Book a Free Consultation</h3>
              <p className="text-off-white/70 max-w-2xl mx-auto">
                15-minute call where we&apos;ll audit your website live and show you exactly what&apos;s blocking your conversions. 
                <span className="text-kiiro-yellow font-medium"> No pitch, just value.</span>
              </p>
            </div>
            
            {/* Cal.com embed */}
            <div className="bg-deep-gray/50 border border-white/10 rounded-lg p-2 sm:p-4 min-h-[500px]">
              <Cal
                calLink="abdullahsaeed/15min"
                style={{ width: "100%", height: "100%", overflow: "scroll" }}
                config={{
                  layout: 'month_view' 
                }}
              />
            </div>
          </motion.div>
        )}

        {activeTab === "message" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mb-6 text-center">
              <MessageSquare className="w-12 h-12 text-kiiro-yellow mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-off-white mb-2">Send Us a Message</h3>
              <p className="text-off-white/70 max-w-2xl mx-auto">
                Have a detailed question or project in mind? Send us a message and we&apos;ll get back to you within 4 hours with a comprehensive response.
              </p>
            </div>

            <form className="max-w-2xl mx-auto space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-off-white text-sm font-medium mb-2">Name *</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 bg-charcoal-black/50 border border-white/20 rounded-lg text-off-white placeholder:text-off-white/40 focus:outline-none focus:border-kiiro-yellow transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-off-white text-sm font-medium mb-2">Email *</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 bg-charcoal-black/50 border border-white/20 rounded-lg text-off-white placeholder:text-off-white/40 focus:outline-none focus:border-kiiro-yellow transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-off-white text-sm font-medium mb-2">Company</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-charcoal-black/50 border border-white/20 rounded-lg text-off-white placeholder:text-off-white/40 focus:outline-none focus:border-kiiro-yellow transition-colors"
                    placeholder="Your company name"
                  />
                </div>
                <div>
                  <label className="block text-off-white text-sm font-medium mb-2">Budget Range</label>
                  <select className="w-full px-4 py-3 bg-charcoal-black/50 border border-white/20 rounded-lg text-off-white focus:outline-none focus:border-kiiro-yellow transition-colors">
                    <option value="">Select budget range</option>
                    <option value="under-1k">Under $1,000</option>
                    <option value="1k-3k">$1,000 - $3,000</option>
                    <option value="3k-5k">$3,000 - $5,000</option>
                    <option value="5k-plus">$5,000+</option>
                    <option value="not-sure">Not sure yet</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-off-white text-sm font-medium mb-2">Project Details *</label>
                <textarea
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-charcoal-black/50 border border-white/20 rounded-lg text-off-white placeholder:text-off-white/40 focus:outline-none focus:border-kiiro-yellow transition-colors resize-none"
                  placeholder="Tell us about your project, timeline, and what you're looking to achieve..."
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-kiiro-yellow text-charcoal-black font-bold rounded-lg hover:bg-kiiro-yellow/90 transition-colors shadow-lg shadow-kiiro-yellow/25"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
                <p className="text-xs text-off-white/50 mt-3">
                  ⚡ We typically respond within 4 hours during business hours
                </p>
              </div>
            </form>
          </motion.div>
        )}

        {activeTab === "chat" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="text-center"
          >
            <div className="mb-8">
              <Zap className="w-12 h-12 text-kiiro-yellow mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-off-white mb-2">Quick Chat Options</h3>
              <p className="text-off-white/70 max-w-2xl mx-auto">
                Need a quick answer? Reach out through your preferred messaging platform for instant responses during business hours.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <a
                href="https://wa.me/+917398826339?text=Hi! I'm interested in discussing a website project with Kiiro."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500/10 border border-green-500/20 rounded-xl p-6 hover:bg-green-500/20 transition-colors group"
              >
                <div className="text-4xl mb-3">💬</div>
                <h4 className="text-off-white font-semibold mb-2 group-hover:text-green-400 transition-colors">WhatsApp</h4>
                <p className="text-off-white/60 text-sm mb-3">Quick questions and instant responses</p>
                <div className="text-green-400 text-sm font-medium">+91 7398826339</div>
              </a>

              <a
                href="mailto:abdullah.saeed1724@gmail.com?subject=Quick Question About Website Project"
                className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-6 hover:bg-blue-500/20 transition-colors group"
              >
                <div className="text-4xl mb-3">📧</div>
                <h4 className="text-off-white font-semibold mb-2 group-hover:text-blue-400 transition-colors">Email</h4>
                <p className="text-off-white/60 text-sm mb-3">For detailed questions and file sharing</p>
                <div className="text-blue-400 text-sm font-medium">abdullah.saeed1724@gmail.com</div>
              </a>
            </div>

            <div className="mt-8 bg-kiiro-yellow/10 border border-kiiro-yellow/20 rounded-lg p-4 max-w-md mx-auto">
              <p className="text-kiiro-yellow text-sm">
                ⏰ <strong>Business Hours:</strong> Mon-Fri, 9 AM - 6 PM IST<br/>
                📱 For urgent matters, WhatsApp is fastest!
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
} 