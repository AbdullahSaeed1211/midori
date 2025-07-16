import { Metadata } from "next";
import { HeroSection } from "@/components/landing/hero-section";
import { PainPointSection } from "@/components/landing/pain-point-section";
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
import { SectionDivider } from "@/components/ui/section-divider";

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
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Kiiro.cx",
    "url": "https://kiiro.cx",
    "logo": "https://kiiro.cx/projects/kiiro.webp",
    "description": "Professional website design and development services in Dubai, UAE. Conversion-focused websites for entrepreneurs and growing businesses.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "AE",
      "addressRegion": "Dubai",
      "addressLocality": "Dubai"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "25.2048",
      "longitude": "55.2708"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Dubai"
      },
      {
        "@type": "Country",
        "name": "United Arab Emirates"
      },
      {
        "@type": "Country",
        "name": "India"
      }
    ],
    "serviceType": [
      "Web Development",
      "Website Design",
      "E-commerce Development",
      "Mobile-First Design",
      "SEO Services",
      "Conversion Optimization"
    ],
    "priceRange": "$400-$2000",
    "currenciesAccepted": ["USD", "AED"],
    "paymentAccepted": "Bank Transfer, PayPal, Stripe",
    "openingHours": "Mo-Fr 09:00-18:00",
    "telephone": "+971-XXX-XXXX",
    "email": "hello@kiiro.cx",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Web Development Services Dubai",
      "itemListElement": [
        {
          "@type": "Offer",
          "name": "Website Development Dubai",
          "description": "Custom website development services for Dubai businesses",
          "areaServed": "Dubai, UAE"
        },
        {
          "@type": "Offer",
          "name": "E-commerce Development UAE",
          "description": "Online store development for UAE businesses",
          "areaServed": "United Arab Emirates"
        }
      ]
    }
  };

  return (
    <main className="flex min-h-screen flex-col" id="main-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema)
        }}
      />
      <Header />
      
      <HeroSection />
      
      <SectionDivider variant="subtle" />
      
      <PainPointSection />
      
      <div id="services">
        <ServicesSection />
      </div>
      
      <TrustBadges />
      
      <MidFunnelCTA />
      
      <ProcessTimeline />
      
      <SectionDivider variant="wave" />
      
      <CaseStudiesSection />
      
      <SectionDivider variant="geometric" />
      
      <div id="client-wins">
        <TestimonialsSection />
      </div>
      
      <ConversionAuditCTA />
      
      <div id="pricing">
        <PricingOptionsSection />
        <PricingSection />
      </div>
      
      <SectionDivider variant="dotted" />
      
      <WhyKiiroSectionEnhanced />
      
      <FounderStorySection />
      
      <LeadMagnetSection />
      
      <div id="faq">
        <FaqSection />
      </div>
      
      <SectionDivider variant="gradient" />
      
      <BookingSection />
      
      <Footer />
      
      <ChatButton />
    </main>
  );
}
