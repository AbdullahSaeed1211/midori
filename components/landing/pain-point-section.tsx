"use client";

import { AlertTriangle, TrendingDown, Clock, DollarSign, X } from "lucide-react";
import { BlurFade } from "@/components/magicui/blur-fade";
import { motion } from "framer-motion";

interface PainPointProps {
  icon: React.ElementType;
  title: string;
  description: string;
  cost: string;
  realCost: string;
  delay?: number;
}

function PainPointCard({ icon: Icon, title, description, cost, realCost, delay = 0 }: PainPointProps) {
  return (
    <BlurFade delay={delay} inView>
      <motion.div
        className="h-full bg-deep-gray/30 border border-red-500/20 rounded-xl p-6 group hover:border-red-400/40 transition-all duration-300 flex flex-col"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.6 }}
        whileHover={{ scale: 1.02, y: -2 }}
      >
        {/* Red warning glow */}
        <div className="absolute inset-0 bg-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <div className="relative flex items-start gap-4 flex-grow">
          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center border border-red-500/30">
            <Icon className="w-6 h-6 text-red-400" />
          </div>
          <div className="flex-1 flex flex-col h-full">
            <h3 className="text-xl font-bold text-off-white mb-3 group-hover:text-red-100 transition-colors">{title}</h3>
            <p className="text-off-white/80 mb-4 leading-relaxed flex-grow">{description}</p>
            <div className="space-y-2 mt-auto">
              <div className="text-red-400 font-bold text-lg">{cost}</div>
              <div className="text-red-300/80 text-sm font-medium">{realCost}</div>
            </div>
          </div>
        </div>
        
        {/* Subtle danger indicator */}
        <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity">
          <X className="w-5 h-5 text-red-500" />
        </div>
      </motion.div>
    </BlurFade>
  );
}

export function PainPointSection() {
  const painPoints: PainPointProps[] = [
    {
      icon: TrendingDown,
      title: "Your Business Lacks Professional Credibility",
      description: "Without a professional website, potential customers question your legitimacy. You lose sales before they even hear your pitch. Course creators and entrepreneurs especially struggle to convert social media followers into paying customers.",
      cost: "Lost Sales: $2,000-$10,000 monthly",
      realCost: "Plus the credibility gap that's impossible to measure",
      delay: 0.1
    },
    {
      icon: Clock,
      title: "Hours Wasted on Content With No Conversion",
      description: "You're creating amazing content, doing cold outreach, and building an audience - but when they visit your social profiles, there's nowhere professional to send them. All that effort with no proper funnel to capture leads.",
      cost: "Wasted Effort: 20+ hours weekly",
      realCost: "Content that could be converting isn't",
      delay: 0.2
    },
    {
      icon: DollarSign,
      title: "Prospects Can't Find Answers to Buy From You",
      description: "Your ideal customers want to know: What exactly do you offer? How much does it cost? Why should they choose you? Without a proper website, they're left guessing - and they choose competitors with clear answers.",
      cost: "Missed Opportunities: $5,000-$15,000 monthly",
      realCost: "Qualified prospects who never become customers",
      delay: 0.3
    },
    {
      icon: AlertTriangle,
      title: "Social Media Isn't a Business Foundation",
      description: "Instagram and TikTok are great for awareness, but terrible for conversion. You need a professional hub where prospects can learn about you, see your credibility, and take action. Social media alone won't build a sustainable business.",
      cost: "Platform Dependency Risk: Your entire business",
      realCost: "One algorithm change kills your reach",
      delay: 0.4
    }
  ];

  return (
    <section className="py-24 bg-charcoal-black text-off-white relative overflow-hidden" id="pain-points">
      {/* Subtle red background accent */}
      <div className="absolute top-0 left-0 w-1/3 h-1/2 bg-gradient-to-br from-red-500/3 to-transparent rounded-br-full blur-3xl" />
      
      <div className="container px-4 mx-auto relative max-w-7xl">
        <BlurFade delay={0.1} inView>
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 text-red-400 text-sm font-medium mb-6 border border-red-500/20"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <AlertTriangle className="w-4 h-4" />
              The Hidden Cost of Poor Websites
            </motion.div>
            
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-6 text-off-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Your Website Is <span className="text-red-400">Costing You Money</span> Every Day
            </motion.h2>
            
            <motion.p 
              className="text-xl text-off-white/80 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Every minute without a professional website, you&apos;re <span className="text-red-400 font-semibold">losing credibility and customers</span> to 
              competitors who understand that people buy from businesses they trust. 
            </motion.p>
            
            {/* Visual break with icons */}
            <div className="flex justify-center items-center gap-4 mt-6 mb-8">
              <div className="flex items-center gap-2 text-red-400">
                <TrendingDown className="w-5 h-5" />
                <span className="text-sm font-medium">Lost Credibility</span>
              </div>
              <div className="w-2 h-2 bg-red-400 rounded-full"></div>
              <div className="flex items-center gap-2 text-red-400">
                <Clock className="w-5 h-5" />
                <span className="text-sm font-medium">Wasted Effort</span>
              </div>
              <div className="w-2 h-2 bg-red-400 rounded-full"></div>
              <div className="flex items-center gap-2 text-red-400">
                <DollarSign className="w-5 h-5" />
                <span className="text-sm font-medium">Missed Sales</span>
              </div>
            </div>
          </div>
        </BlurFade>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto mb-16">
          {painPoints.map((painPoint, index) => (
            <div key={index} className="h-full">
              <PainPointCard {...painPoint} />
            </div>
          ))}
        </div>

        <BlurFade delay={0.5} inView>
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            <div className="p-8 rounded-xl border border-red-500/30 bg-charcoal-black/80 relative overflow-hidden">
              {/* Danger background */}
              <div className="absolute inset-0 bg-red-500/5" />
              
              <div className="relative">
                <h3 className="text-2xl font-bold text-off-white mb-4">
                  The Real Cost: <span className="text-red-400">$100,000+ Annually</span>
                </h3>
                <p className="text-lg text-off-white/80 mb-6">
                  While you&apos;re reading this, your competitors with optimized websites are capturing the customers 
                  you should be serving. <span className="text-red-400 font-bold">Every day you wait multiplies the damage.</span>
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  <div className="p-4 rounded-lg bg-red-950/30 border border-red-500/20">
                    <div className="text-2xl font-bold text-red-400 mb-1">73%</div>
                    <div className="text-sm text-off-white/70">of visitors leave without converting</div>
                  </div>
                  <div className="p-4 rounded-lg bg-red-950/30 border border-red-500/20">
                    <div className="text-2xl font-bold text-red-400 mb-1">6 months</div>
                    <div className="text-sm text-off-white/70">average agency project timeline</div>
                  </div>
                  <div className="p-4 rounded-lg bg-red-950/30 border border-red-500/20">
                    <div className="text-2xl font-bold text-red-400 mb-1">$25K+</div>
                    <div className="text-sm text-off-white/70">typical agency overcharge</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </BlurFade>

        <BlurFade delay={0.6} inView>
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <p className="text-lg text-off-white/80 mb-6">
              But here&apos;s the good news...
            </p>
            <motion.div
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-kiiro-yellow/20 text-kiiro-yellow border border-kiiro-yellow/30 shadow-lg"
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.5, type: "spring" }}
              whileHover={{ scale: 1.05 }}
            >
              <span className="font-bold">We fix ALL of this in 2-4 weeks, not 6 months</span>
            </motion.div>
            <p className="text-sm text-off-white/60 mt-3">
              Stop the bleeding. Start converting.
            </p>
          </motion.div>
        </BlurFade>
      </div>
    </section>
  );
} 