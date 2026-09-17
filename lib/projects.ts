export type Project = {
  slug: string;
  name: string;
  oneLiner: string;
  description: string;
  stack: string[];
  year: string;
  liveUrl: string;
  liveLabel: string;
  sourceUrl: string;
  award?: string;
  event?: string;
};

export const projects: Project[] = [
  {
    slug: "aggieinsight",
    name: "AggieInsight",
    award: "1st Place Overall",
    event: "AWS × CMIS AI Hackathon",
    oneLiner: "AI interview intelligence — extract docs, analyze candidates with generative AI.",
    description:
      "Built an AI interview intelligence platform using Next.js, AWS Bedrock, and Amazon Textract. Developed a pipeline to extract candidate documents and analyze content with generative AI for a competition-ready prototype.",
    stack: ["Next.js", "TypeScript", "React", "AWS Bedrock", "Amazon Textract", "Node.js"],
    year: "2026",
    liveUrl: "#",
    liveLabel: "LIVE",
    sourceUrl: "#",
  },
  {
    slug: "oversight",
    name: "Oversight",
    award: "Best Consumer Hack",
    event: "HackHarvard 2025",
    oneLiner: "AI government transparency — legislation, votes, and political funding in one place.",
    description:
      "Built an AI platform that makes legislation, congressional votes, and political funding accessible. Developed visualizations connecting bills, representatives, voting records, and political funding — shipped a working prototype in 24 hours.",
    stack: ["Next.js", "TypeScript", "React", "Python", "LLM APIs", "D3.js"],
    year: "2025",
    liveUrl: "#",
    liveLabel: "LIVE",
    sourceUrl: "#",
  },
  {
    slug: "obsession",
    name: "Obsession",
    event: "HackRice",
    oneLiner: "AI dating-conversation simulator and coach with real-time feedback.",
    description:
      "Built at HackRice: an AI dating-conversation simulator and coach that helps you practice conversations and get real-time feedback on tone, pacing, and clarity.",
    stack: ["Next.js", "TypeScript", "React", "Node.js", "OpenAI API", "WebSockets"],
    year: "2025",
    liveUrl: "#",
    liveLabel: "DEVPOST",
    sourceUrl: "#",
  },
  {
    slug: "pawbridge",
    name: "PawBridge",
    award: "2nd Place Overall",
    event: "Product@TAMU Ideathon",
    oneLiner: "AI pet health — symptom assessment and real-time clinic discovery.",
    description:
      "Designed an AI pet health platform for symptom assessment and real-time clinic discovery. Led product ideation, feature prioritization, and go-to-market narrative from concept to competition-ready prototype.",
    stack: ["Next.js", "TypeScript", "React", "LLM APIs", "Maps API", "Tailwind CSS"],
    year: "2026",
    liveUrl: "#",
    liveLabel: "LIVE",
    sourceUrl: "#",
  },
  {
    slug: "trace",
    name: "Trace",
    oneLiner: "Carbon footprint tracking and offsetting — built and shipped solo.",
    description:
      "Trace tracks the carbon footprint of everyday purchases and activity, then helps offset it — an independent iOS app, built and shipped solo.",
    stack: ["Swift", "SwiftUI", "iOS", "Core Data", "REST APIs"],
    year: "2025",
    liveUrl: "https://usetrace.netlify.app",
    liveLabel: "LIVE",
    sourceUrl: "#",
  },
  {
    slug: "aggie-ewop",
    name: "Aggie EWOP",
    oneLiner: "Website for a nonprofit supporting formerly incarcerated women.",
    description:
      "A website built for Aggie EWOP (Empowering Women Out of Prison), a nonprofit supporting formerly incarcerated women — clear information architecture, accessible layout, and a path for visitors to learn and get involved.",
    stack: ["Next.js", "TypeScript", "React", "Tailwind CSS", "Vercel"],
    year: "2025",
    liveUrl: "#",
    liveLabel: "LIVE",
    sourceUrl: "#",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
