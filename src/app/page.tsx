"use client";

import { useEffect, useState } from "react";
import Loading from "./loading";
import Link from "next/link";
import ButtonError from "@/components/ButtonError";

export default function HomePage() {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setTheme(prefersDark ? "dark" : "light");
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  if (loading) return <Loading />;

  return (
    <main
      className="flex flex-col items-center justify-center min-h-screen px-8 py-12
                 text-center select-none
                 bg-[var(--background)] text-[var(--foreground)] transition-colors duration-500"
    >
      <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="absolute top-4 right-4 px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition"
        aria-label="Перемкнути тему"
      >
        {theme === "light" ? "Темна тема" : "Світла тема"}
      </button>

      <h1 className="text-6xl font-extrabold tracking-tight drop-shadow-lg animate-fadeInDown">
        Ласкаво просимо на{" "}
        <span className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-400 bg-clip-text text-transparent">
          Головну
        </span>{" "}
        сторінку
      </h1>

      <p className="mt-6 max-w-xl mx-auto text-lg leading-relaxed animate-fadeInUp">
        Оберіть один із розділів нижче, щоб почати свою подорож.
      </p>

      <nav className="flex flex-wrap justify-center gap-6 mt-12 animate-fadeInUp">
        <Link href="/dashboard" passHref>
          <button
            type="button"
            className="relative px-8 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500
                       text-white font-semibold shadow-lg hover:shadow-xl transition
                       focus:outline-none focus:ring-4 focus:ring-cyan-300
                       active:scale-95 transform-gpu motion-reduce:transform-none"
          >
            Dashboard
          </button>
        </Link>

        <Link href="/profile" passHref>
          <button
            type="button"
            className="relative px-8 py-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-400
                       text-white font-semibold shadow-lg hover:shadow-xl transition
                       focus:outline-none focus:ring-4 focus:ring-emerald-300
                       active:scale-95 transform-gpu motion-reduce:transform-none"
          >
            Profile
          </button>
        </Link>

        <ButtonError />
      </nav>
    </main>
  );
}
