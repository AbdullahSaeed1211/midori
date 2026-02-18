import { Metadata } from "next";
import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";
import { XCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Payment Cancelled",
  robots: { index: false },
};

export default function CancelPage() {
  return (
    <main className="min-h-screen bg-charcoal-black">
      <Header />
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-lg text-center">
          <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <XCircle className="w-8 h-8 text-red-500" />
          </div>
          <h1 className="text-2xl font-bold text-off-white mb-4">
            Payment Cancelled
          </h1>
          <p className="text-off-white/70 mb-8">
            Your payment was cancelled. No charges were made. If you have any questions, please contact us.
          </p>
          <a
            href="/hosting"
            className="inline-flex items-center gap-2 px-6 py-3 bg-kiiro-yellow text-charcoal-black font-semibold rounded-lg hover:bg-kiiro-yellow/90 transition-colors"
          >
            Try Again
          </a>
        </div>
      </section>
      <Footer />
    </main>
  );
}
