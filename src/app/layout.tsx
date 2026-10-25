import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://arlassystems.com"),
  title: "Arlas Systems — Forward Deployed Engineering",
  description:
    "I'm a Forward Deployed Engineer. I work alongside businesses to understand their problems, build the right technical solutions, and get them into production—working closely with the people and systems they need to serve. Backend systems, APIs, fintech infrastructure, and production engineering.",
  keywords: [
    "forward deployed engineering",
    "backend engineering",
    "Fullstack engineering",
    "fintech infrastructure",
    "API development",
    "Nigeria software engineer",
    "system integrations",
    "production engineering",
  ],
  authors: [{ name: "Arlas Systems" }],
  openGraph: {
    title: "Arlas Systems — Forward Deployed Engineering",
    description:
      "Turning business challenges into working technology. Backend systems, APIs, fintech infrastructure, and production engineering.",
    type: "website",
    url: "https://arlassystems.com",
    siteName: "Arlas Systems",
    images: [
      {
        url: "/arlas-profile-dark.svg",
        width: 800,
        height: 800,
        alt: "Arlas Systems",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arlas Systems — Forward Deployed Engineering",
    description:
      "Turning business challenges into working technology.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/arlas-favicon.svg" type="image/svg+xml" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
