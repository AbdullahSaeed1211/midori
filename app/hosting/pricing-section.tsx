'use client'

import { Check, Loader2 } from "lucide-react"
import { useState } from "react"

const plans = [
  {
    id: "starter",
    name: "Starter Care",
    price: "$29",
    period: "/month",
    description: "Perfect for simple websites that need basic maintenance",
    features: [
      "Daily backups",
      "Security monitoring",
      "SSL certificate",
      "Monthly updates",
      "Email support",
      "2 content changes/month",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    id: "pro",
    name: "Pro Care",
    price: "$49",
    period: "/month",
    description: "Most popular. Complete peace of mind for growing businesses",
    features: [
      "Everything in Starter",
      "Performance optimization",
      "Priority support (4hr response)",
      "5 content changes/month",
      "Monthly analytics report",
      "Uptime monitoring",
      "Staging environment",
    ],
    cta: "Get Started",
    highlighted: true,
  },
  {
    id: "premium",
    name: "Premium Care",
    price: "$99",
    period: "/month",
    description: "For businesses that need dedicated attention",
    features: [
      "Everything in Pro",
      "Dedicated account manager",
      "Unlimited content changes",
      "1-hour priority response",
      "Advanced security suite",
      "Custom reporting",
      "Quarterly strategy calls",
    ],
    cta: "Contact Us",
    highlighted: false,
    isContact: true,
  },
]

export function HostingPricing() {
  const [loading, setLoading] = useState<string | null>(null)

  const handleCheckout = async (planId: string) => {
    setLoading(planId)
    try {
      const res = await fetch('/api/stripe/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ plan: planId }),
      })
      const data = await res.json()
      if (data.url) {
        window.location.href = data.url
      }
    } catch (error) {
      console.error('Checkout error:', error)
    } finally {
      setLoading(null)
    }
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {plans.map((plan) => (
        <div
          key={plan.name}
          className={`relative rounded-2xl border p-6 ${
            plan.highlighted
              ? "bg-kiiro-yellow/5 border-kiiro-yellow/30"
              : "bg-charcoal-gray/30 border-off-white/10"
          }`}
        >
          {plan.highlighted && (
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-kiiro-yellow text-charcoal-black text-xs font-bold px-3 py-1 rounded-full">
              Most Popular
            </span>
          )}
          
          <div className="text-center mb-6">
            <h3 className="text-lg font-semibold text-off-white mb-1">{plan.name}</h3>
            <div className="text-3xl font-bold text-off-white">
              {plan.price}
              <span className="text-sm font-normal text-off-white/60">{plan.period}</span>
            </div>
            <p className="text-sm text-off-white/60 mt-2">{plan.description}</p>
          </div>

          <ul className="space-y-3 mb-6">
            {plan.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2 text-sm">
                <Check className={`w-4 h-4 flex-shrink-0 mt-0.5 ${plan.highlighted ? 'text-kiiro-yellow' : 'text-off-white/60'}`} />
                <span className="text-off-white/80">{feature}</span>
              </li>
            ))}
          </ul>

          {'isContact' in plan && plan.isContact ? (
            <a
              href="#booking"
              className={`block text-center py-3 rounded-lg font-semibold transition-colors ${
                plan.highlighted
                  ? "bg-kiiro-yellow text-charcoal-black hover:bg-kiiro-yellow/90"
                  : "bg-off-white/10 text-off-white hover:bg-off-white/20"
              }`}
            >
              {plan.cta}
            </a>
          ) : (
            <button
              onClick={() => handleCheckout(plan.id)}
              disabled={loading === plan.id}
              className={`w-full py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 ${
                plan.highlighted
                  ? "bg-kiiro-yellow text-charcoal-black hover:bg-kiiro-yellow/90"
                  : "bg-off-white/10 text-off-white hover:bg-off-white/20"
              } disabled:opacity-50`}
            >
              {loading === plan.id ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Processing...
                </>
              ) : (
                plan.cta
              )}
            </button>
          )}
        </div>
      ))}
    </div>
  )
}
