"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment } from "react";
import { motion } from "framer-motion";
import { ease } from "@/lib/site";

type Crumb = { label: string; href: string };

type PageHeroProps = {
  eyebrow: string;
  title: string;
  lead: string;
  image: { src: string; alt: string };
  breadcrumb?: Crumb[];
};

/**
 * Hero "editoriale ridotta" condivisa dalle pagine spoke.
 *
 * È volutamente più piccola e contenuta della hero scenografica della home
 * (`HeroImage` in `app/page.tsx`), ma ne riusa la stessa famiglia: font
 * serif dei titoli, palette token (`text-white`, `bg-deep-brown`) e la
 * stessa animazione d'ingresso framer-motion (fade-in + translate Y con
 * l'`ease` condiviso). Nessun token o animazione nuovi.
 */
export default function PageHero({
  eyebrow,
  title,
  lead,
  image,
  breadcrumb,
}: PageHeroProps) {
  const pathname = usePathname();

  // Default: Home → <eyebrow> (route corrente). L'ultima voce non è cliccabile.
  const crumbs: Crumb[] =
    breadcrumb ?? [
      { label: "Home", href: "/" },
      { label: eyebrow, href: pathname },
    ];

  // Animazione d'ingresso ripresa dalla hero della home: fade-in + y, stessa
  // durata/ease, delay scalati per i quattro blocchi di testo.
  const enter = (delay: number) => ({
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.9, delay, ease },
  });

  return (
    <section className="relative isolate min-h-[55vh] overflow-hidden bg-deep-brown md:min-h-[50vh]">
      <Image
        src={image.src}
        alt={image.alt}
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      {/* Overlay scuro piatto — niente gradient, niente blur. */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
      />

      <div
        className="relative z-10 flex min-h-[55vh] items-end justify-start md:min-h-[50vh]"
        style={{ padding: "clamp(1.5rem, 4vw, 3rem)" }}
      >
        <div>
          {/* Breadcrumb */}
          <motion.nav
            {...enter(0.3)}
            aria-label="Percorso di navigazione"
            className="mb-3 flex flex-wrap items-center gap-x-2 text-xs text-white/[0.78]"
          >
            {crumbs.map((c, i) => {
              const isLast = i === crumbs.length - 1;
              return (
                <Fragment key={`${c.href}-${i}`}>
                  {isLast ? (
                    <span aria-current="page">{c.label}</span>
                  ) : (
                    <Link
                      href={c.href}
                      className="underline-offset-4 transition hover:text-white hover:underline"
                    >
                      {c.label}
                    </Link>
                  )}
                  {!isLast && (
                    <span aria-hidden="true" className="text-white/50">
                      /
                    </span>
                  )}
                </Fragment>
              );
            })}
          </motion.nav>

          {/* Eyebrow — sentence case, mai uppercase, niente colori brand */}
          <motion.div
            {...enter(0.45)}
            className="mb-4 text-[11px] tracking-[1.6px] text-white/85"
          >
            {eyebrow}
          </motion.div>

          {/* H1 — stessa font-family/weight della home, un livello sotto nella scala */}
          <motion.h1
            {...enter(0.6)}
            className="mb-3 max-w-[440px] font-serif text-6xl font-light leading-[1.15] text-white md:text-7xl"
            style={{ textShadow: "0 2px 24px rgba(0,0,0,0.4)" }}
          >
            {title}
          </motion.h1>

          {/* Lead — stessa font-family del lead della home */}
          <motion.p
            {...enter(0.75)}
            className="max-w-[480px] text-lg leading-[1.5] text-white/90"
            style={{ textShadow: "0 2px 12px rgba(0,0,0,0.3)" }}
          >
            {lead}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
