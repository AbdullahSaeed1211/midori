import { Metadata } from "next";
import { HeroSection } from "@/components/landing/hero-section";
import { ServicesSection } from "@/components/landing/services-section";
import { OfferingsSection } from "@/components/landing/offerings-section";
import { BenefitsSection } from "@/components/landing/benefits-section";
import { FeaturedWorkSection } from "@/components/landing/featured-work-section";
import { WhyMidoriLabsSection } from "@/components/landing/why-midorilabs-section";
import { PricingSection } from "@/components/landing/pricing-section";
import { TestimonialsSection } from "@/components/landing/testimonials-section";
import { TechnicalEdgeSection } from "@/components/landing/technical-edge-section";
import { FaqSection } from "@/components/landing/faq-section";
import { Footer } from "@/components/shared/footer";
import { Header } from "@/components/shared/header";
import { FinalCtaSection } from "@/components/landing/final-cta-section";
import { BookingSection } from "@/components/landing/booking-section";
import { ProcessTimeline } from "@/components/landing/process-timeline";

export const metadata: Metadata = {
  title: "MidoriLabs.studio | AI-Powered Web Engineering",
  description: "AI-enhanced landing pages, SaaS platforms, and brand identities engineered for measurable growth",
  keywords: "web design, web development, conversion optimization, landing pages, SaaS development, digital branding",
  authors: [{ name: "MidoriLabs" }],
  openGraph: {
    type: "website",
    title: "MidoriLabs.studio | Web Engineering for Growth",
    description: "High-performance websites & web solutions designed for conversion and built for scale.",
    siteName: "MidoriLabs.studio",
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
      
      <WhyMidoriLabsSection />
      
      <FeaturedWorkSection />
      
      <div id="pricing">
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
