"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";

interface VideoHeroProps {
  prenotaUrl?: string;
  videoSrc?: string;
  posterSrc?: string;
}

const ease: [number, number, number, number] = [0.22, 0.61, 0.36, 1];

export default function VideoHero({
  prenotaUrl = "#",
  videoSrc = "/media/trevi-drone.mp4",
  posterSrc,
}: VideoHeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (prefersReducedMotion) {
      v.pause();
      return;
    }
    // play() può essere rifiutato da policy autoplay restrittive: in quel caso
    // resta visibile il poster (o lo sfondo deep-brown della section) — UX accettabile.
    v.play().catch(() => {});
  }, [prefersReducedMotion]);

  const isExternalLink =
    prenotaUrl !== "#" && /^https?:\/\//i.test(prenotaUrl);

  return (
    <section className="relative w-full h-svh overflow-hidden bg-deep-brown">
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        playsInline
        preload="metadata"
        poster={posterSrc}
        aria-hidden="true"
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, transparent 20%, rgba(0,0,0,0.45) 50%, rgba(0,0,0,0.72) 100%)",
        }}
      />

      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease }}
          className="font-serif text-ivory"
          style={{
            fontSize: "clamp(3rem, 8vw, 7rem)",
            lineHeight: 1.05,
            letterSpacing: "-0.01em",
            textShadow: "0 2px 20px rgba(0,0,0,0.4)",
          }}
        >
          Antica Loggia
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease }}
          className="mt-6 max-w-2xl text-base text-white/80 sm:text-lg"
          style={{
            letterSpacing: "0.06em",
            textShadow: "0 2px 20px rgba(0,0,0,0.4)",
          }}
        >
          Trevi, Umbria — Una dimora storica nel cuore verde d&apos;Italia
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7, ease }}
          className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4"
        >
          <a
            href="#la-casa"
            className="inline-flex items-center justify-center border border-white px-8 py-3 font-sans font-medium text-white transition-colors duration-200 hover:bg-white hover:text-deep-brown"
          >
            Scopri la dimora
          </a>
          <a
            href={prenotaUrl}
            target={isExternalLink ? "_blank" : undefined}
            rel={isExternalLink ? "noopener noreferrer" : undefined}
            className="inline-flex items-center justify-center bg-terracotta px-8 py-3 font-sans font-medium text-white transition duration-200 hover:brightness-90"
          >
            Prenota ora
          </a>
        </motion.div>
      </div>
    </section>
  );
}
