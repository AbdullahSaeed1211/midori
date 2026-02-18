import { Metadata } from "next";
import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";
import { HostingPricing } from "./pricing-section";

export const metadata: Metadata = {
  title: "Website Hosting & Maintenance",
  description: "Keep your website secure, fast, and up-to-date with our hosting and maintenance plans.",
};

export default function HostingPage() {
  return (
    <main className="min-h-screen bg-charcoal-black">
      <Header />
      
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-kiiro-yellow/10 text-kiiro-yellow text-sm font-semibold rounded-full mb-4">
              Hosting & Care
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-off-white mb-4">
              Focus on Your Business,<br />
              <span className="text-kiiro-yellow">We Handle Your Website</span>
            </h1>
            <p className="text-lg text-off-white/70 max-w-2xl mx-auto">
              Keep your website secure, fast, and always up-to-date. No technical headaches, just peace of mind.
            </p>
          </div>

          <HostingPricing />

          <div className="mt-16">
            <h2 className="text-2xl font-bold text-off-white text-center mb-8">What is Included</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <FeatureCard 
                title="Daily Backups"
                description="Automatic daily backups with one-click restore. Never lose your data."
              />
              <FeatureCard 
                title="Security Monitoring"
                description="24/7 security scanning and SSL certificate management."
              />
              <FeatureCard 
                title="Performance Optimization"
                description="Monthly speed audits and optimization to keep your site fast."
              />
              <FeatureCard 
                title="Content Updates"
                description="Small content changes included every month. Just send us what you need."
              />
              <FeatureCard 
                title="Plugin & Core Updates"
                description="Keep everything updated and compatible. We handle the technical stuff."
              />
              <FeatureCard 
                title="Priority Support"
                description="Get help when you need it. Average response time under 4 hours."
              />
            </div>
          </div>

          <div className="mt-16 text-center">
            <p className="text-off-white/60 mb-4">
              Already a Kiiro client? Get your first month free.
            </p>
            <a 
              href="#booking" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-kiiro-yellow text-charcoal-black font-semibold rounded-lg hover:bg-kiiro-yellow/90 transition-colors"
            >
              Get Started
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function FeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-charcoal-gray/30 rounded-xl border border-off-white/10 p-6">
      <h3 className="font-semibold text-off-white mb-2">{title}</h3>
      <p className="text-sm text-off-white/60">{description}</p>
    </div>
  );
}
