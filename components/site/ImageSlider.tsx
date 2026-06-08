"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

type Img = { src: string; alt: string };

/**
 * Slider di immagini per una stessa categoria/ambiente.
 * Riempie il contenitore genitore (che deve avere position + aspect + overflow).
 * Auto-avanzamento con pausa all'hover, frecce, puntini e contatore.
 */
export default function ImageSlider({
  images,
  sizes = "(max-width: 768px) 100vw, 50vw",
  priority = false,
  intervalMs = 4500,
  rounded = false,
  autoplay = true,
}: {
  images: Img[];
  sizes?: string;
  priority?: boolean;
  intervalMs?: number;
  rounded?: boolean;
  autoplay?: boolean;
}) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const n = images.length;
  const go = useCallback((d: number) => setIndex((p) => (p + d + n) % n), [n]);

  useEffect(() => {
    if (!autoplay || paused || n <= 1) return;
    const t = setInterval(() => setIndex((p) => (p + 1) % n), intervalMs);
    return () => clearInterval(t);
  }, [autoplay, paused, n, intervalMs]);

  return (
    <div
      className={`group absolute inset-0 ${rounded ? "overflow-hidden rounded-2xl" : ""}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {images.map((img, idx) => (
        <Image
          key={img.src}
          src={img.src}
          alt={img.alt}
          fill
          priority={priority && idx === 0}
          sizes={sizes}
          className={`object-cover transition-opacity duration-700 ${
            idx === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {n > 1 && (
        <>
          <button
            type="button"
            aria-label="Foto precedente"
            onClick={() => go(-1)}
            className="absolute left-2 top-1/2 z-10 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-full bg-black/35 text-lg leading-none text-white opacity-0 backdrop-blur transition hover:bg-black/55 group-hover:opacity-100"
          >
            ‹
          </button>
          <button
            type="button"
            aria-label="Foto successiva"
            onClick={() => go(1)}
            className="absolute right-2 top-1/2 z-10 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-full bg-black/35 text-lg leading-none text-white opacity-0 backdrop-blur transition hover:bg-black/55 group-hover:opacity-100"
          >
            ›
          </button>

          <div className="absolute bottom-2.5 left-0 right-0 z-10 flex justify-center gap-1.5">
            {images.map((img, idx) => (
              <button
                key={img.src}
                type="button"
                aria-label={`Vai alla foto ${idx + 1}`}
                onClick={() => setIndex(idx)}
                className={`h-1.5 rounded-full transition-all ${
                  idx === index ? "w-5 bg-white" : "w-1.5 bg-white/60 hover:bg-white/80"
                }`}
              />
            ))}
          </div>

          <div className="absolute right-2 top-2 z-10 rounded-full bg-black/35 px-2 py-0.5 text-[11px] font-medium text-white backdrop-blur">
            {index + 1}/{n}
          </div>
        </>
      )}
    </div>
  );
}
