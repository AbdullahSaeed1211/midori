import React from "react";
import { Metadata } from "next";
import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";

export const metadata: Metadata = {
  title: "Terms of Service | Kiiro.cx - Service Agreement",
  description: "Complete terms of service for Kiiro.cx web development services. Understand our service agreements, payment terms, and project deliverables.",
  keywords: ["terms of service", "service agreement", "web development terms", "payment terms", "project deliverables", "kiiro terms"],
  authors: [{ name: "kiiro.cx" }],
  openGraph: {
    type: "website",
    title: "Terms of Service | Kiiro.cx - Service Agreement",
    description: "Complete terms of service for Kiiro.cx web development services. Understand our service agreements and payment terms.",
    url: "https://kiiro.cx/terms",
    siteName: "kiiro.cx",
  },
  alternates: {
    canonical: "https://kiiro.cx/terms",
  },
};

export default function TermsOfService() {
  return (
    <main className="flex min-h-screen flex-col bg-charcoal-black text-off-white">
      <Header />
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-off-white mb-2">Terms of Service</h1>
            <p className="text-sm text-off-white/60">Last updated: January 2025</p>
          </div>

          <div className="space-y-8 text-off-white/80">
            <section className="bg-charcoal-gray/30 rounded-lg p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-kiiro-yellow/20 rounded-full flex items-center justify-center">
                  <span className="text-kiiro-yellow text-sm">📋</span>
                </div>
                <h2 className="text-xl font-semibold text-off-white">1. Agreement to Terms</h2>
              </div>
              <p className="text-base leading-relaxed">
                By accessing and using Kiiro.cx services, you accept and agree to be bound by the terms
                and provision of this agreement. If you do not agree to abide by these terms, please do not use this service.
              </p>
            </section>

            <section className="bg-charcoal-gray/30 rounded-lg p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center">
                  <span className="text-blue-400 text-sm">🚀</span>
                </div>
                <h2 className="text-xl font-semibold text-off-white">2. Services</h2>
              </div>
              <p className="text-base leading-relaxed mb-4">
                Kiiro.cx provides web development and design services including, but not limited to: website design, web application development, SEO optimization, website maintenance, and conversion optimization consulting.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="flex items-center gap-2 text-sm text-off-white/80">
                  <div className="w-2 h-2 bg-kiiro-yellow rounded-full"></div>
                  Website Design & Development
                </div>
                <div className="flex items-center gap-2 text-sm text-off-white/80">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  SEO Optimization
                </div>
                <div className="flex items-center gap-2 text-sm text-off-white/80">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  Conversion Optimization
                </div>
                <div className="flex items-center gap-2 text-sm text-off-white/80">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  Maintenance & Support
                </div>
              </div>
            </section>

            <section className="bg-charcoal-gray/30 rounded-lg p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                  <span className="text-green-400 text-sm">🎯</span>
                </div>
                <h2 className="text-xl font-semibold text-off-white">3. Project Scope & Deliverables</h2>
              </div>
              <p className="text-base leading-relaxed mb-4">
                All projects include specific deliverables as outlined in individual project agreements.
                Any additional features or changes beyond the agreed scope will be quoted separately.
              </p>
              <div className="bg-charcoal-gray/50 rounded-lg p-4 border border-white/10">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-kiiro-yellow">✓</span>
                  <span className="text-sm font-semibold text-off-white">Included in all projects:</span>
                </div>
                <ul className="text-sm text-off-white/80 space-y-1 ml-6">
                  <li>• Up to 2 rounds of revisions</li>
                  <li>• 180 days of post-launch bug fixes</li>
                  <li>• Mobile-responsive design</li>
                  <li>• SEO optimization</li>
                </ul>
              </div>
            </section>

            <section className="bg-charcoal-gray/30 rounded-lg p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center">
                  <span className="text-red-400 text-sm">🔄</span>
                </div>
                <h2 className="text-xl font-semibold text-off-white">4. Cancellation & Refund Policy</h2>
              </div>
              <p className="text-base leading-relaxed mb-4">
                Our Cancellation & Refund Policy is designed in accordance with Indian consumer protection laws and regulations.
                Please refer to our dedicated <a href="/cancellation" className="text-kiiro-yellow hover:underline">Cancellation & Refund Policy</a> page for detailed information about cancellation rights, refund eligibility, and dispute resolution procedures.
              </p>
              <div className="bg-charcoal-gray/50 rounded-lg p-4 border border-white/10">
                <p className="text-sm text-off-white/90 mb-2"><strong>Policy URL:</strong></p>
                <a href="https://example.com/cancellation" target="_blank" rel="noopener noreferrer" className="text-kiiro-yellow hover:underline text-sm break-all">
                  https://example.com/cancellation
                </a>
              </div>
            </section>

            <section className="bg-charcoal-gray/30 rounded-lg p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center">
                  <span className="text-purple-400 text-sm">💰</span>
                </div>
                <h2 className="text-xl font-semibold text-off-white">5. Payment Terms</h2>
              </div>
              <p className="text-base leading-relaxed mb-4">Payment terms vary by project type:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-charcoal-gray/50 rounded-lg p-4 border border-white/10">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-3 h-3 bg-kiiro-yellow rounded-full"></div>
                    <h4 className="font-semibold text-off-white">One-off Projects</h4>
                  </div>
                  <ul className="space-y-2 text-sm text-off-white/80">
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">•</span>
                      50% deposit to begin work
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">•</span>
                      50% due upon completion
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-400 mt-1">•</span>
                      Deposits non-refundable once development begins
                    </li>
                  </ul>
                </div>
                <div className="bg-charcoal-gray/50 rounded-lg p-4 border border-white/10">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                    <h4 className="font-semibold text-off-white">Retainer Projects</h4>
                  </div>
                  <ul className="space-y-2 text-sm text-off-white/80">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      Monthly billing in advance
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      Auto-renewal with 30 days notice
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      Unused hours don&apos;t roll over
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bg-charcoal-gray/50 rounded-lg p-4 border border-white/10 mt-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                  <h4 className="font-semibold text-off-white">Additional Terms</h4>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-off-white/80">
                  <div className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">⚠️</span>
                    <span>Late payments: 1.5% monthly interest</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">⏸️</span>
                    <span>Work suspended for 30+ days overdue</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">💵</span>
                    <span>All prices in USD unless specified</span>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-charcoal-gray/30 rounded-lg p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-indigo-500/20 rounded-full flex items-center justify-center">
                  <span className="text-indigo-400 text-sm">©️</span>
                </div>
                <h2 className="text-xl font-semibold text-off-white">6. Intellectual Property</h2>
              </div>
              <p className="text-base leading-relaxed mb-4">
                Upon full payment, clients receive full ownership of their custom website code and design.
                However, Kiiro.cx retains ownership of general techniques, methodologies, and reusable code components.
              </p>
              <div className="bg-charcoal-gray/50 rounded-lg p-4 border border-white/10">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-kiiro-yellow">📸</span>
                  <span className="text-sm font-semibold text-off-white">Portfolio Rights:</span>
                </div>
                <p className="text-sm text-off-white/80">We reserve the right to showcase completed work in our portfolio and marketing materials.</p>
              </div>
            </section>

            <section className="bg-charcoal-gray/30 rounded-lg p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-teal-500/20 rounded-full flex items-center justify-center">
                  <span className="text-teal-400 text-sm">🤝</span>
                </div>
                <h2 className="text-xl font-semibold text-off-white">7. Client Responsibilities</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-charcoal-gray/50 rounded-lg p-4 border border-white/10">
                  <h4 className="font-semibold text-off-white mb-2 flex items-center gap-2">
                    <span className="text-green-400">📝</span>
                    Content & Materials
                  </h4>
                  <p className="text-sm text-off-white/80">Provide all necessary content, images, and materials for the project.</p>
                </div>
                <div className="bg-charcoal-gray/50 rounded-lg p-4 border border-white/10">
                  <h4 className="font-semibold text-off-white mb-2 flex items-center gap-2">
                    <span className="text-blue-400">⏰</span>
                    Timely Feedback
                  </h4>
                  <p className="text-sm text-off-white/80">Provide timely feedback and approvals to keep the project on schedule.</p>
                </div>
              </div>
            </section>

            <section className="bg-charcoal-gray/30 rounded-lg p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-amber-500/20 rounded-full flex items-center justify-center">
                  <span className="text-amber-400 text-sm">⚖️</span>
                </div>
                <h2 className="text-xl font-semibold text-off-white">8. Warranties & Disclaimers</h2>
              </div>
              <div className="space-y-4">
                <div className="bg-green-500/10 rounded-lg p-4 border border-green-500/20">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-green-400">✓</span>
                    <span className="font-semibold text-off-white">What We Warrant</span>
                  </div>
                  <p className="text-sm text-off-white/80">Professional workmanship and functionality as specified upon delivery.</p>
                </div>
                <div className="bg-yellow-500/10 rounded-lg p-4 border border-yellow-500/20">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-yellow-400">⚠️</span>
                    <span className="font-semibold text-off-white">Limitations</span>
                  </div>
                  <p className="text-sm text-off-white/80">We cannot guarantee specific business results or search engine rankings, as these depend on external factors.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-off-white mb-3 border-b border-white/10 pb-2">9. Limitation of Liability</h2>
              <p className="text-base leading-relaxed">
                Our total liability for any claims arising from our services shall not exceed the total amount paid for the specific project in question. We are not liable for indirect or consequential damages.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-off-white mb-3 border-b border-white/10 pb-2">10. Termination</h2>
              <p className="text-base leading-relaxed">
                Either party may terminate services with written notice. For retainer agreements, 30 days written notice is required. Upon termination, payment is required for all work completed.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-off-white mb-3 border-b border-white/10 pb-2">11. Revisions and Change Requests</h2>
              <div className="space-y-4">
                <p className="text-base leading-relaxed">
                  To ensure project efficiency and cost control:
                </p>
                <ul className="list-disc list-inside space-y-2 text-base text-off-white/80 ml-4">
                  <li>Each project includes up to 2 rounds of revisions</li>
                  <li>Additional revisions are billed at our standard hourly rate</li>
                  <li>Major scope changes require a new project agreement</li>
                  <li>All change requests must be submitted in writing</li>
                  <li>Rush requests (less than 48 hours) incur a 50% surcharge</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-off-white mb-3 border-b border-white/10 pb-2">12. Hosting and Maintenance</h2>
              <div className="space-y-4">
                <p className="text-base leading-relaxed">
                  We provide ongoing support as follows:
                </p>
                <ul className="list-disc list-inside space-y-2 text-base text-off-white/80 ml-4">
                  <li>180 days of free bug fixes and minor adjustments</li>
                  <li>Hosting recommendations and setup assistance</li>
                  <li>Optional monthly maintenance packages available</li>
                  <li>Emergency support available for critical issues</li>
                  <li>Client is responsible for hosting costs and domain registration</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-off-white mb-3 border-b border-white/10 pb-2">13. Force Majeure</h2>
              <p className="text-base leading-relaxed">
                Neither party shall be liable for delays or failures in performance due to circumstances beyond reasonable control,
                including but not limited to acts of God, natural disasters, government actions, or internet service disruptions.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-off-white mb-3 border-b border-white/10 pb-2">14. Governing Law and Disputes</h2>
              <div className="space-y-4">
                <p className="text-base leading-relaxed">
                  These terms are governed by the laws of India. Any disputes will be resolved through:
                </p>
                <ol className="list-decimal list-inside space-y-2 text-base text-off-white/80 ml-4">
                  <li>Good faith negotiation between parties</li>
                  <li>Mediation if negotiation fails</li>
                  <li>Binding arbitration as a final resort</li>
                </ol>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-off-white mb-3 border-b border-white/10 pb-2">15. Contact Information</h2>
              <div className="space-y-4">
                <p className="text-base leading-relaxed">
                  For questions about these Terms of Service or to discuss your project:
                </p>
                <div className="bg-charcoal-gray/50 rounded-lg p-4 border border-white/10">
                  <p className="text-off-white/90"><strong>Email:</strong> <a href="mailto:abdullah.saeed1724@gmail.com" className="text-kiiro-yellow hover:underline">abdullah.saeed1724@gmail.com</a></p>
                  <p className="text-off-white/90"><strong>Website:</strong> <a href="https://kiiro.cx" className="text-kiiro-yellow hover:underline">kiiro.cx</a></p>
                  <p className="text-off-white/90"><strong>Business Hours:</strong> Monday-Friday, 9 AM - 6 PM IST</p>
                  <p className="text-off-white/90"><strong>Response Time:</strong> We respond to inquiries within 24 hours</p>
                </div>
                <p className="text-sm text-off-white/70 mt-4">
                  These terms were last updated in January 2025 and may be updated periodically. 
                  Continued use of our services constitutes acceptance of any changes.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
} 