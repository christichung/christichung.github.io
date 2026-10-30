import { profile } from "../data/content";
import { ArrowIcon, BookIcon, GitHubIcon, LinkedInIcon, MailIcon, YouTubeIcon } from "./Icons";

const socials = [
  { href: `mailto:${profile.email}`, label: "Email", Icon: MailIcon },
  { href: profile.links.linkedin, label: "LinkedIn", Icon: LinkedInIcon },
  { href: profile.links.github, label: "GitHub", Icon: GitHubIcon },
  { href: profile.links.scholar, label: "Google Scholar", Icon: BookIcon },
  { href: profile.links.youtube, label: "YouTube talks", Icon: YouTubeIcon },
];

export default function Hero() {
  return (
    <div id="top" className="py-20 sm:py-28">
      <p className="mb-4 text-sm font-medium text-zinc-500 dark:text-zinc-400">{profile.location}</p>
      <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">{profile.name}</h1>
      <p className="mt-4 max-w-2xl text-lg text-zinc-600 sm:text-xl dark:text-zinc-400">
        Software engineer in the day, artist at night!
      </p>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <a
          href={profile.resume}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
        >
          View resume
          <ArrowIcon className="h-4 w-4" />
        </a>
        <div className="flex items-center gap-1">
          {socials.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noopener noreferrer"
              aria-label={label}
              title={label}
              className="rounded-full p-2.5 text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-white"
            >
              <Icon />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
