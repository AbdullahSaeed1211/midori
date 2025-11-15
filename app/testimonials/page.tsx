import React from "react";
import { Metadata } from "next";
import { TestimonialsForm } from "@/components/ui/testimonials-form";
import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";

export const metadata: Metadata = {
  title: "Share Your Testimonial | Kiiro.cx - Client Success Stories",
  description: "Share your experience working with kiiro.cx. Help other entrepreneurs discover our web development services and contribute to our growing community of successful clients.",
  keywords: ["testimonial", "client review", "kiiro.cx feedback", "web development testimonial", "client success story"],
  authors: [{ name: "kiiro.cx" }],
  openGraph: {
    type: "website",
    title: "Share Your Testimonial | Kiiro.cx - Client Success Stories",
    description: "Share your experience working with kiiro.cx and help other entrepreneurs discover our services.",
    url: "https://kiiro.cx/testimonials",
    siteName: "kiiro.cx",
  },
  alternates: {
    canonical: "https://kiiro.cx/testimonials",
  },
};

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-charcoal-black text-off-white">
      <Header />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Share Your Experience</h1>
            <p className="text-lg text-off-white/80">
              We&apos;d love to hear about your experience working with kiiro.cx. Your feedback helps us improve and helps other businesses discover our services.
            </p>
          </div>

          <TestimonialsForm />
        </div>
      </div>
      <Footer />
    </div>
  );
} 