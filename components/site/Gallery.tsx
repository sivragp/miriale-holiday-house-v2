import Image from "next/image";

// Galleria curata: zona giorno, cucine, 3 camere matrimoniali, 2 bagni,
// terrazza, giardino, panorama e qualche dettaglio.
const HOUSE_PHOTOS: { src: string; alt: string }[] = [
  { n: "house-02", alt: "zona giorno" },
  { n: "house-30", alt: "cucina" },
  { n: "house-10", alt: "cucina" },
  { n: "house-28", alt: "camera matrimoniale" },
  { n: "house-09", alt: "camera matrimoniale" },
  { n: "house-05", alt: "camera matrimoniale" },
  { n: "house-26", alt: "camera matrimoniale" },
  { n: "house-06", alt: "camera matrimoniale" },
  { n: "house-07", alt: "camera mansardata" },
  { n: "house-11", alt: "bagno" },
  { n: "house-12", alt: "bagno" },
  { n: "house-24", alt: "bagno" },
  { n: "house-20", alt: "bagno" },
  { n: "house-13", alt: "terrazza" },
  { n: "house-22", alt: "terrazza con vista" },
  { n: "house-14", alt: "panorama" },
  { n: "house-29", alt: "giardino" },
  { n: "house-31", alt: "giardino" },
  { n: "house-17", alt: "giardino" },
  { n: "house-23", alt: "ingresso" },
  { n: "house-19", alt: "colazione" },
  { n: "house-32", alt: "angolo cottura" },
  { n: "house-33", alt: "area caffè" },
  { n: "house-25", alt: "zona pranzo" },
].map(({ n, alt }) => ({
  src: `/images/house/${n}.jpg`,
  alt: `MiriAle Holiday House — ${alt}`,
}));

/** Galleria a griglia responsiva. Riusata da home (spoke /la-casa). */
export default function Gallery({
  photos = HOUSE_PHOTOS,
}: {
  photos?: { src: string; alt: string }[];
}) {
  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
      {photos.map((p) => (
        <div
          key={p.src}
          className="relative aspect-[4/3] overflow-hidden rounded-xl"
        >
          <Image
            src={p.src}
            alt={p.alt}
            fill
            sizes="(max-width: 768px) 50vw, 33vw"
            className="object-cover transition duration-700 hover:scale-[1.03]"
          />
        </div>
      ))}
    </div>
  );
}
