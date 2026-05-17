import Image from "next/image";
import type { ReactNode } from "react";

/** Hero di pagina riusabile dalle spoke: immagine + titolo + sottotitolo. */
export default function PageHero({
  title,
  subtitle,
  image = "/images/house/hero-23-enhanced.jpg",
  alt = "MiriAle Holiday House — vista d'insieme",
}: {
  title: ReactNode;
  subtitle: ReactNode;
  image?: string;
  alt?: string;
}) {
  return (
    <section className="relative isolate min-h-[60vh] overflow-hidden bg-deep-brown">
      <Image
        src={image}
        alt={alt}
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.35) 60%, transparent 100%)",
        }}
      />
      <div className="relative z-10 flex min-h-[60vh] items-center px-[8%] md:px-[10%]">
        <div className="max-w-2xl py-24">
          <h1
            className="font-serif text-5xl font-light leading-tight text-white md:text-6xl"
            style={{ textShadow: "0 2px 24px rgba(0,0,0,0.4)" }}
          >
            {title}
          </h1>
          <p
            className="mt-5 max-w-xl text-lg leading-relaxed text-white/85"
            style={{ textShadow: "0 2px 12px rgba(0,0,0,0.3)" }}
          >
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}
