"use client";

import { useEffect } from "react";

export default function ProfileError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error("📊 Profile Error:", error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-red-50 dark:bg-red-900/40 transition-colors">
      <div className="p-10 text-center bg-white dark:bg-gray-800 border border-red-400 dark:border-red-600 rounded-lg max-w-md w-full shadow-lg shadow-red-300/40 dark:shadow-red-900/70">
        <h2 className="text-3xl font-extrabold text-red-700 dark:text-red-400 mb-4 drop-shadow-md">
          🚨 Помилка в профілі
        </h2>
        <p className="text-red-600 dark:text-red-300 text-base mb-8 leading-relaxed">
          {error.message}
        </p>
        <button
          onClick={reset}
          className="px-6 py-3 bg-red-600 dark:bg-red-700 text-white font-semibold rounded-lg shadow-md
                     hover:bg-red-700 dark:hover:bg-red-800
                     active:scale-95 transition-transform duration-150 ease-in-out
                     focus:outline-none focus:ring-4 focus:ring-red-300 dark:focus:ring-red-500"
          aria-label="Спробувати ще раз"
        >
          Спробувати ще раз
        </button>
      </div>
    </div>
  );
}
