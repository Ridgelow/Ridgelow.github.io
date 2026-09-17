"use client";

import { useEffect } from "react";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function ResumePanel({ open, onClose }: Props) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[70] flex items-end justify-center sm:items-center"
      style={{
        paddingTop: "max(0.75rem, env(safe-area-inset-top))",
        paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))",
        paddingLeft: "max(0.75rem, env(safe-area-inset-left))",
        paddingRight: "max(0.75rem, env(safe-area-inset-right))",
      }}
      role="dialog"
      aria-modal="true"
      aria-label="Resume"
    >
      <button
        type="button"
        className="absolute inset-0 bg-bo-black/85"
        aria-label="Close resume panel"
        onClick={onClose}
      />

      <div
        className="relative z-10 flex w-full max-w-4xl flex-col overflow-hidden border border-bo-rule bg-bo-coal shadow-edge"
        style={{ maxHeight: "calc(100dvh - 1.5rem)" }}
      >
        {/* Always-visible action bar */}
        <div className="sticky top-0 z-20 flex shrink-0 flex-wrap items-center justify-between gap-2 border-b border-bo-rule bg-bo-coal px-3 py-3 sm:px-5">
          <span className="font-mono text-xs text-bo-white sm:text-sm">$ view resume.pdf</span>
          <div className="flex items-center gap-2">
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

        <div className="min-h-0 flex-1 overflow-auto bg-bo-ash" style={{ minHeight: "40vh" }}>
          <iframe
            src="/resume.pdf#toolbar=0&navpanes=0&view=FitH"
            title="Resume PDF"
            className="h-full min-h-[60vh] w-full border-0 sm:min-h-[70vh]"
          />
        </div>

        <div className="sticky bottom-0 z-20 flex shrink-0 items-center justify-between gap-3 border-t border-bo-rule bg-bo-coal px-3 py-3 sm:px-5">
          <span className="font-mono text-xs text-bo-steel">esc to close</span>
          <a
            href="/resume.pdf"
            download="Hasnain_Rizvi_Resume.pdf"
            className="font-mono text-xs tracking-[.12em] text-bo-smoke underline hover:text-bo-white"
          >
            Download resume ↓
          </a>
        </div>
      </div>
    </div>
  );
}
