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
//     <div className="min-h-screen flex items-center justify-center bg-red-50">
//       <div className="p-8 text-center bg-white border border-red-400 shadow-lg rounded-md max-w-md w-full">
//         <h2 className="text-2xl font-bold text-red-600 mb-2">
//           🚨 Помилка на дашборді
//         </h2>
//         <p className="text-red-500 text-sm mb-6">{error.message}</p>
//         <button
//           onClick={reset}
//           className="px-4 py-2 bg-red-600 text-white font-semibold rounded hover:bg-red-700 transition"
//         >
//           Спробувати ще раз
//         </button>
//       </div>
//     </div>
//   );
// }

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
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-red-900 via-black to-red-800 text-white px-6">
//       <div className="relative bg-gray-900 bg-opacity-90 rounded-3xl shadow-2xl max-w-md w-full p-10 text-center overflow-hidden">
//         {/* Анімований іконний блок */}
//         <div className="mx-auto mb-6 w-24 h-24 rounded-full bg-red-700 shadow-[0_0_20px_6px_rgba(239,68,68,0.7)] flex items-center justify-center animate-pulse">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-16 w-16 text-white drop-shadow-lg"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//             strokeWidth={2}
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M6 18L18 6M6 6l12 12"
//             />
//           </svg>
//         </div>

//         <h2 className="text-4xl font-extrabold mb-4 animate-fadeInDown">
//           Щось пішло не так
//         </h2>
//         <p className="text-red-400 mb-10 text-lg leading-relaxed animate-fadeInUp">
//           {error.message || "Помилка на дашборді. Будь ласка, спробуйте знову."}
//         </p>

//         <button
//           onClick={reset}
//           className="relative inline-block px-10 py-3 font-semibold rounded-full
//                      bg-gradient-to-r from-red-600 via-red-700 to-red-800
//                      shadow-[0_0_20px_4px_rgba(239,68,68,0.8)]
//                      hover:shadow-[0_0_30px_8px_rgba(255,99,99,0.9)]
//                      transition-all duration-300 ease-in-out
//                      active:scale-95 active:brightness-90
//                      focus:outline-none focus:ring-4 focus:ring-red-600/80
//                      text-white select-none"
//           aria-label="Спробувати ще раз"
//         >
//           Спробувати ще раз
//         </button>

//         {/* Анімації CSS */}
//         <style jsx>{`
//           @keyframes fadeInDown {
//             0% {
//               opacity: 0;
//               transform: translateY(-20px);
//             }
//             100% {
//               opacity: 1;
//               transform: translateY(0);
//             }
//           }
//           @keyframes fadeInUp {
//             0% {
//               opacity: 0;
//               transform: translateY(20px);
//             }
//             100% {
//               opacity: 1;
//               transform: translateY(0);
//             }
//           }
//           .animate-fadeInDown {
//             animation: fadeInDown 0.6s ease forwards;
//           }
//           .animate-fadeInUp {
//             animation: fadeInUp 0.6s ease forwards 0.2s;
//           }
//         `}</style>
//       </div>
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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-red-100 via-red-50 to-red-100 dark:from-red-900 dark:via-black dark:to-red-900 px-6">
      <div className="relative bg-white dark:bg-gray-900 rounded-3xl shadow-2xl max-w-md w-full p-10 text-center">
        {/* Іконка */}
        <div className="mx-auto mb-6 w-24 h-24 rounded-full bg-red-600 dark:bg-red-700 shadow-lg flex items-center justify-center animate-pulse">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>

        <h2 className="text-3xl font-extrabold mb-4 text-red-700 dark:text-red-400">
          🚨 Помилка на дашборді
        </h2>
        <p className="text-red-600 dark:text-red-300 mb-10 text-lg leading-relaxed">
          {error.message || "Сталася помилка. Спробуйте будь ласка ще раз."}
        </p>

        <button
          onClick={reset}
          className="inline-block px-10 py-3 font-semibold rounded-full
                     bg-gradient-to-r from-red-600 via-red-700 to-red-800
                     shadow-lg shadow-red-500/50
                     hover:shadow-red-600/70
                     focus:outline-none focus:ring-4 focus:ring-red-600/70
                     active:scale-95 active:brightness-90
                     transition-transform duration-150
                     text-white select-none"
          aria-label="Спробувати ще раз"
        >
          Спробувати ще раз
        </button>
      </div>
    </div>
  );
}
