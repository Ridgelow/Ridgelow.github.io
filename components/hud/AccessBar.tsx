"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  label?: string;
  children: React.ReactNode;
};

/** AccessBar — Watch Dogs-style progress rail that fills when it enters view. */
export default function AccessBar({ label = "ACCESS", children }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [armed, setArmed] = useState(false);
  const [filled, setFilled] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setArmed(true);
          io.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className="flex flex-col gap-4">
      <div className="flex items-center justify-between gap-4">
        <span className="font-mono text-xs tracking-[.2em] text-bo-smoke">{label}</span>
        <span className="font-mono text-xs text-bo-steel">
          {filled ? "GRANTED" : armed ? "SCANNING…" : "LOCKED"}
        </span>
      </div>
      <div className="relative h-1 w-full overflow-hidden bg-bo-iron">
        <div
          className={`h-full bg-bo-white ${armed ? "animate-access-fill" : "w-0"}`}
          onAnimationEnd={() => setFilled(true)}
        />
      </div>
      <div className="flex flex-col gap-3.5">
        {children}
      </div>
    </div>
  );
}
