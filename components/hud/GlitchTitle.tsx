"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  children: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "span";
  /** Continuous idle tear (display titles). */
  loop?: boolean;
};

/** Display-face only — Saira Condensed is the only text allowed to glitch. */
export default function GlitchTitle({
  children,
  className = "",
  as: Tag = "h2",
  loop = true,
}: Props) {
  const ref = useRef<HTMLElement>(null);
  const [hit, setHit] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHit(true);
          io.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const motion = [loop ? "animate-glitch" : "", hit ? "is-glitching" : ""]
    .filter(Boolean)
    .join(" ");

  return (
    <Tag
      ref={ref as never}
      className={`font-display ${className} ${motion}`}
      onMouseEnter={() => {
        setHit(false);
        requestAnimationFrame(() => setHit(true));
      }}
      onAnimationEnd={(e) => {
        if (e.animationName === "glitch-hit") setHit(false);
      }}
    >
      {children}
    </Tag>
  );
}
