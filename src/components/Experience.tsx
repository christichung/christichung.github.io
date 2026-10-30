import { experience } from "../data/content";
import Section from "./Section";

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className="space-y-10">
        {experience.map((job) => (
          <li key={`${job.company}-${job.role}`}>
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="font-semibold">
                {job.role} <span className="font-normal text-zinc-500 dark:text-zinc-400">· {job.company}</span>
              </h3>
              <p className="shrink-0 text-sm text-zinc-500 tabular-nums dark:text-zinc-400">{job.period}</p>
            </div>
            <ul className="mt-3 space-y-1.5 text-zinc-600 dark:text-zinc-400">
              {job.points.map((point) => (
                <li key={point} className="flex gap-3 text-sm leading-relaxed">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-zinc-400" />
                  {point}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  );
}
