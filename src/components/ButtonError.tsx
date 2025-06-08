"use client";

import React, { useEffect, useState, useRef } from "react";
import clsx from "clsx";

export default function ButtonError(
  props: React.ButtonHTMLAttributes<HTMLButtonElement>
) {
  const [count, setCount] = useState(0);
  const [ripples, setRipples] = useState<
    { x: number; y: number; size: number; key: number }[]
  >([]);
  const rippleCount = useRef(0);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (count > 2) {
      throw new Error("Unexpected error");
    }
  }, [count]);

  const createRipple = (event: React.MouseEvent<HTMLButtonElement>) => {
    const rect = buttonRef.current?.getBoundingClientRect();
    if (!rect) return;

    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    rippleCount.current += 1;
    const newRipple = { x, y, size, key: rippleCount.current };

    setRipples((prev) => [...prev, newRipple]);

    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.key !== newRipple.key));
    }, 600);
  };

  return (
    <button
      {...props}
      ref={buttonRef}
      onClick={(e) => {
        createRipple(e);
        setCount((prev) => prev + 1);
        if (props.onClick) props.onClick(e);
      }}
      className={clsx(
        "relative overflow-hidden py-3 px-8 rounded-lg text-base font-semibold text-white cursor-pointer select-none",
        "bg-gradient-to-r from-red-500 via-pink-600 to-red-700",
        // "shadow-lg shadow-red-400/50",
        "hover:from-red-600 hover:via-pink-700 hover:to-red-800",
        "active:scale-95 active:shadow-red-600/70",
        "focus:outline-none focus:ring-4 focus:ring-red-400/60",
        "transition duration-300 ease-in-out",
        props.disabled &&
          "bg-gray-400 text-gray-200 cursor-not-allowed shadow-none hover:from-gray-400 hover:via-gray-400 hover:to-gray-400"
      )}
      aria-disabled={props.disabled}
    >
      <span
        className="absolute inset-0 rounded-lg
                   bg-red-600 opacity-40
                   animate-pulse
                   pointer-events-none"
        aria-hidden="true"
      />

      {ripples.map(({ x, y, size, key }) => (
        <span
          key={key}
          className="absolute rounded-full bg-white opacity-30 animate-ripple"
          style={{
            width: size,
            height: size,
            top: y,
            left: x,
            pointerEvents: "none",
          }}
        />
      ))}

      <span className="relative z-10">Button Error ({count})</span>
    </button>
  );
}
