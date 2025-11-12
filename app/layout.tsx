import type { Metadata, Viewport } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ChatButton } from "@/components/ui/chat-button";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["700"], // Bold
  variable: "--font-space-grotesk",
});


export const metadata: Metadata = {
  title: {
    template: "%s | Kiiro.cx",
    default: "Professional Website Design for Entrepreneurs & Growing Businesses | Kiiro.cx",
  },
  description: "Professional websites that establish credibility and convert visitors into customers. Perfect for new entrepreneurs, course creators, service providers, and growing businesses. Fast delivery, transparent pricing.",
  keywords: [
    "professional website design", 
    "entrepreneur website", 
    "course creator website",
    "small business website",
    "new business website",
    "website for entrepreneurs",
    "conversion optimization", 
    "landing pages", 
    "business credibility website",
    "startup website design",
    "service provider website",
    "online course website",
    "business growth website",
    "web design", 
    "NextJS", 
    "React", 
    "digital strategy",
    "mobile-first websites",
    "performance optimization",
    "SEO-friendly websites",
    "user experience design",
    "web engineering",
    "responsive websites",
    // Local market keywords
    "web development Lucknow",
    "website design India", 
    "UAE web development",
    "Dubai web design",
    "SMB website design",
    "small business web development",
    "boutique web agency",
    "fast website delivery",
    "7 day website",
    "interior designer website",
    "service business website",
    "local business web design",
    "Indian web developer",
    "affordable web design India"
  ],
  authors: [{ name: "Kiiro.cx" }],
  metadataBase: new URL('https://kiiro.cx'),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kiiro.cx",
    siteName: "Kiiro.cx",
    title: "Professional Website Design for Entrepreneurs & Growing Businesses",
    description: "Professional websites that establish credibility and convert visitors into customers. Perfect for entrepreneurs, course creators, and growing businesses.",
    images: [
      {
        url: "/projects/kiiro.webp",
        width: 1200,
        height: 630,
        alt: "Kiiro.cx - Professional Website Design for Growing Businesses"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Website Design for Entrepreneurs & Growing Businesses | Kiiro.cx",
    description: "Professional websites that establish credibility and convert visitors into customers. Perfect for entrepreneurs, course creators, and growing businesses.",
    images: ["/projects/kiiro.webp"],
    site: "@kiirocx",
    creator: "@kiirocx"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1
    }
  },
  alternates: {
    canonical: 'https://kiiro.cx'
  }
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#000000',
  colorScheme: 'dark',
  viewportFit: 'cover'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Google Analytics 4 - Temporarily disabled */}
        {/* {process.env.GA_MEASUREMENT_ID && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_MEASUREMENT_ID}`}></script>
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.GA_MEASUREMENT_ID}', {
                    page_title: document.title,
                    page_location: window.location.href,
                    // Enhanced tracking features
                    send_page_view: true,
                    allow_google_signals: true,
                    allow_ad_features: true,
                    // Custom dimensions for business tracking
                    custom_map: {
                      'dimension1': 'page_type',
                      'dimension2': 'user_type',
                      'dimension3': 'conversion_funnel'
                    },
                    // Enhanced e-commerce tracking
                    ecommerce: true,
                    // User engagement tracking
                    engagement_time_msec: 100
                  });
                `,
              }}
            />
          </>
        )} */}

        {/* JSON-LD Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Kiiro.cx",
              "alternateName": "Kiiro",
              "url": "https://kiiro.cx",
              "logo": "https://kiiro.cx/projects/kiiro.webp",
              "description": "Professional website design agency helping SMBs create high-converting websites in 7-14 days. Specializing in entrepreneur websites, course creator platforms, and service business digital presence.",
              "foundingDate": "2025",
              "founders": [
                {
                  "@type": "Person",
                  "name": "Founder",
                  "jobTitle": "Full-Stack Developer"
                }
              ],
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Lucknow",
                "addressRegion": "Uttar Pradesh",
                "addressCountry": "IN"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-7398826339",
                "contactType": "Customer Service",
                "url": "https://kiiro.cx/contact"
              },
              "sameAs": [
                "https://www.linkedin.com/company/kiirocx",
                "https://kiiro.cx"
              ],
              "serviceType": [
                "Web Design",
                "Web Development",
                "Conversion Rate Optimization",
                "SEO-Friendly Websites",
                "Mobile-First Design",
                "E-commerce Websites",
                "Landing Page Design",
                "Business Website Design"
              ],
              "areaServed": [
                {
                  "@type": "Country",
                  "name": "India"
                },
                {
                  "@type": "Country",
                  "name": "United Arab Emirates"
                },
                {
                  "@type": "Country",
                  "name": "United States"
                },
                {
                  "@type": "Country",
                  "name": "United Kingdom"
                },
                {
                  "@type": "Country",
                  "name": "Canada"
                },
                {
                  "@type": "Country",
                  "name": "Australia"
                }
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Web Design Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Professional Website Design",
                      "description": "Complete website design and development for entrepreneurs and growing businesses"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Conversion Optimization",
                      "description": "Optimize existing websites for better conversion rates and user experience"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "SEO-Friendly Development",
                      "description": "Build websites optimized for search engines and performance"
                    }
                  }
                ]
              }
            })
          }}
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} font-body font-normal text-base antialiased bg-charcoal-black dark`}
      >
        {children}
        <ChatButton />
        {/* <GAEventTracker /> */}
      </body>
    </html>
  );
}
