import { publications, profile, type Publication } from "../data/content";
import { ArrowIcon } from "./Icons";
import Section from "./Section";

const linkClass =
  "inline-flex items-center gap-1 text-xs font-medium text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white";

function PaperList({ papers }: { papers: Publication[] }) {
  return (
    <ul className="space-y-8">
      {papers.map((pub) => (
        <li key={pub.title}>
          <h4 className="font-semibold leading-snug">{pub.title}</h4>
          <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">{pub.authors}</p>
          <p className="mt-1 text-sm italic text-zinc-500 dark:text-zinc-400">
            {pub.venue}
            {pub.year && `, ${pub.year}`}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{pub.summary}</p>
          {(pub.url || pub.pdf) && (
            <div className="mt-2 flex gap-4">
              {pub.url && (
                <a href={pub.url} target="_blank" rel="noopener noreferrer" className={linkClass}>
                  Paper <ArrowIcon className="h-3 w-3" />
                </a>
              )}
              {pub.pdf && (
                <a href={pub.pdf} target="_blank" rel="noopener noreferrer" className={linkClass}>
                  PDF <ArrowIcon className="h-3 w-3" />
                </a>
              )}
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}

export default function Publications() {
  return (
    <Section id="publications" title="Publications">
      <PaperList papers={publications} />
      <a
        href={profile.links.scholar}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-10 inline-flex items-center gap-1.5 text-sm font-medium hover:underline hover:underline-offset-4"
      >
        View on Google Scholar <ArrowIcon />
      </a>
    </Section>
  );
}
