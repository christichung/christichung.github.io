import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
}

export default function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="border-t border-zinc-200 py-16 sm:py-20 dark:border-zinc-800">
      <div className="grid gap-8 md:grid-cols-[180px_1fr] md:gap-12">
        <h2 className="text-sm font-semibold tracking-widest text-zinc-500 uppercase dark:text-zinc-400">
          {title}
        </h2>
        <div>{children}</div>
      </div>
    </section>
  );
}
