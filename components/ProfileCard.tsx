import Image from "next/image";
import SectionHeader from "./SectionHeader";

export default function ProfileCard() {
  return (
    <section id="profile" className="border-b border-bo-rule px-6 py-10 lg:px-10">
      <SectionHeader command="$ cat profile.txt" hint="// PROFILE" />
      <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-8">
        <div className="group relative mx-auto aspect-[3/4] w-[180px] shrink-0 overflow-hidden border border-bo-rule bg-bo-graphite md:mx-0 md:w-[200px]">
          <Image
            src="/headshot.png"
            alt="Hasnain Rizvi"
            fill
            className="object-cover object-[center_18%] grayscale contrast-[1.15] brightness-[0.92] transition-[filter] duration-500 ease-out group-hover:grayscale-[0.35] group-hover:brightness-100"
            sizes="200px"
            priority
          />
        </div>
        <div className="flex flex-1 flex-col gap-5">
          <p className="max-w-xl text-base leading-relaxed text-bo-chalk">
            Incoming MS CS @ Georgia Tech. Previously at Cloudflare and Workiva.
            3× hackathon winner with interests in policy, applied AI, security, and
            building things that matter.
          </p>
          <div className="flex flex-col gap-3 border border-bo-rule bg-bo-ash/60 p-4">
            <Row label="Status" value="Incoming MS CS · Georgia Tech" />
            <Row label="Location" value="Houston, TX — open to relocation" />
            <Row label="Focus" value="Policy · Applied AI · Security" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1 border-t border-bo-iron pt-3 first:border-t-0 first:pt-0 sm:flex-row sm:items-baseline sm:gap-4">
      <span className="w-[88px] shrink-0 font-mono text-xs tracking-[.14em] text-bo-steel">
        {label}
      </span>
      <span className="font-mono text-sm text-bo-chalk">{value}</span>
    </div>
  );
}
