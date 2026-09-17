import type { Metadata } from "next";
import { fontVariables } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ridgelow.github.io"),
  title: "Hasnain Rizvi",
  description: "Building full-stack and AI products that ship. Incoming MS CS @ Georgia Tech.",
  icons: {
    icon: [
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    title: "Hasnain Rizvi",
    description: "Building full-stack and AI products that ship. Incoming MS CS @ Georgia Tech.",
    url: "https://ridgelow.github.io",
    siteName: "Hasnain Rizvi",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Hasnain Rizvi — Ridgelow",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hasnain Rizvi",
    description: "Building full-stack and AI products that ship. Incoming MS CS @ Georgia Tech.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={fontVariables}>
      <body>{children}</body>
    </html>
  );
}
