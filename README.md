# Hasnain — portfolio

Next.js (App Router) + TypeScript + Tailwind implementation of the **BLACKOUT** design
system — the Watch Dogs–inspired brand kit — in "The Terminal" layout: a single
narrow-column home page plus one case-study page per project.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## What's here

```
app/
  layout.tsx          root layout — loads all four fonts, sets metadata
  page.tsx             home page — assembles every section below
  globals.css          Tailwind layers + the motion keyframes (type-in, bracket-snap, scan-sweep)
  work/[slug]/page.tsx  case-study page, one route for all four projects (see lib/projects.ts)
components/
  Nav.tsx              logo-only header; mobile hamburger opens a full-screen section menu
  Footer.tsx            small mark + copyright + the required Hacked font credit
  Hero.tsx, ProfileCard.tsx, Skills.tsx, ProjectList.tsx, WritingList.tsx, ResumeRow.tsx, ContactLinks.tsx
lib/
  fonts.ts             next/font setup — Hacked + Pixel Operator Mono self-hosted, Saira Condensed + Barlow from Google
  projects.ts          the single source of truth for the four project cards/pages
public/
  fonts/               HACKED.woff2, PixelOperatorMono.woff2
  hr-mark-white.png     the HR monogram (dark grounds — this is the only variant wired up)
  hr-mark-black.png     inverted variant, not yet used anywhere — for a light surface/print, if you need one
```

## Design tokens

`tailwind.config.ts` carries the BLACKOUT palette under the `bo` prefix (`bg-bo-ash`,
`text-bo-chalk`, etc.) — an 11-step black→white ladder, no accent color. Font families
are `font-mark` (Hacked, wordmark only), `font-display` (Saira Condensed, section/card
titles), `font-sans` (Barlow, body), `font-mono` (Pixel Operator Mono, anything
machine-generated). Custom shadows (`shadow-edge`, `shadow-edge-soft`, `shadow-edge-live`,
`shadow-glitch`) are flat rings, never blurred — see the design system's own README for
the full rationale if you want it.

## Still to do — everything in `[ BRACKETS ]`

Search the codebase for `[ ` to find every placeholder: the positioning statement, bio,
photo, status/location/focus, real stack/year per project, resume PDF, email, LinkedIn
URL, and the three project live/source links that aren't Trace's (which is real —
usetrace.netlify.app). `lib/projects.ts` is the one file to edit for all four project
cards and pages.

## Not yet built

- **Motion.** `globals.css` has the raw keyframes (`.animate-type`, `.animate-snap`,
  `.animate-sweep`) but nothing actually uses them yet — the boot sequence, project-card
  reveals, and the AccessBar-style contact-form-that-isn't-a-form are all static right
  now. The BLACKOUT design system (five HUD components: Profiler, ScanPanel, DataReadout,
  GlitchTitle, AccessBar, StaticBurst) has the full interaction spec if you want to port
  those in as real React components.
- **Photos/screenshots.** Every image is a bracketed placeholder box.
- **Writing.** `WritingList` is hardcoded placeholder posts — no CMS or MDX wired up.
- **A real 404 / error page**, `<meta>` OG images, favicon (the HR mark would make a
  decent one, simplified — see the design system's Logos README for why it needs
  simplifying below 56px).

## Credit — do not remove

The wordmark font is **Hacked** by David Libeau (https://watchdogsfont.com), CC-BY. The
credit line in the footer (`components/Footer.tsx`) satisfies the license — keep it
wherever this site is published.
