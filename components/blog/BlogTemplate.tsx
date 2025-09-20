"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, Share2, Twitter, Linkedin, Facebook, Bookmark, Eye, ThumbsUp, ChevronRight, CheckCircle, AlertTriangle, Info, Lightbulb } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface BlogTemplateProps {
  children: React.ReactNode;
  title: string;
  description: string;
  category: string;
  date: string;
  readTime: string;
  backHref?: string;
  backText?: string;
  featuredImage?: string;
  tags?: string[];
  author?: {
    name: string;
    avatar?: string;
    bio?: string;
  };
  className?: string;
}

interface SectionProps {
  title: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
}

interface HighlightBoxProps {
  children: React.ReactNode;
  type?: "info" | "warning" | "success" | "tip";
  className?: string;
}

interface StatsGridProps {
  stats: Array<{
    value: string;
    label: string;
    description?: string;
  }>;
}

export function BlogTemplate({
  children,
  title,
  description,
  category,
  date,
  readTime,
  backHref = "/blog",
  backText = "Back to Blog",
  featuredImage,
  tags = [],
  author,
  className
}: BlogTemplateProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollProgress(scrollPercent);
    };

    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareTitle = title;

  const handleShare = (platform: string) => {
    const urls = {
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareTitle)}&url=${encodeURIComponent(shareUrl)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`
    };

    window.open(urls[platform as keyof typeof urls], '_blank', 'width=600,height=400');
  };

  return (
    <main className={cn("flex min-h-screen flex-col bg-charcoal-black", className)}>
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-charcoal-gray z-50">
        <motion.div
          className="h-full bg-gradient-to-r from-kiiro-yellow to-orange-400 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div className="pt-24 pb-20">
        {/* Back Navigation */}
        <div className="container mx-auto px-4 mb-8">
          <Link
            href={backHref}
            className="inline-flex items-center gap-2 text-kiiro-yellow hover:text-kiiro-yellow/80 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{backText}</span>
          </Link>
        </div>

        <div className="container mx-auto px-4 max-w-4xl">
          {/* Article Header */}
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            {/* Category & Meta Info */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="px-4 py-2 bg-gradient-to-r from-kiiro-yellow/20 to-orange-500/20 text-kiiro-yellow text-sm font-semibold rounded-full border border-kiiro-yellow/30">
                {category}
              </span>
              <div className="flex items-center gap-2 text-off-white/60 text-sm">
                <Calendar className="w-4 h-4" />
                <span>{date}</span>
              </div>
              <div className="flex items-center gap-2 text-off-white/60 text-sm">
                <Clock className="w-4 h-4" />
                <span>{readTime}</span>
              </div>
              {author && (
                <div className="flex items-center gap-2 text-off-white/60 text-sm">
                  <span>By {author.name}</span>
                </div>
              )}
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-5xl font-bold text-off-white mb-6 leading-tight">
              {title}
            </h1>

            {/* Description */}
            <p className="text-xl text-off-white/80 leading-relaxed mb-8">
              {description}
            </p>

            {/* Tags */}
            {tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-8">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-white/5 text-off-white/70 text-sm rounded-full border border-white/10"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            {/* Featured Image */}
            {featuredImage && (
              <div className="relative aspect-video rounded-2xl overflow-hidden mb-8 border border-white/10">
                <Image
                  src={featuredImage}
                  alt={title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-black/50 to-transparent" />
              </div>
            )}

            {/* Actions Bar */}
            <div className="flex items-center justify-between py-4 border-t border-white/10">
              <div className="flex items-center gap-4">
                <button className="flex items-center gap-1 text-off-white/60 hover:text-kiiro-yellow transition-colors">
                  <Eye className="w-4 h-4" />
                  <span className="text-sm">2.3K views</span>
                </button>
                <button className="flex items-center gap-1 text-off-white/60 hover:text-kiiro-yellow transition-colors">
                  <ThumbsUp className="w-4 h-4" />
                  <span className="text-sm">127 likes</span>
                </button>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsBookmarked(!isBookmarked)}
                  className={cn(
                    "p-2 rounded-lg transition-colors",
                    isBookmarked
                      ? "text-kiiro-yellow bg-kiiro-yellow/10"
                      : "text-off-white/60 hover:text-kiiro-yellow hover:bg-white/5"
                  )}
                >
                  <Bookmark className="w-4 h-4" />
                </button>
                <div className="relative group">
                  <button className="p-2 text-off-white/60 hover:text-kiiro-yellow hover:bg-white/5 rounded-lg transition-colors">
                    <Share2 className="w-4 h-4" />
                  </button>
                  <div className="absolute right-0 top-full mt-2 bg-charcoal-gray border border-white/10 rounded-lg p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 min-w-[140px] z-10">
                    <div className="text-xs text-off-white/60 mb-2 px-2">Share this article</div>
                    <div className="flex gap-1">
                      <button
                        onClick={() => handleShare('twitter')}
                        className="p-2 hover:bg-white/5 rounded text-blue-400 transition-colors"
                      >
                        <Twitter className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleShare('linkedin')}
                        className="p-2 hover:bg-white/5 rounded text-blue-600 transition-colors"
                      >
                        <Linkedin className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleShare('facebook')}
                        className="p-2 hover:bg-white/5 rounded text-blue-500 transition-colors"
                      >
                        <Facebook className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.header>

          {/* Article Content */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg prose-invert max-w-none"
          >
            {children}
          </motion.article>
        </div>
      </div>
    </main>
  );
}

// Professional Section Component
export function BlogSection({ title, children, icon, className }: SectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={cn("mb-12", className)}
    >
      <div className="flex items-center gap-3 mb-6">
        {icon && <div className="text-kiiro-yellow">{icon}</div>}
        <h2 className="text-2xl md:text-3xl font-bold text-off-white">{title}</h2>
      </div>
      <div className="text-off-white/80 leading-relaxed">
        {children}
      </div>
    </motion.section>
  );
}

// Highlight Box Component
export function HighlightBox({ children, type = "info", className }: HighlightBoxProps) {
  const styles = {
    info: {
      bg: "bg-blue-500/10 border-blue-500/20",
      icon: <Info className="w-5 h-5 text-blue-400" />,
      text: "text-blue-400"
    },
    warning: {
      bg: "bg-orange-500/10 border-orange-500/20",
      icon: <AlertTriangle className="w-5 h-5 text-orange-400" />,
      text: "text-orange-400"
    },
    success: {
      bg: "bg-green-500/10 border-green-500/20",
      icon: <CheckCircle className="w-5 h-5 text-green-400" />,
      text: "text-green-400"
    },
    tip: {
      bg: "bg-purple-500/10 border-purple-500/20",
      icon: <Lightbulb className="w-5 h-5 text-purple-400" />,
      text: "text-purple-400"
    }
  };

  const style = styles[type];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn(
        "rounded-xl border p-6 my-8",
        style.bg,
        style.text,
        className
      )}
    >
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 mt-1">
          {style.icon}
        </div>
        <div className="text-off-white/90">
          {children}
        </div>
      </div>
    </motion.div>
  );
}

// Stats Grid Component
export function StatsGrid({ stats }: StatsGridProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12"
    >
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-gradient-to-br from-charcoal-gray/50 to-charcoal-gray/30 rounded-xl p-6 border border-white/10 text-center hover:border-kiiro-yellow/30 transition-colors"
        >
          <div className="text-3xl font-bold text-kiiro-yellow mb-2">
            {stat.value}
          </div>
          <div className="text-lg text-off-white mb-1">
            {stat.label}
          </div>
          {stat.description && (
            <div className="text-sm text-off-white/60">
              {stat.description}
            </div>
          )}
        </motion.div>
      ))}
    </motion.div>
  );
}

// CTA Section Component
export function BlogCTA({
  title,
  description,
  primaryButton,
  secondaryButton,
  className
}: {
  title: string;
  description: string;
  primaryButton: { text: string; href: string };
  secondaryButton?: { text: string; href: string };
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={cn("bg-gradient-to-r from-kiiro-yellow/10 to-orange-500/10 rounded-3xl p-8 md:p-12 border border-kiiro-yellow/20 text-center my-16", className)}
    >
      <h3 className="text-2xl md:text-3xl font-bold text-off-white mb-4">
        {title}
      </h3>
      <p className="text-off-white/70 mb-8 max-w-2xl mx-auto">
        {description}
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          href={primaryButton.href}
          className="px-8 py-3 bg-kiiro-yellow text-charcoal-black font-semibold rounded-lg hover:bg-kiiro-yellow/90 transition-colors inline-flex items-center gap-2"
        >
          {primaryButton.text}
          <ChevronRight className="w-4 h-4" />
        </Link>
        {secondaryButton && (
          <Link
            href={secondaryButton.href}
            className="px-8 py-3 bg-white/10 text-off-white border border-white/20 rounded-lg hover:bg-white/20 transition-colors"
          >
            {secondaryButton.text}
          </Link>
        )}
      </div>
    </motion.div>
  );
}
