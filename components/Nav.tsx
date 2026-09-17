"use client";

import { useState } from "react";
import Logo from "./Logo";

const LINKS = [
  { label: "profile", href: "/#profile" },
  { label: "work", href: "/#work" },
  { label: "skills", href: "/#skills" },
  { label: "writing", href: "/#writing" },
  { label: "contact", href: "/#contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-bo-rule bg-bo-black/90 backdrop-blur-sm">
        <div className="mx-auto flex h-16 max-w-[1100px] items-center justify-between px-6 lg:h-20 lg:px-10">
          <Logo size={40} />

          <nav className="hidden items-center gap-8 md:flex lg:gap-10" aria-label="Primary">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="nav-link font-mono text-[13px] tracking-[.04em] text-bo-smoke hover:text-bo-white"
              >
                ./{l.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-11 w-11 items-center justify-center md:hidden"
          >
            {open ? (
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" aria-hidden="true">
                <path d="M1 1l16 16M17 1L1 17" />
              </svg>
            ) : (
              <svg width="22" height="16" viewBox="0 0 22 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" aria-hidden="true">
                <path d="M0 1h22M0 8h22M0 15h22" />
              </svg>
            )}
          </button>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-50 flex flex-col bg-bo-black md:hidden">
          <div className="mx-auto flex h-16 w-full max-w-[1100px] items-center justify-between px-6">
            <Logo size={40} />
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="flex h-11 w-11 items-center justify-center"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" aria-hidden="true">
                <path d="M1 1l16 16M17 1L1 17" />
              </svg>
            </button>
          </div>
          <nav className="mx-auto flex w-full max-w-[1100px] flex-1 flex-col justify-center gap-0 px-6">
            <span className="mb-4 font-mono text-xs text-bo-steel">$ ls ./menu</span>
            {LINKS.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="animate-hard-in flex items-center justify-between border-b border-bo-iron py-5"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <span className="font-mono text-xl text-bo-white">./{l.label}</span>
                <span className="text-xs tracking-[.16em] text-bo-smoke">→</span>
              </a>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
