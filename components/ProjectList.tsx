"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { projects } from "@/lib/projects";
import SectionHeader from "./SectionHeader";
import Reveal from "./hud/Reveal";

export default function ProjectList() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const total = projects.length;

  const syncIndex = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const cards = Array.from(el.querySelectorAll<HTMLElement>("[data-project-card]"));
    if (!cards.length) return;
    const mid = el.scrollLeft + el.clientWidth / 2;
    let best = 0;
    let bestDist = Infinity;
    cards.forEach((card, i) => {
      const c = card.offsetLeft + card.offsetWidth / 2;
      const d = Math.abs(c - mid);
      if (d < bestDist) {
        bestDist = d;
        best = i;
      }
    });
    setIndex(best);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    syncIndex();
    el.addEventListener("scroll", syncIndex, { passive: true });
    window.addEventListener("resize", syncIndex);
    return () => {
      el.removeEventListener("scroll", syncIndex);
      window.removeEventListener("resize", syncIndex);
    };
  }, [syncIndex]);

  const indexRef = useRef(0);
  indexRef.current = index;

  const scrollTo = useCallback((i: number) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelectorAll<HTMLElement>("[data-project-card]")[i];
    if (!card) return;
    const left = card.offsetLeft - (el.clientWidth - card.offsetWidth) / 2;
    el.scrollTo({ left: Math.max(0, left), behavior: "smooth" });
    setIndex(i);
  }, []);

  const prev = () => scrollTo(Math.max(0, index - 1));
  const next = () => scrollTo(Math.min(total - 1, index + 1));

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const section = document.getElementById("work");
      if (!section) return;
      const r = section.getBoundingClientRect();
      const inView = r.top < window.innerHeight * 0.7 && r.bottom > window.innerHeight * 0.3;
      if (!inView) return;
      const i = indexRef.current;
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        scrollTo(Math.max(0, i - 1));
      }
      if (e.key === "ArrowRight") {
        e.preventDefault();
        scrollTo(Math.min(total - 1, i + 1));
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [scrollTo, total]);


  return (
    <section id="work" className="border-b border-bo-rule py-12 lg:py-14">
      <div className="px-6 lg:px-10">
        <SectionHeader command="$ ls ./projects" hint="// WORK — SELECTED" />
      </div>

      <Reveal>
        <div className="relative">
          <div
            ref={trackRef}
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-6 pb-2 [-ms-overflow-style:none] [scrollbar-width:none] lg:px-10 [&::-webkit-scrollbar]:hidden"
            style={{ scrollPaddingInline: "1.5rem" }}
          >
            {projects.map((p, i) => {
              const active = i === index;
              return (
              <Link
                key={p.slug}
                data-project-card
                href={`/work/${p.slug}`}
                className="group flex w-[min(85vw,420px)] shrink-0 snap-center flex-col overflow-hidden border border-bo-rule bg-bo-ash/70 shadow-edge transition-[box-shadow,border-color,background-color,opacity] duration-300 ease-out hover:border-bo-ghost hover:bg-bo-ash hover:shadow-glitch md:w-[min(70vw,520px)] lg:snap-start"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-bo-rule bg-bo-coal">
                  <Image
                    src={p.image}
                    alt={p.imageAlt}
                    fill
                    className={`object-cover object-top transition-[transform,filter] duration-500 ease-out group-hover:scale-[1.03] ${
                      active
                        ? "grayscale-0 contrast-100 brightness-100"
                        : "grayscale contrast-[1.05] brightness-[0.92]"
                    }`}
                    sizes="(max-width: 768px) 85vw, 520px"
                  />
                </div>

                <div className="flex flex-1 flex-col gap-3 p-5">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-sans text-xl font-medium tracking-tight text-bo-white group-hover:underline">
                      {p.name}
                    </h3>
                    <span className="shrink-0 font-mono text-xs text-bo-steel">{p.year}</span>
                  </div>

                  <div className="flex min-h-[2.5rem] flex-col gap-1">
                    <span className="font-mono text-xs tracking-[.08em] text-bo-white">
                      ★ {p.award}
                    </span>
                    {p.event ? (
                      <span className="font-mono text-xs text-bo-smoke">{p.event}</span>
                    ) : (
                      <span className="font-mono text-xs text-bo-steel">&nbsp;</span>
                    )}
                  </div>

                  <p className="flex-1 text-sm leading-relaxed text-bo-chalk">{p.oneLiner}</p>

                  <div className="mt-auto flex flex-wrap gap-1.5 border-t border-bo-iron pt-3">
                    {p.stack.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="border border-bo-iron px-2 py-1 font-mono text-[11px] text-bo-smoke group-hover:border-bo-ghost group-hover:text-bo-chalk"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
              );
            })}
            {/* Trailing spacer so last card can center / sit with peek room */}
            <div className="w-2 shrink-0 sm:w-6" aria-hidden />
          </div>

          <div className="mt-5 flex items-center justify-between gap-4 px-6 lg:px-10">
            <span className="font-mono text-xs tracking-[.14em] text-bo-steel">
              {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </span>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={prev}
                disabled={index === 0}
                aria-label="Previous project"
                className="border border-bo-rule px-3 py-2 font-mono text-xs tracking-[.12em] text-bo-chalk transition-colors hover:border-bo-white hover:text-bo-white disabled:cursor-not-allowed disabled:opacity-30"
              >
                ← prev
              </button>
              <button
                type="button"
                onClick={next}
                disabled={index === total - 1}
                aria-label="Next project"
                className="border border-bo-rule px-3 py-2 font-mono text-xs tracking-[.12em] text-bo-chalk transition-colors hover:border-bo-white hover:text-bo-white disabled:cursor-not-allowed disabled:opacity-30"
              >
                next →
              </button>
            </div>
          </div>

          <div className="mt-4 flex justify-center gap-1.5 px-6 lg:px-10">
            {projects.map((p, i) => (
              <button
                key={p.slug}
                type="button"
                aria-label={`Go to ${p.name}`}
                aria-current={i === index}
                onClick={() => scrollTo(i)}
                className={`h-1 transition-all duration-300 ${
                  i === index ? "w-6 bg-bo-white" : "w-1.5 bg-bo-iron hover:bg-bo-ghost"
                }`}
              />
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
