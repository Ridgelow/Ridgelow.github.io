"use client";

import { useEffect, useRef, useState } from "react";

type Pt = { x: number; y: number };

/** Desktop HUD crosshair + short trail. Disabled on touch / reduced motion. */
export default function HudCursor() {
  const [on, setOn] = useState(false);
  const [hovering, setHovering] = useState(false);
  const tip = useRef<Pt>({ x: -100, y: -100 });
  const mid = useRef<Pt>({ x: -100, y: -100 });
  const tipEl = useRef<HTMLDivElement>(null);
  const midEl = useRef<HTMLDivElement>(null);
  const trailEl = useRef<HTMLDivElement>(null);
  const raf = useRef(0);

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
    if (!on) {
      document.documentElement.classList.remove("hud-cursor");
      return;
    }
    document.documentElement.classList.add("hud-cursor");

    const onMove = (e: MouseEvent) => {
      tip.current = { x: e.clientX, y: e.clientY };
    };
    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      const interactive = t?.closest("a, button, [role='button'], input, textarea, label");
      setHovering(!!interactive);
    };

    const loop = () => {
      mid.current.x += (tip.current.x - mid.current.x) * 0.28;
      mid.current.y += (tip.current.y - mid.current.y) * 0.28;
      const tx = mid.current.x + (tip.current.x - mid.current.x) * 0.55;
      const ty = mid.current.y + (tip.current.y - mid.current.y) * 0.55;

      if (tipEl.current) {
        tipEl.current.style.transform = `translate3d(${tip.current.x}px, ${tip.current.y}px, 0) translate(-50%, -50%)`;
      }
      if (midEl.current) {
        midEl.current.style.transform = `translate3d(${tx}px, ${ty}px, 0) translate(-50%, -50%)`;
      }
      if (trailEl.current) {
        trailEl.current.style.transform = `translate3d(${mid.current.x}px, ${mid.current.y}px, 0) translate(-50%, -50%)`;
      }
      raf.current = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    raf.current = requestAnimationFrame(loop);

    return () => {
      document.documentElement.classList.remove("hud-cursor");
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(raf.current);
    };
  }, [on]);

  if (!on) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[80]" aria-hidden>
      <div
        ref={trailEl}
        className="absolute h-1 w-1 bg-bo-ghost/50"
        style={{ willChange: "transform" }}
      />
      <div
        ref={midEl}
        className="absolute h-1.5 w-1.5 border border-bo-smoke/60"
        style={{ willChange: "transform" }}
      />
      <div
        ref={tipEl}
        className={`absolute border border-bo-white transition-[width,height] duration-75 ${
          hovering ? "h-7 w-7" : "h-4 w-4"
        }`}
        style={{ willChange: "transform" }}
      >
        <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-bo-white/40" />
        <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-bo-white/40" />
      </div>
    </div>
  );
}
