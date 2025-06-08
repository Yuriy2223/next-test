// "use client";

// import { useEffect } from "react";

// export default function DashboardError({
//   error,
//   reset,
// }: {
//   error: Error;
//   reset: () => void;
// }) {
//   useEffect(() => {
//     console.error("📊 Dashboard Error:", error);
//   }, [error]);

//   return (
//     <div className="p-8 text-center">
//       <h2 className="text-xl font-bold text-red-600">Помилка на дашборді</h2>
//       <p className="text-gray-500 mt-2">{error.message}</p>
//       <button
//         onClick={() => reset()}
//         className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
//       >
//         Спробувати ще раз
//       </button>
//     </div>
//   );
// }

"use client";

import { useEffect } from "react";

export default function DashboardError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error("📊 Dashboard Error:", error);
  }, [error]);

  return (
    <div className="p-8 text-center">
      <h2 className="text-xl font-bold text-red-600">Помилка на дашборді</h2>
      <p className="text-gray-500 mt-2">{error.message}</p>
      <button
        onClick={() => reset()}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Спробувати ще раз
      </button>
    </div>
  );
}
