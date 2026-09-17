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
  /** Achievement line shown with ★ */
  award: string;
  event?: string;
  /** Cover image under /public */
  image: string;
  imageAlt: string;
};

export const projects: Project[] = [
  {
    slug: "aggieinsight",
    name: "AggieInsight",
    award: "1st Place Overall",
    event: "AWS × CMIS AI Hackathon",
    oneLiner:
      "Interview intelligence — company URLs and docs become strategy-first briefs in minutes.",
    description:
      "AggieInsight turns company URLs, topic signals, and supporting documents into dual interview packets: a strategy brief for the interviewer and a prep packet for the interviewee. A Next.js front end drives topic scanning and brief generation; AWS Lambda orchestrates Amazon Textract for PDF/image extraction and Amazon Bedrock (Claude) for structured reasoning — surfacing market patterns, leadership trade-offs, role-specific pressures, and high-impact questions, with section copy and PDF export.",
    stack: [
      "Next.js",
      "TypeScript",
      "AWS Lambda",
      "Amazon Bedrock",
      "Amazon Textract",
      "S3",
      "DynamoDB",
    ],
    year: "2026",
    liveUrl: "https://aws-hackathon-ten.vercel.app",
    liveLabel: "LIVE",
    sourceUrl: "#",
    image: "/projects/aggieinsight.png",
    imageAlt: "AggieInsight interview intelligence dashboard",
  },
  {
    slug: "oversight",
    name: "Oversight",
    award: "Best Consumer Hack",
    event: "HackHarvard 2025",
    oneLiner:
      "Truth engine for democracy — bills, votes, lobbying, and money trails in one place.",
    description:
      "Oversight makes dense government data readable. It tracks legislation, congressional votes, lobbying filings, and campaign finance, then uses Gemini to summarize bills, flag controversy, and score polarization. Interactive maps and finance visualizations connect representatives, votes, and funding so citizens can follow how money and policy intersect — shipped as a working prototype at HackHarvard.",
    stack: [
      "Next.js",
      "TypeScript",
      "Gemini",
      "D3.js",
      "Recharts",
      "Firebase",
      "Tailwind CSS",
    ],
    year: "2025",
    liveUrl: "https://www.oversightusa.com",
    liveLabel: "LIVE",
    sourceUrl: "https://github.com/dilzafer/oversightusa",
    image: "/projects/oversight.png",
    imageAlt: "Oversight democracy transparency dashboard",
  },
  {
    slug: "pawbridge",
    name: "PawBridge",
    award: "2nd Place Overall",
    event: "Product@TAMU Ideathon",
    oneLiner:
      "AI pet health for the uninsured — triage, affordable clinics, and care records.",
    description:
      "PawBridge is an AI-powered pet health concept for the 96% of owners without insurance. Validated with veterinarian interviews, the Figma prototype covers digital pet health profiles, LLM-based symptom triage (guidance, not diagnosis), and an affordability hub designed around Maps-powered clinic discovery, med price comparison, and diet recommendations — including exotic pets. Product@TAMU Ideathon Spring 2026, 2nd place.",
    stack: ["Figma", "Product Design", "LLM Triage", "Google Maps API", "UX Research"],
    year: "2026",
    liveUrl: "https://review-rapid-35282328.figma.site",
    liveLabel: "PROTOTYPE",
    sourceUrl: "#",
    image: "/projects/pawbridge.png",
    imageAlt: "PawBridge Figma prototype — home, AI triage, and find care",
  },
  {
    slug: "obsession",
    name: "Obsession",
    award: "Persona Verification Challenge",
    event: "HackRice",
    oneLiner:
      "Live AI dating coach — voice sessions, camera vitals, and ID-verified adults only.",
    description:
      "Obsession is a React Native / Expo dating-conversation simulator and coach. LiveDate sessions run an ElevenLabs voice agent against a custom Gemini LLM webhook; Presage / SmartSpectra reads camera-based heart-rate vitals for real-time composure feedback. Sign-up gates access with Persona inquiry + server-side age verification (18+), then onboarding persists goals and history for coaching. Backend is Express + PostgreSQL.",
    stack: [
      "Expo",
      "React Native",
      "ElevenLabs",
      "Gemini",
      "Persona",
      "Express",
      "PostgreSQL",
    ],
    year: "2026",
    liveUrl: "https://devpost.com/software/obsession-5xiwrm",
    liveLabel: "DEVPOST",
    sourceUrl: "https://github.com/Ridgelow/obsession",
    image: "/projects/obsession.png",
    imageAlt: "Obsession app screens from Devpost — practice home, session, and Persona verify",
  },
  {
    slug: "nextcreator",
    name: "NextCreator",
    award: "1k+ creators reached",
    oneLiner:
      "Creator marketplace and learning platform — courses, coaching, and subscriptions.",
    description:
      "NextCreator helps creators learn, coach, and monetize. The product pairs a Next.js app with an Express API: Clerk auth, MongoDB data, Stripe Connect payouts, Calendly booking, AWS S3 media, and real-time chat over Socket.io. Creators can publish courses, offer coaching, and sell subscription access to templates and services.",
    stack: [
      "Next.js",
      "TypeScript",
      "Express",
      "MongoDB",
      "Stripe",
      "Clerk",
      "AWS S3",
    ],
    year: "2025",
    liveUrl: "https://nextcreatorlab.com",
    liveLabel: "LIVE",
    sourceUrl: "https://github.com/KevZ3742/NextCreator",
    image: "/projects/nextcreator.png",
    imageAlt: "NextCreator landing page with creator templates",
  },
  {
    slug: "aggie-ewop",
    name: "Aggie EWOP",
    award: "50+ chapter members",
    oneLiner:
      "Nonprofit chapter site for Empowering Women Out of Prison at Texas A&M.",
    description:
      "A fast, mostly-static Astro + Tailwind site for Aggie EWOP (Texas A&M’s Empowering Women Out of Prison chapter). Content lives in typed data files so officers can update team, pillars, meetings, and links without touching layout code — clear information architecture, accessible pages, and a path for visitors to learn and get involved.",
    stack: ["Astro", "TypeScript", "Tailwind CSS"],
    year: "2026",
    liveUrl: "https://aggieewop.hasnain8811.workers.dev",
    liveLabel: "LIVE",
    sourceUrl: "https://github.com/Ridgelow/aggie-ewop-website",
    image: "/projects/aggie-ewop.jpg",
    imageAlt: "Aggie EWOP homepage — Empowering women out of prison",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
