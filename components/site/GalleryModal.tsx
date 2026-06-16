"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X } from "lucide-react";

type Img = { src: string; alt: string };

/** Popup a tutto schermo con tutte le foto dell'appartamento. */
export default function GalleryModal({
  images,
  open,
  onClose,
  title,
}: {
  images: Img[];
  open: boolean;
  onClose: () => void;
  title?: string;
}) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] flex flex-col bg-deep-brown/95 backdrop-blur-sm">
      <header className="flex items-center justify-between px-5 py-4 text-white md:px-8">
        <span className="text-sm font-semibold">{title ?? "Galleria"} · {images.length} foto</span>
        <button
          type="button"
          onClick={onClose}
          aria-label="Chiudi galleria"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20"
        >
          <X className="h-5 w-5" />
        </button>
      </header>
      <div className="flex-1 overflow-y-auto px-5 pb-10 md:px-8">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-3 sm:grid-cols-2">
          {images.map((im, i) => (
            <div key={im.src + i} className={`relative overflow-hidden rounded-xl ${i % 3 === 0 ? "sm:col-span-2 aspect-[16/9]" : "aspect-[4/3]"}`}>
              <Image src={im.src} alt={im.alt} fill sizes="(max-width:768px) 100vw, 50vw" className="object-cover" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
