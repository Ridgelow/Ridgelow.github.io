"use client";

import Link from "next/link";
import { projects } from "@/lib/projects";
import SectionHeader from "./SectionHeader";
import Reveal from "./hud/Reveal";
import MagneticCard from "./hud/MagneticCard";

export default function ProjectList() {
  return (
    <section id="work" className="border-b border-bo-rule px-6 py-12 lg:px-10 lg:py-14">
      <SectionHeader command="$ ls ./projects" hint="// WORK — SELECTED" />
      <div className="grid auto-rows-fr gap-4 md:grid-cols-2" style={{ perspective: "1000px" }}>
        {projects.map((p, i) => (
          <Reveal key={p.slug} delayMs={i * 70} className="h-full">
            <MagneticCard className="h-full">
              <Link
                href={`/work/${p.slug}`}
                className="group flex h-full min-h-[260px] flex-col gap-3 border border-bo-rule bg-bo-ash/70 p-5 shadow-edge transition-shadow hover:shadow-glitch md:min-h-[280px]"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-sans text-xl font-medium tracking-tight text-bo-white group-hover:underline">
                    {p.name}
                  </h3>
                  <span className="shrink-0 font-mono text-xs text-bo-steel">{p.year}</span>
                </div>

                <div className="flex min-h-[2.5rem] flex-col gap-1">
                  {p.award ? (
                    <span className="font-mono text-xs tracking-[.08em] text-bo-white">
                      ★ {p.award}
                    </span>
                  ) : (
                    <span className="font-mono text-xs tracking-[.08em] text-bo-steel">
                      · shipped
                    </span>
                  )}
                  {p.event ? (
                    <span className="font-mono text-xs text-bo-smoke">{p.event}</span>
                  ) : (
                    <span className="font-mono text-xs text-bo-steel">&nbsp;</span>
                  )}
                </div>

                <p className="flex-1 text-sm leading-relaxed text-bo-chalk">{p.oneLiner}</p>

                <div className="mt-auto flex flex-wrap gap-1.5 border-t border-bo-iron pt-3">
                  {p.stack.map((tech) => (
                    <span
                      key={tech}
                      className="border border-bo-iron px-2 py-1 font-mono text-[11px] text-bo-smoke group-hover:border-bo-ghost group-hover:text-bo-chalk"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Link>
            </MagneticCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
