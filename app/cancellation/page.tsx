import React from "react";
import { Metadata } from "next";
import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";

export const metadata: Metadata = {
  title: "Cancellation & Refund Policy | Kiiro.cx",
  description: "Cancellation & Refund Policy for Kiiro.cx - Our policy for cancellations and refunds abiding Indian laws.",
};

export default function CancellationPolicy() {
  return (
    <main className="flex min-h-screen flex-col bg-charcoal-black text-off-white">
      <Header />

      <div className="pt-24 pb-20">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-kiiro-yellow/10 to-transparent opacity-30" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center mb-20">
              <div className="px-4 py-2 rounded-full bg-kiiro-yellow/20 text-kiiro-yellow text-sm font-semibold mb-8 border border-kiiro-yellow/30 inline-block backdrop-blur-sm">
                🔄 Cancellation & Refund Policy
              </div>
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-off-white mb-8 leading-tight">
                Your Rights & <span className="text-kiiro-yellow">Our Policies</span>
              </h1>
              <p className="text-lg md:text-xl text-off-white/80 max-w-3xl mx-auto leading-relaxed mb-8">
                Our cancellation and refund policies are designed in accordance with Indian consumer protection laws
                to ensure fair treatment for all our clients.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-off-white/60">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span>Consumer Protection Act 2019</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-kiiro-yellow rounded-full"></div>
                  <span>Fair Refund Process</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Dispute Resolution</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Policy Overview */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-charcoal-gray/95 to-charcoal-gray/90 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12 relative overflow-hidden">
                {/* Background pattern */}
                <div className="absolute inset-0 bg-gradient-to-r from-kiiro-yellow/5 to-transparent opacity-50" />

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-kiiro-yellow/20 rounded-2xl flex items-center justify-center">
                      <span className="text-kiiro-yellow text-2xl">📋</span>
                    </div>
                    <div>
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-kiiro-yellow/10 text-kiiro-yellow text-sm font-medium rounded-full border border-kiiro-yellow/20 mb-4">
                        📜 Policy Overview
                      </div>
                      <h2 className="text-xl md:text-2xl font-bold text-off-white mb-2">
                        Comprehensive Protection
                      </h2>
                    </div>
                  </div>

                  <p className="text-lg text-off-white/80 leading-relaxed mb-6">
                    This Cancellation & Refund Policy outlines the terms and conditions under which clients may cancel services
                    and request refunds from Kiiro.cx. This policy is designed in accordance with Indian consumer protection laws
                    and regulations, including the Consumer Protection Act, 2019.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-green-500/10 rounded-lg p-4 border border-green-500/20">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-green-400">✓</span>
                        <span className="font-semibold text-off-white">Consumer Rights</span>
                      </div>
                      <p className="text-sm text-off-white/80">Full protection under Indian law</p>
                    </div>
                    <div className="bg-blue-500/10 rounded-lg p-4 border border-blue-500/20">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-blue-400">⚖️</span>
                        <span className="font-semibold text-off-white">Fair Process</span>
                      </div>
                      <p className="text-sm text-off-white/80">Transparent refund procedures</p>
                    </div>
                    <div className="bg-purple-500/10 rounded-lg p-4 border border-purple-500/20">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-purple-400">🏛️</span>
                        <span className="font-semibold text-off-white">Legal Compliance</span>
                      </div>
                      <p className="text-sm text-off-white/80">Consumer Protection Act 2019</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cancellation Rights */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-charcoal-gray/95 to-charcoal-gray/90 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12 relative overflow-hidden">
                {/* Background pattern */}
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-transparent opacity-50" />

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center">
                      <span className="text-green-400 text-2xl">🚪</span>
                    </div>
                    <div>
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 text-green-400 text-sm font-medium rounded-full border border-green-500/20 mb-4">
                        🔓 Cancellation Rights
                      </div>
                      <h2 className="text-xl md:text-2xl font-bold text-off-white">
                        Your Right to Cancel
                      </h2>
                    </div>
                  </div>

                  <p className="text-lg text-off-white/80 leading-relaxed mb-8">
                    You have the right to cancel your service agreement within the specified timeframes outlined below.
                    Cancellation requests must be submitted in writing via email to our support team.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-green-500/10 rounded-lg p-6 border border-green-500/20">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
                          <span className="text-green-400 text-lg">🆓</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-off-white">Free Cancellation</h4>
                          <p className="text-xs text-off-white/70">No Cost</p>
                        </div>
                      </div>
                      <p className="text-sm text-off-white/80">Within 7 days of project commencement for one-off projects</p>
                    </div>

                    <div className="bg-yellow-500/10 rounded-lg p-6 border border-yellow-500/20">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-yellow-500/20 rounded-full flex items-center justify-center">
                          <span className="text-yellow-400 text-lg">📝</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-off-white">Retainer Notice</h4>
                          <p className="text-xs text-off-white/70">30 Days</p>
                        </div>
                      </div>
                      <p className="text-sm text-off-white/80">30 days written notice required for retainer agreements</p>
                    </div>

                    <div className="bg-red-500/10 rounded-lg p-6 border border-red-500/20">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center">
                          <span className="text-red-400 text-lg">⚡</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-off-white">Emergency Exit</h4>
                          <p className="text-xs text-off-white/70">Immediate</p>
                        </div>
                      </div>
                      <p className="text-sm text-off-white/80">Immediate cancellation possible with full payment of completed work</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Refund Eligibility */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-charcoal-gray/95 to-charcoal-gray/90 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12 relative overflow-hidden">
                {/* Background pattern */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-transparent opacity-50" />

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center">
                      <span className="text-blue-400 text-2xl">💰</span>
                    </div>
                    <div>
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 text-blue-400 text-sm font-medium rounded-full border border-blue-500/20 mb-4">
                        💸 Refund Eligibility
                      </div>
                      <h2 className="text-xl md:text-2xl font-bold text-off-white">
                        Refund Structure
                      </h2>
                    </div>
                  </div>

                  <p className="text-lg text-off-white/80 leading-relaxed mb-8">
                    Refunds are processed based on the work completed and the cancellation timeframe. All refunds are subject
                    to the terms outlined below and comply with Indian consumer protection regulations.
                  </p>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="bg-charcoal-gray/50 rounded-lg p-6 border border-white/10">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center">
                          <span className="text-blue-400 text-lg">📊</span>
                        </div>
                        <h4 className="font-semibold text-off-white">One-off Projects Refund Structure</h4>
                      </div>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                          <span className="text-sm text-off-white/80">Within 7 days (before work begins):</span>
                          <span className="text-green-400 font-bold">100% refund</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-yellow-500/10 rounded-lg border border-yellow-500/20">
                          <span className="text-sm text-off-white/80">Before 25% completion:</span>
                          <span className="text-yellow-400 font-bold">75% refund</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-orange-500/10 rounded-lg border border-orange-500/20">
                          <span className="text-sm text-off-white/80">25-50% completion:</span>
                          <span className="text-orange-400 font-bold">50% refund</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-red-500/10 rounded-lg border border-red-500/20">
                          <span className="text-sm text-off-white/80">After 50% completion:</span>
                          <span className="text-red-400 font-bold">No refund</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-charcoal-gray/50 rounded-lg p-6 border border-white/10">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center">
                          <span className="text-purple-400 text-lg">📋</span>
                        </div>
                        <h4 className="font-semibold text-off-white">Retainer Projects</h4>
                      </div>
                      <div className="space-y-4">
                        <div className="p-3 bg-red-500/10 rounded-lg border border-red-500/20">
                          <p className="text-sm text-off-white/90">❌ No refunds for completed billing periods</p>
                        </div>
                        <div className="p-3 bg-blue-500/10 rounded-lg border border-blue-500/20">
                          <p className="text-sm text-off-white/90">💰 Prorated refund for unused services in current billing period</p>
                        </div>
                        <div className="p-3 bg-yellow-500/10 rounded-lg border border-yellow-500/20">
                          <p className="text-sm text-off-white/90">📝 30-day notice period required for cancellation</p>
                        </div>
                        <div className="p-3 bg-orange-500/10 rounded-lg border border-orange-500/20">
                          <p className="text-sm text-off-white/90">⚠️ Early termination fees may apply for breach of contract</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

ˇ        {/* Refund Processing */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-charcoal-gray/95 to-charcoal-gray/90 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12 relative overflow-hidden">
                {/* Background pattern */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-transparent opacity-50" />

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center">
                      <span className="text-purple-400 text-2xl">⏱️</span>
                    </div>
                    <div>
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 text-purple-400 text-sm font-medium rounded-full border border-purple-500/20 mb-4">
                        ⚙️ Refund Processing
                      </div>
                      <h2 className="text-xl md:text-2xl font-bold text-off-white">
                        How Refunds Work
                      </h2>
                    </div>
                  </div>

                  <p className="text-lg text-off-white/80 leading-relaxed mb-8">
                    Once a refund is approved, it will be processed according to the following timeline and methods:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-charcoal-gray/50 rounded-lg p-6 border border-white/10">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center">
                          <span className="text-blue-400 text-lg">⏱️</span>
                        </div>
                        <h4 className="font-semibold text-off-white">Processing Time</h4>
                      </div>
                      <ul className="space-y-3 text-sm text-off-white/80">
                        <li className="flex items-start gap-2">
                          <span className="text-green-400 mt-1">•</span>
                          <span>Review: 3-5 business days</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-400 mt-1">•</span>
                          <span>Approval: 2-3 business days</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-purple-400 mt-1">•</span>
                          <span>Payment: 7-14 business days</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-charcoal-gray/50 rounded-lg p-6 border border-white/10">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
                          <span className="text-green-400 text-lg">💳</span>
                        </div>
                        <h4 className="font-semibold text-off-white">Refund Methods</h4>
                      </div>
                      <ul className="space-y-3 text-sm text-off-white/80">
                        <li className="flex items-start gap-2">
                          <span className="text-green-400 mt-1">•</span>
                          <span>Original payment method</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-400 mt-1">•</span>
                          <span>Bank transfer (India)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-purple-400 mt-1">•</span>
                          <span>Digital wallets</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Non-Refundable Items */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-charcoal-gray/95 to-charcoal-gray/90 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12 relative overflow-hidden">
                {/* Background pattern */}
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-transparent opacity-50" />

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-16 h-16 bg-red-500/20 rounded-2xl flex items-center justify-center">
                      <span className="text-red-400 text-2xl">🚫</span>
                    </div>
                    <div>
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 text-red-400 text-sm font-medium rounded-full border border-red-500/20 mb-4">
                        ❌ Non-Refundable Items
                      </div>
                      <h2 className="text-xl md:text-2xl font-bold text-off-white">
                        What&apos;s Not Refundable
                      </h2>
                    </div>
                  </div>

                  <p className="text-lg text-off-white/80 leading-relaxed mb-8">
                    The following items and services are not eligible for refunds under any circumstances:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-red-500/10 rounded-lg p-4 border border-red-500/20">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-red-400">🔒</span>
                        <span className="font-semibold text-off-white">Third-Party Services</span>
                      </div>
                      <ul className="text-sm text-off-white/80 space-y-2">
                        <li>• Third-party software licenses</li>
                        <li>• Domain registration fees</li>
                        <li>• Hosting fees</li>
                      </ul>
                    </div>

                    <div className="bg-red-500/10 rounded-lg p-4 border border-red-500/20">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-red-400">⚡</span>
                        <span className="font-semibold text-off-white">Service Charges</span>
                      </div>
                      <ul className="text-sm text-off-white/80 space-y-2">
                        <li>• Rush order fees</li>
                        <li>• Late payment fees</li>
                        <li>• Interest charges</li>
                      </ul>
                    </div>

                    <div className="bg-red-500/10 rounded-lg p-4 border border-red-500/20 md:col-span-2">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-red-400">📋</span>
                        <span className="font-semibold text-off-white">Completed Work</span>
                      </div>
                      <ul className="text-sm text-off-white/80 space-y-2">
                        <li>• Consultation calls and strategy sessions (if completed)</li>
                        <li>• Custom development work that has been delivered and accepted</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dispute Resolution */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-charcoal-gray/95 to-charcoal-gray/90 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12 relative overflow-hidden">
                {/* Background pattern */}
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-transparent opacity-50" />

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-16 h-16 bg-amber-500/20 rounded-2xl flex items-center justify-center">
                      <span className="text-amber-400 text-2xl">⚖️</span>
                    </div>
                    <div>
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 text-amber-400 text-sm font-medium rounded-full border border-amber-500/20 mb-4">
                        🏛️ Dispute Resolution
                      </div>
                      <h2 className="text-xl md:text-2xl font-bold text-off-white">
                        Legal Process
                      </h2>
                    </div>
                  </div>

                  <p className="text-lg text-off-white/80 leading-relaxed mb-8">
                    In accordance with Indian consumer protection laws, disputes regarding cancellations and refunds will be handled as follows:
                  </p>

                  <div className="space-y-6">
                    <div className="bg-green-500/10 rounded-lg p-6 border border-green-500/20">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
                          <span className="text-green-400 text-lg">1️⃣</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-off-white">Internal Resolution</h4>
                          <p className="text-sm text-off-white/70">First Step</p>
                        </div>
                      </div>
                      <p className="text-off-white/80">Contact our customer support team within 30 days of the incident</p>
                    </div>

                    <div className="bg-blue-500/10 rounded-lg p-6 border border-blue-500/20">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center">
                          <span className="text-blue-400 text-lg">2️⃣</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-off-white">Mediation</h4>
                          <p className="text-sm text-off-white/70">Second Step</p>
                        </div>
                      </div>
                      <p className="text-off-white/80">If internal resolution fails, we agree to participate in mediation through a mutually agreed mediator</p>
                    </div>

                    <div className="bg-purple-500/10 rounded-lg p-6 border border-purple-500/20">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center">
                          <span className="text-purple-400 text-lg">3️⃣</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-off-white">Consumer Court</h4>
                          <p className="text-sm text-off-white/70">Final Recourse</p>
                        </div>
                      </div>
                      <p className="text-off-white/80">As a final recourse, disputes may be escalated to the appropriate Consumer Disputes Redressal Forum under the Consumer Protection Act, 2019</p>
                    </div>
                  </div>

                  <div className="mt-8 p-4 bg-amber-500/10 rounded-lg border border-amber-500/20">
                    <p className="text-sm text-off-white/90">
                      <strong>Our Commitment:</strong> We are committed to resolving all disputes amicably and in compliance with Indian consumer protection regulations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Special Circumstances */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-charcoal-gray/95 to-charcoal-gray/90 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12 relative overflow-hidden">
                {/* Background pattern */}
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-transparent opacity-50" />

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-16 h-16 bg-indigo-500/20 rounded-2xl flex items-center justify-center">
                      <span className="text-indigo-400 text-2xl">🌟</span>
                    </div>
                    <div>
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500/10 text-indigo-400 text-sm font-medium rounded-full border border-indigo-500/20 mb-4">
                        ✨ Special Circumstances
                      </div>
                      <h2 className="text-xl md:text-2xl font-bold text-off-white">
                        Exceptional Cases
                      </h2>
                    </div>
                  </div>

                  <p className="text-lg text-off-white/80 leading-relaxed mb-8">
                    We understand that exceptional circumstances may arise. Refunds or cancellations outside our standard policy may be considered in the following cases:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-indigo-500/10 rounded-lg p-6 border border-indigo-500/20">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-indigo-500/20 rounded-full flex items-center justify-center">
                          <span className="text-indigo-400 text-lg">📋</span>
                        </div>
                        <h4 className="font-semibold text-off-white">Valid Reasons</h4>
                      </div>
                      <ul className="text-sm text-off-white/80 space-y-3">
                        <li className="flex items-start gap-2">
                          <span className="text-green-400 mt-1">•</span>
                          <span>Serious illness or medical emergency</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-400 mt-1">•</span>
                          <span>Death in immediate family</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-yellow-400 mt-1">•</span>
                          <span>Natural disasters</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-purple-400 mt-1">•</span>
                          <span>Significant change in business circumstances</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-indigo-500/10 rounded-lg p-6 border border-indigo-500/20">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-indigo-500/20 rounded-full flex items-center justify-center">
                          <span className="text-indigo-400 text-lg">📄</span>
                        </div>
                        <h4 className="font-semibold text-off-white">Required Documentation</h4>
                      </div>
                      <ul className="text-sm text-off-white/80 space-y-3">
                        <li className="flex items-start gap-2">
                          <span className="text-green-400 mt-1">•</span>
                          <span>Medical certificates</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-400 mt-1">•</span>
                          <span>Death certificates</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-yellow-400 mt-1">•</span>
                          <span>Official government notifications</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-purple-400 mt-1">•</span>
                          <span>Legal documentation</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-charcoal-gray/95 to-charcoal-gray/90 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12 relative overflow-hidden">
                {/* Background pattern */}
                <div className="absolute inset-0 bg-gradient-to-r from-kiiro-yellow/5 via-transparent to-green-500/5 opacity-50" />

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-16 h-16 bg-kiiro-yellow/20 rounded-2xl flex items-center justify-center">
                      <span className="text-kiiro-yellow text-2xl">📞</span>
                    </div>
                    <div>
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-kiiro-yellow/10 text-kiiro-yellow text-sm font-medium rounded-full border border-kiiro-yellow/20 mb-4">
                        📋 Contact Information
                      </div>
                      <h2 className="text-xl md:text-2xl font-bold text-off-white">
                        Get in Touch
                      </h2>
                    </div>
                  </div>

                  <p className="text-lg text-off-white/80 leading-relaxed mb-8">
                    For cancellation requests, refund inquiries, or to discuss your specific situation:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-charcoal-gray/50 rounded-lg p-6 border border-white/10">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-kiiro-yellow/20 rounded-full flex items-center justify-center">
                          <span className="text-kiiro-yellow text-lg">📧</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-off-white">Email Support</h4>
                          <p className="text-sm text-off-white/70">For detailed inquiries</p>
                        </div>
                      </div>
                      <a href="mailto:abdullah.saeed1724@gmail.com" className="text-kiiro-yellow hover:underline">
                        abdullah.saeed1724@gmail.com
                      </a>
                    </div>

                    <div className="bg-charcoal-gray/50 rounded-lg p-6 border border-white/10">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
                          <span className="text-green-400 text-lg">📞</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-off-white">Phone Support</h4>
                          <p className="text-sm text-off-white/70">Call for urgent matters</p>
                        </div>
                      </div>
                      <a href="tel:+917398826339" className="text-green-400 hover:underline">
                        +91 7398826339
                      </a>
                    </div>

                    <div className="bg-charcoal-gray/50 rounded-lg p-6 border border-white/10">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center">
                          <span className="text-blue-400 text-lg">🆘</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-off-white">Support Center</h4>
                          <p className="text-sm text-off-white/70">Comprehensive help resources</p>
                        </div>
                      </div>
                      <a href="/support" className="text-blue-400 hover:underline">
                        Visit Support Center
                      </a>
                    </div>

                    <div className="bg-charcoal-gray/50 rounded-lg p-6 border border-white/10">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center">
                          <span className="text-purple-400 text-lg">⏰</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-off-white">Response Time</h4>
                          <p className="text-sm text-off-white/70">Quick turnaround</p>
                        </div>
                      </div>
                      <p className="text-purple-400">Within 24 hours</p>
                    </div>
                  </div>

                  <div className="mt-8 p-6 bg-kiiro-yellow/10 rounded-lg border border-kiiro-yellow/20">
                    <p className="text-sm text-off-white/90">
                      <strong>Legal Notice:</strong> This Cancellation & Refund Policy is governed by Indian law and complies with the Consumer Protection Act, 2019.
                      We reserve the right to update this policy, with changes taking effect 30 days after publication.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
