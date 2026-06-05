import Image from "next/image";

const HOUSE_PHOTOS = [
  "house-02",
  "house-04",
  "house-05",
  "house-06",
  "house-07",
  "house-09",
  "house-11",
  "house-12",
  "house-13",
  "house-14",
  "house-17",
  "house-19",
  "house-21",
  "house-22",
  "house-23",
  "house-24",
  "house-25",
  "house-27",
].map((n) => ({
  src: `/images/house/${n}.jpg`,
  alt: "MiriAle Holiday House — ambiente",
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
