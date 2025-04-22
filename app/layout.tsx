import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { StickyContactButton } from "@/components/ui/sticky-contact-button";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["700"], // Bold
  variable: "--font-space-grotesk",
});

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["300", "400"], // Load Light (300) and Regular (400)
  variable: "--font-noto-sans-jp",
});

export const metadata: Metadata = {
  title: {
    template: "%s | MidoriLabs.studio",
    default: "MidoriLabs.studio | Strategic Web Engineering for Business Growth",
  },
  description: "High-performance websites and web applications engineered for conversion, engagement, and measurable business results. We build custom digital solutions that drive growth.",
  keywords: [
    "web development", 
    "conversion optimization", 
    "landing pages", 
    "SaaS development", 
    "web design", 
    "NextJS", 
    "React", 
    "business growth",
    "digital strategy",
    "mobile-first websites",
    "performance optimization",
    "SEO-friendly websites",
    "user experience design",
    "web engineering",
    "responsive websites"
  ],
  authors: [{ name: "MidoriLabs.studio" }],
  metadataBase: new URL('https://midorilabs.studio'),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://midorilabs.studio",
    siteName: "MidoriLabs.studio",
    title: "MidoriLabs.studio | Strategic Web Engineering",
    description: "High-performance websites & web solutions designed for conversion and business growth",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MidoriLabs.studio - Web Engineering for Growth"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "MidoriLabs.studio | Strategic Web Engineering",
    description: "High-performance websites & web solutions designed for conversion and business growth",
    images: ["/og-image.jpg"],
    site: "@midorilabs",
    creator: "@midorilabs"
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
    canonical: 'https://midorilabs.studio'
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
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${notoSansJP.variable} font-body font-normal text-base antialiased bg-charcoal-black`}
      >
        {children}
        <StickyContactButton />
      </body>
    </html>
  );
}
