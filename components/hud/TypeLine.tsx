"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  text: string;
  /** Delay before typing starts (ms). */
  delay?: number;
  className?: string;
  showCaret?: boolean;
  onDone?: () => void;
  /** ms per character — mechanical tick, not smooth. */
  charMs?: number;
};

export default function TypeLine({
  text,
  delay = 0,
  className = "",
  showCaret = true,
  onDone,
  charMs = 28,
}: Props) {
  const [visible, setVisible] = useState(0);
  const [started, setStarted] = useState(false);
  const [done, setDone] = useState(false);
  const onDoneRef = useRef(onDone);
  onDoneRef.current = onDone;

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      setVisible(text.length);
      setStarted(true);
      setDone(true);
      onDoneRef.current?.();
      return;
    }
    const t = window.setTimeout(() => setStarted(true), delay);
    return () => window.clearTimeout(t);
  }, [delay, text]);

  useEffect(() => {
    if (!started || done) return;
    if (visible >= text.length) {
      setDone(true);
      onDoneRef.current?.();
      return;
    }
    const t = window.setTimeout(() => setVisible((v) => v + 1), charMs);
    return () => window.clearTimeout(t);
  }, [started, visible, text, charMs, done]);

  return (
    <span className={`inline-flex items-baseline ${className}`}>
      <span className="whitespace-pre">{text.slice(0, visible)}</span>
      {showCaret && !done && (
        <span
          className="ml-0.5 inline-block h-[1em] w-[0.55em] translate-y-[0.1em] bg-bo-white animate-caret-blink"
          aria-hidden
        />
      )}
    </span>
  );
}
