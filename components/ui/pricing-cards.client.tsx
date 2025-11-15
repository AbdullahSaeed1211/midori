'use client'

import { AnimatePresence, motion } from "framer-motion"
import { Award, Check, ChevronDown } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export type Currency = "INR" | "USD"

type PricingCardsClientProps = {
  defaultCurrency?: Currency
}

type PricingMatrix = {
  starter: string
  growth: string
  mvp: string
}

type PackageConfig = {
  id: keyof PricingMatrix
  title: string
  subtitle: string
  badge: string
  highlight?: boolean
  features: string[]
}

type ComparisonRow = {
  feature: string
  starter: string
  growth: string
  mvp: string
}

const PRICING: Record<Currency, PricingMatrix> = {
  INR: {
    starter: "₹25,000",
    growth: "₹45,000",
    mvp: "Let's Discuss",
  },
  USD: {
    starter: "$699",
    growth: "$1299",
    mvp: "Let's Discuss",
  },
}

const FEATURES_STARTER = [
  "Up to 4 pages",
  "Static website (no CMS)",
  "Basic SEO setup",
  "Responsive design",
  "Hosting & domain setup",
  "7-day support",
  "Delivery in 7–12 days",
  "BONUS: 1 CMS module (Blog/Team/Case Studies)",
]

const FEATURES_GROWTH = [
  "Everything in Starter",
  "Full CMS (Blogs, Case Studies, Services, Team)",
  "Admin panel",
  "Per-page advanced SEO",
  "Google Business Profile setup",
  "Google Sheets Integration",
  "1-month priority support",
  "Delivery in 14–21 days",
  "BONUS PACK (₹25,000 value): Speed + Analytics + Funnel + Schema + Tracking",
]

const FEATURES_MVP = [
  "Everything in Growth",
  "User authentication",
  "Payment integration",
  "Dashboards & databases",
  "API integrations",
  "AI features",
  "PWA",
  "1–2 months support",
]

const PACKAGES: PackageConfig[] = [
  {
    id: "starter",
    title: "Starter Launch",
    subtitle: "Perfect for quick launches",
    badge: "Starter",
    features: FEATURES_STARTER,
  },
  {
    id: "growth",
    title: "Growth Engine",
    subtitle: "Our most popular conversion-focused system",
    badge: "Most Popular",
    highlight: true,
    features: FEATURES_GROWTH,
  },
  {
    id: "mvp",
    title: "Founder MVP",
    subtitle: "Launch your product or SaaS",
    badge: "For Founders",
    features: FEATURES_MVP,
  },
]

const COMPARISON: ComparisonRow[] = [
  { feature: "Pages Included", starter: "4", growth: "6–10", mvp: "Unlimited" },
  { feature: "CMS", starter: "No", growth: "Yes", mvp: "Advanced" },
  { feature: "Admin Panel", starter: "No", growth: "Yes", mvp: "Yes" },
  { feature: "Per-page SEO", starter: "Basic", growth: "Advanced", mvp: "Advanced" },
  { feature: "Performance", starter: "Standard", growth: "90+ Score", mvp: "Enterprise" },
  { feature: "Google Business Setup", starter: "No", growth: "Yes", mvp: "Yes" },
  { feature: "Funnel Pages", starter: "No", growth: "1 Included", mvp: "Multiple" },
  { feature: "Payments", starter: "No", growth: "No", mvp: "Yes" },
  { feature: "User Auth", starter: "No", growth: "No", mvp: "Yes" },
  { feature: "Support", starter: "7 Days", growth: "1 Month", mvp: "1–2 Months" },
]

