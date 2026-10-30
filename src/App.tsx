import About from "./components/About";
import Awards from "./components/Awards";
import Artwork from "./components/Artwork";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Publications from "./components/Publications";
import Service from "./components/Service";
import { profile } from "./data/content";

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-zinc-900 antialiased dark:bg-zinc-950 dark:text-zinc-100">
      <Header />
      <main className="mx-auto max-w-5xl px-4 sm:px-6">
        <Hero />
        <About />
        <Experience />
        <Publications />
        <Awards />
        <Service />
        <Artwork />
      </main>
      <footer className="border-t border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto flex max-w-5xl flex-col gap-2 px-4 py-8 text-sm text-zinc-500 sm:flex-row sm:justify-between sm:px-6 dark:text-zinc-400">
          <p>
            © {new Date().getFullYear()} {profile.name}
          </p>
          <a href={`mailto:${profile.email}`} className="hover:text-zinc-900 dark:hover:text-white">
            {profile.email}
          </a>
        </div>
      </footer>
    </div>
  );
}
