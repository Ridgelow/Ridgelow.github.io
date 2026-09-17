import SectionHeader from "./SectionHeader";

const LANGUAGES = ["Python", "JavaScript", "TypeScript", "SQL", "Java", "HTML/CSS"];
const FRAMEWORKS = ["React", "Next.js", "Node.js", "FastAPI", "PostgreSQL", "Redis"];
const INFRA = ["AWS", "Cloudflare", "Docker", "Linux", "CI/CD", "Git"];
const AI = ["LLM APIs", "RAG", "Agentic AI", "Tool Calling", "MCP", "OAuth 2.0"];

function Chip({ children }: { children: string }) {
  return (
    <span className="inline-block border border-bo-rule bg-bo-coal px-3 py-2 font-mono text-sm text-bo-chalk transition-[border-color,color,background-color] duration-200 hover:border-bo-ghost hover:text-bo-white">
      {children}
    </span>
  );
}

function ChipGroup({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="min-w-[200px] flex-1">
      <span className="font-mono text-xs tracking-[.14em] text-bo-steel">{title}</span>
      <div className="mt-3 flex flex-wrap gap-2">
        {items.map((i) => (
          <Chip key={i}>{i}</Chip>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="border-b border-bo-rule px-6 py-10 lg:px-10">
      <SectionHeader command="$ whoami --skills" hint="// SKILLS" />
      <div className="flex flex-wrap gap-10">
        <ChipGroup title="Languages" items={LANGUAGES} />
        <ChipGroup title="Frameworks & Data" items={FRAMEWORKS} />
        <ChipGroup title="Cloud & Infra" items={INFRA} />
        <ChipGroup title="AI & Auth" items={AI} />
      </div>
    </section>
  );
}
