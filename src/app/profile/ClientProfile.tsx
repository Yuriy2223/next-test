"use client";

import { useState } from "react";
import Link from "next/link";
import ButtonError from "@/components/ButtonError";

export default function ClientProfile() {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    throw new Error("Помилка на Profile!");
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center
                 bg-[var(--background)] text-[var(--foreground)] transition-colors duration-500"
    >
      <div
        className="text-center p-8 shadow-md rounded-md
                      bg-white/90 dark:bg-gray-900/90
                      backdrop-blur-sm"
      >
        <h1 className="text-4xl font-extrabold text-blue-800 mb-6 drop-shadow-sm">
          Profile
        </h1>

        <button
          onClick={() => setHasError(true)}
          className="px-4 py-2 bg-red-500 text-white font-bold rounded-md hover:bg-red-600 transition mb-4 mr-2"
        >
          Викликати помилку
        </button>

        <Link href="/">
          <button className="px-4 py-2 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 transition mb-4">
            Повернутись на головну
          </button>
        </Link>

        <div className="mt-6">
          <ButtonError />
        </div>
      </div>
    </div>
  );
}
