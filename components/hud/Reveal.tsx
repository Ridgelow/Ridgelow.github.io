"use client";

import { useEffect, useRef, useState } from "react";

/** Hard snap-in when scrolled into view — mechanical, stepped. */
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
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          window.setTimeout(() => setShow(true), delayMs);
          io.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delayMs]);

  return (
    <div
      ref={ref}
      className={`${className} ${show ? "animate-hard-in" : "opacity-0"} h-full`}
    >
      {children}
    </div>
  );
}
