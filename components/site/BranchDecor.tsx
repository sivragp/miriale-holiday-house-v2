import Image from "next/image";

/** Rametto ad acquerello decorativo, attaccato al bordo destro dello schermo. */
export function BranchDecor({ className = "", flip = false }: { className?: string; flip?: boolean }) {
  return (
    <Image
      src="/images/luoghi/branch.png"
      alt=""
      aria-hidden
      width={400}
      height={600}
      className={`pointer-events-none absolute right-0 z-0 hidden select-none opacity-80 lg:block ${flip ? "scale-x-[-1]" : ""} ${className}`}
    />
  );
}
