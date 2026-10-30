import { awards } from "../data/content";
import Section from "./Section";

export default function Awards() {
  return (
    <Section id="awards" title="Awards & Honours">
      <ul className="divide-y divide-zinc-100 dark:divide-zinc-900">
        {awards.map((award) => (
          <li key={award.title} className="flex items-baseline justify-between gap-6 py-2.5 first:pt-0">
            <span className="text-sm text-zinc-700 dark:text-zinc-300">
              {award.url ? (
                <a
                  href={award.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-900 dark:decoration-zinc-600 dark:hover:decoration-white"
                >
                  {award.title}
                </a>
              ) : (
                award.title
              )}
            </span>
            <span className="shrink-0 text-sm text-zinc-500 tabular-nums dark:text-zinc-400">{award.year}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
