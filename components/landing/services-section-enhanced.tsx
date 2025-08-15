// components/landing/services-section.tsx
'use client';

import {
  ArrowRight,
  CheckCircle,
  Target,
  TrendingUp,
  Users,
  Zap,
} from 'lucide-react';
import Link from 'next/link';
import { BlurFade } from '@/components/magicui/blur-fade';
import { cn } from '@/lib/utils';

const problems = [
  {
    icon: Users,
    title: 'No Professional Online Presence',
    pillar: 'Website Foundation',
    metric: 'Credibility + Leads',
    desc: 'We craft sleek, conversion-ready websites that earn trust.',
    fixes: ['Polished design', 'Clear messaging', 'Mobile-first', 'Fast & SEO'],
  },
  {
    icon: Target,
    title: 'Unclear Messaging',
    pillar: 'Messaging Framework',
    metric: '↑ 60% engagement',
    desc: 'We make your value obvious in the first 5 seconds.',
    fixes: ['Crisp headline', 'Benefit copy', 'Stronger CTA', 'Handle objections'],
  },
  {
    icon: TrendingUp,
    title: 'No Social Proof',
    pillar: 'Trust Building',
    metric: '↑ 30% sign-ups',
    desc: 'We add proof that removes doubt and builds authority.',
    fixes: ['Testimonials', 'Case studies', 'Trust badges', 'Founder story'],
  },
  {
    icon: Zap,
    title: 'Poor Mobile UX',
    pillar: 'Mobile-First',
    metric: '↑ 50% mobile CVR',
    desc: 'We optimise mobile flows for speed and effortless navigation.',
    fixes: ['Thumb nav', 'Fast load', 'Simple flows', 'Tap targets'],
  },
];

export function ServicesSection() {
  return (
    <BlurFade delay={0.15} inView>
      <section className="relative isolate overflow-hidden bg-charcoal-black py-24 sm:py-28 text-off-white">
        {/* Soft vignette */}
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-kiiro-yellow/5 via-transparent to-transparent [mask-image:radial-gradient(65%_65%_at_50%_40%,#000_40%,transparent_100%)]" />

        <div className="container mx-auto max-w-6xl px-4">
          {/* Header */}
          <header className="mx-auto mb-16 max-w-2xl text-center">
            <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.25em] text-kiiro-yellow/80">
              Website Optimisation
            </p>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light leading-snug tracking-tight">
              4 Problems{' '}
              <span className="text-kiiro-yellow">Costing You Customers</span>
            </h2>

            <p className="mx-auto mt-5 max-w-lg text-sm text-off-white/60">
              We find the leaks in your conversions—and fix them with timeless design.
            </p>
          </header>

          {/* Problem Grid */}
          <div className="grid gap-8 md:grid-cols-2">
            {problems.map((item, i) => {
              const Icon = item.icon;
              return (
                <article
                  key={i}
                  className={cn(
                    'group relative flex flex-col gap-5 rounded-3xl border border-white/5 bg-white/5/10 p-8',
                    'backdrop-blur-md transition-all hover:-translate-y-0.5 hover:border-white/10'
                  )}
                >
                  {/* Card header */}
                  <header className="flex gap-4 items-start">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-kiiro-yellow/5">
                      <Icon className="h-4 w-4 text-kiiro-yellow" />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-base font-medium tracking-tight text-off-white">
                        {item.title}
                      </h3>
                      <div className="mt-1 flex items-center gap-2 text-[11px] uppercase tracking-wide text-teal-accent/80">
                        {item.pillar}
                        <span className="ml-auto rounded-full bg-kiiro-yellow/10 px-2 py-0.5 text-[10px] text-kiiro-yellow/80">
                          {item.metric}
                        </span>
                      </div>
                    </div>
                  </header>

                  <p className="text-sm text-off-white/70">{item.desc}</p>

                  {/* Fix list */}
                  <ul className="mt-auto grid grid-cols-2 gap-x-4 gap-y-2 pt-4 text-[13px] text-off-white/60">
                    {item.fixes.map((fix, idx) => (
                      <li key={idx} className="flex items-center gap-1.5">
                        <CheckCircle className="h-3 w-3 text-teal-accent/70" />
                        {fix}
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>

          {/* CTA */}
          <footer className="mt-20 flex flex-col items-center gap-3">
            <Link
              href="/audit"
              className="inline-flex items-center gap-2 rounded-full bg-kiiro-yellow px-6 py-3 text-sm font-medium text-charcoal-black transition hover:bg-kiiro-yellow/90"
            >
              Free Audit <ArrowRight className="h-4 w-4" />
            </Link>
            <p className="text-[11px] text-off-white/50">
              30-second form – no strings attached
            </p>
          </footer>
        </div>
      </section>
    </BlurFade>
  );
}
