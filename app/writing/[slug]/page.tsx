import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import HudCursor from "@/components/hud/HudCursor";
import ReactiveGrid from "@/components/hud/ReactiveGrid";
import DecryptText from "@/components/hud/DecryptText";
import Reveal from "@/components/hud/Reveal";
import { getPost, posts } from "@/lib/posts";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export default function WritingPostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) return notFound();

  return (
    <div className="relative min-h-screen">
      <ReactiveGrid />
      <HudCursor />
      <Nav />
      <main className="relative z-10 mx-auto w-full max-w-[1100px]">
        <header className="flex flex-col gap-3 border-b border-bo-rule px-6 py-10 lg:px-10">
          <span className="font-mono text-sm text-bo-white">
            $ cat ./writing/{post.slug}.md
          </span>
          <div className="flex flex-wrap items-baseline justify-between gap-4">
            <DecryptText
              text={post.title}
              className="font-sans text-3xl font-medium tracking-tight text-bo-white md:text-[40px]"
            />
            <span className="font-mono text-xs text-bo-steel">{post.date}</span>
          </div>
          <p className="max-w-2xl text-base text-bo-smoke">{post.excerpt}</p>
        </header>

        <Reveal>
          <article className="flex flex-col gap-8 border-b border-bo-rule px-6 py-10 lg:px-10">
            <div className="flex max-w-2xl flex-col gap-5">
              {post.body.split(/\n\n+/).map((para, i) => (
                <p key={i} className="text-lg leading-relaxed text-bo-chalk">
                  {para}
                </p>
              ))}
            </div>

            {post.image && (
              <div
                className={
                  post.imageShape === "square"
                    ? "relative aspect-square w-full max-w-md overflow-hidden border border-bo-rule bg-bo-void"
                    : "relative aspect-[16/10] w-full max-w-3xl overflow-hidden border border-bo-rule bg-bo-coal"
                }
              >
                <Image
                  src={post.image}
                  alt={post.imageAlt || post.title}
                  fill
                  className={
                    post.imageShape === "square"
                      ? "object-contain"
                      : "object-cover object-top"
                  }
                  sizes={
                    post.imageShape === "square"
                      ? "(max-width: 1100px) 100vw, 448px"
                      : "(max-width: 1100px) 100vw, 768px"
                  }
                  priority
                />
              </div>
            )}
          </article>
        </Reveal>

        <div className="flex items-center justify-between px-6 py-8 lg:px-10">
          <Link href="/#writing" className="font-mono text-sm text-bo-smoke hover:text-bo-white">
            ← back to writing
          </Link>
        </div>

        <Footer />
      </main>
    </div>
  );
}
