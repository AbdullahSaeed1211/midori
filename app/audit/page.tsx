import { Metadata } from "next";
import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";
import { ConversionAudit } from "@/components/ui/conversion-audit";

export const metadata: Metadata = {
  title: "Free Website Audit | Is Your Website Converting Visitors? | kiiro.cx",
  description: "Get a free website audit and discover what's preventing your website from converting visitors into customers. Perfect for entrepreneurs, course creators, and growing businesses. Instant results.",
  keywords: "free website audit, website conversion audit, entrepreneur website audit, course creator website analysis, business website review, conversion optimization",
  authors: [{ name: "kiiro.cx" }],
  openGraph: {
    type: "website",
    title: "Free Website Audit | Discover What's Costing You Customers",
    description: "Free website audit for entrepreneurs and growing businesses. Discover what's preventing your website from converting visitors into customers.",
    url: "https://kiiro.cx/audit",
    siteName: "kiiro.cx",
  },
  alternates: {
    canonical: "https://kiiro.cx/audit",
  },
};

export default function AuditPage() {
  return (
    <main className="flex min-h-screen flex-col bg-charcoal-black">
      <Header />
      
      <div className="pt-20">
        <ConversionAudit />
      </div>
      
      <Footer />
    </main>
  );
} 