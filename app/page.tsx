import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ProfileCard from "@/components/ProfileCard";
import Skills from "@/components/Skills";
import ProjectList from "@/components/ProjectList";
import WritingList from "@/components/WritingList";
import ResumeRow from "@/components/ResumeRow";
import ContactLinks from "@/components/ContactLinks";
import Footer from "@/components/Footer";
import HudCursor from "@/components/hud/HudCursor";
import ReactiveGrid from "@/components/hud/ReactiveGrid";
import Reveal from "@/components/hud/Reveal";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <ReactiveGrid />
      <HudCursor />
      <Nav />
      <main className="relative z-10 mx-auto w-full max-w-[1100px]">
        <Hero />
        <Reveal delayMs={80}>
          <ProfileCard />
        </Reveal>
        <ProjectList />
        <Reveal delayMs={100}>
          <Skills />
        </Reveal>
        <Reveal delayMs={120}>
          <WritingList />
        </Reveal>
        <Reveal delayMs={100}>
          <ResumeRow />
        </Reveal>
        <Reveal delayMs={100}>
          <ContactLinks />
        </Reveal>
        <Footer />
      </main>
    </div>
  );
}
