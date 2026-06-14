"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { id: "galleria", label: "Foto" },
  { id: "spazi", label: "La casa" },
  { id: "servizi", label: "Servizi" },
  { id: "recensioni", label: "Recensioni" },
  { id: "dove-siamo", label: "Posizione" },
];

/** Sub-navigazione sticky in stile Airbnb: ancore alle sezioni + sezione attiva. */
export default function SubNav() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    LINKS.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <div className="sticky top-[56px] z-30 hidden border-b border-line bg-paper/95 backdrop-blur md:block">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6">
        <nav className="flex gap-7">
          {LINKS.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={`border-b-2 py-3.5 text-sm transition ${
                active === l.id
                  ? "border-deep-brown font-medium text-deep-brown"
                  : "border-transparent text-warm-gray hover:text-deep-brown"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#prenota"
          className="rounded-full px-5 py-2 text-sm font-medium text-white transition hover:opacity-90"
          style={{ backgroundColor: "#0f3d4a" }}
        >
          Prenota
        </a>
      </div>
    </div>
  );
}
