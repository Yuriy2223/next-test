"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import ButtonError from "@/components/ButtonError";

export default function DashboardPage() {
  const [loading, setLoading] = useState(true);
  const [shouldThrow, setShouldThrow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (shouldThrow) {
    throw new Error("Помилка на Dashboard!");
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[var(--background)] text-[var(--foreground)] px-4">
        <div className="w-full max-w-md rounded-2xl border border-[var(--border)] bg-[var(--card)] shadow-2xl p-8 text-center animate-fade-in">
          <h2 className="text-xl font-medium mb-6 text-[var(--muted-foreground)] animate-pulse">
            Завантаження дашборду...
          </h2>
          <div className="relative w-32 h-2 mx-auto bg-[var(--muted)] rounded-full overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--foreground)]/20 to-transparent animate-[shimmer_1.5s_infinite]"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[var(--background)] text-[var(--foreground)] px-4 py-12">
      <h1 className="text-4xl font-extrabold mb-6 drop-shadow text-[var(--primary)]">
        Dashboard
      </h1>

      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <button
          onClick={() => setShouldThrow(true)}
          className="px-5 py-2.5 rounded font-semibold bg-[var(--destructive)] text-white hover:bg-[var(--destructive-hover)] transition"
        >
          Викликати помилку
        </button>

        <Link href="/" passHref>
          <button className="px-5 py-2.5 rounded font-semibold bg-[var(--primary)] text-white hover:bg-[var(--primary-hover)] transition">
            Повернутись на головну
          </button>
        </Link>
      </div>

      <ButtonError />
    </div>
  );
}
