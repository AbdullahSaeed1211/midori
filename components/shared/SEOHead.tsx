"use client";

import React from "react";
import Head from "next/head";

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string[];
  canonicalUrl: string;
  ogImage?: string;
  ogType?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  category?: string;
  tags?: string[];
  wordCount?: number;
  readingTime?: string;
  jsonLd?: object;
}

export function SEOHead({
  title,
  description,
  keywords = [],
  canonicalUrl,
  ogImage = "/og-image.jpg",
  ogType = "article",
  publishedTime,
  modifiedTime,
  author,
  category,
  tags = [],
  wordCount,
  readingTime,
  jsonLd
}: SEOHeadProps) {
  const fullTitle = `${title} | kiiro.cx`;
  const ogTitle = ogType === "article" ? `${title} | kiiro.cx` : title;

  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(", ")} />
      <meta name="author" content={author || "kiiro.cx"} />
      {category && <meta name="category" content={category} />}
      {readingTime && <meta name="twitter:data2" content={readingTime} />}
      {wordCount && <meta name="word-count" content={wordCount.toString()} />}

      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="kiiro.cx" />
      <meta property="og:locale" content="en_US" />
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {author && <meta property="article:author" content={author} />}
      {tags.map(tag => (
        <meta key={tag} property="article:tag" content={tag} />
      ))}

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={ogTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />
      <meta property="twitter:creator" content="@kiiroagency" />
      <meta property="twitter:site" content="@kiiroagency" />

      {/* Additional SEO Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1" />
      <meta name="bingbot" content="index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1" />

      {/* Mobile and App Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="theme-color" content="#FFE400" />

      {/* Performance and Caching */}
      <meta httpEquiv="Cache-Control" content="public, max-age=31536000" />

      {/* Structured Data */}
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}

      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />

      {/* Favicon and Icons */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
    </Head>
  );
}

// Helper function to generate structured data for articles
export function generateArticleStructuredData({
  title,
  description,
  url,
  image,
  publishedTime,
  modifiedTime,
  author = "kiiro.cx",
  wordCount = 1500,
  readingTime = "8 min read"
}: {
  title: string;
  description: string;
  url: string;
  image: string;
  publishedTime: string;
  modifiedTime: string;
  author?: string;
  wordCount?: number;
  readingTime?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "image": image,
    "author": {
      "@type": "Organization",
      "name": author,
      "url": "https://kiiro.cx"
    },
    "publisher": {
      "@type": "Organization",
      "name": "kiiro.cx",
      "logo": {
        "@type": "ImageObject",
        "url": "https://kiiro.cx/logo.png"
      }
    },
    "datePublished": publishedTime,
    "dateModified": modifiedTime,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    },
    "wordCount": wordCount,
    "timeRequired": `PT${readingTime.replace(" min read", "")}M`,
    "isAccessibleForFree": true
  };
}

// Helper function to generate structured data for case studies
export function generateCaseStudyStructuredData({
  title,
  description,
  url,
  image,
  category,
  technologies = [],
  results = []
}: {
  title: string;
  description: string;
  url: string;
  image: string;
  category: string;
  technologies?: string[];
  results?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": title,
    "description": description,
    "image": image,
    "url": url,
    "genre": category,
    "keywords": technologies.join(", "),
    "creator": {
      "@type": "Organization",
      "name": "kiiro.cx",
      "url": "https://kiiro.cx"
    },
    "about": technologies.map(tech => ({
      "@type": "Technology",
      "name": tech
    })),
    "result": results.map(result => ({
      "@type": "Text",
      "text": result
    }))
  };
}