export default function PricingCardsClient({ defaultCurrency = "USD" }: PricingCardsClientProps) {
  const currency = defaultCurrency // Currency is now handled server-side only
  const [showFeatureComparison, setShowFeatureComparison] = useState(false)

  const pricing = PRICING[currency]

  return (
    <div className="w-full">
      {/* Header with integrated currency toggle */}
      <div className="text-center mb-8 md:mb-12 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center justify-center gap-2 px-6 py-2 rounded-full bg-kiiro-yellow/10 text-kiiro-yellow text-sm font-bold mb-4 md:mb-6 border border-kiiro-yellow/30"
        >
          <Award className="w-4 h-4" />
          FOUNDING CLIENT PRICING
        </motion.div>

        <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-4 md:mb-6 text-white leading-tight">
          Choose Your <span className="text-kiiro-yellow">Growth Package</span>
        </h2>

        <p className="text-lg md:text-xl text-white/80 max-w-4xl mx-auto px-4">
          Select the plan that fits your business — websites built for conversions and growth.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto px-4 md:px-0">
        {PACKAGES.map((pkg) => (
          <PricingCard
            key={pkg.id}
            title={pkg.title}
            subtitle={pkg.subtitle}
            price={pricing[pkg.id]}
            features={pkg.features}
            badge={pkg.badge}
            highlight={pkg.highlight}
          />
        ))}
      </div>

      {/* Comparison Section */}
      <div className="max-w-7xl mx-auto mt-12 md:mt-16 text-center px-4">
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          type="button"
          onClick={() => setShowFeatureComparison((prev) => !prev)}
          className="inline-flex items-center justify-center gap-2 px-4 md:px-6 py-2 md:py-3 rounded-full bg-kiiro-yellow/20 border border-kiiro-yellow/40 text-kiiro-yellow font-semibold text-sm md:text-base"
        >
          {showFeatureComparison ? "Hide Detailed Comparison" : "View Detailed Comparison"}
          <motion.span animate={{ rotate: showFeatureComparison ? 180 : 0 }}>
            <ChevronDown className="w-3 h-3 md:w-4 md:h-4" />
          </motion.span>
        </motion.button>

        <AnimatePresence initial={false}>
          {showFeatureComparison && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.25 }}
              className="mt-6 md:mt-8 overflow-x-auto"
            >
              <table className="w-full text-left text-white/90 border-separate border-spacing-y-1 md:border-spacing-y-2 min-w-[640px]">
                <thead>
                  <tr className="bg-kiiro-yellow/10 text-xs md:text-sm">
                    <th className="p-2 md:p-3 font-semibold">Feature</th>
                    <th className="p-2 md:p-3 font-semibold">Starter</th>
                    <th className="p-2 md:p-3 font-semibold text-kiiro-yellow">Growth</th>
                    <th className="p-2 md:p-3 font-semibold">MVP</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON.map((row) => (
                    <tr key={row.feature} className="bg-black/40 text-xs md:text-sm">
                      <td className="p-2 md:p-3 text-left font-medium text-white/90">{row.feature}</td>
                      <td className="p-2 md:p-3">{row.starter}</td>
                      <td className="p-2 md:p-3 text-kiiro-yellow font-semibold">{row.growth}</td>
                      <td className="p-2 md:p-3">{row.mvp}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

type PricingCardProps = {
  title: string
  subtitle: string
  price: string
  features: string[]
  badge: string
  highlight?: boolean
}

function PricingCard({ title, subtitle, price, features, badge, highlight }: PricingCardProps) {
  const baseClasses = highlight
    ? "bg-kiiro-yellow text-black border-kiiro-yellow shadow-[0_20px_45px_-15px_rgba(255,214,0,0.5)]"
    : "bg-white/5 text-white border-white/10"

  const contentBg = highlight ? "bg-black/5" : "bg-white/5"
  const buttonClasses = highlight
    ? "bg-black text-kiiro-yellow"
    : "bg-white/10 text-white border border-white/30 hover:bg-white/20"

  return (
    <div className={`relative rounded-2xl md:rounded-3xl p-2 border backdrop-blur-xl transition-all hover:scale-[1.02] ${baseClasses}`}>
      <div className="absolute -top-3 md:-top-4 left-1/2 -translate-x-1/2 rounded-full border border-kiiro-yellow bg-black/80 px-3 md:px-4 py-1 text-xs md:text-sm font-bold text-kiiro-yellow shadow-lg">
        {badge}
      </div>

      <div className={`rounded-xl md:rounded-2xl p-6 md:p-8 ${contentBg}`}>
        <h3 className="text-2xl md:text-3xl font-bold mb-2">{title}</h3>
        <p className="opacity-80 mb-4 md:mb-6 text-sm md:text-base">{subtitle}</p>
        <div className={`mb-4 md:mb-6 ${
          price === "Let's Discuss"
            ? "text-xl md:text-2xl font-bold text-kiiro-yellow"
            : "text-4xl md:text-5xl font-black"
        }`}>
          {price}
        </div>

        <Link href="#booking" className="block">
          <button
            type="button"
            className={`w-full rounded-lg md:rounded-xl py-3 md:py-4 text-sm md:text-base font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/40 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent ${buttonClasses}`}
          >
            Book a Call
          </button>
        </Link>
      </div>

      <div className={`rounded-xl md:rounded-2xl p-4 md:p-6 mt-3 md:mt-4 ${contentBg}`}>
        <ul className="space-y-2 md:space-y-3 text-xs md:text-sm">
          {features.map((feature) => (
            <li key={feature} className="flex items-start gap-2 md:gap-3 text-left">
              <Check className={`w-4 h-4 md:w-5 md:h-5 flex-shrink-0 mt-0.5 ${
                highlight ? "text-black" : "text-kiiro-yellow"
              }`} />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
