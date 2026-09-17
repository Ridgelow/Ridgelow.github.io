"use client";

import { useEffect, useRef, useState } from "react";

/** Smooth rise-in when scrolled into view. Visible by default if IO never fires. */
export default function Reveal({
  children,
  className = "",
  delayMs = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setShow(true);
      return;
    }

    let done = false;
    const reveal = () => {
      if (done) return;
      done = true;
      window.setTimeout(() => setShow(true), delayMs);
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          reveal();
          io.disconnect();
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    io.observe(el);

    // Fallback: never leave content invisible (IO edge cases / no-JS hydration delay)
    const fallback = window.setTimeout(reveal, 1200 + delayMs);

    return () => {
      io.disconnect();
      window.clearTimeout(fallback);
    };
  }, [delayMs]);

  return (
    <div
      ref={ref}
      className={`transition-[opacity,transform] duration-500 ease-out motion-reduce:transition-none ${
        show ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}
