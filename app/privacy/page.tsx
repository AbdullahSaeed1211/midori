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
            <section>
              <h2 className="text-xl font-semibold text-off-white mb-3 border-b border-white/10 pb-2">1. Information We Collect</h2>
              <div className="space-y-4">
              <p className="text-base leading-relaxed">
                  We collect information you provide directly to us, including:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 text-off-white/80">
                  <li><strong>Contact Information:</strong> Name, email address, phone number, company name</li>
                  <li><strong>Project Information:</strong> Business requirements, project scope, technical specifications</li>
                  <li><strong>Communication Data:</strong> Messages, feedback, and correspondence</li>
                  <li><strong>Usage Data:</strong> Website interactions, pages visited, time spent on site</li>
                  <li><strong>Technical Data:</strong> IP address, browser type, device information, cookies</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-off-white mb-3 border-b border-white/10 pb-2">2. How We Use Your Information</h2>
              <div className="space-y-4">
                <p className="text-base leading-relaxed">We use your information to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4 text-off-white/80">
                  <li>Provide and deliver our web development services</li>
                  <li>Communicate about your projects and our services</li>
                  <li>Process payments and manage billing</li>
                  <li>Send important updates and technical notices</li>
                  <li>Improve our website and services</li>
                  <li>Comply with legal obligations</li>
                  <li>Protect against fraud and security threats</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-off-white mb-3 border-b border-white/10 pb-2">3. Information Sharing and Disclosure</h2>
              <div className="space-y-4">
              <p className="text-base leading-relaxed">
                  <strong>We do not sell, rent, or trade your personal information.</strong> We may share your information in these limited circumstances:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 text-off-white/80">
                  <li><strong>With Your Consent:</strong> When you explicitly agree to share information</li>
                  <li><strong>Service Providers:</strong> Third-party tools that help us deliver services (hosting, analytics, payment processing)</li>
                  <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                  <li><strong>Business Transfers:</strong> In case of merger, acquisition, or sale of assets</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-off-white mb-3 border-b border-white/10 pb-2">4. Data Security</h2>
              <div className="space-y-4">
                <p className="text-base leading-relaxed">
                  We implement industry-standard security measures to protect your information:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 text-off-white/80">
                  <li>SSL/TLS encryption for data transmission</li>
                  <li>Secure servers and databases</li>
                  <li>Regular security audits and updates</li>
                  <li>Access controls and authentication</li>
                  <li>Employee training on data protection</li>
                </ul>
                <p className="text-sm text-off-white/70 mt-4">
                  While we strive to protect your information, no method of transmission over the internet is 100% secure.
                </p>
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