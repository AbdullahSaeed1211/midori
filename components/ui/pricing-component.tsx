'use client'
import { Calendar, ChevronDown, Check, X, Award } from "lucide-react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"

function PricingCards() {
  const [showFeatureComparison, setShowFeatureComparison] = useState(false)

  const LightCheckIcon = ({ className = "" }: { className?: string }) => (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="8" cy="8" r="8" className="fill-neutral-900 dark:fill-neutral-100" />
      <path
        d="M5.5 8.5L7 10L11 6"
        stroke="white"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )

  const DarkCheckIcon = ({ className = "" }: { className?: string }) => (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="8" cy="8" r="7.5" className="stroke-neutral-500" />
      <path
        d="M5.5 8.5L7 10L11 6"
        stroke="white"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )

  const ToggleSwitch = ({
    isYellow = false,
  }: {
    isYellow?: boolean
  }) => (
    <div className="flex items-center gap-3 hover:scale-105 transition-transform duration-200 cursor-pointer">
      <div
        className={[
          "relative inline-flex h-6 w-11 items-center rounded-full",
          "ring-1 ring-inset transition-all duration-200",
          isYellow
            ? "bg-black ring-kiiro-yellow/50 hover:ring-kiiro-yellow/70"
            : "bg-neutral-200 ring-neutral-300 hover:ring-neutral-400",
        ].join(" ")}
      >
        <span
          className={[
            "inline-block h-4 w-4 transform rounded-full translate-x-1",
            isYellow
              ? "bg-kiiro-yellow"
              : "bg-white",
            "shadow-sm transition-transform duration-200",
          ].join(" ")}
        />
      </div>
      <span className={["text-sm transition-colors duration-200", isYellow ? "text-kiiro-accent hover:text-kiiro-yellow" : "text-neutral-600 hover:text-neutral-800"].join(" ")}>
        Express delivery (+$299)
      </span>
    </div>
  )

  const starterFeatures = ["Complete in 7-14 days", "Conversion-optimized design & copy", "Full responsive implementation", "SEO foundation & performance tuning"]
  const proFeatures = ["Complete in 14-21 days", "Multi-page conversion system", "Advanced UX optimization", "Content strategy & implementation"]

  const pricingFeatures = [
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
  ]

  const FeatureRow = ({ feature, index }: { feature: typeof pricingFeatures[0]; index: number }) => {
    return (
      <motion.tr
        className={`border-b border-slate-200/10 ${index % 2 === 0 ? "bg-slate-800/30" : "bg-transparent"}`}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.03, duration: 0.5 }}
        viewport={{ once: true }}
      >
        <td className="py-3 sm:py-4 px-3 sm:px-6 text-white text-xs sm:text-sm">{feature.name}</td>
        <td className="py-3 sm:py-4 px-3 sm:px-6 text-center">
          {typeof feature.onetime === "boolean" ? (
            feature.onetime ? (
              <Check className="mx-auto h-4 w-4 sm:h-5 sm:w-5 text-kiiro-yellow" />
            ) : (
              <X className="mx-auto h-4 w-4 sm:h-5 sm:w-5 text-red-500/60" />
            )
          ) : (
            <span className="text-kiiro-yellow text-xs sm:text-sm">{feature.onetime}</span>
          )}
        </td>
        <td className="py-3 sm:py-4 px-3 sm:px-6 text-center">
          {typeof feature.retainer === "boolean" ? (
            feature.retainer ? (
              <Check className="mx-auto h-4 w-4 sm:h-5 sm:w-5 text-kiiro-yellow" />
            ) : (
              <X className="mx-auto h-4 w-4 sm:h-5 sm:w-5 text-red-500/60" />
            )
          ) : (
            <span className="text-kiiro-yellow font-medium text-xs sm:text-sm">{feature.retainer}</span>
          )}
        </td>
      </motion.tr>
    )
  }

  return (
    <div className="w-full">
      {/* Header Section */}
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

        <p className="text-xl text-off-white/80 max-w-3xl leading-relaxed">
          Click any package below to see exactly what&apos;s included, who it&apos;s perfect for, and real results from similar businesses.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-[1100px] mx-auto">
        <div
          className={[
            "rounded-3xl p-2 relative",
            "bg-white/65 backdrop-blur-md",
            "border border-neutral-200/70",
            "shadow-[0_12px_40px_-15px_rgba(0,0,0,0.15)]",
            "ring-1 ring-inset ring-white/40",
            "hover:scale-105 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.25)] hover:border-neutral-300/80",
            "transition-all duration-300 ease-out cursor-pointer",
          ].join(" ")}
        >
          {/* Most Friendly Badge */}
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
            <div className="bg-white text-neutral-700 text-sm font-bold px-4 py-2 rounded-full shadow-lg border-2 border-neutral-200 flex items-center gap-2">
              Most Friendly
            </div>
          </div>
          <div
            className={[
              "rounded-2xl p-8 mb-2",
              "bg-white/80 backdrop-blur-sm",
              "border border-neutral-200/80",
              "ring-1 ring-inset ring-neutral-900/5",
            ].join(" ")}
          >
            <div className="mb-6">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-neutral-900">Conversion Accelerator</h2>
                <p className="text-neutral-600 text-base leading-relaxed mt-1">
                  Transform your website into a conversion machine.
                </p>
              </div>
            </div>

            <div className="flex items-baseline mb-8">
              <span className="text-5xl font-bold tracking-tighter text-neutral-900">$799</span>
              <span className="text-neutral-400 text-lg ml-1">starting</span>
            </div>

            <Link href="#booking" className="block">
              <button
                className={[
                  "w-full rounded-xl font-semibold text-base py-4",
                  "bg-neutral-900 text-white",
                  "hover:opacity-95 transition-opacity duration-200",
                  "flex items-center justify-center gap-2.5",
                  "shadow-[0_4px_18px_-6px_rgba(0,0,0,0.4)]",
                  "ring-1 ring-inset ring-neutral-900/10",
                ].join(" ")}
              >
                Book a call
                <Calendar className="w-5 h-5 text-neutral-300" />
              </button>
            </Link>
          </div>

          <div
            className={[
              "px-6 pb-6 pt-4",
              "bg-white/50 backdrop-blur-sm rounded-2xl",
              "border border-neutral-200/70",
              "ring-1 ring-inset ring-white/30",
            ].join(" ")}
          >
            <div className="grid grid-cols-2 gap-y-4 gap-x-4">
              {starterFeatures.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <LightCheckIcon className="w-4 h-4 flex-shrink-0" />
                  <span className="text-neutral-800 text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <ToggleSwitch />
            </div>
          </div>
        </div>

        {/* Yellow/Black (Pro) Card - glassy with unique border/outline */}
        <div
          className={[
            "rounded-3xl p-2 relative",
            "bg-black/60 backdrop-blur-md",
            "border border-kiiro-yellow",
            "shadow-[0_12px_50px_-15px_rgba(0,0,0,0.55)]",
            "ring-1 ring-inset ring-kiiro-yellow/20",
            "hover:scale-105 hover:shadow-[0_20px_70px_-15px_rgba(0,0,0,0.7)] hover:border-kiiro-yellow/80 hover:ring-kiiro-yellow/40",
            "transition-all duration-300 ease-out cursor-pointer",
          ].join(" ")}
        >
          {/* Best Value Badge */}
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
            <div className="bg-charcoal-black text-kiiro-yellow text-sm font-bold px-4 py-2 rounded-full shadow-lg border-2 border-kiiro-yellow flex items-center gap-2">
              Best Value
            </div>
          </div>
          <div
            className={[
              "rounded-2xl p-8 mb-2",
              "bg-kiiro-yellow backdrop-blur-sm",
              "border border-charcoal-black/20",
              "ring-1 ring-inset ring-charcoal-black/10",
            ].join(" ")}
          >
            <div className="mb-6">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-charcoal-black">Growth Partnership</h2>
                <p className="text-charcoal-black/80 text-base leading-relaxed mt-1">
                  Ongoing optimization to maximize your conversions.
                </p>
              </div>
            </div>

            <div className="flex items-baseline mb-8">
              <span className="text-5xl font-bold tracking-tighter text-charcoal-black">$1299</span>
              <span className="text-charcoal-black/70 text-lg ml-1">starting</span>
            </div>

            <Link href="#booking" className="block">
              <button
                className={[
                  "w-full rounded-xl font-semibold text-base py-4",
                  "bg-charcoal-black text-kiiro-yellow",
                  "hover:opacity-95 transition-opacity duration-200",
                  "flex items-center justify-center gap-2.5",
                  "shadow-[0_4px_18px_-6px_rgba(0,0,0,0.35)]",
                  "ring-1 ring-inset ring-charcoal-black/20",
                ].join(" ")}
              >
                Book a call
                <Calendar className="w-5 h-5 text-black" />
              </button>
            </Link>
          </div>

          <div
            className={[
              "px-6 pb-6 pt-4",
              "bg-black/55 backdrop-blur-sm rounded-2xl",
              "border border-kiiro-yellow/30",
              "ring-1 ring-inset ring-kiiro-yellow/20",
            ].join(" ")}
          >
            <div className="grid grid-cols-2 gap-y-4 gap-x-4">
              {proFeatures.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <DarkCheckIcon className="w-4 h-4 flex-shrink-0" />
                  <span className="text-kiiro-accent text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <ToggleSwitch isYellow />
            </div>
          </div>
        </div>
      </div>

      {/* Feature Comparison Accordion */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="max-w-6xl mx-auto mt-16"
      >
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-white mb-4">
            {!showFeatureComparison ? "View Detailed Feature Comparison" : "Detailed Feature Comparison"}
          </h3>
          <p className="text-white/70">Everything you need to make the right choice</p>
        </div>

        <AnimatePresence>
          {showFeatureComparison && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="overflow-x-auto rounded-xl border border-kiiro-yellow/10 shadow-lg shadow-kiiro-yellow/5">
                <table className="w-full text-xs sm:text-sm min-w-[600px]">
                  <thead>
                    <tr className="bg-kiiro-yellow/10 border-b border-kiiro-yellow/20">
                      <th className="py-3 sm:py-4 px-3 sm:px-6 text-left font-semibold text-white">Features</th>
                      <th className="py-3 sm:py-4 px-3 sm:px-6 text-center font-semibold text-white">
                        <div className="space-y-1">
                          <div className="text-kiiro-yellow font-bold text-xs sm:text-sm">Conversion Accelerator</div>
                          <div className="text-xs text-white/60">$799</div>
                        </div>
                      </th>
                      <th className="py-3 sm:py-4 px-3 sm:px-6 text-center font-semibold text-white">
                        <div className="space-y-1">
                          <div className="text-kiiro-yellow font-bold text-xs sm:text-sm">Growth Partnership</div>
                          <div className="text-xs text-white/60">$1299</div>
                          <div className="text-xs text-green-400 font-medium">Best Value</div>
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
          )}
        </AnimatePresence>

        <div className="text-center mt-8">
          <motion.button
            onClick={() => setShowFeatureComparison(!showFeatureComparison)}
            className="inline-flex items-center gap-2 px-6 py-3 bg-kiiro-yellow/10 hover:bg-kiiro-yellow/20 border border-kiiro-yellow/30 rounded-full text-kiiro-yellow font-medium transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {!showFeatureComparison ? "View Detailed Comparison" : "Hide Comparison"}
            <motion.div
              animate={{ rotate: showFeatureComparison ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown className="w-4 h-4" />
            </motion.div>
          </motion.button>
        </div>
      </motion.div>
    </div>
  )
}

export default PricingCards