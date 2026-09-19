export type Post = {
  slug: string;
  title: string;
  date: string;
  /** ISO date for sorting */
  dateISO: string;
  excerpt: string;
  /** Paragraphs separated by blank lines */
  body: string;
  image?: string;
  imageAlt?: string;
  /** square = logo mark; wide = screenshot */
  imageShape?: "square" | "wide";
};

export const posts: Post[] = [
  {
    slug: "watch-dogs-inspiration",
    title: "port site inspo",
    date: "2026-09-18",
    dateISO: "2026-09-18",
    excerpt: "typography & color scheme",
    body: `back in summer 2017, the og watch dogs was free with games with gold on xbox one, and that summer i was hooked. big fan of the first two games, so i pulled the look: blackout ui, greyscale until you hover. fonts are hacked for the wordmark feel, pixel operator mono for the $ noise, and barlow for body. lastly, the hr logo is inspired by the in-game faction badge.`,
    image: "/hr-mark-white.png",
    imageAlt: "hr logo",
    imageShape: "square",
  },
  {
    slug: "quick-brown-fox",
    title: "beat me on monkeytype",
    date: "2026-09-17",
    dateISO: "2026-09-17",
    excerpt: "a short test post — pangram + monkeytype.",
    body: "the quick brown fox jumps over the lazy dog.",
    image: "/writing/monkeytype.jpg",
    imageAlt: "monkeytype profile for ridgelow — personal bests and activity",
    imageShape: "wide",
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
