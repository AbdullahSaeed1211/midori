import { Metadata } from "next";
import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";
import { CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Payment Successful",
  robots: { index: false },
};

export default function SuccessPage() {
  return (
    <main className="min-h-screen bg-charcoal-black">
      <Header />
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-lg text-center">
          <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-green-500" />
          </div>
          <h1 className="text-2xl font-bold text-off-white mb-4">
            Payment Successful!
          </h1>
          <p className="text-off-white/70 mb-8">
            Thank you for subscribing to Kiiro Hosting & Care. We will be in touch within 24 hours to set up your account.
          </p>
          <a
            href="/portal"
            className="inline-flex items-center gap-2 px-6 py-3 bg-kiiro-yellow text-charcoal-black font-semibold rounded-lg hover:bg-kiiro-yellow/90 transition-colors"
          >
            Go to Portal
          </a>
        </div>
      </section>
      <Footer />
    </main>
  );
}
