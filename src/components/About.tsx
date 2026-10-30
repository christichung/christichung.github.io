import { education, profile, skills } from "../data/content";
import Section from "./Section";

export default function About() {
  return (
    <Section id="about" title="About">
      <div className="space-y-4 text-zinc-700 leading-relaxed dark:text-zinc-300">
        {profile.about.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <h3 className="mt-10 mb-3 text-sm font-semibold">Education</h3>
      <ul className="space-y-3">
        {education.map((item) => (
          <li
            key={item.school}
            className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
          >
            <div>
              <p className="text-sm font-medium">{item.school}</p>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">{item.degree}</p>
            </div>
            <p className="shrink-0 text-sm text-zinc-500 tabular-nums dark:text-zinc-400">{item.period}</p>
          </li>
        ))}
      </ul>

      <h3 className="mt-10 mb-3 text-sm font-semibold">Skills</h3>
      <dl className="space-y-3">
        {skills.map((group) => (
          <div key={group.label} className="flex flex-col gap-1.5 sm:flex-row sm:gap-4">
            <dt className="w-32 shrink-0 pt-1 text-sm text-zinc-500 dark:text-zinc-400">{group.label}</dt>
            <dd className="flex flex-wrap gap-1.5">
              {group.items.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-zinc-100 px-2.5 py-1 text-xs text-zinc-700 dark:bg-zinc-900 dark:text-zinc-300"
                >
                  {skill}
                </span>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
