"use client";

import { Check, X, AlertCircle, ChevronDown, Clock, Star, Award, Zap, Shield, Users, TrendingUp } from "lucide-react";
import { BlurFade } from "@/components/magicui/blur-fade";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";


interface PlanData {
  id: string;
  title: string;
  shortDesc: string;
  price: string;
  originalPrice: string;
  deliveryTime: string;
  spotsLeft: number;
  badge: string;
  features: string[];
  whatsIncluded: {
    design: string[];
    technical: string[];
    support: string[];
  };
  idealFor: string[];
  results: string;
  caseStudy: string;
}

function EnhancedPricingCard({ plan, index, expandedPlan, setExpandedPlan }: {
  plan: PlanData;
  index: number;
  expandedPlan: string | null;
  setExpandedPlan: (id: string | null) => void;
}) {
  const isExpanded = expandedPlan === plan.id;
  const isPopular = plan.id === "professional";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn(
        "rounded-2xl p-8 h-full flex flex-col border relative transition-all duration-300 cursor-pointer",
        isPopular
          ? "border-kiiro-yellow/50 bg-kiiro-yellow/5 shadow-xl shadow-kiiro-yellow/10"
          : "border-white/10 bg-white/[0.02] backdrop-blur-md hover:bg-white/[0.05] hover:border-white/20"
      )}
      onClick={() => setExpandedPlan(isExpanded ? null : plan.id)}
    >
      {/* Popular Badge */}
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
          <div className="bg-kiiro-yellow text-charcoal-black text-sm font-black px-4 py-2 rounded-full shadow-xl flex items-center gap-2">
            <Star className="w-4 h-4 fill-current" />
            MOST POPULAR
          </div>
        </div>
      )}

      {/* Founding Client Badge */}
      <div className="absolute -top-3 -right-3 z-10">
        <div className="bg-red-500 text-off-white text-xs font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
          <Zap className="w-3 h-3" />
          FOUNDING
        </div>
      </div>

      {/* Header */}
      <div className="mb-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-2xl font-bold mb-2 text-off-white">{plan.title}</h3>
            <p className="text-off-white/70 text-sm">{plan.shortDesc}</p>
          </div>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown className="h-6 w-6 text-off-white/60" />
          </motion.div>
        </div>

        {/* Pricing */}
        <div className="space-y-2">
          <div className="flex items-baseline gap-3">
            <span className="text-4xl font-black text-off-white">{plan.price}</span>
            {plan.originalPrice !== "Market Rate" && (
              <span className="text-lg text-off-white/50 line-through">{plan.originalPrice}</span>
            )}
          </div>

          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-1 text-kiiro-yellow">
              <Clock className="w-4 h-4" />
              <span>{plan.deliveryTime}</span>
            </div>
            <div className="flex items-center gap-1 text-red-400">
              <AlertCircle className="w-4 h-4" />
              <span>{plan.spotsLeft} spots left</span>
            </div>
          </div>
        </div>
      </div>

      {/* Key Features Preview */}
      <div className="mb-6 flex-grow">
        <div className="grid grid-cols-1 gap-3 mb-4">
          {plan.features.slice(0, 4).map((feature: string, idx: number) => (
            <div key={idx} className="flex items-center gap-3">
              <Check className="h-4 w-4 text-kiiro-yellow flex-shrink-0" />
              <span className="text-off-white/80 text-sm">{feature}</span>
            </div>
          ))}
          {plan.features.length > 4 && (
            <div className="text-kiiro-yellow text-sm font-medium">
              +{plan.features.length - 4} more features...
            </div>
          )}
        </div>
      </div>

      {/* CTA Button */}
      <motion.a
        href="#booking"
        className={cn(
          "inline-flex items-center justify-center px-6 py-4 rounded-xl font-bold text-lg transition-all duration-300 mb-4",
          isPopular
            ? "bg-kiiro-yellow text-charcoal-black hover:bg-kiiro-yellow/90 shadow-lg shadow-kiiro-yellow/25 hover:shadow-kiiro-yellow/40 hover:scale-105"
            : "bg-transparent text-off-white border-2 border-kiiro-yellow hover:bg-kiiro-yellow/10"
        )}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {isPopular ? "Get Started Now" : "Learn More"}
        <ChevronDown className="ml-2 h-5 w-5" />
      </motion.a>

      {/* Expandable Content */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="border-t border-white/10 pt-6 space-y-6">
              {/* What's Included */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-off-white flex items-center gap-2">
                  <Shield className="w-5 h-5 text-kiiro-yellow" />
                  What&apos;s Included
                </h4>

                <div className="grid gap-4">
                  <div className="space-y-2">
                    <h5 className="text-sm font-medium text-kiiro-yellow flex items-center gap-2">
                      <Zap className="w-4 h-4" />
                      Design & User Experience
                    </h5>
                    <ul className="space-y-1 ml-6">
                      {plan.whatsIncluded.design.map((item: string, idx: number) => (
                        <li key={idx} className="text-sm text-off-white/70 flex items-center gap-2">
                          <Check className="w-3 h-3 text-green-400" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <h5 className="text-sm font-medium text-kiiro-yellow flex items-center gap-2">
                      <Award className="w-4 h-4" />
                      Technical Implementation
                    </h5>
                    <ul className="space-y-1 ml-6">
                      {plan.whatsIncluded.technical.map((item: string, idx: number) => (
                        <li key={idx} className="text-sm text-off-white/70 flex items-center gap-2">
                          <Check className="w-3 h-3 text-green-400" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <h5 className="text-sm font-medium text-kiiro-yellow flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      Support & Maintenance
                    </h5>
                    <ul className="space-y-1 ml-6">
                      {plan.whatsIncluded.support.map((item: string, idx: number) => (
                        <li key={idx} className="text-sm text-off-white/70 flex items-center gap-2">
                          <Check className="w-3 h-3 text-green-400" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Ideal For */}
              <div className="bg-kiiro-yellow/5 border border-kiiro-yellow/20 rounded-xl p-4">
                <h5 className="text-sm font-semibold text-kiiro-yellow mb-3">Perfect For:</h5>
                <div className="flex flex-wrap gap-2">
                  {plan.idealFor.map((item: string, idx: number) => (
                    <span key={idx} className="bg-kiiro-yellow/10 text-kiiro-yellow px-3 py-1 rounded-full text-xs font-medium">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Results & Case Study */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
                  <TrendingUp className="w-5 h-5 text-green-400" />
                  <div>
                    <div className="text-green-400 font-bold text-sm">Average Results</div>
                    <div className="text-green-400/80 text-xs">{plan.results}</div>
                  </div>
                </div>

                <div className="p-3 bg-purple-accent/10 border border-purple-accent/20 rounded-lg">
                  <div className="text-purple-accent font-semibold text-sm mb-1">Real Case Study</div>
                  <div className="text-off-white/70 text-sm">{plan.caseStudy}</div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

interface Feature {
  name: string;
  onetime: boolean | string;
  retainer: boolean | string;
}

const pricingFeatures: Feature[] = [
  { name: "Website Development", onetime: true, retainer: true },
  { name: "SEO Optimization", onetime: "Basic", retainer: "Advanced" },
  { name: "Mobile Optimization", onetime: true, retainer: true },
  { name: "Performance Testing", onetime: true, retainer: true },
  { name: "Content Management System", onetime: true, retainer: true },
  { name: "Contact Form Integration", onetime: true, retainer: true },
  { name: "Google Analytics Setup", onetime: true, retainer: true },
  { name: "Social Media Integration", onetime: true, retainer: true },
  { name: "Monthly Maintenance", onetime: false, retainer: true },
  { name: "Regular SEO Updates", onetime: false, retainer: true },
  { name: "Content Updates", onetime: false, retainer: true },
  { name: "Performance Monitoring", onetime: false, retainer: true },
  { name: "Monthly Analytics Reports", onetime: false, retainer: true },
  { name: "24/7 Support", onetime: false, retainer: true },
  { name: "Continuous Optimization", onetime: false, retainer: true },
];

const detailedPricingPlans = [
  {
    id: "starter",
    title: "Starter Package",
    shortDesc: "Perfect for new businesses and entrepreneurs",
    price: "Starting from $400",
    originalPrice: "$800",
    deliveryTime: "7-10 days",
    spotsLeft: 8,
    badge: "Most Popular for New Businesses",
    features: [
      "Professional website design",
      "Mobile-responsive layout",
      "Basic SEO optimization",
      "Contact form integration",
      "Google Analytics setup",
      "30-day free support",
      "Unlimited revisions"
    ],
    whatsIncluded: {
      design: ["Custom homepage design", "3-5 additional pages", "Mobile-first approach", "Brand-aligned styling"],
      technical: ["Fast loading optimization", "SEO-friendly structure", "Secure hosting setup", "Basic performance monitoring"],
      support: ["30-day warranty", "Post-launch support", "Training session", "Handover documentation"]
    },
    idealFor: ["New entrepreneurs", "Service providers", "Small local businesses", "Course creators"],
    results: "340% average conversion increase",
    caseStudy: "Service business increased leads by 280% in first month"
  },
  {
    id: "professional",
    title: "Professional Package",
    shortDesc: "Advanced features for growing businesses",
    price: "Starting from $600",
    originalPrice: "$1,200",
    deliveryTime: "10-14 days",
    spotsLeft: 5,
    badge: "Best Value - Most Popular",
    features: [
      "Everything in Starter",
      "Advanced SEO optimization",
      "E-commerce integration",
      "Custom animations",
      "Advanced analytics",
      "Conversion optimization",
      "Multi-language support",
      "60-day free support"
    ],
    whatsIncluded: {
      design: ["Advanced UI/UX design", "Interactive elements", "Custom animations", "Conversion-focused layout"],
      technical: ["Advanced SEO setup", "E-commerce functionality", "Performance optimization", "Advanced analytics"],
      support: ["60-day warranty", "Monthly maintenance", "Priority support", "Strategy sessions"]
    },
    idealFor: ["Growing businesses", "E-commerce stores", "Professional services", "Consultants"],
    results: "420% average conversion increase",
    caseStudy: "E-commerce store increased sales by 350% after launch"
  },
  {
    id: "enterprise",
    title: "Enterprise Package",
    shortDesc: "Custom solutions for established businesses",
    price: "Custom Quote",
    originalPrice: "Market Rate",
    deliveryTime: "2-4 weeks",
    spotsLeft: 3,
    badge: "Custom Solutions",
    features: [
      "Everything in Professional",
      "Custom development",
      "Advanced integrations",
      "Scalable architecture",
      "Dedicated account manager",
      "Monthly strategy calls",
      "Priority feature requests",
      "90-day free support"
    ],
    whatsIncluded: {
      design: ["Custom design system", "Advanced interactions", "Brand integration", "User research"],
      technical: ["Custom development", "API integrations", "Scalable architecture", "Advanced security"],
      support: ["90-day warranty", "Dedicated support", "Monthly reviews", "Strategic partnership"]
    },
    idealFor: ["Established businesses", "Complex requirements", "High-traffic sites", "Enterprise clients"],
    results: "500%+ average conversion increase",
    caseStudy: "Enterprise client achieved 600% ROI in first quarter"
  }
];

const FeatureRow = ({ feature, index }: { feature: Feature; index: number }) => {
  return (
    <motion.tr 
      className={cn(
        "border-b border-slate-200/10",
        index % 2 === 0 ? "bg-deep-gray/30" : "bg-transparent"
      )}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.03, duration: 0.5 }}
      viewport={{ once: true }}
    >
      <td className="py-4 px-6 text-off-white">{feature.name}</td>
      <td className="py-4 px-6 text-center">
        {typeof feature.onetime === "boolean" ? (
          feature.onetime ? (
            <Check className="mx-auto h-5 w-5 text-kiiro-yellow" />
          ) : (
            <X className="mx-auto h-5 w-5 text-red-500/60" />
          )
        ) : (
          <span className="text-kiiro-yellow">{feature.onetime}</span>
        )}
      </td>
      <td className="py-4 px-6 text-center">
        {typeof feature.retainer === "boolean" ? (
          feature.retainer ? (
            <Check className="mx-auto h-5 w-5 text-kiiro-yellow" />
          ) : (
            <X className="mx-auto h-5 w-5 text-red-500/60" />
          )
        ) : (
          <span className="text-kiiro-yellow font-medium">{feature.retainer}</span>
        )}
      </td>
    </motion.tr>
  );
};

export function PricingSection() {
  const [expandedPlan, setExpandedPlan] = useState<string | null>(null);

  return (
    <BlurFade inView>
      <section className="py-24 bg-charcoal-black text-off-white" id="pricing">
        <div className="container px-4 mx-auto max-w-7xl">
          {/* Header */}
          <div className="flex flex-col items-center text-center mb-16 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="px-6 py-2 rounded-full bg-kiiro-yellow/10 text-kiiro-yellow text-sm font-bold mb-6 border border-kiiro-yellow/30 flex items-center gap-2"
            >
              <Award className="w-4 h-4" />
              FOUNDING CLIENT PRICING
            </motion.div>

            <h2 className="text-4xl md:text-6xl font-black mb-6 text-off-white leading-tight">
              Choose Your <span className="text-kiiro-yellow">Growth Package</span>
            </h2>

            <p className="text-xl text-off-white/80 max-w-3xl leading-relaxed mb-8">
              Click any package below to see exactly what&apos;s included, who&apos;s it perfect for, and real results from similar businesses.
            </p>

            {/* Value Proposition */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-r from-red-500/10 via-kiiro-yellow/10 to-green-500/10 border border-kiiro-yellow/20 rounded-2xl p-8 max-w-5xl mx-auto"
            >
              <div className="text-center space-y-4">
                <h3 className="text-2xl font-bold text-off-white">
                  🚨 These Prices Won&apos;t Last Forever
                </h3>
                <p className="text-lg text-off-white/90">
                  We&apos;re currently accepting founding clients at special introductory rates.
                  Once we hit capacity, these prices will increase by 2-3x.
                </p>
                <div className="flex justify-center items-center gap-6 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-green-400 font-medium">16 spots remaining total</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse" />
                    <span className="text-red-400 font-medium">Prices increase soon</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Enhanced Pricing Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
            {detailedPricingPlans.map((plan, index) => (
              <EnhancedPricingCard
                key={plan.id}
                plan={plan}
                index={index}
                expandedPlan={expandedPlan}
                setExpandedPlan={setExpandedPlan}
              />
            ))}
          </div>

          {/* Feature Comparison Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-6xl mx-auto mb-16"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-off-white mb-4">Detailed Feature Comparison</h3>
              <p className="text-off-white/70">Everything you need to make the right choice</p>
            </div>

            <div className="overflow-x-auto rounded-xl border border-kiiro-yellow/10 shadow-lg shadow-kiiro-yellow/5">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-kiiro-yellow/10 border-b border-kiiro-yellow/20">
                    <th className="py-4 px-6 text-left font-semibold text-off-white">Features</th>
                    <th className="py-4 px-6 text-center font-semibold text-off-white">
                      <div className="space-y-1">
                        <div className="text-kiiro-yellow font-bold">Starter</div>
                        <div className="text-xs text-off-white/60">$400</div>
                      </div>
                    </th>
                    <th className="py-4 px-6 text-center font-semibold text-off-white">
                      <div className="space-y-1">
                        <div className="text-kiiro-yellow font-bold">Professional</div>
                        <div className="text-xs text-off-white/60">$600</div>
                        <div className="text-xs text-green-400 font-medium">Most Popular</div>
                      </div>
                    </th>
                    <th className="py-4 px-6 text-center font-semibold text-off-white">
                      <div className="space-y-1">
                        <div className="text-kiiro-yellow font-bold">Enterprise</div>
                        <div className="text-xs text-off-white/60">Custom</div>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {pricingFeatures.map((feature, index) => (
                    <FeatureRow key={feature.name} feature={feature} index={index} />
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center space-y-8"
          >
            <div className="bg-gradient-to-r from-kiiro-yellow/10 via-transparent to-kiiro-yellow/10 border border-kiiro-yellow/20 rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-off-white mb-4">
                Ready to Transform Your Business?
              </h3>
              <p className="text-lg text-off-white/80 mb-6">
                Don&apos;t let another day pass with a website that isn&apos;t working for you. Secure your founding client spot today and get started on the path to real results.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <motion.a
                  href="#booking"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-kiiro-yellow text-charcoal-black font-bold text-lg rounded-xl hover:bg-kiiro-yellow/90 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-kiiro-yellow/20"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Claim Your Founding Spot
                  <Zap className="h-5 w-5" />
                </motion.a>

                <div className="flex items-center gap-2 text-sm text-off-white/60">
                  <Shield className="h-4 w-4 text-green-400" />
                  <span>30-day money-back guarantee • No risk</span>
                </div>
              </div>

              <div className="text-sm text-off-white/50">
                💡 <strong>Pro tip:</strong> Most clients see their first results within 7 days of launch
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </BlurFade>
  );
} 