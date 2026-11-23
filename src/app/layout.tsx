import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"], display: "swap" });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://arlassystems.com"),
  title: "Arlas Systems — Better Systems. Smarter Operations.",
  description:
    "Arlas Systems helps businesses eliminate repetitive work, connect their operations and build intelligent systems that make work simpler, faster and more effective. AI, automation, software and integrations.",
  keywords: [
    "business automation",
    "AI automation",
    "business process automation",
    "systems integration",
    "workflow automation",
    "AI agents",
    "fintech systems",
    "operational efficiency",
    "business technology",
    "intelligent workflows",
    "custom business software",
  ],
  authors: [{ name: "Arlas Systems" }],
  openGraph: {
    title: "Arlas Systems — Better Systems. Smarter Operations.",
    description:
      "AI, automation, software and integrations — built around how your business actually operates.",
    type: "website",
    url: "https://arlassystems.com",
    siteName: "Arlas Systems",
    images: [{ url: "/arlas-profile-dark.svg", width: 800, height: 800, alt: "Arlas Systems" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arlas Systems — Better Systems. Smarter Operations.",
    description: "Better systems. Smarter operations. AI, automation, software and integrations.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/arlas-favicon.svg" type="image/svg+xml" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
