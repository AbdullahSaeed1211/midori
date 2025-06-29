import React from "react";
import { Metadata } from "next";
import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";

export const metadata: Metadata = {
  title: "Terms of Service | Kiiro.cx",
  description: "Terms of Service for Kiiro.cx - Our terms and conditions for using our web development services.",
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
            <section>
              <h2 className="text-xl font-semibold text-off-white mb-3 border-b border-white/10 pb-2">1. Agreement to Terms</h2>
              <p className="text-base leading-relaxed">
                By accessing and using Kiiro.cx services, you accept and agree to be bound by the terms 
                and provision of this agreement. If you do not agree to abide by these terms, please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-off-white mb-3 border-b border-white/10 pb-2">2. Services</h2>
              <p className="text-base leading-relaxed mb-3">
                Kiiro.cx provides web development and design services including, but not limited to: website design, web application development, SEO optimization, website maintenance, and conversion optimization consulting.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-off-white mb-3 border-b border-white/10 pb-2">3. Project Scope & Deliverables</h2>
              <p className="text-base leading-relaxed">
                All projects include specific deliverables as outlined in individual project agreements. 
                Any additional features or changes beyond the agreed scope will be quoted separately. We include up to 2 rounds of revisions and 180 days of post-launch support for bug fixes.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-off-white mb-3 border-b border-white/10 pb-2">4. Payment Terms</h2>
              <div className="space-y-4">
                <p className="text-base leading-relaxed">Payment terms vary by project type:</p>
                <div className="bg-charcoal-gray/50 rounded-lg p-4 border border-white/10 space-y-3">
                  <div>
                    <h4 className="font-semibold text-off-white mb-2">One-off Projects:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-off-white/80 ml-4">
                      <li>50% deposit required to begin work</li>
                      <li>50% due upon project completion and delivery</li>
                      <li>Deposits are non-refundable once development begins</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-off-white mb-2">Retainer Projects:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-off-white/80 ml-4">
                      <li>Monthly billing in advance</li>
                      <li>Auto-renewal unless 30 days notice given</li>
                      <li>Unused hours do not roll over to next month</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-off-white mb-2">Additional Terms:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-off-white/80 ml-4">
                      <li>Late payments incur 1.5% monthly interest charge</li>
                      <li>Work may be suspended for accounts 30+ days overdue</li>
                      <li>All prices are in USD unless otherwise specified</li>
              </ul>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-off-white mb-3 border-b border-white/10 pb-2">5. Intellectual Property</h2>
              <p className="text-base leading-relaxed">
                Upon full payment, clients receive full ownership of their custom website code and design. 
                However, Kiiro.cx retains ownership of general techniques, methodologies, and reusable code components. We also reserve portfolio rights to showcase completed work.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-off-white mb-3 border-b border-white/10 pb-2">6. Client Responsibilities</h2>
              <p className="text-base leading-relaxed">
                To ensure project success, clients are responsible for providing all necessary content, images, and materials, as well as timely feedback and approvals.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-off-white mb-3 border-b border-white/10 pb-2">7. Warranties & Disclaimers</h2>
              <p className="text-base leading-relaxed">
                We warrant that our work will be performed in a professional manner and will function as specified upon delivery. However, we cannot guarantee specific business results or search engine rankings, as these depend on many external factors.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-off-white mb-3 border-b border-white/10 pb-2">8. Limitation of Liability</h2>
              <p className="text-base leading-relaxed">
                Our total liability for any claims arising from our services shall not exceed the total amount paid for the specific project in question. We are not liable for indirect or consequential damages.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-off-white mb-3 border-b border-white/10 pb-2">9. Termination</h2>
              <p className="text-base leading-relaxed">
                Either party may terminate services with written notice. For retainer agreements, 30 days written notice is required. Upon termination, payment is required for all work completed.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-off-white mb-3 border-b border-white/10 pb-2">10. Revisions and Change Requests</h2>
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
              <h2 className="text-xl font-semibold text-off-white mb-3 border-b border-white/10 pb-2">11. Hosting and Maintenance</h2>
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
              <h2 className="text-xl font-semibold text-off-white mb-3 border-b border-white/10 pb-2">12. Force Majeure</h2>
              <p className="text-base leading-relaxed">
                Neither party shall be liable for delays or failures in performance due to circumstances beyond reasonable control, 
                including but not limited to acts of God, natural disasters, government actions, or internet service disruptions.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-off-white mb-3 border-b border-white/10 pb-2">13. Governing Law and Disputes</h2>
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
              <h2 className="text-xl font-semibold text-off-white mb-3 border-b border-white/10 pb-2">14. Contact Information</h2>
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