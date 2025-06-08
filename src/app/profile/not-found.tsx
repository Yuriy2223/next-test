import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center bg-background px-4">
      <h1 className="text-6xl font-extrabold text-red-500 drop-shadow-sm">
        404
      </h1>

      <p className="mt-4 text-xl font-medium text-muted-foreground">
        На жаль, цю сторінку не знайдено
      </p>

      <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 max-w-md">
        Можливо, вона була видалена або ви перейшли за неправильним посиланням.
      </p>

      <Link
        href="/profile"
        className="mt-6 inline-block px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded shadow transition"
      >
        Повернутись на головну
      </Link>
    </div>
  );
}
