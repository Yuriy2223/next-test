"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function DashboardPage() {
  const [loading, setLoading] = useState(true);
  const [shouldThrow, setShouldThrow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (shouldThrow) {
    // Помилка для Error Boundary
    throw new Error("Помилка на Dashboard!");
  }

  if (loading) {
    return (
      <div className="p-8 text-muted-foreground">Завантаження кабінету...</div>
    );
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h1 className="text-4xl font-extrabold text-blue-800 mb-4 drop-shadow-sm">
        Dashboard
      </h1>

      <button
        onClick={() => setShouldThrow(true)}
        style={{
          padding: "0.5rem 1rem",
          backgroundColor: "#ff4d4f",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          fontWeight: "bold",
          marginTop: "1rem",
          marginRight: "1rem",
        }}
      >
        Викликати помилку
      </button>

      <Link href="/">
        <button
          style={{
            padding: "0.5rem 1rem",
            backgroundColor: "#2563eb", // Синя кнопка
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontWeight: "bold",
            marginTop: "1rem",
          }}
        >
          Повернутись на головну
        </button>
      </Link>
    </div>
  );
}
