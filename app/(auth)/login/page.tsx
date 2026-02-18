'use client'

import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'
import { useState, useTransition } from 'react'
import Link from 'next/link'
import { ArrowRight, Loader2, Sparkles } from 'lucide-react'

export default function LoginPage() {
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError(null)
    setLoading(true)

    const formData = new FormData(e.currentTarget)
    const email = formData.get('email') as string
    const password = formData.get('password') as string

    const supabase = createClient()
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      setError(error.message)
      setLoading(false)
      return
    }

    router.push('/portal')
    router.refresh()
  }

  return (
    <div className="min-h-screen bg-charcoal-black relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-kiiro-yellow/5 via-transparent to-transparent rounded-full blur-3xl" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-green-500/5 via-transparent to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-kiiro-yellow/10 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="relative min-h-screen flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <Link href="/" className="inline-flex items-center gap-2 text-2xl font-bold text-kiiro-yellow">
              <Sparkles className="w-6 h-6" />
              Kiiro
            </Link>
            <h1 className="text-3xl font-bold text-off-white mt-6 mb-2">Welcome back</h1>
            <p className="text-off-white/60">Sign in to access your client portal</p>
          </div>

          <div className="bg-charcoal-gray/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-off-white mb-2">Email address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  disabled={loading}
                  className="w-full px-4 py-3 rounded-lg border bg-charcoal-black/50 border-off-white/20 text-off-white placeholder:text-off-white/40 focus:outline-none focus:border-kiiro-yellow/50 focus:ring-2 focus:ring-kiiro-yellow/20 transition-all disabled:opacity-50"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label htmlFor="password" className="block text-sm font-medium text-off-white">Password</label>
                  <Link href="/forgot-password" className="text-xs text-kiiro-yellow hover:text-kiiro-yellow/80">Forgot password?</Link>
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  disabled={loading}
                  className="w-full px-4 py-3 rounded-lg border bg-charcoal-black/50 border-off-white/20 text-off-white placeholder:text-off-white/40 focus:outline-none focus:border-kiiro-yellow/50 focus:ring-2 focus:ring-kiiro-yellow/20 transition-all disabled:opacity-50"
                  placeholder="••••••••"
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
                className="w-full py-3.5 bg-kiiro-yellow text-charcoal-black font-semibold rounded-lg hover:bg-kiiro-yellow/90 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 transition-all hover:shadow-lg hover:shadow-kiiro-yellow/25"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Signing in...
                  </>
                ) : (
                  <>
                    Sign in
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>

            <div className="mt-6 pt-6 border-t border-off-white/10">
              <p className="text-center text-off-white/60 text-sm">
                Don&apos;t have an account?{' '}
                <Link href="/signup" className="text-kiiro-yellow hover:text-kiiro-yellow/80 font-medium transition-colors">
                  Sign up
                </Link>
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link href="/" className="inline-flex items-center gap-2 text-sm text-off-white/60 hover:text-off-white transition-colors">
              <ArrowRight className="w-4 h-4 rotate-180" />
              Back to website
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
