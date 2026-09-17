export type Post = {
  slug: string;
  title: string;
  date: string;
  /** ISO date for sorting */
  dateISO: string;
  excerpt: string;
  body: string;
  image?: string;
  imageAlt?: string;
};

export const posts: Post[] = [
  {
    slug: "quick-brown-fox",
    title: "beat me on monkeytype",
    date: "2026-09-17",
    dateISO: "2026-09-17",
    excerpt: "A short test post — pangram + Monkeytype.",
    body: "The quick brown fox jumps over the lazy dog.",
    image: "/writing/monkeytype.jpg",
    imageAlt: "Monkeytype profile for ridgelow — personal bests and activity",
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
