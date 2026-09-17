import SectionHeader from "./SectionHeader";

// Placeholder until real posts exist — section stays for structure.
const POSTS: { date: string; title: string }[] = [];

export default function WritingList() {
  return (
    <section id="writing" className="border-b border-bo-rule px-6 py-10 lg:px-10">
      <SectionHeader command="$ tail ./writing" hint="// WRITING" />
      {POSTS.length === 0 ? (
        <p className="font-mono text-sm text-bo-steel">no posts yet — check back later</p>
      ) : (
        <div className="flex flex-col">
          {POSTS.map((post, i) => (
            <a
              key={i}
              href="#"
              className="flex items-baseline gap-5 border-b border-bo-iron py-3 hover:text-bo-white"
            >
              <span className="w-[110px] shrink-0 font-mono text-sm text-bo-smoke">{post.date}</span>
              <span className="text-base">{post.title}</span>
            </a>
          ))}
        </div>
      )}
    </section>
  );
}
