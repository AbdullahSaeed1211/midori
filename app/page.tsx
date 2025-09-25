import { Metadata } from "next";
import { HeroSection } from "@/components/landing/hero-section";
import { ServicesSection } from "@/components/landing/services-section-enhanced";
import { WhyKiiroSectionEnhanced } from "@/components/landing/why-kiiro-section-enhanced";
import { default as PricingCards } from "@/components/ui/pricing-component";
import { TestimonialsSection } from "@/components/landing/testimonials-section";
import { FaqSection } from "@/components/landing/faq-section";
import { Footer } from "@/components/shared/footer";
import { Header } from "@/components/shared/header";
import { BookingSection } from "@/components/landing/booking-section";
import { CaseStudiesSection } from "@/components/landing/case-studies-section";
import { CombinedCTASection } from "@/components/landing/combined-cta-section";
// import { LeadMagnetSection } from "@/components/ui/lead-magnet-section";
import { ChatButton } from "@/components/ui/chat-button";
import { BrandedParallaxText } from "@/components/ui/parallax-text-scroll";

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
       {/* Parallax Text Section */}
       <section className="relative bg-charcoal-black py-8 overflow-hidden">
        <BrandedParallaxText />
      </section>

      <CaseStudiesSection />

      
     
      <div id="client-wins">
        <TestimonialsSection />
      </div>


       <div id="pricing" className="bg-charcoal-black py-32">
        <PricingCards />
      </div>

      <WhyKiiroSectionEnhanced />
      <CombinedCTASection />

      
      <div id="faq">
        <FaqSection />
      </div>
      
      
      <BookingSection />
      
      <Footer />
      
      <ChatButton />
    </main>
  );
}
