import { notFound } from "next/navigation";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import HudCursor from "@/components/hud/HudCursor";
import ReactiveGrid from "@/components/hud/ReactiveGrid";
import DecryptText from "@/components/hud/DecryptText";
import Reveal from "@/components/hud/Reveal";
import { getProject, projects } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug);
  if (!project) return notFound();

  return (
    <div className="relative min-h-screen">
      <ReactiveGrid />
      <HudCursor />
      <Nav />
      <main className="relative z-10 mx-auto w-full max-w-[1100px]">
        <header className="flex flex-col gap-3 border-b border-bo-rule px-6 py-10 lg:px-10">
          <span className="font-mono text-sm text-bo-white">
            $ open ./projects/{project.slug}
          </span>
          <div className="flex flex-wrap items-baseline justify-between gap-4">
            <DecryptText
              text={project.name}
              className="font-sans text-3xl font-medium tracking-tight text-bo-white md:text-[40px]"
            />
            <span className="font-mono text-xs text-bo-steel">{project.year}</span>
          </div>
          {(project.award || project.event) && (
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-4">
              {project.award && (
                <span className="font-mono text-sm text-bo-white">★ {project.award}</span>
              )}
              {project.event && (
                <span className="font-mono text-sm text-bo-smoke">{project.event}</span>
              )}
            </div>
          )}
          <p className="max-w-2xl text-base text-bo-smoke">{project.oneLiner}</p>
        </header>

        <Reveal>
          <div className="border-b border-bo-rule px-6 py-8 lg:px-10">
            <div className="flex h-[240px] items-center justify-center border border-bo-rule bg-bo-ash md:h-[360px]">
              <span className="font-mono text-xs tracking-[.14em] text-bo-steel">
                [ screenshot ]
              </span>
            </div>
          </div>
        </Reveal>

        <Reveal delayMs={80}>
          <div className="flex flex-col gap-5 border-b border-bo-rule px-6 py-10 lg:px-10">
            <p className="max-w-2xl text-base leading-relaxed text-bo-chalk">{project.description}</p>
            <div className="flex flex-wrap gap-8">
              <div className="flex gap-3">
                <span className="w-[52px] shrink-0 font-mono text-xs tracking-[.14em] text-bo-steel">Stack</span>
                <span className="font-mono text-sm text-bo-chalk">{project.stack.join(" · ")}</span>
              </div>
              <div className="flex gap-3">
                <span className="w-[52px] shrink-0 font-mono text-xs tracking-[.14em] text-bo-steel">Year</span>
                <span className="font-mono text-sm text-bo-chalk">{project.year}</span>
              </div>
            </div>
            <div className="flex gap-7">
              {project.liveUrl !== "#" && (
                <a href={project.liveUrl} className="font-mono text-sm text-bo-white hover:underline">
                  → {project.liveLabel}
                </a>
              )}
              {project.sourceUrl !== "#" && (
                <a href={project.sourceUrl} className="font-mono text-sm text-bo-white hover:underline">
                  → SOURCE
                </a>
              )}
            </div>
          </div>
        </Reveal>

        <div className="flex items-center justify-between px-6 py-8 lg:px-10">
          <Link href="/#work" className="font-mono text-sm text-bo-smoke hover:text-bo-white">
            ← back to all work
          </Link>
        </div>

        <Footer />
      </main>
    </div>
  );
}
