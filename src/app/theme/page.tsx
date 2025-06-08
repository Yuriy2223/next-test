import Link from "next/link";

export default function themePage() {
  return (
    <main className="flex flex-col items-center justify-center h-screen gap-6">
      <h1 className="text-5xl font-bold">Ласкаво просимо</h1>
      <p className="text-xl">Це сторінка з підтримкою темної і світлої теми.</p>
      <Link href="/">
        <button className="px-4 py-2 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 transition mb-4">
          Повернутись на головну
        </button>
      </Link>
    </main>
  );
}
