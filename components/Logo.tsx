import Image from "next/image";
import Link from "next/link";

// The HR monogram. White variant only — see the BLACKOUT design system's
// Logos/README.md for the rules: 56px floor, space-6 clear space, never
// recolored, rotated, stretched or animated.
export default function Logo({ size = 56 }: { size?: number }) {
  return (
    <Link href="/" aria-label="Home" className="block shrink-0">
      <Image
        src="/hr-mark-white.png"
        alt="HR — home"
        width={size}
        height={size}
        priority
      />
    </Link>
  );
}
