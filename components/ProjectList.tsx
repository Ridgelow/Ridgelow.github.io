"use client";

import Image from "next/image";
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
          <Reveal key={p.slug} delayMs={i * 90} className="h-full">
            <MagneticCard className="h-full">
              <Link
                href={`/work/${p.slug}`}
                className="group flex h-full flex-col overflow-hidden border border-bo-rule bg-bo-ash/70 shadow-edge transition-[box-shadow,border-color,background-color] duration-300 ease-out hover:border-bo-ghost hover:bg-bo-ash hover:shadow-glitch"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-bo-rule bg-bo-coal">
                  <Image
                    src={p.image}
                    alt={p.imageAlt}
                    fill
                    className="object-cover object-top grayscale contrast-[1.05] brightness-[0.92] transition-[transform,filter] duration-500 ease-out group-hover:scale-[1.03] group-hover:grayscale-[0.35] group-hover:brightness-100"
                    sizes="(max-width: 768px) 100vw, 540px"
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
            </MagneticCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
