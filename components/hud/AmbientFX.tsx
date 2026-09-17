"use client";

import { useEffect, useState } from "react";

/** Persistent HUD chrome — live clock, signal blink, rare static flashes. */
export default function AmbientFX() {
  const [clock, setClock] = useState("--:--:--");
  const [hex, setHex] = useState("0x0000");
  const [burst, setBurst] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;

    const tick = () => {
      const now = new Date();
      setClock(
        now.toLocaleTimeString("en-GB", {
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
      setHex(`0x${Math.floor(Math.random() * 0xffff).toString(16).padStart(4, "0")}`);
    };
    tick();
    const clockId = window.setInterval(tick, 1000);

    let burstTimeout: number;
    const scheduleBurst = () => {
      burstTimeout = window.setTimeout(() => {
        setBurst(true);
        window.setTimeout(() => setBurst(false), 380);
        scheduleBurst();
      }, 9000 + Math.random() * 14000);
    };
    scheduleBurst();

    return () => {
      window.clearInterval(clockId);
      window.clearTimeout(burstTimeout);
    };
  }, []);

  return (
    <>
      <div
        className="pointer-events-none fixed bottom-4 left-4 z-[55] hidden flex-col gap-1 font-mono text-[10px] tracking-[.14em] text-bo-steel md:flex"
        aria-hidden
      >
        <span className="flex items-center gap-2">
          <span className="inline-block h-1.5 w-1.5 bg-bo-white animate-signal" />
          SIGNAL // ONLINE
        </span>
        <span>{clock}</span>
        <span className="text-bo-rule">{hex}</span>
      </div>

      <div
        className="pointer-events-none fixed bottom-4 right-4 z-[55] hidden font-mono text-[10px] tracking-[.14em] text-bo-steel md:block"
        aria-hidden
      >
        RIDGELOW // SYS.OK
      </div>

      {burst && (
        <div
          className="animate-static pointer-events-none fixed inset-0 z-[54]"
          aria-hidden
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E\")",
            backgroundSize: "140px 140px",
            mixBlendMode: "overlay",
          }}
        />
      )}
    </>
  );
}
