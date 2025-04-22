"use client";

import { Check, X } from "lucide-react";
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
}: PricingOptionCardProps) {
  return (
    <div 
      className={cn(
        "rounded-xl p-8 h-full flex flex-col border",
        highlighted 
          ? "border-verdant-green/30 bg-verdant-green/5 shadow-lg shadow-verdant-green/10" 
          : "border-slate-200/10 bg-deep-gray/50"
      )}
    >
      <div className="mb-6">
        <h3 className="text-2xl font-bold mb-2 text-off-white">{title}</h3>
        <p className="text-off-white/70">{description}</p>
      </div>
      
      <div className="mb-6">
        <div className="text-3xl font-bold text-off-white">{price}</div>
      </div>
      
      <div className="mb-8 flex-grow">
        <p className="text-sm font-medium text-off-white mb-4">{featureLabel}</p>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <Check className="h-5 w-5 text-verdant-green shrink-0 mt-0.5" />
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
            ? "bg-verdant-green text-off-white hover:bg-verdant-green/90"
            : "bg-deep-gray hover:bg-deep-gray/80 text-off-white border border-verdant-green/20"
        )}
      >
        {cta}
      </a>
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
            <Check className="mx-auto h-5 w-5 text-verdant-green" />
          ) : (
            <X className="mx-auto h-5 w-5 text-red-500/60" />
          )
        ) : (
          <span className="text-verdant-green">{feature.onetime}</span>
        )}
      </td>
      <td className="py-4 px-6 text-center">
        {typeof feature.retainer === "boolean" ? (
          feature.retainer ? (
            <Check className="mx-auto h-5 w-5 text-verdant-green" />
          ) : (
            <X className="mx-auto h-5 w-5 text-red-500/60" />
          )
        ) : (
          <span className="text-verdant-green font-medium">{feature.retainer}</span>
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
        <div className="container px-4 mx-auto">
          <div className="flex flex-col items-center text-center mb-16 max-w-3xl mx-auto">
            <div className="px-4 py-1.5 rounded-full bg-verdant-green/10 text-verdant-green text-sm font-medium mb-6 border border-verdant-green/20">
              Detailed Pricing Comparison
            </div>
            <h2 className="text-4xl font-bold md:text-5xl mb-6 text-off-white">
              Compare Our Service Plans
            </h2>
            <p className="text-xl text-off-white/80 max-w-2xl">
              Get a comprehensive view of our offerings to find the perfect fit for your business needs.
            </p>
            
            <div className="mt-8 bg-deep-gray/30 p-1.5 rounded-lg flex overflow-hidden border border-verdant-green/10">
              {["table", "cards"].map((v) => (
                <button
                  key={v}
                  className={cn(
                    "relative px-8 py-2 text-sm font-medium rounded-md transition-all duration-200",
                    view === v 
                      ? "text-off-white bg-verdant-green/20" 
                      : "text-off-white/60 hover:text-off-white"
                  )}
                  onClick={() => setView(v as "cards" | "table")}
                >
                  {v.charAt(0).toUpperCase() + v.slice(1)} View
                  {view === v && (
                    <motion.div
                      layoutId="viewIndicator"
                      className="absolute inset-0 bg-verdant-green/20 rounded-md -z-10"
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          {view === "table" ? (
            <div className="max-w-5xl mx-auto overflow-x-auto rounded-xl border border-verdant-green/10 shadow-lg shadow-verdant-green/5">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-verdant-green/10 border-b border-verdant-green/20">
                    <th className="py-5 px-6 text-left font-medium text-off-white">Features</th>
                    <th className="py-5 px-6 text-center font-medium text-off-white">One-off</th>
                    <th className="py-5 px-6 text-center font-medium text-off-white">Retainer</th>
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
                  price="Custom Quote"
                  features={pricingFeatures
                    .filter(f => f.onetime)
                    .map(f => typeof f.onetime === "string" ? `${f.name} (${f.onetime})` : f.name)}
                  featureLabel="Included in package:"
                  cta="Get Started"
                  ctaLink="#booking"
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
                  price="Starting at $1,500/mo"
                  features={pricingFeatures
                    .filter(f => f.retainer)
                    .map(f => typeof f.retainer === "string" ? `${f.name} (${f.retainer})` : f.name)}
                  featureLabel="Everything in One-off plus:"
                  cta="Schedule a Call"
                  ctaLink="#booking"
                  highlighted
                />
              </motion.div>
            </div>
          )}

          <div className="mt-16 text-center">
            <p className="text-off-white/80 max-w-2xl mx-auto mb-4">
              Need a custom solution? We offer tailored packages to meet your specific requirements.
            </p>
            <motion.a
              href="#booking"
              className="inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-off-white bg-verdant-green hover:bg-verdant-green/90 rounded-lg transition-colors duration-300 shadow-lg shadow-verdant-green/10"
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