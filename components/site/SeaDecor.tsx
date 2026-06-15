/** Decorazioni marine (stella marina + conchiglia) usate nelle CTA, come nei mockup. */

export function Starfish({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <path
        d="M50 6c2 0 3.6 1.3 4.4 3.2l9.5 23.3 25.1 1.9c4.6.3 6.5 6 3 9l-19.2 16 6.1 24.4c1.1 4.5-3.8 8-7.7 5.6L50 79.6 28.7 92.9c-3.9 2.4-8.8-1.1-7.7-5.6l6.1-24.4-19.2-16c-3.5-3-1.6-8.7 3-9l25.1-1.9 9.5-23.3C46.4 7.3 48 6 50 6Z"
        fill="#e7c9a3"
        stroke="#d9b384"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <g fill="#cf9f6f" opacity="0.8">
        <circle cx="50" cy="24" r="1.7" /><circle cx="50" cy="34" r="1.7" /><circle cx="50" cy="44" r="1.7" />
        <circle cx="36" cy="54" r="1.5" /><circle cx="44" cy="58" r="1.5" /><circle cx="56" cy="58" r="1.5" /><circle cx="64" cy="54" r="1.5" />
        <circle cx="40" cy="70" r="1.4" /><circle cx="60" cy="70" r="1.4" />
      </g>
    </svg>
  );
}

export function Shell({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <path
        d="M50 88C30 88 12 70 12 46 12 26 28 12 50 12s38 14 38 34c0 24-18 42-38 42Z"
        fill="#f4ede2"
        stroke="#e2d3bf"
        strokeWidth="2.5"
      />
      <g stroke="#e2d3bf" strokeWidth="2" fill="none" strokeLinecap="round">
        <path d="M50 84V20" />
        <path d="M50 84C42 60 36 40 34 22" />
        <path d="M50 84C58 60 64 40 66 22" />
        <path d="M50 84C46 58 42 36 42 18" />
        <path d="M50 84C54 58 58 36 58 18" />
      </g>
      <path d="M44 14a6 5 0 0 1 12 0c0 2-3 4-6 4s-6-2-6-4Z" fill="#ece0cf" stroke="#e2d3bf" strokeWidth="2" />
    </svg>
  );
}

/** Stella + conchiglia abbinate, ancorate in basso a sinistra come nei mockup CTA. */
export function SeaDecor({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none select-none ${className}`} aria-hidden="true">
      <Starfish className="absolute bottom-3 left-4 h-16 w-16 -rotate-12 drop-shadow-sm sm:h-20 sm:w-20" />
      <Shell className="absolute bottom-2 left-20 h-12 w-12 rotate-6 sm:left-24 sm:h-14 sm:w-14" />
    </div>
  );
}
