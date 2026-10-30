import { useState } from "react";
import { profile } from "../data/content";
import { MenuIcon } from "./Icons";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#publications", label: "Publications" },
  { href: "#awards", label: "Awards" },
  { href: "#service", label: "Service" },
  { href: "#artwork", label: "Artwork" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/70 bg-white/80 backdrop-blur dark:border-zinc-800/70 dark:bg-zinc-950/80">
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="font-semibold tracking-tight">
          {profile.name}
        </a>

        <ul className="hidden items-center gap-6 text-sm text-zinc-600 lg:flex dark:text-zinc-400">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="transition-colors hover:text-zinc-950 dark:hover:text-white">
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="-mr-2 p-2 text-zinc-700 lg:hidden dark:text-zinc-300"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <MenuIcon open={open} />
        </button>
      </nav>

      {open && (
        <ul className="border-t border-zinc-200 px-4 py-3 lg:hidden dark:border-zinc-800">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="block py-2 text-zinc-700 dark:text-zinc-300"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
