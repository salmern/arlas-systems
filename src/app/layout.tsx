import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"], display: "swap" });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"], display: "swap" });
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://arlassystems.com"),
  title: "Arlas Systems — Better Systems. Smarter Operations.",
  description:
    "Arlas Systems helps businesses simplify operations through software, AI, automation and connected systems.",
  keywords: ["business automation", "AI automation", "systems integration", "workflow automation", "custom software", "operational efficiency", "fintech systems"],
  authors: [{ name: "Arlas Systems" }],
  openGraph: {
    title: "Arlas Systems — Better Systems. Smarter Operations.",
    description: "AI, automation, software and integrations — built around how your business actually operates.",
    type: "website",
    url: "https://arlassystems.com",
    siteName: "Arlas Systems",
    images: [{ url: "/arlas-profile-dark.svg", width: 800, height: 800, alt: "Arlas Systems" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arlas Systems — Better Systems. Smarter Operations.",
    description: "Better systems. Smarter operations.",
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
      <body className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
