import SectionHeader from "./SectionHeader";

const EMAIL = "hasnain8811@gmail.com";
const LINKEDIN_URL = "https://linkedin.com/in/hasnainsrizvi";

function LinkedInIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export default function ContactLinks() {
  return (
    <section id="contact" className="border-b border-bo-rule px-6 py-10 lg:px-10">
      <SectionHeader command="$ contact --init" hint="// CONTACT" />
      <p className="mb-6 max-w-xl text-base leading-relaxed text-bo-chalk">
        Want to talk about something I&apos;ve built — or build something together?
      </p>
      <div className="flex flex-col gap-4">
        <a href={`mailto:${EMAIL}`} className="flex items-center gap-3.5 font-mono text-[15px] text-bo-chalk hover:text-bo-white">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" aria-hidden="true">
            <rect x="3" y="5" width="18" height="14" />
            <path d="M3 6l9 7 9-7" />
          </svg>
          {EMAIL}
        </a>
        <a
          href={LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3.5 font-mono text-[15px] text-bo-chalk hover:text-bo-white"
        >
          <LinkedInIcon />
          linkedin.com/in/hasnainsrizvi
        </a>
      </div>
    </section>
  );
}
