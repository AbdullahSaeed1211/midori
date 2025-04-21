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
  weight: ["300"], // Light
  variable: "--font-noto-sans-jp",
});

export const metadata: Metadata = {
  title: {
    template: "%s | MidoriLabs.studio",
    default: "MidoriLabs.studio | AI-Powered Web Engineering",
  },
  description: "AI-enhanced landing pages, SaaS platforms, and brand identities engineered for measurable growth",
  keywords: ["web development", "AI", "landing pages", "SaaS", "NextJS", "React"],
  authors: [{ name: "MidoriLabs.studio" }],
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${notoSansJP.variable} font-body antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
