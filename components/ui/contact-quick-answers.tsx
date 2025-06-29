"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Clock, DollarSign, Zap, Users } from "lucide-react";

const quickAnswers = [
  {
    id: "pricing",
    icon: DollarSign,
    question: "What does a website cost?",
    answer: "Projects start from $400 and scale based on complexity, speed requirements, and specific use case. We offer transparent, fixed pricing with no hidden fees. Get a custom quote in your free consultation."
  },
  {
    id: "timeline",
    icon: Clock,
    question: "How long does it take?",
    answer: "Most websites are completed in 1-2 weeks from design approval. Rush delivery available if needed. We'll give you an exact timeline during our discovery call."
  },
  {
    id: "process",
    icon: Zap,
    question: "What's the process like?",
    answer: "Simple: Discovery call → Design & build → Launch & support. You'll have direct access to me throughout the project with regular updates and check-ins."
  },
  {
    id: "support",
    icon: Users,
    question: "Do you provide ongoing support?",
    answer: "Yes! All projects include 30 days of post-launch support. We also offer monthly retainer packages for ongoing updates and maintenance."
  }
];

export function ContactQuickAnswers() {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <div className="bg-deep-gray/30 rounded-2xl p-6 border border-off-white/10">
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold text-off-white mb-2">Quick Answers</h3>
        <p className="text-sm text-off-white/70">Common questions answered instantly</p>
      </div>

      <div className="space-y-3">
        {quickAnswers.map((item) => {
          const Icon = item.icon;
          const isOpen = openItem === item.id;
          
          return (
            <div key={item.id} className="border border-off-white/10 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full flex items-center justify-between p-4 text-left hover:bg-off-white/5 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-kiiro-yellow/10 flex items-center justify-center">
                    <Icon className="w-4 h-4 text-kiiro-yellow" />
                  </div>
                  <span className="font-medium text-off-white">{item.question}</span>
                </div>
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="w-4 h-4 text-off-white/60" />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 pb-4 pl-15">
                      <p className="text-off-white/80 leading-relaxed">{item.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      <div className="mt-6 p-4 bg-kiiro-yellow/10 border border-kiiro-yellow/20 rounded-lg text-center">
        <p className="text-sm text-off-white/90 mb-2">Still have questions?</p>
        <p className="text-xs text-off-white/70">Book a free 15-minute call and get all your questions answered</p>
      </div>
    </div>
  );
} 