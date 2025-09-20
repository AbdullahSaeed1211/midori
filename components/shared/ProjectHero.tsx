"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

interface ProjectHeroProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  backHref: string;
  backText: string;
  tags?: string[];
  stats?: Array<{
    label: string;
    value: string;
    description?: string;
  }>;
  cta?: {
    text: string;
    href: string;
    external?: boolean;
  };
  className?: string;
}

export function ProjectHero({
  title,
  subtitle,
  description,
  image,
  backHref,
  backText,
  tags = [],
  stats = [],
  cta,
  className = ""
}: ProjectHeroProps) {
  return (
    <section className={`relative pt-24 pb-20 ${className}`}>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/20 to-blue-500/20 opacity-30" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Back link */}
        <Link
          href={backHref}
          className="inline-flex items-center gap-2 text-off-white/80 hover:text-kiiro-yellow transition-colors mb-12"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>{backText}</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block text-kiiro-yellow font-medium tracking-wider uppercase text-sm">
                {subtitle}
              </span>
              <div className="px-3 py-1 bg-green-500/20 text-green-400 text-xs font-bold rounded-full border border-green-500/30">
                PRODUCTION READY
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-off-white mb-6">
              {title}
            </h1>

            <p className="text-xl text-off-white/80 mb-6">
              {description}
            </p>

            {/* Tags */}
            {tags.length > 0 && (
              <div className="flex flex-wrap gap-3 mb-8">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex px-3 py-1 rounded-full text-sm font-medium bg-kiiro-yellow/10 text-kiiro-yellow"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Stats */}
            {stats.length > 0 && (
              <div className="grid grid-cols-2 gap-6 mb-8">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="text-sm text-off-white/60 mb-1">{stat.label}</p>
                    <p className="text-lg text-off-white">{stat.value}</p>
                    {stat.description && (
                      <p className="text-sm text-off-white/50">{stat.description}</p>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* CTA */}
            {cta && (
              <div className="flex items-center gap-2 text-green-400">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-sm font-medium">
                  {cta.external ? (
                    <a
                      href={cta.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 hover:text-green-300 transition-colors"
                    >
                      {cta.text}
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  ) : (
                    <Link
                      href={cta.href}
                      className="inline-flex items-center gap-2 hover:text-green-300 transition-colors"
                    >
                      {cta.text}
                    </Link>
                  )}
                </span>
              </div>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative aspect-video rounded-lg overflow-hidden border border-white/10"
          >
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
