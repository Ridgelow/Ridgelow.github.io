"use client";

import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function ResumePanel({ open, onClose }: Props) {
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setMounted(true);
    const mq = window.matchMedia("(max-width: 640px)");
    const sync = () => setIsMobile(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    const prevOverflow = document.body.style.overflow;
    const prevTouch = document.body.style.touchAction;
    document.body.style.overflow = "hidden";
    document.body.style.touchAction = "none";
    document.documentElement.classList.add("resume-open");
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      document.body.style.touchAction = prevTouch;
      document.documentElement.classList.remove("resume-open");
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  const pdfSrc = useMemo(() => {
    if (typeof window === "undefined") return "/resume.pdf";
    // Mobile browsers often ignore FitH and open PDFs huge in iframes.
    // Google's embedded viewer scales to width when the PDF is publicly reachable.
    if (isMobile) {
      const host = window.location.hostname;
      const isLocal = host === "localhost" || host === "127.0.0.1";
      if (isLocal) {
        return "/resume.pdf#toolbar=0&navpanes=0&view=FitW";
      }
      const absolute = `${window.location.origin}/resume.pdf`;
      return `https://docs.google.com/gview?embedded=1&url=${encodeURIComponent(absolute)}`;
    }
    return "/resume.pdf#toolbar=0&navpanes=0&scrollbar=0&view=FitH";
  }, [isMobile]);

  if (!open || !mounted) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[200] flex items-stretch justify-center sm:items-center sm:p-3"
      style={{
        paddingTop: "env(safe-area-inset-top)",
        paddingBottom: "env(safe-area-inset-bottom)",
        paddingLeft: "env(safe-area-inset-left)",
        paddingRight: "env(safe-area-inset-right)",
      }}
      role="dialog"
      aria-modal="true"
      aria-label="Resume"
    >
      <button
        type="button"
        className="absolute inset-0 bg-bo-black/90"
        aria-label="Close resume panel"
        onClick={onClose}
      />

      <div
        className="relative z-10 flex h-[100dvh] w-full max-w-4xl flex-col overflow-hidden border-0 bg-bo-coal sm:h-[min(92dvh,900px)] sm:border sm:border-bo-rule"
      >
        <div className="flex shrink-0 flex-wrap items-center justify-between gap-2 border-b border-bo-rule bg-bo-coal px-3 py-3 sm:px-5">
          <span className="font-mono text-xs text-bo-white sm:text-sm">$ view resume.pdf</span>
          <div className="flex items-center gap-2">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-bo-rule px-3 py-2 font-mono text-xs tracking-[.12em] text-bo-chalk hover:border-bo-white hover:text-bo-white sm:hidden"
            >
              Open ↗
            </a>
            <a
              href="/resume.pdf"
              download="Hasnain_Rizvi_Resume.pdf"
              className="border border-bo-white bg-bo-white px-3 py-2 font-mono text-xs tracking-[.12em] text-bo-black hover:bg-bo-chalk"
            >
              Download ↓
            </a>
            <button
              type="button"
              onClick={onClose}
              className="border border-bo-rule px-3 py-2 font-mono text-xs tracking-[.12em] text-bo-chalk hover:border-bo-white hover:text-bo-white"
            >
              Close ✕
            </button>
          </div>
        </div>

        <div className="relative min-h-0 flex-1 overflow-hidden bg-bo-ash">
          <iframe
            key={pdfSrc}
            src={pdfSrc}
            title="Resume PDF"
            className="h-full w-full border-0"
          />
        </div>

        <div className="flex shrink-0 items-center justify-between gap-3 border-t border-bo-rule bg-bo-coal px-3 py-3 sm:px-5">
          <span className="hidden font-mono text-xs text-bo-steel sm:inline">esc to close</span>
          <span className="font-mono text-xs text-bo-steel sm:hidden">pinch to zoom · open for native view</span>
          <a
            href="/resume.pdf"
            download="Hasnain_Rizvi_Resume.pdf"
            className="font-mono text-xs tracking-[.12em] text-bo-smoke underline hover:text-bo-white"
          >
            Download resume ↓
          </a>
        </div>
      </div>
    </div>,
    document.body
  );
}
