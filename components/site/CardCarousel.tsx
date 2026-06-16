"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Img = { src: string; alt: string };

/** Carosello foto per le card (frecce + puntini), crossfade. */
export default function CardCarousel({ images, className = "" }: { images: Img[]; className?: string }) {
  const [i, setI] = useState(0);
  const n = images.length;
  const go = (d: number) => setI((p) => (p + d + n) % n);

  return (
    <div className={`group absolute inset-0 overflow-hidden ${className}`}>
      {images.map((im, idx) => (
        <Image
          key={im.src + idx}
          src={im.src}
          alt={im.alt}
          fill
          sizes="(max-width:1024px) 100vw, 33vw"
          className={`object-cover transition-opacity duration-500 ${idx === i ? "opacity-100" : "opacity-0"}`}
        />
      ))}

      {n > 1 && (
        <>
          <button
            type="button"
            aria-label="Foto precedente"
            onClick={() => go(-1)}
            className="absolute left-2 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-deep-brown opacity-0 shadow transition hover:bg-white group-hover:opacity-100"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Foto successiva"
            onClick={() => go(1)}
            className="absolute right-2 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-deep-brown opacity-0 shadow transition hover:bg-white group-hover:opacity-100"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
          <div className="absolute bottom-2 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
            {images.map((_, idx) => (
              <button
                key={idx}
                type="button"
                aria-label={`Vai alla foto ${idx + 1}`}
                onClick={() => setI(idx)}
                className={`h-1.5 rounded-full transition-all ${idx === i ? "w-4 bg-white" : "w-1.5 bg-white/60"}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
