import Image from "next/image";

export default function Footer() {
  return (
    <footer className="flex min-h-[96px] items-center justify-between border-t border-bo-rule px-6 py-6 lg:px-10">
      <Image src="/hr-mark-white.png" alt="HR" width={32} height={32} className="opacity-70" />
      <span className="font-mono text-sm text-bo-steel">© 2026 Ridgelow</span>
    </footer>
  );
}
