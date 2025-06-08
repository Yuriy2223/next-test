"use client";

import { useState, useEffect } from "react";

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState<"light" | "dark">("light");

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

  return (
    <>
      <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="fixed top-4 right-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        aria-label="Перемкнути тему"
      >
        {theme === "light" ? "Темна тема" : "Світла тема"}
      </button>
      {children}
    </>
  );
}
