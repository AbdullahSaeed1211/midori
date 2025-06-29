"use client";

import { Check, X, AlertCircle } from "lucide-react";
import { BlurFade } from "@/components/magicui/blur-fade";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useState } from "react";

interface PricingOptionCardProps {
  title: string;
  description: string;
  price: string;
  features: string[];
  featureLabel: string;
  cta: string;
  ctaLink: string;
  highlighted?: boolean;
  limitedSpots?: number;
}

function PricingOptionCard({
  title,
  description,
  price,
  features,
  featureLabel,
  cta,
  ctaLink,
  highlighted = false,
  limitedSpots,
}: PricingOptionCardProps) {
  return (
    <div 
      className={cn(
        "rounded-xl p-8 h-full flex flex-col border relative",
        highlighted 
          ? "border-kiiro-yellow/30 bg-kiiro-yellow/5 shadow-lg shadow-kiiro-yellow/10" 
          : "border-slate-200/10 bg-deep-gray/50"
      )}
    >
      {/* Limited-time offer badge */}
      {limitedSpots && (
        <div className={cn(
          "absolute z-10",
          highlighted 
            ? "-top-3 -left-3" // Position on left when highlighted (to avoid collision with MOST POPULAR)
            : "-top-3 -right-3" // Position on right when not highlighted
        )}>
          <div className="bg-kiiro-yellow text-charcoal-black text-xs font-bold px-2.5 py-1 rounded-md shadow-lg flex items-center gap-1">
            <AlertCircle className="h-3 w-3" /> 
            <span className="hidden sm:inline">Founding Client Pricing</span>
            <span className="sm:hidden">Founding</span>
          </div>
        </div>
      )}
      
      {/* Most Popular Badge for highlighted option */}
      {highlighted && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
          <div className="bg-white text-black text-xs font-bold px-3 py-1 rounded-full shadow-lg">
            ⭐ <span className="hidden sm:inline">MOST POPULAR</span><span className="sm:hidden">TOP</span>
          </div>
        </div>
      )}
      
      <div className="mb-6">
        <h3 className="text-2xl font-bold mb-2 text-off-white">{title}</h3>
        <p className="text-off-white/70">{description}</p>
      </div>
      
      <div className="mb-6">
        <div className="flex flex-col gap-1">
          <div className="text-3xl font-bold text-off-white">{price}</div>
        </div>
        
        {/* Limited spots counter */}
        {limitedSpots && (
          <div className="mt-2 text-sm text-kiiro-yellow">
            <span className="font-medium">{limitedSpots} spots available</span> at this rate
          </div>
        )}
      </div>
      
      <div className="mb-8 flex-grow">
        <p className="text-sm font-medium text-off-white mb-4">{featureLabel}</p>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <Check className="h-5 w-5 text-kiiro-yellow shrink-0 mt-0.5" />
              <span className="text-off-white/80">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <a
        href={ctaLink}
        className={cn(
          "inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all duration-300",
          highlighted
            ? "bg-kiiro-yellow text-charcoal-black hover:bg-kiiro-yellow/90 shadow-lg shadow-kiiro-yellow/25 hover:shadow-kiiro-yellow/40 transform hover:scale-105"
            : "bg-deep-gray hover:bg-deep-gray/80 text-off-white border border-kiiro-yellow/20"
        )}
      >
        {cta}
      </a>
      
      {/* Microcopy under CTA */}
      <p className="text-xs text-off-white/60 text-center mt-3">
        {highlighted 
          ? "⚡ Takes 30 seconds. No pressure, just insights." 
          : "📞 Quick 15-minute call to discuss your needs"
        }
      </p>
    </div>
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
  const [view, setView] = useState<"cards" | "table">("table");

  return (
    <BlurFade inView>
      <section className="py-24 bg-charcoal-black text-off-white" id="detailed-pricing">
        <div className="container px-4 mx-auto max-w-7xl">
          <div className="flex flex-col items-center text-center mb-16 max-w-3xl mx-auto">
            <div className="px-4 py-1.5 rounded-full bg-kiiro-yellow/10 text-kiiro-yellow text-sm font-medium mb-6 border border-kiiro-yellow/20">
              Detailed Pricing Comparison
            </div>
            <h2 className="text-4xl font-bold md:text-5xl mb-6 text-off-white">
              Compare Our Service Plans
            </h2>
            <p className="text-xl text-off-white/80 max-w-2xl">
              Get a comprehensive view of our offerings to find the perfect fit for your business needs.
            </p>
            
            {/* Value Anchoring */}
            <div className="bg-kiiro-yellow/10 border border-kiiro-yellow/20 rounded-lg p-6 mb-8 max-w-4xl mx-auto">
              <p className="text-kiiro-yellow font-medium text-lg mb-3">
                💰 What would a professional website be worth to your business?
              </p>
              <p className="text-off-white/90">
                Stop spending hours on content and cold outreach while your prospects can&apos;t find a credible website that answers their questions and shows why they should choose you. Whether you&apos;re launching your first business or scaling an existing one, a professional website is the foundation that makes all your other marketing efforts actually work.
              </p>
            </div>
            
            <div className="mt-8 bg-deep-gray/30 p-1.5 rounded-lg flex overflow-hidden border border-kiiro-yellow/10">
              {["table", "cards"].map((v) => (
                <button
                  key={v}
                  className={cn(
                    "relative px-8 py-2 text-sm font-medium rounded-md transition-all duration-200",
                    view === v 
                      ? "text-off-white bg-kiiro-yellow/20" 
                      : "text-off-white/60 hover:text-off-white"
                  )}
                  onClick={() => setView(v as "cards" | "table")}
                >
                  {v.charAt(0).toUpperCase() + v.slice(1)} View
                  {view === v && (
                    <motion.div
                      layoutId="viewIndicator"
                      className="absolute inset-0 bg-kiiro-yellow/20 rounded-md -z-10"
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          {view === "table" ? (
            <div className="max-w-5xl mx-auto overflow-x-auto rounded-xl border border-kiiro-yellow/10 shadow-lg shadow-kiiro-yellow/5">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-kiiro-yellow/10 border-b border-kiiro-yellow/20">
                    <th className="py-5 px-6 text-left font-medium text-off-white">Features</th>
                    <th className="py-5 px-6 text-center font-medium text-off-white">
                      <div className="flex flex-col items-center gap-1">
                        <div>One-off (Starting from $400)</div>
                        <div className="text-xs text-kiiro-yellow font-normal">8 spots left</div>
                      </div>
                    </th>
                    <th className="py-5 px-6 text-center font-medium text-off-white">
                      <div className="flex flex-col items-center gap-1">
                        <div>Retainer (Starting from $500/mo)</div>
                        <div className="text-xs text-kiiro-yellow font-normal">5 spots left</div>
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
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <PricingOptionCard
                  title="One-off Project"
                  description="Perfect for businesses needing a professional website without ongoing commitments."
                  price="Starting from $400"
                  features={pricingFeatures
                    .filter(f => f.onetime)
                    .map(f => typeof f.onetime === "string" ? `${f.name} (${f.onetime})` : f.name)}
                  featureLabel="Included in package:"
                  cta="Get Custom Quote"
                  ctaLink="#booking"
                  limitedSpots={8}
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <PricingOptionCard
                  title="Monthly Retainer"
                  description="Ideal for businesses requiring ongoing support and continuous improvement."
                  price="Starting from $500/mo"
                  features={pricingFeatures
                    .filter(f => f.retainer)
                    .map(f => typeof f.retainer === "string" ? `${f.name} (${f.retainer})` : f.name)}
                  featureLabel="Everything in One-off plus:"
                  cta="Schedule a Call"
                  ctaLink="#booking"
                  highlighted
                  limitedSpots={5}
                />
              </motion.div>
            </div>
          )}

          <div className="mt-16 text-center">
            <div className="bg-kiiro-yellow/10 p-4 rounded-lg border border-kiiro-yellow/20 inline-block mb-8">
              <p className="text-kiiro-yellow font-medium">
                Limited-time founding client pricing — secure your spot before rates increase
              </p>
            </div>
            <p className="text-off-white/80 max-w-2xl mx-auto mb-4">
              Need a custom solution? We offer tailored packages to meet your specific requirements.
            </p>
            <motion.a
              href="#booking"
              className="inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-off-white bg-kiiro-yellow hover:bg-kiiro-yellow/90 rounded-lg transition-colors duration-300 shadow-lg shadow-kiiro-yellow/10"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Contact for Custom Quote
            </motion.a>
          </div>
        </div>
      </section>
    </BlurFade>
  );
} 