"use client";

import { useEffect, useState } from "react";
import TypeLine from "./hud/TypeLine";

const BOOT = [
  { text: "$ boot --user ridgelow", className: "text-bo-steel" },
  { text: "loading profile ................ ok", className: "text-bo-smoke" },
  { text: "access // identity confirmed", className: "text-bo-chalk" },
];

export default function Hero() {
  const [phase, setPhase] = useState(0);
  const [hex, setHex] = useState("0000");
  const showTitle = phase >= BOOT.length;

  useEffect(() => {
    if (!showTitle) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const id = window.setInterval(() => {
      setHex(Math.floor(Math.random() * 0xffff).toString(16).padStart(4, "0"));
    }, 4200);
    return () => window.clearInterval(id);
  }, [showTitle]);

  return (
    <section className="border-b border-bo-rule px-6 py-10 lg:px-10 lg:py-14">
      <div className="flex max-w-3xl flex-col gap-2">
        {BOOT.map((line, i) =>
          phase >= i ? (
            <TypeLine
              key={line.text}
              text={line.text}
              delay={i === 0 ? 60 : 0}
              className={`font-mono text-xs ${line.className}`}
              showCaret={phase === i}
              onDone={() => setPhase((p) => Math.max(p, i + 1))}
            />
          ) : null
        )}

        {showTitle && (
          <span className="inline-flex items-baseline font-mono text-xs text-bo-steel">
            <span className="whitespace-pre">sys // idle 0x{hex}</span>
            <span
              className="ml-0.5 inline-block h-[1em] w-[0.55em] translate-y-[0.1em] bg-bo-steel/80 animate-caret-blink"
              aria-hidden
            />
          </span>
        )}

        {showTitle && (
          <div className="mt-6 animate-hard-in">
            <h1 className="font-sans text-3xl font-medium leading-tight tracking-tight text-bo-white animate-glitch md:text-[40px] md:leading-[1.15]">
              Building full-stack and AI products that ship.
            </h1>
          </div>
        )}
      </div>
    </section>
  );
}
