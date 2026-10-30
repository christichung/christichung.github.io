import { service } from "../data/content";
import Section from "./Section";

export default function Service() {
  return (
    <Section id="service" title="Service">
      <ul className="space-y-5">
        {service.map((item) => (
          <li
            key={`${item.role}-${item.org}`}
            className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
          >
            <div>
              <p className="text-sm font-medium">{item.role}</p>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">{item.org}</p>
            </div>
            <p className="shrink-0 text-sm text-zinc-500 tabular-nums dark:text-zinc-400">{item.period}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
