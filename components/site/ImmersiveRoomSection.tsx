"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ease } from "@/lib/site";

type ImmersiveRoomSectionProps = {
  side: "left" | "right"; // posizione della glass card (ignorato su mobile)
  eyebrow: string; // label corta, es. "Ingresso" — sentence case
  title: string; // titolo serif breve
  description: string; // 1-2 frasi
  features: string[]; // 3-4 voci max
  image: { src: string; alt: string };
  /** true solo per la prima sezione (above the fold). */
  priority?: boolean;
};

/**
 * Sezione "ambiente" full-bleed e scenografica per la home: foto a tutto
 * sfondo, overlay scuro piatto e glass card lattiginosa alternata
 * sinistra/destra. Riusa la palette/font serif del progetto (token Tailwind)
 * e il sistema di animazione già in uso (framer-motion). Niente nuove
 * dipendenze. Le regole di layout/glass/scroll-snap vivono in
 * `app/globals.css` (classi `.room-*`), coerentemente con le altre
 * primitive CSS del progetto.
 */
export default function ImmersiveRoomSection({
  side,
  eyebrow,
  title,
  description,
  features,
  image,
  priority = false,
}: ImmersiveRoomSectionProps) {
  const ref = useRef<HTMLElement>(null);
  // Ken-burns attivo solo quando la sezione è realmente in viewport.
  const inView = useInView(ref, { amount: 0.3 });

  return (
    <section
      ref={ref}
      className={`room-section ${
        side === "left" ? "room-section--left" : "room-section--right"
      }`}
    >
      {/* Immagine di sfondo + ken-burns leggero (1 → 1.04 in ~8s, loop) */}
      <motion.div
        className="absolute inset-0 overflow-hidden"
        animate={inView ? { scale: 1.04 } : { scale: 1 }}
        transition={{
          duration: 8,
          ease: "easeOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority={priority}
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>

      {/* Overlay scuro piatto — niente gradient */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.32)" }}
      />

      {/* Glass card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease }}
        className="room-card relative z-10"
      >
        <div className="text-[11px] tracking-[1.6px] text-white/85">
          {eyebrow}
        </div>
        <h3 className="mt-3 font-serif text-[26px] font-light leading-[1.15] text-white md:text-[34px]">
          {title}
        </h3>
        <p className="mt-3 text-sm leading-[1.55] text-white/[0.92] md:text-[15px]">
          {description}
        </p>
        <ul className="mt-4 space-y-1.5">
          {features.map((f) => (
            <li
              key={f}
              className="flex items-start gap-2 text-[13px] text-white/85"
            >
              <span
                aria-hidden="true"
                className="mt-[7px] h-1 w-1 flex-shrink-0 rounded-full bg-white/70"
              />
              <span>{f}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}
