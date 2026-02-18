'use client'

import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Loader2, Sparkles, CheckCircle, KeyRound } from 'lucide-react'

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setLoading(true)

    const supabase = createClient()
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/update-password`,
    })

    if (error) {
      setError(error.message)
      setLoading(false)
      return
    }

    setSuccess(true)
    setLoading(false)
  }

  if (success) {
    return (
      <div className="min-h-screen bg-charcoal-black relative overflow-hidden flex items-center justify-center px-4">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-green-500/5 via-transparent to-transparent rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-md w-full text-center">
          <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-green-400" />
          </div>
          <h1 className="text-3xl font-bold text-off-white mb-3">Check your email</h1>
          <p className="text-off-white/60 mb-6">
            We sent a password reset link to<br />
            <span className="text-kiiro-yellow">{email}</span>
          </p>
          <p className="text-sm text-off-white/40 mb-6">
            Click the link in the email to reset your password
          </p>
          <Link href="/login" className="inline-flex items-center gap-2 text-kiiro-yellow hover:underline">
            Back to login <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-charcoal-black relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-kiiro-yellow/5 via-transparent to-transparent rounded-full blur-3xl" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-green-500/5 via-transparent to-transparent rounded-full blur-3xl" />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="relative min-h-screen flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <Link href="/" className="inline-flex items-center gap-2 text-2xl font-bold text-kiiro-yellow">
              <Sparkles className="w-6 h-6" />
              Kiiro
            </Link>
            <h1 className="text-3xl font-bold text-off-white mt-6 mb-2">Forgot password?</h1>
            <p className="text-off-white/60">No worries, we&apos;ll send you reset instructions</p>
          </div>

          <div className="bg-charcoal-gray/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-off-white mb-2">Email address</label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-lg border bg-charcoal-black/50 border-off-white/20 text-off-white placeholder:text-off-white/40 focus:outline-none focus:border-kiiro-yellow/50 focus:ring-2 focus:ring-kiiro-yellow/20 transition-all"
                  placeholder="you@example.com"
                />
              </div>

              {error && (
                <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20">
                  <p className="text-sm text-red-400">{error}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 bg-kiiro-yellow text-charcoal-black font-semibold rounded-lg hover:bg-kiiro-yellow/90 disabled:opacity-50 flex items-center justify-center gap-2 transition-all hover:shadow-lg hover:shadow-kiiro-yellow/25"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <KeyRound className="w-4 h-4" />
                    Reset password
                  </>
                )}
              </button>
            </form>

            <div className="mt-6 pt-6 border-t border-off-white/10">
              <Link href="/login" className="flex items-center justify-center gap-2 text-sm text-off-white/60 hover:text-off-white transition-colors">
                <ArrowRight className="w-4 h-4 rotate-180" />
                Back to login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
