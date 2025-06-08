// // app/profile/ClientProfile.tsx (клієнтський)
// "use client";

// import Link from "next/link";

// export default function ClientProfile() {
//   const handleError = () => {
//     throw new Error("Помилка на Profile!");
//   };

//   return (
//     <div style={{ padding: "2rem" }}>
//       <h1 className="text-4xl font-extrabold text-blue-800 mb-4 drop-shadow-sm">
//         Profile
//       </h1>

//       <button
//         onClick={handleError}
//         style={{
//           padding: "0.5rem 1rem",
//           backgroundColor: "#ff4d4f",
//           color: "white",
//           border: "none",
//           borderRadius: "6px",
//           cursor: "pointer",
//           fontWeight: "bold",
//           marginTop: "1rem",
//           marginRight: "1rem",
//         }}
//       >
//         Викликати помилку
//       </button>

//       <Link href="/">
//         <button
//           style={{
//             padding: "0.5rem 1rem",
//             backgroundColor: "#2563eb",
//             color: "white",
//             border: "none",
//             borderRadius: "6px",
//             cursor: "pointer",
//             fontWeight: "bold",
//             marginTop: "1rem",
//           }}
//         >
//           Повернутись на головну
//         </button>
//       </Link>
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import Link from "next/link";

export default function ClientProfile() {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    throw new Error("Помилка на Profile!");
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h1 className="text-4xl font-extrabold text-blue-800 mb-4 drop-shadow-sm">
        Profile
      </h1>

      <button
        onClick={() => setHasError(true)}
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
            backgroundColor: "#2563eb",
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
