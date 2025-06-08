"use client";

import { useEffect, useState } from "react";
import Loading from "./loading";
import Link from "next/link";

export default function HomePage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loading />;

  return (
    <main className="flex items-center justify-center h-screen text-center flex-col gap-4">
      <div>
        <h1 className="text-4xl font-bold">Головна сторінка</h1>
        <p className="mt-2 text-gray-600">Ласкаво просимо!</p>
      </div>

      <div className="flex gap-4 mt-6">
        <Link href="/dashboard">
          <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
            Dashboard
          </button>
        </Link>
        <Link href="/profile">
          <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition">
            Profile
          </button>
        </Link>
      </div>
    </main>
  );
}
