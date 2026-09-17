"use client";

import { useState } from "react";
import ResumePanel from "./ResumePanel";

export default function ResumeRow() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="flex items-center justify-between gap-4 border-b border-bo-rule px-6 py-7 lg:px-10">
        <span className="font-mono text-sm text-bo-white">$ open resume.pdf</span>
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="border border-bo-white bg-bo-white px-5 py-3 font-mono text-xs tracking-[.14em] text-bo-black hover:bg-bo-black hover:text-bo-white"
        >
          Open →
        </button>
      </section>

      <ResumePanel open={open} onClose={() => setOpen(false)} />
    </>
  );
}
