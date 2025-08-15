import { Metadata } from "next";
import { HeroSection } from "@/components/landing/hero-section";
import { ServicesSection } from "@/components/landing/services-section-enhanced";
import { WhyKiiroSectionEnhanced } from "@/components/landing/why-kiiro-section-enhanced";
import { PricingOptionsSection } from "@/components/landing/pricing-options-section";
import { PricingSection } from "@/components/landing/pricing-section";
import { TestimonialsSection } from "@/components/landing/testimonials-section";
import { FaqSection } from "@/components/landing/faq-section";
import { Footer } from "@/components/shared/footer";
import { Header } from "@/components/shared/header";
import { BookingSection } from "@/components/landing/booking-section";
import { ProcessTimeline } from "@/components/landing/process-timeline";
import { CaseStudiesSection } from "@/components/landing/case-studies-section";
import { ConversionAuditCTA } from "@/components/landing/conversion-audit-cta";
import { TrustBadges } from "@/components/ui/trust-badges";
import { FounderStorySection } from "@/components/landing/founder-story-section";
import { LeadMagnetSection } from "@/components/ui/lead-magnet-section";
import { MidFunnelCTA } from "@/components/landing/mid-funnel-cta";
import { ChatButton } from "@/components/ui/chat-button";

export const metadata: Metadata = {
  title: "Professional Website Design for Entrepreneurs & Growing Businesses | kiiro.cx",
  description: "Get a professional website that establishes credibility and converts visitors into customers. Perfect for new entrepreneurs, course creators, and growing businesses. Fast delivery, transparent pricing.",
  keywords: "professional website design, entrepreneur website, course creator website, small business website, website for new business, conversion optimization, website design for startups, business credibility website",
  authors: [{ name: "kiiro.cx" }],
  openGraph: {
    type: "website",
    title: "Professional Websites for Entrepreneurs & Growing Businesses | kiiro.cx",
    description: "Build credibility and convert visitors into customers with a professional website. Designed for entrepreneurs, course creators, and growing businesses.",
    siteName: "kiiro.cx",
  }
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col" id="main-content">
      <Header />
      
      <HeroSection />


      
      <div id="services">
        <ServicesSection />
      </div>
      <ProcessTimeline />

      
      <div id="client-wins">
        <TestimonialsSection />
      </div>
      <MidFunnelCTA />


      
      

      
      <CaseStudiesSection />
      
      <TrustBadges />
      
      
      <ConversionAuditCTA />
      
      <div id="pricing">
        <PricingOptionsSection />
        <PricingSection />
      </div>
      
      <WhyKiiroSectionEnhanced />
      
      <FounderStorySection />
      
      <LeadMagnetSection />
      
      <div id="faq">
        <FaqSection />
      </div>
      
      <BookingSection />
      
      <Footer />
      
      <ChatButton />
    </main>
  );
}
