'use client'

import { Header } from '@/components/shared/header'
import { Footer } from '@/components/shared/footer'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { AlertTriangle, RefreshCw, Home, MessageSquare } from 'lucide-react'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  console.error('Application error:', error)

  return (
    <html lang="en">
      <body className="bg-charcoal-black">
        <Header />
        <main className="min-h-screen flex items-center justify-center pt-24 pb-20">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              {/* Error Icon */}
              <div className="mb-8">
                <div className="w-24 h-24 rounded-full bg-red-500/20 flex items-center justify-center mx-auto">
                  <AlertTriangle className="w-12 h-12 text-red-400" />
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-off-white mb-4">
                Something went wrong
              </h1>

              <p className="text-lg text-off-white/70 mb-8 max-w-xl mx-auto">
                We apologize for the inconvenience. Our team has been notified and we&apos;re working to fix the issue.
              </p>

              {error?.message && (
                <div className="mb-8 p-4 bg-red-500/10 rounded-xl border border-red-500/20">
                  <p className="text-sm text-red-400 font-mono">{error.message}</p>
                </div>
              )}

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button
                  onClick={reset}
                  size="lg"
                  className="bg-kiiro-yellow text-charcoal-black hover:bg-kiiro-yellow/90"
                >
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Try again
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-off-white/20 text-off-white hover:bg-off-white/10"
                >
                  <Link href="/">
                    <Home className="w-4 h-4 mr-2" />
                    Go home
                  </Link>
                </Button>
              </div>

              {/* Contact */}
              <div className="bg-charcoal-gray/30 rounded-xl border border-off-white/10 p-6">
                <p className="text-off-white/60 mb-4">
                  Need immediate assistance?
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="border-kiiro-yellow/50 text-kiiro-yellow hover:bg-kiiro-yellow/10"
                >
                  <Link href="/contact">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Contact support
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </body>
    </html>
  )
}
