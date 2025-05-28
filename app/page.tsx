import { Metadata } from "next";
import { HeroSection } from "@/components/landing/hero-section";
import { PainPointSection } from "@/components/landing/pain-point-section";
import { ServicesSection } from "@/components/landing/services-section";
import { WhyKiiroSection } from "@/components/landing/why-kiiro-section";
import { PricingOptionsSection } from "@/components/landing/pricing-options-section";
import { PricingSection } from "@/components/landing/pricing-section";
import { TestimonialsSection } from "@/components/landing/testimonials-section";
import { FaqSection } from "@/components/landing/faq-section";
import { Footer } from "@/components/shared/footer";
import { Header } from "@/components/shared/header";
import { BookingSection } from "@/components/landing/booking-section";
import { ProcessTimeline } from "@/components/landing/process-timeline";
import { CaseStudiesSection } from "@/components/landing/case-studies-section";

export const metadata: Metadata = {
  title: "kiiro.cx | High-Converting Web Design & Development",
  description: "Boutique digital agency specializing in AI-enhanced landing pages, SaaS platforms, and brand identities engineered for measurable growth. Personal attention, rapid delivery.",
  keywords: "web design, web development, conversion optimization, landing pages, SaaS development, digital branding, boutique agency",
  authors: [{ name: "kiiro.cx" }],
  openGraph: {
    type: "website",
    title: "kiiro.cx | Web Engineering for Growth",
    description: "Boutique web studio delivering high-performance websites & web solutions designed for conversion and built for scale.",
    siteName: "kiiro.cx",
  }
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      
      <HeroSection />
      
      <PainPointSection />
      
      <div id="services">
        <ServicesSection />
      </div>
      
      <ProcessTimeline />
      
      <CaseStudiesSection />
      
      <div id="client-wins">
        <TestimonialsSection />
      </div>
      
      <div id="pricing">
        <PricingOptionsSection />
        <PricingSection />
      </div>
      
      <WhyKiiroSection />
      
      <div id="faq">
        <FaqSection />
      </div>
      
      <BookingSection />
      
      <Footer />
    </main>
  );
}
