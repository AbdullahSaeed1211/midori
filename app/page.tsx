import { Metadata } from "next";
import { HeroSection } from "@/components/landing/hero-section";
import { ServicesSection } from "@/components/landing/services-section";
import { OfferingsSection } from "@/components/landing/offerings-section";
import { BenefitsSection } from "@/components/landing/benefits-section";
import { WhyKiiroSection } from "@/components/landing/why-midorilabs-section";
import { PricingOptionsSection } from "@/components/landing/pricing-options-section";
import { PricingSection } from "@/components/landing/pricing-section";
import { TestimonialsSection } from "@/components/landing/testimonials-section";
import { TechnicalEdgeSection } from "@/components/landing/technical-edge-section";
import { FaqSection } from "@/components/landing/faq-section";
import { Footer } from "@/components/shared/footer";
import { Header } from "@/components/shared/header";
import { FinalCtaSection } from "@/components/landing/final-cta-section";
import { BookingSection } from "@/components/landing/booking-section";
import { ProcessTimeline } from "@/components/landing/process-timeline";
import { CaseStudiesSection } from "@/components/landing/case-studies-section";
import { StatsGrid } from "@/components/landing/stats-grid";

export const metadata: Metadata = {
  title: "kiiro.cx | High-Converting Web Design & Development",
  description: "AI-enhanced landing pages, SaaS platforms, and brand identities engineered for measurable growth",
  keywords: "web design, web development, conversion optimization, landing pages, SaaS development, digital branding",
  authors: [{ name: "kiiro.cx" }],
  openGraph: {
    type: "website",
    title: "kiiro.cx | Web Engineering for Growth",
    description: "High-performance websites & web solutions designed for conversion and built for scale.",
    siteName: "kiiro.cx",
  }
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      
      <HeroSection />
      
      <div id="client-wins">
        <TestimonialsSection />
      </div>
      
      <div id="services">
        <ServicesSection />
      </div>
      
      <OfferingsSection />
      
      <ProcessTimeline />
      
      <BenefitsSection />
      
      <StatsGrid />
      
      <CaseStudiesSection />
      
      <WhyKiiroSection />
      
      <div id="pricing">
        <PricingOptionsSection />
        <div className="py-12 bg-charcoal-black">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-off-white mb-4">Looking for detailed service breakdowns?</h3>
            <p className="text-lg text-off-white/80 mb-8 max-w-2xl mx-auto">
              Explore our pricing options below with comprehensive feature lists.
            </p>
          </div>
        </div>
        <PricingSection />
      </div>
      
      <TechnicalEdgeSection />
      
      <div id="faq">
        <FaqSection />
      </div>
      
      <BookingSection />
      
      <FinalCtaSection />
      
      <Footer />
    </main>
  );
}
