"use client";

import { useEffect, useState } from "react";

const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#$%&<>/\\|";

/** Unscramble from noise/hex into the real title once. */
export default function DecryptText({
  text,
  className = "",
  as: Tag = "h1",
  charMs = 28,
}: {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "span";
  charMs?: number;
}) {
  const [out, setOut] = useState(() =>
    text
      .split("")
      .map((c) => (c === " " ? " " : GLYPHS[Math.floor(Math.random() * GLYPHS.length)]))
      .join("")
  );

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setOut(text);
      return;
    }

    let i = 0;
    let frame = 0;
    const id = window.setInterval(() => {
      frame += 1;
      setOut(
        text
          .split("")
          .map((c, idx) => {
            if (c === " ") return " ";
            if (idx < i) return text[idx];
            return GLYPHS[(idx * 7 + frame * 3) % GLYPHS.length];
          })
          .join("")
      );
      if (frame % 2 === 0) i += 1;
      if (i > text.length) {
        setOut(text);
        window.clearInterval(id);
      }
    }, charMs);

    return () => window.clearInterval(id);
  }, [text, charMs]);

  return <Tag className={className}>{out}</Tag>;
}
