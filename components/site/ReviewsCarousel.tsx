"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { type Review } from "@/lib/reviews";
import ReviewCard from "@/components/site/ReviewCard";
import { useLang, tr } from "@/components/site/LangProvider";

/** Carosello orizzontale di recensioni (scroll-snap + frecce), stile Booking. */
export default function ReviewsCarousel({ reviews }: { reviews: Review[] }) {
  const { lang } = useLang();
  const track = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: number) => {
    const el = track.current;
    if (!el) return;
    el.scrollBy({ left: dir * Math.round(el.clientWidth * 0.9), behavior: "smooth" });
  };

  return (
    <div className="relative">
      <div
        ref={track}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {reviews.map((r, i) => (
          <div
            key={r.name + i}
            className="w-[85%] flex-shrink-0 snap-start sm:w-[48%] lg:w-[31.5%]"
          >
            <ReviewCard r={r} />
          </div>
        ))}
      </div>

      {/* frecce */}
      <button
        type="button"
        aria-label={tr(lang, { it: "Recensioni precedenti", en: "Previous reviews" })}
        onClick={() => scrollBy(-1)}
        className="absolute -left-3 top-[42%] z-10 hidden h-10 w-10 items-center justify-center rounded-full border border-line bg-paper text-deep-brown shadow-md transition hover:bg-cream md:flex"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        aria-label={tr(lang, { it: "Recensioni successive", en: "Next reviews" })}
        onClick={() => scrollBy(1)}
        className="absolute -right-3 top-[42%] z-10 hidden h-10 w-10 items-center justify-center rounded-full border border-line bg-paper text-deep-brown shadow-md transition hover:bg-cream md:flex"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
  );
}
