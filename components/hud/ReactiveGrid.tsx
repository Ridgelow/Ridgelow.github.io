"use client";

import { useEffect, useRef, useState } from "react";

/** Background grid that brightens under the cursor. */
export default function ReactiveGrid() {
  const ref = useRef<HTMLDivElement>(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const enable = () => setOn(fine.matches && !reduce.matches);
    enable();
    fine.addEventListener("change", enable);
    reduce.addEventListener("change", enable);
    return () => {
      fine.removeEventListener("change", enable);
      reduce.removeEventListener("change", enable);
    };
  }, []);

  useEffect(() => {
    if (!on) return;
    const el = ref.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      el.style.setProperty("--gx", `${e.clientX}px`);
      el.style.setProperty("--gy", `${e.clientY}px`);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [on]);

  return (
    <div
      ref={ref}
      className={`site-texture ${on ? "site-texture-reactive" : ""}`}
      aria-hidden
      style={
        {
          ["--gx" as string]: "50%",
          ["--gy" as string]: "40%",
        } as React.CSSProperties
      }
    />
  );
}
