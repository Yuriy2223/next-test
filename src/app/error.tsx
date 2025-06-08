"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error("🌍 Global Error:", error);
  }, [error]);

  return (
    <html>
      <body>
        <div className="h-screen flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold text-red-600">Упс! Помилка</h1>
          <p className="mt-2 text-gray-600">{error.message}</p>
          <button
            onClick={() => reset()}
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
          >
            Оновити
          </button>
        </div>
      </body>
    </html>
  );
}
