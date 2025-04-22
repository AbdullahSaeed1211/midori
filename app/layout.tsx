import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Noto_Sans_JP } from "next/font/google";
import "./globals.css";

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
  description: "High-performance websites and web applications engineered for conversion, engagement, and measurable business results.",
  keywords: ["web development", "conversion optimization", "landing pages", "SaaS development", "web design", "NextJS", "React"],
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
        alt: "MidoriLabs.studio"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "MidoriLabs.studio | Strategic Web Engineering",
    description: "High-performance websites & web solutions designed for conversion and business growth",
    images: ["/og-image.jpg"]
  },
  robots: {
    index: true,
    follow: true
  },
  alternates: {
    canonical: 'https://midorilabs.studio'
  }
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#4CAF50',
  colorScheme: 'dark'
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
        className={`${spaceGrotesk.variable} ${notoSansJP.variable} font-body font-normal text-base antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
