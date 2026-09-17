import localFont from "next/font/local";
import { Saira_Condensed, Barlow } from "next/font/google";

// Hacked by David Libeau (watchdogsfont.com), CC-BY — the actual Watch Dogs wordmark face.
// CREDIT IS REQUIRED wherever this ships: "Hacked — David Libeau, watchdogsfont.com".
// See components/Footer.tsx, which already carries it — don't remove that line.
export const hacked = localFont({
  src: "../public/fonts/HACKED.woff2",
  variable: "--font-hacked",
  display: "swap",
});

// Pixel Operator Mono by Jayvee Enaguas, CC0 — the bitmap face for all machine-generated text
// (IDs, coordinates, counts, timestamps). Wants sizes in multiples of 8px (16/24/32) — off-grid
// sizes blur it.
export const pixelMono = localFont({
  src: "../public/fonts/PixelOperatorMono.woff2",
  variable: "--font-pixel",
  display: "swap",
});

// Saira Condensed carries section/card titles (`font-display`) — the only text allowed to glitch.
export const saira = Saira_Condensed({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-display",
  display: "swap",
});

// Barlow carries body copy, labels, captions (`font-sans`).
export const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-barlow",
  display: "swap",
});

export const fontVariables = `${hacked.variable} ${pixelMono.variable} ${saira.variable} ${barlow.variable}`;
