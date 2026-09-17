"use client";

import { useEffect, useState } from "react";

/** Fixed CRT scanlines + optional boot static flash. */
export default function ScanOverlay({ boot = true }: { boot?: boolean }) {
  const [burst, setBurst] = useState(boot);

  useEffect(() => {
    if (!boot) return;
    const t = window.setTimeout(() => setBurst(false), 480);
    return () => window.clearTimeout(t);
  }, [boot]);

  return (
    <>
      <div className="scanlines" aria-hidden />
      {burst && (
        <div
          className="animate-static pointer-events-none fixed inset-0 z-[61]"
          aria-hidden
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.55'/%3E%3C/svg%3E\")",
            backgroundSize: "180px 180px",
            mixBlendMode: "overlay",
          }}
        />
      )}
    </>
  );
}
