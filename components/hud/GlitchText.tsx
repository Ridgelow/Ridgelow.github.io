"use client";

import { useEffect, useState } from "react";

/** Wraps text and fires brief chromatic glitches on an irregular cadence. */
export default function GlitchText({
  children,
  className = "",
  as: Tag = "span",
  minMs = 3200,
  maxMs = 7800,
}: {
  children: React.ReactNode;
  className?: string;
  as?: "span" | "h1" | "h2" | "h3" | "p";
  minMs?: number;
  maxMs?: number;
}) {
  const [hit, setHit] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;

    let timeout: number;
    const schedule = () => {
      const wait = minMs + Math.random() * (maxMs - minMs);
      timeout = window.setTimeout(() => {
        setHit(true);
        window.setTimeout(() => setHit(false), 280);
        schedule();
      }, wait);
    };
    schedule();
    return () => window.clearTimeout(timeout);
  }, [minMs, maxMs]);

  return (
    <Tag className={`${className} ${hit ? "is-glitching" : ""}`.trim()}>
      {children}
    </Tag>
  );
}
