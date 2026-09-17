import Link from "next/link";
import { posts } from "@/lib/posts";
import SectionHeader from "./SectionHeader";

export default function WritingList() {
  return (
    <section id="writing" className="border-b border-bo-rule px-6 py-10 lg:px-10">
      <SectionHeader command="$ tail ./writing" hint="// WRITING" />
      {posts.length === 0 ? (
        <p className="font-mono text-sm text-bo-steel">no posts yet — check back later</p>
      ) : (
        <div className="flex flex-col">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/writing/${post.slug}`}
              className="flex flex-col gap-1 border-b border-bo-iron py-3 sm:flex-row sm:items-baseline sm:gap-5"
            >
              <span className="w-[110px] shrink-0 font-mono text-sm text-bo-smoke">
                {post.date}
              </span>
              <span className="text-base text-bo-chalk hover:text-bo-white">{post.title}</span>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}
