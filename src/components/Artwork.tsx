import { artwork, exhibitions } from "../data/content";
import Section from "./Section";

export default function Artwork() {
  return (
    <Section id="artwork" title="Artwork">
      <p className="mb-8 text-zinc-600 dark:text-zinc-400">Digital and acrylic paintings.</p>
      <div className="columns-2 gap-3 sm:gap-5 lg:columns-3">
        {artwork.map((piece) => (
          <figure key={piece.image} className="group mb-6 break-inside-avoid">
            <a
              href={piece.image}
              target="_blank"
              rel="noopener noreferrer"
              className="block overflow-hidden rounded-lg bg-zinc-100 dark:bg-zinc-900"
            >
              <img
                src={piece.image}
                alt={`${piece.title}, ${piece.medium.toLowerCase()}, ${piece.year}`}
                width={piece.width}
                height={piece.height}
                loading="lazy"
                className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </a>
            <figcaption className="mt-2">
              <p className="text-sm font-medium">{piece.title}</p>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                {piece.medium}
                {piece.size && `, ${piece.size}`} · {piece.year}
              </p>
            </figcaption>
          </figure>
        ))}
      </div>

      {exhibitions.length > 0 && (
        <>
          <h3 className="mt-12 mb-4 text-sm font-semibold">Group Exhibitions</h3>
          <ul className="divide-y divide-zinc-100 dark:divide-zinc-900">
            {exhibitions.map((ex) => (
              <li key={ex.title} className="flex items-baseline justify-between gap-6 py-2.5 first:pt-0">
                <div className="text-sm">
                  <span className="font-medium">{ex.title}</span>
                  {ex.host && <span className="text-zinc-500 dark:text-zinc-400"> · {ex.host}</span>}
                </div>
                <span className="shrink-0 text-sm text-zinc-500 tabular-nums dark:text-zinc-400">{ex.year}</span>
              </li>
            ))}
          </ul>
        </>
      )}
    </Section>
  );
}
