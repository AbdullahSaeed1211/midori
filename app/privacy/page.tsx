import React from "react";
import { Metadata } from "next";
import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Kiiro.cx",
  description: "Privacy Policy for Kiiro.cx - How we collect, use, and protect your personal information.",
};

export default function PrivacyPolicy() {
  return (
    <main className="flex min-h-screen flex-col bg-charcoal-black text-off-white">
      <Header />
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-off-white mb-2">Privacy Policy</h1>
            <p className="text-sm text-off-white/60">Last updated: January 2025</p>
          </div>

          <div className="space-y-8 text-off-white/80">
            <section className="bg-charcoal-gray/30 rounded-lg p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center">
                  <span className="text-blue-400 text-sm">📊</span>
                </div>
                <h2 className="text-xl font-semibold text-off-white">1. Information We Collect</h2>
              </div>
              <p className="text-base leading-relaxed mb-4">
                We collect information you provide directly to us, including:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-charcoal-gray/50 rounded-lg p-4 border border-white/10">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-kiiro-yellow">👤</span>
                    <span className="font-semibold text-off-white">Contact Information</span>
                  </div>
                  <p className="text-sm text-off-white/80">Name, email address, phone number, company name</p>
                </div>
                <div className="bg-charcoal-gray/50 rounded-lg p-4 border border-white/10">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-green-400">💼</span>
                    <span className="font-semibold text-off-white">Project Information</span>
                  </div>
                  <p className="text-sm text-off-white/80">Business requirements, project scope, technical specifications</p>
                </div>
                <div className="bg-charcoal-gray/50 rounded-lg p-4 border border-white/10">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-purple-400">💬</span>
                    <span className="font-semibold text-off-white">Communication Data</span>
                  </div>
                  <p className="text-sm text-off-white/80">Messages, feedback, and correspondence</p>
                </div>
                <div className="bg-charcoal-gray/50 rounded-lg p-4 border border-white/10">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-orange-400">🖥️</span>
                    <span className="font-semibold text-off-white">Usage & Technical Data</span>
                  </div>
                  <p className="text-sm text-off-white/80">Website interactions, IP address, browser type, cookies</p>
                </div>
              </div>
            </section>

            <section className="bg-charcoal-gray/30 rounded-lg p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                  <span className="text-green-400 text-sm">🎯</span>
                </div>
                <h2 className="text-xl font-semibold text-off-white">2. How We Use Your Information</h2>
              </div>
              <p className="text-base leading-relaxed mb-4">We use your information to:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                <div className="flex items-center gap-2 text-sm text-off-white/80">
                  <div className="w-2 h-2 bg-kiiro-yellow rounded-full flex-shrink-0"></div>
                  Provide web development services
                </div>
                <div className="flex items-center gap-2 text-sm text-off-white/80">
                  <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0"></div>
                  Communicate about projects
                </div>
                <div className="flex items-center gap-2 text-sm text-off-white/80">
                  <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0"></div>
                  Process payments & billing
                </div>
                <div className="flex items-center gap-2 text-sm text-off-white/80">
                  <div className="w-2 h-2 bg-purple-400 rounded-full flex-shrink-0"></div>
                  Send updates & notices
                </div>
                <div className="flex items-center gap-2 text-sm text-off-white/80">
                  <div className="w-2 h-2 bg-orange-400 rounded-full flex-shrink-0"></div>
                  Improve our services
                </div>
                <div className="flex items-center gap-2 text-sm text-off-white/80">
                  <div className="w-2 h-2 bg-red-400 rounded-full flex-shrink-0"></div>
                  Ensure security & compliance
                </div>
              </div>
            </section>

            <section className="bg-charcoal-gray/30 rounded-lg p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center">
                  <span className="text-red-400 text-sm">🚫</span>
                </div>
                <h2 className="text-xl font-semibold text-off-white">3. Information Sharing and Disclosure</h2>
              </div>
              <div className="bg-green-500/10 rounded-lg p-4 border border-green-500/20 mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-green-400">✅</span>
                  <span className="font-semibold text-off-white">What We Don&apos;t Do</span>
                </div>
                <p className="text-sm text-off-white/80">We do not sell, rent, or trade your personal information to third parties.</p>
              </div>
              <p className="text-base leading-relaxed mb-4">We may share your information only in these limited circumstances:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-charcoal-gray/50 rounded-lg p-4 border border-white/10">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-blue-400">✓</span>
                    <span className="font-semibold text-off-white">With Your Consent</span>
                  </div>
                  <p className="text-sm text-off-white/80">When you explicitly agree to share information</p>
                </div>
                <div className="bg-charcoal-gray/50 rounded-lg p-4 border border-white/10">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-purple-400">🔧</span>
                    <span className="font-semibold text-off-white">Service Providers</span>
                  </div>
                  <p className="text-sm text-off-white/80">Trusted third-party tools for hosting, analytics, payment processing</p>
                </div>
                <div className="bg-charcoal-gray/50 rounded-lg p-4 border border-white/10">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-orange-400">⚖️</span>
                    <span className="font-semibold text-off-white">Legal Requirements</span>
                  </div>
                  <p className="text-sm text-off-white/80">When required by law or to protect our rights</p>
                </div>
                <div className="bg-charcoal-gray/50 rounded-lg p-4 border border-white/10">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-indigo-400">🏢</span>
                    <span className="font-semibold text-off-white">Business Transfers</span>
                  </div>
                  <p className="text-sm text-off-white/80">In case of merger, acquisition, or sale of assets</p>
                </div>
              </div>
            </section>

            <section className="bg-charcoal-gray/30 rounded-lg p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-indigo-500/20 rounded-full flex items-center justify-center">
                  <span className="text-indigo-400 text-sm">🔒</span>
                </div>
                <h2 className="text-xl font-semibold text-off-white">4. Data Security</h2>
              </div>
              <p className="text-base leading-relaxed mb-4">
                We implement industry-standard security measures to protect your information:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="bg-charcoal-gray/50 rounded-lg p-4 border border-white/10">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-green-400">🔐</span>
                    <span className="font-semibold text-off-white">Encryption</span>
                  </div>
                  <p className="text-sm text-off-white/80">SSL/TLS encryption for data transmission</p>
                </div>
                <div className="bg-charcoal-gray/50 rounded-lg p-4 border border-white/10">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-blue-400">🛡️</span>
                    <span className="font-semibold text-off-white">Infrastructure</span>
                  </div>
                  <p className="text-sm text-off-white/80">Secure servers and databases</p>
                </div>
                <div className="bg-charcoal-gray/50 rounded-lg p-4 border border-white/10">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-purple-400">🔍</span>
                    <span className="font-semibold text-off-white">Monitoring</span>
                  </div>
                  <p className="text-sm text-off-white/80">Regular security audits and updates</p>
                </div>
                <div className="bg-charcoal-gray/50 rounded-lg p-4 border border-white/10">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-orange-400">👥</span>
                    <span className="font-semibold text-off-white">Training</span>
                  </div>
                  <p className="text-sm text-off-white/80">Employee training on data protection</p>
                </div>
              </div>
              <div className="bg-yellow-500/10 rounded-lg p-4 border border-yellow-500/20">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-yellow-400">⚠️</span>
                  <span className="font-semibold text-off-white">Important Note</span>
                </div>
                <p className="text-sm text-off-white/80">While we strive to protect your information, no method of transmission over the internet is 100% secure.</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-off-white mb-3 border-b border-white/10 pb-2">5. Your Rights and Choices</h2>
              <div className="space-y-4">
                <p className="text-base leading-relaxed">You have the right to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4 text-off-white/80">
                  <li><strong>Access:</strong> Request a copy of your personal information</li>
                  <li><strong>Update:</strong> Correct or update your information</li>
                  <li><strong>Delete:</strong> Request deletion of your personal information</li>
                  <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
                  <li><strong>Portability:</strong> Request your data in a portable format</li>
                  <li><strong>Object:</strong> Object to certain processing of your information</li>
                </ul>
                <p className="text-sm text-off-white/70 mt-4">
                  To exercise these rights, contact us at <a href="mailto:abdullah.saeed1724@gmail.com" className="text-kiiro-yellow hover:underline">abdullah.saeed1724@gmail.com</a>
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-off-white mb-3 border-b border-white/10 pb-2">6. Cookies and Tracking Technologies</h2>
              <div className="space-y-4">
                <p className="text-base leading-relaxed">We use cookies and similar technologies to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4 text-off-white/80">
                  <li><strong>Essential Cookies:</strong> Enable core website functionality</li>
                  <li><strong>Analytics Cookies:</strong> Understand website usage (Google Analytics)</li>
                  <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
                </ul>
                <p className="text-sm text-off-white/70 mt-4">
                  You can control cookies through your browser settings, but some features may not work properly if disabled.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-off-white mb-3 border-b border-white/10 pb-2">7. Data Retention</h2>
              <p className="text-base leading-relaxed">
                We retain your information for as long as necessary to provide services, comply with legal obligations, and resolve disputes. 
                Project-related data is typically retained for 7 years for business and legal purposes.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-off-white mb-3 border-b border-white/10 pb-2">8. International Data Transfers</h2>
              <p className="text-base leading-relaxed">
                Your information may be processed in countries other than your own. We ensure appropriate safeguards are in place 
                to protect your information in accordance with applicable data protection laws.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-off-white mb-3 border-b border-white/10 pb-2">9. Children&apos;s Privacy</h2>
              <p className="text-base leading-relaxed">
                Our services are not directed to individuals under 16. We do not knowingly collect personal information from children under 16. 
                If we become aware of such collection, we will delete the information promptly.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-off-white mb-3 border-b border-white/10 pb-2">10. Changes to This Policy</h2>
              <p className="text-base leading-relaxed">
                We may update this Privacy Policy periodically. We will notify you of significant changes by email or through our website. 
                Your continued use of our services after changes take effect constitutes acceptance of the updated policy.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-off-white mb-3 border-b border-white/10 pb-2">11. Contact Information</h2>
              <div className="space-y-4">
                <p className="text-base leading-relaxed">
                  For questions about this Privacy Policy or to exercise your rights, contact us:
                </p>
                <div className="bg-charcoal-gray/50 rounded-lg p-4 border border-white/10">
                  <p className="text-off-white/90"><strong>Email:</strong> <a href="mailto:abdullah.saeed1724@gmail.com" className="text-kiiro-yellow hover:underline">abdullah.saeed1724@gmail.com</a></p>
                  <p className="text-off-white/90"><strong>Website:</strong> <a href="https://kiiro.cx" className="text-kiiro-yellow hover:underline">kiiro.cx</a></p>
                  <p className="text-off-white/90"><strong>Response Time:</strong> We respond to privacy requests within 30 days</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
} 